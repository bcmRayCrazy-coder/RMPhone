var quickFab = new mdui.Fab('#quickFab');

var openSettings = document.querySelectorAll("#open-settings");
openSettings.forEach((e) => {
    e.addEventListener("click", () => {
        document.querySelector('.settings-hover-layer').classList.add('show');
        document.querySelector('.settings-wrapper').classList.add('show');
        document.querySelector('body').style.overflow = 'hidden';
    })
})

var closeSettings = document.querySelectorAll("#close-settings");
closeSettings.forEach((e) => {
    e.addEventListener("click", () => {
        document.querySelector('.settings-hover-layer').classList.remove('show');
        document.querySelector('.settings-wrapper').classList.remove('show')
        document.querySelector('body').style.overflow = 'scroll';
    })
})