const nav = document.getElementById("nav__ul");
const anchors = document.querySelectorAll('a[href*="#"]')

const phone_1 = document.getElementById("phone__vertical"); 
const phone_2 = document.getElementById("phone__horizontal");
const phone_content_1 = document.getElementById("phone_content_1");
const phone_content_2 = document.getElementById("phone_content_2");

const portfolio_images = document.getElementsByClassName("portfolio-img");

const btn_send = document.getElementById("btn_send");
const message_ok = document.getElementById("message-ok");


nav.addEventListener("click", (event) => {
    nav.querySelectorAll("a").forEach(li => li.classList.remove("nav__link_active"));
    event.target.classList.add("nav__link_active");
});

phone_1.addEventListener("click", () => { changeElementVisible(phone_content_1) });
phone_content_1.addEventListener("click", () => { changeElementVisible(phone_content_1) });
phone_2.addEventListener("click", () => { changeElementVisible(phone_content_2) });
phone_content_2.addEventListener("click", () => { changeElementVisible(phone_content_2) });

for (var i = 0; i < portfolio_images.length; i++) {
    portfolio_images[i].addEventListener("click", (event) => {
        for (var i = 0; i < portfolio_images.length; i++)
            portfolio_images[i].classList.remove("portfolio-img_active");
        event.target.classList.add("portfolio-img_active");
    });
}

message_ok.addEventListener("click", () => {
    changeElementVisible(document.getElementById("message-block"));
});

btn_send.addEventListener("click", () => {
    if (!document.getElementById("name").checkValidity() || !document.getElementById("email").checkValidity())
        return;
    var subject = document.getElementById("subject").value.toString();
    if (subject == "") subject = "No subject";
    document.getElementById("message-subject").innerText = subject;
    var describe = document.getElementById("describe").value.toString();
    if (describe == "") describe = "No describe";
    document.getElementById("message-describe").innerText = describe;
    changeElementVisible(document.getElementById("message-block"));
});

function changeElementVisible(element) {
    if (element.classList.contains("invisible")) {
        element.classList.remove("invisible")
    }
    else {
        element.classList.add("invisible")
    }
}




