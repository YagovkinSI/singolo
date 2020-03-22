const nav = document.getElementById("nav__ul");
const anchors = document.querySelectorAll('a[href*="#"]');

const arrow_left = document.getElementById("slider__control_left");
const arrow_rigth = document.getElementById("slider__control_rigth");
const bg_slider = document.getElementById("slider");
const splitter_slider = document.getElementById("splitter_slider");


const slides = document.querySelectorAll(".slider__item");
let active_slide = 0;
let is_enable = true;
let is_to_end = true;
let is_from_end = true;
let is_func_end = true;
slides.forEach(slide => {
    slide.addEventListener("animationend", animationend_slide)
});

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

arrow_left.addEventListener("click", () => { changeSlider(-1) });
arrow_rigth.addEventListener("click", () => { changeSlider(1) });

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

function changeSlider(direction) {
    if (!is_enable)
        return;
    is_enable = false;
    is_to_end = false;
    is_from_end = false;
    is_func_end = false;

    var animation_outgoing = direction < 0 ? "to-right" : "to-left";
    var animation_coming = direction < 0 ? "from-left" : "from-right";

    var slide_outgoing = slides[active_slide];
    active_slide = (active_slide + direction + slides.length) % slides.length;
    var slide_coming = slides[active_slide];

    slide_outgoing.classList.add(animation_outgoing);

    slide_coming.classList.remove("invisible");
    slide_coming.classList.add(animation_coming);

    
    is_func_end = true;
    check_enable();
}

function animationend_slide() {
    if (slides[active_slide] != this) {
        this.classList.remove("to-right", "to-left");
        this.classList.add("invisible");
        is_to_end = true;
        check_enable();
    }
    else {
        this.classList.remove("from-left", "from-right");
        is_from_end = true;
        check_enable();
    }
}


function check_enable() {
    is_enable = is_to_end && is_from_end && is_func_end;
}





