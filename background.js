browser.action.onClicked.addListener((tab) => {
    browser.tabs.create({
        url: "https://calendar.google.com/calendar/u/0/r/week?pli=1"
    });
});