/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar
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
    */

let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar-top").style.top = "0";
    } else {
        if (window.innerWidth < 576) {
            document.getElementById("navbar-top").style.top = "-140px";
        } else {
            document.getElementById("navbar-top").style.top = "-40px";
        }
    }
    prevScrollpos = currentScrollPos;
};

const navbarToggler = document.querySelector(".navbar-toggler");
const navbarIcon = document.getElementById("navbar-icon");

navbarToggler.addEventListener("click", function() {
    if (navbarIcon.classList.contains("fa-bars")) {
        navbarIcon.classList.remove("fa-bars");
        navbarIcon.classList.add("fa-xmark");
    } else {
        navbarIcon.classList.remove("fa-xmark");
        navbarIcon.classList.add("fa-bars");
    }
});

/*
SCRIPT VOOR FILTER HOMEPAGE
*/

filterSelection("all");

function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("column");
    if (c === "all") c = "";
    // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
    for (i = 0; i < x.length; i++) {
        w3RemoveClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1)
            w3AddClass(x[i], "show");
    }
}

// Show filtered elements
function w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) === -1) {
            element.className += " " + arr2[i];
        }
    }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn-filter");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function(){
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace("active", "");
        this.className += "active";
    });
}