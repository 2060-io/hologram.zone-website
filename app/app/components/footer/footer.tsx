import React from 'react'

import NavbarFooter from '../navBars/navbarFooter'
import { Translations } from '../utils'

import About from './about'

interface Footer {
  translations: Translations
  currentPage: string
  urlData: string
}

const Footer: React.FC<Footer> = ({ translations, currentPage, urlData }) => {
  return (
    <footer className="bg-zinc-300">
      <div className="container mx-auto 2xl:px-28 xl:px-28 lg:px-28 px-6 flex flex-col lg:flex-row xl:flex-row 2xl:flex-row text-center">
        <About translations={translations} urlData={urlData} />
        <NavbarFooter translations={translations} currentPage={currentPage} urlData={urlData} />
      </div>
    </footer>
  )
}

export default React.memo(Footer)
