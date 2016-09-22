//alert("Testing");
var btn=document.getElementById("btn");
var btn2=document.getElementById("btn2");
var ccUrl="https://www.codecademy.com/akurup94";


btn.onmousedown = showAcademy;
btn.onmousedown = newTabAcademy;


function myCodecademy(){
    //alert("going to: "+ ccUrl);
    document.location=ccUrl;
}
function greetings(){
    window.open(ccUrl);
}
