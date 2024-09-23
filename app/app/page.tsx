'use client'

import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import Favicon from 'react-favicon'
import QRCode from 'react-qr-code'

import loadTranslations from '../utils/loadTranslations'

import { Header, useDeviceDetect } from './components'
import BannerDownloadHolomgram from './components/banners/bannerDownloadHologram'
import BannerHologramMessaging from './components/banners/bannerHologramMessaging'
import Footer from './components/footer/footer'
import SectionProofOfTrust from './components/sections/sectionProofOfTrust'
import SectionStandardsBuilt from './components/sections/sectionStandardsBuilt'
import SectionWhatIs from './components/sections/sectionWhatIs'
import { Translations } from './components/utils'

interface OobData {
  imageUrl: string
  label: string
  type: string
}

export default function HomePage() {
  const didUrl = 'didcomm://aries_proof-request'
  const didcomm_v2 = 'https://didcomm.org/out-of-band/2.0/invitation'
  const [oobData, setOobData] = useState<OobData | null>(null)
  const [translations, setTranslations] = useState<Translations>()
  const [url, setUrl] = useState<string>('')
  const [searchParams, setSearchParams] = useState<URLSearchParams | null>(null)
  const deviceType = useDeviceDetect()
  const pathname: string = usePathname()

  useEffect(() => {
    const userLocale = navigator.language.startsWith('es') ? 'es' : 'en'
    const loadedTranslations = loadTranslations(userLocale)
    setTranslations(loadedTranslations)
    const params = new URLSearchParams(window.location.search)
    setSearchParams(params)
    const oobParam = params.get('oob') || params.get('_oob')

    setUrl(window.location.href)
    if (oobParam) {
      try {
        const decoded = atob(oobParam)
        const parsedData = JSON.parse(decoded)
        setOobData(parsedData)
      } catch (error) {
        console.error('Error decoding oob parameter:', error)
        setOobData(null)
      }
    }
  }, [])

  try {
    if (deviceType === 'mobile') window.location.href = `${didUrl}?${searchParams}`
  } catch (error) {
    console.error('Error opening the didcomm URL:', error)
  }

  return (
    <React.Fragment>
      <Favicon url="images/ico-hologram.png"></Favicon>
      {deviceType === 'mobile' && !oobData ? <BannerHologramMessaging /> : ''}
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
        <Header translations={translations ?? {}} />

        {oobData && oobData?.type !== didcomm_v2 && (
          <section className="container mx-auto my-8 md:my-12 lg:my-16 flex flex-col items-center justify-center text-center bg-white shadow-lg rounded border border-gray-300 p-6 max-w-lg">
            <Image
              src={oobData.imageUrl ?? './default.svg'}
              alt="QR Code"
              className="w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64"
              width={30}
              height={30}
              priority={false}
            />
            <h2 className="text-2xl font-bold mb-4 md:text-3xl lg:text-4xl">{oobData.label}</h2>
            <p className="text-base md:text-lg lg:text-xl leading-relaxed text-justify max-w-lg mb-4">
              {translations?.download.replace('SERVICE', oobData.label ?? 'service')}
            </p>
          </section>
        )}

        {deviceType !== 'mobile' && (
          <section className="container mx-auto my-8 md:my-12 lg:my-16 flex flex-col items-center justify-center text-center">
            <div className="flex justify-center mb-6">
              <QRCode value={url} />
            </div>
            <p className="text-base md:text-lg lg:text-xl leading-relaxed text-justify max-w-lg mb-6">
              {translations?.continue_qr}
            </p>
          </section>
        )}

        {oobData && oobData.type !== didcomm_v2 && deviceType === 'mobile' && (
          <section className="container mx-auto my-8 md:my-12 lg:my-16 flex flex-col items-center justify-center text-center">
            <a
              href={`${didUrl}?${searchParams}`}
              className="text-blue-500 hover:underline font-bold py-3 px-6 transition-colors duration-300"
            >
              {translations?.get_service.replace('SERVICE', oobData.label ?? 'service')}
            </a>
          </section>
        )}

        {oobData && oobData.type === didcomm_v2 && deviceType === 'mobile' && (
          <section className="container mx-auto my-8 md:my-12 lg:my-16 flex flex-col items-center justify-center text-center">
            <a
              href={`${didUrl}?${searchParams}`}
              className="text-blue-500 hover:underline font-bold py-3 px-6 transition-colors duration-300"
            >
              {translations?.continue_service}
            </a>
          </section>
        )}

        <SectionWhatIs translations={translations ?? {}} />

        <SectionProofOfTrust translations={translations ?? {}} />

        <BannerDownloadHolomgram translations={translations ?? {}} />

        <SectionStandardsBuilt translations={translations ?? {}} />

        <Footer translations={translations ?? {}} currentPage={pathname} urlParams={searchParams} />

        {/* 
        {deviceType === 'mobile' && (
          <section className="container mx-auto my-8 md:my-12 lg:my-16 flex flex-col items-center justify-center">
            <h2 className="text-2xl font-bold mb-4 md:text-3xl lg:text-4xl">
              {  translations?.download_msg }
            </h2>
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
              
              <div className="flex flex-col items-center">
                <Image src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" alt="Google Play" width={100} height={100} className="mt-2" />
                  <a href="https://play.google.com/store/apps/details?id=io.twentysixty.mobileagent.m" className="text-blue-500 hover:underline font-bold py-3 px-6 transition-colors duration-300">
                    Google Play
                  </a>
              </div>

              <div className="flex flex-col items-center">
                <Image src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg" alt="App Store" width={100} height={100} className="mt-2" />
                  <a href="https://apps.apple.com/us/app/hologram-messaging/id6474701855" className="text-blue-500 hover:underline font-bold py-3 px-6 transition-colors duration-300">
                    App Store
                  </a>
              </div>

              <div className="flex flex-col items-center">
                <Image src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNDBweCIgaGVpZ2h0PSI0MHB4IiB2aWV3Qm94PSIwIDAgNDAgNDAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDY0ICg5MzUzNykgLSBodHRwczovL3NrZXRjaC5jb20gLS0+CiAgICA8dGl0bGU+aWNfYWc8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgeDE9IjUwJSIgeTE9IjAlIiB4Mj0iNTAlIiB5Mj0iMTAwJSIgaWQ9ImxpbmVhckdyYWRpZW50LTEiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjRkI2MzYxIiBvZmZzZXQ9IjAlIj48L3N0b3A+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNFRDNFNDUiIG9mZnNldD0iMTAwJSI+PC9zdG9wPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8L2RlZnM+CiAgICA8ZyBpZD0iaWNfYWciIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSLnvJbnu4QiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIuMDAwMDAwLCAyLjAwMDAwMCkiPgogICAgICAgICAgICA8cGF0aCBkPSJNMTAuMTAwOTk5NSwwIEMyLjcwNTExMjc3LDAgMCwyLjcwNDY0MDk4IDAsMTAuMDk5MDI4NiBMMCwyNS45MDA5NzE0IEMwLDMzLjI5NTM1OSAyLjcwNTExMjc3LDM2IDEwLjEwMDk5OTUsMzYgTDI1Ljg5NDE4NiwzNiBDMzMuMjg5ODYzNCwzNiAzNiwzMy4yOTUzNTkgMzYsMjUuOTAwOTcxNCBMMzYsMTAuMDk5MDI4NiBDMzYsMi43MDQ2NDA5OCAzMy4yOTQ4ODcyLDAgMjUuODk5MDAwNSwwIEwxMC4xMDA5OTk1LDAgWiIgaWQ9IkZpbGwtMSIgZmlsbD0idXJsKCNsaW5lYXJHcmFkaWVudC0xKSI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNMTUuNzAzMDUxNSwyMC44NzkyNTEgTDE3LjE0ODMxOTIsMjAuODc5MjUxIEwxNi40MjMyMjYsMTkuMTkyOTYwNyBMMTUuNzAzMDUxNSwyMC44NzkyNTEgWiBNMTUuMzQ3MTU5OCwyMS43MjkwNTExIEwxNC45MTgzNTM2LDIyLjcxMDIxMjggTDEzLjk0MjExMDgsMjIuNzEwMjEyOCBMMTYuMDE4MTQ1OSwxOC4wMDAyODkzIEwxNi44NjE4Njk4LDE4LjAwMDI4OTMgTDE4LjkyOTUxNCwyMi43MTAyMTI4IEwxNy45MjcyMzAzLDIyLjcxMDIxMjggTDE3LjUwMzkyMTYsMjEuNzI5MDUxMSBMMTUuMzQ3MTU5OCwyMS43MjkwNTExIFogTTMxLjA1NjQ1MjksMjIuNzA2NzQwNyBMMzIsMjIuNzA2NzQwNyBMMzIsMTggTDMxLjA1NjQ1MjksMTggTDMxLjA1NjQ1MjksMjIuNzA2NzQwNyBaIE0yNy4zMDEwNzE2LDIwLjY4NDgxMjYgTDI5LjA0MDMxMTcsMjAuNjg0ODEyNiBMMjkuMDQwMzExNywxOS44MjY2MjE2IEwyNy4zMDEwNzE2LDE5LjgyNjYyMTYgTDI3LjMwMTA3MTYsMTguODYxOTUyNCBMMjkuODI1ODc3NiwxOC44NjE5NTI0IEwyOS44MjU4Nzc2LDE4LjAwMzQ3MjEgTDI2LjM1NzgxMzgsMTguMDAzNDcyMSBMMjYuMzU3ODEzOCwyMi43MDk5MjM0IEwyOS45MTY3MzEzLDIyLjcwOTkyMzQgTDI5LjkxNjczMTMsMjEuODUxNDQzMSBMMjcuMzAxMDcxNiwyMS44NTE0NDMxIEwyNy4zMDEwNzE2LDIwLjY4NDgxMjYgWiBNMjMuNTUyMDU1OSwyMS4yNDA5Mjk2IEwyMi40ODIzNTUzLDE4IEwyMS43MDE3MDgyLDE4IEwyMC42MzIwMDc1LDIxLjI0MDkyOTYgTDE5LjU5MDk1MTgsMTguMDAyNjA0MSBMMTguNTczMDQzNiwxOC4wMDI2MDQxIEwyMC4yMTU5MzI1LDIyLjcxMjgxNjkgTDIxLjAwNzI4NTIsMjIuNzEyODE2OSBMMjIuMDc4NzIxOSwxOS42MTg4NzM0IEwyMy4xNTAxNTg2LDIyLjcxMjgxNjkgTDIzLjk0ODQ1NTYsMjIuNzEyODE2OSBMMjUuNTg3MDA0NCwxOC4wMDI2MDQxIEwyNC41OTU0MjYzLDE4LjAwMjYwNDEgTDIzLjU1MjA1NTksMjEuMjQwOTI5NiBaIE0xMi41MDE3NjE5LDIwLjY5NzgzMyBDMTIuNTAxNzYxOSwyMS40NjQwMTMgMTIuMTIxMjc2LDIxLjg3MzQzMzIgMTEuNDMwMzI1MiwyMS44NzM0MzMyIEMxMC43MzU2MTI5LDIxLjg3MzQzMzIgMTAuMzUzMTAxNywyMS40NTIxNDk5IDEwLjM1MzEwMTcsMjAuNjY1MTM3MyBMMTAuMzUzMTAxNywxOC4wMDMxODI4IEw5LjM5NjgyMzQzLDE4LjAwMzE4MjggTDkuMzk2ODIzNDMsMjAuNjk3ODMzIEM5LjM5NjgyMzQzLDIyLjAyMzMxMjggMTAuMTMzNDkwNCwyMi43ODM0MTY1IDExLjQxNzMwNDgsMjIuNzgzNDE2NSBDMTIuNzEzODUwMiwyMi43ODM0MTY1IDEzLjQ1NzE3MjEsMjIuMDA4ODQ1NiAxMy40NTcxNzIxLDIwLjY1ODQ4MjQgTDEzLjQ1NzE3MjEsMTguMDAwMjg5MyBMMTIuNTAxNzYxOSwxOC4wMDAyODkzIEwxMi41MDE3NjE5LDIwLjY5NzgzMyBaIE03LjExNTM1NDgxLDE4LjAwMDI4OTMgTDguMDcxMDU0MzQsMTguMDAwMjg5MyBMOC4wNzEwNTQzNCwyMi43MTMxMDYyIEw3LjExNTM1NDgxLDIyLjcxMzEwNjIgTDcuMTE1MzU0ODEsMjAuNzk5MTAzIEw0Ljk1NjI3ODIyLDIwLjc5OTEwMyBMNC45NTYyNzgyMiwyMi43MTMxMDYyIEw0LDIyLjcxMzEwNjIgTDQsMTguMDAwMjg5MyBMNC45NTYyNzgyMiwxOC4wMDAyODkzIEw0Ljk1NjI3ODIyLDE5LjkwMTI3MjEgTDcuMTE1MzU0ODEsMTkuOTAxMjcyMSBMNy4xMTUzNTQ4MSwxOC4wMDAyODkzIFoiIGlkPSJGaWxsLTEiIGZpbGw9IiNGRkZGRkYiPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggZD0iTTE4LDEyIEMxNC42OTEyNjE2LDEyIDEyLDkuMzA4NDQ5MDcgMTIsNiBMMTIuODQ3NTExNiw2IEMxMi44NDc1MTE2LDguODQwODU2NDggMTUuMTU5MTQzNSwxMS4xNTIxOTkxIDE4LDExLjE1MjE5OTEgQzIwLjg0MDg1NjUsMTEuMTUyMTk5MSAyMy4xNTI0ODg0LDguODQwODU2NDggMjMuMTUyNDg4NCw2IEwyNCw2IEMyNCw5LjMwODQ0OTA3IDIxLjMwODQ0OTEsMTIgMTgsMTIiIGlkPSJGaWxsLTMiIGZpbGw9IiNGRkZGRkYiPjwvcGF0aD4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==" alt="Huawei AppGallery" width={100} height={100} className="mt-2" />
                  <a href="https://appgallery.huawei.com/app/C110964449" className="text-blue-500 hover:underline font-bold py-3 px-6 transition-colors duration-300">
                    App Gallery
                  </a>
              </div>
            </div>
          </section>
        )} 

        <section className="container mx-auto my-8 md:my-12 lg:my-16 flex flex-col items-center justify-center text-center">
          <h2 className="text-2xl font-bold mb-4 md:text-3xl lg:text-4xl">
            {  translations?.new_app }
          </h2>
          <p className="text-base md:text-lg lg:text-xl leading-relaxed text-justify max-w-lg">
            {  translations?.what_is }
          </p>
        </section>

        <section className="container mx-auto my-8 md:my-12 lg:my-16 flex flex-col items-center justify-center text-center">
          <h2 className="text-2xl font-bold mb-4 md:text-3xl lg:text-4xl">
            {  translations?.terms }
          </h2>
          <p className="text-base md:text-lg lg:text-xl leading-relaxed text-justify max-w-lg">
            {  translations?.lorem_ipsum }
          </p>
        </section>

        <section className="container mx-auto my-8 md:my-12 lg:my-16 flex flex-col items-center justify-center text-center">
          <h2 className="text-2xl font-bold mb-4 md:text-3xl lg:text-4xl">
            {  translations?.privacy }
          </h2>
          <p className="text-base md:text-lg lg:text-xl leading-relaxed text-justify max-w-lg">
            {  translations?.lorem_ipsum }
          </p>
        </section>
*/}
      </div>
    </React.Fragment>
  )
}
