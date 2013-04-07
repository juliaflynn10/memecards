/*global Parse,$*/

Parse.initialize("9fcgMX2JpezrcwLFZxdoIDnljbHsYJZyURYwPXzK", "hyM5bDybwewI1qWpImHrqWCYgzAeojm2hnT3hirL");

// var TestObject = Parse.Object.extend("TestObject");
// var testObject = new TestObject();
// testObject.save({foo: "bar"}, {
//   success: function(object) {
//     $(".success").show();
// },
// error: function(model, error) {
//     $(".error").show();
// }
// });

window.fbAsyncInit = function() {
  Parse.FacebookUtils.init({
    appId      : '42228515628', // Facebook App ID
    status     : true, // check login status
    cookie     : true, // enable cookies to allow Parse to access the session
    xfbml      : true  // parse XFBML
  });
 
  // Additional initialization code here
};

// Load the SDK Asynchronously
  (function(d){
     var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement('script'); js.id = id; js.async = true;
     js.src = "//connect.facebook.net/en_US/all.js";
     ref.parentNode.insertBefore(js, ref);
   }(document));
