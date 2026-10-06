# VBA

- Year: 1993
- Designer(s): Microsoft
- Paradigm(s): object-oriented, procedural, event-driven
- Family: jvm-dotnet

## Problem It Aimed to Solve

VBA (Visual Basic for Applications) was created to unify the macro languages that had previously been scattered and incompatible across Microsoft Office products (such as Excel's own macros and WordBasic). Having to relearn a different macro language every time the application changed was inefficient for both developers and users. By embedding a common macro language based on Visual Basic across the entire Office product line, Microsoft made it so that once someone learned it, they could use the same language across multiple applications such as Excel, Word, Access, and PowerPoint. At the same time, importance was placed on being an automation language open to non-engineers as well, so that business users who were not professional programmers could automate routine tasks.

## Features

- Has an object-oriented, procedural syntax based on Visual Basic, allowing direct manipulation of Office products' object models (cells, sheets, documents, etc.)
- An IDE (the Visual Basic Editor) is integrated into Office applications, allowing code to be written, run, and debugged entirely within the application
- Has an event-driven mechanism, allowing code to run in response to events such as a button click or a sheet change
- A macro-recording feature can automatically generate VBA code directly from a user's operations
- Can also interoperate with other applications and ActiveX controls through COM (Component Object Model)

## Languages It Was Influenced By

- [Visual Basic(Classic)](visual_basic.md)
- [QuickBASIC](quickbasic.md)
- [BASIC](basic.md)


## Languages It Influenced

Its direct influence on later languages appears to be limited.


## Current Status

Actively and widely used. It remains overwhelmingly popular today in business automation and macro writing centered on Office products such as Excel, and has spread widely even among non-engineer business users.

## Hello World

In VBA, it is common to output a string by displaying a message box.

```vb
Sub HelloWorld()
    MsgBox "Hello, World!"
End Sub
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/Visual_Basic_for_Applications)
