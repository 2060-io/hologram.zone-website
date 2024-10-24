'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

import loadTranslations from '../../utils/loadTranslations'
import { Footer } from '../components/footer'
import { NavBarTopPage } from '../components/navBars'
import { Header, Translations } from '../components/utils'

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

  const urlData: string = (() => {
    if (null === searchParams) {
      return ''
    }

    if (null !== searchParams.get('oob')) {
      return '/?oob=' + searchParams.get('oob')
    }

    if (null !== searchParams.get('_oob')) {
      return '/?_oob=' + searchParams.get('_oob')
    }

    return ''
  })()

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
      <Header translations={translations ?? {}} urlData={urlData}></Header>

      <NavBarTopPage
        translations={translations ?? {}}
        titleSection={translations?.terms ?? ''}
        urlParams={searchParams}
      ></NavBarTopPage>

      <section className="my-2">
        <p className="text-xl font-semibold mb-2">{translations?.terms_service_title}</p>
        <p className="text-xl text-justify">{translations?.terms_service_text}</p>
      </section>

      <p className="text-xl font-bold mt-14 mb-7">{translations?.terms_about_title}</p>

      <section className="mt-2 mb-7">
        <p className="text-xl font-semibold mb-2">{translations?.terms_minium_age_title}</p>
        <p className="text-xl text-justify">{translations?.terms_minium_age_text}</p>
      </section>

      <section className="mt-2 mb-7">
        <p className="text-xl font-semibold mb-2">{translations?.terms_software_title}</p>
        <p className="text-xl text-justify mb-4">{translations?.terms_software_text}</p>
      </section>

      <section className="mt-2 mb-7">
        <p className="text-xl font-semibold mb-2">{translations?.terms_fees_title}</p>
        <p className="text-xl text-justify mb-4">{translations?.terms_fees_text}</p>
      </section>

      <section className="mt-10 mb-7">
        <p className="text-xl font-semibold mb-2">{translations?.terms_using_title}</p>
      </section>

      <section className="mt-2 mb-7">
        <p className="text-xl font-semibold mb-2">{translations?.terms_our_title}</p>
        <p className="text-xl text-justify mb-4">{translations?.terms_our_text}</p>
      </section>

      <section className="mt-2 mb-7">
        <p className="text-xl font-semibold mb-2">{translations?.terms_legal_title}</p>
        <p className="text-xl text-justify mb-4">{translations?.terms_legal_text}</p>
      </section>

      <section className="mt-2 mb-7 pb-6">
        <p className="text-xl font-semibold mb-2">{translations?.terms_harm_title}</p>
        <p className="text-xl text-justify mb-4">{translations?.terms_harm_text}</p>
      </section>

      <Footer translations={translations ?? {}} currentPage={pathname} urlData={urlData}></Footer>
    </div>
  )
}

export default Terms
