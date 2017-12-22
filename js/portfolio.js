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
var skill = new Array(7);
var curSkill = 0;
skill[0] = "JQuery";
skill[1] = "C#/ASP.NET Web Forms";
skill[2] = "PHP";
skill[3] = "Python";
skill[4] = "Flask";
skill[5] = "Knockout.js";
skill[6] = "Javascript";
skill[7] = "HTML/CSS"
function displaySkills(){
    if (curSkill == 7){
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