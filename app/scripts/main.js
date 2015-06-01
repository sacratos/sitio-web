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
$('label').css('font-family', 'Shojumaru')
    .css('font-size', '20px')
    .css('color', '#003333');
/*var player =  iframe.getElementsByTagName('iframe');
player.mute();*/
$(document).ready(function() {
    $('.zoom-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        closeOnContentClick: false,
        closeBtnInside: false,
        mainClass: 'mfp-with-zoom mfp-img-mobile',
        image: {
            verticalFit: true,
            titleSrc: function(item) {
                return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">image source</a>';
            }
        },
        gallery: {
            enabled: true
        },
        zoom: {
            enabled: true,
            duration: 300, // don't foget to change the duration also in CSS
            opener: function(element) {
                return element.find('img');
            }
        }
        
    });
});
$('.leermas').toggle();
$('.aprendo').toggle();
$('#leermas').on('click', function() {
    $(this).toggle();
    /* Act on the event */
    $('.leermas').show();
});
$('.cint').on('mouseover', function() {
    $('.aprendo').fadeIn('slow');
})
.on('mouseleave',function(){
    $('.aprendo').toggle('slow');
});