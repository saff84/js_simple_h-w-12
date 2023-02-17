const modal = document.getElementById('subscribe-modal'),
    closeButton = document.querySelector('.modal__close');

window.onload = function () {
    if (getCookie() !== 'true') {
        modal.classList.add('modal_active')
    }
}

closeButton.addEventListener('click', () => {
    modal.classList.remove('modal_active')
    document.cookie = 'subscribe=true'
})

function getCookie() {
    if (document.cookie.length == 0) {
        return
    } else {
        const pairs = document.cookie.split('; ')
        const cookie = pairs.find(el => el.startsWith('subscribe'))
        return cookie.substring(10)
    }
}