describe("My Calculate", function() {

    it("should convert imperial weight to metric", function() {
	
        expect(Calculate.convertFromPoundsToKIlo(2.2)).toBe(1);
		
    });
	
    it("should be able to deal with strings", function(){
	
        expect(function() {Calculate.convertFromPoundsToKIlo("hello")}).toThrow(new Error("Not a number"))
		
    });
	
	
	it("Addition", function() {
	
        expect(Calculate.calcAdd(4,4)).toBe(8);
		
    });
	
	it("Addition with invalid value", function(){
	
        expect(function() {Calculate.calcAdd(2,"hello")}).toThrow(new Error("Invalid Value Given"))
		
    });

	
	it("Subtraction", function() {
	
        expect(Calculate.calcSub(4,4)).toBe(0);
		
    });
	
	it("Subtraction with invalid value", function(){
	
        expect(function() {Calculate.calcSub("hello", 2)}).toThrow(new Error("Invalid Value Given"))
		
    });
	
	it("Multiplication", function() {
	
        expect(Calculate.calcMul(4,4)).toBe(16);
		
    });
	
	it("Multiplication with invalid value", function(){
	
        expect(function() {Calculate.calcSub("hello", "hello")}).toThrow(new Error("Invalid Value Given"))
		
    });

	
	it("Division", function() {
	
        expect(Calculate.calcDiv(4,4)).toBe(1);
		
    });
	
	
	it("Division with invalid value", function(){
	
        expect(function() {Calculate.calcSub("hello", "hello")}).toThrow(new Error("Invalid Value Given"))
		
    });

	
})