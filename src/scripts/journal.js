/*==================================================================
    Main application logic that uses the functions and objects
    defined in the other JavaScript files. 
 ===================================================================*/
 // sets date to current date
 document.querySelector("#journalDate").valueAsDate = new Date();

 //Do something with entries
 API.getJournalData().then((parsedEntries) => {journalEntry.sendToFactory(parsedEntries)})

 const createEntryObject = (date, concepts, details, mood) => {
    return {
        "date": date.value,
        "concepts": concepts.value,
        "details": details.value,
        "mood": mood.value
    }

}


submit.addEventListener("click", () => {
    console.log("click")
    const newJournalEntry = createEntryObject(journalDateInput, journalConceptInput, conceptDetailsInput, moodInput)
    API.saveJournalEntries(newJournalEntry)
    
    journalConceptsInput.value = ""
    conceptDetailsInput.value = ""
    moodInput.value = ""

})
