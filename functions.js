window.onload = () => {
    window.addEventListener('scroll', () => {
        const bg = document.querySelector('#bg'),
            mid = document.querySelector('#mid');
        var scrolled = window.pageYOffset, bgSpeed, midSpeed;
        if (pageYOffset < window.innerWidth) {
            bgSpeed = (scrolled * (-0.2)) + 'px';
            midSpeed = (scrolled * (-0.65)) + 'px';
            bg.style.transform = 'translate3d(0, '+bgSpeed+', 0)';
            mid.style.transform = 'translate3d(0, '+midSpeed+', 0)';
        }
    });
    function fadeIn() {
        var hiddenFade;
        var hiddenSlide;
        var windowHeight;
        function init() {
            hiddenFade = document.querySelectorAll('.hidden-fade');
            hiddenSlide = document.querySelectorAll('.hidden-slide');
            windowHeight = window.innerHeight;
        }
        function checkPositionFade() {
            for (var i = 0; i < hiddenFade.length; i++) {
                var element = hiddenFade[i];
                var bodyScrollTop = document.documentElement.scrollTop || document.body.scrollTop;
                var positionFromTop = hiddenFade[i].getBoundingClientRect().top;
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
            for (var i = 0; i < hiddenSlide.length; i++) {
                var element = hiddenSlide[i];
                var bodyScrollTop = document.documentElement.scrollTop || document.body.scrollTop;
                var positionFromTop = hiddenSlide[i].getBoundingClientRect().top;
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
        window.addEventListener('scroll', checkPositionFade);
        window.addEventListener('scroll', checkPositionSlide);
        window.addEventListener('resize', init);   
        init();
        checkPositionFade();
    }
    window.addEventListener('scroll', fadeIn);
}