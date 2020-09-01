const person = [
      {
      name:"Brad",
      area: "it",
      teams: "zero",
      organisationalskills: ["leadership","motivating"],
      level: "2nd",
      availability: ["morning","day"],
      skills: [" python"," javascript"],
      phone: "0123456789",
      email: "test.email"
    },
    {
      name: "John",
      skills: [" python"," javascript"],
      area: "engineering",
      phone: "0123456789",
      email: "test.email"
    },
    {
      name: "Sara",
      skills: [" javascript"," html"],
      area: "environment",
      phone: "0123456789",
      email: "test.email"
    },
    {
      name: "Jones",
      skills: [" SQL"," R"],
      area: "marketing",
      phone: "0123456789",
      email: "test.email"
    },
    {
      name: "Helmut",
      skills: [" python"],
      area: "marketing",
      phone: "0123456789",
      email: "test.email"
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
  for (i = 0; i < boxes.length; i++){
    if(boxes[i].checked == true){
      classes[i].style.backgroundColor = "#0000FF";
    }else{
      classes[i].style.backgroundColor = "rgb(1, 179, 96)";
    }
  }
}

function skillCheck(){
  var boxes = document.getElementsByClassName("skillbox");
  var classes = document.getElementsByClassName("checklabel");
  for (i = 0; i < boxes.length; i++){
    if(boxes[i].checked == true){
      classes[i].style.backgroundColor = "#0000FF";
    }else{
      classes[i].style.backgroundColor = "rgb(1, 179, 96)";
    }
  }
}

function move(){
  var criteriaList = [];
  var criteria = document.getElementsByClassName('criteriabox');
  for (i = 0; i < criteria.length; i++){
    if(criteria[i].checked == true){
      criteriaList.push(criteria[i].name);
    }
  }
  sessionStorage.setItem("criteria", criteriaList);
  var areaList = sessionStorage.getItem("area", areaList);
  areaList += ".html"
  window.location.href = areaList;
}

function resultsCheck(){
  var skillList = [];
  var skills = document.getElementsByClassName('skillbox');
  for (i = 0; i < skills.length; i++){
    if(skills[i].checked == true){
      skillList.push(skills[i].name);
    }
  }
  sessionStorage.setItem("skill", skillList);
  window.location.href = "results.html";
}

// Continue here!
function loadResults(){
  var skillList = sessionStorage.getItem("skill", skillList);
  var testList = skillList.split(",");
  var areaList = sessionStorage.getItem("area", areaList);
  var criteriaList = sessionStorage.getItem("criteria", criteriaList);
  for (i = 0; i < person.length; i++){
    alert(testList);
    if (testList.every(function(val){return person[i].skills.indexOf(val) >= 0;})){
      alert(person[i].name);
      alert(skillList);
      alert('works')
      let div = document.createElement('div');
      div.id = 'content';
      div.class = 'note';

// create a new heading and add it to the div
      let name = document.createElement('h5');
      name.textContent = person[i].name + '\n' + person[i].phone + '\n' + person[i].email;
      div.appendChild(name);

// add div to the document
      document.body.appendChild(div);
      div.style.textAlign = "center";
      div.style.border = "thick solid #0000FF";
      div.style.margin = "2% 10% 2% 10%";}
    }
}
