$(document).ready(function(){
    $('#btn-save').click(function(){
        $('#staticBackdrop').modal('show');
    });
    $('.btn-save-close').click(function(){
        $('#staticBackdrop').modal('hide');
    });
});

