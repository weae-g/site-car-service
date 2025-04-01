import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ServiceMap from './pages/ServiceMap';
import RepairForm from './pages/RepairForm';
import ServiceList from './pages/ServiceList';
import ServiceDetails from './pages/ServiceDetails';
import AdminDashboard from './pages/AdminDashboard';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import SocialButtons from './components/SocialButtons';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <HelmetProvider>
      <AuthProvider>
        <Router>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/map" element={<ServiceMap />} />
                <Route path="/repair" element={<RepairForm />} />
                <Route path="/services" element={<ServiceList />} />
                <Route path="/services/:id" element={<ServiceDetails />} />
                <Route path="/admin" element={<AdminDashboard />} />
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <SocialButtons />
            <Footer />
          </div>
        </Router>
      </AuthProvider>
    </HelmetProvider>
  );
}

export default App;