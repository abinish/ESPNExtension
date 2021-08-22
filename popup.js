document.addEventListener('DOMContentLoaded', function(){
	var s2Button = document.getElementById('s2');
	s2Button.addEventListener('click', function(){
		chrome.cookies.get({"url": "https://www.espn.com/", "name": "espn_s2"}, function(cookie) {
			console.log(cookie);
			if(!cookie){
				alert("Could not load S2 key");
				return;
			}
            var x = cookie.value;
			alert(x);
        });
	});
	var swidButton = document.getElementById('swid');
	swidButton.addEventListener('click', function(){
		chrome.cookies.get({"url": "https://www.espn.com/", "name": "espnAuth"}, function(cookie) {
			console.log(cookie);
			if(!cookie){
				alert("Could not load SWID");
				return;
			}
            var x = JSON.parse(cookie.value);
			
			alert(x.swid);
        });
	});
});