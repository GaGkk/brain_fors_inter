document.addEventListener("DOMContentLoaded", function () {
    fetch("module.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("content").innerHTML = data;
        })
        .catch(error => console.error("Error loading module:", error));
});
