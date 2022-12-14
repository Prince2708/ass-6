public class Rectangle {
    double w, h;

    Rectangle(double width, double height) {
        this.w = width;
        this.h = height;
    }

    public double getArea() {
        return w * h;
    }

    public double getPerimeter() {
        return 2 * (w + h);
    }
}