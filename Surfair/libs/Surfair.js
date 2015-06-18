/***** DO NOT EDIT THIS FILE *****/
// Surfair.js generated by MonkeyTalk

load("libs/MonkeyTalkAPI.js");


var Surfair = {};

/*** script -- BookTest ***/
Surfair.BookTest = function(app) {
	MT.Script.call(this, app, "BookTest.mt");
};

Surfair.BookTest.prototype = new MT.Script;

Surfair.BookTest.prototype.call = function() {
	//run: BookTest.mt
	MT.Script.prototype.call(this);
};

MT.Application.prototype.bookTest = function() {
	return new Surfair.BookTest(this);
};

/*** script -- BookandCancelBookTest ***/
Surfair.BookandCancelBookTest = function(app) {
	MT.Script.call(this, app, "BookandCancelBookTest.mt");
};

Surfair.BookandCancelBookTest.prototype = new MT.Script;

Surfair.BookandCancelBookTest.prototype.call = function() {
	//run: BookandCancelBookTest.mt
	MT.Script.prototype.call(this);
};

MT.Application.prototype.bookandCancelBookTest = function() {
	return new Surfair.BookandCancelBookTest(this);
};

/*** script -- LoginExample ***/
Surfair.LoginExample = function(app) {
	MT.Script.call(this, app, "LoginExample.mt");
};

Surfair.LoginExample.prototype = new MT.Script;

Surfair.LoginExample.prototype.call = function() {
	//run: LoginExample.mt
	MT.Script.prototype.call(this);
};

MT.Application.prototype.loginExample = function() {
	return new Surfair.LoginExample(this);
};

/*** script -- LoginTest ***/
Surfair.LoginTest = function(app) {
	MT.Script.call(this, app, "LoginTest.mt");
};

Surfair.LoginTest.prototype = new MT.Script;

Surfair.LoginTest.prototype.call = function() {
	//run: LoginTest.mt
	MT.Script.prototype.call(this);
};

MT.Application.prototype.loginTest = function() {
	return new Surfair.LoginTest(this);
};
