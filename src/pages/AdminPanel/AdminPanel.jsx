import { useState, useEffect } from "react";
import axios from "axios";
import "./AdminPanel.css";
import layer from "../../assets/layer.png";
import Navbar from "@/components/Navbar/Navbar";
import MapComponent from "@/components/MapComponent/MapComponent";

function AdminPanel() {
    const [reports, setReports] = useState([]);
    const [loading, setLoading] = useState(false);
    const [selectedLocation, setSelectedLocation] = useState(null);

    useEffect(() => {
        const fetchReports = async () => {
            try {
                const response = await axios.get("http://localhost:5000/api/reports/all");
                setReports(response.data);
            } catch (err) {
                alert("Failed to fetch reports");
            }
        };

        fetchReports();
    }, []);

    const updateStatus = async (id, status) => {
        setLoading(true);
        try {
            await axios.put(`http://localhost:5000/api/admin/update-status/${id}`, { status });
            alert(`Report ${status}`);
            setReports(reports.map((report) => (report._id === id ? { ...report, status } : report)));
        } catch (err) {
            alert("Failed to update status");
        } finally {
            setLoading(false);
        }
    };

    const deleteReport = async (id) => {
        if (!window.confirm("Are you sure you want to delete this report?")) return;

        setLoading(true);
        try {
            await axios.delete(`http://localhost:5000/api/admin/delete/${id}`);
            alert("Report deleted");
            setReports(reports.filter((report) => report._id !== id)); // Remove from state
        } catch (err) {
            alert("Failed to delete report");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="admin-panel">
            <Navbar />
            <img src={layer} alt="" className="background" />
            <div className="admin-container">
                <h2 className="admin-title">Admin Panel</h2>
                <table className="admin-table">
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Image</th>
                            <th>Location</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {reports.map((report) => (
                            <tr key={report._id}>
                                <td>{report.description}</td>
                                <td>
                                    <img
                                        src={`http://localhost:5000/uploads/${report.image}`}
                                        alt="Report"
                                        className="report-image"
                                    />
                                </td>
                                <td>
                                <button 
                                    onClick={() => setSelectedLocation(report.location)}
                                    className="btn-map"
                                >
                                    Show on Map
                                </button>
                            </td>
                                <td>{report.status || "Pending"}</td>
                                <td>
                                    {loading ? (
                                        <span>Loading...</span>
                                    ) : (
                                        <>
                                            <button
                                                onClick={() => updateStatus(report._id, "approved")}
                                                className="btn-approve"
                                            >
                                                Approve
                                            </button>
                                            <button
                                                onClick={() => updateStatus(report._id, "rejected")}
                                                className="btn-reject"
                                            >
                                                Reject
                                            </button>
                                            <button
                                                onClick={() => deleteReport(report._id)}
                                                className="btn-delete"
                                            >
                                                Delete
                                            </button>
                                        </>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {selectedLocation && (
                <div className="map-container">
                    <h3>Location Map</h3>
                    <MapComponent 
                        latitude={selectedLocation.latitude} 
                        longitude={selectedLocation.longitude} 
                    />
                    <button onClick={() => setSelectedLocation(null)}>Close</button>
                </div>
            )}
            </div>
        </div>
    );
}

export default AdminPanel;
