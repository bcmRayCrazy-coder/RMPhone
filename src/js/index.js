var quickFab = new mdui.Fab('#quickFab');
var phoneScreen = document.querySelector('#phone-screen');

var openSettings = document.querySelectorAll("#open-settings");
openSettings.forEach((e) => {
    e.addEventListener("click", () => {
        document.querySelector('.settings-hover-layer').classList.add('show');
        document.querySelector('.settings-wrapper').classList.add('show');
        document.querySelector('.settings-wrapper').classList.remove('hide');
        document.querySelector('body').style.overflow = 'hidden';
    })
})

var closeSettings = document.querySelectorAll("#close-settings");
closeSettings.forEach((e) => {
    e.addEventListener("click", () => {
        document.querySelector('.settings-hover-layer').classList.remove('show');
        document.querySelector('.settings-wrapper').classList.remove('show');
        document.querySelector('.settings-wrapper').classList.add('hide');
        document.querySelector('body').style.overflow = 'scroll';
    })

})
document.querySelector('.settings-hover-layer').addEventListener("click", () => {
    document.querySelector('.settings-hover-layer').classList.remove('show');
    document.querySelector('.settings-wrapper').classList.remove('show')
    document.querySelector('body').style.overflow = 'scroll';
})

function power(isOn) {
    if (isOn) {
        phoneScreen.setAttribute('src', 'screen/on.html');
    }
}