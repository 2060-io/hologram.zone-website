// utils/loadTranslations.js

const context = require.context('../translations', true, /\.json$/);

const loadTranslations = (locale) => {
  try {
    return context(`./${locale}.json`);
  } catch (error) {
    console.error(`Translations for ${locale} not found`);
    return {};
  }
};

export default loadTranslations;
