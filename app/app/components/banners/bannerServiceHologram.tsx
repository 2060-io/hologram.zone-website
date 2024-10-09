'use client'

import Image from 'next/image'
import React from 'react'

import { Translations } from '../utils'

const BannerServiceHologram: React.FC<{ translations: Translations, imageUrl: string, label: string }> = ({ translations, imageUrl, label }) => {
  return (
    <div>
      <div className="-mx-6 w-aut align-middle text-xl text-center py-8 px-3">
        {translations.invited_to.split('{word}').map((part, index, array) => (
          <React.Fragment key={index}>
            {part}
            {index < array.length - 1 && <strong>{translations.invited_word}</strong>}
          </React.Fragment>
        ))}
      </div>
      <div className="flex items-center justify-center py-4 bg-white">
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
          <div className="text-xl font-semibold">
            {label}
          </div>
        </div>
      </div>
      {/* <section className="mx-auto my-8 md:my-12 lg:my-16 flex flex-col items-center justify-center text-center bg-white p-6 max-w-lg">
        <Image
          src={imageUrl ?? './default.svg'}
          alt="QR Code"
          className="w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64"
          width={30}
          height={30}
          priority={false}
        />
      </section> */}
    </div>
  );
};

export default BannerServiceHologram
