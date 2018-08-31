var list1 = document.getElementById("listopen1");
var list2 = document.getElementById("listopen2");
var list3 = document.getElementById("listopen3");


function listToggle1(){
	
	if( list1.style.display =="none"){
		list1.style.display="block";
		list2.style.display="none";
		list3.style.display="none";
		$('i').removeClass('fa-angle-right').addClass('fa-angle-down');
	}
	else{
		list1.style.display="none";
		list2.style.display="none";
		list3.style.display="none";
		$('i').removeClass('fa-angle-down').addClass('fa-angle-right');
	}
}

function listToggle2(){
	
	if( list2.style.display =="none"){
		list2.style.display="block";
		list1.style.display="none";
		list3.style.display="none";
	}
	else{
		list1.style.display="none";
		list2.style.display="none";
		list3.style.display="none";
	}
}
	function listToggle3(){
	
	if( list3.style.display =="none"){
		list3.style.display="block";
		list1.style.display="none";
		list2.style.display="none";
	}
	else{
		list1.style.display="none";
		list2.style.display="none";
		list3.style.display="none";
	}
};


var selectDay="";

var day =document.getElementById('days');
	
for(var d =1; d< 31 ; d+=1)
{
		
	selectDay+= "<option>"+d+"</option>";
	
	
}
    
	day.innerHTML= selectDay;
	
	
var choose= document.getElementById('days').value;

function yourChoose(){
	
	
	alert("welcom your age is : " + choose);
	username();
	
}

var uname=document.getElementById('uname');

	uname.onfocus = function userName()
	{
		this.setAttribute('placeholder','');
}
	
	
function username()
{
	alert("welcome : " + uname.value);
}

var num1=document.getElementById('num1');
var num2=document.getElementById('num2');
function chooseLarg()
{
	if(num1.value < num2.value){
		alert(num2.value);
	}
	
	else if(num1.value > num2.value){
		alert(num1.value);
	}
}
