$(document).ready(function() {

    $("#calculatebutton").click(function() {
 
		var firstValue = $("#firstinput").val();
        var secondValue = $("#secondinput").val();
		var operationValue = $("#operationinput").val();

		$("#resultoutput").val('');
		
		switch(operationValue) {
			case "+":
				$("#resultoutput").val(Calculate.calcAdd(firstValue,secondValue));
				break
			case "-":
				$("#resultoutput").val(Calculate.calcSub(firstValue,secondValue));
				break
			case "*":
				$("#resultoutput").val(Calculate.calcMul(firstValue,secondValue));
				break
			case "/":
				$("#resultoutput").val(Calculate.calcDiv(firstValue,secondValue));
				break
			default:
				alert("Invalid Operation")
		}		
		
    });
	
    $("#clearbutton").click(function() {
        $("#firstinput").val('');
        $("#secondinput").val('');
		$("#operationinput").val('');
		$("#resultoutput").val('');
    });

});