console.log('Подключен  script.js');

const swiperThumb = new Swiper('.gift__swiper--thumb', {
    spaceBetween: 16,
    slidesPerView: 5,
    freeMode: true,
    // watchSlidesProgress: true,
});

const swiperMain = new Swiper('.gift__swiper--card', {
    spaceBetween: 16,
    thumbs: {
        swiper: swiperThumb,
    },
});