"use strict";
function JournalEntry(date, concept, details, mood) {
    this.date = date; 
    this.concept = concept;
    this.details = details;
    this.mood = mood;
    }
    
    let newEntry = new JournalEntry();
    
    const journalData = [];
    journalData.push(newEntry);