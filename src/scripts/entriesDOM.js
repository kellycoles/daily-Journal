// This is like dom.js
import htmlRep from "./entryComponent.js"

const entryLogOutput = document.querySelector("#entryLog")

const journalEntry = {
    sendToFactory(parsedEntries) {
        console.log('parsedEntries: ', parsedEntries.length);
// this is where I envoke function to return count. make a container on paper li. make a factory function to returnhtml 
            for (const journalEntry of parsedEntries) {
            const journalEntryHTML = htmlRep.createJournalHTML(journalEntry)
            entryLogOutput.innerHTML += journalEntryHTML
        }
    }
}
export default journalEntry

