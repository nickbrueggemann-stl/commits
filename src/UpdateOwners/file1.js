class Triangle {
    constructor(base, height) {
        this.base = base;
        this.height = height;
    }

    calculateArea() {
        return (this.base * this.height) / 2;
    }
}

module.exports = { Triangle };

// Example usage:
// const triangle = new Triangle(10, 5);
// console.log(triangle.calculateArea()); // Output: 25
