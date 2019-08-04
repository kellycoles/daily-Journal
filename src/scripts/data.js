
// const API = {
//     getJournalEntries: function () {
//         return fetch("http://localhost:3000/entries")
//             .then(response => response.json())
//     }
// } 
// SAME AS BELOW: getJournalEntries() is a method in both

const API = {
    getJournalData() {
        return fetch("http://localhost:3000/entries")// Fetch from the API
            .then(response => response.json()) // Parse as JSON
            
    }
}

