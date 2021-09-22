var s="Hey there, i am a javascript developer, and i live in vienna";
var a="i am a javascript developer";
var z1=a.length;
var z2=s.indexOf(a);
var s2=s.substring(z2,z2+z1);
s2.replace(s2[0],"I");
console.log(s2+".");