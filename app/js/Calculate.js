var Calculate = (function() {

    // Public methods here
    return {
		
		calcAdd: function(firstValue, secondValue) {		
		    if ((isNaN(firstValue) == true) || (isNaN(secondValue) == true)) {
                throw new Error ("Invalid Value Given");
            }	
            return firstValue + secondValue;
        },
		
		calcSub: function(firstValue, secondValue) {
			if ((isNaN(firstValue) == true) || (isNaN(secondValue) == true)) {
                throw new Error ("Invalid Value Given");
            }	
           return firstValue - secondValue;
        },
		
		calcMul: function(firstValue, secondValue) {
			if ((isNaN(firstValue) == true) || (isNaN(secondValue) == true)) {
                throw new Error ("Invalid Value Given");
            }	
           return firstValue * secondValue;
        },
		
		calcDiv: function(firstValue, secondValue) {
			if ((isNaN(firstValue) == true) || (isNaN(secondValue) == true)) {
                throw new Error ("Invalid Value Given");
            }	
           return firstValue / secondValue;
        }

    }
}())