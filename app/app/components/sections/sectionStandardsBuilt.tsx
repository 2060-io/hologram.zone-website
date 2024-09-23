'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { Translations } from '../utils'

interface SectionStandardsBuilt {
  translations: Translations
}

const SectionStandardsBuilt: React.FC<SectionStandardsBuilt> = ({ translations }) => {
  return (
    <div>
      <div className="-mx-6 bg-zinc-300 w-aut align-middle text-xl text-center text-gray-500 py-8 px-3">
        {translations.built_standar}
      </div>
      <div className="lg:flex xl:flex 2xl:flex items-center justify-center -mx-6 pt-5 pb-5 bg-white">
        <div className="flex lg:flex-1 xl:flex-1 2xl:flex-1">
          <div className="flex-1">
            <Link
              href="https://identity.foundation/didcomm-messaging/spec/"
              target="_blank"
              className="text-center"
            >
              <Image
                src={'images/logo-didcomm.svg'}
                alt="didcomm"
                width={171}
                height={42}
                priority={false}
                className="p-4 mt-0 mr-auto mb-0 ml-auto transform transition duration-300 ease-in-out hover:scale-110"
              />
            </Link>
          </div>
          <div className="flex-1">
            <Link href="https://www.w3.org/" target="_blank">
              <Image
                src={'images/logo-w3c.svg'}
                alt="w3c"
                width={88}
                height={42}
                priority={false}
                className="pt-3 mt-0 mr-auto mb-0 ml-auto transition duration-300 ease-in-out hover:scale-110"
              />
            </Link>
          </div>
          <div className="flex-1">
            <Link href="https://openwallet.foundation/" target="_blank">
              <Image
                src={'images/logo-open-wallet.svg'}
                alt="open wallet"
                width={180}
                height={46}
                priority={false}
                className="pt-4 pr-4 mt-0 mr-auto mb-0 ml-auto transition duration-300 ease-in-out hover:scale-110"
              />
            </Link>
          </div>
        </div>
        <div className="flex lg:flex-1 xl:flex-1 2xl:flex-1">
          <div className="flex-1">
            <Link href="https://identity.foundation/" target="_blank">
              <Image
                src={'images/logo-dif.png'}
                alt="dif"
                width={124}
                height={42}
                priority={false}
                className="pt-3 pl-4 mt-0 mr-auto mb-0 ml-auto transition duration-300 ease-in-out hover:scale-110"
              />
            </Link>
          </div>
          <div className="flex-1">
            <Link href="https://trustoverip.org/" target="_blank">
              <Image
                src={'images/logo-trust-over-ip.svg'}
                alt="trust over ip"
                width={110}
                height={46}
                priority={false}
                className="pt-3 px-2 mt-0 mr-auto mb-0 ml-auto transition duration-300 ease-in-out hover:scale-110"
              />
            </Link>
          </div>
          <div className="flex-1">
            <Link href="https://github.com/openwallet-foundation/credo-ts" target="_blank">
              <Image
                src={'images/logo-credo.svg'}
                alt="credo"
                width={60}
                height={42}
                priority={false}
                className="pt-3 mt-0 mr-auto mb-0 ml-auto transition duration-300 ease-in-out hover:scale-110"
              />
            </Link>
          </div>
        </div>
      </div>
      {/* <div
        className="
					-mx-6
          p-10
					flex
          justify-center
					bg-white
				"
      >
        <div className='flex lg:flex-1 xl:flex-1 2xl:flex-1'>
          <div className="flex-auto w-33">
            <Link href="https://identity.foundation/didcomm-messaging/spec/" target="_blank">
              <Image
                src={'images/logo-didcomm.svg'}
                alt="didcomm"
                width={171}
                height={42}
                priority={false}
              />
            </Link>
          </div>
          <div className="flex-auto w-33">
            <Link href="" target="_blank">
              <Image
                src={'images/logo-w3c.svg'}
                alt="w3c"
                width={88}
                height={42}
                priority={false}
              />
            </Link>
          </div>
          <div className="flex-auto w-33">
            <Link href="" target="_blank">
              <Image
                src={'images/logo-credo.svg'}
                alt="credo"
                width={59}
                height={42}
                priority={false}
              />
            </Link>
          </div>
        </div>
        <div className='flex lg:flex-1 xl:flex-1 2xl:flex-1'>
          <div className="flex-auto w-33">
            <Link href="" target="_blank">
              <Image
                src={'images/logo-dif.png'}
                alt="dif"
                width={124}
                height={42}
                priority={false}
              />
            </Link>
          </div>
          <div className="flex-auto w-33">
            <Link href="" target="_blank">
              <Image
                src={'images/logo-trust-over-ip.svg'}
                alt="trust over ip"
                width={110}
                height={46}
                priority={false}
              />
            </Link>
          </div>
          <div className="flex-auto w-33">
            <Link href="" target="_blank">
              <Image
                src={'images/logo-open-wallet.svg'}
                alt="open wallet"
                width={180}
                height={46}
                priority={false}
              />
            </Link>
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default SectionStandardsBuilt
