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
    console.log("Item Data", itemData);
});
