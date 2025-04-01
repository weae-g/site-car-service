import React from 'react'
import { useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { Star, MapPin, Phone, Clock, ExternalLink } from 'lucide-react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'

const mockService = {
	id: 1,
	name: 'Автосервис "Мастер"',
	address: 'ул. Декабристов, 183, Казань',
	phone: '+7 (843) 123-45-67',
	rating: 4.8,
	reviewCount: 156,
	location: { lat: 55.7558, lng: 37.6173 },
	workingHours: '9:00 - 20:00',
	images: [
		'https://images.unsplash.com/photo-1613214150384-277d56f2edd0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
		'https://images.unsplash.com/photo-1562595410-5e0c8d0b0f8e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
	],
	description:
		'Профессиональный автосервис с современным оборудованием и опытными мастерами. Специализируемся на ремонте европейских и японских автомобилей.',
	services: [
		'Компьютерная диагностика',
		'Ремонт двигателя',
		'Кузовной ремонт',
		'Замена масла',
		'Ремонт АКПП',
		'Шиномонтаж',
	],
	reviews: [
		{
			id: 1,
			author: 'Александр',
			rating: 5,
			date: '2024-03-15',
			text: 'Отличный сервис! Быстро нашли и устранили проблему с двигателем.',
		},
		{
			id: 2,
			author: 'Елена',
			rating: 4,
			date: '2024-03-10',
			text: 'Хорошее обслуживание, приемлемые цены. Немного пришлось подождать.',
		},
	],
}

const ServiceDetails = () => {
	const { id } = useParams()
	const service = mockService // In real app, fetch by ID

	const mapContainerStyle = {
		width: '100%',
		height: '400px',
	}

	return (
		<>
			<Helmet>
				<title>{`${service.name} | Автосервис в Казани`}</title>
				<meta
					name='description'
					content={`${service.name} - профессиональный автосервис в Казани. ${service.description}`}
				/>
			</Helmet>
			<div className='bg-gray-50 py-12'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='bg-white rounded-lg shadow-lg overflow-hidden'>
						<div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-6'>
							{service.images.map((image, index) => (
								<img
									key={index}
									src={image}
									alt={`${service.name} - фото ${index + 1}`}
									className='w-full h-64 object-cover rounded-lg'
								/>
							))}
						</div>

						<div className='p-6'>
							<h1 className='text-3xl font-bold mb-4'>{service.name}</h1>

							<div className='flex items-center mb-4'>
								<Star className='h-6 w-6 text-yellow-400' />
								<span className='ml-2 text-lg font-semibold'>
									{service.rating}
								</span>
								<span className='ml-1 text-gray-600'>
									({service.reviewCount} отзывов)
								</span>
							</div>

							<div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-8'>
								<div className='space-y-4'>
									<div className='flex items-center'>
										<MapPin className='h-5 w-5 text-gray-400 mr-2' />
										<span>{service.address}</span>
									</div>
									<div className='flex items-center'>
										<Phone className='h-5 w-5 text-gray-400 mr-2' />
										<a
											href={`tel:${service.phone}`}
											className='text-blue-600 hover:text-blue-800'
										>
											{service.phone}
										</a>
									</div>
									<div className='flex items-center'>
										<Clock className='h-5 w-5 text-gray-400 mr-2' />
										<span>{service.workingHours}</span>
									</div>
								</div>

								<div>
									<h2 className='text-xl font-semibold mb-3'>Услуги</h2>
									<div className='grid grid-cols-2 gap-2'>
										{service.services.map((item, index) => (
											<div
												key={index}
												className='flex items-center text-gray-700'
											>
												<span className='w-2 h-2 bg-blue-500 rounded-full mr-2'></span>
												{item}
											</div>
										))}
									</div>
								</div>
							</div>

							<div className='mb-8'>
								<h2 className='text-xl font-semibold mb-4'>О сервисе</h2>
								<p className='text-gray-700'>{service.description}</p>
							</div>

							<div className='mb-8'>
								<h2 className='text-xl font-semibold mb-4'>Расположение</h2>
								<div className='rounded-lg overflow-hidden'>
									<LoadScript googleMapsApiKey='YOUR_GOOGLE_MAPS_API_KEY'>
										<GoogleMap
											mapContainerStyle={mapContainerStyle}
											center={service.location}
											zoom={15}
										>
											<Marker position={service.location} />
										</GoogleMap>
									</LoadScript>
									<a
										href={`https://www.google.com/maps?q=${service.location.lat},${service.location.lng}`}
										target='_blank'
										rel='noopener noreferrer'
										className='flex items-center justify-center py-2 bg-gray-100 text-gray-700 hover:bg-gray-200 transition'
									>
										<ExternalLink className='h-5 w-5 mr-2' />
										Открыть в Google Maps
									</a>
								</div>
							</div>

							<div>
								<h2 className='text-xl font-semibold mb-4'>Отзывы</h2>
								<div className='space-y-4'>
									{service.reviews.map(review => (
										<div key={review.id} className='border-b pb-4'>
											<div className='flex items-center justify-between mb-2'>
												<div className='flex items-center'>
													<span className='font-semibold mr-2'>
														{review.author}
													</span>
													<div className='flex'>
														{[...Array(review.rating)].map((_, i) => (
															<Star
																key={i}
																className='h-4 w-4 text-yellow-400'
															/>
														))}
													</div>
												</div>
												<span className='text-gray-500 text-sm'>
													{review.date}
												</span>
											</div>
											<p className='text-gray-700'>{review.text}</p>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default ServiceDetails
