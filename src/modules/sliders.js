import Splide from '@splidejs/splide';

document.addEventListener('DOMContentLoaded', () => {

    (function() {
        new Splide('.promo__slider', {
            type: 'loop',
            gap: '30px',
            pagination: false,
            breakpoints: {
                
            }
        }).mount();

        new Splide('.news__wrapper', {
            type: 'loop',
            gap: '25px',
            autoWidth: true,
            pagination: false,
            arrows: false,
            mediaQuery: 'min',
            breakpoints: {
                992: {
                    destroy: true
                }
            }
        }).mount();
    }());

});