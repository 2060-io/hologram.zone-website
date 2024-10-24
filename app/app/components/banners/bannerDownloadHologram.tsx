'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { Translations } from '../utils'

interface BannerHologramMessaging {
  translations: Translations
}

const BannerDownloadHolomgram: React.FC<BannerHologramMessaging> = ({ translations }) => {
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
				dark:bg-indigo-300
				bg-indigo-100"
    >
      <div
        className="
        container
        mx-auto
        2xl:px-28
        xl:px-28
        lg:px-28
        px-6
        flex
				flex-col
				2xl:flex-row
				xl:flex-row
				lg:flex-row
				2xl:justify-center
				xl:justify-center
				lg:justify-center"
      >
        <p className="flex-1 font-semibold text-hologram-color text-2xl text-center pt-2 mb-3">
          {translations.download_msg}
        </p>
        <div className="flex 2xl:flex-1 xl:flex-1 lg:flex-1 justify-around mb-5 2xl:pr-40 xl:pr-40 lg:pr-40">
          <Link
            href="https://play.google.com/store/apps/details?id=io.twentysixty.mobileagent.m&pcampaignid=web_share"
            target="_blank"
          >
            <Image
              src="images/play-store-button.svg"
              alt="hologram"
              width={177}
              height={56}
              className="w-[177px] h-[56px] transition duration-300 ease-in-out hover:scale-110"
              priority={false}
            />
          </Link>
          <Link href="https://apps.apple.com/co/app/hologram-messaging/id6474701855" target="_blank">
            <Image
              src="images/app-store-button.svg"
              alt="hologram"
              width={177}
              height={56}
              className="w-[177px] h-[56px] transition duration-300 ease-in-out hover:scale-110"
              priority={false}
            />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default BannerDownloadHolomgram
