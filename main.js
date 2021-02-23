canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
canvas.addEventListener("mousedown", mymousedown);
canvas.addEventListener("mouseup", mymouseup);
canvas.addEventListener("mousemove", mymousemove);
canvas.addEventListener("mouseleave", mymouseleave);
var mouseevent = "";
var startx = 0;
var starty = 0;
function mymousedown(e) {
  mouseevent = "mousedown";
}
function mymouseup(e) {
  mouseevent = "mouseup";
}
function mymouseleave(e) {
  mouseevent = "mouseleave";
}
function mymousemove(e) {
  console.log(e);
  endx = e.clientX - canvas.offsetLeft;
  endy = e.clientY - canvas.offsetTop;

  if (mouseevent == "mousedown") {
    ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.linewidth = 1;
    ctx.moveTo(startx,starty)
    ctx.lineTo(endx,endy)
    ctx.stroke();
  }
  startx=endx;
starty=endy;
}
