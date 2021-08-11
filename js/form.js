$("#form-submit").click(function () {    
    $.ajax({
        url: "https://fernanda15func.azurewebsites.net/api/PostRequestFunction",                
        data: {
            name: $('#form-input-name').val()
        },        
        type: "GET",     
        success: function (data) {
            $('.js-form').css('display', 'none');
            $('.js-form-success-result').css('display', 'block');
        },
        error: function (xhr, status) {
            $('.js-form').css('display', 'none');
            $('.js-form-error-result').css('display', 'block');
        },
        complete: function (xhr, status) {
            //$('#showresults').slideDown('slow')
        }
    });
});
