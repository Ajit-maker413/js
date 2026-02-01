// array
const myarr=[1,2,3,4,'r']
console.log(myarr[4]);
const myarr1=new Array(1,2,3,4)
console.log(myarr1[3]);
myarr.push(5)
console.log(myarr);
myarr.pop()
console.log(myarr);
myarr.unshift(9)
console.log(myarr);
myarr.shift(9)
console.log(myarr);
console.log(myarr.includes(9));
console.log(myarr.indexOf(9));
const newarr =myarr.join()
console.log( typeof newarr);

//slice

console.log("A",myarr);
const1=myarr.slice(1,3)
console.log(const1);
const2=myarr.splice(1,3)
console.log(const2);
console.log("b",myarr)





