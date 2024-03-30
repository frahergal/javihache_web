---
layout: post
title: 🔀 Identifying errors with git bisect
---

Imagine that you are working on a project and one day you realise that a feature is no longer working. The logs don't give a hint about where the problem is. There are so many lines of code for that feature that you would spend years to debug it. It's also impossible to identify the error by running tests. But there is an important detail, you know that in the previous release that feature was working fine. What would you do to identify the problematic code?

![Git bisect card displaying the sentence "Git bisect" and git logo]({{site.baseurl}}/assets/images/git_bisect/git_bisect_card.png)


You could provide several answers to this question but today we are going to talk about a git operation that will help you to solve this issue: `git bisect`

Using the command `git bisect` we will be able to identify the exact commit that introduced the error in our software. Under the hood, `git bisect` will do a binary search taking as a starting point a good version and a failing version.

As a small practical exercise [I’ve created a Github repository](https://github.com/frahergal/git_bisect_exercise){:target="_blank"} to follow the next steps if you want to try `git bisect` by yourself. Don’t worry, you only need a terminal as the project contains just a script that prints if it’s working or it’s failing. That way we will simulate something like a real case scenario as I wrote at the beginning. Let’s do it!

## 🔎 Identifying a good and a bad version

The first step is to identify a version that worked properly and a version that was failing. You can choose a `tag` or a `commit` . In our case we will take as a good version the tag `v1.0` and as a bad version the latest commit of the repository.

```bash
# Start the git bisect operation
$ git bisect start

# Identify the current commit as bad
$ git bisect bad

# Identify a good commit/tag
$ git bisect good v1.0
Bisecting: 216 revisions left to test after this (roughly 8 steps)
[586fea2a8501e40abf969e506e7ea4c8f28900ec] changing code
```

With these three commands we will start the `git bisect` process.

## 💫 Applying the binary search

Once we have established the good and bad versions, git will start applying the binary search. It will automatically `checkout` some commits and we will identify if on that version the functionality was working or not with the commands `git bisect good` and `git bisect bad` .

For our testing project, we will execute the script to identify if the software is working properly. If you don’t trust my script 😅 you can also use `cat` to print its content and check if it will print OK or ERROR. On a real project this process can be much more complex and time consuming. This is one of the main reasons to take into account when considering to use this tool or not.

```bash
# Executing the script to know if it's failing or not
$ ./tiny_programme.sh
ERROR!

# Identifying the current commit as bad, as the software is failing
# Git will checkout automatically another commit
$ git bisect bad
Bisecting: 108 revisions left to test after this (roughly 7 steps)
[1412fea7e93f55fd27e70e9537ff3fca4b82cc0a] changing code

# Repeat the process till it'll finish
$ ./tiny_programme.sh
Everything is OK!

$ git bisect good
Bisecting: 54 revisions left to test after this (roughly 6 steps)
[11d02a44c41a71d60a91951ad179c8365e019d4c] changing code

$ ./tiny_programme.sh
Everything is OK!

$ git bisect good
Bisecting: 27 revisions left to test after this (roughly 5 steps)
[7b758a0f8729f7ff79f6be064f65950b1ad005d3] changing code

$ ./tiny_programme.sh
ERROR!

$ git bisect bad
Bisecting: 13 revisions left to test after this (roughly 4 steps)
[e011c5ca32f762356e5c6033a411af7f0bcc35f3] changing code

$ ./tiny_programme.sh
Everything is OK!

$ git bisect good
Bisecting: 6 revisions left to test after this (roughly 3 steps)
[cb5eaa99f80e2d40afad50a3035d34fe4f0ff3c5] changing code

$ ./tiny_programme.sh
Everything is OK!

$ git bisect good
Bisecting: 3 revisions left to test after this (roughly 2 steps)
[7889f7076a368fb39309942c1d33f159bc66678e] changing code

$ ./tiny_programme.sh
ERROR!

$ git bisect bad
Bisecting: 0 revisions left to test after this (roughly 1 step)
[ff54cc290176edcd4cd07a0a1ff079edb3ecc2a9] changing code

$ ./tiny_programme.sh
Everything is OK!

$ git bisect good
7889f7076a368fb39309942c1d33f159bc66678e is the first bad commit
commit 7889f7076a368fb39309942c1d33f159bc66678e
Author: Author: Javi Hache <javihache@users.noreply.github.com>
Date:   Sat Jan 29 12:39:54 2022 +0100

    changing code

:000000 100644 0000000000000000000000000000000000000000 e69de29bb2d1d6434b8b29ae775ad8c2e48c5391 A      test.txt
:100644 100644 a4e9b6240098bceb84fad5a7954e83208810e905 7b2d74f600e4b72312f12525a0e4abbb9cf5ecae M      tiny_programme.sh
```

As you can see, `git` will identify the commit that introduced the error in our software. From there we can check the diffs and know why the functionality stopped working. During all the process we also receive feedback about how many steps are remaining with the messages `Bisecting: 3 revisions left to test after this (roughly 2 steps)` 

To end `git bisect` we need to write the command `git bisect reset` and that way our HEAD will point to the commit we were before executing this tool.

```bash
$ git bisect reset
Previous HEAD position was ff54cc2 changing code
Switched to branch 'main'
Your branch is up to date with 'origin/main'.
```