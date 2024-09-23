'use client'

import Image from 'next/image'

const BannerHologramMessaging = () => {
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
      <button className="bg-indigo-500 text-white font-semibold h-8 w-20 px-4 mt-2 rounded-lg">Get</button>
    </div>
  )
}

export default BannerHologramMessaging
