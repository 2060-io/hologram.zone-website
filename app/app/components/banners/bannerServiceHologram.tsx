'use client'

import Image from 'next/image'
import React from 'react'

import { Translations } from '../utils'

const BannerServiceHologram: React.FC<{ translations: Translations; imageUrl: string; label: string }> = ({
  translations,
  imageUrl,
  label,
}) => {
  return (
    <div>
      <div className="w-aut align-middle text-xl text-center py-8 px-3">
        {translations.invited_to.split('{word}').map((part, index, array) => (
          <React.Fragment key={index}>
            {part}
            {index < array.length - 1 && <strong>{translations.invited_word}</strong>}
          </React.Fragment>
        ))}
      </div>
      <div className="flex items-center justify-center py-4 bg-[#EAF8F7]">
        <div className="flex items-center space-x-4">
          <div className="flex-shrink-0">
            <Image
              src={imageUrl}
              alt="service"
              width={72}
              height={72}
              priority={false}
              className="p-2 transform transition duration-300 ease-in-out hover:scale-110"
            />
          </div>
          <div className="text-xl font-semibold">{label}</div>
        </div>
      </div>
    </div>
  )
}

export default BannerServiceHologram
