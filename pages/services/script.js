// document.addEventListener('DOMContentLoaded', function () {
//     fetch('../../modules/header/header.html')
//     .then(response => {
//         if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
//         return response.text();
//     })
//     .then(data => {
//         let splited = data.split("<body>")
//         splited = splited[1].split("</body>")        
//         document.querySelector('header').innerHTML = splited[0];
//     })
//     .catch(error => console.error('Error loading header:', error));
// });
