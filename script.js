const NAV = document.getElementById("nav__ul");
const anchors = document.querySelectorAll('a[href*="#"]')

NAV.addEventListener("click", (event) => {
    NAV.querySelectorAll("a").forEach(li => li.classList.remove("nav__link_active"));
    event.target.classList.add("nav__link_active");
    var blockID = anchor.getAttribute('href').substr(1);
    document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
});