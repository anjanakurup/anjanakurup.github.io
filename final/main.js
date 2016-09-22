var btnGreet=document.getElementById("btnGreet");
var btnAcademy=document.getElementById("btnAcademy");
var ccUrl="https://www.codecademy.com/akurup94";

btn.onmousedown = showAcademy;
btn.onmousedown = newTabAcademy;



function greetings (){
    alert("Hello <Anjana Kurup>!");
    document.location=ccUrl;
}
function newTabAcademy (){
    window.open(ccUrl);
}