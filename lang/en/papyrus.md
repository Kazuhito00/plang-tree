# Papyrus

- Year: 2011
- Designer(s): Bethesda Game Studios
- Paradigm(s): object-oriented, event-driven, scripting
- Family: scripting

## Problem It Aimed to Solve

Bethesda games such as the *The Elder Scrolls* series had for many years used a proprietary, unstructured scripting language to write mods and quest logic, but there were limits to how well this could maintain increasingly complex game logic. Papyrus was introduced starting with Skyrim as a scripting language that adopted modern design based on object orientation and event-driven programming, allowing complex elements such as quests and NPC behavior to be described in a more structured form. The aim was to give the mod-developer community a scripting tool with high maintainability and extensibility.

## Features

- Based on object-oriented thinking, scripts are written associated with individual in-game objects (items, NPCs, quests, and so on)
- Event-driven: script functions are invoked in response to specific in-game events (a conversation ending, an item being picked up, and so on)
- A compiled scripting language, in which source code is compiled to an intermediate language before being executed on the game engine
- A property mechanism links scripts to data in the game editor, a design conscious of integration with mod tools
- Integrated into the Creation Kit (the official mod-development tool) since Skyrim, and used as the standard means of mod development

## Languages It Was Influenced By

No direct linguistic ancestors have been identified.


## Languages It Influenced

Its direct influence on later languages appears to be limited.


## Current Status

It is a niche language used in a specific field. Specialized to the limited domain of mod development for Bethesda games, it continues to be used within that domain as an active language with a currently thriving community.

## Hello World

In Papyrus, the debug function `Debug.Notification` is typically used to display a message on screen.

```papyrus
Scriptname HelloWorld extends ObjectReference

Event OnLoad()
    Debug.Notification("Hello, World!")
EndEvent
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/Papyrus_%28scripting_language%29)
