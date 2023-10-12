$(function() {
    if ($(window).width() == 768) {
        $('.hidden_block').removeClass('col-md-6').addClass('col-md-0')
        $('.add_rules').removeClass('col-md-6').addClass('col-md-12')
        $('.card_first').removeClass('col-md-4').addClass('col-md-12')
    }
    $(window).on('resize', function() {
        if ($(window).width() > 768) {
            $('.add_rules').removeClass('col-md-12').addClass('col-md-6')
            $('.hidden_block').removeClass('col-md-0').addClass('col-md-6')
            $('.card_first').removeClass('col-md-12').addClass('col-md-4')
        }else{
            $('.hidden_block').removeClass('col-md-6').addClass('col-md-0')
            $('.add_rules').removeClass('col-md-6').addClass('col-md-12')
            $('.card_first').removeClass('col-md-4').addClass('col-md-12')
        }
    })
    if ($(window).width() < 992){
        var mh = 0;
        $(".wrap_card_block_zweiten-left, .wrap_card_block_zweiten-right").each(function() {
            var h_block = parseInt($(this).height());
            if(h_block > mh) {
                mh = h_block;
            };
            $(".wrap_card_block_zweiten-left, .wrap_card_block_zweiten-right").height(mh)
        })
    }
    $('.custom_checkbox').on('click', function() {
        let site = $(this)
        let id = site.attr('id')
        $('#select_prd').prop('selectedIndex', id)
        $('.wrapper__coner').fadeIn(600)
        $('.galka').each(function() {
            let ths = $(this)
            let ths_id = ths.parent('.custom_checkbox').attr('id')
            if (id == ths_id)  
                ths.css('opacity', 1)
            else
                ths.css('opacity', 0)
        }); 
    }) 
    var date = new Date()
    var year = date.getFullYear()
    $('.footer_inform_bottom > b').text(year)

    $('a').on('click', function() {
        let ths = $(this) //.attr('href')
        let listHgt = $('.list-menu-box').height() 
        $('li').css({'border-bottom': ''})
        ths.parent('li').css({'border-bottom': '1px solid var(--light-darkblue-title)'})
        setTimeout(() => {
            $('.button-menu-block-activ').fadeOut(600);
            $('.list-menu-box').animate({'top': 20+listHgt+'px'}, 600);
            $('.button-menu-block').fadeIn(600);
        }, 500) 
    });
})