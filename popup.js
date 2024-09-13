document.getElementById("popOut").addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      console.log("Injecting content script...");
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        files: ["contentScript.js"]
      }, () => {
        if (chrome.runtime.lastError) {
          console.error("Script injection failed: " + chrome.runtime.lastError.message);
        } else {
          console.log("Script injected successfully.");
        }
      });
    });
});
  