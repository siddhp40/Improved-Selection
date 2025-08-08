let copiedElements = "";
const userClipboard = navigator.clipboard;
document.addEventListener("copy", () => {
    copiedElements += document.getSelection().toString();
    userClipboard.writeText(copiedElements);
});
document.addEventListener("keydown", (event) => {
    if(event.shiftKey && event.key == 'C'){
        userClipboard.writeText("");
    }
});
function newHotkey(){
    const clearStackHotkeyButton = document.getElementById("clearClipboardStackHotkey");
    clearStackHotkeyButton.textContent = 'Recording';
}

