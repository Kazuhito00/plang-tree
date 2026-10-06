# VBScript

- Year: 1996
- Designer(s): Microsoft
- Paradigm(s): scripting, procedural
- Family: scripting

## Problem It Aimed to Solve

In the mid-1990s, as Netscape's JavaScript began bringing dynamic behavior to web pages, Microsoft was also pressed to equip its Internet Explorer with similar scripting capability. However, Microsoft already had a huge community of developers, both internal and external, working with Visual Basic. Rather than having them learn a new syntax from scratch, it was more rational to let them use the familiar BASIC-family syntax directly in the browser. VBScript was thus created by rebuilding Visual Basic's language assets as a lightweight interpreted language, intended for automating web pages and Windows administrative tasks.

## Features

- A plain, BASIC-family syntax resembling Visual Basic
- Allowed embedded client-side processing to be written into HTML pages within Internet Explorer
- Also used as an automation scripting language for OS administrative tasks via Windows Script Host (WSH)
- A simple data model centered on loosely typed variant variables
- Easy integration with ActiveX objects, which allowed it to be used for Office-macro-like purposes as well
- Later regarded as a security risk because of its OS operation features, which were prone to abuse

## Languages It Was Influenced By

- [Visual Basic(Classic)](visual_basic.md)


## Languages It Influenced

Its direct influence on later languages appears to be limited.


## Current Status

With the end of Internet Explorer and security concerns (its abuse as a vector for malware), Microsoft itself deprecated it, and it is no longer used in new development — a "legacy" language. It survives only as a legacy in some old Windows business systems and automation scripts.

## Hello World

```
MsgBox "Hello, World!"
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/VBScript)
