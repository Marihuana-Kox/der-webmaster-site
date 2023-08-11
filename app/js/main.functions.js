$(function() {
    $('.custom_checkbox').on('click', function() {
        let site = $(this)
        let id = site.attr('id')
        $('#select_prd').prop('selectedIndex', id)
        $('.wrapper__coner').fadeIn(600)
        $('.galka').each(function() {
            let ths = $(this)
            if(ths.css('opacity') == 1)
                ths.css('opacity', 0)
        }); 
    })
    var date = new Date()
    var year = date.getFullYear()
    $('.footer_inform_bottom > b').text(year)

    $('a').on('click', function() {
        let ths = $(this).attr('href')
        console.log(ths)
    })
    
})