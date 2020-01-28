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
  handler: function(argv) {
      //call addNote method from notes
    notes.addNote(argv.title, argv.body);
  }
});



//Remove Command
yargs.command({
    command: 'remove',
    describe: "Removing a note",
    handler: function () {
        console.log('Removing note')
    }
})

yargs.command({
    command: 'list',
    describe: "Listing all notes",
    handler: function () {
        console.log('Listing all notes')
    }
})

yargs.command({
  command: "read",
  describe: "Read a note",
  handler: function() {
    console.log("Reading a note");
  }
});



// //add, remove, read, list notes

// //goes through the process parsing the details without printing
yargs.parse()
