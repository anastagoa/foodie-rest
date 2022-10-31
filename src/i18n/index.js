import en from './en.json'
import ru from './ru.json'

export const defaultLocale = JSON.parse(window.localStorage.getItem('currentLang')) || 'en'

export const languages = {
  en,
  ru
}
