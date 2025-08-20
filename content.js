(() =>{
    const currSelection = document.getSelection().toString();
    const currClipboard = navigator.clipboard.readText();
    currClipboard.then((clipText) => navigator.clipboard.writeText(clipText + currSelection));
})();