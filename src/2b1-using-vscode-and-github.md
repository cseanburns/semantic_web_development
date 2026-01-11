# Using VS Code and GitHub

## Introduction

Developing a project means managing a project, which includes its source code and its documentation.
To manage our project, we will use Git and GitHub with the Visual Studio Code (VS Code) editor.
The process is fairly straightforward, and the steps are clearly outlined in 
[Introduction to Git in VS Code][git_vscode].
However, since we have already begun our project by creating a folder and an `index.html` file on our local machine,
some additional setup guidance is necessary.
We will use Git entirely through VS Code and not the command line.

## Install Git

Per the VS Code documentation, you need to install `git` on your computer first.
To install `git`, visit the [Git Downloads][git_downloads] page and select your operating system.
The instructions vary by operating system.
If you are using Linux, I will assume `git` is already installed on your system or you know how to install it.
If you are using Windows, the process should be fairly straightforward for standard `.exe` files.
However, if you are using macOS, then you should install `brew` first.

### Install Homebrew (`brew`) and `git` on macOS

To install Homebrew on macOS, visit the [Homebrew][homebrew] page and follow the instructions listed there.
You will need to open your macOS Terminal.app, then copy and paste the command presented on the Homebrew page:

```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

And you should be good to go!
Please read through the documentation to learn more.
(Always read through the documentation.)

Now to use Homebrew to install `git`, run this command in your Terminal.app:

```
brew install git
```

### Create GitHub Account

Once `git` is installed, visit [GitHub][github_github] and create an account if you don't already have one.
Be sure to use your personal email and not your university or other non-permanent email, since you won't always have those accounts.

## Local and Remote Repositories

Before we proceed, you should understand two main concepts:

- Local repository (repo)
- Remote repository (repo)

The project folder on your personal computer will function as your **local repo**.
The content in the project folder (your files and directories) will be sent to a GitHub repository.
This GitHub repository will function as your **remote repo**.
The main goal is to keep these two repos in sync with each other, such that the work you do in one repo will get sent to the other repo.

### Local to Remote

Most of the time you should be working on your local machine.
So let's say that you edit your `index.html` file using VS Code on your personal computer.
Once you have completed your editing work, you want to do the following things to sync it to your remote repo (i.e., to GitHub):

- `stage` the file: this tells `git` to take notice of this file
- `commit` the file: this tells `git` to record the changes in your local repository
    - `commit` message: add a descriptive message when committing&mdash;this is helpful for version control and collaboration
- `push` the file: this updates the remote repository with the committed changes

### Remote to Local

It's possible to edit and create files and directories on your remote repo (i.e., GitHub).
I don't suggest doing this because it means using GitHub's web text editor.
Although it's a decent online editor, it's not as powerful as VS Code.
But if you do edit the remote repo through the browser, then you will want to sync any changes to your local repo.
Those GitHub edits are already committed on the remote, so in VS Code you only need to `pull`
or **Sync Changes** to bring them down to your local repo.

## *Gitting* Started

Now that you understand the basics of syncing repos, we'll proceed to using Git and GitHub with VS Code.
All Git actions in this course happen through the VS Code Source Control view.

Again I'm mainly following the steps outlined at [Introduction to Git in VS Code][git_vscode].

Now that we have `git` installed on our systems, open VS Code and access the Accounts menu.
You will want to sign into GitHub in VS Code.

Since we've already created a local folder to work with, which should have our `index.html` file, we need to turn that local folder into a local repo.
We do that by initializing the folder.
In VS Code, see the instructions at [Initialize a repository in a local folder][git_init_vscode].
In short, the steps are to:

1. Open your project folder in VS Code
2. Go to the **Source Control** view and select **Initialize Repository**
3. Add a descriptive `commit` message and then press **Commit**
4. Press **Yes** to stage your commit
5. Then click **Publish Branch** and sign in to authenticate with GitHub.
6. Then select **Publish to GitHub public repository ...**.
    - We need this to be public for later work
7. Open on GitHub to view your uploaded repo!

### Remote Sync

I highly encourage you to only work in VS Code and not edit files or create directories directly on GitHub.
But if you do, then from your local machine, you will need to `pull` or use **Sync Changes** in VS Code
to sync the commits you made on GitHub to your local repo.


[git_downloads]:https://git-scm.com/downloads
[git_init_vscode]:https://code.visualstudio.com/docs/sourcecontrol/intro-to-git#_initialize-a-repository-in-a-local-folder
[git_vscode]:https://code.visualstudio.com/docs/sourcecontrol/intro-to-git
[homebrew]:https://brew.sh/
[github_github]:https://github.com/
