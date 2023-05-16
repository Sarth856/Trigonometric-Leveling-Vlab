function homestep2() {

    document.getElementById("home-Step1").style.visibility = "hidden";
    document.getElementById("next").style.visibility = "hidden";
    document.getElementById("home-step2").style.visibility = "visible";

}

function step1() {

    document.getElementById("home").style.visibility = "hidden";
    document.getElementById("next").style.visibility = "hidden";
    document.getElementById("step1").style.visibility = "visible";

}

function placetheodolite() {
    document.getElementById("step1-png1").style.visibility = "hidden";
    document.getElementById("arr1").style.visibility = "hidden";
    document.getElementById("trans1").style.visibility = "hidden";
    document.getElementById("step1-png2").style.visibility = "visible";
    document.getElementById("next1").style.visibility = "visible";


    myTimeout = setTimeout(myGreeting, 2500);

}



// step2

function step2() {
    document.getElementById("step2").style.visibility = "visible";
    document.getElementById("step1").style.visibility = "hidden";
    document.getElementById("next1").style.visibility = "hidden";
    document.getElementById("arr1").style.visibility = "hidden";
    document.getElementById("trans1").style.visibility = "hidden";
    document.getElementById("step1-png2").style.visibility = "hidden";
    document.getElementById("step2-png1").style.visibility = "visible";
}

function level() {

    document.getElementById("bubblet").style.visibility = "visible";
    document.getElementById("step2-png1").style.visibility = "hidden";
    document.getElementById("level-button").style.visibility = "hidden";
    document.getElementById("step1-png2").style.visibility = "hidden";
    document.getElementById("bubb").style.visibility = "visible";
    document.getElementById("console").style.visibility = "visible";
    document.getElementById("next2").style.visibility = "visible";



}
function move_img(str) {
    var step=5; // change this to different step value
    switch(str){
    case "down":
    var x=document.getElementById('bubb').offsetTop;
    x= x + step;
    document.getElementById('bubb').style.top= x + "px";
    break;

    case "up":
    var x=document.getElementById('bubb').offsetTop;
    x= x - step;
    document.getElementById('bubb').style.top= x + "px";
    break;

    case "left":
    var y=document.getElementById('bubb').offsetLeft;
    y= y - step;
    document.getElementById('bubb').style.left= y + "px";
    break;

    case "right":
    var y=document.getElementById('bubb').offsetLeft;
    y= y + step;
    document.getElementById('bubb').style.left= y + "px";
    break;
    }
}

function myGreeting4() {
    document.getElementById("next2").style.visibility = "visible";
    myStopFunction4();
}
function myStopFunction4() {
    clearTimeout(myTimeout4);
}

// Step3

function step3() {
    document.getElementById("step3").style.visibility = "visible";
    document.getElementById("console").style.visibility = "hidden";
    document.getElementById("bubb").style.visibility = "hidden";
    document.getElementById("bubblet").style.visibility = "hidden";
    document.getElementById("next2").style.visibility = "hidden";
    document.getElementById("step2").style.visibility = "hidden";

}



function moveplate4() {
    document.getElementById("console1").style.visibility = "visible";
    document.getElementById("meas").style.visibility = "visible";
    document.getElementById("scope").style.visibility = "visible";
    document.getElementById("png4").style.visibility = "hidden";
    document.getElementById("measure").style.visibility = "hidden";
    document.getElementById("measurement").style.visibility = "visible";





    myTimeout5 = setTimeout(myGreeting5, 7500);
}
function move_img1(str) {
    var step=5; // change this to different step value
    switch(str){
    case "down":
    var x=document.getElementById('scope').offsetTop;
    x= x + step;
    document.getElementById('scope').style.top= x + "px";
    break;

    case "up":
    var x=document.getElementById('scope').offsetTop;
    x= x - step;
    document.getElementById('scope').style.top= x + "px";
    break;

    case "left":
    var y=document.getElementById('scope').offsetLeft;
    y= y - step;
    document.getElementById('scope').style.left= y + "px";
    break;

    case "right":
    var y=document.getElementById('scope').offsetLeft;
    y= y + step;
    document.getElementById('scope').style.left= y + "px";
    break;
    }
}

function click_to_measure(){
    document.getElementById("console1").style.visibility = "hidden";
    document.getElementById("reading").style.visibility = "visible";
    document.getElementById("next3").style.visibility = "visible";


}


function myGreeting5() {
    document.getElementById("next3").style.visibility = "visible";
    myStopFunction5();
}


function myStopFunction5() {

    clearTimeout(myTimeout5);

}


// Step5

function step4() {

    document.getElementById("Step4").style.visibility = "visible";
    document.getElementById("step3").style.visibility = "hidden";
    document.getElementById("next3").style.visibility = "hidden";
    document.getElementById("console1").style.visibility = "hidden";
    document.getElementById("meas").style.visibility = "hidden";
    document.getElementById("scope").style.visibility = "hidden";
    document.getElementById("reading").style.visibility = "hidden";
    document.getElementById("measurement").style.visibility = "hidden";
}

function readingsfill(){
    document.getElementById("f_table").style.visibility = "visible";
    document.getElementById("formulas").style.visibility = "visible";
    document.getElementById("given").style.visibility = "visible";
    document.getElementById("check").style.visibility = "visible";

    document.getElementById("E_table").style.visibility = "hidden";
    document.getElementById("fill").style.visibility = "hidden";
}

function calc(){
    document.getElementById("r_table").style.visibility = "visible";
    document.getElementById("f_table").style.visibility = "hidden";
}

function moveplate5() {
    debugger;
    document.getElementById("gif6").style.visibility = "visible";
    document.getElementById("png5").style.visibility = "hidden";
    document.getElementById("arr6").style.visibility = "hidden";
    document.getElementById("trans6").style.visibility = "hidden";

    myTimeout6 = setTimeout(myGreeting6, 1500);
}