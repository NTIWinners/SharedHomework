window.app = function (ctx) {
    // небо
    drawSky(ctx);

    // земля
    ctx.fillStyle = "#88ff66";
    ctx.fillRect(0, 300, 400, 100);

    // солнце
    ctx.fillStyle = "#ffee44";
    ctx.beginPath();
    ctx.arc(80, 64, 50, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();

    // снеговик
    ctx.fillStyle = "#ffffff";
    ctx.beginPath();
    ctx.arc(200, 300, 75, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    ctx.beginPath();
    ctx.arc(200, 200, 50, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    ctx.beginPath();
    ctx.arc(200, 120, 37, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
}

function drawSky(ctx){
    ctx.fillStyle = "#7799ff";
    ctx.fillRect(0, 0, 400, 400);
}