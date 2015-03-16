$(document).ready(function() {
	$(".button").click(function() {
		var text = prompt("New Item:");
		$("#groceries").append([
			//$('<li>').attr({'id': text, 'class':'item'}).append(text)
			"<li class='check "+text+"'><input type='checkbox'></li>",
			"<li class='item "+text+"'>"+text+"</li>",
			"<li class='rmv "+text+"'>remove</li>"]
		);
		$('.'+text).css("display", "inline-block");
	});

	$("ul").on('click', '.rmv', function() {
		var myClass = $(this).attr('class').split(' ')[1];
   		$('.' + myClass).remove();
  		//$(this).remove();
	});
});

