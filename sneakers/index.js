var captcha = document.getElementById("fake-captcha");

var passOrFail = function() {
  var pass = Math.round(Math.random());
  return pass ? "fail" : "pass";
}
var replace = function() {
  location.replace("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
}

captcha.onclick = function() {
  if (captcha.className.includes("loading")) return;
  
  captcha.className = "";
  
  captcha.className += "loading";
  
  setTimeout(function() {
    captcha.className = captcha.className.replace("loading", "");
    captcha.className += passOrFail();
    if (captcha.className === "pass"){
      replace()
    }
  }, Math.floor((Math.random() * 2000) + 1000));
}