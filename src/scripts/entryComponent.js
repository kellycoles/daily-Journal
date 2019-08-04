// this is like factory function.js only this is an object
//with a function in it, which is a method

const htmlRep = {
    createJournalHTML(journalEntry)  {
        return `
        <section class="journalEntry">
        <h2 class = "date">Date: ${journalEntry.date}</h2>
        <p class = "concept">Concepts Covered: ${journalEntry.concept}</p>
        <p class = "entry">Journal Entry: ${journalEntry.entry}</p>
        <p class = "mood">Mood: ${journalEntry.mood}</p>
        </section>
    `
    }
}