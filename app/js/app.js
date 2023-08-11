$(function() {
    $('.button-menu-block').on('click', function() {
        $(this).fadeOut(600);
        $('.list-menu-box').animate({'top': '50px'}, 600);
        $('.button-menu-block-activ').fadeIn(600);
    })
    $('.button-menu-block-activ').on('click', function() {
        $(this).fadeOut(600);
        $('.list-menu-box').animate({'top': '-60%'}, 600);
        $('.button-menu-block').fadeIn(600);
    })
    $('#offer-button').on('click', function() {
        $('.wrapper__coner').fadeIn(600)
    })
    $('.closed__popap').on('click', function() {
        $('.wrapper__coner').fadeOut(600)
    })
    $('.custom_checkbox').on('click', function() {
        let ths = $(this)
        let cssOpacity = ths.children().css('opacity')
        if (cssOpacity == 0){
            ths.children().animate({'opacity': 1}, 200)
        }else{
            ths.children().animate({'opacity': 0}, 200)
        }
    })
})