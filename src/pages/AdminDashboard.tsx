import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Helmet } from 'react-helmet-async';
import { Plus, X } from 'lucide-react';

interface RepairRequest {
  id: string;
  name: string;
  phone: string;
  carModel: string;
  year: string;
  description: string;
  status: 'new' | 'in_progress' | 'completed' | 'cancelled';
  createdAt: string;
  serviceId?: number;
}

interface Service {
  id: number;
  name: string;
}

const mockServices: Service[] = [
  { id: 1, name: "Автосервис 'Мастер'" },
  { id: 2, name: "СТО 'Автопрофи'" }
];

const mockRequests: RepairRequest[] = [
  {
    id: '1',
    name: 'Иван Петров',
    phone: '+7 (900) 123-45-67',
    carModel: 'Toyota Camry',
    year: '2019',
    description: 'Стук в двигателе',
    status: 'new',
    createdAt: '2024-03-20T10:30:00',
    serviceId: 1
  },
  {
    id: '2',
    name: 'Анна Сидорова',
    phone: '+7 (900) 234-56-78',
    carModel: 'BMW X5',
    year: '2020',
    description: 'Замена масла',
    status: 'in_progress',
    createdAt: '2024-03-19T15:45:00',
    serviceId: 2
  }
];

const AdminDashboard = () => {
  const { isAdmin, logout } = useAuth();
  const navigate = useNavigate();
  const [requests, setRequests] = useState<RepairRequest[]>(mockRequests);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newRequest, setNewRequest] = useState({
    name: '',
    phone: '',
    carModel: '',
    year: '',
    description: '',
    serviceId: ''
  });

  if (!isAdmin) {
    navigate('/login');
    return null;
  }

  const handleStatusChange = (requestId: string, newStatus: RepairRequest['status']) => {
    setRequests(requests.map(request =>
      request.id === requestId ? { ...request, status: newStatus } : request
    ));
  };

  const handleNewRequest = (e: React.FormEvent) => {
    e.preventDefault();
    const newId = (requests.length + 1).toString();
    setRequests([...requests, {
      id: newId,
      ...newRequest,
      serviceId: parseInt(newRequest.serviceId),
      status: 'new',
      createdAt: new Date().toISOString()
    } as RepairRequest]);
    setIsModalOpen(false);
    setNewRequest({
      name: '',
      phone: '',
      carModel: '',
      year: '',
      description: '',
      serviceId: ''
    });
  };

  const getStatusColor = (status: RepairRequest['status']) => {
    const colors = {
      new: 'bg-blue-100 text-blue-800',
      in_progress: 'bg-yellow-100 text-yellow-800',
      completed: 'bg-green-100 text-green-800',
      cancelled: 'bg-red-100 text-red-800'
    };
    return colors[status];
  };

  const getStatusText = (status: RepairRequest['status']) => {
    const texts = {
      new: 'Новая',
      in_progress: 'В работе',
      completed: 'Завершена',
      cancelled: 'Отменена'
    };
    return texts[status];
  };

  return (
    <>
      <Helmet>
        <title>Панель администратора | Управление заявками</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div className="bg-gray-50 min-h-screen py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">
              Панель администратора
            </h1>
            <div className="flex space-x-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition flex items-center"
              >
                <Plus className="h-5 w-5 mr-2" />
                Новая заявка
              </button>
              <button
                onClick={() => logout()}
                className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition"
              >
                Выйти
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="px-4 py-5 sm:px-6">
              <h2 className="text-xl font-semibold">Заявки на ремонт</h2>
            </div>
            <div className="border-t border-gray-200">
              <ul className="divide-y divide-gray-200">
                {requests.map((request) => (
                  <li key={request.id} className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-medium">{request.name}</h3>
                        <p className="text-gray-500">{request.phone}</p>
                      </div>
                      <div className="flex items-center space-x-4">
                        <span className={`px-3 py-1 rounded-full text-sm ${getStatusColor(request.status)}`}>
                          {getStatusText(request.status)}
                        </span>
                        <select
                          value={request.status}
                          onChange={(e) => handleStatusChange(request.id, e.target.value as RepairRequest['status'])}
                          className="border rounded-md px-3 py-1"
                        >
                          <option value="new">Новая</option>
                          <option value="in_progress">В работе</option>
                          <option value="completed">Завершена</option>
                          <option value="cancelled">Отменена</option>
                        </select>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <p className="text-sm text-gray-500">Автомобиль</p>
                        <p>{request.carModel} ({request.year})</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Описание проблемы</p>
                        <p>{request.description}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Назначен сервис</p>
                        <p>{mockServices.find(s => s.id === request.serviceId)?.name || 'Не назначен'}</p>
                      </div>
                    </div>
                    <div className="mt-4 text-sm text-gray-500">
                      Создана: {new Date(request.createdAt).toLocaleString()}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for new request */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">Новая заявка</h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <form onSubmit={handleNewRequest}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Имя клиента</label>
                  <input
                    type="text"
                    required
                    value={newRequest.name}
                    onChange={(e) => setNewRequest({...newRequest, name: e.target.value})}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Телефон</label>
                  <input
                    type="tel"
                    required
                    value={newRequest.phone}
                    onChange={(e) => setNewRequest({...newRequest, phone: e.target.value})}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Модель автомобиля</label>
                  <input
                    type="text"
                    required
                    value={newRequest.carModel}
                    onChange={(e) => setNewRequest({...newRequest, carModel: e.target.value})}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Год выпуска</label>
                  <input
                    type="text"
                    required
                    value={newRequest.year}
                    onChange={(e) => setNewRequest({...newRequest, year: e.target.value})}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Описание проблемы</label>
                  <textarea
                    required
                    value={newRequest.description}
                    onChange={(e) => setNewRequest({...newRequest, description: e.target.value})}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    rows={3}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Назначить сервис</label>
                  <select
                    required
                    value={newRequest.serviceId}
                    onChange={(e) => setNewRequest({...newRequest, serviceId: e.target.value})}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  >
                    <option value="">Выберите сервис</option>
                    {mockServices.map(service => (
                      <option key={service.id} value={service.id}>
                        {service.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="mt-6 flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                >
                  Отмена
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Создать заявку
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default AdminDashboard;