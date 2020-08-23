const person = [
      {
      name:"Brad",
      skills: ["python","java"]
    },
    {
      name: "John",
      skills: ["python","javascript"]
    },
    {
      name: "Sara",
      skills: ["javascript","html"]
    }
  ]

for (i = 0; i < person.length; i++)
  console.log(person[i].skills);

var mark = ["python","java"]
//var neil = ["python","javascript"]


//function check() {
//      for(i = 0; container.vehicle1.length; i++){
//       if (document.getElementById('1').checked) {
//           alert("checked");
//       } else {
//           alert("Not checked.");
//       }
//     }
//   }


document.getElementById('btn').addEventListener('click', function (evt) {
  var selectArray = [];
  var empty = [];
    evt.preventDefault();
    var theForm = document.getElementById( 'myBtnContainer' );
//initialise empty array
    for (i = 0; i < theForm.vehicle1.length; i++) {
        if(theForm.vehicle1[i].type == 'checkbox'){
             if(theForm.vehicle1[i].checked == true){
                selectArray.push(theForm.vehicle1[i].value);
             }
         }
    }  for (i = 0; i < selectArray.length; i++);
        var empty = [];
        for (i = 0; i < person.length; i++)

        if (selectArray.some(c => person[i].skills.includes(c))){
          empty.push(person[i].name, person[i].skills);
      }document.querySelector('.toucharea').innerHTML = empty;
});
