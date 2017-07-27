// var diff=()=>{
// 	let a=[2,3,5,5];
// 	let b=[1,3,5,0];
//     for(let i=0;i<a.length;i++)
//     {
//     	for(let j=i+1;a.length;j++)
//     	{
//     		if(a[i]==a[j])
//     		{
//     			a[i].replace("a");
//     			b[i].replace("a");
//     		}
//     	}
//     }
//     console.log(a);
// console.log(b);
// }
// diff();


Array.prototype.dif= function(a) {
    return this.filter(function(i) {return a.indexOf(i) < 0;});
};

console.log([2,3,5,5].dif( [1,3,5,9] ));  

