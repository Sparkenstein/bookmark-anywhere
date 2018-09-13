function setupContextMenu(){
    chrome.contextMenus.create({
        title:    "Bookmark here!",
	type:     "normal",
	id:       "12345",
	contexts: ['selection']
    });
}


chrome.runtime.onInstalled.addListener(function(){
    setupContextMenu();
});

chrome.contextMenus.onClicked.addListener(function(itemData){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {itemData}, function(response) {
            console.log("res", response);
        });
    }); 
});


