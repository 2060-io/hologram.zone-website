'use client'

import { useEffect, useLayoutEffect, useRef, useState } from 'react'

import loadTranslations from '../../utils/loadTranslations'
import { Footer } from '../components/footer'
import { NavBarTopPage } from '../components/navBars'
import { Header, Translations } from '../components/utils'

const Terms = () => {
  const [translations, setTranslations] = useState<Translations>()
  const [searchParams, setSearchParams] = useState<URLSearchParams | null>(null)
  const termsRef = useRef<HTMLDivElement | null>(null)
  const privacyRef = useRef<HTMLDivElement | null>(null)
  const [url, setUrl] = useState<string>('')

  useEffect(() => {
    const userLocale = navigator.language.startsWith('es') ? 'es' : 'en'
    const loadedTranslations = loadTranslations(userLocale)
    setTranslations(loadedTranslations)
    const params = new URLSearchParams(window.location.search)
    setSearchParams(params)
  }, [])

  useLayoutEffect(() => {
    setUrl(window.location.href)
    const scrollTarget = url.includes('terms') ? termsRef : url.includes('privacy') ? privacyRef : null
    scrollTarget?.current?.scrollIntoView({ behavior: 'smooth' })
  })

  const urlData: string = (() => {
    const url = new URL(window.location.href);
    const searchParams = new URLSearchParams(url.hash.substring(url.hash.indexOf('?')));
  
    if (searchParams === null) {
      return '';
    }
  
    const oobValue = searchParams.get('oob');
    const _oobValue = searchParams.get('_oob');
  
    if (oobValue !== null) {
      return '/?oob=' + oobValue;
    }
  
    if (_oobValue !== null) {
      return '/?_oob=' + _oobValue;
    }
  
    return '';
  })();

  return (
    <div className="mt-5 bg-white dark:bg-gray-900 text-black dark:text-gray-300">
      <Header translations={translations ?? {}} urlData={urlData}></Header>

      <NavBarTopPage
        translations={translations ?? {}}
        urlData={urlData}
      ></NavBarTopPage>

      <div ref={termsRef} className="container mx-auto px-6 2xl:px-28 xl:px-28 lg:px-28">
        <p className="text-left text-2xl lg:text-4xl xl:text-4xl 2xl:text-4xl text-hologram-color font-semibold">
          {translations?.terms_service_title}
        </p>
        <br />
        <p className="text-left text-xl lg:text-4xl xl:text-4xl 2xl:text-4xl font-semibold mb-2">
          {translations?.terms_about_title}
        </p>
        <br />
        <p className="text-left lg:text-3xl xl:text-3xl 2xl:text-3xl font-semibold mb-2">
          {translations?.terms_minium_age_title}
        </p>
        <p className="lg:text-xl xl:lg:text-xl 2xl:lg:text-xl text-justify">
          {translations?.terms_minium_age_text}
        </p>
        <br />
        <p className="text-left lg:text-3xl xl:text-3xl 2xl:text-3xl font-semibold mb-2">
          {translations?.terms_privacy_user_data_title}
        </p>
        <p className="lg:text-xl xl:lg:text-xl 2xl:lg:text-xl text-justify">
          {translations?.terms_privacy_user_data_text}
        </p>
        <br />
        <p className="text-left lg:text-3xl xl:text-3xl 2xl:text-3xl font-semibold mb-2">
          {translations?.terms_software_title}
        </p>
        <p className="lg:text-xl xl:lg:text-xl 2xl:lg:text-xl text-justify">
          {translations?.terms_software_text}
        </p>
        <br />
        <p className="text-left lg:text-3xl xl:text-3xl 2xl:text-3xl font-semibold mb-2">
          {translations?.terms_fees_title}
        </p>
        <p className="lg:text-xl xl:lg:text-xl 2xl:lg:text-xl text-justify">
          {translations?.terms_fees_text}
        </p>
        <br />
        <p className="text-left text-xl lg:text-4xl xl:text-4xl 2xl:text-4xl font-semibold mb-2">
          {translations?.terms_using_title}
        </p>
        <br />
        <p className="text-left lg:text-3xl xl:text-3xl 2xl:text-3xl font-semibold mb-2">
          {translations?.terms_our_title}
        </p>
        <p className="lg:text-xl xl:lg:text-xl 2xl:lg:text-xl text-justify">{translations?.terms_our_text}</p>
        <br />
        <p className="text-left lg:text-3xl xl:text-3xl 2xl:text-3xl font-semibold mb-2">
          {translations?.terms_legal_title}
        </p>
        <p className="lg:text-xl xl:lg:text-xl 2xl:lg:text-xl text-justify">
          {translations?.terms_legal_text}
        </p>
        <br />
        <p className="text-left lg:text-3xl xl:text-3xl 2xl:text-3xl font-semibold mb-2">
          {translations?.terms_harm_title}
        </p>
        <p className="lg:text-xl xl:lg:text-xl 2xl:lg:text-xl text-justify">
          {translations?.terms_harm_text}
        </p>
        <br />
        <p className="text-left lg:text-3xl xl:text-3xl 2xl:text-3xl font-semibold mb-2">
          {translations?.terms_keeping_title}
        </p>
        <p className="lg:text-xl xl:lg:text-xl 2xl:lg:text-xl text-justify">
          {translations?.terms_keeping_text}
        </p>
        <br />
        <p className="text-left lg:text-3xl xl:text-3xl 2xl:text-3xl font-semibold mb-2">
          {translations?.terms_access_title}
        </p>
        <p className="lg:text-xl xl:lg:text-xl 2xl:lg:text-xl text-justify">
          {translations?.terms_access_text}
        </p>
        <br />
        <p className="text-left lg:text-3xl xl:text-3xl 2xl:text-3xl font-semibold mb-2">
          {translations?.terms_third_party_title}
        </p>
        <p className="lg:text-xl xl:lg:text-xl 2xl:lg:text-xl text-justify">
          {translations?.terms_third_party_text}
        </p>
        <br />
        <p className="text-left text-xl lg:text-4xl xl:text-4xl 2xl:text-4xl font-semibold mb-2">
          {translations?.terms_you_rights_license_title}
        </p>
        <br />
        <p className="text-left lg:text-3xl xl:text-3xl 2xl:text-3xl font-semibold mb-2">
          {translations?.terms_you_rights_title}
        </p>
        <p className="lg:text-xl xl:lg:text-xl 2xl:lg:text-xl text-justify">
          {translations?.terms_you_rights_text}
        </p>
        <br />
        <p className="text-left lg:text-3xl xl:text-3xl 2xl:text-3xl font-semibold mb-2">
          {translations?.terms_right_title}
        </p>
        <p className="lg:text-xl xl:lg:text-xl 2xl:lg:text-xl text-justify">
          {translations?.terms_right_text}
        </p>
        <br />
        <p className="text-left lg:text-3xl xl:text-3xl 2xl:text-3xl font-semibold mb-2">
          {translations?.terms_license_title}
        </p>
        <p className="lg:text-xl xl:lg:text-xl 2xl:lg:text-xl text-justify">
          {translations?.terms_license_text}
        </p>
        <br />
        <p className="text-left text-xl lg:text-4xl xl:text-4xl 2xl:text-4xl font-semibold mb-2">
          {translations?.terms_disclaimers_limitations_title}
        </p>
        <br />
        <p className="text-left lg:text-3xl xl:text-3xl 2xl:text-3xl font-semibold mb-2">
          {translations?.terms_disclaimers_title}
        </p>
        <p className="lg:text-xl xl:lg:text-xl 2xl:lg:text-xl text-justify">
          {translations?.terms_disclaimers_text}
        </p>
        <br />
        <p className="text-left lg:text-3xl xl:text-3xl 2xl:text-3xl font-semibold mb-2">
          {translations?.terms_limitations_title}
        </p>
        <p className="lg:text-xl xl:lg:text-xl 2xl:lg:text-xl text-justify">
          {translations?.terms_limitations_text}
        </p>
        <br />
        <p className="text-left lg:text-3xl xl:text-3xl 2xl:text-3xl font-semibold mb-2">
          {translations?.terms_availability_services_title}
        </p>
        <p className="lg:text-xl xl:lg:text-xl 2xl:lg:text-xl text-justify">
          {translations?.terms_availability_services_text}
        </p>
        <br />
        <p className="text-left text-xl lg:text-4xl xl:text-4xl 2xl:text-4xl font-semibold mb-2">
          {translations?.terms_resolving_disputes_ending_title}
        </p>
        <br />
        <p className="text-left lg:text-3xl xl:text-3xl 2xl:text-3xl font-semibold mb-2">
          {translations?.terms_resolving_title}
        </p>
        <p className="lg:text-xl xl:lg:text-xl 2xl:lg:text-xl text-justify">
          {translations?.terms_resolving_text}
        </p>
        <br />
        <p className="text-left lg:text-3xl xl:text-3xl 2xl:text-3xl font-semibold mb-2">
          {translations?.terms_ending_title}
        </p>
        <p className="lg:text-xl xl:lg:text-xl 2xl:lg:text-xl text-justify">
          {translations?.terms_ending_text}
        </p>
        <br />
        <p className="text-left text-xl lg:text-4xl xl:text-4xl 2xl:text-4xl font-semibold mb-2">
          {translations?.terms_general_title}
        </p>
        <p className="lg:text-xl xl:lg:text-xl 2xl:lg:text-xl text-justify">
          {translations?.terms_general_text}
        </p>
      </div>
      <br />
      <br />
      <div ref={privacyRef} id="privacy" className="container mx-auto px-6 2xl:px-28 xl:px-28 lg:px-28">
        <p className="text-left text-2xl lg:text-4xl xl:text-4xl 2xl:text-4xl text-hologram-color font-semibold">
          {translations?.privacy_policy_title}
        </p>
        <br />
        <p className="lg:text-xl xl:lg:text-xl 2xl:lg:text-xl text-justify">
          {translations?.privacy_policy_text}
        </p>
        <br />
        <p className="text-left text-xl lg:text-4xl xl:text-4xl 2xl:text-4xl font-semibold mb-2">
          {translations?.privacy_information_provide_title}
        </p>
        <br />
        <p className="text-left lg:text-3xl xl:text-3xl 2xl:text-3xl font-semibold mb-2">
          {translations?.privacy_hologram_profile_title}
        </p>
        <p className="lg:text-xl xl:lg:text-xl 2xl:lg:text-xl text-justify">
          {translations?.privacy_hologram_profile_text}
        </p>
        <br />
        <p className="text-left lg:text-3xl xl:text-3xl 2xl:text-3xl font-semibold mb-2">
          {translations?.privacy_messages_title}
        </p>
        <p className="lg:text-xl xl:lg:text-xl 2xl:lg:text-xl text-justify">
          {translations?.privacy_messages_text}
        </p>
        <br />
        <p className="text-left lg:text-3xl xl:text-3xl 2xl:text-3xl font-semibold mb-2">
          {translations?.privacy_verifiable_credentials_title}
        </p>
        <p className="lg:text-xl xl:lg:text-xl 2xl:lg:text-xl text-justify">
          {translations?.privacy_verifiable_credentials_text}
        </p>
        <br />
        <p className="text-left lg:text-3xl xl:text-3xl 2xl:text-3xl font-semibold mb-2">
          {translations?.privacy_connectios_title}
        </p>
        <p className="lg:text-xl xl:lg:text-xl 2xl:lg:text-xl text-justify">
          {translations?.privacy_connectios_text}
        </p>
        <br />
        <p className="text-left lg:text-3xl xl:text-3xl 2xl:text-3xl font-semibold mb-2">
          {translations?.privacy_user_support_title}
        </p>
        <p className="lg:text-xl xl:lg:text-xl 2xl:lg:text-xl text-justify">
          {translations?.privacy_user_support_text}
        </p>
        <br />
        <p className="text-left lg:text-3xl xl:text-3xl 2xl:text-3xl font-semibold mb-2">
          {translations?.privacy_managing_information_title}
        </p>
        <p className="lg:text-xl xl:lg:text-xl 2xl:lg:text-xl text-justify">
          {translations?.privacy_managing_information_text}
        </p>
        <br />
        <p className="text-left lg:text-3xl xl:text-3xl 2xl:text-3xl font-semibold mb-2">
          {translations?.privacy_deleting_information_title}
        </p>
        <p className="lg:text-xl xl:lg:text-xl 2xl:lg:text-xl text-justify">
          {translations?.privacy_deleting_information_text}
        </p>
        <br />
        <p className="text-left text-xl lg:text-4xl xl:text-4xl 2xl:text-4xl font-semibold mb-2">
          {translations?.privacy_information_share_title}
        </p>
        <br />
        <p className="text-left lg:text-3xl xl:text-3xl 2xl:text-3xl font-semibold mb-2">
          {translations?.privacy_parties_title}
        </p>
        <p className="lg:text-xl xl:lg:text-xl 2xl:lg:text-xl text-justify">
          {translations?.privacy_parties_text}
        </p>
        <br />
        <p className="text-left lg:text-3xl xl:text-3xl 2xl:text-3xl font-semibold mb-2">
          {translations?.privacy_other_instances_title}
        </p>
        <p className="lg:text-xl xl:lg:text-xl 2xl:lg:text-xl text-justify pl-10">
          <span>- {translations?.privacy_other_instances_one}</span>
          <span>- {translations?.privacy_other_instances_two}</span>
          <span>- {translations?.privacy_other_instances_three}</span>
          <span>- {translations?.privacy_other_instances_four}</span>
        </p>
        <br />
        <p className="text-left text-xl lg:text-4xl xl:text-4xl 2xl:text-4xl font-semibold mb-2">
          {translations?.privacy_updates_title}
        </p>
        <p className="lg:text-xl xl:lg:text-xl 2xl:lg:text-xl text-justify">
          {translations?.privacy_updates_text}
        </p>
        <br />
        <p className="text-left text-xl lg:text-4xl xl:text-4xl 2xl:text-4xl font-semibold mb-2">
          {translations?.privacy_terms_title}
        </p>
        <p className="lg:text-xl xl:lg:text-xl 2xl:lg:text-xl text-justify">
          {translations?.privacy_terms_text}
        </p>
        <br />
        <p className="text-left text-xl lg:text-4xl xl:text-4xl 2xl:text-4xl font-semibold mb-2">
          {translations?.privacy_contact_title}
        </p>
        <p className="lg:text-xl xl:lg:text-xl 2xl:lg:text-xl text-justify">
          {translations?.privacy_contact_text}
        </p>
      </div>
      <br />
      <br />
      <Footer translations={translations ?? {}} currentPage={url} urlData={urlData}></Footer>
    </div>
  )
}

export default Terms
