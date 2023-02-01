function add4(){
  var a=document.getElementById('nen1').value;
  var b=Number(a)%Number('4');
  var c=Number(a)%Number('100');
  var d=Number(a)%Number('400');
  if(c==0&&d!=0){
    alert=('平年');
}
    else if(b==0){
    alert('うるう年');
}
else ('平年')；
}
}
  
