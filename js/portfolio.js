$(function(){
AOS.init();
});

$(window).on('load', function () {
    AOS.refresh();
});

$("#aboutMe").ready(function(){
var skillSpot = document.getElementById("skills");
if ( skillSpot != null)
{
var skill = new Array(5);
var curSkill = 0;
skill[0] = "JQuery";
skill[1] = "Java";
skill[2] = "Python";
skill[3] = "C#/ASP.NET Web Forms";
skill[4] = "Javascript";
skill[5] = "HTML/CSS";

function displaySkills(){
    if (curSkill == 5){
        curSkill = 0;
		skillSpot.innerHTML = skill[curSkill]; 
	}
    else
    {
        curSkill++;
         skillSpot.innerHTML = skill[curSkill];         
    }
   }     
 setInterval(displaySkills, 2000);
 }
});