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
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 1,
                }
            },
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
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    });

    $('.license__list').slick({
        infinite: true,
        arrows: true,
        dots: true,
        slidesToShow: 6,
        slidesToScroll: 2,
        nextArrow: '<button type="button" class="slick-next"><svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><circle r="25" transform="matrix(-1 0 0 1 25 25)" fill="#5D503F"/><path d="M21.624 18.9025L22.9515 17.5751L30.3765 25.0001L22.9515 32.425L21.624 31.0975L27.7215 25.0001L21.624 18.9025H21.624Z" fill="white"/></svg></button>',
        prevArrow: '<button type="button" class="slick-prev"><svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="25" cy="25" r="25" fill="#5D503F"/><path d="M28.376 18.9025L27.0485 17.5751L19.6235 25.0001L27.0485 32.425L28.376 31.0975L22.2785 25.0001L28.376 18.9025H28.376Z" fill="white"/></svg></button>',
        autoplay: true,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
        ]
    });

    $('.hero__slider').slick({
        infinite: true,
        arrows: false,
        dots: true,
        slidesToShow: 1,
        autoplay: true,
    });

    /**
     * HAMBURGER
     */
    $('.menu-toggle-inner').on('click', () => {
        $('.adaptive-menu-toggle').toggleClass('adaptive-menu-toggle--open');
        $('.headerNav_adaptive').toggleClass('header_opened');
    });

    /**
     * ANCHOR
     */
    $('.anchor').on('click', (e) => {
        e.preventDefault();
        let id = $(e.target).attr('href');
        let top = $(id).offset().top;
        $('body, html').animate({scrollTop: top}, 1500);
    });

    /**
     * TABS
     */
    let tabList = $('.spec__tab');
    let tabContent = $('.staff__list_page');
    tabList.on('click', (e) => {
        e.preventDefault();

        let currentTab = $(e.target).hasClass('spec__tab')
            ? $(e.target)
            : $(e.target).parents('.spec__tab');

        if (currentTab.hasClass('active')) {
            return;
        }

        console.log(tabList)
        console.log(tabContent)
        tabList.removeClass('active');
        tabContent.removeClass('active');

        currentTab.addClass('active');
        tabContent.eq(currentTab.index()).addClass('active');
    });

    /**
     * FANCYBOX
     */
    $('[data-fancybox-modal]').fancybox({
        trapFocus: true,
        autoFocus: false,
        touch: false,
    });
});
