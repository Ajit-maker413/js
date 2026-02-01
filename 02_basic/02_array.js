const alpha=['A','B','C']
const alpha1=['g','f','w']
//alpha.push(alpha1);
console.log(alpha);

console.log(alpha.concat(alpha1));

//spade operator
const all_alpha=[...alpha,...alpha1]
console.log(all_alpha);

const another_array=[1,2,3,[4,5,6],[7,8,9,[4,5]],12]
const real_another_array=another_array.flat(Infinity)
console.log(real_another_array);


