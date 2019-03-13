/*
Elena Ryan
Civil War Letters JS stuff
4/9/2018
*/







/*window.onload=function()
{
 window.alert("Hello Elena!  This is working!");
 
 };*/
 
 function openChoice(evt, tabName)
	{
		var i;
		var tabcontent;
		var tablinks;

		tabcontent= document.getElementsByClassName("tabcontent");
		for (i=0; i < tabcontent.length; i++)
		{
		tabcontent[i].style.display = "none";
		}

		tablinks = document.getElementsByClassName("tablinks");
		for (i=0; i<tablinks.length; i++)
		{
		tablinks[i].className = tablinks[i].className.replace("active", "");
		}

		document.getElementById(tabName).style.display = "block";
		evt.currentTarget.className += "active";
	};
	
function hoverIn (element)
{
 element.style.background = "#8cd98c";
 nm = document.getElementById("txt"+(element.id).substring(3,element.id.length));
 nm.style.background = "#8cd98c";
 /*window.alert("txt"+(element.id).substring(3,element.id.length));*/
};
 function hoverOut(element)
 {
 
  element.style.background = "white";
  nm = document.getElementById("txt"+(element.id).substring(3,element.id.length));
  nm.style.background = "none";
 };