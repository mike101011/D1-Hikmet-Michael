//Part1
var a=["apple", "banana", "kiwi"];
a.push("orange");
console.log(a.join());
a.pop();
console.log(a.join());
//Part2
var a2=["monkey", "horse", "dog"];
console.log(a2.sort().join());
a2.splice(0,0,"cat");
console.log(a2.sort().join());