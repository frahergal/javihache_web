---
layout: post
title: 🌋 Lava Flow Antipattern
---

Today I would like to talk you about the antipattern 🌋 “Lava flow” or “Dead code”. Something that, unfortunately, I have found in some projects where I have been working.

![Lava Flow antipattern card displaying the sentence "Lava Flow Antipattern" and a vulcano]({{site.baseurl}}/assets/images/lava_flow_antipattern/lava_flow_antipattern_card.png)

### 🚩 Reasons

This antipattern appears usually in software that is initially created as a  prototype, an investigation, or as a hackathon project but is later converted into operational software an taken into production.

The reason behind the name “Lava Flow” is simple. Initially the software was developed with poor documentation and trying out several ways to implement a functionality because of a rush or just because the programmers where testing how to do that better. That initial code, in later versions is left there, and whenever someone reviews it or wants to refactor it, it’s too late ⏰. Nobody knows what that code does and if it’s safe to be changed or removed.

The problem is even more noticeable when the people who initially developed that code is no longer working on the project or even at the company. Imagine digging between thousands of lines of poorly documented  spaghetti code. Probably the effort to remove it or to refactor it is much bigger than just leave it there even if it affects your project metrics 📉.

### ✔️ Solutions

 The solution to fix this antipattern could be to document your code from the beginning, even if that project is just a “test”. Who knows if it’s going to be reused for something bigger later? Of course that’s up to you and it won’t avoid the problem 100%, but I think it’s always a good practice to do so.

Once the “Lava Flow” is present in your code, it’s quite complex to remove. However, nowadays there are some tools that help you to make quite complex and complete analysis, to identify dead code, repeated code, and even to suggest some refactors. Of course they are not the a miracle, but it’s something ¯\\(ツ)/¯