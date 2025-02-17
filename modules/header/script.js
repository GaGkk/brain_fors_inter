const navigation = [
    { id: 1, slug: "about_us", text: "О НАС", link: "../../pages/about-us/about-us.html" },
    { id: 2, slug: "services", text: "УСЛУГИ", link: "../../pages/services/services.html" },
    { id: 3, slug: "projects", text: "ПРОЕКТЫ", link: "../../pages/projects/projects.html" },
    { id: 4, slug: "contacts", text: "КОНТАКТЫ", link: "../../pages/contacts/contacts.html" },
];

document.addEventListener("DOMContentLoaded", function () {
    const navElement = document.querySelector(".nav");
    if (navElement) {
        navElement.innerHTML = navigation
            .map(item => `<a href="${item.link}">${item.text}</a>`)
            .join("");
    }
});