# Pure Data

- Year: 1996
- Designer(s): Miller Puckette
- Paradigm(s): visual, dataflow, event-driven
- Family: educational-visual

## Problem It Aimed to Solve

There was a challenge in redesigning Max, a piece of commercial software, in an open-source, free form that could be extended more freely. Pure Data was created by Miller Puckette himself, who was also the developer of Max/MSP, by reorganizing that architecture. It also had a more ambitious goal: enabling multiple performers in different locations to collaboratively create music together in real time over a network.

## Features

- A visual dataflow language in which objects are connected via patch cords, structurally similar in concept to Max/MSP
- Provided as open source and free of charge, so anyone can freely extend or modify it
- Real-time audio and video signal processing can be assembled as graphical patches
- Has networked communication features, supporting collaborative performances across multiple locations
- Easy to extend via external libraries (externals), allowing custom objects to be implemented in languages such as C and added

## Languages It Was Influenced By

- [Max/MSP](max_msp.md)


## Languages It Influenced

Its direct influence on later languages appears to be limited.


## Current Status

It is an actively used language today, widely employed in electronic music production, media art, and education. Being open source, it is also valued as a foundation for custom extensions by researchers and artists.

## Hello World

Pure Data is also a language built as visual patches: "Hello, World!" is displayed by storing a string in a message box and connecting it to an object for console output.

```
[message: Hello, World!] --> [print]
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/Pure_Data)
