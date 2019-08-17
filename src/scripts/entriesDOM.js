// This is like dom.js
import domReferences from "./journal.js"
import htmlRep from "./entryComponent.js"


const journalEntry = {
    loopThroughData(parsedEntries) {
        console.log('parsedEntries: ', parsedEntries.length);
// this is where I envoke function to return count. make a container on paper li. make a factory function to return html 
            for (const journalEntry of parsedEntries) {
            const journalEntryHTML = htmlRep.createJournalHTML(journalEntry)
            domReferences.entryLogOutput.innerHTML += journalEntryHTML
        }
    },
    updateFormFields(editBtnId) {
        fetch(`http://localhost:3000/entries/${editBtnId}`)
        .then(response => response.json())
        .then(entry => {
            /*
                Now that you KNOW you have the data, render
                an editing form that represents the current
                state of the resource.
            */
           domReferences.hiddenJournalEntryId.value = entry.id // Hidden value.
           domReferences.journalDateInput.value = entry.date 
           domReferences.journalConceptInput.value = entry.concept
           domReferences.conceptEntryInput.value = entry.entry
           domReferences.moodInput.value = entry.mood
        })

    }
}
export default journalEntry

