var mark = ["python","java"]
var neil = ["python","javascript"]

//var empty = []

//function check() {
//      for(i = 0; container.vehicle1.length; i++){
//       if (document.getElementById('1').checked) {
//           alert("checked");
//       } else {
//           alert("Not checked.");
//       }
//     }
//   }

document.getElementById('btn').addEventListener('click', function () {
    var theForm = document.getElementById( 'myBtnContainer' );
    var i;
    var selectArray = []; //initialise empty array
    for (i = 0; i < theForm.vehicle1.length; i++) {
        if(theForm.vehicle1[i].type == 'checkbox'){
             if(theForm.vehicle1[i].checked == true){
                selectArray.push(theForm.vehicle1[i].value);
                alert(theForm.vehicle1[i].value);
             }
         }
    }
}, false);




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
          empty.push(person[i]);

      }for (i = 0; i < empty.length; i++){
        let div = document.createElement('div');
        div.id = 'content';
        div.class = 'note';

// create a new heading and add it to the div
        let name = document.createElement('h5');
        name.textContent = empty[i].name + '\n' + empty[i].skills;
        div.appendChild(name);

// add div to the document
        document.body.appendChild(div);
        div.style.textAlign = "center";
        div.style.border = "thick solid #0000FF";
        div.style.margin = "2% 10% 2% 10%";}
});











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
    },
    {
      name: "Jones",
      skills: ["SQL","R"]
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
