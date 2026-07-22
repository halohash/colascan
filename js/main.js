$(function(){
	var $main = $("#main"),
		$window = $( window ),
	    mainHeight = $main.outerHeight(),
	    mainWidth = $main.outerWidth(),
	    mainAspect = apperanceSettings.aspectRatio,
	    resizeTimer;

//calls rescale when window resizes
	$(window).resize( function(e) {
		clearTimeout(resizeTimer);
		resizeTimer = setTimeout(scaleWindow, 100);
	});

	function scaleWindow() {
		var scale, windowAspect;

		windowAspect = $window.width() / $window.height();
		if (windowAspect>=mainAspect) {
			scale = $window.height() / mainHeight;
		} else {
			scale = $window.width() / mainWidth;
		}

		$main.css({
			transform: "translate(-50%, -50%) " + "scale(" + scale + ")"
		});
		$("#startup").css({
			transform: "translate(-50%, -50%) " + "scale(" + scale + ")"
		});
	}
	scaleWindow(); // init

});

async function loadMarqueeText() {
    try {
        const response = await fetch("https://thedust.pages.dev/anytext.txt", {
            cache: "no-store"
        });

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }

        const text = await response.text();

        if (
            typeof apperanceSettings === "object" &&
            Array.isArray(apperanceSettings.marqueeAd)
        ) {
            apperanceSettings.marqueeAd[0] = text.trim();
        }
    } catch (err) {
        console.error("Failed to load marquee text:", err);
    }
}

window.addEventListener("load", loadMarqueeText);

setInterval(loadMarqueeText,10000);
