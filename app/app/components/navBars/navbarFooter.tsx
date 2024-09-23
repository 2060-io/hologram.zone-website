import Link from 'next/link'

import { Translations } from '../utils'

interface NavBarFooter {
  translations: Translations
  currentPage: string
  urlParams: URLSearchParams | null
}

const NavbarFooter: React.FC<NavBarFooter> = ({ translations, currentPage, urlParams }) => {
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
    <div className="lg:p-4 xl:p-4 2xl:p-4 lg:flex xl:flex 2xl:flex lg:flex-1 xl:flex-1 2xl:flex-1 order-1 lg:order-2 xl:order-2 2xl:order-2 lg:space-x-4 xl:space-x-4 2xl:space-x-4 items-center text-center">
      <nav className="justify-center w-[100%]">
        º
        <div className="flex justify-center h-10">
          <div className="flex text-sm lg:text-lg xl:text-lg 2xl:text-lg font-medium">
            <Link
              href={`/` + urlData(urlParams)}
              className={`px-3 py-2 text-center transition duration-300 ease-in-out hover:scale-95 ${
                currentPage === '/' ? 'text-hologram-color underline' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {translations.nav_home}
            </Link>
            <Link
              href={`terms` + urlData(urlParams)}
              className={`px-3 py-2 text-center transition duration-300 ease-in-out hover:scale-95 ${
                currentPage === '/terms'
                  ? 'text-hologram-color underline'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {translations.terms}
            </Link>
            <Link
              href={`privacity` + urlData(urlParams)}
              className={`px-3 py-2 text-center transition duration-300 ease-in-out hover:scale-95 ${
                currentPage === '/privacity'
                  ? 'text-hologram-color underline'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {translations.privacy}
            </Link>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavbarFooter
