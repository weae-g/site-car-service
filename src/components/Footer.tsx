import React from 'react'
import { Phone, Mail, Instagram, Facebook } from 'lucide-react'

const Footer = () => {
	return (
		<footer className='bg-gray-800 text-white'>
			<div className='max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8'>
				<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
					<div>
						<h3 className='text-lg font-semibold mb-4'>Контакты</h3>
						<div className='space-y-2'>
							<a
								href='tel:+78001234567'
								className='flex items-center space-x-2 hover:text-blue-400'
							>
								<Phone className='h-5 w-5' />
								<span>+7 (986) 900-60-06</span>
							</a>
							<a
								href='mailto:mikato@duck.com'
								className='flex items-center space-x-2 hover:text-blue-400'
							>
								<Mail className='h-5 w-5' />
								<span>mikato@duck.com</span>
							</a>
						</div>
					</div>

					<div>
						<h3 className='text-lg font-semibold mb-4'>Социальные сети</h3>
						<div className='flex space-x-4'>
							<a href='#' className='hover:text-blue-400'>
								<Instagram className='h-6 w-6' />
							</a>
							<a href='#' className='hover:text-blue-400'>
								<Facebook className='h-6 w-6' />
							</a>
						</div>
					</div>

					<div>
						<h3 className='text-lg font-semibold mb-4'>О нас</h3>
						<p className='text-gray-300'>
							Мы помогаем автовладельцам найти надежный автосервис и получить
							качественный ремонт.
						</p>
					</div>
				</div>

				<div className='mt-8 pt-8 border-t border-gray-700 text-center text-gray-400'>
					<p>&copy; 2025 АвтоСервис. Все права защищены.</p>
				</div>
			</div>
		</footer>
	)
}

export default Footer
