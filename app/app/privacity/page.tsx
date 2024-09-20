'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

import loadTranslations from '../../utils/loadTranslations'
import { Header } from '../components'
import Footer from '../components/footer/footer'
import NavBarTopPage from '../components/navBars/navbarTopPage'
import { Translations } from '../components/utils'

const Privacity = () => {
  const [translations, setTranslations] = useState<Translations>()
  const pathname: string = usePathname()

  useEffect(() => {
    const userLocale = navigator.language.startsWith('es') ? 'es' : 'en'
    const loadedTranslations = loadTranslations(userLocale)
    setTranslations(loadedTranslations)
  }, [])

  return (
    <div
      className="
      container
      mx-auto
      2xl:px-28
      xl:px-28
      lg:px-28
      px-6
      bg-white
      dark:bg-gray-900
      text-black
      dark:text-gray-300
    "
    >
      <Header translations={translations ?? {}}></Header>

      <NavBarTopPage
        translations={translations ?? {}}
        titleSection={translations?.privacy ?? ''}
      ></NavBarTopPage>

      <section className="my-2 pb-36">
        <p className="text-xl font-bold mb-4">{translations?.privacy_section_title}</p>
        <p className="text-xl text-justify">{translations?.privacy_section_text}</p>
      </section>

      <Footer translations={translations ?? {}} currentPage={pathname}></Footer>
    </div>
  )
}

export default Privacity
