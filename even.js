const even=()=>{
	let n=25468;
   n=n.toString();
   console.log(n);
   let arr=[];
   let ans="";


for(let i=0;i<n.length;i++)
{
    if(!(isNaN(n.charAt(i))))
  {
    arr.push(n.charAt(i));
}
       

}
for(var i=0;i<arr.length;i++)
{
	var j=i+1;

	 if(arr[i]%2==0 && arr[j]%2==0)
	 {
      ans=ans+arr[i]+"-";
}
   else
   {
   	 ans=ans+arr[i];
   }
}
  console.log(ans);

}
even();