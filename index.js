const menuClosed = document.getElementById("menu_closed").classList;
const menuOpen = document.getElementById("menu_open").classList;
const dropdown = document.getElementById("dropdown").classList;
const overlay = document.getElementById("overlay").classList;
const subscribe = document.getElementById("popup-subscribe-container").classList;
const search = document.getElementById("popup-search").classList;
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
    console.log("open dropdown")
}

function closeDrop() {
    dropdown.toggle("show");
    overlay.toggle("show");
    console.log("close dropdown")
}

function showSub() {
    subscribe.toggle("show");
    overlay.toggle("show");
}

function showSearch() {
    search.toggle("show");
    overlay.toggle("show");
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