'use client'

import Image from "next/image"
import { Translations } from '../../page';
import React from "react";

	interface BannerHologramMessaging {
	translatios: Translations
}

const BannerDownloadHolomgram: React.FC<BannerHologramMessaging> = ({translatios}) => {
	return (
		// <div className="p-2 flex justify-around dark:bg-indigo-300 bg-indigo-100">
		<div
			className="
				-mx-6
				mt-10
				w-auto
				p-2
				2xl:pt-5
				xl:pt-5
				lg:pt-5
				flex
				flex-col
				2xl:flex-row
				xl:flex-row
				lg:flex-row
				2xl:justify-center
				xl:justify-center
				lg:justify-center
				dark:bg-indigo-300
				bg-indigo-100"
			>
			<p className="flex-1 font-semibold text-hologram-color text-2xl text-center pt-2 mb-3">
				{translatios.download_msg}
			</p>
			<div className="flex 2xl:flex-1 xl:flex-1 lg:flex-1 justify-around mb-5 2xl:pr-40 xl:pr-40 lg:pr-40">
				<Image
					src="images/play-store-button.svg"
					alt='hologram'
					width={177}
					height={56}
					className='w-[177px] h-[56px]'
					priority={false}
				/>
				<Image
					src="images/app-store-button.svg"
					alt='hologram'
					width={177}
					height={56}
					className='w-[177px] h-[56px]'
					priority={false}
				/>
			</div>
		</div>
	)
}

export default BannerDownloadHolomgram