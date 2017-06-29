//---------------------------------------------
//   DOCUMENT READY
//---------------------------------------------

$(document).ready(function() {

    //---------------------------------------------
    //   ADD LINK
    //---------------------------------------------

    $('.js-like').on('click', function(event) {
        event.preventDefault();

        $(this).text('Liked!')
            .closest('.news-item')
            .addClass('is-liked');
    });

    $('.js-add-link').on('click', function(event) {
        event.preventDefault();

        $('.js-form').toggleClass('is-visible');
    });

    //---------------------------------------------
    //   ADD LINK
    //---------------------------------------------

    $('.js-show-modal').on('click', function(event) {
        event.preventDefault();

        $('.js-modal').addClass('is-visible');
        $('.js-modal-overlay').addClass('is-visible');
    });

    $('.js-modal-overlay').on('click', function(event) {
        $('.js-modal').removeClass('is-visible');
        $('.js-modal-overlay').removeClass('is-visible');

    });
});