$(document).ready(function(){

    $.getJSON( "https://fernanda15func.azurewebsites.net/api/GetRequestFunction", function( data ) {

        for(var index = 0; index < data.length; index = index + 1) {

            var newLine = "<tr className=\"item_cart\"> <td className=\"total-price\"><a href=\"javascript:void(0)\" title=\"\">" + (index + 1) + "</a></td> <td className=\"produc-name\"><a href=\"javascript:void(0)\" title=\"\">" + data[index] + "</a></td> </tr>";
            $("#js-table-body").append(newLine);

        }
    });
});

