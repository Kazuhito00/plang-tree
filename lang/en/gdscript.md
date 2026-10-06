# GDScript

- Year: 2014
- Designer(s): Juan Linietsky
- Paradigm(s): scripting, object-oriented
- Family: scripting

## Problem It Aimed to Solve

The Godot game engine adopted a unique architecture based on a scene tree and nodes, and simply embedding a general-purpose scripting language as-is would not provide the writability or execution efficiency optimized for that architecture. GDScript was designed as a dedicated language that has readable, simple syntax similar to Python while natively supporting concepts such as Godot's nodes, signals (event notifications), and scenes. Another aim was to make it run more lightly and quickly than embedding a general-purpose Python implementation as-is.

## Features

- Adopts indentation-based, Python-like syntax, making it readable even for beginners
- Has language features (`@onready`, `signal`, `extends`, and others) that directly correspond to Godot concepts such as nodes, the scene tree, and signals
- Optional static typing can be used alongside dynamic typing, balancing performance with development-time flexibility
- Runs as an interpreter deeply integrated into the Godot engine, enabling fast hot reloading and debugging within the editor
- Because it is specialized for game development, node manipulation and animation control can be written more concisely than with a general-purpose scripting language

## Languages It Was Influenced By

- [Python](python.md)
- [Lua](lua.md)


## Languages It Influenced

Its direct influence on later languages appears to be limited.


## Current Status

It is currently in wide use. As the standard scripting language of the open-source Godot game engine, its adoption is expanding, particularly among indie game developers.

## Hello World

The `_ready()` function is a standard Godot lifecycle function that is automatically called when a node is loaded into the scene.

```gdscript
func _ready():
	print("Hello, World!")
```

## External Links

No Wikipedia article was found.
