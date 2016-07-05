const utils = require('./utils')

module.exports = {
  title: 'Let\'s get right into it',
  sections: [{
    task: 'Please enter ls to win.',
    emulator: {
      history: [],
      workingDirectory: '/home/test',
      user: 'test',
      fileSystem: {
        '/': {
          type: 'dir',
          lastEdited: 1467714431235
        },
        '/home': {
          type: 'dir',
          lastEdited: 1467714431235
        },
        '/home/test': {
          type: 'dir',
          lastEdited: 1467714431235
        },
        '/home/test/1.txt': {
          type: 'file',
          content: "Before we can do anything useful within the command line, we have to get comfortable moving around the file system.\n\n\t\t\tThe file system exists on any computer system, and can be thought of as having a tree structure, with leaves attached to each branch, cascading upwards (or downwards) from the root.\n\n\t\t\tA less abstract example, would be to think of the file system kind of like a library.\n\n\t\t\tIf you can imagine each page of a book as a file, then, each book, it's container, would be a folder -- or more specifically, a directory. Each book is organized in a particular location on their respective shelves, and would also function as a directory.\n\n\t\t\tTo illustrate how this would work, we will imagine we want to access page 5 from Moby Dick. We have to find it's shelf, it's location on the shelf, and turn to page 5. This could be visualized as such."
        }
      }
    },
    checkSolved: utils.lastCommand('ls')
  }, {
    task: 'Please enter cat to win',
    checkSolved: utils.lastCommand('cat')
  }]
}
