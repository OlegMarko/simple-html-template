menu.onclick = function toggleMenu() {
    var el = document.getElementById('top-nav');

    if (el.className === 'top-nav') {
        el.className += ' responsive'
    } else {
        el.className = 'top-nav'
    }
};