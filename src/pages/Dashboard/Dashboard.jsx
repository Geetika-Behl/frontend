import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet';
import axios from 'axios';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';
import bulb from '../../assets/bulb.png'

function Dashboard() {
    const [reports, setReports] = useState([]);
    const [zones, setZones] = useState([]); // Stores zones with development levels

      const navigate = useNavigate();

    useEffect(() => {
        const fetchReports = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/reports/all');
                setReports(response.data);

                // Generate zones (for simplicity, randomize development status)
                const zoneData = response.data.map((report) => ({
                    lat: report.location.latitude,
                    lng: report.location.longitude,
                    development: Math.floor(Math.random() * 3), // 0: Green, 1: Yellow, 2: Red
                }));

                setZones(zoneData);
            } catch (err) {
                alert('Failed to fetch reports');
            }
        };

        fetchReports();
    }, []);

    // Colors for zones
    const zoneColors = ['green', 'yellow', 'red'];

    return (< div  >
        <img src={bulb} alt="" className='background'/>
        <Navbar />
    <div className="dashboard-container glass">
        <div className='dash-nav'><button className='nav-sign dash-report' onClick={() => navigate('/report')}>Report Your Area</button>
        <button className='nav-sign dash-admin' onClick={() => navigate('/admin')}>Admin Pannel</button></div>
        
            <h2 className="dashboard-title">EcoMap</h2>
            <MapContainer
                center={[28.7041, 77.1025]} // Default: Delhi
                zoom={12}
                className="dashboard-map"
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; OpenStreetMap contributors"
                />

                {/* Markers for reports */}
                {reports.map((report) => (
                    <Marker
                        key={report._id}
                        position={[report.location.latitude, report.location.longitude]}
                    >
                        <Popup>
                            <div className="popup-content">
                                <h3 className="popup-title">{report.description}</h3>
                                <img
                                    src={`http://localhost:5000/uploads/${report.image}`}
                                    alt="Report"
                                    className="popup-image"
                                />
                                <p className="popup-status">Status: Pending</p>
                            </div>
                        </Popup>
                    </Marker>
                ))}

                {/* Circles for zones */}
                {zones.map((zone, index) => (
                    <Circle
                        key={index}
                        center={[zone.lat, zone.lng]}
                        radius={500} // 500 meters
                        pathOptions={{ color: zoneColors[zone.development], fillOpacity: 0.4 }}
                    />
                ))}
            </MapContainer>
        </div>
        <Footer />
    </div>
        
    );
}

export default Dashboard;
