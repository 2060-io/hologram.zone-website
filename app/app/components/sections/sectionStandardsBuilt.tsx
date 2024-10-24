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
      <div className="bg-zinc-300">
        <div className="container mx-auto 2xl:px-28 xl:px-28 lg:px-28 px-6  w-aut align-middle text-xl text-center text-gray-500 py-8">
          {translations.built_standar}
        </div>
      </div>
      <div className="bg-white">
        <div className="container mx-auto 2xl:px-28 xl:px-28 lg:px-28 px-6 lg:flex xl:flex 2xl:flex items-center justify-center pt-5 pb-7">
          <div className="flex lg:flex-1 xl:flex-1 2xl:flex-1 items-center">
            <div className="flex-1 mx-auto">
              <Link
                href="https://identity.foundation/didcomm-messaging/spec/"
                target="_blank"
                className="text-center"
              >
                <Image
                  src={'images/logo-didcomm.svg'}
                  alt="didcomm"
                  width={170}
                  height={45}
                  priority={false}
                  className="mx-auto p-4 transform transition duration-300 ease-in-out hover:scale-110"
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
                  className="mx-auto pt-3 transition duration-300 ease-in-out hover:scale-110"
                />
              </Link>
            </div>
          </div>

          <div className="flex lg:flex-1 xl:flex-1 2xl:flex-1 my-5">
            <div className="flex-1 lg:hidden xl:hidden 2xl:hidden">
              <Link href="https://openwallet.foundation/" target="_blank">
                <Image
                  src={'images/logo-open-wallet.svg'}
                  alt="open wallet"
                  width={180}
                  height={46}
                  priority={false}
                  className="mx-auto pt-4 pr-4 transition duration-300 ease-in-out hover:scale-110"
                />
              </Link>
            </div>
            <div className="flex-1 hidden lg:block xl:block 2xl:block">
              <Link href="https://github.com/openwallet-foundation/credo-ts" target="_blank">
                <Image
                  src={'images/logo-credo.svg'}
                  alt="credo"
                  width={60}
                  height={42}
                  priority={false}
                  className="mx-auto pt-3 transition duration-300 ease-in-out hover:scale-110"
                />
              </Link>
            </div>
            <div className="flex-1 block lg:hidden xl:hidden 2xl:hidden">
              <Link href="https://github.com/openwallet-foundation/credo-ts" target="_blank">
                <Image
                  src={'images/logo-credo.svg'}
                  alt="credo"
                  width={60}
                  height={42}
                  priority={false}
                  className="mx-auto pt-3 transition duration-300 ease-in-out hover:scale-110"
                />
              </Link>
            </div>
            <div className="flex-1 hidden lg:block xl:block 2xl:block">
              <Link href="https://identity.foundation/" target="_blank">
                <Image
                  src={'images/logo-dif.png'}
                  alt="dif"
                  width={124}
                  height={42}
                  priority={false}
                  className="mx-auto pt-3 pl-4 transition duration-300 ease-in-out hover:scale-110"
                />
              </Link>
            </div>
          </div>
          <div className="flex lg:flex-1 xl:flex-1 2xl:flex-1">
            <div className="flex-1">
              <Link href="https://trustoverip.org/" target="_blank">
                <Image
                  src={'images/logo-trust-over-ip.svg'}
                  alt="trust over ip"
                  width={110}
                  height={46}
                  priority={false}
                  className="mx-auto pt-3 px-2 transition duration-300 ease-in-out hover:scale-110"
                />
              </Link>
            </div>
            <div className="flex-1 hidden lg:block xl:block 2xl:block">
              <Link href="https://openwallet.foundation/" target="_blank">
                <Image
                  src={'images/logo-open-wallet.svg'}
                  alt="open wallet"
                  width={180}
                  height={46}
                  priority={false}
                  className="mx-auto pt-4 pr-4 transition duration-300 ease-in-out hover:scale-110"
                />
              </Link>
            </div>
            <div className="flex-1 block lg:hidden xl:hidden 2xl:hidden">
              <Link href="https://identity.foundation/" target="_blank">
                <Image
                  src={'images/logo-dif.png'}
                  alt="dif"
                  width={124}
                  height={42}
                  priority={false}
                  className="mx-auto pt-3 pl-4 transition duration-300 ease-in-out hover:scale-110"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectionStandardsBuilt
