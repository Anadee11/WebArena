var btn= document.getElementById("generate");
var res=
document.getElementById("answer")

btn.addEventListener("click",function() {
var min=document.getElementById("low").value;
var max=document.getElementById("up").value;

min=parseInt(min);
max=parseInt(max);
ans=Math.floor(Math.random() * (max - min) ) + min;
res.innerHTML = ans;
});