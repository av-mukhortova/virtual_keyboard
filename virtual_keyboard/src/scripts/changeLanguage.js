export function changeLanguage(code, langChange) {
    const eng = document.querySelectorAll('.eng');
    const rus = document.querySelectorAll('.rus');
    if (code === 'ControlLeft' || code === 'AltLeft') {
        langChange.add(event.code);
    }

    if (langChange.has('ControlLeft') && langChange.has('AltLeft')) {
        let curr_lang = localStorage.getItem('language');
        curr_lang = curr_lang ? curr_lang : 'eng';
        localStorage.setItem('language', curr_lang === 'eng' ? 'rus' : 'eng');
        if (curr_lang === 'eng') {
            eng.forEach(element => element.classList.add('hidden'));
            rus.forEach(element => element.classList.remove('hidden'));
        } else {
            eng.forEach(element => element.classList.remove('hidden'));
            rus.forEach(element => element.classList.add('hidden'));
        }
    }
}