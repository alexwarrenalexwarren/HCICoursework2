window.onscroll = function () { stickyHeader() };

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function stickyHeader() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

function dropDown() {
    var x = document.getElementById("myHeader");
    if (x.className === "header") {
        x.className += " responsive";
    } else {
        x.className = "header";
    }
}


