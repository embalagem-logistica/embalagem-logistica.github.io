(function () {
    const control = document.getElementById('menu-control');
    const menu = document.getElementById('menu');
    const close = document.getElementById('menu-close');
    const wrapper = document.getElementById('container');

    control.addEventListener('click', function(e) {
        menu.classList.toggle('active');
        wrapper.classList.toggle('active');
    });

    close.addEventListener('click', function (e) {
        menu.classList.remove('active');
        wrapper.classList.remove('active');
    });

    window.addEventListener('keydown', function (e) {
        if (e.code == "Escape") {
            menu.classList.remove('active');
            wrapper.classList.remove('active');
       }
    });

})();
