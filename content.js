(() =>{
    const currSelection = document.getSelection().toString().replace(/(\r\n|\n|\r)/gm, "");
    const currClipboard = navigator.clipboard.readText();
    currClipboard.then((clipText) => navigator.clipboard.writeText(clipText + currSelection));
})();
