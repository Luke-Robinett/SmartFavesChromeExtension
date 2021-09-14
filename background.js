chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: showPageInfo,
    }, frames => {
        const [ frame ] = frames;
        console.log(frame.result);
    });
});

function showPageInfo() {
    return document.title;
}