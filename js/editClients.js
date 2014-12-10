
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
        url: "server/selectClient.php"
    })
            .done(function (json) {
                json = $.parseJSON(json);

                for (var i = 0; i < json.length; i++)
                {
                    $('.editinplace').append(
                            "<tr><td class='idOrder'>" + json[i].idOrder + "</td><td class='editable' data-campo='email'><span>" + json[i].email + "</span></td><td class='editable' data-campo='idModels'><span>" + json[i].idModels + "</span></td></tr>");
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

        id = $(this).closest("tr").find(".idOrder").text();
        td.text("").html("<input type='text' name='" + campo + "' value='" + valor + "'><a class='enlace guardar' href='#'>Guardar</a><a class='enlace cancelar' href='#'>Cancelar</a>");
    });

    $(document).on("click", ".cancelar", function (e)
    {
        e.preventDefault();
        td.html("<span>" + valor + "</span>");
        $("td:not(.idOrder)").addClass("editable");
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
                url: "server/editClient.php",
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
	