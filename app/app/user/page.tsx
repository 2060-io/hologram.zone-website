'use client'

import { useEffect, useLayoutEffect, useRef, useState } from 'react'

import loadTranslations from '../../utils/loadTranslations'
import { Footer } from '../components/footer'
import { NavBarTopPage } from '../components/navBars'
import { Header, Translations } from '../components/utils'

import Privacy from './privacy'
import Terms from './terms'

const TermsAndPrivacy = () => {
  const [translations, setTranslations] = useState<Translations>()
  const termsRef = useRef<HTMLDivElement | null>(null)
  const privacyRef = useRef<HTMLDivElement | null>(null)
  const [url, setUrl] = useState<string>('')
  const [urlData, setUrlData] = useState<string>('')

  useEffect(() => {
    const userLocale = navigator.language.startsWith('es') ? 'es' : 'en'
    const loadedTranslations = loadTranslations(userLocale)
    setTranslations(loadedTranslations)
    setUrl(window.location.href)

    const handleScroll = () => setUrl(window.location.href)
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href)
      const searchParams = new URLSearchParams(url.hash.substring(url.hash.indexOf('?')))
      const oobValue = searchParams.get('oob')
      const _oobValue = searchParams.get('_oob')

      setUrlData(oobValue ? `/?oob=${oobValue}` : _oobValue ? `/?_oob=${_oobValue}` : '')
    }
  }, [url])

  useLayoutEffect(() => {
    const scrollTarget = url.includes('terms') ? termsRef : url.includes('privacy') ? privacyRef : null
    scrollTarget?.current?.scrollIntoView({ behavior: 'smooth' })
  }, [url])

  return (
    <div className="mt-5 bg-white dark:bg-gray-900 text-black dark:text-gray-300">
      <Header translations={translations ?? {}} urlData={urlData}></Header>

      <NavBarTopPage translations={translations ?? {}} urlData={urlData}></NavBarTopPage>

      <div ref={termsRef} className="container mx-auto px-6 2xl:px-28 xl:px-28 lg:px-28 mb-10">
        <Terms translations={translations} />
      </div>

      <div ref={privacyRef} id="privacy" className="container mx-auto px-6 2xl:px-28 xl:px-28 lg:px-28 mb-16">
        <Privacy translations={translations} />
      </div>
      <Footer translations={translations ?? {}} currentPage={url} urlData={urlData}></Footer>
    </div>
  )
}

export default TermsAndPrivacy
