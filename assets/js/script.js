function getResult() {
	//*form
	const number1 = parseFloat($("#num1").val());
	const number2 = parseFloat($("#num2").val());

	const operation = $("#operation_select").val();

	switch (operation) {
		case "add":
			result = number1 + number2;
			break;
		case "sub":
			result = number1 - number2;
			break;
		case "mul":
			result = number1 * number2;
			break;
		case "div":
			result = number1 / number2;
			break;
	}

	//if result is not a number nothing will return
	if (isNaN(result)) {
		return;
	}

	$("#result").val(result);

	$("#result").css("transform", "scale(1.15)");
	setTimeout(function () {
		$("#result").css("transform", "scale(1)");
	}, 200);
}

function Clear() {
	const num1 = $("#num1");
	const num2 = $("#num2");
	const result = $("#result");

	num1.val("");
	num2.val("");
	result.val("");

	num1.toggleClass("cleared");
	num2.toggleClass("cleared");
	result.toggleClass("cleared");

	setTimeout(function () {
		num1.toggleClass("cleared");
		num2.toggleClass("cleared");
		result.toggleClass("cleared");
	}, 300);
}

function tryToAutomaticallyCalcaulate() {
	if ($("#num1").val() && $("#num2").val()) {
		getResult();
	} else {
		$("#result").val("");
	}
}

function setOperationClass(
	operation = document.getElementById("operation_select").value
) {
	const operation_select = $("#operation_select");
	operation_select.removeClass(["add", "sub", "mul", "div"]);
	operation_select.addClass(operation);

	operation_select.css("transform", "scale(1.15)");
	setTimeout(function () {
		operation_select.css("transform", "scale(1)");
	}, 200);
}

function setOperation(operation) {
	$("#operation_select").val(operation);
	tryToAutomaticallyCalcaulate();
	setOperationClass(operation);
}

//!website refresh
window.onload = function () {
	setOperationClass();

	document
		.getElementById("num1")
		.addEventListener("input", tryToAutomaticallyCalcaulate);
	document
		.getElementById("num2")
		.addEventListener("input", tryToAutomaticallyCalcaulate);
};
