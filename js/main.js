var otherLinks = document.querySelector(".fuck");

otherLinks.onclick = function() {
    var megaMenu = document.querySelector(".mega-menu");
    if (megaMenu.style.display === "none"){
        megaMenu.style.display= "flex";
    }else {
        megaMenu.style.display = "none";
    }
};

var gear = document.querySelector(".gear");
var sideBar = document.querySelector(".set");

gear.onclick = function() {
    if (sideBar.style.left === "-200px") {
        sideBar.style.left = "0px"; // Slide in the sidebar
    } else {
        sideBar.style.left = "-200px"; // Slide out the sidebar
    }
};

var colors = document.querySelectorAll(".colors div");
colors.forEach(div => {
    div.addEventListener("click", (e) => {
        document.documentElement.style.setProperty("--main-color" , e.target.dataset.color)

    })

});

