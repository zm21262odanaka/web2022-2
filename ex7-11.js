function add4(){
var x =document.getElementById('nen4').value;
var z=Number(x)%Number('4');
var a=Number(x)%Number('100');
var b=Number(x)%Number('400');
if(a==0&&b!=0){
 alert('平年');
}
else if(z==0){
 alert('うるう年');
}
else{
 alert('平年');
 }
}
