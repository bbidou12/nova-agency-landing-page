const menubtn = document.getElementById("menu_btn")
const navlinks = document.getElementById("nav_links")
const links = document.querySelectorAll("#nav_links a")


if (menubtn && navlinks) {    
    menubtn.addEventListener("click", () => {
        navlinks.classList.toggle("active")
    })
}

links.forEach(link => {
    link.addEventListener("click", () => {
        navlinks.classList.remove("active");
    });
});

document.addEventListener("click", (e) => {

    if (!navlinks.contains(e.target) && !menubtn.contains(e.target)) {
        navlinks.classList.remove("active");
    }

});