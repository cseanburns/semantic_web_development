# Tools, Setup, and Workflow

## Install Software for Web Development

Web developers, and other programmers, rely on a suite of applications to conduct their work. Thus, in order to learn how to become web developers, we will need learn how to use some of these applications.

To learn to use these applications, we need to install them. Hence, our first task this week is to install the software we need to start web development. For this course, we will use the following tools:

- Text editor
- Vector graphics editor
- Version control software

The tricky part about this week is that I cannot show you how to install this software since the installation process is dependent on the operating system you use. But whether you use Windows, macOS, or Linux (as I do), then you should already know the basics of installing. And fortunately, once these tools are up and running on your systems, then we'll all be in sync and what you'll see on my screen going forward will be what you see on your screen.

### Text Editor

Let's start with the most important application: a text editor. Text editors are the bread and butter for programmers, and there's a long history, and even [funny cultural wars][culture_wars], about text editors. Personally, I use the [Vim][vim] editor, which is a [command line][cli] editor. Vim can be difficult to learn, and we don't have the time to spend on learning how to use an advanced text editor like Vim (even though it's worth it). Therefore, for this course we can use a GUI (graphical user interface) text editor.

We use a text editor, and not a [word processor][word_processor] like Microsoft Word or Google Docs, because when we write any kind of code, the code needs to be saved as [plain text][plaintext] and not as encoded text, which is how word processors save files (e.g., docx versus txt files). While a word processor application will encode text when a file is saved, text editors allow us to control how text is encoded directly in the file, e.g, by using HTML and CSS. Thus text editors are more powerful in that way.

Also, text editors these days offer a number of functions that are designed to help us write better programs. And fortunately, many are free and open source software.

For this course, you can use the free [VS Code][vscode] text editor. You are welcome to use another text editor, especially if you are used to working with one and know how to use it.

Download and install VS Code from:

- [VS Code][vscode]

### Vector Graphics Editor

When we begin a web development project, it is a pretty bad idea to just sit down and start coding a website without first thinking about its architecture, how it looks, its design, what it contains, who the audience is or are, and so forth. The good idea is to start with a plan.

The same is true for any professional, like an architect, who designs anything in this world. Imagine having the money to build your own home and then hiring a builder who goes out and just starts assembling a bunch of lumber and pipes and wires with only a vague idea of what they want to accomplish. That would be foolish as well as a waste of money and time. The same is true for any profession that builds or develops anything. If you want to build a website, then you should start with a plan.

For this course, for now I mainly want you to think about how the website you will build will look on a desktop/laptop browser and also on mobile. We could easily hand draw this, but in some settings, you will want to share your plans with others, and thus it makes more sense to use a drawing tool in order to share native, digital files with your colleagues or customers.

Enter Inkscape, a [vector graphics editor][vector_graphics]. Vector graphics editors are often used to design things like logos because unlike raster-based editors, like Photoshop or Gimp, vector graphics scale to any size and still maintain quality. Adobe Illustrator is a commonly used vector graphics editor, but Inkscape is as advanced as Illustrator and is also free and open source software.

If you have and are comfortable using a vector graphics editor, like Illustrator, you are free to use that, but for this course, I will use and demonstrate Inkscape.

Download and install Inkscape:

- [Inkscape][inkscape]

### Version Control

Finally, one of other most important tools for actual web development (and for any kind of programming) is version control. Version control is about project management, such as keeping track of your work and the history of our work, and collaboration, such as working with other developers. A number of version control software systems are available, but one of the most popular ones is Git, and we'll use that in this course.

Version control systems often require a version control repository, which is used to send, store, and share code and other work. We could set up our own Git repository, but for this course, we will use [GitHub][github].

I'll show you the basics of using [Git][git] and GitHub in this course, but for now, we need to download Git and also create an account on GitHub, if you don't already have one.

First, create an account on GitHub, if you don't already have an account. Use a personal email address and not your university email (since it's temporary) when setting up the account:

- [GitHub][github]

Second, download and install Git per the instructions for your operating system:

[Install Git][git_install]

#### WINDOWS USERS

For Windows users, I advise you follow the instructions in this video and on this page:

[Git on Windows][git_windows]

**NOTE:** Two modifications to the instructions at the above link.

First, in addition to running the following command in the video:

```
git config –global user.name <github_username>
```

Also run the following command. Use the email address that you used to sign up on GitHub with:

```
git config –global user.email <email_address>
```

Second, in the example video above, the narrator uses the branch "master" to push her commit to GitHub. You will not use that. Instead, you will use the branch "main". So your command will look like:

```
git push origin main
```

#### MACOS USERS

Create an account on GitHub, and then follow the instructions in the *macos* section here to [install git][git_install]. After that, follow the instructions in the Windows video above to create repo on GitHub that syncs to a local folder on your computer. Be sure to run the `git config` commands above, too, before creating your local git folder.

### Git, GitHub, and VS Code

Git is a free and open source version control system. It is developed and maintained by a community of software developers, but like the Linux kernel, was original written by Linus Torvalds. Since it's creation in 2005, it has become the most widely used version control system for software development and other kinds of coding work.

The basics of Git are fairly straightforward but can become reasonably complex. It is used for single person or simple projects and multi-person or complex projects. In cases involving multi-person and/or complex projects, Git can be difficult to use (or grasp) because big software projects, with multiple contributors, perhaps from multiple organizations, are complicated and may involve complicated work flows. Our goals for this class are not that ambitious, and so our use of Git will be more straightforward and introductory.

Whether straightforward or complex, it is important to get a handle on the basics of Git. Once you have the basics down, it becomes much easier to use Git in more advanced ways. We'll cover the basics in a moment, and we'll keep practicing the basics throughout the remainder of the course.

It is important to recognize that GitHub is not Git. GitHub is a hosting site for projects that use the Git version control system. It does not, however, merely host (store) code and other text that is managed with Git but adds to Git and integrates Git on its web platform and other projects. There are other hosting and service Git providers, such as [GitLab][gitlab], and self-hosting providers, such as [Gitea][gitea]. Any server, e.g., a Linux one, can also serve as a personal or private hosting site.

VS Code is a text editor developed and maintained by Microsoft, which owns GitHub. Perhaps because of this ownership, as well as the popularity of Git and GitHub, Git and GitHub are integrated into the VS Code text editor. VS Code users can augment the text editor with a variety of community created [extensions][vs_ext] and [themes][vs_themes], and you're welcome to explore these for your personal use. Many other text editors can be augmented in this way. Personally, my main text editor is Vim, which is also highly customizable, but for the purposes of this class, I will use VS Code, which is easier to learn.

## Git Basics

### Repos

The first Git concept to learn is the repository concept. Git uses two kinds of repositories:

- local repository (repo)
- remote repository repo)

The local repo is a project directory (or folder) on your computer. Henceforth I will use the term directory and not folder since the former term is more commonly used in tech fields. The project directory contains all the project files and any sub-directories for the project.

The remote repo is where we send, retrieve, or sync the files and directories that are contained in the local repo. We can also retrieve projects from other repos that other people or organizations have created, if those repos are public.

With Git and GitHub, we can start a project on the local system (i.e., our computers) or start a project by creating a remote repo on GitHub and then copying it to our local system.

### Branches

The second Git concept to learn is:

- branches

When you configure a directory on your local system to become a Git project, you create a default branch for your project. For small projects, we might only work in the default branch. The default branch will either be named main or master.

However, since Git is a version control system, we can create additional branches to test or work on different components of our projects without messing with the main branch. For large or complex projects, we would definitely work and switch among different branches. A large project might be a big website, an software application, or even an operating systems. Working in non-main branches, like a testing branch, allows us to develop components of our project without interfering with the main branch, which might be at a stable version of our project. And then when we are ready, we can merge a testing branch with our main branch, and thus create a new version, or we can delete the testing branch if we don't want to use it.

We will primarily work with the default, main branch with our projects, but you should read the [Git documentation on branches][git_branches].

Important note: If we create a new repository on our local machines using Git, the default branch will be called Master. We will reconfigure this, though. However, if we create a new repository on GitHub, the default branch will be called Main. (Git itself will eventually switch to Main as its default branch name in a future update.)

There is a long history of using terms like master and slave in various technologies, and the technology industry is beginning to come to terms with this and to use more inclusive terms. You can read more about the reasons here:

- [GitHub to replace 'master' with 'main' starting next month][gitmain]
- [Tech Confronts Its Use of the Labels 'Master' and 'Slave'][gitlabels]

## *Gitting* Started

### Git Configuration

Although you have already installed and configured Git on your local machines, I would like to rehash what we have done.

Before using Git to work with local and remote repos, we configure our local operating system to use Git. We do that by giving Git our name and email address plus some other details. Here we need to be sure to use the same email address that we used to create our accounts on GitHub.

To get started, open a command shell or terminal on your computer (e.g., CMD.exe on Windows or Terminal.app on macOS) and run the following command. Note the quotes around the name but not around the email address. Use YOUR NAME AND YOUR EMAIL ADDRESS.

```
git config --global user.name "Your Name"
git config --global user.email youremail@example.com
```

Here are some new configurations to make. First, we can configure Git to use Main as our default branch name and to use VS Code as our default Git editor. Run these two commands as-is, but if you are using a different text editor, then be sure to lookup the appropriate command for that editor:

```
git config --global core.editor "code --wait"
git config --global init.defaultBranch main
```

For additional details, see the Git documentation on getting started:

- [Getting Started - First-Time Git Setup][gitstarted]

### Git Fork and Clone

Once we have configured Git to use our information, we can start coding. To help us begin to work on our websites, I have created a repository that we will all use to start. The remote repo is located on my GitHub account and is called cseanburns/web2023, and it contains a basic website template that you can use for your websites. The default index.html file will be the homepage for our site. (For those of you who took my Linux Systems Administration course, you should know why that file is the default home page.)

You are going to fork that repo to your GitHub account, and then clone the fork to your local system. We only have to do this one time, but this will allow you to use my template for yourselves. Going forward, we will use other Git commands. You can do all of this within VS Code.

As an example, in the steps that follow, I am going to fork and clone the octocat/Spoon-Knife repo. This is an example repo used to teach people how to fork on GitHub. You don't have to fork and clone this repo, but you should use my demo of it fork and clone my cseanburns/web2023 repo.

Be sure to configure Git on your system first, as described above. After that, follow these steps.

Steps to Fork, Clone and then Modify a Repo:

1. Visit the Spoon-Knife repo and copy the URL.
1. In VS Code, click on the Source Control icon and then click: Clone Repository.
1. In the pop box, respond Open to the question, "Would you like to open the cloned repository?"
1. Click on index.html to open and make a change and save.
1. At the bottom of screen, click on the Synchronize icon and at the prompt, click on Ok.
1. Click on the Source Control icon again, and then add Message and click on Commit.
1. At the Stage message, click on Yes to stage commit and commit them directly.
1. Then click on Sync Changes and click Ok to push.

Once you've completed the steps for the cseanburns/web2023 repository, you should have the web2023 repository on your computer. These are the local repos for those remote repos.

Going forward, we will use VS Code to:

1. Edit and write HTML, CSS, JSON-LD in our local repo.
1. Save the edits and new code.
1. Stage the changes so that Git tracks the new changes.
1. Commit the changes with a meaningful commit message.
1. And push the changes to the remote repo.

For future reference, here's a nice cheat sheet of [Git commands][git_commands]. Most of these commands are to be used from the command line (Windows, macOS, or Linux), and so if we explore any command line usage of Git, these will be good to have on hand.

[vim]:https://www.vim.org/
[github]:https://github.com
[git]:https://git-scm.com/
[gitlab]:https://about.gitlab.com/
[gitea]:https://gitea.io/en-us/
[vscode]:https://code.visualstudio.com/
[vs_ext]:https://code.visualstudio.com/docs/editor/extension-marketplace
[vs_themes]:https://vscodethemes.com/
[git_branches]:https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell
[gitmain]:https://www.zdnet.com/article/github-to-replace-master-with-main-starting-next-month/
[gitlabels]:https://www.wired.com/story/tech-confronts-use-labels-master-slave/
[gitstarted]:https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup
[git_commands]:https://confluence.atlassian.com/bitbucketserver/basic-git-commands-776639767.html
[culture_wars]:https://en.wikipedia.org/wiki/Command-line_interface
[cli]:https://en.wikipedia.org/wiki/Command-line_interface
[word_processor]:https://en.wikipedia.org/wiki/Word_processor
[plaintext]:https://en.wikipedia.org/wiki/Plain_text
[vector_graphics]:https://en.wikipedia.org/wiki/Vector_graphics
[inkscape]:https://inkscape.org/
[git_install]:https://git-scm.com/book/en/v2/Getting-Started-Installing-Git
[git_windows]:https://www.simplilearn.com/tutorials/git-tutorial/git-installation-on-windows
