function espnSWIDRequest(callback) {
    var reqId = Math.random().toString(); // unique ID for this request
    var dataObj = {"reqId":reqId};
    var swidRequest = new CustomEvent('espnSWIDRequest', {"detail":dataObj});
    document.dispatchEvent(swidRequest);
	
	// get ready for a reply from the content script
    document.addEventListener('espnSWIDResponse', function respListener(event) {
        var data = event.detail;

        // check if this response is for this request
       // if(data.reqId == reqId) {
            callback(data.swid);
            document.removeEventListener('espnSWIDResponse', respListener);
       // }
    });
}

function espnS2Request(callback) {
	var reqId = Math.random().toString(); // unique ID for this request
    var dataObj = {"reqId":reqId};
    var s2Request = new CustomEvent('espnS2Request', {"detail":dataObj});
    document.dispatchEvent(s2Request);
	
	// get ready for a reply from the content script
    document.addEventListener('espnS2Response', function respListener(event) {
        var data = event.detail;

        // check if this response is for this request
        //if(data.reqId == reqId) {
            callback(data.s2);
            document.removeEventListener('espnS2Response', respListener);
        //}
    });
}

function espnKeyRequest(callback) {
    var reqId = Math.random().toString(); // unique ID for this request
    var dataObj = {"reqId":reqId};
    var swidRequest = new CustomEvent('espnKeyRequest', {"detail":dataObj});
    document.dispatchEvent(swidRequest);
	
	// get ready for a reply from the content script
    document.addEventListener('espnKeyResponse', function respListener(event) {
        var data = event.detail;

        // check if this response is for this request
       // if(data.reqId == reqId) {
            callback(data.swid, data.s2);
            document.removeEventListener('espnKeyResponse', respListener);
       // }
    });
}

// since this script is running, myapi.js has loaded, so let the page know
var customAPILoaded = new CustomEvent('espnPrivateKeyAPILoaded');
document.dispatchEvent(customAPILoaded);