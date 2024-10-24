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
    <div
      className="
				mt-10
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
        px-6
        flex
				flex-col
				2xl:flex-row
				xl:flex-row
				lg:flex-row
				2xl:justify-center
				xl:justify-center
				lg:justify-center
        mx-auto
        "
      >
        <div className="2xl:flex-1 xl:flex-1 lg:flex-1 font-semibold text-hologram-color text-2xl text-center lg:text-right xl:text-right 2xl:text-right py-4">
          {translations.download_msg}
        </div>
        <div className="flex 2xl:flex-1 xl:flex-1 lg:flex-1 justify-center mb-5 2xl:pr-40 xl:pr-40 lg:pr-40">
          <Link
            href="https://play.google.com/store/apps/details?id=io.twentysixty.mobileagent.m&pcampaignid=web_share"
            target="_blank"
            className="mx-5"
          >
            <Image
              src="images/play-store-button.svg"
              alt="hologram"
              width={177}
              height={56}
              className="min-w-[177px] min-h-[56px] transition duration-300 ease-in-out hover:scale-110"
              priority={false}
            />
          </Link>
          <Link
            href="https://apps.apple.com/co/app/hologram-messaging/id6474701855"
            target="_blank"
            className="mx-5"
          >
            <Image
              src="images/app-store-button.svg"
              alt="hologram"
              width={177}
              height={56}
              className="min-w-[177px] min-h-[56px] transition duration-300 ease-in-out hover:scale-110"
              priority={false}
            />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default BannerDownloadHolomgram
