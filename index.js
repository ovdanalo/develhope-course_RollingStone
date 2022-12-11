const menuClosed = document.getElementById("menu_closed").classList;
const menuOpen = document.getElementById("menu_open").classList;
const dropdown = document.getElementById("dropdown").classList;
const overlay = document.getElementById("overlay").classList;
const overlay_tr = document.getElementById("overlay-transparent").classList;
const subscribe = document.getElementById("popup-subscribe-container").classList;
const subscribePr = document.getElementById("popup-subscribe-primary").classList;
const search = document.getElementById("popup-search").classList;

const navbar_primary = document.getElementById("navbar-primary").classList;
const sticky_addon = document.getElementById("sticky-addon").classList;
const center_nav_secondary = document.getElementById("center-nav-secondary").classList;
const subscribe_link = document.getElementById("subscribe").classList;
const logo_primary = document.getElementById("logo-primary").classList;

function showMenu() {
    menuClosed.toggle("show");
    menuOpen.toggle("hide");
}
function openDrop() {
    dropdown.toggle("show");
    if (!overlay.contains("show")) {
        overlay.toggle("show");
    }
    subscribe.remove("show");
    search.remove("show");
    overlay_tr.remove("show");
}

function closeDrop() {
    dropdown.toggle("show");
    overlay.toggle("show");
}

function showSub() {
    subscribe.toggle("show");
    overlay_tr.toggle("show");
}

function showSubPr() {
    subscribePr.toggle("show");
    overlay_tr.toggle("show");
}

function showSearch() {
    search.toggle("show");
    overlay_tr.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
function overlayClick() {
    menuClosed.remove("show");
    menuOpen.remove("hide");
    overlay.toggle("show");
    dropdown.remove("show");
    subscribe.remove("show");
    search.remove("show");
}

function overlayTrClick() {
    menuClosed.remove("show");
    menuOpen.remove("hide");
    overlay_tr.toggle("show");
    dropdown.remove("show");
    subscribe.remove("show");
    search.remove("show");
}

window.addEventListener("scroll", function (event) {
    let top = window.scrollY;
    console.log(top);
    if (top == 300 || top == 350 || top == 400) {
        navbar_primary.add("sticky", "sticky-navbar");
        sticky_addon.add("show");
        center_nav_secondary.add("hide");
        subscribe_link.add("hide");
        logo_primary.add("show", "sticky-mar-left");
    } else if (top == 200 || top == 100 || top == 0) {
        navbar_primary.remove("sticky", "sticky-navbar");
        sticky_addon.remove("show");
        center_nav_secondary.remove("hide");
        subscribe_link.remove("hide");
        logo_primary.remove("show", "sticky-mar-left");
    }
}, false);