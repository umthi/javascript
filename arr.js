// var n=myObj.reduce((prev,curr)=>{
//   return prev.concat(curr);
// });
//console.log(n);
// var x=()=>{
//   var merge=[].concat.apply([],myObj);
//   console.log(merge);
// }
// x();
var flatten = function(a, shallow,r){
  if(!r)
  { r = []}

if (shallow) {
  return r.concat.apply(r,a);
  }

   for(let i=0; i<a.length; i++){
        if(a[i].constructor == Array){
            flatten(a[i],shallow,r);
        }else{
            r.push(a[i]);
        }
    }
    return r;
}
console.log(flatten([1, [2], [3, [[4]]],[5,6]]));
//console.log(flatten([1, [2], [3, [[4]]],[5,6]], true));