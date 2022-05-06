import { Button } from './button';

export function createKeyboard(parent) {
    const keyboardDiv = document.createElement('div');
    keyboardDiv.className = 'keyboard';
    parent.appendChild(keyboardDiv);

    const keyboardRow0 = document.createElement('div');
    keyboardRow0.className = 'keyboard--row';
    keyboardDiv.appendChild(keyboardRow0);

    let Backquote = new Button('Backquote');
    Backquote.createButton(keyboardRow0, 'ё', '`', 'Ё', '~');

    let Digit1 = new Button('Digit1');
    Digit1.createButton(keyboardRow0, '1', '1', '!', '!');

    let Digit2 = new Button('Digit2');
    Digit2.createButton(keyboardRow0, '2', '2', '"', '@');

    let Digit3 = new Button('Digit3');
    Digit3.createButton(keyboardRow0, '3', '3', '№', '#');

    let Digit4 = new Button('Digit4');
    Digit4.createButton(keyboardRow0, '4', '4', ';', '$');

    let Digit5 = new Button('Digit5');
    Digit5.createButton(keyboardRow0, '5', '5', '%', '%');

    let Digit6 = new Button('Digit6');
    Digit6.createButton(keyboardRow0, '6', '6', ':', '^');

    let Digit7 = new Button('Digit7');
    Digit7.createButton(keyboardRow0, '7', '7', '?', '&');

    let Digit8 = new Button('Digit8');
    Digit8.createButton(keyboardRow0, '8', '8', '*', '*');

    let Digit9 = new Button('Digit9');
    Digit9.createButton(keyboardRow0, '9', '9', '(', '(');

    let Digit0 = new Button('Digit0');
    Digit0.createButton(keyboardRow0, '0', '0', ')', ')');

    let Minus = new Button('Minus');
    Minus.createButton(keyboardRow0, '-', '-', '_', '_');

    let Equal = new Button('Equal');
    Equal.createButton(keyboardRow0, '=', '=', '+', '+');

    let Backspace = new Button('Backspace');
    Backspace.createButton(keyboardRow0, 'backspace', 'backspace', 'backspace', 'backspace');

    const keyboardRow1 = document.createElement('div');
    keyboardRow1.className = 'keyboard--row';
    keyboardDiv.appendChild(keyboardRow1);

    let Tab = new Button('Tab');
    Tab.createButton(keyboardRow1, 'tab', 'tab', 'tab', 'tab');

    let KeyQ = new Button('KeyQ');
    KeyQ.createButton(keyboardRow1, 'й', 'q', 'Й', 'Q');

    let KeyW = new Button('KeyW');
    KeyW.createButton(keyboardRow1, 'ц', 'w', 'Ц', 'W');

    let KeyE = new Button('KeyE');
    KeyE.createButton(keyboardRow1, 'у', 'e', 'У', 'E');

    let KeyR = new Button('KeyR');
    KeyR.createButton(keyboardRow1, 'к', 'r', 'К', 'R');

    let KeyT = new Button('KeyT');
    KeyT.createButton(keyboardRow1, 'е', 't', 'Е', 'T');

    let KeyY = new Button('KeyY');
    KeyY.createButton(keyboardRow1, 'н', 'y', 'Н', 'Y');

    let KeyU = new Button('KeyU');
    KeyU.createButton(keyboardRow1, 'г', 'u', 'Г', 'U');

    let KeyI = new Button('KeyI');
    KeyI.createButton(keyboardRow1, 'ш', 'i', 'Ш', 'I');

    let KeyO = new Button('KeyO');
    KeyO.createButton(keyboardRow1, 'щ', 'o', 'Щ', 'O');

    let KeyP = new Button('KeyP');
    KeyP.createButton(keyboardRow1, 'з', 'p', 'З', 'P');

    let BracketLeft = new Button('BracketLeft');
    BracketLeft.createButton(keyboardRow1, 'х', '[', 'Х', '{');

    let BracketRight = new Button('BracketRight');
    BracketRight.createButton(keyboardRow1, 'ъ', ']', 'Ъ', '}');

    let Backslash = new Button('Backslash');
    Backslash.createButton(keyboardRow1, '\\', '\\', '/', '|');

    let Delete = new Button('Delete');
    Delete.createButton(keyboardRow1, 'del', 'del', 'del', 'del');

    const keyboardRow2 = document.createElement('div');
    keyboardRow2.className = 'keyboard--row';
    keyboardDiv.appendChild(keyboardRow2);

    let CapsLock = new Button('CapsLock');
    CapsLock.createButton(keyboardRow2, 'caps lock', 'caps lock', 'caps lock', 'caps lock');

    let KeyA = new Button('KeyA');
    KeyA.createButton(keyboardRow2, 'ф', 'a', 'Ф', 'A');

    let KeyS = new Button('KeyS');
    KeyS.createButton(keyboardRow2, 'ы', 's', 'Ы', 'S');

    let KeyD = new Button('KeyD');
    KeyD.createButton(keyboardRow2, 'в', 'd', 'В', 'D');

    let KeyF = new Button('KeyF');
    KeyF.createButton(keyboardRow2, 'а', 'f', 'А', 'F');

    let KeyG = new Button('KeyG');
    KeyG.createButton(keyboardRow2, 'п', 'g', 'П', 'G');

    let KeyH = new Button('KeyH');
    KeyH.createButton(keyboardRow2, 'р', 'h', 'Р', 'H');

    let KeyJ = new Button('KeyJ');
    KeyJ.createButton(keyboardRow2, 'о', 'j', 'О', 'J');

    let KeyK = new Button('KeyK');
    KeyK.createButton(keyboardRow2, 'л', 'k', 'Л', 'K');

    let KeyL = new Button('KeyL');
    KeyL.createButton(keyboardRow2, 'д', 'l', 'Д', 'L');

    let Semicolon = new Button('Semicolon');
    Semicolon.createButton(keyboardRow2, 'ж', ';', 'Ж', ':');

    let Quote = new Button('Quote');
    Quote.createButton(keyboardRow2, 'э', '\'', 'Э', '"');

    let Enter = new Button('Enter');
    Enter.createButton(keyboardRow2, 'enter', 'enter', 'enter', 'enter');

    const keyboardRow3 = document.createElement('div');
    keyboardRow3.className = 'keyboard--row';
    keyboardDiv.appendChild(keyboardRow3);

    let ShiftLeft = new Button('ShiftLeft');
    ShiftLeft.createButton(keyboardRow3, 'shift', 'shift', 'shift', 'shift');

    let KeyZ = new Button('KeyZ');
    KeyZ.createButton(keyboardRow3, 'я', 'z', 'Я', 'Z');

    let KeyX = new Button('KeyX');
    KeyX.createButton(keyboardRow3, 'ч', 'x', 'Ч', 'X');

    let KeyC = new Button('KeyC');
    KeyC.createButton(keyboardRow3, 'с', 'c', 'С', 'C');

    let KeyV = new Button('KeyV');
    KeyV.createButton(keyboardRow3, 'м', 'v', 'М', 'V');

    let KeyB = new Button('KeyB');
    KeyB.createButton(keyboardRow3, 'и', 'b', 'И', 'B');

    let KeyN = new Button('KeyN');
    KeyN.createButton(keyboardRow3, 'т', 'n', 'Т', 'N');

    let KeyM = new Button('KeyM');
    KeyM.createButton(keyboardRow3, 'ь', 'm', 'Ь', 'M');

    let Comma = new Button('Comma');
    Comma.createButton(keyboardRow3, 'б', ',', 'Б', '<');

    let Period = new Button('Period');
    Period.createButton(keyboardRow3, 'ю', '.', 'Ю', '>');

    let Slash = new Button('Slash');
    Slash.createButton(keyboardRow3, '.', '/', ',', '?');

    let ArrowUp = new Button('ArrowUp');
    ArrowUp.createButton(keyboardRow3, '▲', '▲', '▲', '▲');

    let ShiftRight = new Button('ShiftRight');
    ShiftRight.createButton(keyboardRow3, 'shift', 'shift', 'shift', 'shift');

    const keyboardRow4 = document.createElement('div');
    keyboardRow4.className = 'keyboard--row';
    keyboardDiv.appendChild(keyboardRow4);

    let ControlLeft = new Button('ControlLeft');
    ControlLeft.createButton(keyboardRow4, 'ctrl', 'ctrl', 'ctrl', 'ctrl');

    let MetaLeft = new Button('MetaLeft');
    MetaLeft.createButton(keyboardRow4, 'win', 'win', 'win', 'win');

    let AltLeft = new Button('AltLeft');
    AltLeft.createButton(keyboardRow4, 'alt', 'alt', 'alt', 'alt');

    let Space = new Button('Space');
    Space.createButton(keyboardRow4, '', '', '', '');

    let AltRight = new Button('AltRight');
    AltRight.createButton(keyboardRow4, 'аlt', 'alt', 'alt', 'alt');

    let ArrowLeft = new Button('ArrowLeft');
    ArrowLeft.createButton(keyboardRow4, '◄', '◄', '◄', '◄');

    let ArrowDown = new Button('ArrowDown');
    ArrowDown.createButton(keyboardRow4, '▼', '▼', '▼', '▼');

    let ArrowRight = new Button('ArrowRight');
    ArrowRight.createButton(keyboardRow4, '►', '►', '►', '►');

    let ControlRight = new Button('ControlRight');
    ControlRight.createButton(keyboardRow4, 'ctrl', 'ctrl', 'ctrl', 'ctrl');
}