
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
        
  if(request.itemData){
	  console.log("from the extension", request);
	 let location = getSelectedNode();
	 let xpath = getPathTo(location);
	// console.log("xpath", xpath);
	 chrome.storage.local.set({bookmarkPoint : xpath});
	          
    }
  if(request.xpath){
	  console.log(request.xpath);
    let storedEl = getElementByXpath(request.xpath);
    console.log("StoredEl", storedEl);
  }
	// let storedEl = getElementByXpath(xpath);
	// $(storedEl).css("color", "green");
});


function getElementByXpath(path) {
  return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

function getSelectedNode()
{
    if (document.selection)
        return document.selection.createRange().parentElement();
    else
    {
        var selection = window.getSelection();
        if (selection.rangeCount > 0)
            return selection.getRangeAt(0).startContainer.parentNode;
    }
}

function getPathTo(element) {
    if (element.id!=='')
        return 'id("'+element.id+'")';
    if (element===document.body)
        return element.tagName;

    var ix= 0;
    var siblings= element.parentNode.childNodes;
    for (var i= 0; i<siblings.length; i++) {
        var sibling= siblings[i];
        if (sibling===element)
            return getPathTo(element.parentNode)+'/'+element.tagName+'['+(ix+1)+']';
        if (sibling.nodeType===1 && sibling.tagName===element.tagName)
            ix++;
    }
}
