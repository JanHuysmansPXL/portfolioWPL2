document.addEventListener('DOMContentLoaded', function () {
    let toggle = document.querySelector('.navbar__toggle');

    toggle.addEventListener('click', function () {
        toggle.classList.toggle('open');
    });
});

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar-top").style.top = "0";
    } else {
        document.getElementById("navbar-top").style.top = "-50px";
    }
    prevScrollpos = currentScrollPos;
}


