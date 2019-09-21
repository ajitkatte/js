const assert = require('chai').assert;
const expect = require('chai').expect;
const calculator = require('../calculator');


describe('Calculator', function () {
    describe('add', function () {
        it('add should be defined', function(){
            expect(calculator.add).to.not.be.undefined;
        });

        it('add should return the addition of passed numbers', function () {
            let result = calculator.add(4, 5);
            assert.equal(result, 9);
        });

        it('add should return the type string', function () {
            let result = calculator.add(5, 5);
            assert.typeOf(result, 'number');
        });

        it('add should throw a TypeError for invalid input', function () {
            let a = 5;
            let b = "5";
            expect(() => calculator.add(a, b)).to.throw(TypeError);
        });
    });

    describe('subtract', function(){
        it('subtract should be defined', function(){
            expect(calculator.subtract).to.not.be.undefined;
            assert.isDefined(calculator.subtract)
        });

        it('subtract should return the subtraction of two numbers', function(){
            let result = calculator.subtract(5, 4);
            assert.equal(result, 1);
        });

        it('subtract should accept only numbers', function(){
            let a = 5;
            let b = '4';
            expect(() => calculator.subtract(a, b)).to.throw(TypeError);
        });
        
        it('subtract should return the type number', function(){
            let result = calculator.subtract(2, 2);
            expect(result).to.be.a('number');
        })
    });

    describe('multiply', function(){
        it('multiply should be defined', function(){
            expect(calculator.multiply).to.not.be.undefined;
        });

        it('multiply should return the multiplication of the two numbers', function(){
            let result = calculator.multiply(5, 2);
            expect(result).to.eq(10);
        });

        it('multiply should throw TypeError for invalid parameters', function(){
            expect(() => calculator.multiply(5, '4')).to.throw(TypeError);
        });

        it('multiply should return the type number', function(){
            let result = calculator.multiply(5, 4);
            expect(result).to.be.a('number');
        });
    });

    describe('divide', function(){
        it('divide should be defined', function(){
            expect(calculator.divide).to.not.be.undefined;
        });

        it('divide shoulde return quotient of two numbers', function(){
            var result = calculator.divide(20, 4);
            expect(result).to.be.eq(5);
        });

        it('divide should throw TypeError when invliad arguments are passed', function(){
            expect(()=> calculator.divide(10, '2')).to.throw(TypeError);
        })
    });

    describe('isANumber', function () {
        it('isANumber should return true for a number value', function () {
            let result = calculator.isANumber(10);
            assert.equal(result, true);
        });

        it('isANumber should return false for non numberic values', function () {
            let result = calculator.isANumber('10');
            assert.equal(result, false);
        });

        it('isANumber should return the type boolean', function () {
            let result = calculator.isANumber(10);
            assert.typeOf(result, 'boolean');
        });
    })
});