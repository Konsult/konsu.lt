function introKDude () {
	drawKDude();
	setTimeout(function () {
		$("#kDude").css("left", "32%");
	}, 100);
}

function drawKDude () {
	var c$ = $("#kDude");
	var c = c$[0];
	var ctx = c.getContext("2d");

	var w = 450;
	var h = 512;
	var x0 = 16;
	var y0 = 16;
	var dx = 100;

	ctx.beginPath();
	var x1 = x0 + dx * 0.7;
	var y1 = h - y0;

	// Draw Large Left Beam
	ctx.moveTo(x0, y0);
	ctx.lineTo(x1, y0);
	ctx.lineTo(x1, y1);
	ctx.lineTo(x0, y1);
	ctx.closePath();

	// Draw Thin Left Beam
	var x2 = x0 + dx * 0.8;
	var x3 = x0 + dx;
	ctx.moveTo(x2, y0);
	ctx.lineTo(x3, y0);
	ctx.lineTo(x3, y1);
	ctx.lineTo(x2, y1);
	ctx.closePath();

	// Draw Outward Arms
	var y2 = (y1 + y0) / 2;
	var x4 = w - x0;
	var x5 = x4 - dx * 0.8;
	var x6 = x3 + dx * 0.8;
	ctx.moveTo(x5, y0);
	ctx.lineTo(x4, y0);
	ctx.lineTo(x6, y2);
	ctx.lineTo(x4, y1);
	ctx.lineTo(x5, y1);
	ctx.lineTo(x3, y2);
	ctx.closePath();

	ctx.fillStyle = "black";
	ctx.fill();
};

var App = Ember.Application.create();

$(document).ready(function () {
	setTimeout(introKDude, 1000);
});