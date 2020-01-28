const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => {
    return 'Your notes...'
}

const listNotes = () => {
    const notes = loadNotes() 

    console.log(chalk.inverse.blue("Your notes:"))
    notes.forEach(note => {
        console.log(note.title)
    })
}

const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter(note => {
        return note.title !== title
    })

    if (notes.length > notesToKeep.length){
       saveNotes(notesToKeep);
       console.log(chalk.inverse.green('Note deleted!'))
    } else {
        console.log(chalk.inverse.red('No note found'))
    }
}


const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNotes = notes.filter(note => {
        return note.title === title
    })
     
    if (duplicateNotes.length === 0) {
         notes.push({
           title: title,
           body: body
         });

         saveNotes(notes);
         console.log(chalk.green.inverse("New notes added"))
    } else {
        console.log(chalk.red.inverse("Note title taken!"))
    }
}

const saveNotes = notes => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync("notes.json");
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (error){
        return []
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes
}

