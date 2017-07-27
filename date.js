const dat=()=>{
 var a=new Date().getDay();
 var b=new Date().getMonth();
 var c=new Date().getFullYear();
 var d= new Date().getHours();
 var e=new Date().getMinutes();
 var f=new Date().getSeconds();
 
let fn=()=>{
  if(a<10)
{
   a="0"+a.toString();
}
if(b<10)
{
   b="0"+b.toString();
}
if(d<10)
{
   d="0"+d.toString();
}
if(e<10)
{
   e="0"+e.toString();
}
if(f<10)
{
   f="0"+f.toString();
}

}
fn(); 

console.log("Today is "+b+"/"+a+"/"+c+" and time is "+d+":"+e+":"+f);

}
dat();


