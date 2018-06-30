//form
$(document).ready(function () {
    $('#arrow').click(function () {
        $('.slideout-inner').hide();
    })
    $('#rent').click(function () {
        $('.slideout-inner').show();
    })
});

//menu
$(document).ready(function(){
    var menuBtn = $('#icon');
    var menu = $('.top-menu');
    
    menuBtn.on('click', function (event) {
        event.preventDefault();
        menu.toggleClass('top-menu_active');
    })
});






