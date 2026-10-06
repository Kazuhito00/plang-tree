# MoonScript

- Year: 2011
- Designer(s): Leaf Corcoran
- Paradigm(s): object-oriented, functional, scripting
- Family: scripting

## Problem It Aimed to Solve

MoonScript was developed to address the fact that, while Lua is lightweight and fast, writing things like class definitions and list comprehensions in it tends to become somewhat verbose. Lua was widely used in fields such as game development and embedded scripting, but its basic syntax was somewhat inconvenient for writing modern language features concisely. MoonScript therefore adopted concise, readable syntax similar to CoffeeScript and compiled it into Lua code, aiming to improve development-time productivity while preserving Lua's execution efficiency. It was designed with particular attention to use in game development settings.

## Features

- Adopts concise, indentation-based syntax that reduces Lua's inherently verbose notation (end, then, etc.)
- Has dedicated syntax for class definitions, making it easy to write object-oriented features that would otherwise have to be implemented by hand in Lua
- Has expressive, modern scripting-language features such as list comprehensions and concise anonymous function notation
- Ultimately compiles to Lua source code, so it can be used as-is in any environment where Lua runs (such as game engines)
- Has strong affinity with Lua-based game frameworks such as LÖVE, and is used as a scripting language for game development

## Languages It Was Influenced By

- [CoffeeScript](coffeescript.md)
- [Lua](lua.md)


## Languages It Influenced

Its direct influence on later languages appears to be limited.


## Current Status

It is positioned as niche (a language used in a specific field). It continues to be used steadily within part of the game-development community, but its range of use is limited.

## Hello World

MoonScript uses indentation-based syntax to call Lua's `print` function.

```moonscript
print "Hello, World!"
```

## External Links

No Wikipedia article was found.
