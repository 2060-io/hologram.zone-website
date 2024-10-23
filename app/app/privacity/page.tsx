'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

import loadTranslations from '../../utils/loadTranslations'
import { Footer } from '../components/footer'
import { NavBarTopPage } from '../components/navBars'
import { Header, Translations } from '../components/utils'

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

  const urlDataGet = (urlParams: URLSearchParams | null): string => {
    if (null === urlParams) {
      return ''
    }

    if (null !== urlParams.get('oob')) {
      return '/?oob=' + urlParams.get('oob')
    }

    if (null !== urlParams.get('_oob')) {
      return '/?_oob=' + urlParams.get('_oob')
    }
  }

  const urlData: string = urlDataGet(searchParams)
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

  const urlData: string = urlDataGet(searchParams)

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
        titleSection={translations?.privacy ?? ''}
        urlParams={searchParams}
      ></NavBarTopPage>

      <section className="my-2 pb-36">
        <p className="text-xl font-bold mb-4">{translations?.privacy_section_title}</p>
        <p className="text-xl text-justify">{translations?.privacy_section_text}</p>
      </section>

      <Footer translations={translations ?? {}} currentPage={pathname} urlData={urlData}></Footer>
    </div>
  )
}

export default Privacity
