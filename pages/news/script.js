const navigation = [
    { id: 1, slug: "about_us", text: "О НАС", link: "../../pages/about-us/about-us.html" },
    { id: 2, slug: "services", text: "УСЛУГИ", link: "../../pages/services/services.html" },
    { id: 3, slug: "projects", text: "ПРОЕКТЫ", link: "../../pages/projects/projects.html" },
    { id: 4, slug: "news", text: "НОВОСТИ", link: "../../pages/news/news.html" },
    { id: 5, slug: "contacts", text: "КОНТАКТЫ", link: "../../pages/contacts/contacts.html" },
];

const socials = [
    { id: 1, description: "facebook", link: "https://facebook.com", icon: "../../assets/images/socials/FB.svg" },
    { id: 2, description: "instagram", link: "https://www.instagram.com", icon: "../../assets/images/socials/INST.svg" },
    { id: 3, description: "vkontakte", link: "https://vk.com", icon: "../../assets/images/socials/VK.svg" },
    { id: 4, description: "whatsapp", link: "https://www.whatsapp.com", icon: "../../assets/images/socials/WAPP.svg" },
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

function footerCall() {
    const navElement = document.querySelector(".footer-nav");
    const navSocialsElement = document.querySelector(".footer-socials_nav");
    if (navElement) {
        navElement.innerHTML = navigation
            .map(item => `<a href="${item.link}" class="footer-nav_button">${item.text}</a>`)
            .join("");
    }
    if (navSocialsElement) {
        navSocialsElement.innerHTML = socials
            .map(item => `<a href="${item.link}" class="footer-socials_logo" style="background-image: url('${item.icon}');"></a>`)
            .join("");
    }
}

document.addEventListener("DOMContentLoaded", function () {
    if (window.screen.width >= 1024) {
        navCall()
    } else {
        navButton()
    }
    footerCall()
});