# Git

## Table Of Content

- [Info](#info)
- [Commands](#commands)
- [Update existing code to new repo](#update-existing-code-to-new-repo)


<br>
<br>
<br>

## Info

open git bash
cmd git config --global user.name ABDUL WAHID SYED
git config --global user.email abdulwahid.syed2201@gmail.com

016 git stages
there are 3 stages in local
working directory, staging are , Repository(.git folder)upstream
and only server repo is remote

## Commands

| Command             | Description                                                                                                  |
| ------------------- | ------------------------------------------------------------------------------------------------------------ |
| ls                  | to see list of folders and files                                                                             |
| ls -al              | to see list of folders and files including hidden                                                            |
| mkdir foldername    | create folder                                                                                                |
| rm -rf .git         | to delete file forcefully                                                                                    |
| git init foldername | create git folder                                                                                            |
| git init .          | to initialise git and create version control use this command (. is optional)(basically creates .git folder) |
| touch filename.js   | create a file                                                                                                |
| rm fiename.js       | remove a file                                                                                                |
| git help log        | help                                                                                                         |

---

#### ading, staging, committing

| Command                      | Description                                                                                |
| ---------------------------- | ------------------------------------------------------------------------------------------ |
| git add .                    | to stage all files to commiting                                                            |
| git add filename             | to stage particular file to commiting                                                      |
| git commit -m "some message" | commit                                                                                     |
| git commit                   | to commit with a message of multiple lines                                                 |
| git log                      | to see listing of commits                                                                  |
| git reflog                   | to see listing of commits                                                                  |
| git show                     | show last commit and a dif containing all changes(press q to get out of the command)       |
| git ls-files                 | shows files that are getting tracked                                                       |
| git commit -am "ur message"  | to add changes to staging area and commit with a message(-a is add changes, -m is message) |

---

#### reverting, renaming, deleting after staging, updating

| Command                              | Description                                                                        |
| ------------------------------------ | ---------------------------------------------------------------------------------- |
| git reset HEAD filename.js           | to revert staging changes                                                          |
| git checkout -- filename.js          | to revert this file by deleting code written by us                                 |
| git mv oldfilename.js newfilename.js | to rename a file after staging                                                     |
| mv oldfilename.js to newfilename.js  | to rename file in local(this is bash command not git command)                      |
| git rm filename.js                   | to remove file after committing(be carefull, this will delete the file from local) |
| git add -u                           | to tell git to update a renamed file                                               |
| git add -A                           | to add and update all unlike above line command                                    |

---

#### branches

| Command                       | Description                                                        |
| ----------------------------- | ------------------------------------------------------------------ |
| git branch                    | to see list of available branches                                  |
| git branch -a                 | same as above line, (-a is to show both local and remote branches) |
| git checkout -b newBranchName | create new branch and switch to it                                 |

---

#### git diff updates master

| Command                        | Description                 |
| ------------------------------ | --------------------------- |
| git merge branchname           | merge from a branch         |
| git merge --abort              | to abort the merge          |
| git branch -d branchname       | delete a branch             |
| git fetch origin aRemoteBranch | to fetch from remote branch |
| git fetch -p                   | to fetch branch imp         |

---

### branch rename (only local branch)

| Command                            | Description                                             |
| ---------------------------------- | ------------------------------------------------------- |
| git branch -m main master          | modify main(old branch name) to master(new branch name) |
| git fetch origin                   | fetch is non destructable, it did nothing dont know     |
| git branch -u origin/master master | dont know (-u = --set-)                                 |

---

### stashing

| Command        | Description                        |
| -------------- | ---------------------------------- |
| git stash      | stash the changes                  |
| git stash list | show list of stashes               |
| git stash pop  | apply stash and delete saved stash |

timetravel and reset
|git reset commitId --soft | there are 3 types of resets(soft, hard, mixed)|

---

### github (welcome to github)

| Command                          | Description                                                                             |
| -------------------------------- | --------------------------------------------------------------------------------------- |
| git remote -v                    | to see available repositories                                                           |
| git remote rm origin             | to remove repo (origin is the name(remote reference) that doesnot need explanation ass) |
| git remote add origin url        | to add repo (use origin only once because it remote reference and should be unique)     |
| git push -u origin master --tags |                                                                                         |

---

### ssh

| Command                      | Description                                          |
| ---------------------------- | ---------------------------------------------------- |
| ls .ssh                      | to list ssh directory name                           |
| mkdir .ssh                   | to create ssh directory                              |
| ssh-keygen -t rsa -C "email" | to create ssh key (refer module 47 for more details) |

ssh -T git@github.com

---

### git repository

| Command                        | Description                                                                                                  |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| git clone url                  | copy that url from github                                                                                    |
| git clone url newName          | if u wanna create different folder name instead of the name that is in git                                   |
| rm -rf folderName              | to delete folder                                                                                             |
| git push -u origin master      | origin is remoteReference and master is branchName                                                           |
| git push -u origin otherBranch | ( use -u instead of --set-upstream just a shorthand)                                                         |
| git fetch                      | this goes to github and updates us if there are any changes made in github, and dont forget to git status    |
| git merge                      | this is done after git fetch                                                                                 |
| git pull                       | this is combination of git fetch and git merge and mainly synchronizing remote changes with local repository |

---

### update repository name from master

| Command                           | Description                                                |
| --------------------------------- | ---------------------------------------------------------- |
| git remote set-url origin url     | this updates ouy repo if remote repo is changed or renamed |
| git remote show origin            | this show details about our repo                           |
| git push origin :remoteBranchName | to delete remote branch locally                            |

---

## Update existing code to new repo

    git init
    git add .
    git commit -m "Add existing project files to Git"
    git remote add origin url
    git push -u origin main
