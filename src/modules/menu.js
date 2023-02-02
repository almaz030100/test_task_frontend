document.addEventListener('DOMContentLoaded', () => {

    (function() {
        let headerMenu = document.querySelector('.header__menu');
        let headerNavItems = document.querySelectorAll('.header__nav-main .header__nav-item');
        let header = document.querySelector('.header');
        let main = document.querySelector('main');
        let headerHeight = getComputedStyle(header).height;

        main.style.marginTop = headerHeight;

        function showHeaderMenu() {
            headerMenu.classList.add('header__menu_active');
        }
        function hideHeaderMenu() {
            headerMenu.classList.remove('header__menu_active');
        }

        headerNavItems.forEach(item => {
            item.addEventListener('mouseover', () => {
                showHeaderMenu();
                item.firstElementChild.checked = true;
            });
            item.addEventListener('mouseout', () => {
                hideHeaderMenu();
            });
        });

        headerMenu.addEventListener('mouseover', () => {
            showHeaderMenu();
        });
        headerMenu.addEventListener('mouseout', () => {
            hideHeaderMenu();
            headerNavItems.forEach(item => {
                item.firstElementChild.checked = false;
            });
        });
    }());
    
});