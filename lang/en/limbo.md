# Limbo

- Year: 1995
- Designer(s): Sean Dorward, Phil Winterbottom, Rob Pike
- Paradigm(s): concurrent, procedural, systems
- Family: concurrent-actor

## Problem It Aimed to Solve

In the mid-1990s, a language was needed that could describe distributed systems over a network safely and concisely for "Inferno," a distributed operating system intended to run on embedded devices. Limbo carried forward Alef's channel-based concurrency model while running on a garbage-collected virtual machine (Dis), aiming to achieve both portability and memory safety. It also aimed to resolve the cumbersome memory management and the difficulty of porting to multiple architectures that had plagued Alef. The overarching goal was to be able to write system software that runs safely across heterogeneous networked environments.

## Features

- Concurrency can be described safely and concisely through inter-process communication over channels
- Runs on the Dis virtual machine, achieving high portability through bytecode
- Has garbage collection, resolving the cumbersome memory management that was an issue in Alef
- Has a module system, allowing dynamic loading and type-safe interface definitions
- Designed for embedded and distributed systems, with an emphasis on network transparency

## Languages It Was Influenced By

- [Alef](alef.md)
- [Newsqueak](newsqueak.md)
- [C](c.md)
- [Pascal](pascal.md)


## Languages It Influenced

Its direct influence on later languages appears to be limited.


## Current Status

It is positioned as niche (a language used in a specific field). It continues to be used alongside Inferno OS in some embedded and research applications, but has not achieved widespread adoption.

## Hello World

```
implement Hello;

include "sys.m";
    sys: Sys;
include "draw.m";

Hello: module {
    init: fn(nil: ref Draw->Context, nil: list of string);
};

init(nil: ref Draw->Context, nil: list of string)
{
    sys = load Sys Sys->PATH;
    sys->print("Hello, World!\n");
}
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/Limbo_%28programming_language%29)
