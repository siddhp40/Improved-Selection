(() => {
    writeToTextArea();
})();

const userClipboardTextArea = document.getElementById("userClipboardTextArea");

document.addEventListener("visibilitychange", () =>{
    if(document.visibilityState === "visible"){
        setTimeout(writeToTextArea, 10);
    }
});

userClipboardTextArea.addEventListener("input", () =>{
    navigator.clipboard.writeText(userClipboardTextArea.value);
});

function writeToTextArea(){
    const currClipboard = navigator.clipboard.readText();
    currClipboard.then((clipText) => userClipboardTextArea.textContent = clipText);
}
    