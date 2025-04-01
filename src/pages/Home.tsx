import React from 'react';
import { Link } from 'react-router-dom';
import { Wrench, Car, Settings, Battery, File as Oil, Shield, MapPin, FileText } from 'lucide-react';

const Home = () => {
  const services = [
    {
      icon: <Wrench className="h-12 w-12 text-blue-500" />,
      title: 'Техническое обслуживание',
      description: 'Регулярное обслуживание вашего автомобиля для поддержания его в отличном состоянии'
    },
    {
      icon: <Car className="h-12 w-12 text-blue-500" />,
      title: 'Диагностика',
      description: 'Комплексная диагностика всех систем автомобиля с использованием современного оборудования'
    },
    {
      icon: <Settings className="h-12 w-12 text-blue-500" />,
      title: 'Ремонт двигателя',
      description: 'Профессиональный ремонт и обслуживание двигателей любой сложности'
    },
    {
      icon: <Battery className="h-12 w-12 text-blue-500" />,
      title: 'Электрика',
      description: 'Диагностика и ремонт электрических систем автомобиля'
    },
    {
      icon: <Oil className="h-12 w-12 text-blue-500" />,
      title: 'Замена масла',
      description: 'Замена масла и фильтров с использованием качественных материалов'
    },
    {
      icon: <Shield className="h-12 w-12 text-blue-500" />,
      title: 'Гарантия',
      description: 'Гарантия на все виды работ и запчасти'
    }
  ];

  const navigationButtons = [
    {
      to: "/services",
      icon: <FileText className="h-6 w-6" />,
      text: "Список автосервисов",
      description: "Найдите ближайший автосервис"
    },
    {
      to: "/map",
      icon: <MapPin className="h-6 w-6" />,
      text: "Карта сервисов",
      description: "Посмотрите все сервисы на карте"
    },
    {
      to: "/repair",
      icon: <Wrench className="h-6 w-6" />,
      text: "Оставить заявку",
      description: "Запишитесь на ремонт онлайн"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-[600px] bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1487754180451-c456f719a1fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Профессиональный ремонт автомобилей
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Доверьте свой автомобиль профессионалам
            </p>
            <Link
              to="/repair"
              className="bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition"
            >
              Оставить заявку
            </Link>
          </div>
        </div>
      </section>

      {/* Navigation Buttons */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {navigationButtons.map((button, index) => (
              <Link
                key={index}
                to={button.to}
                className="flex flex-col items-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition duration-300"
              >
                <div className="bg-blue-100 p-4 rounded-full mb-4">
                  {button.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{button.text}</h3>
                <p className="text-gray-600 text-center">{button.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Наши услуги</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Готовы начать ремонт?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Оставьте заявку прямо сейчас и получите консультацию специалиста
          </p>
          <Link
            to="/repair"
            className="bg-white text-blue-600 px-8 py-3 rounded-md text-lg font-semibold hover:bg-blue-50 transition"
          >
            Оставить заявку
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;