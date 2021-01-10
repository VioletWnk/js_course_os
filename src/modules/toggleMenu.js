const toggleMenu = () => {
    const body = document.querySelector('body'),
        menu = document.querySelector('menu');


        const handlerMenu = () => { 
            menu.classList.toggle('active-menu');
        };

        const scrollAnchor = (e) => {
            e.preventDefault();
            let href = e.target.getAttribute('href');

            const scrollTarget = document.querySelector(href);
            const elementPosition = scrollTarget.getBoundingClientRect().top;

                window.scrollBy({
                    top: elementPosition,
                    behavior: 'smooth'
                });
        };

    
        body.addEventListener('click', (event) => {
            let target = event.target;

            if(target.closest('.menu') || target.matches('.close-btn')){
                handlerMenu();
            } else if(target.matches('a') && target.closest('menu')){
                handlerMenu();
                scrollAnchor(event);
            } else { 
                if(!target.closest('menu') && menu.classList.contains('active-menu')){
                    handlerMenu();
                }
            }

        });

};

export default toggleMenu;