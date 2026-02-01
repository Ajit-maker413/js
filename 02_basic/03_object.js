//singleton


//object literal
const Jsuser={
    name:"Ajit",
    age:20,
    roll:"25mcmc39",
    isLoggedIn:false

}
console.log(Jsuser.name)
console.log(Jsuser.roll)

// function

Jsuser.greeting=function()
{
    console.log("hello JS user");
}
console.log(Jsuser.greeting());

Jsuser.greetingTwo=function()
{
    console.log(`hello JS user,${this.name}`);
}
console.log(Jsuser.greetingTwo());




