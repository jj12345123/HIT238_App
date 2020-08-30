const person = [
      {
      name:"Brad ",
      skills: ["python ","java "],
      area: "IT"
    },
    {
      name: "John ",
      skills: ["python ","javascript "],
      area: "Engineering"
    },
    {
      name: "Sara",
      skills: ["javascript ","html "],
      area: "Environment"
    },
    {
      name: "Jones ",
      skills: ["SQL ","R "],
      area: "Marketing"
    }
  ]

for (i = 0; i < person.length; i++)
  console.log(person[i].skills);

var mark = ["python ","java "]
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
          empty.push(person[i]);

      }
      for (i = 0; i < empty.length; i++){
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

var peopleByArea = [];
function areaCheck(){
  var areaList = [];
  var peopleList = [];
  var areas = document.getElementsByClassName("areabox");
  for (i = 0; i < areas.length; i++){
    if(areas[i].checked == true){
      areaList.push(areas[i].name);
    }
  }for (i = 0; i < person.length; i++){
    if(person[i].area == areaList){
      peopleList.push(person[i]);
    }
  }
  var peopleByArea = peopleList;
  sessionStorage.setItem("people", peopleByArea);
  sessionStorage.setItem("area", areaList);
  window.location.href = "criteria.html";
}

function run(){
  var boxes = document.getElementsByClassName("checkbox");
  var classes = document.getElementsByClassName("checklabel");
  var peopleByArea = sessionStorage.getItem("people", peopleByArea);
  var areaList = sessionStorage.getItem("area", areaList);
  alert(peopleByArea);
  for (i = 0; i < boxes.length; i++){
    if(boxes[i].checked == true){
      classes[i].style.backgroundColor = "#0000FF";
    }else{
      classes[i].style.backgroundColor = "rgb(1, 179, 96)";
    }
  }
}

function move(){
  var areaList = sessionStorage.getItem("area", areaList);
  alert(areaList);
  if(areaList = "IT"){
    window.location.href = "it.html";
  }if(areaList = "Engineering"){
    window.location.href = "engineering.html";
  }if(areaList = "Environment"){
    window.location.href = "environment.html";
  }if(areaList = "Marketing"){
    window.location.href = "marketing.html";
  }if(areaList = "Finance"){
    window.location.href = "finance.html";
  }if(areaList = "Management"){
    window.location.href = "management.html";
  }if(areaList = "HealthScience"){
    window.location.href = "healthScience.html";
  }if(areaList = "Medicine"){
    window.location.href = "medicine.html";
  }if(areaList = "Logistics"){
    window.location.href = "logistics.html";
  }if(areaList = "Psychology"){
    window.location.href = "psychology.html";
  }if(areaList = "Architecture"){
    window.location.href = "architecture.html";
  }if(areaList = "CRM"){
    window.location.href = "crm.html";
  }if(areaList = "Physics"){
    window.location.href = "physics.html";
  }if(areaList = "Arts"){
    window.location.href = "arts.html";
  }
}
