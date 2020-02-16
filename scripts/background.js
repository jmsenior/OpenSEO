// background js


//console.log("Ok injected file worked");

chrome.runtime.onMessage.addListener(
 function(request, sender, sendResponse) {
  switch(request.type){
    case "getBloque":
     returnBloque();
    break;
  }
});

function returnBloque() {
 chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
 	$.get(chrome.extension.getURL("templates/content-iframe.html"),function(data){
 		chrome.tabs.sendMessage(tabs[0].id, {content: data}); 
 	});
  	
 });
}