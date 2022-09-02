//class movie
class movie 
{
constructor(title,studio,rating='PG')
{
this.title=title;
this.studio=studio;
this.rating=rating;
}

getPG(arr)
{
let data=arr.filter( function(d){
if(d.rating =="PG")
{
return d.title;
}
else 
{
return false
}
});

console.log(data);
}
getmovies()
{
console.log(`
Title: ${this.title}
Studio: ${this.studio}
rating: ${this.rating}
`);
}

}
let movie1=new movie("casino royale","fox studio","PG13");
let movie2=new movie("master","seven screen studio","PG");
let movie3=new movie("vikram","AP international","PG");
let movie4=new movie("cobra","seven screen studio","R");
let movie5=new movie("don","red giant movies","PG");

const arr=[movie1,movie2,movie3,movie4,movie5];
let a=movie1.getPG(arr);
movie1.getmovies();