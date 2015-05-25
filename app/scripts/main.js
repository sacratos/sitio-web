
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
            email: 'Por favor, escribe una dirección de correo válida.',
            equalTo: 'Los emails no coinciden.',
        },

    }
});
$('label').css('font-family','Shojumaru')
    .css('font-size','20px')
    .css('color','#003333');

var player =  iframe.getElementsByTagName('iframe');
player.mute();