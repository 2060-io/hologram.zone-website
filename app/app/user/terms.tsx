import { TermsAndPrivacy, TranslationsKey, getStyleText } from './TranslationsKey'

const translationsTermsKey: TranslationsKey[] = [
  { name: 'terms_service_title', isParagraph: false, isTitle1: true, isTitle2: false, isTitle3: false },
  { name: 'terms_about_title', isParagraph: false, isTitle1: false, isTitle2: true, isTitle3: false },
  { name: 'terms_minium_age_title', isParagraph: false, isTitle1: false, isTitle2: false, isTitle3: true },
  { name: 'terms_minium_age_text', isParagraph: true, isTitle1: false, isTitle2: false, isTitle3: false },
  {
    name: 'terms_privacy_user_data_title',
    isParagraph: false,
    isTitle1: false,
    isTitle2: false,
    isTitle3: false,
  },
  {
    name: 'terms_privacy_user_data_text',
    isParagraph: true,
    isTitle1: false,
    isTitle2: false,
    isTitle3: true,
  },
  { name: 'terms_software_title', isParagraph: false, isTitle1: false, isTitle2: false, isTitle3: true },
  { name: 'terms_software_text', isParagraph: true, isTitle1: false, isTitle2: false, isTitle3: false },
  { name: 'terms_fees_title', isParagraph: false, isTitle1: false, isTitle2: false, isTitle3: true },
  { name: 'terms_fees_text', isParagraph: true, isTitle1: false, isTitle2: false, isTitle3: false },
  { name: 'terms_using_title', isParagraph: false, isTitle1: false, isTitle2: true, isTitle3: false },
  { name: 'terms_our_title', isParagraph: false, isTitle1: false, isTitle2: false, isTitle3: true },
  { name: 'terms_our_text', isParagraph: true, isTitle1: false, isTitle2: false, isTitle3: false },
  { name: 'terms_legal_title', isParagraph: false, isTitle1: false, isTitle2: false, isTitle3: true },
  { name: 'terms_legal_text', isParagraph: true, isTitle1: false, isTitle2: false, isTitle3: false },
  { name: 'terms_harm_title', isParagraph: false, isTitle1: false, isTitle2: false, isTitle3: true },
  { name: 'terms_harm_text', isParagraph: true, isTitle1: false, isTitle2: false, isTitle3: false },
  { name: 'terms_keeping_title', isParagraph: false, isTitle1: false, isTitle2: false, isTitle3: true },
  { name: 'terms_keeping_text', isParagraph: true, isTitle1: false, isTitle2: false, isTitle3: false },
  { name: 'terms_access_title', isParagraph: false, isTitle1: false, isTitle2: false, isTitle3: true },
  { name: 'terms_access_text', isParagraph: true, isTitle1: false, isTitle2: false, isTitle3: false },
  { name: 'terms_third_party_title', isParagraph: false, isTitle1: false, isTitle2: false, isTitle3: true },
  { name: 'terms_third_party_text', isParagraph: true, isTitle1: false, isTitle2: false, isTitle3: false },
  {
    name: 'terms_you_rights_license_title',
    isParagraph: false,
    isTitle1: false,
    isTitle2: true,
    isTitle3: false,
  },
  { name: 'terms_you_rights_title', isParagraph: false, isTitle1: false, isTitle2: false, isTitle3: true },
  { name: 'terms_you_rights_text', isParagraph: false, isTitle1: false, isTitle2: false, isTitle3: false },
  { name: 'terms_right_title', isParagraph: false, isTitle1: false, isTitle2: false, isTitle3: true },
  { name: 'terms_right_text', isParagraph: true, isTitle1: false, isTitle2: false, isTitle3: false },
  { name: 'terms_license_title', isParagraph: false, isTitle1: false, isTitle2: false, isTitle3: true },
  { name: 'terms_license_text', isParagraph: true, isTitle1: false, isTitle2: false, isTitle3: false },
  {
    name: 'terms_disclaimers_limitations_title',
    isParagraph: false,
    isTitle1: false,
    isTitle2: true,
    isTitle3: false,
  },
  { name: 'terms_disclaimers_title', isParagraph: false, isTitle1: false, isTitle2: false, isTitle3: true },
  { name: 'terms_disclaimers_text', isParagraph: true, isTitle1: false, isTitle2: false, isTitle3: false },
  { name: 'terms_limitations_title', isParagraph: false, isTitle1: false, isTitle2: false, isTitle3: true },
  { name: 'terms_limitations_text', isParagraph: true, isTitle1: false, isTitle2: false, isTitle3: false },
  {
    name: 'terms_availability_services_title',
    isParagraph: false,
    isTitle1: false,
    isTitle2: false,
    isTitle3: true,
  },
  {
    name: 'terms_availability_services_text',
    isParagraph: true,
    isTitle1: false,
    isTitle2: false,
    isTitle3: false,
  },
  {
    name: 'terms_resolving_disputes_ending_title',
    isParagraph: false,
    isTitle1: false,
    isTitle2: true,
    isTitle3: false,
  },
  { name: 'terms_resolving_title', isParagraph: false, isTitle1: false, isTitle2: false, isTitle3: true },
  { name: 'terms_resolving_text', isParagraph: true, isTitle1: false, isTitle2: false, isTitle3: false },
  { name: 'terms_ending_title', isParagraph: false, isTitle1: false, isTitle2: false, isTitle3: true },
  { name: 'terms_ending_text', isParagraph: true, isTitle1: false, isTitle2: false, isTitle3: false },
  { name: 'terms_general_title', isParagraph: false, isTitle1: false, isTitle2: true, isTitle3: false },
  { name: 'terms_general_text', isParagraph: true, isTitle1: false, isTitle2: false, isTitle3: false },
]

const Terms: React.FC<TermsAndPrivacy> = ({ translations }) => {
  return (
    <div>
      {translationsTermsKey.map((translation: TranslationsKey) => (
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

export default Terms
