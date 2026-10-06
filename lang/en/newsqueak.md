# Newsqueak

- Year: 1988
- Designer(s): Rob Pike, Luca Cardelli
- Paradigm(s): concurrent, procedural
- Family: concurrent-actor

## Problem It Aimed to Solve

In the late 1980s, there was a need for a language that could naturally express a graphical user interface interacting simultaneously with multiple input devices such as a mouse and keyboard. Building on Hoare's CSP (Communicating Sequential Processes) theory, Newsqueak's developers treated channels as first-class objects, making them possible to store in variables and pass between functions, allowing concurrency to be expressed more flexibly. Rather than remaining a purely theoretical experiment, the project sought a practical concurrency model for writing actual GUI programs. This design later carried forward into Alef, Limbo, and eventually the Go language's concurrency model.

## Features

- Treats channels as first-class objects, freely assignable to variables and passable as function arguments and return values
- Adopts an inter-process communication model based on CSP theory, allowing multiple concurrent processes to be expressed concisely
- A select-statement-like mechanism makes it natural to write code that waits on input from multiple channels
- Designed with a primary focus on handling multiple input sources in GUI programs
- Integrates concurrency features on top of a C-like procedural syntax base

## Languages It Was Influenced By

- [C](c.md)


## Languages It Influenced

- [Limbo](limbo.md)
- [Alef](alef.md)


## Current Status

Newsqueak is positioned as historical (a language that has finished its historical role). Newsqueak itself was never used in practice, but its channel-based concurrency model has been carried forward into the present day via Alef and Limbo, ultimately arriving in the widely used Go language.

## Hello World

```
prog {
    print("Hello, World!\n");
}
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/Newsqueak)
