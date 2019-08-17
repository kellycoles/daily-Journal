/*==================================================================
    Main application logic that uses the functions and objects
    defined in the other JavaScript files. 
 ===================================================================*/
import API from "./data.js"
import journalEntry from "./entriesDom.js"
//  import entryLogOutput from "./entriesDom.js"

// sets date to current date
document.querySelector("#journalDate").valueAsDate = new Date();

// Reference DOM elements
const entryLogOutput = document.querySelector("#entryLog")
const hiddenJournalEntryId = document.querySelector("#journalEntryId")
console.log('hiddenJournalEntryId : ', hiddenJournalEntryId);
const journalDateInput = document.querySelector("#journalDate")
const journalConceptInput = document.querySelector("#journalConcepts")
const conceptEntryInput = document.querySelector("#conceptDetails")
const moodInput = document.querySelector(".mood")
const submit = document.querySelector("#submit")
const radioButtons = document.querySelector("#radioButtons")


//Do something with entries
const getAndRender = () => {
    entryLogOutput.innerHTML = ""
    API.getJournalData().then((parsedEntries) => { journalEntry.loopThroughData(parsedEntries) })

}
getAndRender()


// Create an object with a new journal entry
const createEntryObject = (date, concepts, entry, mood) => {
    return {
        date: date,
        concept: concepts,
        entry: entry,
        mood: mood
    }

}

const clearInputs = () => {
    journalDateInput.valueAsDate = new Date();
    journalConceptInput.value = ""
    conceptEntryInput.value = ""
    moodInput.value = ""
}

submit.addEventListener("click", (event) => {
    // Check for empty string
    if (journalConceptInput.value === "" || conceptEntryInput.value === "" || moodInput.value === "") {
        alert("Fill out the journal, Kelly")
    } else {
        if (hiddenJournalEntryId.value !== "") {
            console.log('hiddenJournalEntryId.value: ', hiddenJournalEntryId.value);

            const entry = {
                id: hiddenJournalEntryId.value,
                date: journalDateInput.value,
                concept: journalConceptInput.value,
                entry: conceptEntryInput.value,
                mood: moodInput.value
            }
            API.editJournal(entry).then(getAndRender).then(clearInputs)
        } else {

            // call createEntryObject and send it the form data. It will make a new object with the current form data. 
            const newJournalEntry = createEntryObject(journalDateInput.value, journalConceptInput.value, conceptEntryInput.value, moodInput.value)
            //call the API method saveJournalEntries from data.js and pass it the new entry.
            API.saveJournalEntries(newJournalEntry).then(getAndRender)
            // Reset all the fields to an empty string. Set date to current date
            clearInputs()
        }
    }
})


radioButtons.addEventListener("click", (event) => {
    const mood = event.target.value
    if (mood !== "allMoods") {
        console.log('mood: ', mood);
        entryLogOutput.innerHTML = ""
        API.filterJournalEntries(mood)
            .then((parsedEntries) => { journalEntry.loopThroughData(parsedEntries) })

    } else {

        getAndRender()

    }

})
entryLogOutput.addEventListener("click", () => {
    if (event.target.id.startsWith("deleteBtnId")) {
        const deleteBtnId = event.target.id.split("--")[1]
        API.deleteJournalEntry(deleteBtnId)
            .then(getAndRender)
    }
    if (event.target.id.startsWith("editBtnId")) {
        const editBtnId = event.target.id.split("--")[1]
        journalEntry.updateFormFields(editBtnId)
    }
})


export default { hiddenJournalEntryId, entryLogOutput, journalDateInput, journalConceptInput, conceptEntryInput, moodInput }