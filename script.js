// elements
const header = document.querySelector('.header');
const mobileMenuHamburger = document.querySelector(".mobile-menu__hamburger");
const mobileMenuBackground = document.querySelector(".mobile-menu__bg");
const logo = document.querySelector('.logo');
const nav = document.getElementById("nav__ul");
const blocks = document.querySelectorAll("main>div");
const slider__control_left = document.querySelector(".slider__control_left");
const slider__control_rigth = document.querySelector(".slider__control_rigth");
const slides = document.querySelectorAll(".slider__item");
const phone_1 = document.querySelector(".phone__obj_1");
const phone_2 = document.querySelector(".phone__obj_2");
const phone_content_1 = document.querySelector(".phone__content_1");
const phone_content_2 = document.querySelector(".phone__content_2");
const tag_ul = document.getElementById("tags-ul");
const portfolio_grid = document.getElementById("portfolio-grid");
const portfolio_images = document.getElementsByClassName("portfolio-img");
const btn_send = document.getElementById("btn_send");
const message_ok = document.getElementById("message-ok");

// constants
const HEADER_HEIGHT = header.clientHeight;

// fields
let isMobileMenuShow = false;
let active_slide = 0;
let is_enable = true;
let is_to_end = true;
let is_from_end = true;
let is_func_end = true;


// events
document.addEventListener("scroll", onScroll);
mobileMenuHamburger.addEventListener("click", onMobileMenuClick);
slides.forEach(slide => {
    slide.addEventListener("animationend", animationend_slide)
});
nav.addEventListener("click", (event) => { navigation(event) });
slider__control_left.addEventListener("click", () => { changeSlider(-1) });
slider__control_rigth.addEventListener("click", () => { changeSlider(1) });
tag_ul.addEventListener("click", (event) => { tags_navigation(event) });
phone_1.addEventListener("click", () => { changeElementVisible(phone_content_1) });
phone_content_1.addEventListener("click", () => { changeElementVisible(phone_content_1) });
phone_2.addEventListener("click", () => { changeElementVisible(phone_content_2) });
phone_content_2.addEventListener("click", () => { changeElementVisible(phone_content_2) });
btn_send.addEventListener("click", btn_send_click);
message_ok.addEventListener("click", message_ok_click);

// functions
function onScroll() {
    var yPos = window.scrollY + HEADER_HEIGHT + 1;
    blocks.forEach(b => {
        var id = b.getAttribute("id");
        var nav_element = document.querySelector(`a[href="#${id}"]`);
        if (b.offsetTop <= yPos && b.offsetTop + b.offsetHeight > yPos) {
            nav_element.classList.add("nav__link_active");
        }
        else {
            nav_element.classList.remove("nav__link_active");
        }
    })
}

function onMobileMenuClick() {
    isMobileMenuShow = !isMobileMenuShow;
    mobileMenuHamburger.classList.toggle("mobile-menu_vertical");
    mobileMenuBackground.classList.toggle("invisible");
    logo.classList.toggle("logo_left");  
}

function navigation(event) {
    nav.querySelectorAll("a").forEach(li => li.classList.remove("nav__link_active"));
    event.target.classList.add("nav__link_active");
}

function tags_navigation(event) {
    var li = event.target.classList.contains("tags-li")
        ? event.target
        : event.target.parentNode;
    if (!li.classList.contains("tags-li"))
        return;
    tag_ul.querySelectorAll("li").forEach(li => li.classList.remove("tags-li_active"));
    li.classList.add("tags-li_active");
    var array = portfolio_grid.querySelectorAll("div");
    portfolio_grid.append(array[0]);
}

for (var i = 0; i < portfolio_images.length; i++) {
    portfolio_images[i].addEventListener("click", (event) => {
        for (var i = 0; i < portfolio_images.length; i++)
            portfolio_images[i].classList.remove("portfolio-img_active");
        event.target.classList.add("portfolio-img_active");
    });
}

function btn_send_click() {
    if (!document.getElementById("name").checkValidity() || !document.getElementById("email").checkValidity())
        return;
    var subject = document.getElementById("subject").value.toString();
    if (subject == "") subject = "No subject";
    document.getElementById("message-subject").innerText = subject;
    var describe = document.getElementById("describe").value.toString();
    if (describe == "") describe = "No description";
    document.getElementById("message-describe").innerText = describe;
    changeElementVisible(document.getElementById("message-block"));
}

function message_ok_click() {
    changeElementVisible(document.getElementById("message-block"));
    document.querySelector(".get-a-quote__form").reset();
}

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

    var animation_outgoing = direction < 0 ? "animation_to-right" : "animation_to-left";
    var animation_coming = direction < 0 ? "animation_from-left" : "animation_from-right";

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
        this.classList.remove("animation_to-right", "animation_to-left");
        this.classList.add("invisible");
        is_to_end = true;
    }
    else {
        this.classList.remove("animation_from-left", "animation_from-right");
        is_from_end = true;
    }
    check_enable();
}


function check_enable() {
    is_enable = is_to_end && is_from_end && is_func_end;
}





