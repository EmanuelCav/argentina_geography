import { NativeModules, Platform } from 'react-native';
import { I18n } from 'i18n-js';

import en from './locales/en.json';
import es from './locales/es.json';
import de from './locales/de.json';
import fr from './locales/fr.json';
import it from './locales/it.json';
import pt from './locales/pt.json';
import tr from './locales/tr.json';

const i18n = new I18n({
    en,
    es,
    de,
    fr,
    it,
    pt,
    tr
})

const deviceLanguage: string =
    Platform.OS === 'ios'
        ? NativeModules.SettingsManager.settings.AppleLocale ||
        NativeModules.SettingsManager.settings.AppleLanguages[0]
        : NativeModules.I18nManager.localeIdentifier

const languageCode = deviceLanguage?.split(/[-_]/)[0] || 'es';

i18n.defaultLocale = 'es'
i18n.locale = languageCode
i18n.enableFallback = true

export default i18n