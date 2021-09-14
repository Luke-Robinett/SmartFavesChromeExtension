chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: showPageInfo,
    });
});

function showPageInfo() {
    alert(document.title);
    // return document.title;
}