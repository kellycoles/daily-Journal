// This is like dom.js
// import domReferences from "./journal.js"
import htmlRep from "./entryComponent.js"

const entryLogOutput = document.querySelector("#entryLog")

const journalEntry = {
    sendToFactory(parsedEntries) {
        console.log('parsedEntries: ', parsedEntries.length);
// this is where I envoke function to return count. make a container on paper li. make a factory function to return html 
            for (const journalEntry of parsedEntries) {
            const journalEntryHTML = htmlRep.createJournalHTML(journalEntry)
           entryLogOutput.innerHTML += journalEntryHTML
        }
    },
    updateFormFields(editBtnId) {
        fetch(`http://localhost:8088/recipes/${editBtnId}`)
        .then(response => response.json())
        .then(entry => {
            /*
                Now that you KNOW you have the data, render
                an editing form that represents the current
                state of the resource.
            */
           hiddenJournalEntryId = entry.id // Hidden value. all these values need to be imported frpm journal.js
           journalDateInput.value = entry.date 
           journalConceptInput.value = entry.concept
           conceptEntryInput.value = entry.entry
           moodInput.value = entry.mood
        })

    }
}
export default journalEntry

