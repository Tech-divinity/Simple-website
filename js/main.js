
var myBtn = document.getElementById("upBtn");

// when user scrolls down 20px show that button
window.onscroll = function() {
    scrollFunction();
}

function scrollFunction() {
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 ) {
        myBtn.style.display = "block";
    } else {
        myBtn.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0; //for safari
    document.documentElement.scrollTop = 0; //for chrome, firefox, ie and opera
}

