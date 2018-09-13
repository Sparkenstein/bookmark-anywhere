// console.log("Chrome extension loaded !", jQuery().jquery);

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
        console.log("from the extension", request);
	let bookmarkPoint = request.selectionText;
	let location = findElementByText(bookmarkPoint);
	location.css("color", "red");
        // sendResponse({res:"Hello return"});
});

function findElementByText(text){
    let jSpot = $(":contains("+ text +")")
	    .filter(() => $(this).children().length === 0)
	    .parent();
    console.log("jspot", jSpot);
    return jSpot;
}
