---
layout: post
title: ☕ Java Virtual Threads Specification
---

I recently found out this interesting Java specification - [The Java Virtual Threads](https://openjdk.java.net/jeps/8277131)

![Java Virtual Threads card displaying the sentence "Java Virtual Threads" and a cup of coffee]({{site.baseurl}}/assets/images/java_virtual_threads/java_virtual_threads_card.png)

On of the biggest concerns of threads implementation in Java is that they user a real OS threads whenever we use them in our applications.

OS threads are limited and expensive if you don't manage them well. When building a high concurrence software you will need to create and manage a logic to reuse threads as much as possible, usually using thread pools.

The theory is simple: your application should get one available thread of the pool when it needs it and return it once it finishes its job.

But in practice, well.. The thread pools end up being shared between several modules with different responsibilities. That code starts loosing cohesion and it's more difficult to maintain. And at the end one thread cannot be identified with a single transaction because it will be in charge of very different functionalities during its lifetime.

To mitigate this problem, the Java team has created the Virtual Threads. Java will be in charge behing the curtains to asign and liberate OS resources while you will have the possibility to represent single-resposibility transactions with separated Virtual Threads. No more headaches about optimizing the pool (intially) and no more spaguetti code because of that.

Another great things of this new Thread implementation is that is been integrated into `Thread` API. That way it won't require a big learning curve or it shouldn't have very big side effects if you would like to migrate your code:

```java
// Virtual thread creation using Thread Builder interface
Thread thread = Thread.ofVirtual().name("virtual_thread_1").unstarted(runnable)

// Virtual thread factory
ThreadFactory factory = Thread.ofVirtual().factory();
```

It looks promising, but I'm expecting to try it out as soon as possible to check the potential of this thread implementation. Let's keep an eye on it!
