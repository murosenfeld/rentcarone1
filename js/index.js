           

jQuery(document).ready(function ($) {
                        var options = {
                            $AutoPlay: true, //[Optional] Whether to auto play, to enable slideshow, this option must be set to true, default value is false
                            $AutoPlayInterval: 4000, //[Optional] Interval (in milliseconds) to go for next slide since the previous stopped if the slider is auto playing, default value is 3000
                            $PauseOnHover: 1, //[Optional] Whether to pause when mouse over if a slider is auto playing, 0 no pause, 1 pause for desktop, 2 pause for touch device, 3 pause for desktop and touch device, 4 freeze for desktop, 8 freeze for touch device, 12 freeze for desktop and touch device, default value is 1

                            $ArrowKeyNavigation: true, //[Optional] Allows keyboard (arrow key) navigation or not, default value is false
                            $SlideDuration: 800, //[Optional] Specifies default duration (swipe) for slide in milliseconds, default value is 500
                            $MinDragOffsetToSlide: 20, //[Optional] Minimum drag offset to trigger slide , default value is 20
                            //$SlideWidth: 600,                                 //[Optional] Width of every slide in pixels, default value is width of 'slides' container
                            //$SlideHeight: 300,                                //[Optional] Height of every slide in pixels, default value is height of 'slides' container
                            $SlideSpacing: 0, //[Optional] Space between each slide in pixels, default value is 0
                            $DisplayPieces: 1, //[Optional] Number of pieces to display (the slideshow would be disabled if the value is set to greater than 1), the default value is 1
                            $ParkingPosition: 0, //[Optional] The offset position to park slide (this options applys only when slideshow disabled), default value is 0.
                            $UISearchMode: 1, //[Optional] The way (0 parellel, 1 recursive, default value is 1) to search UI components (slides container, loading screen, navigator container, arrow navigator container, thumbnail navigator container etc).
                            $PlayOrientation: 1, //[Optional] Orientation to play slide (for auto play, navigation), 1 horizental, 2 vertical, 5 horizental reverse, 6 vertical reverse, default value is 1
                            $DragOrientation: 1, //[Optional] Orientation to drag slide, 0 no drag, 1 horizental, 2 vertical, 3 either, default value is 1 (Note that the $DragOrientation should be the same as $PlayOrientation when $DisplayPieces is greater than 1, or parking position is not 0)

                            $ArrowNavigatorOptions: {//[Optional] Options to specify and enable arrow navigator or not
                                $Class: $JssorArrowNavigator$, //[Requried] Class to create arrow navigator instance
                                $ChanceToShow: 1, //[Required] 0 Never, 1 Mouse Over, 2 Always
                                $AutoCenter: 2, //[Optional] Auto center arrows in parent container, 0 No, 1 Horizontal, 2 Vertical, 3 Both, default value is 0
                                $Steps: 1                                       //[Optional] Steps to go for each navigation request, default value is 1
                            },
                            $ThumbnailNavigatorOptions: {
                                $Class: $JssorThumbnailNavigator$, //[Required] Class to create thumbnail navigator instance
                                $ChanceToShow: 2, //[Required] 0 Never, 1 Mouse Over, 2 Always

                                $ActionMode: 1, //[Optional] 0 None, 1 act by click, 2 act by mouse hover, 3 both, default value is 1
                                $AutoCenter: 0, //[Optional] Auto center thumbnail items in the thumbnail navigator container, 0 None, 1 Horizontal, 2 Vertical, 3 Both, default value is 3
                                $Lanes: 1, //[Optional] Specify lanes to arrange thumbnails, default value is 1
                                $SpacingX: 3, //[Optional] Horizontal space between each thumbnail in pixel, default value is 0
                                $SpacingY: 3, //[Optional] Vertical space between each thumbnail in pixel, default value is 0
                                $DisplayPieces: 9, //[Optional] Number of pieces to display, default value is 1
                                $ParkingPosition: 260, //[Optional] The offset position to park thumbnail
                                $Orientation: 1, //[Optional] Orientation to arrange thumbnails, 1 horizental, 2 vertical, default value is 1
                                $DisableDrag: false                            //[Optional] Disable drag or not, default value is false
                            }
                        };

                     

                        var jssor_slider1 = new $JssorSlider$("slider1_container", options);

                        //responsive code begin
                        //you can remove responsive code if you don't want the slider scales while window resizes
                        function ScaleSlider() {
                            var bodyWidth = document.body.clientWidth;
                            if (bodyWidth)
                                jssor_slider1.$SetScaleWidth(Math.min(bodyWidth, 980));
                            else
                                window.setTimeout(ScaleSlider, 30);
                        }

                        ScaleSlider();

                        if (!navigator.userAgent.match(/(iPhone|iPod|iPad|BlackBerry|IEMobile)/)) {
                            $(window).bind('resize', ScaleSlider);
                        }

                    });



                    $(function () {
                        $('legend').click(function () {
                            $(this).siblings().slideToggle("slow");
                        });
                    });


                    $(document).ready(function () {
                        $("#report tr:odd").addClass("odd");
                        $("#report tr:not(.odd)").hide();
                        $("#report tr:first-child").show();

                        $("#report tr.odd").click(function () {
                            $(this).next("tr").toggle();
                            $(this).find(".arrow").toggleClass("up");
                        });
                       
                    });

                    $(document).ready(function () {
                        $('#ver').hide();
                        $('#ver2').hide();
                        $('#report').hide();
                        $('#selectCar').hide();
                        $('#city').hide();
                        $('#edit').hide();

                    });

                    function selectCar(id) {
                        var img = '';

                        $.getJSON('server/server2.php?data=' + id, function (data) {
                            var items = '';
                            $.each(data, function (index, value) {

                                items += "<option value='" + value.id + "'>" + value.value + "</option>";//.click(function(id){		 		   

                            });
                            $("#models").html(items);
                        });

                        img += "<img style='height:50px; width: 70px' src='imagesRent/" + id + ".jpg'>";
                        $("#image").html(img);
                    }


                    function chooseType()
                    {
                        var id = $("input[type='radio']:checked").val();

                        $.getJSON('server/server5.php?id=' + id, function (data) {
                            var items = '';

                            $.each(data, function (index, value) {

                                items += "<tr><td>" + value.value + "</td><td>" + value.NameModel + "</td><td>" + value.Year + "</td><td>" + value.Color + "</td><td>" + value.SeatingCapacity + "</td><td>" + value.TypeOfMotor + "</td><td>" + value.TypeModel + "</td><td>" + value.PriceDay + "</td><td>" + value.PriceMont + "</td><td><button type='button' class='myButton' value='takeCar' onclick='takeCar(" + value.ImageModel + ")'>Take</button></td></tr>";//.click(function(id){	 		   

                            });

                            $("#report").html("<tr><th>Mark</th><th>Model</th><th>Year</th><th>Color</th><th>Seating Capacity</th><th>Type Of Motor</th><th>Type Model</th><th>Price Day</th><th>Price Mont</th></tr>" + items);
                            $("#report").show();
                        });
                        /*
                         img += "<img style='height:100px; width: 140px' src='RentCarImage/" + value + ".jpg'>";
                         $("#images").html(img);*/
                    }



                    function chooseCity()
                    {
                        var city = $("input[type='checkbox']:checked").val();

                        $("#UnCheckIt").click(function () {

                            $('input:checkbox[name=interests]').attr('checked', false);

                        });

                        $.getJSON('server/server6.php?city=' + city, function (data) {
                            var items = '';

                            $.each(data, function (index, value) {

                                items += "<tr><td>" + value.value + "</td><td>" + value.NameModel + "</td><td>" + value.Year + "</td><td>" + value.Color + "</td><td>" + value.SeatingCapacity + "</td><td>" + value.TypeOfMotor + "</td><td>" + value.TypeModel + "</td><td>" + value.PriceDay + "</td><td>" + value.PriceMont + "</td><td>" + value.city + "</td><td><button type='button' class='myButton' value='Take' onclick='takeCar(" + value.ImageModel + ")'>Take</button></td></tr>";//.click(function(id){	 		   

                            });

                            $("#city").html("<tr><th>Mark</th><th>Model</th><th>Year</th><th>Color</th><th>Seating Capacity</th><th>Type Of Motor</th><th>Type Model</th><th>Price Day</th><th>Price Mont</th><th>City</th></tr>" + items);
                            $("#city").show();
                        });


                    }



                    function alertRadioValue() {
                        var radioValue = $('input[name="type"]:checked').val();

                        $.ajax({
                            type: "POST",
                            url: "server/server3.php",
                            data: radioValue,
                            success: function () {
                                $.getJSON('server/server3.php', function (data) {
                                    var items = '';
                                    $.each(data, function (index, value) {

                                        items += "<tr><td>" + value.value + "</td><td>" + value.NameModel + "</td><td>" + value.Year + "</td><td>" + value.color + "</td><td>" + value.SeatingCapacity + "</td><td>" + value.TypeOfMotor + "</td><td>" + value.TypeModel + "</td><td>" + value.PriceDay + "</td><td>" + value.PriceMont + "</td><td><button type='button' class='myButton' value='Take' onclick='takeCar(" + value.ImageModel + ")'>Take</button></td></tr>";//.click(function(id){
                                    });
                                    $("#report").html(items);
                                    $("#report").show();
                                });
                            }
                        });
                    }

                    $(function () {
                        $.getJSON('server/server1.php', function (data) {
                            var items = '';
                            $.each(data, function (index, value) {
                                var id = value.id;
                                items += "<option value='" + value.id + "'onclick='selectCar(" + value.id + ")'>" + value.value + "</option>";
                            });
                            $("#clients").html(items);
                        });

                    });

                    function callSelectCarModel()
                    {
                        selectCarModel($("#models").val(), $("#models option:selected").text());
                    }

                    function selectCarModel(id, value) {
                        var img = '';

                        $.getJSON('server/server4.php?id=' + id + "&value=" + value, function (data) {
                            var items = '';

                            $.each(data, function (index, value) {

                                items += "<tr><td>" + value.value + "</td><td>" + value.NameModel + "</td><td>" + value.Year + "</td><td>" + value.Color + "</td><td>" + value.SeatingCapacity + "</td><td>" + value.TypeOfMotor + "</td><td>" + value.TypeModel + "</td><td>" + value.PriceDay + "</td><td>" + value.PriceMont + "</td><td><button type='button' class='myButton' value='takeCar' onclick='takeCar(" + value.ImageModel + ")'>Take</button></td></tr>";//.click(function(id){	 		   

                            });

                            $("#selectCar").html("<tr><th>Mark</th><th>Model</th><th>Year</th><th>Color</th><th>Seating Capacity</th><th>Type Of Motor</th><th>Type Model</th><th>Price Day</th><th>Price Mont</th></tr>" + items);
                            $("#selectCar").show();
                        });

                        img += "<img style='height:100px; width: 140px' src='RentCarImage/" + value + ".jpg'>";
                        $("#images").html(img);
                    }




                    $(document).ready(function () {
                        $('a.login-window').click(function () {

                            // Getting the variable's value from a link 
                            var loginBox = $(this).attr('href');

                            //Fade in the Popup and add close button
                            $(loginBox).fadeIn(300);

                            //Set the center alignment padding + border
                            var popMargTop = ($(loginBox).height() + 24) / 2;
                            var popMargLeft = ($(loginBox).width() + 24) / 2;

                            $(loginBox).css({
                                'margin-top': -popMargTop,
                                'margin-left': -popMargLeft
                            });

                            // Add the mask to body
                            $('body').append('<div id="mask"></div>');
                            $('#mask').fadeIn(300);

                            return false;
                        });

                        // When clicking on the button close or the mask layer the popup closed
                        $('a.close, #mask').live('click', function () {
                            $('#mask , .login-popup').fadeOut(300, function () {
                                $('#mask').remove();
                            });
                            return false;
                        });
                    });



                    $(document).ready(function () {
                        $("#submit").click(function () {

                            if ($("#email").val() === "" || $("#password").val() === "")
                                $("div#ack").$("#email").valhtml("please enter email and pass");
                            else
                                var email = $("#email").val();
                            $.post($("#myForm").attr("action"),
                                    $("#myForm :input").serializeArray(),
                                    function (data) {
                                        var items = '';
                                        var obj = JSON.parse(data);//decode json
                                        $.each(obj, function (index, value) {

                                            items += value.email;//.click(function(id){
                                            //            $.cookie('name', value.name);
                                            //       var_dump($.cookie);
                                        });
                                        $("#user").html(items);
                                        $.cookie('email', items, {expires: 1000});
                                        if (obj[0].name === 'Martin'){
                                            $('#ver').show() && $('#ver2').show() && $('#edit').show() && $('#registrado').hide() && $('#service').hide() && $('.btn-sign').hide() && $('.myButton1').show();
                                        }

                                        $("#welcome").show().html("Welcome " + items);
                                        $("#mask").fadeOut();
                                        $("#login-box").fadeOut();

                                    });

                            $("#myForm").submit(function () {
                                return false;
                            });
                        });
                    });

                    function takeCar(id) {

                        /*    var data = new Object();
                         data.id = id;
                         person=JSON.stringify(data);
                         alert (person); */
                        if ($.cookie('email') == null) {

                            //alert("Please, log in or resiter in the page");
                            sweetAlert("Oops...", "Please, log in or resiter in the page");
                        }
                        else
                        {
                            $.ajax({
                                type: "Get",
                                url: 'server/server9.php?id=' + id + "&email=" + $.cookie('email'),
                                //contentType: "application/json; charset=utf-8",
                                dataType: "json",
                                //    data: {id: person},
                                cache: false,
                                success: function () {
                                  		
									  location.href = 'order.html';

                                }
                            });
                        }

                    };

                    var changeClass = function (r, className1, className2) {
                        var regex = new RegExp("(?:^|\\s+)" + className1 + "(?:\\s+|$)");
                        if (regex.test(r.className)) {
                            r.className = r.className.replace(regex, ' ' + className2 + ' ');
                        }
                        else {
                            r.className = r.className.replace(new RegExp("(?:^|\\s+)" + className2 + "(?:\\s+|$)"), ' ' + className1 + ' ');
                        }
                        return r.className;
                    };

                    //  Creating our button in JS for smaller screens
                    var menuElements = document.getElementById('menu');
                    menuElements.insertAdjacentHTML('afterBegin', '<button type="button" id="menutoggle" class="navtoogle" aria-hidden="true"><i aria-hidden="true" class="icon-menu"> </i> Menu</button>');

                    //  Toggle the class on click to show / hide the menu
                    document.getElementById('menutoggle').onclick = function () {
                        changeClass(this, 'navtoogle active', 'navtoogle');
                    }

                    // http://tympanus.net/codrops/2013/05/08/responsive-retina-ready-menu/comment-page-2/#comment-438918
                    document.onclick = function (e) {
                        var mobileButton = document.getElementById('menutoggle'),
                                buttonStyle = mobileButton.currentStyle ? mobileButton.currentStyle.display : getComputedStyle(mobileButton, null).display;

                        if (buttonStyle === 'block' && e.target !== mobileButton && new RegExp(' ' + 'active' + ' ').test(' ' + mobileButton.className + ' ')) {
                            changeClass(mobileButton, 'navtoogle active', 'navtoogle');
                        }
                    }

                    function delcook()
                    {
                        $.cookie('email', '', {expires: -1});
                        location.href = 'index.html';
                    }