function step2() {

    document.getElementById("Step1").style.visibility = "hidden";
    document.getElementById("next").style.visibility = "hidden";
    document.getElementById("Step2").style.visibility = "visible";

}

function moveplate() {
    document.getElementById("png1").style.visibility = "hidden";
    document.getElementById("arr1").style.visibility = "hidden";
    document.getElementById("trans1").style.visibility = "hidden";
    document.getElementById("png2").style.visibility = "visible";
    document.getElementById("next1").style.visibility = "visible";


    myTimeout = setTimeout(myGreeting, 2500);

}



// step2

function step3() {
    document.getElementById("Step3").style.visibility = "visible";
    document.getElementById("Step2").style.visibility = "hidden";
    document.getElementById("next1").style.visibility = "hidden";
    document.getElementById("gif3").style.visibility = "hidden";
    document.getElementById("arr1").style.visibility = "hidden";
    document.getElementById("trans1").style.visibility = "hidden";
    document.getElementById("png2").style.visibility = "hidden";
    document.getElementById("png3").style.visibility = "visible";
}

function assemble() {

    document.getElementById("gif4").style.visibility = "visible";
    document.getElementById("png3").style.visibility = "hidden";
    document.getElementById("assemble").style.visibility = "hidden";
    document.getElementById("png2").style.visibility = "hidden";
    document.getElementById("bubb").style.visibility = "visible";
    document.getElementById("console").style.visibility = "visible";


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

function step4() {
    document.getElementById("Step4").style.visibility = "visible";
    document.getElementById("Step3").style.visibility = "hidden";
    document.getElementById("gif4").style.visibility = "hidden";
    document.getElementById("png3").style.visibility = "hidden";
    document.getElementById("assemble").style.visibility = "hidden";
    document.getElementById("png2").style.visibility = "hidden";
    document.getElementById("bubb").style.visibility = "hidden";
    document.getElementById("console").style.visibility = "hidden";
    document.getElementById("next2").style.visibility = "hidden";



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

function step5() {
    document.getElementById("step5").style.visibility = "visible";
    document.getElementById("rev-arr1").style.visibility = "visible";
    document.getElementById("rev-trans1").style.visibility = "visible";
    document.getElementById("meas").style.visibility = "hidden";
    document.getElementById("scope").style.visibility = "hidden";
    document.getElementById("measurement").style.visibility = "hidden";

    document.getElementById("Step4").style.visibility = "hidden";
    document.getElementById("reading").style.visibility = "hidden";




}

function revmoveplate(){
    document.getElementById("rev-s1p2").style.visibility = "visible";
    document.getElementById("rev-next1").style.visibility = "visible";
    document.getElementById("rev-arr1").style.visibility = "hidden";
    document.getElementById("rev-trans1").style.visibility = "hidden";
   
}
function step6(){
    document.getElementById("step6").style.visibility = "visible";
    document.getElementById("s6assemble").style.visibility = "visible";
    document.getElementById("step5").style.visibility = "hidden";
    document.getElementById("rev-s1p2").style.visibility = "hidden";
    document.getElementById("rev-next1").style.visibility = "hidden";

}

function step6assemble(){
    document.getElementById("s6bubb").style.visibility = "visible";
    document.getElementById("s6gif4").style.visibility = "visible";
    document.getElementById("s6console").style.visibility = "visible";
    document.getElementById("s6p1").style.visibility = "hidden";
    document.getElementById("s6assemble").style.visibility = "hidden";


}
function move_img2(str) {
    var step=5; // change this to different step value
    switch(str){
    case "down":
    var x=document.getElementById('s6bubb').offsetTop;
    x= x + step;
    document.getElementById('s6bubb').style.top= x + "px";
    break;

    case "up":
    var x=document.getElementById('s6bubb').offsetTop;
    x= x - step;
    document.getElementById('s6bubb').style.top= x + "px";
    break;

    case "left":
    var y=document.getElementById('s6bubb').offsetLeft;
    y= y - step;
    document.getElementById('s6bubb').style.left= y + "px";
    break;

    case "right":
    var y=document.getElementById('s6bubb').offsetLeft;
    y= y + step;
    document.getElementById('s6bubb').style.left= y + "px";
    break;
    }
}

function step7(){
    document.getElementById("step7").style.visibility = "visible";
    document.getElementById("s7measure").style.visibility = "visible";
    document.getElementById("step6").style.visibility = "hidden";
    document.getElementById("s6bubb").style.visibility = "hidden";
    document.getElementById("s6gif4").style.visibility = "hidden";
    document.getElementById("s6console").style.visibility = "hidden";

}

function s7moveplate4(){
    document.getElementById("s7meas").style.visibility = "visible";
    document.getElementById("s7scope").style.visibility = "visible";
    document.getElementById("s7measurement").style.visibility = "visible";
    document.getElementById("s7console1").style.visibility = "visible";
    document.getElementById("s7p1").style.visibility = "hidden";
    document.getElementById("s7measure").style.visibility = "hidden";

}
function move_img3(str) {
    var step=5; // change this to different step value
    switch(str){
    case "down":
    var x=document.getElementById('s7scope').offsetTop;
    x= x + step;
    document.getElementById('s7scope').style.top= x + "px";
    break;

    case "up":
    var x=document.getElementById('s7scope').offsetTop;
    x= x - step;
    document.getElementById('s7scope').style.top= x + "px";
    break;

    case "left":
    var y=document.getElementById('s7scope').offsetLeft;
    y= y - step;
    document.getElementById('s7scope').style.left= y + "px";
    break;

    case "right":
    var y=document.getElementById('s7scope').offsetLeft;
    y= y + step;
    document.getElementById('s7scope').style.left= y + "px";
    break;
    }
}
function s7click_to_measure(){
    document.getElementById("s7console1").style.visibility = "hidden";
    document.getElementById("s7reading").style.visibility = "visible";
    document.getElementById("next8").style.visibility = "visible";
}

function step8(){
    document.getElementById("step7").style.visibility = "hidden";
    document.getElementById("s7reading").style.visibility = "hidden";
    document.getElementById("s7meas").style.visibility = "hidden";
    document.getElementById("s7scope").style.visibility = "hidden";
    document.getElementById("s7measurement").style.visibility = "hidden";
    document.getElementById("next8").style.visibility = "hidden";
    document.getElementById("next3").style.visibility = "hidden";
    document.getElementById("result").style.visibility = "visible";




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
    document.getElementById("given").style.visibility = "hidden";
    document.getElementById("formulas").style.visibility = "hidden";
    document.getElementById("calcresult").style.visibility = "visible";

    
}