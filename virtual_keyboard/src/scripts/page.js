import { createKeyboard } from './keyboard';

export function createPage() {
    const body = document.querySelector('body');

    const wrapper = document.createElement('div');
    wrapper.className = 'wrapper';
    body.appendChild(wrapper);

    const formatDiv = document.createElement('div');
    formatDiv.className = 'format';
    wrapper.appendChild(formatDiv);

    const h1 = document.createElement('h1');
    h1.innerText = 'RSS Virtual keyboard';
    formatDiv.appendChild(h1);

    const textarea = document.createElement('textarea');
    formatDiv.appendChild(textarea);

    createKeyboard(formatDiv);

    const langP = document.createElement('p');
    langP.innerText = 'Language change: left ctrl + left alt';
    formatDiv.appendChild(langP);

    const descrP = document.createElement('p');
    descrP.innerText = 'OS Windows';
    formatDiv.appendChild(descrP);
}