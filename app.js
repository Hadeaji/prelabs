'use strict'


var collection=[];

function Factoy(color,model,year,onwer) {
    this.color = color;
    this.model = model;
    this.year = year;
    this.onwer = onwer;
    collection.push(this);
}


var car1 = new Factoy('black','nissan','2005','laith');
var car2 = new Factoy('Red','BMW','2000','hadi');
var car3 = new Factoy('gray','ford','2018','rana');
var car4 = new Factoy('black','BMW','2020','montaser');


// console.log(collection);

// console.log(collection[2].model);

for (let i = 0; i<collection.length ; i++) {
    console.log(collection[i].onwer);
    
}

document.getElementById("ad").innerHTML= "<bold> hi </bold>301 level";
document.getElementById("ad").style.background= "red";

var sections = document.getElementsByClassName("sec");

console.log(sections);


for (let index = 0; index < sections.length; index++) {
    sections[index].innerHTML="<h3>change using classes</h3>";

}


var members=[];

function People(firstName,lastName,favColor,gender) {
    this.firstName= firstName;
    this.lastName= lastName;
    this.favColor= favColor;
    this.gender= gender;

}

People.prototype.fullname= function(){

    this.fullname = this.firstName +" " +this.lastName;
}


var form= document.getElementById("form");

form.addEventListener("submit",adding)

function adding(event){
    event.preventDefault();

    var firstname=event.target.first.value;
    var lastname=event.target.last.value;
    var color=event.target.color.value;
    var gender

    console.log(event.target.male.checked);
    if (event.target.male.checked == true){
        gender = "male"
    }else{
        gender = "female"
    }

    var newPerson = new People(firstname,lastname,color,gender);
    newPerson.fullname();

    members.push(newPerson);

    console.log(members);
    meth();
}

var membersdiv=document.getElementById("members");
function meth(){

    
    var membersection= document.createElement('p')
    membersection.innerText=members[members.length-1].fullname;
    membersection.style.color=members[members.length-1].favColor;
    
    membersdiv.appendChild(membersection);
    

}
