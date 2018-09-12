var x = document.getElementById("show-more");
var y = document.getElementById("show");

x.onclick = function(){
    y.classList.toggle("show");
}
var a = document.getElementById("button-show");
var b = document.getElementById("section-show");

a.onclick = function(){
    b.classList.toggle("show");
    if (a.innerHTML == "Show More") {
        a.innerHTML = "Show Less";
    } else {a.innerHTML = "Show More";
}
}
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}