/* eslint-disable linebreak-style */
export function getCursorPosition(text) {
  if (document.selection) {
    text.focus();
    const range = document.selection.createRange();
    const rangelen = range.text.length;
    range.moveStart('character', -text.value.length);
    const start = range.text.length - rangelen;
    return {
      start,
      end: start + rangelen,
    };
  }
  if (text.selectionStart || text.selectionStart === '0') {
    return {
      start: text.selectionStart,
      end: text.selectionEnd,
    };
  }
  return {
    start: 0,
    end: 0,
  };
}
export function setCursorPosition(text, start, end) {
  if (text.setSelectionRange) {
    text.focus();
    text.setSelectionRange(start, end);
  } else if (text.createTextRange) {
    const range = text.createTextRange();
    range.collapse(true);
    range.moveEnd('character', end);
    range.moveStart('character', start);
    range.select();
  }
}
