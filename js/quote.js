var itterator = 0;

document.getElementById("pointFirst").addEventListener("click", firstPoint, false);

function firstPoint(){
    let qoute = `“Suspendisse tempor turpis odio, sit amet cursus leo consequat non. Maecenas lacinia faucibus enimqui
    interdum dolor pulvinar vitae.”`
    let qouteAuthor ="John Doe"
    let currentQoutePoint = document.getElementById("pointFirst");
    currentQoutePoint.className.baseVal = "slider-point first active";

    document.getElementById("qoute").innerHTML = qoute;

    document.getElementById("qouteAuthor").innerHTML = qouteAuthor;

    document.getElementById("pointSecond").className.baseVal = "slider-point second notActive"
    document.getElementById("pointThird").className.baseVal = "slider-point third notActive"
    itterator++;
}

document.getElementById("pointSecond").addEventListener("click", secondPoint, false);

function secondPoint(){
    let qoute = `“We do not remember days, we remember moments.”`
    let qouteAuthor ="Jonny Doe"
    let currentQoutePoint = document.getElementById("pointSecond");
    currentQoutePoint.className.baseVal = "slider-point second active";

    document.getElementById("qoute").innerHTML = qoute;

    document.getElementById("qouteAuthor").innerHTML = qouteAuthor;

    document.getElementById("pointFirst").className.baseVal = "slider-point first notActive"
    document.getElementById("pointThird").className.baseVal = "slider-point third notActive"
    itterator++;
}

document.getElementById("pointThird").addEventListener("click", thirdPoint, false);

function thirdPoint(){
    let qoute = `“Everyone has one's own path.”`
    let qouteAuthor ="Johnat Doe"
    let currentQoutePoint = document.getElementById("pointThird");
    currentQoutePoint.className.baseVal = "slider-point third active";

    document.getElementById("qoute").innerHTML = qoute;

    document.getElementById("qouteAuthor").innerHTML = qouteAuthor;

    document.getElementById("pointFirst").className.baseVal = "slider-point first notActive"
    document.getElementById("pointSecond").className.baseVal = "slider-point second notActive"
    itterator++;
}


