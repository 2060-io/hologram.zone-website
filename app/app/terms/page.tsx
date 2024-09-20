'use client'

import { useEffect, useState } from 'react'
import { Header } from '../components'
import loadTranslations from '@/utils/loadTranslations'
import { Translations } from '../components/utils'
import Footer from '../components/footer/footer'
import { usePathname } from 'next/navigation'

const Terms = () => {
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
      <Footer translations={translations ?? {}} currentPage={pathname}></Footer>
    </div>
  )
}

export default Terms