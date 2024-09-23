'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

import loadTranslations from '../../utils/loadTranslations'
import { Header } from '../components'
import Footer from '../components/footer/footer'
import NavBarTopPage from '../components/navBars/navbarTopPage'
import { Translations } from '../components/utils'

const Terms = () => {
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
        titleSection={translations?.terms ?? ''}
        urlParams={searchParams}
      ></NavBarTopPage>

      <section className="my-2">
        <p className="text-xl font-semibold mb-2">{translations?.terms_service_title}</p>
        <p className="text-xl text-justify">{translations?.terms_service_text}</p>
      </section>

      <p className="text-xl font-bold my-4">{translations?.terms_about_title}</p>

      <section className="my-2">
        <p className="text-xl font-semibold mb-2">{translations?.terms_minium_age_title}</p>
        <p className="text-xl text-justify">{translations?.terms_minium_age_text}</p>
      </section>

      <section className="my-2">
        <p className="text-xl font-semibold mb-2">{translations?.terms_software_title}</p>
        <p className="text-xl text-justify mb-4">{translations?.terms_software_text}</p>
      </section>

      <section className="my-2">
        <p className="text-xl font-semibold mb-2">{translations?.terms_fees_title}</p>
        <p className="text-xl text-justify mb-4">{translations?.terms_fees_text}</p>
      </section>

      <section className="my-2">
        <p className="text-xl font-semibold mb-2">{translations?.terms_using_title}</p>
      </section>

      <section className="my-2">
        <p className="text-xl font-semibold mb-2">{translations?.terms_our_title}</p>
        <p className="text-xl text-justify mb-4">{translations?.terms_our_text}</p>
      </section>

      <section className="my-2">
        <p className="text-xl font-semibold mb-2">{translations?.terms_legal_title}</p>
        <p className="text-xl text-justify mb-4">{translations?.terms_legal_text}</p>
      </section>

      <section className="my-2 pb-6">
        <p className="text-xl font-semibold mb-2">{translations?.terms_harm_title}</p>
        <p className="text-xl text-justify mb-4">{translations?.terms_harm_text}</p>
      </section>

      <Footer translations={translations ?? {}} currentPage={pathname} urlParams={searchParams}></Footer>
    </div>
  )
}

export default Terms
