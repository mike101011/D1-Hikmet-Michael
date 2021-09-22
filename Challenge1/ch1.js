var a=[['Vienna',1,2,3,4],[1,2,'is',3,4],[1,2,3,'a',4],[1,2,3,4,'nice'],[1,"city",2,3,4]]; // A five dimensional array
var s=" "; // A string with a space
var space=0;//This variable stores the space between the strings
console.log(a[0][0]);//logs the first string
space=a[0][0].length+1;//increased by the length of the string plus an empty space
console.log(s.repeat(space)+a[1][2]);// The string s is repeated 7 times and then the specified string is added.
space=space+a[1][2].length+1;//As before by length of the string plus an empty space.
console.log(s.repeat(space)+a[2][3]);
space=space+a[2][3].length+1;
console.log(s.repeat(space)+a[3][4]);
space=space+a[3][4].length+1;
console.log(s.repeat(space)+a[4][1]);