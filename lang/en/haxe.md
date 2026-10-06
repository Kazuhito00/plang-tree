# Haxe

- Year: 2005
- Designer(s): Nicolas Cannasse
- Paradigm(s): object-oriented, functional
- Family: c-family

## Problem It Aimed to Solve

In the mid-2000s, web and game development increasingly spanned multiple platforms (Flash, JavaScript, and later C++ and mobile environments), but each required code to be rewritten separately in its own language (ActionScript, JavaScript, and so on), placing a heavy burden of development cost. Nicolas Cannasse sought to resolve this duplicated-development problem by creating a language that could compile a single source into different outputs (SWF bytecode, JavaScript, C++, and more) for multiple targets. The goal was to let game logic and business logic be written once and reused across multiple platforms.

## Features

- A multi-target design that compiles a single source code base to multiple target languages and platforms (JavaScript, C++, Java, C#, Python, and others)
- Static typing with type inference, allowing many mistakes to be caught at compile time
- Modern language features such as generics and enums
- Widely used for cross-platform game development in combination with game frameworks such as OpenFL
- A macro system that allows code generation and transformation at compile time

## Languages It Was Influenced By

- [Java](java.md)
- [ActionScript](actionscript.md)
- [JavaScript](javascript.md)
- [OCaml](ocaml.md)
- [C#](c_sharp.md)


## Languages It Influenced

Its direct influence on later languages appears to be limited.


## Current Status

Haxe continues to be used in cross-platform game development and tool development, but its user base is limited and it is positioned as "niche." The breadth of its output targets, including JavaScript and C++, remains a strength no other language shares.

## Hello World

```
class Main {
    static function main() {
        trace("Hello, World!");
    }
}
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/Haxe)
