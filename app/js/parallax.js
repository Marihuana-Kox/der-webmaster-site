$(function() {
    $(document).on('scroll', function() {
        let top = $(window).scrollTop()
        $('.parallax_layer').css({'background-position': '100% ' + (- top / 3) + '%'})
    })
})