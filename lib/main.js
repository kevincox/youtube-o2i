//var {Cc,Ci,Cu,Cr,Cm,components} = require("chrome");

var data = require("sdk/self").data;
var prefs = require("sdk/preferences/service");
var pp = "extensions.youtube-o2i@jetpack."; // Pref Prefix, or urine.

require("sdk/page-mod").PageMod({
	include: ["file://*", "resource://*", "*"],
	attachTo: ["existing", "top"],
	contentScriptFile: data.url("o2i.js"),
	contentScriptWhen: "start",

	contentScriptOptions: {
	},

	//onAttach: function(worker) {},
});
