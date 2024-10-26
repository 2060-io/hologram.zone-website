import { Translations } from '../components/utils'

export interface TranslationsKey {
  name: string
  isParagraph: boolean
  isTitle1: boolean
  isTitle2: boolean
  isTitle3: boolean
  classNameExtra?: string
}

export interface TermsAndPrivacy {
  translations: Translations | undefined
}

const classNamesTitle1 = 'text-2xl lg:text-4xl xl:text-4xl 2xl:text-4xl text-hologram-color font-semibold'
const classNameTitle2 = 'text-xl lg:text-4xl xl:text-4xl 2xl:text-4xl font-semibold my-6'
const classNameTitle3 = 'lg:text-3xl xl:text-3xl 2xl:text-3xl font-semibold my-6'
const classNameParagraph = 'lg:text-xl xl:lg:text-xl 2xl:lg:text-xl text-justify'

export const getStyleText = (translation: TranslationsKey): string => {
  return translation.isParagraph
    ? classNameParagraph
    : translation.isTitle1
      ? classNamesTitle1
      : translation.isTitle2
        ? classNameTitle2
        : translation.isTitle3
          ? classNameTitle3
          : ''
}
