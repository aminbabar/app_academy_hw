document.addEventListener("DOMContentLoaded", function(){
    const canvas = document.getElementById("mycanvas");
    canvas.height = 500;
    canvas.width = 500;

    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "red";
    ctx.fillRect(0, 0, 500, 500);

    ctx.arc(100, 100, 20, 0, Math.PI, true);
    ctx.strokeStyle = "green";
    ctx.lineWidth = 1;
    ctx.stroke();

    

    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.beginPath();

    ctx.arc(200,200, 50, 0, 2*Math.PI, true);
    ctx.strokeStyle = "green";
    ctx.lineWidth = 1;
    ctx.stroke();

    ctx.fillStyle = "orange";
    ctx.fill();
    ctx.beginPath();
    
});
