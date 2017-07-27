const dup=()=>{
	let a=[3,1,7,3,8,2,3];
	let obj={};
	let op=[];
	for(let i=0;i<a.length;i++)
	{
		obj[a[i]]=0;
	}
	for(x in obj)
	{
		op.push(x);
		console.log(x);
	}
	console.log(op);
}
dup();