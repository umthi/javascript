var Book=[{name:'pradheep',title:'Million Dreams',age:22},
{name:'Ishu',title:'Harry Potter',age:22},
{name:'Subi',title:'Half Girlfriend',age:23},
{name:'Prem',title:'Avatar',age:22}];

Book.sort((a,b)=>{
  let x=a.title.toLowerCase();
  let y=b.title;
  if(x<y)
  {
      return -1;
  }
  if(x>y)
  {  return 1;
  }
  return 0;
});
console.log(Book);