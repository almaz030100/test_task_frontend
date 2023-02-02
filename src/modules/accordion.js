document.addEventListener('DOMContentLoaded', () => {

    (function() {
        titles = document.querySelectorAll('.accordion__title');
        
        titles.forEach(el => {
            el.addEventListener('click', () => {
                let content = el.nextElementSibling;

                if (content.style.maxHeight) {
                    document.querySelectorAll('.accordion__content').forEach(el => {
                        el.style.maxHeight = null;
                        el.classList.remove('accordion__content_active');
                        el.previousElementSibling.classList.remove('accordion__title_active');
                    });
                } else {
                    document.querySelectorAll('.accordion__content').forEach(el => {
                        el.style.maxHeight = null;
                        el.classList.remove('accordion__content_active');
                        el.previousElementSibling.classList.remove('accordion__title_active');
                    });
                    content.style.maxHeight = content.scrollHeight + 'px';
                    content.classList.add('accordion__content_active');
                    content.previousElementSibling.classList.add('accordion__title_active');
                }
            })
        });
    }());

});