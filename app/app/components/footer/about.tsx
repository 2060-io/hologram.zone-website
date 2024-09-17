'use client'

import Image from 'next/image'
import React from 'react'

import { Translations } from '../utils'

interface About {
  translations: Translations
}

const About: React.FC<About> = ({ translations }) => {
  return (
    <div className="lg:p-4 lg:flex lg:space-x-4 lg:flex-1 items-center text-center text-gray-500">
      <div className="p-4 text-center justify-center">{translations.copy_right}</div>
      <div className="lg:mb-0 hidden lg:block">
        <Image src={'images/separation.svg'} alt="separation" width={1} height={42} />
      </div>
      <div className="p-4">
        <div className="flex space-x-4">
          <Image src={'images/ico-x.svg'} alt={'x'} width={26} height={26} className="flex-1" />
          <Image src={'images/ico-in.svg'} alt={'in'} width={26} height={26} className="flex-1" />
          <Image src={'images/ico-github.svg'} alt={'github'} width={26} height={26} className="flex-1" />
          <Image src={'images/ico-hologram.svg'} alt={'hologram'} width={26} height={26} className="flex-1" />
        </div>
      </div>
    </div>
  )
}

export default React.memo(About)
