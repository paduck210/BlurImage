chrome.runtime.onInstalled.addListener(function () {
  chrome.storage.sync.set({ hide: false }, function () {
    console.log("Hide image is on");
  });
});

chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
  chrome.declarativeContent.onPageChanged.addRules([
    {
      conditions: [
        new chrome.declarativeContent.PageStateMatcher({
          pageUrl: { hostContains: ".linkedin.com" },
        }),
      ],
      actions: [new chrome.declarativeContent.ShowPageAction()],
    },
  ]);
});
