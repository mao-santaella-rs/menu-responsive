var ancho_btn_responsive = 52;
var speed = 400;

$(document).ready(function(){
	$("#rspnsv-menu > ul > li").hover(function() {
		$(this).find("ul").slideDown();
	}, function() {
		$(this).find("ul").slideUp();
	});


	var activate_button = 0;

	$(".btn_rspnsv").click(function() {
		if(activate_button == 0){
			$("#rspnsv-menu").animate({
				width: "100%"
			}, speed, function() {
				$("#rspnsv-menu > ul").slideDown(speed);
			});
			activate_button ++;
			console.log("activado" + activate_button);
		}else{
			$("#rspnsv-menu > ul").slideUp(speed, function(){
				$("#rspnsv-menu").animate({
					width: ancho_btn_responsive
				}, speed);
			});
			activate_button --;
			console.log("desactivado" + activate_button);
		}
	});
});
