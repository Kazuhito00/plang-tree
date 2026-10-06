# NewtonScript

- Year: 1993
- Designer(s): Walter Smith
- Paradigm(s): object-oriented, scripting, event-driven
- Family: smalltalk-oop

## Problem It Aimed to Solve

NewtonScript was designed by Walter Smith and his team to run on personal digital assistants with severe memory constraints, such as the Apple Newton, whose RAM at the time was a mere 128KB or so. Conventional languages like C++ could not cope with the Newton's limited resources, so a new language was needed—one that drew on prototype-based languages such as Self and Dylan while incorporating its own mechanism of "differential inheritance." Differential inheritance dramatically reduced memory usage, for example by storing GUI object templates in ROM without needing to copy default data into RAM. Mainstream use ended with the discontinuation of the Newton project in 1998, but its prototype-based design philosophy is said to have influenced later languages such as JavaScript and Io.

## Features

- Adopts prototype-based object orientation, in which objects directly use other objects as templates, with no notion of classes
- "Differential inheritance" minimizes memory usage by storing only the differences from a template object
- GUI object templates are stored in ROM, with a design that avoids copying default data into RAM, optimizing it for embedded environments
- Has an event-driven programming model closely integrated with the Newton's pen-based interface
- Dynamically typed with garbage collection, enabling flexible development even on limited hardware
- Designed specifically for a particular hardware platform, the Apple Newton

## Languages It Was Influenced By

- [Self](self.md)
- [Dylan](dylan.md)


## Languages It Influenced

Its direct influence on later languages appears to be limited.


## Current Status

NewtonScript is positioned as a language that has finished playing its historical role. Mainstream use ended with the discontinuation of the Apple Newton project in 1998, but its prototype-based inheritance model is said to have left a conceptual influence on the design of later languages such as JavaScript and Io.

## Hello World

```
GetRoot():Notify(kNotifyAlert, nil, "Hello, world!");
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/NewtonScript)
