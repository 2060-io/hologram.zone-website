import Link from 'next/link'
import React from 'react'

import { Translations } from '../utils'

interface NavBarTopPage {
  translations: Translations
  titleSection: string
  urlParams: URLSearchParams | null
}

const NavBarTopPage: React.FC<NavBarTopPage> = ({ translations, titleSection, urlParams }) => {
  const urlData = (urlParams: URLSearchParams | null): string => {
    let data = ''
    if (null === urlParams) {
      return data
    }

    if (null !== urlParams.get('oob')) {
      data = '/?oob=' + urlParams.get('oob')
    }

    if (null !== urlParams.get('_oob')) {
      data = '/?_oob=' + urlParams.get('_oob')
    }

    return data
  }

  return (
    <div className="lg:py-4 py-2 lg:flex lg:space-x-4 lg:flex-1 items-center text-center">
      <nav className="justify-center w-[100%]">
        <div className="flex justify-center h-10">
          <div className="lg:flex-1 w-3/4">
            <p className="text-left text-2xl lg:text-4xl xl:text-4xl 2xl:text-4xl text-hologram-color font-semibold">
              {titleSection}
            </p>
          </div>
          <div className="lg:flex-1  w-1/4 text-right lg:text-lg xl:text-lg 2xl:text-lg font-medium">
            <Link
              href={`/` + urlData(urlParams)}
              className="px-3 py-2 underline text-gray-500 dark:text-gray-400"
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
