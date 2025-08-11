const clearStackHotkeyButton = document.getElementById("clearClipboardStackHotkey");
let copiedElements = "";

/**
 * Acess user clipboard and instead of clearing the clipboard stack add it to the end
 * Note: this does not copy css values
 */
const userClipboard = navigator.clipboard;
document.addEventListener("copy", () => {
    copiedElements += document.getSelection().toString();
    userClipboard.writeText(copiedElements);
});
/**
 * If the user presses a specified hotkey then clear the clipboard
 */
document.addEventListener("keydown", (event) => {
    if(event.shiftKey && event.key == 'C'){
        userClipboard.writeText("");
    }
});
clearStackHotkeyButton.addEventListener("click", () =>{
    clearStackHotkeyButton.textContent = 'Recording';
});
