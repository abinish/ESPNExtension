// inject a script from the extension's files
// into the execution environment of the main page
var s = document.createElement('script');
s.src = chrome.extension.getURL("myapi.js");
document.documentElement.appendChild(s);



document.addEventListener('espnSWIDRequest', function(event) {
    chrome.runtime.sendMessage({type: "espnSWIDRequest"}, function(response) {
		var fetchResponse = new CustomEvent('espnSWIDResponse', {"detail":response});
		document.dispatchEvent(fetchResponse);
	});
});

document.addEventListener('espnS2Request', function(event) {
    chrome.runtime.sendMessage({type: "espnS2Request"}, function(response) {
		var fetchResponse = new CustomEvent('espnS2Response', {"detail":response});
		document.dispatchEvent(fetchResponse);
	});
});

document.addEventListener('espnKeyRequest', function(event) {
    chrome.runtime.sendMessage({type: "espnKeyRequest"}, function(response) {
		var fetchResponse = new CustomEvent('espnKeyResponse', {"detail":response});
		document.dispatchEvent(fetchResponse);
	});
});