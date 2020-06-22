// Header/Burger Menu Functionality
(function() {
    var burger = document.querySelector('.burger');
    var nav = document.querySelector('#'+burger.dataset.target);

    burger.addEventListener('click', function() {
        burger.classList.toggle('is-active');
        nav.classList.toggle('is-active');
    })
})();
// End Header/Burger Menu Functionality