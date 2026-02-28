import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import SplashScreen from './components/SplashScreen';
import ChatWidget from './components/ChatWidget';
import AnimatedBackground from './components/AnimatedBackground';

// Pages
import Dashboard from './pages/Dashboard';
import PermitForm from './pages/PermitForm';
import Status from './pages/Status';
import Grievance from './pages/Grievance';
import AdminDashboard from './pages/AdminDashboard';
import Login from './pages/Login';

function AppContent() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false); // You can manage this with your auth context
  const location = useLocation();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Check if current route is login page
  const isLoginPage = location.pathname === '/login';

  return (
    <div className="min-h-screen text-white">
      <AnimatedBackground />
      
      {!isLoginPage && <Navbar toggleSidebar={toggleSidebar} />}
      {!isLoginPage && <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />}
      
      <main 
        className={`transition-all duration-300 ${
          !isLoginPage && isSidebarOpen ? 'ml-72' : !isLoginPage ? 'ml-24' : ''
        }`}
      >
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Dashboard />} />
            <Route path="/permit" element={<PermitForm />} />
            <Route path="/status" element={<Status />} />
            <Route path="/grievance" element={<Grievance />} />
            <Route path="/admin" element={<AdminDashboard />} />
          </Routes>
        </AnimatePresence>
      </main>

      {!isLoginPage && <ChatWidget />}
    </div>
  );
}

function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <Router>
      {showSplash ? (
        <SplashScreen onComplete={() => setShowSplash(false)} />
      ) : (
        <AppContent />
      )}
    </Router>
  );
}

export default App;