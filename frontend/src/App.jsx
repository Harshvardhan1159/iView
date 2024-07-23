import { Routes, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './pages/LandingPage/LandingPage';
import Navbar from './components/common/Navbar/Navbar';
import InterviewInterface from './pages/InterviewInterface/InterviewInterface';
import WhiteboardContainer from './components/Whiteboard/WhiteboardContainer';
import CodeApp from './components/CodeEditor/CodeApp';
import UserDashboard from './pages/Dashboard/UserDashBoard/UserDashboard';
import UserProfile from './pages/Profile/UserProfile/UserProfile';
import UserSignup from './pages/SignUp/UserSignup/UserSignup';
import SelectRole from './pages/SelectRole/SelectRole';
import PageNotFound from './pages/PageNotFound/PageNotFound';
// import SocketComponent from './socket/SocketComponentTest';

function App() {
  return (
    <>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/selectrole" element={<SelectRole />} />
        <Route path="/user/dashboard" element={<UserDashboard />} />
        <Route path="/user/signup" element={<UserSignup />} />
        <Route path="/interview/room/:roomID" element={<InterviewInterface room={true} />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
