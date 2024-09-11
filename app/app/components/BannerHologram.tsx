'use client'

import Image from 'next/image';

const BannerHologram = () => {
	return (
		<div className="p-2 flex justify-around dark:bg-indigo-300 bg-indigo-100">
			<Image
				src="images/ico-hologram.svg"
				alt='hologram'
				width={32}
				height={32}
			/>
			<p>
				<span
					className='font-semibold'
				>
					Hologram Messaging
				</span>
				<br />
				Chat & Verificable Credentials
			</p>
			<button
				className="bg-indigo-500 text-white font-semibold h-8 w-20 px-4 mt-2 rounded-lg">
				Get
			</button>
		</div>
	)
}

export default BannerHologram;