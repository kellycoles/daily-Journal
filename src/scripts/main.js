getJournalData().then((parsedEntries) => {
    for (const journalEntry of parsedEntries) {
        const journalEntryHTML = createJournalHTML(journalEntry)
        renderEntry(journalEntryHTML)
    }
})

//===================================================================
// make placeholder date default to current date
document.querySelector("#journalDate").valueAsDate = new Date();

