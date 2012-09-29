function introKDude () {
	// Overall W and H
	var H = $(document.body).height();
	var w_h = 450 / 512;
	var W = w_h * H;

	// Big Bar, Small Bar, Arm of K
	var barW = 100 / 512 * W;
	var bbW = .7 * barW;
	var sbW = .2 * barW;
	var armW = W - barW;
	var sbOffset = .8 * barW;
	var armBarW = bbW * 1.5;

	// Intro Overlay
	var intro = $("<div id='intro'>").height(H).appendTo(document.body);
	// Big Bar
	var bbar = $("<div id='bbar'>").width(bbW+"px").appendTo(intro);
	// Small Bar
	var sbar = $("<div id='sbar'>").appendTo(intro);
	sbar.width(sbW+"px").css("left", sbOffset+"px");

	// K Arms
	var arm = $("<div id='arm'>").appendTo(intro);
	var armTop = $("<div id='armTop'>").appendTo(arm);
	armTop.width("150%").height(armBarW);
	var armBottom = $("<div id='armBottom'>").appendTo(arm);
	armBottom.width("150%").height(armBarW);

	// Note: Currently unused block...
	function withCanvas() {
		// Big Bar
		var c1 = $("<canvas>").css({
			position: "absolute",
			top: "-100%",
			left: "0px",
			"-webkit-transition-property": "top",
			"-webkit-transition-duration": "1s"
		});
		function drawBigBar (c) {
			c.height = H;
			c.width = bbW;
			var ctx = c.getContext("2d");
			ctx.fillStyle = "black";
			ctx.fillRect(0,0,bbW,H);
		}
		drawBigBar(c1[0]);

		// Small Bar
		var c2 = $("<canvas>").css({
			position: "absolute",
			bottom: "-100%",
			left: sbOffset+"px",
			"-webkit-transition-property": "bottom",
			"-webkit-transition-duration": "1s"
		});
		function drawSmallBar (c) {
			c.height = H;
			c.width = sbW;
			var ctx = c.getContext("2d");
			ctx.fillStyle = "black";
			ctx.fillRect(0,0,sbW,H);
		}
		drawSmallBar(c2[0]);

		var c3 = $("<canvas>").css({
			position: "absolute",
			top: "0px",
			left: "2000px",
			"-webkit-transition-property": "left",
			"-webkit-transition-duration": "1s"
		});
		$(document.body).append(c3);

		function drawArm (c) {
			var h = c.height = H;
			var w = c.width = armW;
			var ctx = c.getContext("2d");
			ctx.fillStyle = "black";

			ctx.moveTo(0, h/2);
			ctx.lineTo(w - armBarW, 0);
			ctx.lineTo(w, 0);
			ctx.lineTo(armBarW, h/2);
			ctx.lineTo(w, h);
			ctx.lineTo(w - armBarW, h);
			ctx.closePath();
			ctx.fill();
		};
		drawArm(c3[0]);
	}


	// Kick off animations to zoom them in
	setTimeout(function () {
		$("#bbar").height("100%");
		$("#sbar").height("100%");
		arm.css("left", barW+"px");

		// Animate Canvas Pieces
		// c1.css("top", "0%");
		// c2.css("bottom", "0%");
		// c3.css("left", barW+"px");

		setTimeout(zoomKDudeToMenu, 1500);
	}, 500);
};

function zoomKDudeToMenu () {
	var kDude = $("#intro");
	kDude.css({
		"-webkit-transition-property": "transform",
		"-webkit-transition-duration": "0.5s",
		"-webkit-transform-origin": "16px 16px",
		"-webkit-transform": "scale(0.1, 0.1)"
	});
};

function drawKDude () {
	var c$ = $("#kDude");
	var c = c$[0];
	var ctx = c.getContext("2d");

	var w = 450;
	var h = 512;
	var x0 = 0;
	var y0 = 0;
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

function scrollAwayChrome () {
	// Get rid of the browser chrome for mobile Safari on page load
	if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/iPad/i)) {
		setTimeout(function() {
			var viewportHeight = $(window).height() + 100;
			$(document.body).height(viewportHeight);
			window.scrollTo(0, 1);
		}, 0);
	}
}

var App = Ember.Application.create();

$(document).ready(function () {
	scrollAwayChrome();
	setTimeout(introKDude, 100);
});