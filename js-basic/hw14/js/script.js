/**
 * Created on 11.07.2019.
 */

$(document).ready(function () {
    $('.tabs-title').on('click',function () {
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        let dataId = $(this).data('text');
        $(`#${dataId}`).siblings().hide('slow');
        $(`#${dataId}`).show('slow');
    })
    

});
