const person = [
      {
      name:"Brad",
      area: "it",
      teams: " zero",
      organisationalskills: [" leadership"," motivating"],
      level: " 2nd",
      availability: [" morning"," day"],
      skills: [" python"," javascript"],
      phone: "0123456789",
      email: "test.email"
    },
    {
      name: "John",
      area: "engineering",
      teams: " zero",
      organisationalskills: [" leadership"," motivating"],
      level: " 2nd",
      availability: [" morning"," day"],
      skills: [" python"," javascript"],
      phone: "0123456789",
      email: "test.email"
    },
    {
      name: "Sara",
      area: "environment",
      teams: " zero",
      organisationalskills: [" leadership"," motivating"],
      level: " 2nd",
      availability: [" morning"," day"],
      skills: [" javascript"," html"],
      phone: "0123456789",
      email: "test.email"
    },
    {
      name: "Jones",
      area: "marketing",
      teams: " zero",
      organisationalskills: [" leadership"," motivating"],
      level: " 2nd",
      availability: [" morning"," day"],
      skills: [" SQL"," R"],
      phone: "0123456789",
      email: "test.email"
    },
    {
      name: "Helmut",
      area: "marketing",
      teams: " zero",
      organisationalskills: [" leadership"," motivating"],
      level: " 2nd",
      availability: [" morning"," day"],
      skills: [" python"],
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

function areaCheck(){
  var areaList = [];
  var areas = document.getElementsByClassName("areabox");
  for (i = 0; i < areas.length; i++){
    if(areas[i].checked == true){
      areaList.push(areas[i].name);
    }
  }
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

function toggle1(){
  var list = document.getElementsByClassName("criteriabox");
    if(list[0].checked == true){
      list[1].checked = false;
      list[2].checked = false;
  }run()
}

function toggle2(){
  var list = document.getElementsByClassName("criteriabox");
    if(list[1].checked == true){
      list[0].checked = false;
      list[2].checked = false;
  }run()
}

function toggle3(){
  var list = document.getElementsByClassName("criteriabox");
    if(list[2].checked == true){
      list[0].checked = false;
      list[1].checked = false;
  }run()
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
  var splitSkillList = skillList.split(",");
  var areaList = sessionStorage.getItem("area", areaList);
  var criteriaList = sessionStorage.getItem("criteria", criteriaList);
  var splitCriteriaList = criteriaList.split(",");
  var count = 0;
  for (i = 0; i < person.length; i++){
    var allSkills = person[i].teams;
    allSkills += person[i].organisationalskills;
    allSkills += person[i].level;
    allSkills += person[i].availability;
    if (splitSkillList.every(function(val){return person[i].skills.indexOf(val) >= 0;}) &&
        splitCriteriaList.every(function(val){return allSkills.indexOf(val) >= 0;})){
          count += 1;
          let div = document.createElement('div');
          let name = document.createElement('h2');
          name.textContent = person[i].name + '\n' + person[i].phone + '\n' + person[i].email;
          div.appendChild(name);

          document.body.appendChild(div);
          div.style.textAlign = "center";
          div.style.border = "thick solid #0000FF";
          div.style.margin = "2% 10% 2% 10%";}
    }if(count < 1){
      alert("no");
      let div = document.createElement('div');
      let name = document.createElement('h2');
      name.textContent = "No results";
      div.appendChild(name);
      document.body.appendChild(div);
      div.style.textAlign = "center";
      div.style.border = "thick solid #0000FF";
      div.style.margin = "2% 10% 2% 10%";}
}
