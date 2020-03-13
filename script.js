const nav = document.getElementById("nav__ul");
const anchors = document.querySelectorAll('a[href*="#"]')

var phone_1 = document.getElementById("phone__vertical"); 
var phone_2 = document.getElementById("phone__horizontal");
var phone_content_1 = document.getElementById("phone_content_1");
var phone_content_2 = document.getElementById("phone_content_2");


nav.addEventListener("click", (event) => {
    nav.querySelectorAll("a").forEach(li => li.classList.remove("nav__link_active"));
    event.target.classList.add("nav__link_active");
});

phone_1.addEventListener("click", () => { changePhoneContentVisible(phone_content_1) });
phone_content_1.addEventListener("click", () => { changePhoneContentVisible(phone_content_1) });
phone_2.addEventListener("click", () => { changePhoneContentVisible(phone_content_2) });
phone_content_2.addEventListener("click", () => { changePhoneContentVisible(phone_content_2) });
function changePhoneContentVisible(content) {
    if (content.classList.contains("invisible")) {
        content.classList.remove("invisible")
    }
    else {
        content.classList.add("invisible")
    }
}

