document.addEventListener('DOMContentLoaded', function () {
    var toggle = document.querySelector('.navbar__toggle');

    toggle.addEventListener('click', function () {
        toggle.classList.toggle('open');
    });
});
