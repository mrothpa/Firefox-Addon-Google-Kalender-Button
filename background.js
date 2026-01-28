browser.action.onClicked.addListener((tab) => {
    browser.tabs.create({
        // Standard: Wochenansicht
        url: "https://calendar.google.com/calendar/u/0/r/week?pli=1"
        
        // Alternativen (einkommentieren und obiges auskommentieren):
        // url: "https://calendar.google.com/calendar/u/0/r/day"      // Tag
        // url: "https://calendar.google.com/calendar/u/0/r/month"    // Monat
        // url: "https://calendar.google.com/calendar/u/0/r/year"     // Jahr
        // url: "https://calendar.google.com/calendar/u/0/r/agenda"   // Terminübersicht
    });
});