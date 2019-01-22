var i = 0;

function slider(){
    let imagesUrl = ["Img/Header-img.jpg",
    "Img/Hi1.jpg", 
    "Img/Hi2.jpg",
    "Img/Hi3.jpg"];
    let currentImg = document.getElementsByClassName("image-slider");
    i > 3 ? i = 0 : i;
    currentImg[0].src = imagesUrl[i];
    i++;
    setTimeout("slider()", 5000);
}

slider();