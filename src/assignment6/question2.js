/* 2. Create a class Shape with properties width and height and methods getArea(). Create two classes Rectangle and Triangle that inherit from the Shape class and implement the getArea() method for their respective shapes. */

class Shape {
  constructor (width, height) {
      this.width = width;
      this.height = height;
  }

  getArea() {
      return 0;
  }
};

class Rectangle extends Shape {
  getArea() {
    console.log(this.width);
    console.log(this.height);
   
    return this.width * this.height;
  }
};

class Triangle extends Shape {
  getArea() {
    return 0.5 * this.width * this.height;
  }
};

const rect = new Rectangle(10, 5);
// const rect1 = new Rectangle();

console.log(rect.getArea());
// console.log(rect1.getArea());

const tri = new Triangle(5, 5);
console.log(tri.getArea());