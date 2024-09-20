import { Translations } from '../utils'

interface NavBar {
  translations: Translations
  currentPage: string
}

const Navbar: React.FC<NavBar> = ({ translations, currentPage }) => {
  return (
    <div className="lg:p-4 lg:flex order-1 lg:order-2 xl:order-2 2xl:order-2 lg:space-x-4 lg:flex-1 items-center text-center">
      <nav className="justify-center w-[100%]">
        {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> */}
        <div className="flex justify-center h-10">
          <div className="flex text-sm lg:text-lg xl:text-lg 2xl:text-lg font-medium">
            <a
              href="#"
              className={`px-3 py-2 text-center ${
                currentPage === '/' ? 'text-hologram-color underline' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {translations.nav_home}
            </a>
            <a
              href="#"
              className={`px-3 py-2 ${
                currentPage === 'terms'
                  ? 'text-hologram-color underline'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {translations.terms}
            </a>
            <a
              href="#"
              className={`px-3 py-2 ${
                currentPage === 'privacity'
                  ? 'text-hologram-color underline'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {translations.privacy}
            </a>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
