// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});
describe("sayHello",function() {
    it("should be a defined function", function() {
        expect(typeof sayHello).toBe("function");
    });
    it("should return a string when called", function() {
        expect(typeof sayHello()).toBe("string");
    });
    it("should return the string 'Jane' when executed", function(){
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it("should return the string 'Hello, Alex!' when called", function(){
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it("should return the string 'Hello, Pat!' when called", function(){
       expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it("should return the string 'Hello, World!' when called blank", function(){
        expect(sayHello()).toBe("Hello, World!");
    });
    it("should return the string 'Hello, World!' when called true", function(){
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it("should return the string 'Hello, World!' when called false", function(){
        expect(sayHello(false)).toBe("Hello, World!");
    });

});
describe("isFive", function() {
   it("should be a defined function", function(){
       expect(typeof isFive).toBe("function");
   });
   it("should return the boolean value true", function(){
       expect(typeof isFive()).toBe("boolean");
   });
   it("should return the boolean value true when called 5", function(){
        expect(isFive(5)).toBe(true);
   });
   it("should return the boolean value true when called '5'", function(){
        expect(isFive("5")).toBe(true);
   });
});
describe("isEven",function(){
   it("should be defined a function", function(){
       expect(typeof isEven).toBe("function");
   });
    it("should return the boolean value true", function(){
        expect(typeof isEven()).toBe("boolean");
    });
    it("should return the boolean value true when 2 is input", function(){
       expect(isEven(2)).toBe(true);
    });
    it("should return the boolean value true when -4 is input", function(){
        expect(isEven(-4)).toBe(true);
    });
    it("should return the boolean value false when 3 is input", function(){
        expect(isEven(3)).toBe(false);
    });
    it("should return the boolean value false when 'banana' is input", function(){
        expect(isEven("banana")).toBe(false);
    });    it("should return the boolean value true when '8 is input", function(){
        expect(isEven("8")).toBe(true);
    });
    it("should return the boolean value false when Infinity is input", function(){
        expect(isEven(Infinity)).toBe(false);
    });    it("should return the boolean value false when true is input", function(){
        expect(isEven(true)).toBe(false);
    });    it("should return the boolean value false when false is input", function(){
        expect(isEven(false)).toBe(false);
    });
    it("should return the boolean value false when no input", function(){
        expect(isEven()).toBe(false);
    });
});
describe("isVowel", function(){
   it("should always return a boolean", function(){
       expect(typeof isVowel()).toBe("boolean");
   });
    it("should return the boolean value true when 'a' is input", function(){
        expect(isVowel('a')).toBe(true);
    });
    it("should return the boolean value true when 'A' is input", function(){
        expect(isVowel('A')).toBe(true);
    });
    it("should return the boolean value false when 'y' is input", function(){
        expect(isVowel('y')).toBe(false);
    });
    it("should return the boolean value false when 4 is input", function(){
        expect(isVowel(4)).toBe(false);
    });
    it("should return the boolean value false when true is input", function(){
        expect(isVowel(true)).toBe(false);
    });
    it("should return the boolean value false when false is input", function(){
        expect(isVowel(false)).toBe(false);
    });
    it("should return the boolean value false when 'banana' is input", function(){
        expect(isVowel('banana')).toBe(false);
    });
    it("should return the boolean value false when nothing is input", function(){
        expect(isVowel()).toBe(false);
    });
});