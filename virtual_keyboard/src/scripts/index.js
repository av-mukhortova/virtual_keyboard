/* eslint-disable linebreak-style */
/* eslint-disable no-restricted-globals */
/* eslint-disable func-names */
import '../assets/styles/style.css';
import createPage from './page';
import changeLanguage from './changeLanguage';
import { getCursorPosition, setCursorPosition } from './cursorPosition';

createPage();

const langChange = new Set();
const text = document.querySelector('textarea');
const keyButton = document.querySelector('.keyboard');
const caseUp = document.querySelectorAll('.caseUp');
const caseDown = document.querySelectorAll('.caseDown');
const capsLock = document.querySelector('.CapsLock');
const shift = document.querySelectorAll('.shift');
const shiftCaps = document.querySelectorAll('.shiftCaps');
const shiftLeft = document.querySelector('.ShiftLeft');
const shiftRight = document.querySelector('.ShiftRight');

function hideAllSpans() {
  caseDown.forEach((element) => element.classList.add('hidden'));
  caseUp.forEach((element) => element.classList.add('hidden'));
  shift.forEach((element) => element.classList.add('hidden'));
  shiftCaps.forEach((element) => element.classList.add('hidden'));
}

document.addEventListener('keydown', (event) => {
  const kd = document.querySelector(`.${event.code}`);

  changeLanguage(event.code, langChange);

  let newStr = '';
  if (event.code === 'Tab') {
    newStr = '\t';
    event.preventDefault();
  } else if (event.code === 'ArrowUp') {
    newStr = '▲';
    event.preventDefault();
  } else if (event.code === 'ArrowDown') {
    newStr = '▼';
    event.preventDefault();
  } else if (event.code === 'ArrowLeft') {
    newStr = '◄';
    event.preventDefault();
  } else if (event.code === 'ArrowRight') {
    newStr = '►';
    event.preventDefault();
  }
  if (newStr !== '') {
    const cursor = getCursorPosition(text);
    text.value = text.value.substring(0, cursor.end) + newStr + text.value.substring(cursor.end);
    setCursorPosition(text, cursor.end + 1, cursor.end + 1);
  }
  if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
    hideAllSpans();
    if (capsLock.classList.contains('key_active')) {
      shiftCaps.forEach((element) => element.classList.remove('hidden'));
    } else {
      shift.forEach((element) => element.classList.remove('hidden'));
    }
  }
  if (event.code === 'CapsLock') {
    hideAllSpans();
    if (!capsLock.classList.contains('key_active')) {
      capsLock.classList.add('key_active');
      if (shiftLeft.classList.contains('key_active') || shiftRight.classList.contains('key_active')) {
        shiftCaps.forEach((element) => element.classList.remove('hidden'));
      } else {
        caseUp.forEach((element) => element.classList.remove('hidden'));
      }
    } else {
      capsLock.classList.remove('key_active');
      if (shiftLeft.classList.contains('key_active') || shiftRight.classList.contains('key_active')) {
        shift.forEach((element) => element.classList.remove('hidden'));
      } else {
        caseDown.forEach((element) => element.classList.remove('hidden'));
      }
    }
  } else if (kd && kd.classList) {
    kd.classList.add('key_active');
  }
});

document.addEventListener('keyup', (event) => {
  const kd = document.querySelector(`.${event.code}`);
  if (kd && kd.classList && event.code !== 'CapsLock') {
    kd.classList.remove('key_active');
  }
  langChange.clear();
  if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
    hideAllSpans();
    if (capsLock.classList.contains('key_active')) {
      caseUp.forEach((element) => element.classList.remove('hidden'));
    } else {
      caseDown.forEach((element) => element.classList.remove('hidden'));
    }
  }
});

keyButton.onclick = function () {
  let el = event.target;
  while (el.tagName !== 'DIV') {
    el = el.parentElement;
  }
  const classes = el.classList;
  if (classes[0] && classes[0] === 'keyboard--key') {
    let newStr = '';
    if (classes[1] === 'Space') {
      newStr += ' ';
    } else if (classes[1] === 'Backspace') {
      const cursor = getCursorPosition(text);
      const str = text.value;
      if (cursor.start === cursor.end) {
        text.value = str.substring(0, cursor.end - 1) + str.substring(cursor.end);
        setCursorPosition(text, cursor.start - 1, cursor.start - 1);
      } else {
        text.value = str.substring(0, cursor.start) + str.substring(cursor.end);
        setCursorPosition(text, cursor.start, cursor.start);
      }
    } else if (classes[1] === 'Delete') {
      const cursor = getCursorPosition(text);
      const str = text.value;
      if (cursor.start === cursor.end) {
        text.value = str.substring(0, cursor.end) + str.substring(cursor.end + 1);
      } else {
        text.value = str.substring(0, cursor.start) + str.substring(cursor.end);
      }
      setCursorPosition(text, cursor.start, cursor.start);
    } else if (classes[1] === 'Tab') {
      newStr += '\t';
    } else if (classes[1] === 'Enter') {
      newStr += '\n';
    } else if (classes[1] === 'MetaLeft') {
      newStr += '';
    } else if (classes[1] === 'CapsLock') {
      hideAllSpans();
      if (!capsLock.classList.contains('key_active')) {
        capsLock.classList.add('key_active');
        if (shiftLeft.classList.contains('key_active') || shiftRight.classList.contains('key_active')) {
          shiftCaps.forEach((element) => element.classList.remove('hidden'));
        } else {
          caseUp.forEach((element) => element.classList.remove('hidden'));
        }
      } else {
        capsLock.classList.remove('key_active');
        if (shiftLeft.classList.contains('key_active') || shiftRight.classList.contains('key_active')) {
          shift.forEach((element) => element.classList.remove('hidden'));
        } else {
          caseDown.forEach((element) => element.classList.remove('hidden'));
        }
      }
    } else if (classes[1] === 'ShiftLeft' || classes[1] === 'ShiftRight' || classes[1] === 'ControlLeft'
            || classes[1] === 'ControlRight' || classes[1] === 'AltLeft' || classes[1] === 'AltRight') {
      newStr += '';
    } else {
      newStr += event.target.innerText;
    }
    if (newStr !== '') {
      const cursor = getCursorPosition(text);
      text.value = text.value.substring(0, cursor.end) + newStr + text.value.substring(cursor.end);
      setCursorPosition(text, cursor.end + 1, cursor.end + 1);
      text.focus();
    }
  }
};

keyButton.onmousedown = function () {
  let el = event.target;
  while (el.tagName !== 'DIV') {
    el = el.parentElement;
  }
  const classes = el.classList;
  if (classes[0] && classes[0] === 'keyboard--key') {
    if (classes[1] === 'ShiftLeft' || classes[1] === 'ShiftRight') {
      hideAllSpans();
      el.classList.add('key_active');
      if (capsLock.classList.contains('key_active')) {
        shiftCaps.forEach((element) => element.classList.remove('hidden'));
      } else {
        shift.forEach((element) => element.classList.remove('hidden'));
      }
    }
  }
  text.focus();
};

keyButton.onmouseup = function () {
  let el = event.target;
  while (el.tagName !== 'DIV') {
    el = el.parentElement;
  }
  const classes = el.classList;
  if (classes[0] && classes[0] === 'keyboard--key') {
    if (classes[1] === 'ShiftLeft' || classes[1] === 'ShiftRight') {
      hideAllSpans();
      el.classList.remove('key_active');
      if (capsLock.classList.contains('key_active')) {
        caseUp.forEach((element) => element.classList.remove('hidden'));
      } else {
        caseDown.forEach((element) => element.classList.remove('hidden'));
      }
    }
  }
  text.focus();
};
