var mouseEvent="Empty";

var last_x_cordinate, last_y_cordinate;

canvas=document.getElementById('myCanvas');

ctx=canvas.getContext("2d");

color="black";

width_of_line=1;

canvas.addEventListener("mouseDown", my_mouseDown);

function my_mouseDown(e){

color=document.getElementById("input1").value;

width_of_line=document.getElementById("input2").value;

mouseEvent="mouseDown";

}

canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e){

current_x_cordinate = e.clientX-canvas.offsetLeft;

current_y_cordinate = e.clientY-canvas.offsetTop;

if(mouseEvent=="mouseDown"){
    ctx.beginPath();

    ctx.strokeStyle=color;

    ctx.lineWidth=width_of_line;

    console.log("last position of x and y cordinate=");

    console.log("x = " + last_x_cordinate + "y = " + last_y_cordinate);

    ctx.moveTo(last_x_cordinate, last_y_cordinate);

    console.log("current position of x and y cordinate=");

    console.log("x = " + current_x_cordinate + "y = " + current_y_cordinate);

    ctx.lineTo(current_x_cordinate, current_y_cordinate);

    ctx.stroke();

 
}

last_x_cordinate=current_x_cordinate;
last_y_cordinate=current_y_cordinate;

}

canvas.addEventListener("mouseUp", my_mouseUp);

function my_mouseUp(e){
    mouseEvent="mouseUp"
}

canvas.addEventListener("mouseLeave", my_mouseLeave);

function my_mouseLeave(e){
    mouseEvent="mouseLeave"
}

function ClearArea(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}