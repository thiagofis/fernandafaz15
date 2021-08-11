$("#form-submit").click(function () {
    console.log("1")
    $.ajax({
        //url: "https://fernanda15func.azurewebsites.net/api/PostRequestFunction",
        url: "http://localhost:7071/api/PostRequestFunction",        
        data: {
            name: $('#form-input-name').val()
        },
        beforeSend: function(request) {
            request.setRequestHeader('Host', 'https://www.fernandafaz15.website');
            request.setRequestHeader('Content-Length', 100);
            request.setRequestHeader('Content-Type', 'application/json');
        },
        type: "POST",        
        dataType: "json",
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
