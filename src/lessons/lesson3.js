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

Normally, we are accustomed to use modern day GUI operating systems, which handle many of our tasks for us via a file manager. And, in many cases, as we will learn, it's actually better to take a step back to an archaic time of the command line.`

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

const pwdExplained = `So now that we can navigate around, and list content of our directories, it's very easy to get lost. How do I find out where I am?

We can use the 'pwd' command, and it will show us the complete path to our current working directory. This is very useful for noting where we are when we work in a particular directory, and want to go there later. Or, simply if we lose track of where we are.

We should have a pretty good idea of manuveuring around the file system by now, and seeing what files and subdirectories are available, and how to move around them, up and down, and even be able to always find out where we are. Also, we have learned about switches, and how they alter the normal behavior of commands so that they can provide other features, that the normal command alone would not offer.

But, how can we do other stuff we're used to? In the next lesson we'll have a look at file manipulation, such that, we can move, copy, delete, create files and directories.`

const mkdirExplained = `The mkdir command create directories. It stands for "MaKe DIRectory." It is the fundamental computer operation of creating a folder, and used to create storage directories for our different types of data.

An important component of directories has to do with ownership, but is not within the scope of this tutorial. That will be developed in the future. Stay tuned.`

const rmExplained = `Here we will discuss both the rm and rmdir commands, because of their similarity and overlap.

The rm command is used for removing files. Be careful with it's use, there is no undo command. When you use the rm filename, you delete filename without question. Theoretically, it would be possible to recover the information, via additional software -- if done relatively immediately after the deletion.

Just like with modern GUIs, the rm command 'unlinks' the file, meaning it is not accessible anymore by the system. However, the file is not technically 'deleted.' To completely remove a file, you would want to use the shred command, but that is outside the scope of this tutorial.

Also, the rm command by default does not work on directories. To delete directories, you would need to use the recursive switch:

rm -R directory

Another alternative to delete a directory would be to use the rmdir command, which is specifically designed to delete directories.

So, in summation, you can delete a file by using the rm command, and delete directories by using rm -R dirName or rmdir dirName.`

const touchExplained = `The touch command is a very commonly used command for creating empty folders.

The command changes the timestamps of file(s), so if the file already exists, the timestamp data, like when it was last accessed is updated to the current time. For the average computer user, normally, that is not of particularly great importance, but for some administrator or related purposes, it is very important.

Additionally, what is a bonus feature of this command, if the file does not exist, it is created! The file of course will be empty, but you now have a container to throw stuff into. Many other bash commands only work if something goes into a file. So, often times, you'll need to just create an empty file to throw stuff into. Touch facilities this, by creating a file, as such:

touch testFile

The testFile is created!

Of course, if you don't want to create a bunch of empty files, you could use the -c switch, as such:

touch -c testFile

This updates the timestamp on testFile, but if it does not exist, the file is not created.`

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
    '/home/user/Documents/mkdirExplained.txt': {
      type: 'file',
      modified: Date.now(),
      content: mkdirExplained
    },
    '/home/user/Documents/rmExplained.txt': {
      type: 'file',
      modified: Date.now(),
      content: rmExplained
    },
    '/home/user/Documents/touchExplained.txt': {
      type: 'file',
      modified: Date.now(),
      content: touchExplained
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
  title: 'Creating and Removing of Files and Directories',
  sections: [
    {
      task: `We've learned how to use various commands so far – <code>ls</code> <code>pwd</code> <code>cd</code> <code>cp</code> <code>mv</code> – to name a few.
Now, lets learn how to create directories.

To create your first folder try typing <code>mkdir testFolder</code>.`,
      emulator: emulator,
      checkSolved: utils.checkType('/home/user/testFolder', 'dir')
    },
    {
      task: 'Use a command you learned in a previous lesson to change into the <code>testFolder</code> directory, and we continue there.',
      emulator: emulator,
      checkSolved: utils.workingDirectory('/home/user/testFolder')
    },
    {
      task: `Now, let's create a new file at our current location.
There are many ways to create a file, but one simple way is to use the <code>touch</code> command.
Normally, <code>touch</code> updates timestamps on a file, but if the file doesn't exist, an empty file is created with the provided name.

Create a file called <code>test1.txt</code> in <code>testFolder</code> by typing <code>touch test1.txt</code>.`,
      emulator: emulator,
      checkSolved: utils.checkType('/home/user/testFolder/test1.txt', 'file')
    },
    {
      task: `Now we have a new empty file. But we decide that we don't need the file anymore.

We can delete it with the <code>rm <em>filename</em></code> command.

Try removing the <code>test1.txt</code> file!`,
      emulator: emulator,
      checkSolved: utils.checkType('/home/user/testFolder/test1.txt', null)
    },
    {
      task: `That was simple enough.
Use a command from a previous lesson to list the contents of the directory you are currently in.`,
      emulator: emulator,
      checkSolved: utils.lastCommand('ls', true)
    },
    {
      task: `Let's return to the command we started this lesson with: <code>mkdir</code>.
We can use it to quickly create multiple directories in one swing.

Create three directories inside the <code>testFolder</code> for items we want to store over the next three weeks by typing: <code>mkdir week1 week2 week3</code>.`,
      emulator: emulator,
      checkSolved: utils.compose(
        utils.checkType('/home/user/testFolder/week1', 'dir'),
        utils.checkType('/home/user/testFolder/week2', 'dir'),
        utils.checkType('/home/user/testFolder/week3', 'dir')
      )
    },
    {
      task: `We, however, decide we only need two weeks, so let's delete week3. There are two ways to do this. First, we can use the <code>rm</code> command with the <code>-R</code> flag to make it recursive.
This means it not only tries to delete one file, but instead a whole hierarchy.
Try this with <code>rm -R week3</code>.`,
      emulator: emulator,
      checkSolved: utils.compose(
        utils.checkType('/home/user/testFolder/week1', 'dir'),
        utils.checkType('/home/user/testFolder/week2', 'dir'),
        utils.checkType('/home/user/testFolder/week3', null)
      )
    },
    {
      task: `As always within the command line, there are many ways to do tasks, so it's always best to do what you feel comfortable with. This time, use the <code>rmdir</code> command to delete the directory <code>week2</code>.
You can use <code>rmdir</code> the same way you used <code>rm -R</code>.`,
      emulator: emulator,
      checkSolved: utils.checkType('/home/user/testFolder/week2', null)
    },
    {
      task: `We now have learned how to quickly create files with the touch command, and directories with the mkdir command. In the next lesson, we are ratch it up a notch, and learn about redirection.

Type <code>next</code> when you are ready to finish this lesson.`,
      emulator: emulator,
      checkSolved: utils.lastCommand('next')
    }
  ]
}
