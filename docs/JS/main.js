let $btnima = document.querySelector("#btnima");
let $btnlow = document.querySelector("#btnlow");
let $btnkura = document.querySelector("#btnkura");

$btnima.addEventListener("click",(e)=>{
    let $bgimg = document.querySelector("#headerimg");
    let $bgcolor = document.querySelector("#fondo");
    $bgimg.classList.add("bgimg3");
    $bgimg.classList.remove("bgimg");
    $bgimg.classList.remove("bgimg2");
    $bgcolor.href = "./css/bgcolors3.css";
});

$btnlow.addEventListener("click",(e)=>{
    let $bgimg = document.querySelector("#headerimg");
    let $bgcolor = document.querySelector("#fondo");
    $bgimg.classList.add("bgimg2");
    $bgimg.classList.remove("bgim");
    $bgimg.classList.remove("bgimg3");
    $bgcolor.href = "./css/bgcolors2.css";
});

$btnkura.addEventListener("click",(e)=>{
    let $bgimg = document.querySelector("#headerimg");
    let $bgcolor = document.querySelector("#fondo");
    $bgimg.classList.add("bgimg");
    $bgimg.classList.remove("bgimg3");
    $bgimg.classList.remove("bgimg2");
    $bgcolor.href = "./css/bgcolors.css";
});