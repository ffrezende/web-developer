
const reNomear = () => {
    let nomeDoAvatar = $('#nomeAvatar').val();
    $('#avatar-nome').text(nomeDoAvatar);
};

$('#corPele').on('change', () => {
    let corPele = $('#corPele').val();
    $('#avatar-corpo').css('background-color', corPele);
    $('#avatar-cabeca').css('background-color', corPele);
});

$("#tipo-cabelo").on('change', () => {
    $('#avatar-cabelo').attr('src', $('#tipo-cabelo').val());
})

$("#tipo-oculos").on('change', () => {
    if($("#tipo-oculos").is(":checked"))
        $('#avatar-oculos').addClass( "visivel" );
    else 
        $('#avatar-oculos').removeClass( "visivel" );
});

$("#tipo-lacinho").on('change', () => {
    if($("#tipo-lacinho").is(":checked"))
        $('#avatar-lacinhos').addClass( "visivel" );
    else 
        $('#avatar-lacinhos').removeClass( "visivel" );
});

$("#tipo-bandana").on('change', () => {
    if($("#tipo-bandana").is(":checked"))
        $('#avatar-bandana').addClass( "visivel" );
    else 
        $('#avatar-bandana').removeClass( "visivel" );
});


