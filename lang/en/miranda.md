# Miranda

- Year: 1985
- Designer(s): David Turner
- Paradigm(s): functional
- Family: ml-functional

## Problem It Aimed to Solve

Through the 1970s and 80s, David Turner had developed lazily-evaluated functional languages such as SASL and KRC for research purposes, but these remained experimental implementations. The motivation behind Miranda was to offer pure functional programming and lazy evaluation—a mathematically clean paradigm—as a robust, high-quality commercial implementation that could hold up outside the research lab. Released by Research Software Ltd. in 1985, Miranda became one of the earliest commercial pure functional languages to combine lazy evaluation, strong static typing, and concise syntax.

## Features

- Defaults to lazy evaluation, making it natural to write processing that requires non-strict evaluation, such as infinite lists
- Has a static type system inherited from Standard ML, yet requires almost no type annotations
- Has concise notation such as list comprehensions, later adopted by many subsequent languages
- Purely functional, composing programs solely from expression evaluation with no side effects
- Being a commercially licensed implementation, it could not be freely modified or redistributed

## Languages It Was Influenced By

- [Standard ML](standard_ml.md)


## Languages It Influenced

- [Haskell](haskell.md)
- [Clean](clean.md)
- [Gofer](gofer.md)


## Current Status

Constrained by its commercial license, Miranda could not achieve wide adoption within the research community, and its historical role ended once Haskell emerged as an alternative. It is not in practical use today, but is remembered as an important transitional language in the history of functional languages.

## Hello World

```
main :: [sys_message]
main = [Stdout "Hello, world!\n"]
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/Miranda_%28programming_language%29)
