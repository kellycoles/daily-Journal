// This is like dom.js

// Reference DOM elements
const journalDate= document.querySelector("#journalDate")
const journalConcepts = document.querySelector("#journalConcepts")
const conceptDetails = document.querySelector("#conceptDetails")
const mood = document.querySelector("#mood")
const entry = document.querySelector("#entryLog")


const journalEntry = {
    sendToFactory(parsedEntries) {
        for (const journalEntry of parsedEntries) {
            const journalEntryHTML = htmlRep.createJournalHTML(journalEntry)
            entryLog.innerHTML += journalEntryHTML
        }
    }
}

