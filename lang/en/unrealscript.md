# UnrealScript

- Year: 1998
- Designer(s): Tim Sweeney
- Paradigm(s): object-oriented, event-driven, scripting
- Family: scripting

## Problem It Aimed to Solve

There was a demand to be able to develop and iterate quickly on the parts of the Unreal Engine that changed frequently — game logic, AI, and UI — without having to rebuild the engine itself in C++. UnrealScript aimed to allow game code to be written at a higher level and more quickly than in C++, by providing game-development-specific features at the language level, such as object orientation, garbage collection, state machines, and latent functions. The architectural decision to separate the engine from game logic also lay behind the origin of this language.

## Features

- A class-based object-oriented language that allows class hierarchies corresponding to the Unreal Engine's actors and components to be written directly
- Network replication (multiplayer synchronization) features built into the language specification
- Has state machines via `state` as a language feature, allowing the switching of behavior for characters and game objects to be expressed naturally
- `latent` functions allow processing that spans multiple frames (waiting or delayed execution) to be written in a coroutine-like style
- Includes garbage collection, reducing the memory-management burden compared to C++

## Languages It Was Influenced By

- [Java](java.md)
- [C++](c_plus_plus.md)


## Languages It Influenced

Its direct influence on later languages appears to be limited.


## Current Status

UnrealScript is treated as legacy. From Unreal Engine 4 onward it was replaced by C++ and the visual scripting system Blueprint, and UnrealScript itself has already been discontinued, though it remains as a legacy asset in games and mods from the Unreal Engine 3 generation.

## Hello World

A typical example of writing a message to the Unreal Engine's logging system.

```unrealscript
class HelloWorld extends Actor;

event PreBeginPlay()
{
    `log("Hello, World!");
}
```

## External Links

No Wikipedia article was found.
