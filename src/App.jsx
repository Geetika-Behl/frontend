import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import ReportSubmission from './pages/ReportSubmission/ReportSubmission';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard/Dashboard';
import AdminPanel from './pages/AdminPanel/AdminPanel';
import Leaderboard from './pages/Leaderboard/Leaderboard';
import Chatbot from './pages/Chatbot/Chatbot';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/report" element={<ReportSubmission />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path='/chatbot' element={<Chatbot />}/>
      </Routes>
    </div>
  );
}

export default App;
