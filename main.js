var menu = document.getElementById("menu");
var popup = document.getElementById("popup");
//==============================
menu.onclick = showPopup;
popup.onclick = hidePopup;

//==============================
function showPopup(){
    popup.style.visibility = "visible";
    popup.style.opacity = "1";
}

function hidePopup(){
      popup.style.visibility = "hidden";
      popup.style.opacity = "0";
}