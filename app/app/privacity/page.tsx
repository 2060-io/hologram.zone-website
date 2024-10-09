'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

import loadTranslations from '../../utils/loadTranslations'
import { Header, Translations } from '../components/utils'
import { NavBarTopPage } from '../components/navBars'
import { Footer } from '../components/footer'

const Privacity = () => {
  const [translations, setTranslations] = useState<Translations>()
  const pathname: string = usePathname()
  const [searchParams, setSearchParams] = useState<URLSearchParams | null>(null)

  useEffect(() => {
    const userLocale = navigator.language.startsWith('es') ? 'es' : 'en'
    const loadedTranslations = loadTranslations(userLocale)
    setTranslations(loadedTranslations)
    const params = new URLSearchParams(window.location.search)
    setSearchParams(params)
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
        urlParams={searchParams}
      ></NavBarTopPage>

      <section className="my-2 pb-36">
        <p className="text-xl font-bold mb-4">{translations?.privacy_section_title}</p>
        <p className="text-xl text-justify">{translations?.privacy_section_text}</p>
      </section>

      <Footer translations={translations ?? {}} currentPage={pathname} urlParams={searchParams}></Footer>
    </div>
  )
}

export default Privacity
