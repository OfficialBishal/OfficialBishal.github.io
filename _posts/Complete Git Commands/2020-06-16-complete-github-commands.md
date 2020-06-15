---
title: Complete Git Commands
date: 2020-06-16 02:03:47 +07:00
tags: [Github, Terminal]
description: All the git commands that you need to know.
---
```
$ git --version
$ git status
$ git initial $
```
```
$ git add -A            # stage All
$ git add .             # stage new and modified, without deleted
$ git add -u            # stage modified and deleted, without new
```
```
$ git commit -m “Version 1”
$ git log
```
```
$ git clone ___             # makes folder inside
$ git clone ___ .			# makes the folder reprosotory
```
```
touch .gitignore
```
```
# Branching
$ git branch
$ git branch login-system
$ git checkout login-system		 # switch to login-system
$ git push origin login-system
$ git checkout master
$ git merge login-system
```
```
Deleting A Local/Remote Branch
Local:
$ git branch -d login-system
Remote:
$ git push origin —delete login-system
```
```
$ git config —global user.name “name_here”
$ git config —global user.email “email_here”
```
```
$ git remote add origin __(GitHub repo link)____
$ git push -u origin master
$ git pull origin master
```
```
$ git diff utils.txt
$ git diff —staged utils.txt
```
```
# Restore commit files
$ git reset utils.txt
$ git checkout utils.txt
```
```
# Generating SSH Key
$ ssh-keygen -t rsa -b 4096 -C "your_email@example.com"

# Adding ssh key to SSH agent
$ eval $(ssh-agent -s)
$ ssh-add ~/.ssh/

# Copying ssh key
$ clip < ~/.ssh/id_rsa.pub
```
