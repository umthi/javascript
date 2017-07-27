.var arr=[];
var myObj =
[{'name':'Saurabh', 'age': 30, 'occupation': "Team Leader"},
{'name':'Anupriya', 'age': 32, 'occupation': "Team Leader"},
{'name':'Kalyani', 'age': 25, 'occupation': "Programmer"},
{'name':'Damodaran', 'age': 27, 'occupation': "Programmer"},
{'name':'Krishnakath', 'age': 22, 'occupation': "Programmer"},
{'name':'Venketraman', 'age': 28, 'occupation': "Programmer"}];
for(i in myObj)
{
arr[i]=myObj[i].age;
var y=myObj[i].occupation;
if(y=="Programmer")
{
    var x=myObj[i].name + "  " + myObj[i].age;
    console.log(x +"  " +y);

}


}

var desc=arr.sort(function(a,b)
{
    return b-a;
});
console.log(" Age in decending order: "+desc);