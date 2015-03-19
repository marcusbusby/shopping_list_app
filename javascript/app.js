/*
tasks:
make responsive
align text
add check image
*/


$(document).ready(function() {
	$(".button").click(function() {
		var text = prompt("New Item:");
		$("#groceries").append(
			//$('<li>').attr({'id': text, 'class':'item'}).append(text)
			"<div class='"+text+"'><div class='check unchecked'></div><div class='item'>"+text+"</div><div class='rmv'>remove</div></div>"
			//"<div class='check "+text+"'><input type='checkbox'></li>",
			//"<div class='item "+text+"'>"+text+"</li>",
			//"<div class='rmv "+text+"'>remove</li>",
		);
		$('.'+text).children().css("display", "table");
		$('.'+text).children('.check').css({"position": "absolute", "top": "50%","left": "0%"});
		$('.'+text).children('.item').css({"position": "absolute", "top": "50%","left": "50%"});
		$('.'+text).children('.rmv').css({"position": "absolute", "top": "50%","left": "100%"});
		$('.'+text).css("margin", "1em");
		$('.'+text).css("border-radius", "1.5em");
		$('.'+text).css("font-family", "'Ubuntu'");
		$('.'+text).css("text-align", "center");
		$('.'+text).css("position", "relative");
		$('.'+text).css("verticle-align", "middle");
		$('.'+text).css({"width": "50em", "height": "3em"});
		$('.'+text).css("background-color", "steelblue");

	});

	$("#groceries").on('click', '.rmv', function() {
		//var myClass = $(this).attr('class').split(' ')[1];
		var myClass = $(this).parent().attr('class');
		$('.' + myClass).animate({
			width: "0%"
		}, 500, function(){
			$('.' + myClass).remove();
		});
	});

	$("#groceries").on('click', '.check', function() {
		//var myClass = $(this).attr('class').split(' ')[1];
		var myClass = $(this).parent().attr('class');
		console.log(this);
		if($(this).hasClass("checked")) {
			$(this).removeClass("checked");
			$('.'+myClass).css("background-color", "steelblue");
			$(this).addClass("unchecked");
		}
		else if($(this).hasClass("unchecked")) {
			$(this).removeClass("unchecked");
			$('.'+myClass).css("background-color", "crimson");
			$(this).addClass("checked")
		}
		else {
			$(this).addClass("checked");
		}

		/*var myClass = $(this).parent().attr('class');
		console.log($('.'+myClass).children('.check'));
		if($('.'+myClass).children('.check').attr('checked')) {
			$('.'+myClass).css("background-color", "blue");
		}
		else{
			$('.'+myClass).css("background-color", "red");
		}*/

  		//$(this).remove();
	});

	$( ".button" ).hover(
		function() {
  		$( this ).css("background-color", "#8197cf");
  	}, function() {
  		$( this ).css("background-color", "steelblue");
	});

	/*function switchStatus(clss) {
		console.log($('.'+clss).children('.check'));
		if($('.'+clss).children('.check').checked == true) {
			$('.'+clss).css("background-color", "blue");
		}
		else{
			$('.'+clss).css("background-color", "red");
		}
	}*/
});

