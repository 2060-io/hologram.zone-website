'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

declare global {
  interface Window {
    hms?: any
    google?: any
  }
}

const BannerHologramMessaging = ({ urlParams = '' }) => {
  const [shouldShowBanner, setShouldShowBanner] = useState(false)

  const [platform, setPlatform] = useState<'ios' | 'android' | 'unknown'>('unknown')
  const [showHuawei, setShowHuawei] = useState(false)
  const [showGoogle, setShowGoogle] = useState(false)

  // App store links
  const APP_LINKS = {
    ios: 'https://apps.apple.com/app/hologram-messaging/id6474701855',
    google: 'https://play.google.com/store/apps/details?id=io.twentysixty.mobileagent.m',
    huawei: 'https://appgallery.huawei.com/app/C110964449',
  }

  useEffect(() => {
    detectPlatform()
  }, [])

  useEffect(() => {
    detectPlatform()

    const params = new URLSearchParams(urlParams)
    const hasOob = params.has('oob') || params.has('_oob')

    if (!hasOob) {
      setShouldShowBanner(true)
    }
  }, [urlParams])
  const userAgent = navigator.userAgent.toLowerCase()

  const detectPlatform = () => {
    // iOS detection
    if (/iphone|ipad|ipod/.test(userAgent)) {
      setPlatform('ios')
      return
    }

    // Android detection
    if (/android/.test(userAgent)) {
      setPlatform('android')
      checkAndroidStores()
      return
    }

    // Default case
    setPlatform('unknown')
    setShowGoogle(true)
    setShowHuawei(true)
  }

  const checkAndroidStores = () => {
    // Check for Huawei
    const isHuawei =
      userAgent.includes('huawei') || userAgent.includes('honor') || typeof window?.hms !== 'undefined'

    // Check for Google Play availability
    const isGoogle = !isHuawei || typeof window?.google !== 'undefined'

    setShowHuawei(isHuawei)
    setShowGoogle(isGoogle || !isHuawei) // Show Google if not Huawei or if both
  }

  const handleStoreClick = (store: 'ios' | 'google' | 'huawei') => {
    // Track click event if needed
    window.location.href = APP_LINKS[store] + (urlParams ? `&referrer=${encodeURIComponent(urlParams)}` : '')
  }

  // Don't show banner on desktop
  if (platform === 'unknown' || !shouldShowBanner) {
    return null
  }

  return (
    <div className="p-2 flex justify-around dark:bg-indigo-300 bg-indigo-100 align-middle">
      <Image
        src="images/ico-hologram.png"
        alt="hologram"
        width={32}
        height={32}
        className="w-[32px] h-[32px]"
        priority={false}
      />
      <p>
        <span className="font-semibold">Hologram Messaging</span>
        <br />
        Chat & Verificable Credentials
      </p>

      <div className="flex gap-2">
        {platform === 'ios' && (
          <button
            onClick={() => handleStoreClick('ios')}
            className="bg-indigo-500 text-white font-semibold h-8 w-20 px-4 rounded-lg"
          >
            Get
          </button>
        )}

        {showGoogle && (
          <button
            onClick={() => handleStoreClick('google')}
            className="bg-indigo-500 text-white font-semibold h-8 w-20 px-4 rounded-lg"
          >
            Install
          </button>
        )}

        {showHuawei && (
          <button
            onClick={() => handleStoreClick('huawei')}
            className="bg-indigo-500 text-white font-semibold h-8 w-20 px-4 rounded-lg"
          >
            Install
          </button>
        )}
      </div>
    </div>
  )
}
export default BannerHologramMessaging
