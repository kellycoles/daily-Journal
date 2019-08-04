
/*==================================================================
    Main application logic that uses the functions and objects
    defined in the other JavaScript files. 
 ===================================================================*/
 // sets date to current date
document.querySelector("#journalDate").valueAsDate = new Date();

//Do something with entries
API.getJournalData().then((parsedEntries) => {journalEntry.sendToFactory(parsedEntries)})