$(document).ready(function() {
	var email =($.cookie.read('email'));
	if (email === 'martin@gmail.com'){
        $('#ver').show() && $('#ver2').show() && $('#edit').show() && $('#registrado').hide() && $('#service').hide() && $('.btn-sign').hide();
    }});
	
	$(document).ready(function(){
		
		$("#formLeft .input-bg").hover(function() {
			$(this).addClass("active");
		}, function() {
			$(this).removeClass("active");
		});
		
		$("#formLeft input").focus(function() {
			$(this).parent().addClass("active");
		});
		$("#formLeft input").blur(function() {
			$("#formLeft .input-bg").removeClass("active");
		});
		
		$("#formRight .message-bg").hover(function() {
			$(this).addClass("active");
		}, function() {
			$(this).removeClass("active");
		});
		
		$("#formRight textarea").focus(function() {
			$(this).parent().addClass("active");
		});
		$("#formRight textarea").blur(function() {
			$("#formRight .message-bg").removeClass("active");
		});
		
		$("#commentForm").validate();
	});