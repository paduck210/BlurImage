// Checkbox
const changeBlur = document.getElementById("changeBlur");

//on init update the UI checkbox based on storage
chrome.storage.sync.get("hide", function (data) {
  changeBlur.checked = data.hide;
});

changeBlur.onchange = function (element) {
  let value = this.checked;

  //Pass init or remove message to content script
  if (value) {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(
        tabs[0].id,
        { command: "init", hide: value },
        function (response) {}
      );
    });
  } else {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(
        tabs[0].id,
        { command: "remove", hide: value },
        function (response) {}
      );
    });
  }
};
