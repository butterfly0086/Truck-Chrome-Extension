(()=>{"use strict";chrome.action.onClicked.addListener((function(e){void 0!==e.id?chrome.scripting.executeScript({target:{tabId:e.id},files:["contentScript.js"]}):console.error("Error: tab.id is undefined")}))})();