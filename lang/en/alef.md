# Alef

- Year: 1992
- Designer(s): Phil Winterbottom
- Paradigm(s): concurrent, procedural, systems
- Family: concurrent-actor

## Problem It Aimed to Solve

In the early 1990s, during the development of the Plan 9 operating system, there was a need to realize the channel-based concurrency model of Newsqueak in a compiled language like C. Alef provided two kinds of concurrent execution units, proc (process) and task (a lightweight unit of execution), and sought to secure execution performance robust enough for practical systems programming. Whereas Newsqueak had an interpreter-like execution environment, Alef aimed for speed usable even as an internal OS component by compiling to native code. However, the lack of garbage collection made memory management cumbersome, and maintaining it across multiple architectures also became difficult.

## Features

- Realizes inter-process communication via channels with the performance of a compiled language
- Provides two units of concurrent execution: proc (process) and task (lightweight thread)
- Based on a procedural syntax close to C
- Has no garbage collection, requiring manual memory management
- Used to write parts of the kernel and userland of the Plan 9 operating system

## Languages It Was Influenced By

- [Newsqueak](newsqueak.md)
- [C](c.md)


## Languages It Influenced

- [Limbo](limbo.md)


## Current Status

It is positioned as historical (a language whose historical role has ended). Due to the lack of garbage collection and portability issues, the language itself was abandoned by Plan 9's third edition, handing its role over to its successor, Limbo.

## Hello World

```
implement main

include "alef.h"

void
main(void)
{
    print("Hello, World!\n");
    exits(0);
}
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/Alef_%28programming_language%29)
