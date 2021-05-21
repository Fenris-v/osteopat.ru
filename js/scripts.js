$(document).ready(() => {
    /**
     * SLICK
     */
    $('.stock__list').slick({
        infinite: true,
        arrows: false,
        dots: true,
        slidesToShow: 2,
        autoplay: true,
        responsive: [
            // {
            //     breakpoint: 1500,
            //     settings: {
            //         arrows: false,
            //         dots: true
            //     }
            // },
            // {
            //     breakpoint: 1000,
            //     settings: {
            //         slidesToShow: 1,
            //         arrows: false,
            //         dots: true
            //     }
            // },
        ]
    });

    $('.staff__list').slick({
        infinite: true,
        arrows: true,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 2,
        nextArrow: '<button type="button" class="slick-next"><svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg"><circle r="35" transform="matrix(-1 0 0 1 35 35)" fill="#F7F2EC"/><path d="M38 40.7485L36.8566 42L30.4615 35L36.8566 28L38 29.2515L32.7483 35L38 40.7485V40.7485Z" fill="black" fill-opacity="0.54"/></svg></button>',
        prevArrow: '<button type="button" class="slick-prev"><svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg"><circle r="35" transform="matrix(-1 0 0 1 35 35)" fill="#F7F2EC"/><path d="M38 40.7485L36.8566 42L30.4615 35L36.8566 28L38 29.2515L32.7483 35L38 40.7485V40.7485Z" fill="black" fill-opacity="0.54"/></svg></button>',
        autoplay: true,
        responsive: [
            // {
            //     breakpoint: 1500,
            //     settings: {
            //         arrows: false,
            //         dots: true
            //     }
            // },
            // {
            //     breakpoint: 1000,
            //     settings: {
            //         slidesToShow: 1,
            //         arrows: false,
            //         dots: true
            //     }
            // },
        ]
    });

    $('.hero__slider').slick({
        infinite: true,
        arrows: false,
        dots: true,
        slidesToShow: 1,
        autoplay: true,
    });
});
