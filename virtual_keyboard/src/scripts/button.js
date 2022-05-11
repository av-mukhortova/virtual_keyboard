/* eslint-disable linebreak-style */
export default class Button {
  constructor(name) {
    this.className = name;
    this.caseDownRus = null;
    this.caseUpRus = null;
    this.shiftRus = null;
    this.shiftCapsRus = null;
    this.caseDownEng = null;
    this.caseUpEng = null;
    this.shiftEng = null;
    this.shiftCapsEng = null;
  }

  createButton(parent, rus, eng, shrus, sheng) {
    this.caseDownRus = rus;
    this.caseDownEng = eng;
    this.caseUpRus = rus;
    this.caseUpEng = eng;
    this.shiftRus = shrus;
    this.shiftEng = sheng;
    this.shiftCapsRus = shrus;
    this.shiftCapsEng = sheng;
    if (this.className.substring(0, 3) === 'Key' || this.className === 'Backquote' || this.className === 'BracketLeft' || this.className === 'BracketRight'
            || this.className === 'Semicolon' || this.className === 'Quote' || this.className === 'Comma' || this.className === 'Period') {
      this.caseUpRus = rus.toUpperCase();
      this.caseUpEng = eng.toUpperCase();
      this.shiftCapsRus = this.shiftRus.toLowerCase();
      this.shiftCapsEng = this.shiftEng.toLowerCase();
    }

    let currLang = localStorage.getItem('language');
    currLang = currLang || 'eng';

    const keyboardButton = document.createElement('div');
    keyboardButton.className = `keyboard--key ${this.className}`;
    parent.appendChild(keyboardButton);

    const btnRus = document.createElement('span');
    btnRus.className = `rus${currLang === 'eng' ? ' hidden' : ''}`;
    keyboardButton.appendChild(btnRus);
    const btnEng = document.createElement('span');
    btnEng.className = `eng${currLang === 'eng' ? '' : ' hidden'}`;
    keyboardButton.appendChild(btnEng);

    const caseDownRus = document.createElement('span');
    caseDownRus.className = 'caseDown';
    caseDownRus.innerText = rus;
    btnRus.appendChild(caseDownRus);
    const caseDownEng = document.createElement('span');
    caseDownEng.className = 'caseDown';
    caseDownEng.innerText = eng;
    btnEng.appendChild(caseDownEng);

    const caseUpRus = document.createElement('span');
    caseUpRus.className = 'caseUp hidden';
    caseUpRus.innerText = this.caseUpRus;
    btnRus.appendChild(caseUpRus);
    const caseUpEng = document.createElement('span');
    caseUpEng.className = 'caseUp hidden';
    caseUpEng.innerText = this.caseUpEng;
    btnEng.appendChild(caseUpEng);

    const shiftRus = document.createElement('span');
    shiftRus.className = 'shift hidden';
    shiftRus.innerText = this.shiftRus;
    btnRus.appendChild(shiftRus);
    const shiftEng = document.createElement('span');
    shiftEng.className = 'shift hidden';
    shiftEng.innerText = this.shiftEng;
    btnEng.appendChild(shiftEng);

    const shiftCapsRus = document.createElement('span');
    shiftCapsRus.className = 'shiftCaps hidden';
    shiftCapsRus.innerText = this.shiftCapsRus;
    btnRus.appendChild(shiftCapsRus);
    const shiftCapsEng = document.createElement('span');
    shiftCapsEng.className = 'shiftCaps hidden';
    shiftCapsEng.innerText = this.shiftCapsEng;
    btnEng.appendChild(shiftCapsEng);
  }
}
