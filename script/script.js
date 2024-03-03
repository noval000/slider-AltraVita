const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed: 500,
    effect: 'coverflow',
    slidesPerView: 2,
    centeredSlides: true,
    spaceBetween : 300,


    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});

if (document.documentElement.clientWidth < 1440) {
    swiper.params.spaceBetween = 100;
}

console.log(window.screen.availWidth, swiper.params.spaceBetween)