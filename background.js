 chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.type == "espnKeyRequest"){
		var s2 = "";
		var swid = "";
		
		chrome.cookies.getAll({"url": ".espn.com"}, function(cookieList){
			var s2Cookie = cookieList.find(function(cookie){
				return cookie.name === "espn_s2";
			});
			var swidCookie = cookieList.find(function(cookie){
				return cookie.name === "espnAuth";
			});
			
			sendResponse({"swid":swidCookie, "s2":s2Cookie, "cookies": cookieList});
		});
		
/*		chrome.cookies.get({"url": "https://www.espn.com/", "name": "espnAuth"}, function(cookie) {
			if(!cookie){
				sendResponse({"swid":"Could not load SWID"});
			}else{
				swid = cookie.value;
			}
        });		
		chrome.cookies.get({"url": "https://www.espn.com/", "name": "espn_s2"}, function(cookie) {
			if(!cookie){
				sendResponse({"s2":"Could not load S2"});
			}else{
				s2 = cookie.value//JSON.parse(cookie.value);
			}
        }); 
*/		
	}
	else if (request.type == "espnSWIDRequest")
	{
		chrome.cookies.get({"url": "https://www.espn.com/", "name": "espnAuth"}, function(cookie) {
			if(!cookie){
				sendResponse({"swid":"Could not load SWID"});
			}else{
				var x = JSON.parse(cookie.value);
				sendResponse({"swid":x.swid});
			}
		});		
	}
	else if (request.type == "espnS2Request")
	{
		chrome.cookies.get({"url": "https://www.espn.com/", "name": "espn_s2"}, function(cookie) {
			if(!cookie){
				sendResponse({"s2":"Could not load S2"});
			}else{
				//var x = JSON.parse(cookie.value);
				sendResponse({"s2":cookie.value});
			}
		}); 
	}
	return true;
  });