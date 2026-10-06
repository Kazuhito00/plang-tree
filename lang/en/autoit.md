# AutoIt

- Year: 1999
- Designer(s): Jonathan Bennett
- Paradigm(s): scripting, procedural
- Family: scripting

## Problem It Aimed to Solve

There was demand to automate GUI application operations and system administration tasks on Windows without requiring specialized programming skills. AutoIt was designed as a scripting language that adopted a plain, BASIC-like syntax to make it accessible even to programming beginners, while also providing a mechanism to directly specify and operate on window titles and controls — allowing anyone to easily automate repetitive tasks and software testing.

## Features

- Can specify GUI elements such as windows, buttons, and text boxes by title or class name, and automate clicks and text entry
- Can write procedural programs in a plain, BASIC-like syntax, with simplified variable declaration and type handling
- Scripts can be compiled into a standalone executable file (.exe) for distribution
- Supports calling COM objects and the Windows API, and can be used as an alternative to Office macros and for advanced system operations
- Supports simulated key operations (equivalent to SendKeys functionality) as a standard feature

## Languages It Was Influenced By

- [BASIC](basic.md)


## Languages It Influenced

- [AutoHotkey](autohotkey.md)


## Current Status

It is widely used and active today. There is persistent demand for it as a tool that even staff without specialized knowledge can use, in the fields of Windows business automation and software testing.

## Hello World

The `MsgBox` function is AutoIt's basic means of output, displaying a message box.

```autoit
MsgBox(0, "Greeting", "Hello, World!")
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/AutoIt)
