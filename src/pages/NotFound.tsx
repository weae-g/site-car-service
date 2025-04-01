import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Home, AlertTriangle } from 'lucide-react';

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Страница не найдена | Автосервис в Казани</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div className="min-h-[70vh] flex items-center justify-center bg-gray-50">
        <div className="text-center px-4">
          <div className="flex justify-center mb-6">
            <AlertTriangle className="h-24 w-24 text-red-500" />
          </div>
          <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
          <h2 className="text-3xl font-semibold text-gray-700 mb-6">
            Страница не найдена
          </h2>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            К сожалению, запрашиваемая страница не существует или была перемещена.
          </p>
          <Link
            to="/"
            className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
          >
            <Home className="h-5 w-5" />
            <span>Вернуться на главную</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;