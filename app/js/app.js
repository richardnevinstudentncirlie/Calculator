﻿$(document).ready(function() {

    $("#calculatebutton").click(function() {
 
		var firstValue = $("#firstinput").val();
        var secondValue = $("#secondinput").val();
		var operationValue = $("#operationinput").val();

		$("#resultoutput").val('');
		try {
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
		}
		catch(err) {
			alert("Invalid Operation")
		}
		
    });
	
    $("#clearbutton").click(function() {
        $("#firstinput").val('');
        $("#secondinput").val('');
		$("#operationinput").val('');
		$("#resultoutput").val('');
    });
	
	$("#xxx").click(function() {
		var now = new Date()
		var theHour = now.getHours()
		var theMin = now.getMinutes()
		var theTime = "" + ((theHour > 12) ? theHour - 12 : theHour)
		theTime += ((theMin < 10) ? ":0" : ":") + theMin
		theTime  += (theHour >= 12) ? " pm" : " am"
		theTime += ((flasher) ? " " : "*")
		flasher = !flasher
		window.status = theTime
		// recursively call this function every second to keep timer going
		timerID = setTimeout("updateTime()",1000)
    });

});