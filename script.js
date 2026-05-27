
function toggleMenu() {
    const ul = document.querySelector('ul');
    if (ul.style.display === "flex") {
        ul.style.display = "none";
    } else {
        ul.style.display = "block";
    }
};
