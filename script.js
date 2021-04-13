$(document).ready(function () {
    //Preloader
    preloaderFadeOutTime = 5;
    function hidePreloader() {
        var preloader = $('.loader');
        preloader.fadeOut(preloaderFadeOutTime);
    }
    hidePreloader();
});

var icon = document.getElementById("icon");
const currentTheme = localStorage.getItem("theme");

if (currentTheme == "dark") {
    document.body.classList.toggle("dark-mode");
    icon.src = "images/sun.png";
}

icon.onclick = function () {
    setTimeout(change, 20);
    preloaderFadeOutTime = 5000;
    function showPreloader() {
        var preloader = $('.loader');
        preloader.fadeIn(1);
    }
    function hidePreloader() {
        var preloader = $('.loader');
        preloader.fadeOut(preloaderFadeOutTime);
    }
    showPreloader();
    hidePreloader();
}

function change() {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
        $('.loader').css("background-color", "#191919");
        $("span").css("color", "#eee");
        icon.src = "images/sun.png";
        localStorage.setItem("theme", "dark");
    }
    else {
        $('.loader').css("background-color", "#fff");
        $("span").css("color", "#191919");
        icon.src = "images/moon.png";
        localStorage.setItem("theme", "light");
    }
}

function find() {
    var text = document.getElementById("query").value;
    if (text != "") {
        var query = "https://www.google.com/search?q=";
        query = query + text;
        setTimeout(function () { window.location = query; }, 0);
    }
    else {
        alert("Enter the text to search!");
    }
}