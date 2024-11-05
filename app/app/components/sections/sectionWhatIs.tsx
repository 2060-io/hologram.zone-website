import Image from 'next/image'
import React from 'react'

import { Translations } from '../utils'

interface SectionWhatIs {
  translations: Translations
}

const SectionWhatIs: React.FC<SectionWhatIs> = ({ translations }) => {
  return (
    <section className="container mx-auto px-6 mt-16">
      <div className="flex flex-col 2xl:flex-row xl:flex-row lg:flex-row">
        <div className="flex-1 flex items-center justify-center">
          <Image
            src={'images/what-is-hologram.png'}
            alt={'what is hologram'}
            width={420}
            height={543.84}
            priority={true}
            id="image-what-is-hologram-light"
          />
          <Image
            src={'images/what-is-hologram-dark.png'}
            alt={'what is hologram'}
            width={420}
            height={543.84}
            priority={true}
            id="image-what-is-hologram-dark"
          />
        </div>
        <div className="flex-1 text-justify 2xl:px-20 xl:px-20 lg:px-20 order-1 2xl:order-2 xl:order-2 lg:order-2">
          <p
            className="
							mb-6
							2xl:pt-20
							xl:pt-20
							lg:pt-20
							font-semibold
							text-center
							2xl:text-left
							xl:text-left
							lg:text-left
							text-hologram-color
							text-4xl
							2xl:text-5xl
							xl:text-5xl
							lg:text-5xl"
          >
            {translations?.what_is_title}
          </p>
          <p className="mt-5 mb-10">{translations?.what_is}</p>
        </div>
      </div>
    </section>
  )
}

export default React.memo(SectionWhatIs)
