// this is like factory function.js only this is an object
//with a function in it, which is a method



const htmlRep = {
    createJournalHTML(journalEntry)  {
        return `
        <section class="journalEntry ${journalEntry.id}">
        <h3 class = "date">Date: ${journalEntry.date}</h3>
        <p class = "concept">Concepts Covered: ${journalEntry.concept}</p>
        <p class = "entry">Journal Entry: ${journalEntry.entry}</p>
        <p class = "mood">Mood: ${journalEntry.mood}</p>
        <div class = btnParent>
            <button class = "editBtn" id="editBtnId--${journalEntry.id}">
            Edit
            </button>
            <button class = "deleteBtn" id="deleteBtnId--${journalEntry.id}">
            Delete
            </button>
        </div>
        </section>
    `
    }
    
}
export default htmlRep
