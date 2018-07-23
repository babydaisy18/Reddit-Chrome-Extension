
chrome.runtime.onInstalled.addListener(function () {


  chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {


    chrome.declarativeContent.onPageChanged.addRules([
      {
        conditions: [
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { hostSuffix: '.reddit.com', pathPrefix: '/r/IAmA/comments' }
          })
        ],

        actions: [ new chrome.declarativeContent.ShowPageAction() ]
      }
    ]);
  });
});
