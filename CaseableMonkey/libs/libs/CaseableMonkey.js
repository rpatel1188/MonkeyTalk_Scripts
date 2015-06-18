/***** DO NOT EDIT THIS FILE *****/
// CaseableMonkey.js generated by MonkeyTalk

load("libs/MonkeyTalkAPI.js");


var CaseableMonkey = {};

/*** script -- CaseableScript2 ***/
CaseableMonkey.CaseableScript2 = function(app) {
	MT.Script.call(this, app, "CaseableScript2.mt");
};

CaseableMonkey.CaseableScript2.prototype = new MT.Script;

CaseableMonkey.CaseableScript2.prototype.call = function() {
	//run: CaseableScript2.mt
	MT.Script.prototype.call(this);
};

MT.Application.prototype.caseableScript2 = function() {
	return new CaseableMonkey.CaseableScript2(this);
};

/*** script -- HP3 ***/
CaseableMonkey.HP3 = function(app) {
	MT.Script.call(this, app, "HP3.mt");
};

CaseableMonkey.HP3.prototype = new MT.Script;

CaseableMonkey.HP3.prototype.call = function() {
	//run: HP3.mt
	MT.Script.prototype.call(this);
};

MT.Application.prototype.hP3 = function() {
	return new CaseableMonkey.HP3(this);
};
