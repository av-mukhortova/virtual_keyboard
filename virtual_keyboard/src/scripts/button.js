export class Button {
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
        if (this.className.substring(0, 3) === 'Key' || this.className === 'Backquote' || this.className === 'BracketLeft' || this.className === 'BracketRight' ||
            this.className === 'Semicolon' || this.className === 'Quote' || this.className === 'Comma' || this.className === 'Period') {
            this.caseUpRus = rus.toUpperCase();
            this.caseUpEng = eng.toUpperCase();
            this.shiftCapsRus = this.shiftRus.toLowerCase();
            this.shiftCapsEng = this.shiftEng.toLowerCase();
        }

        let curr_lang = localStorage.getItem('language');
        curr_lang = curr_lang ? curr_lang : 'eng';

        let keyboardButton = document.createElement('div');
        keyboardButton.className = 'keyboard--key ' + this.className;
        parent.appendChild(keyboardButton);

        let btn_rus = document.createElement('span');
        btn_rus.className = 'rus' + (curr_lang === 'eng' ? ' hidden' : '');
        keyboardButton.appendChild(btn_rus);
        let btn_eng = document.createElement('span');
        btn_eng.className = 'eng' + (curr_lang === 'eng' ? '' : ' hidden');
        keyboardButton.appendChild(btn_eng);

        let caseDownRus = document.createElement('span');
        caseDownRus.className = 'caseDown';
        caseDownRus.innerText = rus;
        btn_rus.appendChild(caseDownRus);
        let caseDownEng = document.createElement('span');
        caseDownEng.className = 'caseDown';
        caseDownEng.innerText = eng;
        btn_eng.appendChild(caseDownEng);

        let caseUpRus = document.createElement('span');
        caseUpRus.className = 'caseUp hidden';
        caseUpRus.innerText = this.caseUpRus;
        btn_rus.appendChild(caseUpRus);
        let caseUpEng = document.createElement('span');
        caseUpEng.className = 'caseUp hidden';
        caseUpEng.innerText = this.caseUpEng;
        btn_eng.appendChild(caseUpEng);

        let shiftRus = document.createElement('span');
        shiftRus.className = 'shift hidden';
        shiftRus.innerText = this.shiftRus;
        btn_rus.appendChild(shiftRus);
        let shiftEng = document.createElement('span');
        shiftEng.className = 'shift hidden';
        shiftEng.innerText = this.shiftEng;
        btn_eng.appendChild(shiftEng);

        let shiftCapsRus = document.createElement('span');
        shiftCapsRus.className = 'shiftCaps hidden';
        shiftCapsRus.innerText = this.shiftCapsRus;
        btn_rus.appendChild(shiftCapsRus);
        let shiftCapsEng = document.createElement('span');
        shiftCapsEng.className = 'shiftCaps hidden';
        shiftCapsEng.innerText = this.shiftCapsEng;
        btn_eng.appendChild(shiftCapsEng);
    }
}