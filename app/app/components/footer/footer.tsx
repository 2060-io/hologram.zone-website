import React from 'react'

import NavbarFooter from '../navBars/navbarFooter'
import { Translations } from '../utils'

import About from './about'

interface Footer {
  translations: Translations
  currentPage: string
}

const Footer: React.FC<Footer> = ({ translations, currentPage }) => {
  return (
    <footer className="flex flex-col lg:flex-row xl:flex-row 2xl:flex-row -mx-6 bg-zinc-300 text-center">
      <About translations={translations} />
      <NavbarFooter translations={translations} currentPage={currentPage} />
    </footer>
  )
}

export default React.memo(Footer)
