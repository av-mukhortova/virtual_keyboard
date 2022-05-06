export function getCursorPosition(text) {
    if (document.selection) {
        text.focus();
        var range = document.selection.createRange();
        var rangelen = range.text.length;
        range.moveStart('character', -text.value.length);
        var start = range.text.length - rangelen;
        return {
            'start': start,
            'end': start + rangelen
        };
    }
    else if (text.selectionStart || text.selectionStart == '0') {
        return {
            'start': text.selectionStart,
            'end': text.selectionEnd
        };
    } else {
        return {
            'start': 0,
            'end': 0
        };
    }
}
export function setCursorPosition(text, start, end) {
    if (text.setSelectionRange) {
        text.focus();
        text.setSelectionRange(start, end);
    }
    else if (text.createTextRange) {
        var range = text.createTextRange();
        range.collapse(true);
        range.moveEnd('character', end);
        range.moveStart('character', start);
        range.select();
    }
}