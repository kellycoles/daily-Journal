const API = {
    getJournalEntries () {
        return fetch("http://localhost:3000/entries")// Fetch from the API
            .then(response => response.json()) // Parse as JSON
    }
}