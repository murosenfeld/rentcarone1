
$(document).ready(function () {
    var email = ($.cookie.read('email'));
    if (email === 'martin@gmail.com') {
        $('#ver').show() && $('#ver2').show() && $('#ver').show() && $('#edit').show() && $('#registrado').hide() && $('#service').hide() && $('.btn-sign').hide()&& $('#client').show();
    }
});


$(document).ready(function ()
{
    /* OBTENEMOS TABLA */
    $.ajax({
        type: "GET",
        url: "server/selectplace.php"
    })
            .done(function (json) {
                json = $.parseJSON(json);

                for (var i = 0; i < json.length; i++)
                {
                    $('.editinplace').append(
                            "<tr><td class='IdModels'>" + json[i].IdModels + "</td><td class='editable' data-campo='Year'><span>" + json[i].Year + "</span></td><td class='editable' data-campo='NameModel'><span>" + json[i].NameModel + "</span></td><td class='editable' data-campo='Color'><span>" + json[i].Color + "</span></td><td class='editable' data-campo='SeatingCapacity'><span>" + json[i].SeatingCapacity + "</span></td><td class='editable' data-campo='TypeOfMotor'><span>" + json[i].TypeOfMotor + "</td><td class='editable' data-campo='TypeModel'><span>" + json[i].TypeModel + "</span></td><td class='AirCondition'>" + json[i].AirCondition + "</td><td class='editable' data-campo='PriceDay'><span>" + json[i].PriceDay + "</span></td><td class='editable' data-campo='PriceMont'><span>" + json[i].PriceMont + "</td><td class='editable' data-campo='ImageModel'><span>" + json[i].ImageModel + "</span></td><td class='editable' data-campo='manufactorId'><span>" + json[i].manufactorId + "</td><td class='editable' data-campo='city'><span>" + json[i].city + "<span></td></tr>");
                }
            });

    var td, campo, valor, id;
    $(document).on("click", "td.editable span", function (e)
    {
        e.preventDefault();
        $("td:not(.id)").removeClass("editable");
        td = $(this).closest("td");
        campo = $(this).closest("td").data("campo");


        valor = $(this).text();

        id = $(this).closest("tr").find(".IdModels").text();
        td.text("").html("<input type='text' name='" + campo + "' value='" + valor + "'><a class='enlace guardar' href='#'>Guardar</a><a class='enlace cancelar' href='#'>Cancelar</a>");
    });

    $(document).on("click", ".cancelar", function (e)
    {
        e.preventDefault();
        td.html("<span>" + valor + "</span>");
        $("td:not(.IdModels)").addClass("editable");
    });

    $(document).on("click", ".guardar", function (e)
    {
        $(".mensaje").html("<img src='images/loading.gif'>");
        e.preventDefault();
        nuevovalor = $(this).closest("td").find("input").val();
        if (nuevovalor.trim() != "")
        {
            $.ajax({
                type: "POST",
                url: "server/editplace.php",
                data: {campo: campo, valor: nuevovalor, id: id}
            })
                    .done(function (msg) {
                        $(".mensaje").html(msg);
                        td.html("<span>" + nuevovalor + "</span>");
                        $("td:not(.id)").addClass("editable");
                        setTimeout(function () {
                            $('.ok,.ko').fadeOut('fast');
                        }, 3000);
                    });
        }
        else
            $(".mensaje").html("<p class='ko'>Debes ingresar un valor</p>");
    });
});
	