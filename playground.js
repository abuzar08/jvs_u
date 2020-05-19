// var x = Math.floor(Math.random() * 10) +1
// console.log(x);

// function rand (){
//   var x = Math.floor(Math.random() * 10)
//   return x;
// }

var animals = ["cat", " dog", " rabbit", " bird", " fish"];
// var randomIndex = Math.floor(Math.random()*animals.length);
// console.log(randomIndex);
//
// var question = Number(prompt(`Where do you thing ${animals[randomIndex]} is? (0-4)`));
// if (question == randomIndex){
//   alert(`Wuhoo! you're right!`);
// }
//
// else {
//   alert('Ohnoooo');
// }
//
// document.write(`Here's the real order: ${animals}`);
//

animals.push(" Bear");
animals.splice(3,2);
//from 3rd index, remove 2 items.

var arr = ['a','b','c','d','e'];
document.write(`ARR: `)
for (x in arr)
{
  document.write(`${x}:${arr[x]}    `);
}

var obj = {name: "Abu", height:6, weight:80, cgpa:9.6};
console.log(obj);

//for attributes: either you do obj.name OR

console.log(obj["name"]);

//Advantage? look

//1.
var prop = prompt("What do you wanna see?")
alert(`${prop}: ${obj[prop]}`);

//2.
//
// obj[prop] = "Not Abu";
//
// console.log(obj);
// LOL nevermind, you can do that with . too

// Add attributes

obj.semester = 6;
console.log(obj);
delete obj.semester;

for(x in obj){
  console.log(x);
  console.log(obj[x]);
}
