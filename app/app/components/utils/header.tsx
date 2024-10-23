import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { Translations } from './types'

interface Header {
  translations: Translations
  urlData: string
}

const Header: React.FC<Header> = ({ translations, urlData }) => {
  const headerTitleLine1: string[] = (translations.header_title_line_1 ?? '').split('-')
  const headerTitleLine2: string[] = (translations.header_title_line_2 ?? '').split('-')
  const headerTitleLine3: string[] = (translations.header_title_line_3 ?? '').split('-')

  return (
    <header className="pt-4">
      <div className="flex justify-between mb-16">
        <Link href={`/` + urlData}>
          <div className="flex">
            <Image
              src="images/ico-hologram.png"
              alt="Logo"
              width={36}
              height={36}
              className="flex-1 w-[36px] h-[36px]"
              priority={true}
            />
            <p className="flex-1 text-hologram-color font-semibold text-2xl pt-1 pl-4">Hologram</p>
          </div>
        </Link>
        <div>
          <Link href="https://github.com/2060-io" target="_blank">
            <Image
              src="images/logo-github.svg"
              alt="Logo-gitHub"
              width={36}
              height={36}
              id="logo-github-light"
              className="w-[36] h-[36] transition duration-300 ease-in-out hover:scale-110"
              priority={false}
            />
            <Image
              src="images/logo-github-white.svg"
              alt="Logo-gitHub"
              width={36}
              height={36}
              id="logo-github-black"
              className="w-[36] h-[36] transition duration-300 ease-in-out hover:scale-110"
              priority={false}
            />
          </Link>
        </div>
      </div>
      <div className="mb-6 mt-3 text-2xl md:text-5xl lg:text-5xl font-semibold">
        <p className="md:mb-2 lg:mb-3 xl:mb-3">
          <span className="text-hologram-color">{headerTitleLine1[0]}</span>
          &nbsp;{headerTitleLine1[1]}
          <span className="text-hologram-color">{translations.dot}</span>
        </p>
        <p className="md:mb-2 lg:mb-3 xl:mb-3">
          <span className="text-hologram-color">{headerTitleLine2[0]}</span>
          &nbsp;{headerTitleLine2[1]}
          <span className="text-hologram-color">{translations.dot}</span>
        </p>
        <p>
          <span className="text-hologram-color">{headerTitleLine3[0]}</span>
          &nbsp;{headerTitleLine3[1]}
          <span className="text-hologram-color">{translations.dot}</span>
        </p>
      </div>
    </header>
  )
}

export default Header
