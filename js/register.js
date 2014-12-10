$(document).ready(function () {
    var email = ($.cookie.read('email'));
    if (email === 'martin@gmail.com') {
        $('#ver').show() && $('#ver2').show() && $('#ver').show() && $('#edit').show() && $('#registrado').hide() && $('#service').hide() && $('.btn-sign').hide()&& $('#client').show();
    }
});

$(document).ready(function () {
    $("#registerButton").click(function () {

        var username = $("#username").val();
        var email = $("#email").val();
        var password = $("#password").val();
        var name = $("#name").val();
        var city = $("#city").val();
        var phone = $("#phone").val();
        var card = $("#cardtype").val();
        var CardNumber = $("#cardnumber").val();
        var securyCode = $("#secure").val();
        var NameofCard = $("#namecard").val();
        var age = $("#age").val();
        var sex = $("#sex").val();

        var dataString = new Object();
        dataString.username = username;
        dataString.email = email;
        dataString.password = password;
        dataString.name = name;
        dataString.city = city;
        dataString.phone = phone;
        dataString.card = card;
        dataString.CardNumber = CardNumber;
        dataString.securyCode = securyCode;
        dataString.NameofCard = NameofCard;
        dataString.age = age;
        dataString.sex = sex;

        var dataPost = JSON.stringify(dataString);



        $.ajax({
            type: "GET",
            url: "register.php?city=" + city + "&age=" + age + "&username=" + username + "&email=" + email + "&password=" + password + "&name=" + name + "&phone=" + phone + "&cardnumber=" + CardNumber + "&cardtype=" + card + "&namecard=" + NameofCard + "&sex=" + sex,
            //contentType: "application/json; charset=utf-8",
            dataType: "json",
            data: dataPost,
            cache: false,
            success: function () {

                $('.msg').text('Successful register! Thanks').addClass('msg_ok').animate({'color': 'Green', 'right': '130px'}, 300);
            },
            error: function () {

                $('.msg').text('Error!, Please complete all parameters').addClass('msg_error').animate({'color': 'Red', 'right': '130px'}, 300);

            }

        });
    });
});