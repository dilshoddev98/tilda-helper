console.log("dsjhfgdshfkjgh");
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (changeInfo.status === "complete") addStyleToINNFunc(tabId);
});

function addStyleToINNFunc(activeTabId) {
  console.log("page is fully loaded MAIN MAIN");

  chrome.scripting.executeScript({
    target: {
      tabId: activeTabId,
    },
    func: sendCodeToSite,
  });
}

function sendCodeToSite() {
  console.log("TEST");
}
