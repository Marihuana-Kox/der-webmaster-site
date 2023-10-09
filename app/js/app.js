$(function() {
    $('.button-menu-block').on('click', function() {
        $(this).fadeOut(600);
        $('.list-menu-box').animate({'top': '50px'}, 600);
        $('.button-menu-block-activ').fadeIn(600);
    })
    $('.button-menu-block-activ').on('click', function() {
        $(this).fadeOut(600);
        let obj = $('.list-menu-box')
        let hg = obj.height();
        obj.animate({'top': - (hg + 150) + 'px'}, 600);
        $('.button-menu-block').fadeIn(600);
    })
    $('#offer-button').on('click', function() {
        $('.wrapper__coner').fadeIn(600)
    })
    $('.closed__popap').on('click', function() {
        $('.wrapper__coner').fadeOut(600)
    })
})