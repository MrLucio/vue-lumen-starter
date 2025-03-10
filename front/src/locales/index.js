import { createI18n } from 'vue-i18n';

// Load messages
var messages = {
  en: {
    navbar: require('./en/navbar.json'),
    general: require('./en/general.json'),
    auth: require('./en/auth.json'),
    notFound: require('./en/404-not-found.json'),
  },

  // Other languages...
};

// Export VueI18n
export default createI18n({
  locale: process.env.VUE_APP_I18N_LOCALE || 'en',
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en',
  messages: messages,
});
