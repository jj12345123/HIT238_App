var source = fetch("./people.json");
console.log(JSON.stringify(source));



var mark = ["python","java"]
//var neil = ["python","javascript"]

var empty = []

//function check() {
//      for(i = 0; container.vehicle1.length; i++){
//       if (document.getElementById('1').checked) {
//           alert("checked");
//       } else {
//           alert("Not checked.");
//       }
//     }
//   }
var selectArray = [];

document.getElementById('btn').addEventListener('click', function () {
    var theForm = document.getElementById( 'myBtnContainer' );
//initialise empty array
    for (i = 0; i < theForm.vehicle1.length; i++) {
        if(theForm.vehicle1[i].type == 'checkbox'){
             if(theForm.vehicle1[i].checked == true){
                selectArray.push(theForm.vehicle1[i].value);

             }
         }
    }validate()
}, false);

function validate(){
for (i = 0; i < selectArray.length; i++);
  if (selectArray.indexOf(mark[i])){
    empty.push(mark[i]);
    alert(mark);
}else{
  alert('not working')
}
}