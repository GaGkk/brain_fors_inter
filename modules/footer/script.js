const navigation = [
    { id: 1, slug: "about_us", text: "О НАС", link: "../../pages/about-us/about-us.html" },
    { id: 2, slug: "services", text: "УСЛУГИ", link: "../../pages/services/services.html" },
    { id: 3, slug: "projects", text: "ПРОЕКТЫ", link: "../../pages/projects/projects.html" },
    { id: 4, slug: "contacts", text: "КОНТАКТЫ", link: "../../pages/contacts/contacts.html" },
];

const socials = [
    { id: 1, description: "facebook", link: "https://facebook.com", icon: "../../assets/images/socials/FB.svg" },
    { id: 2, description: "instagram", link: "https://www.instagram.com", icon: "../../assets/images/socials/INST.svg" },
    { id: 3, description: "vkontakte", link: "https://vk.com", icon: "../../assets/images/socials/VK.svg" },
    { id: 4, description: "whatsapp", link: "https://www.whatsapp.com", icon: "../../assets/images/socials/WAPP.svg" },
];

document.addEventListener("DOMContentLoaded", function () {
    const navElement = document.querySelector(".nav");
    const navSocialsElement = document.querySelector(".socials_nav");
    if (navElement) {
        navElement.innerHTML = navigation
            .map(item => `<a href="${item.link}" class="nav_button">${item.text}</a>`)
            .join("");
    }
    if (navSocialsElement) {
        navSocialsElement.innerHTML = socials
            .map(item => `<a href="${item.link}" class="socials_logo" style="background-image: url('${item.icon}');"></a>`)
            .join("");
    }
});