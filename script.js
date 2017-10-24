function random() {
	'use strict';
	return Math.floor(Math.random() * 10);
}
$(document).ready(function ($) {
	'use strict';
	// Задача 1
	$("body")
		.append('<div id = "exer1" class = "exer"></div>');
	$("div#exer1")
		.append('<h3>Задача 1</h3>')
		.append('<div><input type = "text" value="' + random() + '"><button class="addForm" >+</button></div>')
		.append('<textarea></textarea>')
		.append('<div class="collectForm"><button>Собрать</button><div>');

	$("#exer1 button.addForm").on("click", function () {
		if ($("#exer1 input").length < 10) {
			$("#exer1")
				.append('<div><input type = "text" value="' + random() + '"><button class="delForm">-</button></div>')
				.append($("#exer1 textarea"))
				.append($("#exer1 div.collectForm"));
			$("#exer1 button.delForm").on("click", function () {
				$(this)
					.parent()
					.detach()
					.prev()
					.detach()
					.detach();
			});
		}
	});
	$("#exer1 .collectForm button").on("click", function () {
		$("#exer1 textarea").text('');
		$('#exer1 input[type = "text"]').map(function (indx, element) {
			$("#exer1 textarea").append(element.value);
		});
	});

	// Задача 2


	$("body")
		.append('<div id = "exer2" class = "exer"></div>');
	$("div#exer2")
		.append('<h3>Задача 2</h3>')
		.append('<div><input type = "text" value="' + random() + '"><button class="addForm" >+</button></div>')
		.append('<textarea></textarea>')
		.append('<div class="oddevenRadio"><div><label>Все:</label> <input type="radio" value="*" name="oddevenRadio"></div>                 <div><label>Четные:</label> <input type="radio" value=":odd" name="oddevenRadio"></div> <div><label>Нечетные: </label><input type="radio"  value=":even" name="oddevenRadio"></div></div>')
		.append('<div class="collectForm"><button>Собрать</button><div>');

	$("#exer2 button.addForm").on("click", function () {
		if ($("#exer2 input").length < 10) {
			$("#exer2")
				.append('<div><input type = "text" value="' + random() + '"><button class="delForm">-</button></div>')
				.append($("#exer2 textarea"))
				.append($("#exer2 div.oddevenRadio"))
				.append($("#exer2 div.collectForm"));
			$("#exer2 button.delForm").on("click", function () {
				$(this)
					.parent()
					.detach()
					.prev()
					.detach()
					.detach();
			});
		}
	});
	$("#exer2 .collectForm button").on("click", function () {
		$("#exer2 textarea").text('');
		$('#exer2 input[type = "text"]' + $('input[type = "radio"]:checked').val()).map(function (indx, element) {
			$("#exer2 textarea").append(element.value);
		});
	});

	// Задача 3
	$("body")
		.append('<div id = "exer3" class = "exer"></div>');
	$("div#exer3")
		.append('<h3>Задача 3</h3>')
		.append('<div><input type = "text" value=""><button class="addForm" >+</button><span>1</span></div>')
		.append('<textarea></textarea>')
		.append('<div class="collectForm"><button>Собрать</button><div>');

	$("#exer3 button.addForm").on("click", function () {
		if ($("#exer3 input").length < 10) {
			$("#exer3")
				.append('<div><input type = "text" value=""><button class="delForm">-</button><span>1</span></div>')
				.append($("#exer3 textarea"))
				.append($("#exer3 div.collectForm"));
			$("#exer3 button.delForm").on("click", function () {
				$(this)
					.parent()
					.detach()
					.prev()
					.detach()
					.detach();
			});
		}
	});
	$("#exer3 .collectForm button").on("click", function () {
		$('#exer3 input[type = "text"]').map(function (indx, element) {
			$(this).next().next().text('');
			$(this).removeClass('warning');

			if (element.value == '') {

				$(this).addClass('warning');
				$(this).next().next().text('Заполните поле!');
			} else {
				$("#exer3 textarea").append(element.value);
			}
		});
	});

	// Задача 4
	$("body")
		.append('<div id="exer4" class="exer"><h3>Задача 4	</h3><div></div></div>')
		.append('<div class="window" ><div>Lorem ipsum dolor sit amet, consectetur adipisicing.</div><button class="but_1">Lorem</button><button class="but_1">Ipsum</button></div>')
		.append('<div class="overlay"></div>');
	$("div#exer4").append('<a href="#" class="windowAnhor">Lorem ipsum dolor sit amet.</a>').on("click", function () {
		$('.overlay').css("display", "block");
		$('.window').css("display", "block");
	$("div#exer4")
	});

});
