const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

// Display Mobile Menu
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
}

menu.addEventListener('click', mobileMenu);

var mapList = ["Menstrual Products", "Accessible Stalls", "Roll-under Sinks", "Grab Bars", "Seat Covers", "Hand Dryers", "Changing Tables"];
var time = 2500;
var splitTime = 500;
var i = 0;
let map__list = document.getElementById("map__list");
var text = "I'm looking for ";
let result = text.fontcolor("white");
const period = "."
let result2 = period.fontcolor("white");

function changeWord() {
    map__list.innerHTML = result + "{ " + mapList[i] + " }" + result2;

    if (i < mapList.length - 1) {
        i++;
    } else {
        i = 0;
    }

    setTimeout("changeWord()", time);
}

window.onload = changeWord;

var bttn = document.getElementById("back-to-top");
var body = document.body;
var docElem = document.documentElement;
var offset = 100;
var scrollPos;
var docHeight;

docHeight = Math.max(body.scrollHeight, body.offsetHeight, docElem.clientHeight, docElem.scrollHeight, docElem.offsetHeight);
if (docHeight != 'undefined') {
    offset = 1;
}

// Add scroll event listener
window.addEventListener("scroll", function(event) {
    scrollPos = body.scrollTop || docElem.scrollTop;

    bttn.className = (scrollPos > offset) ? "visible" : "";
});
