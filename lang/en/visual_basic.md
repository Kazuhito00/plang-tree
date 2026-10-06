# Visual Basic (Classic)

- Year: 1991
- Designer(s): Alan Cooper, Microsoft
- Paradigm(s): object-oriented, procedural, event-driven
- Family: scripting

## Problem It Aimed to Solve

In the late 1980s, developing Windows applications required programmers to work directly in C and the Windows API to hand-craft windows and buttons, which set an extremely high bar for programmers without specialized expertise. Alan Cooper had developed a tool called "Tripod" that let developers assemble GUIs simply by placing form components on the screen, and Microsoft sought to combine this with a BASIC language interpreter to realize an environment where anyone could build Windows applications by dragging and dropping. The resulting Visual Basic fused the ease of BASIC with the rapid application development (RAD) made possible by a form designer.

## Features

- A RAD environment in which GUIs are assembled by visually placing buttons, text boxes, and other components onto forms
- Foregrounds event-driven programming, letting developers write procedures directly in response to events such as button clicks
- Plain BASIC-derived syntax that let even beginners develop practical applications in a short time
- Extensibility through the use of COM/ActiveX components
- Also had weaknesses, including a loose type system unsuited to large-scale development and difficulty in structuring code

## Languages It Was Influenced By

- [BASIC](basic.md)
- [QuickBASIC](quickbasic.md)
- [QBasic](qbasic.md)


## Languages It Influenced

- [VBScript](vbscript.md)
- [VB.NET](vb_net.md)
- [Prodel (プロデル)](prodel.md)
- [Xojo](xojo.md)
- [Small Basic](small_basic.md)
- [VBA](vba.md)
- [易语言 (E Language)](yi_yu_yan.md)
- [Rockstar](rockstar_lang.md)


## Current Status

Microsoft ended support in 2008 and encouraged migration to the .NET-based VB.NET. It is now a "legacy" language not used for new development, but its historical significance in supporting Windows application development in the 1990s is substantial, and it still remains as a target for maintaining older business systems.

## Hello World

```vb
Private Sub Form_Load()
    MsgBox "Hello, World!"
End Sub
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/Visual_Basic)
