var oytre = new RegExp("^(https?://)(www\\.)?youtube(-nocookie)?.com/v/([^/?#]*).*$","i");

var objects = [];
var objectsel = document.getElementsByTagName("object");
for ( i in objectsel )
	objects.push(objectsel[i]);

for ( i in objects )
{
	console.log(i);
	var o = objects[i];
	if ( o.tagName != "OBJECT" ) continue; // We are also getting properties.
	var e = o.getElementsByTagName("embed")[0];

	var r = e.src.match(oytre);
	if (r)
	{
		let i = document.createElement("iframe");
		i.src = e.src.replace("/v/", "/embed/"); // Turn the flash url into an embed url.
		i.style.width  = o.width  + "px";
		i.style.height = o.height + "px";

		o.parentNode.insertBefore(i, o);
		o.parentNode.removeChild(o);
	}
};
