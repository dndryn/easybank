console.log("Hey buddy!");
const header = document.querySelector('.header');
const btnHamburger = document.querySelector('#btnHamburger');
const body = document.querySelector('body');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');
btnHamburger.addEventListener('click', function() {
    console.log('click hamburger');
    if (header.classList.contains('open')) {
        body.classList.remove('noscroll');
        header.classList.remove('open');
        fadeElems.forEach(function(element) {
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        });
    } else {
        body.classList.add('noscroll');
        header.classList.add('open');
        fadeElems.forEach(function(element) {
            element.classList.remove('fade-out');
            element.classList.add('fade-in');
        });
    }
});

//# sourceMappingURL=index.31764c32.js.map
