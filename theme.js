const themeSwitchButton = document.getElementById("theme-switch");
const lightmode = localStorage.getItem('lightmode');

if(lightmode == 'true') enableLightMode()

function enableLightMode(){
    document.body.classList.add('lightmode');
    localStorage.setItem('lightmode', 'true');
}
function disableLightMode(){
    document.body.classList.remove('lightmode');
    localStorage.setItem('lightmode', null);
} 
themeSwitchButton.addEventListener('click', () => {
    isLightMode = localStorage.getItem('lightmode');
    isLightMode !== 'true' ? enableLightMode() : disableLightMode();
});
