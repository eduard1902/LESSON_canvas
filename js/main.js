'use strict';

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const angle = (degrees) => (Math.PI/180) * degrees;

ctx.beginPath();
//blue 270
ctx.moveTo(150, 150);
ctx.lineWidth = '8';
ctx.strokeStyle = 'blue';
ctx.arc(100, 150, 50, 0, angle(270), false);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(210, 210);
ctx.lineWidth = '8';
ctx.strokeStyle = 'yellow';
ctx.arc(160, 205, 50, 0, angle(90), true);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(390, 150);
ctx.lineWidth = '8';
ctx.strokeStyle = 'red';
ctx.arc(340, 150, 50, 0, angle(160),true);
ctx.stroke();


ctx.beginPath();
ctx.moveTo(330, 210);
ctx.lineWidth = '8';
ctx.strokeStyle = 'green';
ctx.arc(280, 205, 50, 0, angle(110), true);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(270, 150);
ctx.lineWidth = '8';
ctx.strokeStyle = 'black';
ctx.arc(220, 150, 50, 0, angle(360), false);
ctx.stroke();



ctx.beginPath();
ctx.moveTo(390, 150);
ctx.lineWidth = '8';
ctx.strokeStyle = 'red';
ctx.arc(340, 150, 50, 0, angle(165), false);
ctx.stroke();


ctx.beginPath();
ctx.moveTo(210, 210);
ctx.lineWidth = '8';
ctx.strokeStyle = 'yellow';
ctx.arc(160, 205, 50, 0, angle(300), false);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(150, 150);
ctx.lineWidth = '8';
ctx.strokeStyle = 'blue';
ctx.arc(100, 150, 50, 0, angle(90), true);

ctx.stroke();
ctx.beginPath();
ctx.moveTo(150, 150);
ctx.lineWidth = '8';
ctx.strokeStyle = 'blue';
ctx.arc(100, 150, 50, 0, angle(15), false);
ctx.stroke();


ctx.beginPath();
ctx.moveTo(330, 210);
ctx.lineWidth = '8';
ctx.strokeStyle = 'green';
ctx.arc(280, 205, 50, 0, angle(250), false);
ctx.stroke();

