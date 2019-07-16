"use strict";
function JournalEntry(date, concept, details, mood) {
    this.date = date; 
    this.concept = concept;
    this.details = details;
    this.mood = mood;
    }
    
    const journalData = []; 

// 7-10-2019 entry
    const celebrityTribute = new JournalEntry("07/10/2019"," Git, GitHub, Flexbox, and Teamwork","Used the aforementioned technologies to build a website with 3 other team members", "really good");
    // push to array
    journalData.push(celebrityTribute);

// 07/11/2019 entry
    const DOM = new JournalEntry("07/11/2019"," querySelector() and querySelectorAll()", "book 2 chapter 1: Practiced using querySelector() and querySelectorAll() to add and remove classes from the DOM", "pretty good");
    // push to array
    journalData.push(DOM);
  

// 07/12/2019 entry
    const jsObjects = new JournalEntry("07/12/2019", "object and array manipulation","book 2 chapter 2: Practiced extracting and manipulatind data in objects and arrays.", "pretty good");
    // push to array
    journalData.push(jsObjects);
    
// 07/13/2019--7/14/2019 entry
    const dailyJournal1 = new JournalEntry("07/13/2019", "Daily Journal","Weekend: worked on styling my journal and learned some cool css tricks. I love styling!", "super excited");
    // push to array
    journalData.push(dailyJournal1); 
    
// 07/15/2019 entry
    const jsFunctions = new JournalEntry("07/15/2019", "Functions","Book 2 chapter 4. Learned about pure and impure functions. Worked more with template literals. Did several exercises ", "pretty good");
    // push to array
    journalData.push(jsFunctions);   
    
// 07/16/2019 entry
    const jsFunctions2 = new JournalEntry("07/16/2019", "Functions","Began the day with lightning exercises Finished book 2 chapter 4. Did several exercises ", "pretty good");
    // push to array
    journalData.push(jsFunctions2); 
   