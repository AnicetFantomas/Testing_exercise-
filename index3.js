class Calculator {
    constructor(a,b){
        this.a = a;
        this.b = b;
    }

    add () {
        return this.a + this.b;
    };

    substract() {
        return this.a - this.b;
    };

    multiply() {
        return this.a * this.b;
    };

    divide() {
        return this.a / this.b;
    }
}

const myCalculator = new Calculator(10, 20);

module.exports = myCalculator;
