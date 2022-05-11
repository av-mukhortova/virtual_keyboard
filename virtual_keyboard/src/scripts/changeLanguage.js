/* eslint-disable linebreak-style */
export default function changeLanguage(code, langChange) {
  const eng = document.querySelectorAll('.eng');
  const rus = document.querySelectorAll('.rus');
  if (code === 'ControlLeft' || code === 'AltLeft') {
    // eslint-disable-next-line no-restricted-globals
    langChange.add(event.code);
  }

  if (langChange.has('ControlLeft') && langChange.has('AltLeft')) {
    let currLang = localStorage.getItem('language');
    currLang = currLang || 'eng';
    localStorage.setItem('language', currLang === 'eng' ? 'rus' : 'eng');
    if (currLang === 'eng') {
      eng.forEach((element) => element.classList.add('hidden'));
      rus.forEach((element) => element.classList.remove('hidden'));
    } else {
      eng.forEach((element) => element.classList.remove('hidden'));
      rus.forEach((element) => element.classList.add('hidden'));
    }
  }
}
