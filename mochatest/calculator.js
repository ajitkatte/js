module.exports = {
    add: function (a, b) {
        this.areValid(a, b);
        return a + b;
    },

    subtract: function (a, b) {
        this.areValid(a, b);
        return a - b;
    },

    multiply: function (a, b) {
        this.areValid(a, b);
        return a * b;
    },

    divide: function (a, b) {
        this.areValid(a, b);
        return a / b;
    },

    isANumber: function (number) {
        return typeof (number) === 'number';
    },

    areValid: function (a, b) {
        if (!this.isANumber(a) || !this.isANumber(b)) {
            throw new TypeError(`${a} or ${b} is not a number`);
        }
    }
}