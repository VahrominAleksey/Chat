function changeNick(obj,obj2){
   var a=obj.text1.value;
   obj2.text1.value=a;
   obj.text1.value="¬ведите текст...";
}

function show_alert()
{
  if (myCheckBox.checked)
  {
    alert("‘лажок установлен"); }
  else
  {
    alert("‘лажок не установлен") 
  }  
} 

function WatchHistory(obj,obj2){
   var count=6;
   var i=0;
   while(++i<=count){
      if(document.getElementById("check" + i).checked) {
         obj2.text1.value="»стори€ переписки страница "+i+"\n";
      }
   }
}
function WriteMessage(obj,obj2,obj3){
   var a=obj.text1.value;
   var b=obj2.text1.value;
   var c=obj3.text1.value;
   obj3.text1.value=c+a+": "+b+"\n";
   obj2.text1.value="¬ведите текст...";
}
function DeleteMessage(obj){
   obj.text1.value="";
}
function ChangeMessage(obj){
   obj.text1.value="я без пон€ти€ как это сделать((9(";
}
function cl(obj){
   obj.text1.value="";
}
function ncl(obj){
   obj.text1.value="¬ведите текст...";
}