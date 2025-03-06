class Rectangle {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  area() {
    const area = this.width * this.height;
    return area;
  }

  paint() {
    console.log("painting with color", this.color);
    return this.color;
  }
}

const rect = new Rectangle(2, 4, "blue");
const rect2 = new Rectangle(5, 5, "white");

console.log(rect.area());

rect.width;
rect2.width;
rect.area();
rect.paint();
console.log(rect.width);
console.log(rect2.width);
