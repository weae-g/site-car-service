import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Wrench, MapPin, FileText, User } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, isAdmin } = useAuth();
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path ? 'bg-blue-700' : '';
  };

  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Wrench className="h-8 w-8" />
            <span className="font-bold text-xl">АвтоСервис</span>
          </Link>
          
          <div className="hidden md:flex space-x-4">
            <Link 
              to="/services" 
              className={`flex items-center space-x-1 px-3 py-2 rounded-md hover:bg-blue-700 transition ${isActive('/services')}`}
            >
              <FileText className="h-5 w-5" />
              <span>Автосервисы</span>
            </Link>
            <Link 
              to="/map" 
              className={`flex items-center space-x-1 px-3 py-2 rounded-md hover:bg-blue-700 transition ${isActive('/map')}`}
            >
              <MapPin className="h-5 w-5" />
              <span>Карта сервисов</span>
            </Link>
            <Link 
              to="/repair" 
              className="bg-white text-blue-600 px-4 py-2 rounded-md hover:bg-blue-50 transition"
            >
              Оставить заявку
            </Link>
            {isAdmin ? (
              <Link 
                to="/admin" 
                className={`flex items-center space-x-1 px-3 py-2 rounded-md hover:bg-blue-700 transition ${isActive('/admin')}`}
              >
                <User className="h-5 w-5" />
                <span>Админ панель</span>
              </Link>
            ) : (
              <Link 
                to="/login" 
                className={`flex items-center space-x-1 px-3 py-2 rounded-md hover:bg-blue-700 transition ${isActive('/login')}`}
              >
                <User className="h-5 w-5" />
                <span>Войти</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;