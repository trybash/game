const utils = require('./utils')

const catExplained = `The catenate or 'cat' command is one of the most commonly used, and has three functions: (1.) display text, (2.) combine copies of text files, or (3.) create new ones. We just used the cat command in the previous example to view text from a file. We will use cat frequently, so we will get used to it soon enough.

basic syntaxes for various operations might look like these.

cat file1

cat file1 > file2

cat file1 | less

We will learn more about cat as we go along.`

const cdExplained = `The catenate or 'cat' command is one of the most commonly used, and has three functions: (1.) display text, (2.) combine copies of text files, or (3.) create new ones. We just used the cat command in the previous example to view text from a file. We will use cat frequently, so we will get used to it soon enough.

basic syntaxes for various operations might look like these.

cat file1

cat file1 > file2

cat file1 | less

We will learn more about cat as we go along.`

const filesystemsExplained = `The file system exists on any computer system, and can be thought of as having a tree structure, with leaves attached to each branch, cascading upwards (or downwards) from the root.

A less abstract example, would be to think of the file system kind of like a library.

If you can imagine each page of a book as a file, then, each book, it's container, would be a folder -- or more specifically, a directory. Each book is organized in a particular location on their respective shelves, and would also function as a directory.

To illustrate how this would work, we will imagine we want to access page 5 from Moby Dick. We have to find it's shelf, it's location on the shelf, and turn to page 5. This could be visualized as such.

/ShelfOne/MobyDick/Page5

Remember, computers don't have any innate knowledge, and need to be told, and explained every single step.

In this same way, Computers handle files and directory based on their location from the "root," or the source node--or in our example, the shelf.

Most of us are familiar with this already. We have our Documents, Pictures, Music, and Videos directory usually setup for us went we originally setup our computer.

Normally, we are accustomed to use modern day GUI operating systems, which handle many of our tasks for us via a file manager. And, in many cases, as we will learn, it's actually better to take a step back to an archaic time of the command line.
`

const lsExplained = `The first command we'll explore is the 'ls' command. The ls command lists the contents of the current directory.

This is valuable to see what 'we have to work with,' in our current location. Files and directories are typically displayed, as expected. Additionally, however, there are hidden files. ls will not show these files. To see everything, we need to explain switches (or flages).

We can change the default behavior of an issued command by applying a switch (or flag) to it. This is done by following it with the minus sign and an appropriate letter. For example, if we type the same ls command, as ls -a, invokes the 'a' switch. In this case, the 'a' represents all. So, instead of just listing the default contents of a directory, the ls command now list all files including hidden files, which are no normally displayed.

There are many flags associated with each command, and we will cover many of the commonly used switches, but not all of them.

The 'h' switch is useful, because sometimes we want to list the contents in a more human understandable form. The 'h' represents human friendly units, instead of normally arcane information that might sometimes be listed.

It's often useful to see deeper information of the contents of the directory, e.g. owner, permissions associated with the content, last time it was accessed, etc. We can get all this detailed information with the 'l' or long switch in association with the 'ls' command.

We might want to list the contents of a directory in a single line, separated by a comma. This can be achieved by using the 'm' switch.

What is really nice, and helpful, is we might want to see the contents of not a single directory, but all the subdirectories within it, as well. We can do this by using the 'R' switch. If we type 'ls -R' all the subdirectories will open up, into the list contents of those already visible within the folder.

Try that at your local library to view the contents of all the books on a shelf in an instant!

Other popular switches are 't' and '1', one not to be mistaken for little l, show the entries by time and forces them into a single column, respectively.

Another niceity with the usage of switches is that you can use more than one at a time! For example, you can type: 'ls -aR' to view all the contents of the current working diretory and all it's subdirectories. The only limit, is some switches would be counter-productive, so in some cases, their usage may not be allowed with other switches. But, generally, you can use many switches, to however meet your needs.

Ok, so we have a pretty good idea of how we can view content now, but how do move?`

const pwdExplained = `
So now that we can navigate around, and list content of our directories, it's very easy to get lost. How do I find out where I am?

We can use the 'pwd' command, and it will show us the complete path to our current working directory. This is very useful for noting where we are when we work in a particular directory, and want to go there later. Or, simply if we lose track of where we are.

We should have a pretty good idea of manuveuring around the file system by now, and seeing what files and subdirectories are available, and how to move around them, up and down, and even be able to always find out where we are. Also, we have learned about switches, and how they alter the normal behavior of commands so that they can provide other features, that the normal command alone would not offer.

But, how can we do other stuff we're used to? In the next lesson we'll have a look at file manipulation, such that, we can move, copy, delete, create files and directories.
`

const emulator = {
  history: [],
  workingDirectory: '/home/user',
  user: 'user',
  fileSystem: {
    '/': {
      type: 'dir',
      modified: Date.now()
    },
    '/home': {
      type: 'dir',
      modified: Date.now()
    },
    '/home/user': {
      type: 'dir',
      modified: Date.now()
    },
    '/home/user/Desktop': {
      type: 'dir',
      modified: Date.now()
    },
    '/home/user/Documents': {
      type: 'dir',
      modified: Date.now()
    },
    '/home/user/Documents/cat_explained.txt': {
      type: 'file',
      modified: Date.now(),
      content: catExplained
    },
    '/home/user/Documents/cd_explained.txt': {
      type: 'file',
      modified: Date.now(),
      content: cdExplained
    },
    '/home/user/Documents/filesystems_explained.txt': {
      type: 'file',
      modified: Date.now(),
      content: filesystemsExplained
    },
    '/home/user/Documents/Homework': {
      type: 'dir',
      modified: Date.now()
    },
    '/home/user/Documents/Homework/labOne.txt': {
      type: 'file',
      modified: Date.now(),
      content: 'TODO'
    },
    '/home/user/Downloads': {
      type: 'dir',
      modified: Date.now()
    },
    '/home/user/Music': {
      type: 'dir',
      modified: Date.now()
    },
    '/home/user/Pictures': {
      type: 'dir',
      modified: Date.now()
    },
    '/home/user/Videos': {
      type: 'dir',
      modified: Date.now()
    },
    '/home/user/ls_explained.txt': {
      type: 'file',
      modified: Date.now(),
      content: lsExplained
    },
    '/home/user/pwd_explained.txt': {
      type: 'file',
      modified: Date.now(),
      content: pwdExplained
    },
    '/home/user/.hidden.txt': {
      type: 'file',
      modified: Date.now(),
      content: 'hidden file is empty'
    }
  }
}

module.exports = {
  title: 'Copying and Moving',
  sections: [
    {
      task: `This lesson we're going to learn some very important commands: copying files and moving them. Let's see what we have in our directory.

type: ls`,
      emulator: emulator,
      checkSolved: utils.lastCommand('ls')
    },
    {
      task: `Ok, lets move the homework1.txt to the Documents folder.

type: mv homework1.txt Documents/homework1.txt`,
      emulator: emulator,
      checkSolved: utils.lastCommand('ls')
    },
    {
      task: `The move syntax is pretty simple, mv source destination. But, it is more powerful than that.

type: mv homework1.txt homework2.txt homework3.txt Documents`,
      emulator: emulator,
      checkSolved: utils.lastCommand('ls')
    },
    {
      task: `Very nifty! We can move multiple files at once into a new directory. That is a lot easier on the wrist than clicking-and-dragging. But, it gets even better.

type: mv home*.txt Documents`,
      emulator: emulator,
      checkSolved: utils.lastCommand('ls')
    },
    {
      task: `Wow! We used the wildcard *, which basically matches everything after 'homework' and throws it into the Documents folder. Now, lets move on to copying. This won't be hard, it has the same format.

type: cp origFile origFile2`,
      emulator: emulator,
      checkSolved: utils.lastCommand('ls')
    },
    {
      task: `Copying files, like many commands, can also take wildcard *, and allow for copying of multiple files at once!

type: cp file1 file2 file3 file4 Documents`,
      emulator: emulator,
      checkSolved: utils.lastCommand('ls')
    },
    {
      task: `Copying and moving files can sometimes be dangerous. We don't want to overwrite something accidentally. So far, the cp and mv examples have not protected us from this occurring. There are two ways we can handle this. First, we'll learn the interactive way, by using the -i switch. If there is a match, we will be warned.

type: cp -i file1 Documents`,
      emulator: emulator,
      checkSolved: utils.lastCommand('ls')
    },
    {
      task: `Now, we'll use another switch, the -n switch, which does not overwrite existing files.

type: mv -n file1 Documents/file1`,
      emulator: emulator,
      checkSolved: utils.lastCommand('ls')
    },
    {
      task: `Lastly, you can copy/move the contents of one directory into another directory simply by using the -R switch. Try it!

type: cp -R Documents BackedUpDocs`,
      emulator: emulator,
      checkSolved: utils.lastCommand('ls')
    },
    {
      task: 'This concludes our second lesson. You should now be comforable navigating the file system, and copying and moving files around.',
      emulator: emulator,
      checkSolved: utils.lastCommand('ls')
    }
  ]
}
