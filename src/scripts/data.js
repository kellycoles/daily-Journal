
// const API = {
//     getJournalEntries: function () {
//         return fetch("http://localhost:3000/entries")
//             .then(response => response.json())
//     }
// } 
// SAME AS BELOW: getJournalEntries() is a method in both

const API = {
    getJournalData() {
        return fetch("http://localhost:8088/entries?_sort=id&_order=desc") // Fetch from the API
            .then(response => response.json())        // Parse as JSON

    },

    saveJournalEntries(entryObject) {
        return fetch("http://localhost:8088/entries", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(entryObject)
        })
    }
}
export default API;