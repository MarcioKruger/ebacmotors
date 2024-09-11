$(document).ready(function(){
    $('#carousel-imagens').slick({
        autoplay:true,
    })

    $('.menu-hamburger').click(function(){
        $('nav').slideToggle();
    })

    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(__) _____-____' 
    })

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            veiculoInteresse: {
                required: true
            },
            mensagem: {
                required: true
            }
        },
        messages: {
            nome: 'Insira o seu nome.',
            telefone: 'Digite o seu telefone.',
            email: 'Digite o seu e-mail corretamente.',
            veiculoInteresse: 'Digite o veículo de interesse.',
            mensagem: 'Digite a sua mensagem.'
        },
        submitHandler: function(form){
            console.log(form)
        },
        invalidHandler: function(evento, validador){
            let camposIncorretos = validador.numberOfInvalids();
            if(camposIncorretos){
                alert(`Existem ${camposIncorretos} campos incorretos!`)
            }
        }
    })

    $('.lista-veiculos button').click(function(){
        let destino = $('#contato');
        let nomeVeiculo = $(this).parent().find('h3').text()

        $('#veiculo-interesse').val(nomeVeiculo)

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })
})