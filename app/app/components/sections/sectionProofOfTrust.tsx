import Image from 'next/image'
import React from 'react'

import { Translations } from '../utils'

interface SectionProofOfTrust {
  translations: Translations
}

const SectionProofOfTrust: React.FC<SectionProofOfTrust> = ({ translations }) => {
  return (
    <section className="container mx-auto px-6 mt-16">
      <div className="flex flex-col 2xl:flex-row xl:flex-row lg:flex-row">
        <div className="flex-1 text-justify 2xl:px-20 xl:px-20 lg:px-20 mb-10">
          <p
            className="
								mb-6
								2xl:pt-16
								xl:pt-16
								lg:pt-16
								font-semibold
                text-center
								2xl:text-left
								xl:text-left
								lg:text-left
								text-hologram-color
								text-4xl
								2xl:text-5xl
								xl:text-5xl
								lg:text-5xl
                "
          >
            {translations.proof_of_trust_title}
          </p>
          <div className="text-justify">
            <p className="font-semibold mb-5">
              {translations.proof_of_trust_paragraph_1_line_1}
              <br />
              {translations.proof_of_trust_paragraph_1_line_2}
            </p>
            <p className="mb-5">{translations.proof_of_trust_paragraph_2}</p>
            <p>
              <span className="font-semibold">{translations.proof_of_trust_paragraph_3_phrase_1}</span>
              &nbsp;
              {translations.proof_of_trust_paragraph_3_phrase_2}
              &nbsp;
              <span className="font-semibold">{translations.proof_of_trust_paragraph_3_phrase_3}</span>
              &nbsp;
              {translations.proof_of_trust_paragraph_3_phrase_4}
            </p>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <Image
            src={'images/proof-of-trust.png'}
            alt={'proof of trust'}
            width={366}
            height={549}
            priority={false}
            id="image-proof-of-trust-light"
          />
          <Image
            src={'images/proof-of-trust-dark.png'}
            alt={'proof of trust'}
            width={366}
            height={549}
            priority={false}
            id="image-proof-of-trust-dark"
          />
        </div>
      </div>
    </section>
  )
}

export default React.memo(SectionProofOfTrust)
