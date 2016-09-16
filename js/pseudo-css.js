var changeExample = $("select.changehtml")
var selectElement = $("select.element")
var select1 = $("select.selector")
var select2 = $("select.nth")

function clearvalues() {
	$(".example li, .example p, .example tr, .example td, .example label, .example .misc div, .example .input").css("background", "none");
}

function changeValuesWithN() {

	var exampletype = changeExample.val();
	var element = $("select." + exampletype + "-elements").val();
	var value = select1.val();
	var nth = select2.val();

	if (exampletype == "misc" && element == "input") {
		$("." + exampletype + " ." + element + value + nth).css("background", "aquamarine");
	} else {
		$("." + exampletype + " " + element + value + nth).css("background", "aquamarine");
	}
	$(".value").text(element + value + nth);

}

function changeValues() {

	var exampletype = changeExample.val();
	var element = $("select." + exampletype + "-elements").val();
	var value = select1.val();

	if (exampletype == "misc" && element == "input") {
		$(".misc .input" + value).css("background", "aquamarine");
	} else {
		$("." + exampletype + " " + element + value).css("background", "aquamarine");
	}
	$(".value").text(element + value);

}

function ifcontainsnth() {
	if ($("select.selector option:selected").filter(":contains('nth')").length > 0) {
		select2.css("display", "inline-block");
		changeValuesWithN();
	} else {
		changeValues();
	}
}

$(document).ready(function() {

	changeValues();

	changeExample.change(function() {
		var exampletype = changeExample.val();

		selectElement.css("display", "none");
		$("select." + exampletype + "-elements").css("display", "block");
		$(".example > div").css("display", "none");
		$("." + exampletype).css("display", "block");
		ifcontainsnth();
	});

	selectElement.change(function() {
		clearvalues();
		ifcontainsnth();
	});

	select1.change(function() {
		clearvalues();
		select2.css("display", "none");
		ifcontainsnth();
	});

	select2.change(function() {
		clearvalues();
		changeValuesWithN();
	});
	
});