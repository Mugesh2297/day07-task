//class movie 
class person
{
    constructor(name,age,gender,village,city,district,pincode){
        this.name=name;
        this.age=age;
        this.gender=gender;
        this.village=village;
        this.city=city;
        this.district=district;
        this.pincode=pincode;
}
getname()
{
    console.log(`Name: ${this.name}`);

}
getage()
{
    console.log(`Age: ${this.age}`);

}
getgender()
{
    console.log(`Gender: ${this.gender}`);

}
getvillage()
{
    console.log(`Village: ${this.village}`);
}
getcity()
{
    console.log(`City: ${this.city}`);

}
getdistrict()
{
    console.log(`District: ${this.district}`);
}
getpincode()
{
    console.log(`Pincode: ${this.pincode}`);

}

}
let data=new person("Midhun kumar B",26,"male","Ayermadem","vridhachalam","cuddalore",606001);

data.getname();
data.getage();
data.getgender();
data.getvillage();
data.getcity();
data.getdistrict();
data.getpincode();