let avg=()=>{
	let student=[['David',80],['Vinoth',77],['Divya',88],['Ishitha',95],['Thomas',68]];
	console.log(student);
	let a=0;
	for(let i=0;i<student.length;i++)
	{
       console.log(student[i][1]);
       a=a+student[i][1];
	}

	let avg=a/student.length;
	console.log(avg);

     if(avg<60)
     {
     	console.log("Grade F");
     }
     else if(avg<70)
     {
     	console.log("Grade D");
     }
     else if(avg<80)
     {
     	console.log("Grade C");
     }
     else if(avg<90)
     {
     	console.log("Grade B");
     }
     else if(avg<100)
     {
     	console.log("Grade A");
     }

}
avg();



