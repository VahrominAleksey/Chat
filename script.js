function changeNick(obj,obj2){
   var a=obj.text1.value;
   obj2.text1.value=a;
   obj.text1.value="������� �����...";
}

function show_alert()
{
  if (myCheckBox.checked)
  {
    alert("������ ����������"); }
  else
  {
    alert("������ �� ����������") 
  }  
} 

function WatchHistory(obj,obj2){
   var count=6;
   var i=0;
   while(++i<=count){
      if(document.getElementById("check" + i).checked) {
         obj2.text1.value="������� ��������� �������� "+i+"\n";
      }
   }
}
function WriteMessage(obj,obj2,obj3){
   var a=obj.text1.value;
   var b=obj2.text1.value;
   var c=obj3.text1.value;
   obj3.text1.value=c+a+": "+b+"\n";
   obj2.text1.value="������� �����...";
}
function DeleteMessage(obj){
   obj.text1.value="";
}
function ChangeMessage(obj){
   obj.text1.value="� ��� ������� ��� ��� �������((9(";
}
function cl(obj){
   obj.text1.value="";
}
function ncl(obj){
   obj.text1.value="������� �����...";
}