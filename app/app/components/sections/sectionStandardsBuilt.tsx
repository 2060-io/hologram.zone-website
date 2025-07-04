'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { Translations } from '../utils'

interface SectionStandardsBuilt {
  translations: Translations
}

const logos = [
  {
    href: 'https://identity.foundation/didcomm-messaging/spec/',
    src: '/images/logo-didcomm.svg',
    alt: 'didcomm',
    width: 204,
    height: 50,
  },
  {
    href: 'https://www.w3.org/',
    src: '/images/logo-w3c.svg',
    alt: 'w3c',
    width: 105,
    height: 50,
  },
  {
    href: 'https://github.com/openwallet-foundation/credo-ts',
    src: '/images/logo-credo.svg',
    alt: 'credo',
    width: 71,
    height: 50,
  },
  {
    href: 'https://identity.foundation/',
    src: '/images/logo-dif.png',
    alt: 'dif',
    width: 148,
    height: 50,
  },
  {
    href: 'https://trustoverip.org/',
    src: '/images/logo-trust-over-ip.svg',
    alt: 'trust over ip',
    width: 120,
    height: 50,
  },
  {
    href: 'https://openwallet.foundation/',
    src: '/images/logo-open-wallet.svg',
    alt: 'open wallet',
    width: 196,
    height: 50,
  },
]

const SectionStandardsBuilt: React.FC<SectionStandardsBuilt> = ({ translations }) => {
  return (
    <div>
      <div className="bg-zinc-300">
        <div className="container mx-auto 2xl:px-28 xl:px-28 lg:px-28 px-6  w-aut align-middle text-xl text-center text-gray-500 py-8">
          {translations.built_standar}
        </div>
      </div>

      <div className="bg-white min-h-[150px] flex items-center">
        <div
          className="container mx-auto 2xl:px-28 xl:px-28 lg:px-28 px-6 py-8 
                        grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-14 2xl:gap-20
                        lg:flex lg:flex-wrap lg:justify-center lg:items-center"
        >
          {logos.map(logo => (
            <Link key={logo.alt} href={logo.href} target="_blank" rel="noopener noreferrer">
              <div className="h-[50px]  flex items-center justify-center">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  className="h-[50px] w-auto object-contain transition-transform duration-300 ease-in-out hover:scale-110"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SectionStandardsBuilt
