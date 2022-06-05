$(function () {
    $('.form-note__btn')
        .click(function () {
            var name = $('#form-note__name').val();
            var desc = $("#form-note__desc").val();

            var itemNull = $('.list-note').children('.list-note__null');

            if (itemNull.length != 0)
                $('.list-note__null').remove();

            var html = `<div class="list-note__item"><div class="list-note__title"><h4>${name}</h4><img class="list-note__image image--remove" src="img/remove-note.png"><img class="list-note__image image--disclose" src="img/hide-desc-note.png"></div><div class="list-note__desc"><p>${desc}</p></div></div>`;

            $('.list-note').prepend(html);
        });

    $('html')
        .on('click', '.image--remove', function () {
            $(this).parents('.list-note__item').remove();

            var item = $('.list-note').children('.list-note__item');

            if (item.length == 0)
                $('.list-note').prepend('<div class="list-note__null">Список пуст...</div>');
        });

    $('html')
        .on('click', '.image--disclose', function () {
            var desc = $(this).parents('.list-note__item').children('.list-note__desc');

            if ($(this).attr("src") == "img/disclose-desc-note.png") {
                desc.show();
                $(this).attr("src", "img/hide-desc-note.png");
            }
            else {
                desc.hide();
                $(this).attr("src", "img/disclose-desc-note.png");
            }
        });
});