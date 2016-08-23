function createImage() {
    var home = document.getElementById('home');
    var context = home.getContext('2d');
    context.strokeStyle = '#22545F';
    context.lineWidth = 4;
    context.fillStyle = '#90CAD7';

    context.save();
    context.translate(500, 500);
    context.rotate(Math.PI);
    context.scale(1, .9);
    context.arc(0, 0, 130, 0, Math.PI*2);
    context.restore();
    context.fill();
    context.stroke();

    context.lineWidth = 5;
    context.beginPath();
    context.translate(420, 480);
    context.rotate(Math.PI);
    context.scale(1, .7);
    context.arc(0, 0, 20, 0, Math.PI*2);
    context.restore();
    context.closePath();
    context.stroke();
    context.save();

    context.lineWidth = 5;
    context.beginPath();
    context.translate(-100, 0);
    context.rotate(Math.PI);
    context.scale(1, 1);
    context.arc(0, 0, 20, 0, Math.PI*2);
    context.restore();
    context.closePath();
    context.stroke();

    context.lineWidth = 5;
    context.beginPath();
    context.moveTo(-50, 0);
    context.lineTo(-30, -70);
    context.moveTo(-30, -70);
    context.lineTo(-55, - 70);
    context.restore();
    context.closePath();
    context.stroke();

    context.strokeStyle = '#22545F';
    context.fillStyle = '#22545F';
    context.save();
    context.beginPath();
    context.translate(5, 0);
    context.rotate(Math.PI/2);
    context.scale(1.5, .4);
    context.arc(0, 0, 10, 0, Math.PI*2);
    context.restore();
    context.fill();
    context.closePath();
    context.stroke();
    context.save();
    context.beginPath();
    context.translate(-95, 0);
    context.rotate(Math.PI/2);
    context.scale(1.5, .4);
    context.arc(0, 0, 10, 0, Math.PI*2);
    context.restore();
    context.fill();
    context.closePath();
    context.stroke();

    context.lineWidth = 5;
    context.beginPath();
    context.translate(-50, -120);
    context.rotate(Math.PI/1.7);
    context.scale(0.6, 1.4);
    context.arc(0, 0, 33, 0, Math.PI*2);
    context.restore();
    context.closePath();
    context.stroke();

    context.strokeStyle = '#262626';
    context.fillStyle = '#396693';
    context.save();
    context.beginPath();
    context.translate(370, -30);
    context.rotate(Math.PI/4);
    context.scale(1, 0.5);
    context.arc(0, 0, 120, 0, Math.PI*2);
    context.restore();
    context.fill();
    context.closePath();
    context.stroke();

    context.fillRect(0, 0, context.width, context.height);

   
    var homeO = document.getElementById('homeO');
    var context1 = homeO.getContext('2d');
    context1.strokeStyle = '#262626';
    context1.lineWidth = 4;
    context1.fillStyle = '#396693';
    context1.beginPath();
    context1.fillRect(420, 250, 150, 180);
    context1.moveTo(420, 381);
    context1.lineTo(420, 250);
    context1.moveTo(422, 381);
    context1.bezierCurveTo(421, 381, 495, 420, 570, 381);
    context1.moveTo(570, 381);
    context1.lineTo(570, 250);
    context1.closePath();
    context1.stroke();

    context1.save();
    context1.beginPath();
    context1.translate(495, 250);
    context1.rotate(Math.PI);
    context1.scale(1, .2);
    context1.arc(0, 0, 75, 0, Math.PI*2);
    context1.restore();
    context1.fill();
    context1.stroke();
}
createImage();
