// This is like dom.js

// Reference DOM elements
const journalDateInput= document.querySelector("#journalDate")
const journalConceptsInput = document.querySelector("#journalConcepts")
const conceptDetailsInput = document.querySelector("#conceptDetails")
const moodInput = document.querySelector("#mood")
const entryLogOutput = document.querySelector("#entryLog")
const submit = document.querySelector(".submit")

const journalEntry = {
    sendToFactory(parsedEntries) {
        for (const journalEntry of parsedEntries) {
            const journalEntryHTML = htmlRep.createJournalHTML(journalEntry)
            entryLogOutput.innerHTML += journalEntryHTML
        }
    }
}