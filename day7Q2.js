//class movie 
class circle {
    constructor(radius,colour) {
        this.radius=radius
        this.colour=colour
    }

getradius()
{
    console.log(`the radius of th circle is: ${this.radius}`);

}
getcolour()
{
    console.log(`the colour of th circle is: ${this.colour}`);
}
getarea()
{
    const pi=3.14;
    console.log(`the area of the circle is:${pi*(this.radius*this.radius)}`)
}
getcircumference()
{
    const pi=3.14;
    console.log(`the circumference of the circle:${2*pi*this.radius}`)
}

}
let data = new circle(2,"red");

data.getradius();
data.getcolour();
data.getarea();
data.getcircumference();