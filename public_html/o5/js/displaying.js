jQuery(document).ready(function () {
    $(".search-box").focus(function () {
        $('.search-box-addition').css('display', 'block');
    });
    $(".search-box").focusout(function () {
        $('.search-box-addition').css('display', 'none');
    });
    $('.tab1').click(function () {
        $(this).addClass('active');
        $('.tab2').removeClass('active');
        $('.tab3').removeClass('active');
        $('.tab_inner1').css('display', 'block');
        $('.tab_inner2').css('display', 'none');
        $('.tab_inner3').css('display', 'none');
    });
    $('.tab2').click(function () {
        $(this).addClass('active');
        $('.tab1').removeClass('active');
        $('.tab3').removeClass('active');
        $('.tab_inner2').css('display', 'block');
        $('.tab_inner1').css('display', 'none');
        $('.tab_inner3').css('display', 'none');
    });
    $('.tab3').click(function () {
        $(this).addClass('active');
        $('.tab1').removeClass('active');
        $('.tab2').removeClass('active');
        $('.tab_inner3').css('display', 'block');
        $('.tab_inner1').css('display', 'none');
        $('.tab_inner2').css('display', 'none');
    });
    $('.popup .fog').mousedown(function () {
        popupClose();
    });
    $('.popup .content .close').mousedown(function () {
        popupClose();
    });

});
function popupClose() {
    $('.popup .login').css('display', 'none');
    $('.popup .lostpass').css('display', 'none');
    $('.popup .register').css('display', 'none');
    $('.popup .callMe').css('display', 'none');
    $('.popup').css('display', 'none');
}
;
function popupShow(element) {
    $('.popup').css('display', 'block');
    $(element).css('display', 'block');
}

getParameterByName = function (name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)'),
            results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}
;
window.onload = function () {
    var requestedElement = getParameterByName('showPopup');
    if (requestedElement)
        popupShow('.' + requestedElement);
};