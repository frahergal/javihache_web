---
layout: post
title: 🐵 Monkey Patches
---

Do you know what Monkey Patches are? 🐒

You have probably seen them or even implemented a Monkey Patch before, so let's delve into details to know more about this way of introducing hotfixes or patches in our code.

![Monkey Patch card displaying the sentence "Monkey Patch" and a monkey]({{site.baseurl}}/assets/images/monkey_patches/monkey_patches_card.png)

A Monkey Patch is an expression used for such changes that are made during runtime to functionalities that are already defined in our code or in external libraries/components.

This is usually done to modify the logic of your own functionality for some corner cases (example written in Javascript):

```javascript
// Create a class with a defined behaviour
class Monkey {
  constructor(name) {
    this.name = name;
  }

  sayMyName() {
    console.log(this.name);
  }
}

// Create a couple of Monkey instances
let monkeyAndrew = new Monkey("Andrew");
let monkeyRyan = new Monkey("Ryan");

// Monkey Patch the method "sayMyName" for the instance monkeyAndrew
monkeyAndrew.sayMyName = () => {
  console.log(monkeyAndrew.name + " I");
};

// Call to the method "sayMyName"
monkeyAndrew.sayMyName();
monkeyRyan.sayMyName();
```

This will return the following output:

```javascript
Andrew I
Ryan
```

As you can see, we applied a Monkey Patch to the instance `monkeyAndrew` of our Monkey class. That way, this change of behaviour was only applied to that object and not to the rest of Monkey objects.

Monkey patches can also be applied to external libraries or components if the language allows such modifications (example written in Python):

```python
>>> import math

# Print PI
>>> math.pi
3.141592653589793

# Monkey patch PI and print it
>>> math.pi = 3.1
>>> math.pi
3.1
```

This practice can be useful if there is a specific case where you need to change the default behaviour. However, I think is not very recommendable. Introducing a Monkey Patch creates an unexpected logic and it can make error handling and identification much more difficult than it should be.

I see the point of applying Monkey Patches in unit testing. When we are creating stubs we are just basically faking the real call to the method with the result that we need. In any other case, if it's possible is better to extend the class or the module by inheritance or to wrap them adding the functionality you need.
