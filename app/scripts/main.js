/*jshint strict:false */


$('#formulario').validate({
    onkeyup: false,
    onfocusout: false,
    onclick: false,
    rules: {
        nombre: {
            required: true,
            lettersonly: true,
        },
        apellidos: {
            required: true,
        },
        telefono: {
            required: false,
            digits: true,
            minlength: 9,
            maxlength: 9,
        },
        email: {
            required: true,
            email: true,
        },
        email2: {
            required: true,
            email: true,
            equalTo: 'email',
        },
    },
    messages: {
        nombre: {
            required: 'Escribe tu nombre',
            lettersonly: 'Por favor, sólo caracteres',
        },
        apellidos: {
            required: 'Escribe tus apellidos',
        },
        telefono: {
            minlength: $.validator.format('Por favor, no escribas menos de {0} caracteres.'),
            maxlength: $.validator.format('Por favor, no escribas mas de {0} caracteres.'),
            digits: 'Por favor, escribe sólo dígitos.',
        },
        email: {
            required: 'Escribe tu email',
            email: 'Por favor, escribe una dirección de correo válida.',
        },
        email2: {
            required: 'Escribe tu email',
            equalTo: 'Los emails no coinciden.',
        },

    }
});
$(document).ready(function() {
    $('.leermas').toggle();
    $('.aprendo').toggle();
    $('label').css('font-family', 'Shojumaru')
        .css('font-size', '20px')
        .css('color', '#003333');
    $('#leermas').on('click', function() {
        $(this).toggle();
        /* Act on the event */
        $('.leermas').show('400');
    });
    $('.cint').on('click', function() {
        //var aprendo=$('.aprendo').val();
        $('.aprendo').fadeIn('slow');
    });
    $('.cint').on('mouseleave', function() {
        $('.aprendo').fadeOut('fast');
    });
    $('li a').click(function() {
        $('#imagenKata').attr('src', $(this).attr('data-img-url'));
    });
});
