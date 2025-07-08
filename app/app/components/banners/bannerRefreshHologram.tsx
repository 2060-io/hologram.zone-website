'use client'

import Image from 'next/image'
import Link from 'next/link'

import { Translations } from '../utils'
import React, { useEffect, useState } from 'react'

const BannerRefreshHologram: React.FC<{ translations: Translations; imageUrl: string; label: string }> = ({
  translations,
  imageUrl,
  label,
}) => {
  const [platform, setPlatform] = useState<'ios' | 'android' | 'unknown'>('unknown')
  const userAgent = navigator.userAgent.toLowerCase()

  useEffect(() => {
    detectPlatform()
  }, [])
  const detectPlatform = () => {
    if (/iphone|ipad|ipod/.test(userAgent)) {
      setPlatform('ios')
      return
    }
    if (/android/.test(userAgent)) {
      setPlatform('android')
      return
    }
    setPlatform('unknown')
  }
  return (
    <div className="flex flex-col items-center p-8 space-y-6">
      <div className="bg-[#737395] rounded-xl p-6 w-full max-w-sm text-center flex flex-col items-center shadow-md relative overflow-hidden">
        <div className="flex-shrink-0 ">
          <Image
            src={imageUrl}
            alt="service"
            width={72}
            height={72}
            priority={false}
            className=" scale-150 opacity-20 pt-6 "
          />
        </div>
        {/* Watermark Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center opacity-20 text-lg text-black leading-5 pointer-events-none select-none whitespace-pre-wrap text-center mt-14">
          {`${label}  \n`.repeat(3)}
        </div>

        <div className="relative z-10 mb-4">
          <img
            src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-refresh' width='40' height='40' viewBox='0 0 24 24' stroke-width='1.5' stroke='white' fill='none' stroke-linecap='round' stroke-linejoin='round'><path stroke='none' d='M0 0h24v24H0z' fill='none'/><path d='M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4'/><path d='M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4'/></svg>"
            alt="Refresh Icon"
            className="h-16 w-16"
          />
        </div>

        {/* Refresh Message */}
        <p className="relative z-10 text-sm font-bold mt-2 text-white ">
          Refresh once Hologram is <br /> downloaded on your device
        </p>

        {/* Credential Status */}
        <p className="flex items-center justify-center font-normal text-[10px]  text-center pt-20">
          <Image
            src={'images/valid_credential.svg'}
            alt={'check'}
            width={16}
            height={16}
            className="mr-2 w-[22px] h-[22px] transition duration-300 ease-in-out hover:scale-110"
          />
          {translations.valid_credential.split(' ').slice(0, -1).join(' ') + '\u00A0'}
          <span className="text-[10px] font-bold leading-[10px] text-[#3EBDB6]">
            {translations.valid_credential.split(' ').pop()}
          </span>
        </p>
      </div>

      {/* Download Message */}
      <p className="text-[18px] text-white text-center">
        You need to download Hologram <br />
        to use the service.
      </p>

      {/* App Store Buttons */}
      <div className="flex space-x-4">
        {(platform === 'ios' || platform === 'unknown') && (
          <Link href="https://apps.apple.com/co/app/hologram-messaging/id6474701855" target="_blank">
            <Image
              src="images/app-store-button.svg"
              alt="hologram"
              width={177}
              height={55}
              className="pl-2 transition duration-300 ease-in-out hover:scale-110"
              priority={false}
            />
          </Link>
        )}
        {(platform === 'android' || platform === 'unknown') && (
          <Link
            href="https://play.google.com/store/apps/details?id=io.twentysixty.mobileagent.m&pcampaignid=web_share"
            target="_blank"
          >
            <Image
              src="images/play-store-button.svg"
              alt="hologram"
              width={177}
              height={55}
              className="pr-2 transition duration-300 ease-in-out hover:scale-110"
              priority={false}
            />
          </Link>
        )}
      </div>
    </div>
  )
}

export default BannerRefreshHologram
