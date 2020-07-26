window.onscroll = () => {
    $(window).on('scroll', function () {
        if ($(window).scrollTop()) {
            $('nav').addClass('bg');
        } else {
            $('nav').removeClass('bg');
        }
    });
}
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});

$('input').on('focusin', function () {
    $(this).parent().find('label').addClass('active');
});

$('input').on('focusout', function () {
    if (!this.value) {
        $(this).parent().find('label').removeClass('active');
    }
});

AOS.init();
