const navigation = [
    { id: 1, slug: "about_us", text: "О НАС", link: "../../pages/about-us/about-us.html" },
    { id: 2, slug: "services", text: "УСЛУГИ", link: "../../pages/services/services.html" },
    { id: 3, slug: "projects", text: "ПРОЕКТЫ", link: "../../pages/projects/projects.html" },
    { id: 4, slug: "news", text: "НОВОСТИ", link: "../../pages/news/news.html" },
    { id: 5, slug: "contacts", text: "КОНТАКТЫ", link: "../../pages/contacts/contacts.html" },
];

let navActive = false

function navCall() {
    const navElement = document.querySelector(".header-nav");
    if (navElement) {
        navElement.innerHTML = navigation
            .map(item => `<a href="${item.link}">${item.text}</a>`)
            .join("");
    }
}

function navButtonClick() {
    navButtonActive()
    navActive = !navActive
}

function navButtonActive() {
    if (navActive) {
        const body_background = document.querySelector(".body_background");
        body_background.innerHTML = ``;
        const header_nav = document.querySelector(".header-nav")
        header_nav.innerHTML = ``
        navButton()
    }
    else {
        const body_background = document.querySelector(".body_background");
        body_background.innerHTML = `<div onclick="navButtonClick()"></div>`
        navCall()
    }
}

function navButton() {
    const navElement = document.querySelector(".header-nav");
    if (navElement) {
        navElement.innerHTML = `<i onclick="navButtonClick()"></i>`
    }
}

document.addEventListener("DOMContentLoaded", function () {
    if (window.screen.width >= 1000) {
        navCall()
    } else {
        navButton()
    }
});