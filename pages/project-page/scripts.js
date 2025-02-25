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


function headerCall() {
    const navElement = document.querySelector(".header-nav");
    if (navElement) {
        navElement.innerHTML = navigation
            .map(item => `<a href="${item.link}">${item.text}</a>`)
            .join("");
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
    headerCall()
    footerCall()
});


const canvas = document.getElementById('vector_canvas');
const ctx = canvas.getContext('2d');

function drawVector(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = '#ed1c24';
    ctx.lineWidth = 2;
    ctx.stroke();
}

// drawVector(270, 0, 270, 1089);
// drawVector(269, 1089, 929, 1089);
// drawVector(929, 719, 929, 1418);
// drawVector(928, 1418, 1641, 1418);
// drawVector(1641, 1417, 1641, 2063);
// drawVector(1642, 2063, 110, 2063);
// drawVector(111, 2063, 111, 2274);
// drawVector(111, 2274, 1711, 2274);
// drawVector(1711, 2274, 1711, 2622);