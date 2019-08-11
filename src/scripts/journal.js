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

const journalDateInput = document.querySelector("#journalDate")
const journalConceptInput = document.querySelector("#journalConcepts")
const conceptEntryInput = document.querySelector("#conceptDetails")
const moodInput = document.querySelector(".mood")
const submit = document.querySelector("#submit")
const radioButtons = document.querySelector("#radioButtons")
console.log('radioButton: ', radioButtons);


//Do something with entries
const getAndRender = () => {
    entryLogOutput.innerHTML = ""
    API.getJournalData().then((parsedEntries) => { journalEntry.sendToFactory(parsedEntries) })

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

submit.addEventListener("click", (event) => {
    // Check for empty string
    if (journalConceptInput.value === "" || conceptEntryInput.value === "" || moodInput.value === "") {
        alert("Fill out the journal, Kelly")
        event.preventDefault();
    }

    // call createEntryObject and send it the form data. It will make a new object with the current form data. 
    const newJournalEntry = createEntryObject(journalDateInput.value, journalConceptInput.value, conceptEntryInput.value, moodInput.value)
    //call the API method saveJournalEntries from data.js and pass it the new entry.
    API.saveJournalEntries(newJournalEntry).then(getAndRender)
    // Reset all the fields to an empty string. Set date to current date
    journalDateInput.valueAsDate = new Date();
    journalConceptInput.value = ""
    conceptEntryInput.value = ""
    moodInput.value = ""

})


radioButtons.addEventListener("click", (event) => {
    const mood = event.target.value
    let total = 0;
    if (mood !== "allMoods") {
        console.log('mood: ', mood);
        entryLogOutput.innerHTML = ""
        API.filterJournalEntries(mood)
            .then((parsedEntries) => { journalEntry.sendToFactory(parsedEntries) })
    } else {

        getAndRender()
    }

})
entryLog.addEventListener("click", () => {
    if (event.target.id.startsWith("deleteBtnId")) {
        const deleteBtnId = event.target.id.split("--")[1]
        API.deleteJournalEntry(deleteBtnId)
            .then(getAndRender())
    }
})

