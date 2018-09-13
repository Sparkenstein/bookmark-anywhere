let getBookmarksButton = document.getElementById('showBookmarks');



getBookmarksButton.onclick = function(element){
    chrome.storage.local.get('bookmarkPoint', function(data) {
	console.log("data", data);
	chrome.tabs.query({active:true, currentWindow:true}, function(tabs){
	    chrome.tabs.sendMessage(tabs[0].id, {xpath:data.bookmarkPoint}, function(res){
	        console.log("xpath res", res);
	    });
	});
    });
}


