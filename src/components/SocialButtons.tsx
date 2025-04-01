import React from 'react'
import { MessageCircle, Brackets as BrandWhatsapp } from 'lucide-react'

const SocialButtons = () => {
	return (
		<div className='fixed bottom-4 right-4 flex flex-col space-y-2 z-50'>
			<a
				href='https://t.me/weae_t'
				target='_blank'
				rel='noopener noreferrer'
				className='bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600 transition-colors'
			>
				<MessageCircle className='h-6 w-6' />
			</a>
			<a
				href='https://wa.me/79001234567'
				target='_blank'
				rel='noopener noreferrer'
				className='bg-green-500 text-white p-3 rounded-full hover:bg-green-600 transition-colors'
			>
				<BrandWhatsapp className='h-6 w-6' />
			</a>
		</div>
	)
}

export default SocialButtons
