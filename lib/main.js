//var {Cc,Ci,Cu,Cr,Cm,components} = require("chrome");

var data = require("self").data;
var prefs = require("preferences-service");
var pp = "extensions.youtube-o2i@jetpack."; // Pref Prefix, or urine.

require("page-mod").PageMod({
	include: ["file://*", "resource://*", "*"],
	attachTo: ["existing", "top"],
	contentScriptFile: data.url("o2i.js"),
	contentScriptWhen: "start",

	contentScriptOptions: {
	},

	//onAttach: function(worker) {},
});
