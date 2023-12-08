const swiperThumb = new Swiper('.gift__swiper--thumb', {
    spaceBetween: 16,
    slidesPerView: 'auto',
    freeMode: true,
    breakpoints: {
        320: {
            spaceBetween: 12,
        },
        // 1081: {
        //     slidesPerView: 4,
        // }
    }
    // watchSlidesProgress: true,
});

const swiperMain = new Swiper('.gift__swiper--card', {
    spaceBetween: 16,
    thumbs: {
        swiper: swiperThumb,
    },
});