
var container = document.querySelector(".container");
var containerimages = document.querySelector(".container-images");
var overlay = document.querySelector(".overlay");
// image gal

var img1 = document.querySelector(".img-1");
var img2 = document.querySelector(".img-2");
var img3 = document.querySelector(".img-3");

// image overlay



var image1 = document.querySelector(".image1");
var image2 = document.querySelector(".image2");
var image3 = document.querySelector(".image3");

// image btn

var btn = document.querySelector(".btn");

image1.addEventListener("click", function () {
    overlay.style.display = "flex";
    img1.style.display = "block";
});

image2.addEventListener("click", function () {
    overlay.style.display = "flex";
    img2.style.display = "block";
});



image3.addEventListener("click", function () {
    overlay.style.display = "flex";
    img3.style.display = "block";
});





btn.addEventListener("click", function () {
    overlay.style.display = "none";
    img1.style.display = "none";
    img2.style.display = "none";
    img3.style.display = "none";
    containerimages.style.display = "flex";
})
