// This part of code i try to call header.html :)

// document.addEventListener("DOMContentLoaded", async function () {
//     try {
//         const headerContainer = document.getElementById("header-container");
//         if (!headerContainer) {
//             console.error("Header is not found!");
//             return;
//         }
//         const response = await fetch("../../modules/header/header.html");
//         if (!response.ok) throw new Error("header.htmlloading error ");
//         const text = await response.text();
//         const parser = new DOMParser();
//         const doc = parser.parseFromString(text, "text/html");
//         const header = doc.querySelector("header");
//         if (!header) {
//             console.error("In the header.html not found <header>!");
//             return;
//         }
//         headerContainer.innerHTML = "";
//         headerContainer.appendChild(header);
//         console.log("Header:", headerContainer.innerHTML);
//         setTimeout(() => {
//             const script = document.createElement("script");
//             script.src = "../../modules/header/script.js";
//             document.body.appendChild(script);
//         }, 100);
//     } catch (error) {
//         console.error("Header loading err:", error);
//     }
// });
// And on this part i just surrended :)

const navigation = [
    { id: 1, slug: "about_us", text: "О НАС", link: "./pages/about-us/about-us.html" },
    { id: 2, slug: "services", text: "УСЛУГИ", link: "./pages/services/services.html" },
    { id: 3, slug: "projects", text: "ПРОЕКТЫ", link: "./pages/projects/projects.html" },
    { id: 4, slug: "news", text: "НОВОСТИ", link: "./pages/news/news.html" },
    { id: 5, slug: "contacts", text: "КОНТАКТЫ", link: "./pages/contacts/contacts.html" },
];

const socials = [
    { id: 1, description: "facebook", link: "https://facebook.com", icon: "./assets/images/socials/FB.svg" },
    { id: 2, description: "instagram", link: "https://www.instagram.com", icon: "./assets/images/socials/INST.svg" },
    { id: 3, description: "vkontakte", link: "https://vk.com", icon: "./assets/images/socials/VK.svg" },
    { id: 4, description: "whatsapp", link: "https://www.whatsapp.com", icon: "./assets/images/socials/WAPP.svg" },
];

const blockOneSocials = [
    { id: 1, description: "facebook", link: "https://facebook.com", icon: "./assets/images/socials/FB_W.svg" },
    { id: 2, description: "instagram", link: "https://www.instagram.com", icon: "./assets/images/socials/INST_W.svg" },
    { id: 3, description: "vkontakte", link: "https://vk.com", icon: "./assets/images/socials/VK_W.svg" },
    { id: 4, description: "whatsapp", link: "https://www.whatsapp.com", icon: "./assets/images/socials/WAPP_W.svg" },
];

const clientLogos = [
    { id: 1, path: "client-site", path: "./assets/images/clients_logo/image_001.png" },
    { id: 2, path: "client-site", path: "./assets/images/clients_logo/image_002.png" },
    { id: 3, path: "client-site", path: "./assets/images/clients_logo/image_003.png" },
    { id: 4, path: "client-site", path: "./assets/images/clients_logo/image_004.png" },
    { id: 5, path: "client-site", path: "./assets/images/clients_logo/image_005.png" },
    { id: 6, path: "client-site", path: "./assets/images/clients_logo/image_006.png" },
    { id: 7, path: "client-site", path: "./assets/images/clients_logo/image_007.png" },
    { id: 8, path: "client-site", path: "./assets/images/clients_logo/image_008.png" },
    { id: 9, path: "client-site", path: "./assets/images/clients_logo/image_009.png" },
    { id: 10, path: "client-site", path: "./assets/images/clients_logo/image_010.png" },
    { id: 11, path: "client-site", path: "./assets/images/clients_logo/image_011.png" },
    { id: 12, path: "client-site", path: "./assets/images/clients_logo/image_012.png" },
    { id: 13, path: "client-site", path: "./assets/images/clients_logo/image_013.png" },
    { id: 14, path: "client-site", path: "./assets/images/clients_logo/image_014.png" },
    { id: 15, path: "client-site", path: "./assets/images/clients_logo/image_015.png" },
    { id: 16, path: "client-site", path: "./assets/images/clients_logo/image_016.png" },
    { id: 17, path: "client-site", path: "./assets/images/clients_logo/image_017.png" },
]


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

function blockOneCall() {
    const navSocialsElement = document.querySelector(".block_1__socials_nav");
    if (navSocialsElement) {
        navSocialsElement.innerHTML = blockOneSocials
            .map(item => `<a href="${item.link}" class="block_1__socials_logo" style="background-image: url('${item.icon}');"></a>`)
            .join("");
    }
}

function clientLogoCall() {
    const logoContainerElement = document.querySelector(".block_4__logos_container")
    if (logoContainerElement) {
        logoContainerElement.innerHTML = clientLogos
            .map(item => `<img class="logo_item_${item.id}" src="${item.path}" alt="">`)
            .join("");
    }
}


document.addEventListener("DOMContentLoaded", function () {
    headerCall()
    footerCall()
    blockOneCall()
    clientLogoCall()
});