
var i = 0;

function slide(){
    let imagesUrl = ["Img/Header-img.jpg",
    "Img/Hi1.jpg", 
    "Img/Hi2.jpg",
    "Img/Hi3.jpg"];
    let currentImg = document.getElementById("images");
    i > 3 ? i = 0 : i;
    currentImg.src = imagesUrl[i];
    i++;
    setTimeout("slide()", 5000);
}

slide();