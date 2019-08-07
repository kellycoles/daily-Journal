// this is like factory function.js only this is an object
//with a function in it, which is a method



const htmlRep = {
    createJournalHTML(journalEntry)  {
        return `
        <section class="journalEntry">
        <h3 class = "date">${journalEntry.date}</h3>
        <p class = "concept">${journalEntry.concept}</p>
        <p class = "entry">${journalEntry.entry}</p>
        <p class = "mood">${journalEntry.mood}</p>
        </section>
    `
    }
    
}
export default htmlRep