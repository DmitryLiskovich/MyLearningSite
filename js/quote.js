var itterator = 0;


document.getElementById("scrolling").addEventListener("click", scroll, false);

function scroll(){
    window.scrollBy(0, +100);
    window.pageYOffset < 1700 ? requestAnimationFrame(scroll) : window.pageYOffset;
}

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

document.getElementById("sign-in").addEventListener("click", signIn, false);

function signIn(){

    users = ["dimalis", "admin", "user"];
    let currentUser = document.getElementById("login-value").value;
    let userIsReal = false;
    for (user of users)
    {
        user == currentUser ? userIsReal = true : userIsReal;
    }

    if (userIsReal == true && document.getElementById("password").value == "164200"){
        document.getElementById("login").className = "login invisible";
        document.getElementById("login-back").className = "back-login invisable";
    }
    else{
        alert("User not found");
    }

}

document.getElementById("login-page").addEventListener("click", signInPage, false);

function signInPage (){
    document.getElementById("login").className = "login";
    document.getElementById("login-back").className = "back-login visable";
}
