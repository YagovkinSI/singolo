const nav = document.getElementById("nav__ul");
const anchors = document.querySelectorAll('a[href*="#"]')

const phone_1 = document.getElementById("phone__vertical"); 
const phone_2 = document.getElementById("phone__horizontal");
const phone_content_1 = document.getElementById("phone_content_1");
const phone_content_2 = document.getElementById("phone_content_2");

const tag_ul = document.getElementById("tags-ul");
const portfolio_grid = document.getElementById("portfolio-grid");

const portfolio_images = document.getElementsByClassName("portfolio-img");

const btn_send = document.getElementById("btn_send");
const message_ok = document.getElementById("message-ok");

nav.addEventListener("click", (event) => {   
    nav.querySelectorAll("a").forEach(li => li.classList.remove("nav__link_active"));
    event.target.classList.add("nav__link_active");
});

tag_ul.addEventListener("click", (event) => {
    var li = event.target.classList.contains("tags-li")
        ? event.target
        : event.target.parentNode;
    if (!li.classList.contains("tags-li"))
        return;
    tag_ul.querySelectorAll("li").forEach(li => li.classList.remove("tags-li_active"));
    li.classList.add("tags-li_active");
    var array = portfolio_grid.querySelectorAll("div");
    portfolio_grid.append(array[0]);
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




