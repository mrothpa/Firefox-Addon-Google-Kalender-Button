// Button Click Event
document.getElementById('open-cal-btn').addEventListener('click', function() {
    // Öffnet neuen Tab mit Wochenansicht
    browser.tabs.create({
        url: "https://calendar.google.com/calendar/u/0/r/week?pli=1"
    });
});
