# Blockly

- Year: 2012
- Designer(s): Neil Fraser, Ellen Spertus
- Paradigm(s): visual, event-driven
- Family: educational-visual

## Problem It Aimed to Solve

For people with no programming experience, and for children, text-based languages present syntax errors as a major barrier. Blockly sought to remove this barrier by letting programs be built simply by combining blocks like puzzle pieces, making it impossible to create a syntactically invalid state in the first place. Furthermore, rather than remaining just a language for learning, it was designed as a library not tied to any specific execution environment, capable of converting the generated block structures into source code for multiple real programming languages such as JavaScript, Python, PHP, and Lua. The aim was to provide it as a reusable component that could be embedded broadly, from educational tools to commercial no-code/low-code products.

## Features

- The shapes of the blocks (interlocking notches and tabs) visually restrict which combinations can be connected, making it physically impossible to build a syntactically invalid program
- Provided not as a standalone programming language but as a JavaScript library that can be embedded into web applications
- Can generate source code in multiple target languages (JavaScript, Python, PHP, Dart, etc.) from the same block structure
- Blocks correspond to common programming concepts such as conditionals, loops, variables, and function definitions
- Made by Google, and widely reused across both education and industry as the implementation foundation for block editors like App Inventor and Scratch-style tools

## Languages It Was Influenced By

- [Scratch](scratch.md)


## Languages It Influenced

Its direct influence on later languages appears to be limited.


## Current Status

It is actively and widely used today. Beyond serving as introductory programming teaching material in educational settings, it is increasingly adopted as the internal engine of IoT device configuration tools and no-code platforms.

## Hello World

Since Blockly itself is a library built through visual block manipulation, an example of the generated JavaScript code is shown instead. Connecting a "display a string" block to a "Hello, World!" block generates code such as the following.

```javascript
alert('Hello, World!');
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/Blockly)
