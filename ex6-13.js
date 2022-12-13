function hyoji13(){
//表示する文字
var str13 = "1文字ずつ表示します。";
  
//テキストボックスの文字数  
var cnt13 = document.timer13.moji13.value.length;
 
//文字が表示されているか確認
if ( cnt13 < 11 ){

//現在より１文字多く切り出して表示
document.timer13.moji13.value = str13.substr(0,cnt13+1);}else{


//全て表示されたら、空文字に戻す  
document.timer13.moji13.value = "";}

//setTimeout()を含む関数を呼び出す
setTimeout("hyoji13()",1000);}
