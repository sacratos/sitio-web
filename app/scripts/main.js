$('#enviar').click(function() {
    $("#formulario").validate({

        onkeyup: false,
        onfocusout: false,
        onclick: false,
        rules: {
            nombre: {
                required: true,
                lettersonly: true
            },
            apellidos: {
                required: true
            },
            telefono: {
                required: true,
                digits: true
            },
            email1: {
                required: true,
                email: true
            },
            email2: {
                required: true,
                email: true,
                equalTo: true
            },
        }
    });
});