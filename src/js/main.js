/*global Parse,$,_*/

Parse.initialize("9fcgMX2JpezrcwLFZxdoIDnljbHsYJZyURYwPXzK", "hyM5bDybwewI1qWpImHrqWCYgzAeojm2hnT3hirL");

// Load the FB SDK Asynchronously
(function(d){
	var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
	if (d.getElementById(id)) {return;}
	js = d.createElement('script'); js.id = id; js.async = true;
	js.src = "//connect.facebook.net/en_US/all.js";
	ref.parentNode.insertBefore(js, ref);
}(document));

window.fbAsyncInit = function() {
	Parse.FacebookUtils.init({
		appId      : '42228515628', // Facebook App ID
		status     : true, // check login status
		cookie     : true, // enable cookies to allow Parse to access the session
		xfbml      : true  // parse XFBML
	});
};

function login() {
	Parse.FacebookUtils.logIn(null, {
		success: function(user) {
			if (!user.existed()) {
				alert("User signed up and logged in through Facebook!");
			} else {
				alert("User logged in through Facebook!");
			}
		},
		error: function(user, error) {
			alert("User cancelled the Facebook login or did not fully authorize.");
		}
	});
}

searchGallery("fail", function (imgs) {
	_.each(imgs, function (img) {
		$('.main').append('<img src="'+img.link+'" />');
	});
});
