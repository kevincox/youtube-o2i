var oytre = new RegExp("^(https?://)(www\\.)?youtube(-nocookie)?.com/v/([^/?#]*).*$","i");

function scanElement(ele)
{
	var objects = [];
	var objectsel = ele.getElementsByTagName("object");
	for ( i in objectsel )
		objects.push(objectsel[i]);

	for ( i in objects )
	{
		var o = objects[i];
		if ( o.tagName != "OBJECT" ) continue; // We are also getting properties.
		var e = o.getElementsByTagName("embed")[0];

		var r = e.src.match(oytre);
		if (r)
		{
			let i = document.createElement("iframe");

			i.src = e.src.replace("/v/", "/embed/"); // Turn the flash url into an embed url.

			/* So the above line **should** work but when the video is embeded
			without any parameters, youtube adds some incorrectaly which makes
			the iframe embed 404.  So this checks to see if the URL is proper and
			fixes it if it isn't.
			*/
			//var src = e.src.replace("/v/", "/embed/");
			//if ( src.indexOf("?") < 0 ) src = src.replace(/&/, "?"); // Not global.
			//i.src = src;
			// Seams to be fixed now that we are using MutationObserver.

			i.style.width  = o.width  + "px";
			i.style.height = o.height + "px";

			i.setAttribute("allowfullscreen", "true");

			o.parentNode.insertBefore(i, o);
			o.parentNode.removeChild(o);
		}
	}
}

var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        scanElement(mutation.target);
    });
});

// pass in the target node, as well as the observer options
observer.observe(document, { childList: true, subtree: true });
