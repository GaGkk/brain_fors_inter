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