let value = 10;
$('.j-progress-bar').text(value+'%');
$('.j-progress-bar').attr('aria-valuenow', value).css('width', value+'%');

$('.my-button-1').click(function() {
	if (value <= 99) {
		value += 1;
		$('.j-progress-bar').text(value+'%');
		$('.j-progress-bar').attr('aria-valuenow', value).css('width', value+'%');
	} else {
		alert("Вы не можете выйти за значение 100");
	}
});

$('.my-button-3').click(function() {
	if (value <= 97) {
		value += 3;
		$('.j-progress-bar').text(value+'%');
		$('.j-progress-bar').attr('aria-valuenow', value).css('width', value+'%');
	} else {
		alert("Вы не можете выйти за значение 100");
	}
});

$('.my-button-7').click(function() {
	if (value <= 93) {
		value += 7;
		$('.j-progress-bar').text(value+'%');
		$('.j-progress-bar').attr('aria-valuenow', value).css('width', value+'%');
	} else {
		alert("Вы не можете выйти за значение 100");
	}
});
