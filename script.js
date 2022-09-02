const movieList = [["After", "Voltage Pictures", "PG13"],["unratedMovie", "Unknown Studio"], ["Love Yourself", "Studio Single", "R"], ["Iron Man", "universal studio", "PG13"], ["unkownFilm", "Studio Single"]  ]

// class movie
class Movie {
    constructor(title , studio, rating = "PG"){
        
    this.title = title
    this.studio = studio
    this.rating = rating
    }

    // create a method to develop a detailed overview of the movie
    getDetail(){
        return `The ${this.title} is a movie which is under ${this.studio} and rated as ${this.rating}`
    }
    
    // static method to filter out the unRated or PG rated movies in the list of data of movies in array of array format
 static getPG(movie){
     var pgArray = [];
    for(let i in movie){
        if(movie[i].length === 2){
            pgArray.push(movie[i][0])
        }
    }
    return !pgArray.length == 0 ?  pgArray : `There is no PG or unRated movies`
 }
}

// get detailed overview for all the movies in the list of data by getDetail method
for(let i in movieList){
const movies = new Movie(...movieList[i])
console.log(movies.getDetail())
}

// filter out unrated or PG rated movies from list of data
console.log(` Un-Rated Movies : ${Movie.getPG(movieList)}`);

// create a instance for class Movie with its title, studio, rating
const CRMovie = new Movie("Casino Royale", "Eon Productions", "PG13")
// get detailed overview for created instance
console.log(CRMovie.getDetail())


// 3) class person to hold details

class Person{
    constructor(props=[]){
  return props
    }
}

var me = new Person()
me.name = "Mugesh"
me.age = "25"

console.log(me);

//uber price
class Uber
{
    constructor(basefare,costpermile,costperminute,timeofride,ridedistance,bookingfee,surgemultiplier){
        {
            this.basefare=basefare;
            this.costpermile=costpermile;
            this.costperminute=costperminute;
            this.timeofride=timeofride;
            this.ridedistance=ridedistance;
            this.bookingfee=bookingfee;
            this.surgemultiplier=surgemultiplier;;
        }
    }

getfare()
{
    console.log(`The fare is : ${this.basefare+((this.costperminute*this.timeofride)+(this.costpermile*this.ridedistance)*this.surgemultiplier)+this.bookingfee}`);
}
}

let firstride= new Uber(10,7,3,10,20,3,5);
firstride.getfare();

//circle
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
