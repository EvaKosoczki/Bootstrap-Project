'use strict';

window.onscroll = function () {
    scrolledWindow()
};

function scrolledWindow() {
    const nav = document.querySelector('#main-menu');
    const top = document.body.scrollTop || document.documentElement.scrollTop
    if (top != 0) {
        nav.classList.add('scrolled-nav')
    } else {
        nav.classList.remove('scrolled-nav')
    }
}