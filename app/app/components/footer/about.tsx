'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { Translations } from '../utils'

interface About {
  translations: Translations
  urlData: string
}

const About: React.FC<About> = ({ translations, urlData }) => {
  return (
    <div
      className="
        lg:p-4
        lg:flex
        lg:flex-row-reverse
        order-2
        lg:order-1
        xl:order-1
        2xl:order-1
        lg:space-x-4
        lg:flex-1
        items-center
        text-gray-500"
    >
      <div className="p-4 mt-2">
        <div className="flex justify-center space-x-7 lg:space-x-2 xl:space-x-4 2xl:space-x-4">
          <Link href="https://www.linkedin.com/company/2060-io">
            <Image
              src={'images/ico-x.svg'}
              alt={'x'}
              width={30}
              height={30}
              className="min-w-[30px] min-h-[30px] transition duration-300 ease-in-out hover:scale-110"
            />
          </Link>
          <Link href="https://www.linkedin.com/company/2060-io">
            <Image
              src={'images/ico-in.svg'}
              alt={'in'}
              width={30}
              height={30}
              className="min-w-[30px] min-h-[30px] transition duration-300 ease-in-out hover:scale-110"
            />
          </Link>
          <Link href="https://github.com/2060-io">
            <Image
              src={'images/ico-github.svg'}
              alt={'github'}
              width={30}
              height={30}
              className="min-w-[30px] min-h-[30px] transition duration-300 ease-in-out hover:scale-110"
            />
          </Link>
          <Link href={`/` + urlData}>
            <Image
              src={'images/ico-hologram.png'}
              alt={'hologram'}
              width={30}
              height={30}
              className="min-w-[30px] min-h-[30px] transition duration-300 ease-in-out hover:scale-110"
            />
          </Link>
        </div>
      </div>
      <div className="lg:mb-0 hidden lg:block lg:pr-5">
        <Image
          src={'images/separation.svg'}
          alt="separation"
          width={2}
          height={42}
          className="min-w-[3] min-h-[42]"
        />
      </div>
      <div className="p-4 text-center justify-center">{translations.copy_right}</div>
    </div>
  )
}

export default React.memo(About)
