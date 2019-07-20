"use strict";

// make placeholder date default to current date
document.querySelector("#journalDate").valueAsDate = new Date();
//===================================================================



const makeJournalEntryComponent = (journalEntry) => {
    return `
    <section class="journalEntry">
    <h2>Date: ${journalEntry.date}</h2>
    <p>Concepts Covered: ${journalEntry.concepts}</p>
    <p>Journal Entry: ${journalEntry.entry}</p>
    <p>Mood: ${journalEntry.mood}</p>
    </section>
    `
}

const journalEntryContainer = document.querySelector(".entryLog")

const renderJournalEntries = (entries) => {
    entries.forEach(entry => {
        const htmlRep = makeJournalEntryComponent(entry)
        journalEntryContainer.innerHTML += htmlRep
    })
}
 

renderJournalEntries(journalEntry);
