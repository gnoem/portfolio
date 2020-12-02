const main = document.querySelector('#main');
window.addEventListener('load', () => {
    function fadeIn() {
        let hiddenFade;
        let hiddenSlide;
        let windowHeight;
        function init() {
            hiddenFade = document.querySelectorAll('.hidden-fade');
            hiddenSlide = document.querySelectorAll('.hidden-slide');
            windowHeight = window.innerHeight;
        }
        function checkPositionFade() {
            for (let i = 0; i < hiddenFade.length; i++) {
                let element = hiddenFade[i];
                let bodyScrollTop = main.scrollTop;
                let positionFromTop = hiddenFade[i].getBoundingClientRect().top;
                if (positionFromTop - windowHeight <= 0) {
                    element.classList.add('fade-in-element');
                    element.classList.remove('hidden-fade');
                }
                if (bodyScrollTop <= 0) {
                    element.classList.add('hidden-fade');
                    element.classList.remove('fade-in-element');
                } // */
            }
        }
        function checkPositionSlide() {
            for (let i = 0; i < hiddenSlide.length; i++) {
                let element = hiddenSlide[i];
                let bodyScrollTop = main.scrollTop;
                let positionFromTop = hiddenSlide[i].getBoundingClientRect().top;
                if (positionFromTop - windowHeight <= 0) {
                    element.classList.add('slide-in-element');
                    element.classList.remove('hidden-slide');
                }
                if (bodyScrollTop <= 0) {
                    element.classList.add('hidden-slide');
                    element.classList.remove('slide-in-element');
                } // */
            }
        }
        main.addEventListener('scroll', checkPositionFade);
        main.addEventListener('scroll', checkPositionSlide);
        window.addEventListener('resize', init);   
        init();
        checkPositionFade();
    }
    main.addEventListener('scroll', fadeIn);
})