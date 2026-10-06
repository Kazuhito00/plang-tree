# Max/MSP

- Year: 1985
- Designer(s): Miller Puckette, David Zicarelli
- Paradigm(s): visual, dataflow, event-driven
- Family: educational-visual

## Problem It Aimed to Solve

There was a need to create an environment in which composers and performers, without any programming expertise, could produce interactive music and multimedia works in real time. Max/MSP aimed to realize audio signal processing and live performance on an ordinary computer without relying on dedicated DSP hardware. Its major distinguishing feature is a visual dataflow approach in which objects are connected by lines, letting musicians assemble complex processing without writing text code.

## Features

- A visual dataflow language in which programs are built by connecting on-screen objects (boxes) with patch cords
- The MSP extension allows real-time audio signal processing to be assembled graphically
- The Jitter extension allows video and graphics processing to be handled within the same environment
- Event-driven message passing allows flexible response processing for MIDI and sensor input
- Continuously developed and maintained as commercial software, and widely used in the production of electronic music and installation art

## Languages It Was Influenced By

No direct linguistic ancestors have been identified.


## Languages It Influenced

- [Pure Data](pure_data.md)


## Current Status

Max/MSP is a language in active use, still widely employed in the production of electronic music, sound art, and interactive media works. It has become one of the standard tools for composers and sound artists.

## Hello World

Since Max/MSP is built as a visual patch rather than text code, a typical "Hello World" is expressed by putting a string into a message box and connecting it to a display object.

```
[message: Hello, World!] --> [print]
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/Max_%28software%29)
