'use client'

import Image from 'next/image'
import React from 'react'

import { Translations } from '../utils'

interface SectionStandardsBuilt {
  translations: Translations
}

const SectionStandardsBuilt: React.FC<SectionStandardsBuilt> = ({ translations }) => {
  return (
    <div>
      <div className="-mx-6 bg-zinc-300 w-aut align-middle text-xl text-center text-gray-500 py-8 px-3">
        {translations.built_standar}
      </div>
      <div
        className="
					-mx-6
					flex
					flex-wrap
					justify-center
					bg-white
				"
      >
        <Image
          src={'images/logo-didcomm.svg'}
          alt="didcomm"
          width={171}
          height={42}
          priority={false}
          className="w-1/2 2xl:w-1/6 xl:w-1/6 lg:w-1/6 p-10"
        />
        <Image
          src={'images/logo-w3c.svg'}
          alt="w3c"
          width={88}
          height={42}
          priority={false}
          className="w-1/2 2xl:w-1/6 xl:w-1/6 lg:w-1/6 p-10"
        />
        <Image
          src={'images/logo-credo.svg'}
          alt="credo"
          width={59}
          height={42}
          priority={false}
          className="w-1/2 2xl:w-1/6 xl:w-1/6 lg:w-1/6 p-10"
        />
        <Image
          src={'images/logo-dif.svg'}
          alt="dif"
          width={124}
          height={42}
          priority={false}
          className="w-1/2 2xl:w-1/6 xl:w-1/6 lg:w-1/6 p-10"
        />
        <Image
          src={'images/logo-trust-over-ip.svg'}
          alt="trust over ip"
          width={110}
          height={46}
          priority={false}
          className="w-1/2 2xl:w-1/6 xl:w-1/6 lg:w-1/6 p-10"
        />
        <Image
          src={'images/logo-open-wallet.svg'}
          alt="open wallet"
          width={180}
          height={46}
          priority={false}
          className="w-1/2 2xl:w-1/6 xl:w-1/6 lg:w-1/6 p-10"
        />
      </div>
    </div>
  )
}

export default SectionStandardsBuilt
