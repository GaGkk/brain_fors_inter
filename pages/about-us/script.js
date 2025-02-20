
const content = [
    {
        type: 'left-text-image',
        title: 'О НАС',
        text: [
            `
            Принимая во внимание показатели успешности, глубокий 
            уровень погружения требует анализа благоприятных перспектив. Предварительные выводы неутешительны: консультация с широким активом играет важную роль в формировании экспериментов, поражающих по своей масштабности и грандиозности. 
            Для современного мира укрепление и развитие внутренней 
            структуры не оставляет шанса для переосмысления внешнеэкономических политик.
            `,
            `
            Принимая во внимание показатели успешности, глубокий уровень погружения требует анализа благоприятных перспектив. Предварительные выводы неутешительны: консультация с широким активом играет важную роль в формировании экспериментов, поражающих по своей масштабности и грандиозности. 
            Для современного мира укрепление и развитие внутренней 
            структуры не оставляет шанса для переосмысления внешнеэкономических политик.
            `,
            `
            Принимая во внимание показатели успешности, глубокий уровень погружения требует анализа благоприятных перспектив. Предварительные выводы неутешительны: консультация с широким активом играет важную роль в формировании экспериментов, поражающих по своей масштабности и грандиозности. 
            Для современного мира укрепление и развитие
            `
        ],
        img: '../../assets/images/page_content/about-us_1.png',
        img_class: 'img_1'
    },
    {
        type: 'right-text-image',
        title: null,
        text: [
            `
              Принимая во внимание показатели успешности, глубокий уровень
              погружения требует анализа благоприятных перспектив.
              Предварительные выводы неутешительны: консультация с широким
              активом играет важную роль в формировании экспериментов,
              поражающих по своей масштабности и грандиозности. Для современного
              мира укрепление и развитие внутренней структуры не оставляет шанса
              для переосмысления внешнеэкономических политик.
            `,
            `
              Принимая во внимание показатели успешности, глубокий уровень
              погружения требует анализа благоприятных перспектив.
              Предварительные выводы неутешительны: консультация с широким
              активом играет важную роль в формировании экспериментов,
              поражающих по своей масштабности и грандиозности.
            `,
        ],
        img: '../../assets/images/page_content/about-us_1.png',
        img_class: 'img_2'
    },

]

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


function headerCall(){
    const navElement = document.querySelector(".header-nav");
    if (navElement) {
        navElement.innerHTML = navigation
            .map(item => `<a href="${item.link}">${item.text}</a>`)
            .join("");
    }
}

function footerCall(){
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

// document.addEventListener('DOMContentLoaded', function () {
//     const decorationsElement = document.querySelector(".content_container")
//     if (decorationsElement) {
//         const htmls = ``
//         decorationsElement.innerHTML = content.map(el => {
//             switch (el.type) {
//                 case 'left-text-image':
//                     htmls.concat(`
//                         <div class="content_block ${el.type}">
//                         <div class="text_container">
//                     `)
//                     if (el.title) {
//                         htmls.concat(`
//                                 <p class="title">
//                                 ${el.title}
//                                 </p>
//                             `)
//                     }
//                     for (let i = 0; i < el.text.length; i++) {
//                         htmls.concat(`
//                                     <p class="text">${el.text[i]}</p>
//                                 `)
//                     }
//                     htmls.concat(`
//                         </div>
//                         <div class="img_container">
//                             <img class="${el.img_class}" src="${el.img}" alt="">
//                         </div>
//                         </div>
//                     `)
//                     break
//                 default:
//                     console.log('Page creating Error');
//                     break


//             }
//         }).join("")
//     }
// })

// /* <div class="content_block left-text-image">
// <div class="text_container">
//         <p class="title">
//             {TITLE_VARIABLE}
//         </p>
//         <p class="text">{VARIABLE}</p>
// </div>
// <div class="img_container">
//     <img class="img_1" src="../../assets/images/page_content/about-us_1.png" alt="">
// </div>
// </div> */