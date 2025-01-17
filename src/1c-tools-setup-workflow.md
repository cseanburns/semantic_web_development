# Tools, Setup, and Workflow

## Install Software for Web Development

Web developers, and other programmers, rely on a suite of applications to conduct their work.
In order to learn how to become web developers, we will need learn how to use some of these applications.

To learn to use these applications, we need to install them.
Hence, our first task is to install the software we need to start web development.
For this course, we will use the following tools:

- Text editor
- Vector graphics editor
- Version control software

The tricky part about this week is that I cannot show you how to install this software.
The installation process is dependent on the operating system you use.
Whether you use Windows, macOS, or Linux (as I do),
then you should already know the basics of installing.
And fortunately, once these tools are up and running on your systems,
we'll all be in sync and what you'll see in my instructions going forward will be easier to follow.

### Text Editor

Let's start with the most important application: a text editor.
Text editors are a programmer's bread and butter.
They have a long history and there are even [funny cultural wars][culture_wars] about text editors.
Personally, I use the [Vim][vim] editor, which is a [command line][cli] editor.
Vim can be difficult to learn, and we don't have the time to learn it.
Therefore, for this course you can use a GUI (graphical user interface) text editor.

Note that we **do not** use a [word processor][word_processor] like Microsoft Word or Google Docs in programming.
When we write any kind of code, the code needs to be saved as [plain text][plaintext] and not as encoded text.
Word processors save files as encoded text and text editors save files as plain text (e.g., DOCX versus TXT files).

Also, text editors offer a number of functions that are designed to help us write better programs.
Fortunately, many are free and open source software.

For this course, you can use the free [VS Code][vscode] text editor.
You are welcome to use another text editor, especially if you are used to working with one and know how to use it.
If you use VS Code, feel free to explore it and see what [extensions][vs_ext] or [themes][vs_themes] you might like to add.
Extensions will extend VS Code's functionality.
Themes will alter how VS Code appears.

Download and install VS Code from:

- [VS Code][vscode]

### Vector Graphics Editor

When we begin a web development project,
it is a pretty bad idea to just sit down and start coding a website without first thinking about its architecture,
how it looks, its design, what it contains, who the audience is or are, and so forth.
The good idea is to start with a plan.

The same is true for any professional, like an architect, who designs anything in this world.
Imagine having the money to build your own home and then hiring a builder
who starts assembling a bunch of lumber and pipes and wires with only a vague idea of what they want to accomplish.
That would be foolish as well as a waste of money and time.
The same is true for any profession that builds or develops anything.
If you want to build a website, then you start with a plan.

For this course, I mainly want you to think about how the website you will build will look on a desktop/laptop browser and also on mobile. We could hand draw this, but in some settings, you will want to share your plans with others,
and thus it makes more sense to use a drawing tool in order to share native, digital files with your colleagues or customers.

Enter Inkscape, a [vector graphics editor][vector_graphics].
Vector graphics editors are often used to design things like logos.
Unlike raster-based editors, like Photoshop or [GIMP][gimp],
vector graphics scale to any size and still maintain quality.
Adobe Illustrator is a vector graphics editor, but Inkscape is as advanced as Illustrator and is free and open source software.

If you have and are comfortable using a vector graphics editor, like Illustrator, you are free to use that,
but for this course, I will use and demonstrate Inkscape.

Download and install Inkscape:

- [Inkscape][inkscape]

### Version Control

Finally, one of other most important tools for actual web development (and for any kind of programming) is version control.
Version control is about project management, such as keeping track of your work and the history of your work,
and about collaboration, such as working with other developers.
A number of version control software systems are available, but one of the most popular ones is Git, and we'll use that in this course.

Version control systems are enhanced with version control repositories, which are used to send, store, and share code and other work.
We could set up our own Git repository, but for this course, we will use [GitHub][github].

I'll show you the basics of using [Git][git] and GitHub in this course, but for now,
we need to create an account on GitHub, if you don't have one, and download Git on our machines.

#### GitHub

First, create an account on GitHub, if you don't already have an account.
Use a personal email address and not your university email (since it's temporary) when setting up the account:

- Create an account on [GitHub][github]

#### Install Git on Windows

For Windows users, I advise you follow the instructions in this video and on this page:

- [Git on Windows][git_windows]: Do not proceed after the 1 minute and 50 second mark

#### Install Git on macOS

Follow the instructions in the macOS section on [Installing on macOS][git_install].

### *Gitting* Started

#### Git Configuration

Once Git is downloaded, we need to configure our system to use it.
We do that by giving Git our name, GitHub username, and email address plus some other details.
Here we need to be sure to use the same email address that we used to create our accounts on GitHub.

To get started, open a command shell or terminal on your computer
(e.g., CMD.exe or PowerShell on Windows or Terminal.app on macOS) and run the following command.
Note the quotes around the name but not around the **github_username** or email address.
Use YOUR NAME AND YOUR EMAIL ADDRESS.

```
git config --global user.name "Your Name"
git config --global user.name github_username
git config --global user.email youremail@example.com
```

Next, we configure Git to use **main** as our default branch name.
If you are using VS Code, then the second command instructs Git to use it as your default text editor.
Run these two commands as-is, but if you are using a different text editor, then be sure to lookup the appropriate command for that editor:

```
git config --global init.defaultBranch main
git config --global core.editor "code --wait"
```

We can verify the above settings with the following command:

```
git config --list
```

For additional details, see the Git documentation on getting started:

- [Getting Started - First-Time Git Setup][gitstarted]

We'll soon begin to use Git and GitHub when we start coding our websites.
Next, we need to understand some basic concepts with Git and GitHub.

### Git Basics

#### Repos

The first Git concept to learn is the repository concept.
Git uses two kinds of repositories:

- local repository (repo)
- remote repository (repo)

The local repo is a project directory (or folder) on your computer.
I will use the term directory and not folder since the former term is more commonly used in tech fields.
The project directory contains all the project files and any sub-directories for the project.

The remote repo is where we send, retrieve, or sync the files and directories that are contained in the local repo.
We can retrieve projects from other repos that other people or organizations have created, if those repos are public.

With Git and GitHub, we can start a project on the local system (i.e., our computers)
or start a project by creating a remote repo on GitHub and then copying it to our local system.

### Branches

The second Git concept to learn is:

- branches

When you configure a directory on your local system to become a Git project, you create a default branch for your project.
For small projects, we might only work in the default branch.
The default branch will be named **main**.

However, since Git is a version control system,
we can create additional branches to test or work on different components of our projects without messing with the main branch.
For large or complex projects, we would work and switch among different branches.
A large project might be a big website, an software application, or even an operating systems.
Working in non-main branches (e.g., a testing branch),
allows us to develop components of our project without interfering with the main branch, which might be at a stable version of our project. And then when we are ready, we can merge a testing branch with our main branch,
or we can delete the testing branch if we don't want to use it.

We will primarily work with the default, main branch with our projects,
but you should read the [Git documentation on branches][git_branches].

Important note: If we create a new repository on our local machines using Git, the default branch might be called **master**.
However, if we create a new repository on GitHub, the default branch will be called **main**.

There is a long history of using terms like master and slave in various technologies,
and the technology industry is beginning to come to terms with this and to use more inclusive terms.
You can read more about the reasons here:

- [GitHub to replace 'master' with 'main' starting next month][gitmain]
- [Tech Confronts Its Use of the Labels 'Master' and 'Slave'][gitlabels]

## Conclusion

Going forward, we will use Inkscape to design our websites.
We will use VS Code with Git and GitHub to:

1. Edit and write HTML, CSS, JSON-LD in our local repo.
1. Save the edits and new code.
1. Stage the changes so that Git tracks the new changes.
1. Commit the changes with a meaningful commit message.
1. And push the changes to the remote repo.

For future reference, here's a nice cheat sheet of [Git commands][git_commands].
Most of these commands are to be used from the command line (Windows, macOS, or Linux),
and so if we explore any command line usage of Git, these will be good to have on hand.

[cli]:https://en.wikipedia.org/wiki/Command-line_interface
[culture_wars]:https://en.wikipedia.org/wiki/Command-line_interface
[gimp]:https://www.gimp.org/
[git_branches]:https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell
[git_commands]:https://confluence.atlassian.com/bitbucketserver/basic-git-commands-776639767.html
[git]:https://git-scm.com/
[github]:https://github.com
[git_install]:https://git-scm.com/book/en/v2/Getting-Started-Installing-Git
[gitlabels]:https://www.wired.com/story/tech-confronts-use-labels-master-slave/
[gitmain]:https://www.zdnet.com/article/github-to-replace-master-with-main-starting-next-month/
[gitstarted]:https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup
[git_windows]:https://www.simplilearn.com/tutorials/git-tutorial/git-installation-on-windows
[inkscape]:https://inkscape.org/
[plaintext]:https://en.wikipedia.org/wiki/Plain_text
[vector_graphics]:https://en.wikipedia.org/wiki/Vector_graphics
[vim]:https://www.vim.org/
[vscode]:https://code.visualstudio.com/
[vs_ext]:https://code.visualstudio.com/docs/editor/extension-marketplace
[vs_themes]:https://vscodethemes.com/
[word_processor]:https://en.wikipedia.org/wiki/Word_processor
