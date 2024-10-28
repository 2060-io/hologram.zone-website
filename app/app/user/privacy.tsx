import React from 'react'

import { TermsAndPrivacy, TranslationsKey, getStyleText } from './TranslationsKey'

const translationsPrivacyKey: TranslationsKey[] = [
  {
    name: 'privacy_policy_title',
    isParagraph: false,
    isTitle1: true,
    isTitle2: false,
    isTitle3: false,
    classNameExtra: 'mb-7',
  },
  { name: 'privacy_policy_text', isParagraph: false, isTitle1: false, isTitle2: false, isTitle3: false },
  {
    name: 'privacy_information_provide_title',
    isParagraph: true,
    isTitle1: false,
    isTitle2: true,
    isTitle3: false,
  },
  {
    name: 'privacy_hologram_profile_title',
    isParagraph: false,
    isTitle1: false,
    isTitle2: false,
    isTitle3: true,
  },
  {
    name: 'privacy_hologram_profile_text',
    isParagraph: true,
    isTitle1: false,
    isTitle2: false,
    isTitle3: false,
  },
  { name: 'privacy_messages_title', isParagraph: false, isTitle1: false, isTitle2: false, isTitle3: true },
  { name: 'privacy_messages_text', isParagraph: true, isTitle1: false, isTitle2: false, isTitle3: false },
  {
    name: 'privacy_verifiable_credentials_title',
    isParagraph: false,
    isTitle1: false,
    isTitle2: false,
    isTitle3: true,
  },
  {
    name: 'privacy_verifiable_credentials_text',
    isParagraph: true,
    isTitle1: false,
    isTitle2: false,
    isTitle3: false,
  },
  { name: 'privacy_connectios_title', isParagraph: false, isTitle1: false, isTitle2: false, isTitle3: true },
  { name: 'privacy_connectios_text', isParagraph: true, isTitle1: false, isTitle2: false, isTitle3: false },
  {
    name: 'privacy_user_support_title',
    isParagraph: false,
    isTitle1: false,
    isTitle2: false,
    isTitle3: true,
  },
  { name: 'privacy_user_support_text', isParagraph: true, isTitle1: false, isTitle2: false, isTitle3: false },
  {
    name: 'privacy_managing_information_title',
    isParagraph: false,
    isTitle1: false,
    isTitle2: false,
    isTitle3: true,
  },
  {
    name: 'privacy_managing_information_text',
    isParagraph: true,
    isTitle1: false,
    isTitle2: false,
    isTitle3: false,
  },
  {
    name: 'privacy_deleting_information_title',
    isParagraph: false,
    isTitle1: false,
    isTitle2: false,
    isTitle3: true,
  },
  {
    name: 'privacy_deleting_information_text',
    isParagraph: true,
    isTitle1: false,
    isTitle2: false,
    isTitle3: false,
  },
  {
    name: 'privacy_information_share_title',
    isParagraph: false,
    isTitle1: false,
    isTitle2: true,
    isTitle3: false,
  },
  { name: 'privacy_parties_title', isParagraph: false, isTitle1: false, isTitle2: false, isTitle3: true },
  { name: 'privacy_parties_text', isParagraph: true, isTitle1: false, isTitle2: false, isTitle3: false },
  {
    name: 'privacy_other_instances_title',
    isParagraph: false,
    isTitle1: false,
    isTitle2: false,
    isTitle3: true,
  },
  {
    name: 'privacy_other_instances_one',
    isParagraph: true,
    isTitle1: false,
    isTitle2: false,
    isTitle3: false,
    classNameExtra: 'pl-5 lg:pl-10 xl:pl-10 2xl:pl-10',
  },
  {
    name: 'privacy_other_instances_two',
    isParagraph: true,
    isTitle1: false,
    isTitle2: false,
    isTitle3: false,
    classNameExtra: 'pl-5 lg:pl-10 xl:pl-10 2xl:pl-10',
  },
  {
    name: 'privacy_other_instances_three',
    isParagraph: true,
    isTitle1: false,
    isTitle2: false,
    isTitle3: false,
    classNameExtra: 'pl-5 lg:pl-10 xl:pl-10 2xl:pl-10',
  },
  {
    name: 'privacy_other_instances_four',
    isParagraph: true,
    isTitle1: false,
    isTitle2: false,
    isTitle3: false,
    classNameExtra: 'pl-5 lg:pl-10 xl:pl-10 2xl:pl-10',
  },
  { name: 'privacy_updates_title', isParagraph: false, isTitle1: false, isTitle2: true, isTitle3: false },
  { name: 'privacy_updates_text', isParagraph: true, isTitle1: false, isTitle2: false, isTitle3: false },
  { name: 'privacy_terms_title', isParagraph: false, isTitle1: false, isTitle2: true, isTitle3: false },
  { name: 'privacy_terms_text', isParagraph: true, isTitle1: false, isTitle2: false, isTitle3: false },
  { name: 'privacy_contact_title', isParagraph: false, isTitle1: false, isTitle2: true, isTitle3: false },
  { name: 'privacy_contact_text', isParagraph: true, isTitle1: false, isTitle2: false, isTitle3: false },
]

const Privacy: React.FC<TermsAndPrivacy> = ({ translations }) => {
  return (
    <div>
      {translationsPrivacyKey.map((translation: TranslationsKey) => (
        <p
          key={translation.name}
          className={`${getStyleText(translation)} + ' ' + ${translation.classNameExtra}`}
        >
          {translations?.[String(translation.name)]}
        </p>
      ))}
    </div>
  )
}

export default Privacy
