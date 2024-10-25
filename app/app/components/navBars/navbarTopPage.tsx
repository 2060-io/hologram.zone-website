import Link from 'next/link'
import React from 'react'

import { Translations } from '../utils'

interface NavBarTopPage {
  translations: Translations
  urlParams: URLSearchParams | null
}

const NavBarTopPage: React.FC<NavBarTopPage> = ({ translations, urlParams }) => {
  const urlData = (urlParams: URLSearchParams | null): string => {
    if (!urlParams) {
      return ''
    }

    return urlParams.get('oob')
      ? `/?oob=${urlParams.get('oob')}`
      : urlParams.get('_oob')
        ? `/?_oob=${urlParams.get('_oob')}`
        : ''
  }

  return (
    <div
      className="
        container
        mx-auto
        2xl:px-28
        xl:px-28
        lg:px-28
        px-6
        lg:py-4
        py-2
        lg:flex
        lg:space-x-4
        lg:flex-1
        items-center
        text-center"
    >
      <nav className="justify-center w-[100%]">
        <div className="flex justify-center h-10">
          <div className="lg:flex-1 w-3/4"></div>
          <div className="lg:flex-1  w-1/4 text-right lg:text-lg xl:text-lg 2xl:text-lg font-medium">
            <Link
              href={`/` + urlData(urlParams)}
              className="px-3 py-2 underline text-gray-500 dark:text-gray-400 hover:text-hologram-color"
            >
              {translations.nav_home}
            </Link>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBarTopPage
