import en from './en.json'
import ru from './ru.json'

export const defaultLocale = JSON.parse(window.localStorage.getItem('currentLang')) || 'en'

// let url = new URL(window.location);
// let langFromParams = url.searchParams.get('lang');
// if (langFromParams) {
//   defaultLocale = langFromParams
//   url.searchParams.delete('lang')
//   window.location.replace(url.toString())
// }

export const languages = {
  en,
  ru
}
