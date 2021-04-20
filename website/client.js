const navSlide = () => {
    const menulines = document.querySelector('.menulines');
    const nav = document.querySelector('.nav-links');
    menulines.addEventListener('click',() => {
     
        nav.classList.toggle('nav-active');

        menulines.classList.toggle('toggle');
});

    }

navSlide();
