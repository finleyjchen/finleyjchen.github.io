function scrollTo(div){
	$('html, body').animate({
		var d = div;
		scrollTop: $(d).offset().top
	},1000);
}


function setIframeHeight(iframe) {
	if (iframe) {
		var iframeWin = iframe.contentWindow || iframe.contentDocument.parentWindow;
		if (iframeWin.document.body) {
			iframe.height = iframeWin.document.documentElement.scrollHeight || iframeWin.document.body.scrollHeight;
		}
	}
};

window.onload = function () {
	setIframeHeight(document.getElementById('article1'));
};