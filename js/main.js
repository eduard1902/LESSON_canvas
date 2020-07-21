'use strict';
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const angle = (degrees) => (Math.PI/180) * degrees;

let lineSize = document.getElementById('range'); 
let p = document.getElementById('one'); 
draw();
lineSize.addEventListener("input", () => {
    let mySize = lineSize.value;
    ctx.lineWidth = mySize;
    draw();
    
    });

function fun1() {
p.innerHTML = lineSize.value;
}
fun1();

function draw(){

    ctx.fillStyle ='white';
    ctx.fillRect(0, 0, 450, 280);

    ctx.beginPath();
    ctx.moveTo(150, 150);
    ctx.strokeStyle = 'blue';
    ctx.arc(100, 150, 50, 0, angle(270), false);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(210, 210);
    ctx.strokeStyle = 'yellow';
    ctx.arc(160, 205, 50, 0, angle(90), true);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(390, 150);
    ctx.strokeStyle = 'red';
    ctx.arc(340, 150, 50, 0, angle(1),true);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(330, 210);
    ctx.strokeStyle = 'green';
    ctx.arc(280, 205, 50, 0, angle(110), true);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(270, 150);
    ctx.strokeStyle = 'black';
    ctx.arc(220, 150, 50, 0, angle(360), false);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(390, 150);
    ctx.strokeStyle = 'red';
    ctx.arc(340, 150, 50, 0, angle(165), false);
    ctx.stroke();
    
    
    ctx.beginPath();
    ctx.moveTo(210, 210);
    ctx.strokeStyle = 'yellow';
    ctx.arc(160, 205, 50, 0, angle(300), false);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(150, 150);
    ctx.strokeStyle = 'blue';
    ctx.arc(100, 150, 50, 0, angle(90), true);
    
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(150, 150);
    ctx.strokeStyle = 'blue';
    ctx.arc(100, 150, 50, 0, angle(15), false);
    ctx.stroke();
    
    
    ctx.beginPath();
    ctx.moveTo(330, 210);
    ctx.strokeStyle = 'green';
    ctx.arc(280, 205, 50, 0, angle(250), false);
    ctx.stroke();

};

