$div=document.getElementById("div");
$input=document.getElementById("input");
$button=document.getElementById("button");

var i=0;
function display(){
	$div.innerHTML += $input.value + ++i +"<br>";
	$div.scrollTop = $div.scrollHeight;
	$input.value="";
}

$button.onclick=display;
