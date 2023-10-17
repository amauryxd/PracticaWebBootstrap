let $btnima = document.querySelector("#btnima");
let $btnlow = document.querySelector("#btnlow");
let $btnkura = document.querySelector("#btnkura");

$btnima.addEventListener("click",(e)=>{
    let $bgimg = document.querySelector("#headerimg");
    let $bgcolor = document.querySelector("#fondo");
    let $divdro = document.querySelector("#divdro");
    let $butin = document.querySelector("#butin");
    let $dropin = document.querySelector("#dropin");
    $bgimg.classList.add("bgimg3");
    $bgimg.classList.remove("bgimg");
    $bgimg.classList.remove("bgimg2");
    $bgcolor.href = "./css/bgcolors3.css";
    $divdro.classList.add("divdrop3");
    $divdro.classList.remove("divdrop2");
    $divdro.classList.remove("divdrop");
    $butin.classList.add("butInd3");
    $butin.classList.remove("butInd2");
    $butin.classList.remove("butInd");
    $dropin.classList.add("dropIn3");
    $dropin.classList.remove("dropIn2");
    $dropin.classList.remove("dropIn");
});

$btnlow.addEventListener("click",(e)=>{
    let $bgimg = document.querySelector("#headerimg");
    let $bgcolor = document.querySelector("#fondo");
    let $divdro = document.querySelector("#divdro");
    let $butin = document.querySelector("#butin");
    let $dropin = document.querySelector("#dropin");
    $bgimg.classList.add("bgimg2");
    $bgimg.classList.remove("bgimg");
    $bgimg.classList.remove("bgimg3");
    $bgcolor.href = "./css/bgcolors2.css";
    $divdro.classList.add("divdrop2");
    $divdro.classList.remove("divdrop");
    $divdro.classList.remove("divdrop3");
    $butin.classList.add("butInd2");
    $butin.classList.remove("butInd");
    $butin.classList.remove("butInd3");
    $dropin.classList.add("dropIn2");
    $dropin.classList.remove("dropIn");
    $dropin.classList.remove("dropIn3");
});

$btnkura.addEventListener("click",(e)=>{
    let $bgimg = document.querySelector("#headerimg");
    let $bgcolor = document.querySelector("#fondo");
    let $divdro = document.querySelector("#divdro");
    let $butin = document.querySelector("#butin");
    let $dropin = document.querySelector("#dropin");
    $bgimg.classList.add("bgimg");
    $bgimg.classList.remove("bgimg3");
    $bgimg.classList.remove("bgimg2");
    $bgcolor.href = "./css/bgcolors.css";
    $divdro.classList.add("divdrop");
    $divdro.classList.remove("divdrop2");
    $divdro.classList.remove("divdrop3");
    $butin.classList.add("butInd");
    $butin.classList.remove("butInd2");
    $butin.classList.remove("butInd3");
    $dropin.classList.add("dropIn");
    $dropin.classList.remove("dropIn2");
    $dropin.classList.remove("dropIn3");
});

async function imgAsyncronos(){
    let respuesta = await fetch("./imgs.json");
    let images = await respuesta.json();

    let $tuyutuyu = document.querySelector("#tuyutuyu");
    let $pusutuyu = document.querySelector("#pusutuyu");
    let $tuyusl = document.querySelector("#tuyusl");
    let $imaimg = document.querySelector("#imaimg");
    let $idol = document.querySelector("#idol");

    $tuyutuyu.src=images.tuyu;
    $pusutuyu.src=images.pusu;
    $tuyusl.src=images.tuyus;
    $imaimg.src=images.tuyuima;
    $idol.src=images.tuyui;
}

imgAsyncronos();