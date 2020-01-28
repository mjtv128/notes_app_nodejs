const chalk = require('chalk')
const yargs = require('yargs')

const notes = require("./notes.js");
//object wiht two properties 

//Customize yargs version
yargs.version("1.1.0");

// Create add command 
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
      title: {
          describe: 'Note title',
          demandOption: true,
          //false by default
          type: 'string'
      },
      body: {
          describe: 'Note Description',
          type: 'string',
          demandOption: true
      }
  },
  handler(argv) {
      //call addNote method from notes
    notes.addNote(argv.title, argv.body);
  }
});

//Remove Command
yargs.command({
    command: 'remove',
    describe: "Removing a note",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true, 
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: "Listing all notes",
    handler() {
        notes.listNotes()
    }
})

yargs.command({
  command: "read",
  describe: "Read a note",
  handler() {
    console.log("Reading a note");
  }
});



// //add, remove, read, list notes

// //goes through the process parsing the details without printing
yargs.parse()
