/*==================================================================
    Main application logic that uses the functions and objects
    defined in the other JavaScript files. 
 ===================================================================*/
 // sets date to current date
 document.querySelector("#journalDate").valueAsDate = new Date();

 //Do something with entries
 API.getJournalData().then((parsedEntries) => {journalEntry.sendToFactory(parsedEntries)})

 const createEntryObject = (date, concepts, entry, mood) => {
    return {
        "date": date.value,
        "concept": concepts.value,
        "entry": entry.value,
        "mood": mood.value
    }

}


submit.addEventListener("click", (event) => {
event.preventDefault()
    console.log("click")
    const newJournalEntry = createEntryObject(journalDateInput, journalConceptInput, conceptEntryInput, moodInput)
    API.saveJournalEntries(newJournalEntry)
    journalDateInput.valueAsDate = new Date();
    journalConceptInput.value = ""
    conceptEntryInput.value = ""
    moodInput.value = ""

})
