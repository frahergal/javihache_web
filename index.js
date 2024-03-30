let host = window.location.origin;

// Load common header
var xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", host + "/common/header.html", false);
xmlhttp.send();
document.getElementById("header").innerHTML = xmlhttp.responseText;

// Load common footer
var xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", host + "/common/footer.html", false);
xmlhttp.send();
document.getElementById("footer").innerHTML = xmlhttp.responseText;
