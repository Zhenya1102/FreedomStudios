// Add the class "scrolled" to the header element when scrolling more than 50 pixels on the page.
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("header").classList.add("scrolled");
    } else {
        document.getElementById("header").classList.remove("scrolled");
    }
}

// Add the class "open" to the header element when the burger menu is opened.
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("burger").addEventListener("click", function (){
        document.querySelector("header").classList.toggle("open");
    });

    document.querySelectorAll(".menu__link").forEach(function(link) {
        link.addEventListener("click", function() {
            document.querySelector("header").classList.remove("open");
        });
    });
});

const header = document.querySelector('header');
const body = document.querySelector('body');

function addLockClass() {
    body.classList.add('lock');
}

function removeLockClass() {
    body.classList.remove('lock');
}

function checkMenuState() {
    if (header.classList.contains('open')) {
        addLockClass();
    } else {
        removeLockClass();
    }
}

document.addEventListener('DOMContentLoaded', checkMenuState);
header.addEventListener('click', checkMenuState);