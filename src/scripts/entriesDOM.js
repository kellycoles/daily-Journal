// This is like dom.js
import htmlRep from "./entryComponent.js"

const entryLogOutput = document.querySelector("#entryLog")

const journalEntry = {
    sendToFactory(parsedEntries) {
            for (const journalEntry of parsedEntries) {
            const journalEntryHTML = htmlRep.createJournalHTML(journalEntry)
            entryLogOutput.innerHTML += journalEntryHTML
        }
    }
}
export default journalEntry

