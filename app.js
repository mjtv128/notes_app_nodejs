// const fs = require("fs");
// a constant fs and its value comes from the return value of fs
// require loads in fs module built in node

// fs.writeFileSync("notes.txt", "My name is Michelle");
// takes in two string arguments (1 name of File, 2 data array contents to put inside)

// fs.appendFileSync("notes.txt", "\nhello")
// const add = require('./utils.js');
const notes = require('./notes.js')
// const name = 'Michelle'
// const sum = add(4, 2)
// console.log(sum)
// const getNotes = getnotes()
// console.log(getNotes)

const chalk = require('chalk')
const yargs = require('yargs')
// const command = process.argv[2]

// console.log(process.argv)

//Customize yargs version
yargs.version('1.1.0')

// Create add command 
yargs.command({
    command: 'add',
    describe: 'Add a new note',
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
    handler: function (argv) {
        notes.addNote(argv.title, argv.body)
    }
})

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



//add, remove, read, list notes

//goes through the process parsing the details without printing
yargs.parse()
// console.log(yargs.argv)


// if (command === 'add') {
//     console.log('Adding note!')
// } else if (command === 'remove') {
//     console.log("Removing note!")
// }

