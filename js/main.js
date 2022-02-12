import NotesAPI from './NotesAPI.js';

NotesAPI.saveNote({
    title: "New note",
    body: " "
});

console.log(NotesAPI.getAllNotes());
