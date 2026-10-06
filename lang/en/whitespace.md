# Whitespace

- Year: 2003
- Designer(s): Edwin Brady, Chris Morris
- Paradigm(s): esoteric, stack-based
- Family: esoteric

## Problem It Aimed to Solve

Whitespace was created out of a purely joking idea: "wouldn't it be fun if a program's meaningful code could be made up entirely of invisible characters — spaces, tabs, and newlines?" It was released, fittingly, on April Fools' Day, and its purpose was less about solving any practical problem than about inverting the common assumption of existing programming languages that only visible characters count as code. Part of the idea also envisioned a mischievous use case: embedding a separate program, invisible to the eye, within the source code of another language, appearing as nothing but blank space.

## Features

- Its tokens are only three kinds — space, tab, and newline — and every other character is ignored (and can be treated as a comment)
- It looks like an "empty file" containing nothing but blank space, but it is in fact an executable program
- A stack-based virtual machine, in which stack operations, arithmetic, heap access, and flow control are all expressed as sequences of whitespace characters
- A Whitespace program can be hidden inside the source code of another language, tucked into the gaps between visible characters
- It is effectively unreadable in a text editor, and cannot be edited or verified without dedicated tools

## Languages It Was Influenced By

No direct linguistic ancestors have been identified.


## Languages It Influenced

Its direct influence on later languages appears to be limited.


## Current Status

It is positioned as an esoteric language and is not used for practical purposes. Because of the strong impact of "invisible code," it is still frequently cited today in articles introducing esoteric languages, or simply as a joke.

## Hello World

Whitespace source code is actually composed only of spaces, tabs, and newlines, and is invisible as-is. Following the conventional notation used in reference material, the example below represents space as `S`, tab as `T`, and newline as `L`, showing the standard program that prints "Hello, world!" (in the actual file, these characters appear as literal whitespace).

```
S S S T S S T S S S L T L S S
S S S T T S S T S T L T L S S
S S S T T S T T S S L T L S S
S S S T T S T T S S L T L S S
S S S T T S T T T T L T L S S
S S S T S T T S S L T L S S
S S S T S S S S S L T L S S
S S S T T T S T T T L T L S S
S S S T T S T T T T L T L S S
S S S T T T S S T S L T L S S
S S S T T S T T S S L T L S S
S S S T T S S T S S L T L S S
S S S T S S S S T L T L S S
L L L
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/Whitespace_%28programming_language%29)
