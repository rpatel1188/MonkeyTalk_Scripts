/***** DO NOT EDIT THIS FILE *****/
// MonkeyProjectSanta.js generated by MonkeyTalk

load("libs/MonkeyTalkAPI.js");


var MonkeyProjectSanta = {};

/*** script -- SNowGLobe2 ***/
MonkeyProjectSanta.SNowGLobe2 = function(app) {
	MT.Script.call(this, app, "SNowGLobe2.mt");
};

MonkeyProjectSanta.SNowGLobe2.prototype = new MT.Script;

MonkeyProjectSanta.SNowGLobe2.prototype.call = function() {
	//run: SNowGLobe2.mt
	MT.Script.prototype.call(this);
};

MT.Application.prototype.sNowGLobe2 = function() {
	return new MonkeyProjectSanta.SNowGLobe2(this);
};

