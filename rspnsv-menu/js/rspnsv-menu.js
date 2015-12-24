var main_menu_nav = $("#rspnsv-menu");
var btn_rspnsv = $(".btn_rspnsv");
var ancho_btn_responsive = btn_rspnsv.width();
var speed = 400;

var cont_width = btn_rspnsv.parent().width();
var cont_offset = btn_rspnsv.parent().offset();

//VARIABLES PARA MENU HORIZONTAL
var menu_horizontal = $(".menu-horizontal");


//FUNCION PARA MENU HORIZONTAL
var menu_horizontal_fn = function(){

	var ancho_btn_responsive = btn_rspnsv.width();

	var cont_width = btn_rspnsv.parent().width();
	var cont_offset = btn_rspnsv.parent().offset();

	for (var i = 0; i < menu_horizontal.length; i++) {

		menu_horizontal.eq(i).addClass("mh_"+i);

		var menu_i = $(".mh_"+i);

		var tamanos_array = new Array();

		for (var i2 = 0; i2 < menu_i.find("div").length; i2++) {
			var each_width = menu_i.find("div").eq(i2).width();
			tamanos_array.push(each_width);
		}

		var border_right = menu_i.find("div").css('border-right-Width')[0];
		border_right = parseInt(border_right) + 1;

		var tamano_maximo = Math.max.apply(Math, tamanos_array);
		tamano_maximo = Math.round(tamano_maximo);
		tamano_maximo = parseInt(tamano_maximo);

		menu_i.find("div").css({
			"width": tamano_maximo + "px"
		});

		var width_final = (tamano_maximo + border_right) * menu_i.find("div").length;

		menu_i.css({
			"width":  width_final + "px"
		});

		var menu_i_offset = menu_i.parent().offset();

		var overflow = (menu_i.width() + (menu_i_offset.left - cont_offset.left)) - cont_width;

		if (menu_i.width() > cont_width){
			menu_i.css({
				"width": tamano_maximo + "px",
				"left": "0"
			});
		}else if (overflow > 0) {
			menu_i.css({
				"left":  - overflow + "px"
			});
		}else{
			menu_i.css({
				"left": "0"
			});
		}
	}
};

var menu_full_width = function(){
	var ancho_btn_responsive = btn_rspnsv.width();

	var cont_width = btn_rspnsv.parent().width();
	var cont_offset = btn_rspnsv.parent().offset();

	var items = $(".full-width").find("li");
	var items_number = items.length;
	var tamano_items = 100 / items_number;
	var menu_offset = $(".full-width").parent().offset();
	var position_final_menu = menu_offset.left - cont_offset.left;

	$(".full-width").css({
		"width": cont_width + "px",
		"left": - position_final_menu + "px"
	});

	items.css({
		"width": tamano_items + "%"
	});
}

var default_position_menu = function(){
	$("#rspnsv-menu > ul > li > ul").css({
		"display":"none",
		"margin-top":"0"
	});
	console.log("default pos");
}

$(document).ready(function(){

	var activate = true;

	menu_horizontal_fn();
	menu_full_width();
	default_position_menu();

	$(window).on("load resize",function(){

		if ($(window).width() < 680 && activate == true) {
			console.log("estoy en un mobil");
			main_menu_nav.find("ul, li, div").removeAttr('style');
			default_position_menu();
			activate = false;
		}else if($(window).width() > 680){
			if (activate == false) {
				main_menu_nav.removeAttr('style');
				main_menu_nav.find("ul, li, div").removeAttr('style');
				menu_horizontal_fn();
			    menu_full_width();
				default_position_menu();
				activate = true;
				console.log("estoy en un pc 1");
			}
			console.log("estoy en un pc");
			menu_horizontal_fn();
		    menu_full_width();
		}

	});



	$("#rspnsv-menu > ul > li").hover(function() {
		$(this).find("ul").stop();
		$(this).find("ul").slideDown();
	}, function() {
		$(this).find("ul").stop();
		$(this).find("ul").slideUp();
	});

	var activate_button = 0;

	btn_rspnsv.click(function() {
		if(activate_button == 0){
			$("#rspnsv-menu").animate({
				width: "100%"
			}, speed, function() {
				$("#rspnsv-menu > ul").slideDown(speed);
			});
			activate_button ++;
		}else{
			$("#rspnsv-menu > ul").slideUp(speed, function(){
				$("#rspnsv-menu").animate({
					width: ancho_btn_responsive
				}, speed);
			});
			activate_button --;
		}
	});



});
