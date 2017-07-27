var a="umamaheswari";
console.log(a);
var arr=[];
var as="";
var ds="";
for(var i=0;i<a.length;i++)
{
   arr.push(a.charAt(i));
}

arr.sort();

for(var i=0;i<arr.length;i++)
{
as=as+arr[i];
}
console.log("asending order is:"+as);
arr.reverse(arr);
for(var i=0;i<arr.length;i++)
{
ds=ds+arr[i];
}
console.log("descending oredr is:"+ds);



