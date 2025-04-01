import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { Star, MapPin, Phone, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Service {
  id: number;
  position: { lat: number; lng: number };
  title: string;
  address: string;
  phone: string;
  rating: number;
  reviewCount: number;
  workingHours: string;
  image: string;
  services: string[];
}

const services: Service[] = [
  {
    id: 1,
    position: { lat: 55.7858, lng: 49.1233 },
    title: "Автосервис 'Мастер'",
    address: "ул. Декабристов, 183, Казань",
    phone: "+7 (843) 123-45-67",
    rating: 4.8,
    reviewCount: 156,
    workingHours: "9:00 - 20:00",
    image: "https://images.unsplash.com/photo-1613214149099-792346b0b1e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    services: ["Диагностика", "Ремонт двигателя", "Кузовной ремонт"]
  },
  {
    id: 2,
    position: { lat: 55.7917, lng: 49.1678 },
    title: "СТО 'Автопрофи'",
    address: "ул. Чистопольская, 62, Казань",
    phone: "+7 (843) 234-56-78",
    rating: 4.6,
    reviewCount: 98,
    workingHours: "8:00 - 22:00",
    image: "https://images.unsplash.com/photo-1562595410-5e0c8d0b0f8e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    services: ["Компьютерная диагностика", "Ремонт АКПП", "Замена масла"]
  }
];

const ServiceMap = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const mapContainerStyle = {
    width: '100%',
    height: '700px'
  };

  const center = {
    lat: 55.7887,
    lng: 49.1221 // Centered on Kazan
  };

  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Карта автосервисов Казани</h1>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              center={center}
              zoom={12}
            >
              {services.map((service) => (
                <Marker
                  key={service.id}
                  position={service.position}
                  onClick={() => setSelectedService(service)}
                />
              ))}

              {selectedService && (
                <InfoWindow
                  position={selectedService.position}
                  onCloseClick={() => setSelectedService(null)}
                >
                  <div className="max-w-sm">
                    <img
                      src={selectedService.image}
                      alt={selectedService.title}
                      className="w-full h-40 object-cover rounded-t-lg"
                    />
                    <div className="p-4">
                      <h2 className="text-xl font-semibold mb-2">
                        {selectedService.title}
                      </h2>
                      
                      <div className="flex items-center mb-2">
                        <Star className="h-5 w-5 text-yellow-400" />
                        <span className="ml-1 font-semibold">{selectedService.rating}</span>
                        <span className="text-gray-600 ml-1">
                          ({selectedService.reviewCount} отзывов)
                        </span>
                      </div>

                      <div className="space-y-2 text-sm">
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 text-gray-400 mr-2" />
                          <span>{selectedService.address}</span>
                        </div>
                        <div className="flex items-center">
                          <Phone className="h-4 w-4 text-gray-400 mr-2" />
                          <a href={`tel:${selectedService.phone}`} className="text-blue-600 hover:text-blue-800">
                            {selectedService.phone}
                          </a>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 text-gray-400 mr-2" />
                          <span>{selectedService.workingHours}</span>
                        </div>
                      </div>

                      <div className="mt-3">
                        <h3 className="font-semibold mb-2">Услуги:</h3>
                        <div className="flex flex-wrap gap-2">
                          {selectedService.services.map((service, index) => (
                            <span
                              key={index}
                              className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs"
                            >
                              {service}
                            </span>
                          ))}
                        </div>
                      </div>

                      <Link
                        to={`/services/${selectedService.id}`}
                        className="mt-4 block text-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                      >
                        Подробнее
                      </Link>
                    </div>
                  </div>
                </InfoWindow>
              )}
            </GoogleMap>
          </LoadScript>
        </div>
      </div>
    </div>
  );
};

export default ServiceMap;