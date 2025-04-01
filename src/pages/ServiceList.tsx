import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Star, MapPin } from 'lucide-react';

const services = [
  {
    id: 1,
    name: 'Автосервис "Мастер"',
    address: 'ул. Декабристов, 183, Казань',
    rating: 4.8,
    reviewCount: 156,
    image: 'https://images.unsplash.com/photo-1613214150384-277d56f2edd0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'Профессиональный автосервис с современным оборудованием и опытными мастерами.',
    services: ['Диагностика', 'Ремонт двигателя', 'Кузовной ремонт']
  },
  {
    id: 2,
    name: 'СТО "Автопрофи"',
    address: 'ул. Чистопольская, 62, Казань',
    rating: 4.6,
    reviewCount: 98,
    image: 'https://images.unsplash.com/photo-1562595410-5e0c8d0b0f8e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'Специализированный техцентр по ремонту европейских автомобилей.',
    services: ['Компьютерная диагностика', 'Ремонт АКПП', 'Замена масла']
  }
];

const ServiceList = () => {
  return (
    <>
      <Helmet>
        <title>Автосервисы Казани | Список проверенных автосервисов</title>
        <meta name="description" content="Список лучших автосервисов Казани с отзывами, рейтингами и описанием услуг. Выберите надежный автосервис рядом с вами." />
        <meta name="keywords" content="автосервис Казань, ремонт авто Казань, СТО Казань, автомастерская" />
      </Helmet>
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            Автосервисы Казани
          </h1>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.id}
                to={`/services/${service.id}`}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-2">{service.name}</h2>
                  <div className="flex items-center mb-2">
                    <MapPin className="h-5 w-5 text-gray-400 mr-1" />
                    <span className="text-gray-600 text-sm">{service.address}</span>
                  </div>
                  <div className="flex items-center mb-4">
                    <Star className="h-5 w-5 text-yellow-400" />
                    <span className="ml-1 text-gray-700">{service.rating}</span>
                    <span className="ml-1 text-gray-500">({service.reviewCount} отзывов)</span>
                  </div>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.services.map((item, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceList;