import React, { useState } from 'react'

import { Translations } from '../utils'

import About from './about'
import Navbar from './navbar'

interface Footer {
  translations: Translations
}

const Footer: React.FC<Footer> = ({ translations }) => {
  const [currentPage, setCurrentPage] = useState<string>('home')

  return (
    <footer className="flex flex-col lg:flex-row xl:flex-row 2xl:flex-row -mx-6 bg-zinc-300 text-center">
      <About translations={translations} />
      <Navbar translations={translations} currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </footer>
  )
}

export default React.memo(Footer)
