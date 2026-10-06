# Unlambda

- Year: 1999
- Designer(s): David Madore
- Paradigm(s): esoteric, functional
- Family: esoteric

## Problem It Aimed to Solve

Unlambda was created as a thought experiment to show that a program could be written using nothing but pure function composition—that is, SKI combinator calculus—without using any variables at all. True to its name, "un-lambda" strips the "lambda" (variable binding) itself out of the lambda calculus, and the language's aim is to deliberately eliminate the notion, central to functional programming, of naming and handling values, in order to push to the limit just how much computation can be expressed through combinator application alone.

## Features

- Has no variables or named functions whatsoever; a program is built solely from function application via `` ` `` (backquote) together with the basic combinators S, K, I, and so on
- Every computation is expressed as a combination of combinators, and the language has no notion whatsoever of binding by name
- Equipped with a special combinator representing a continuation (a callback-like escape), enabling control beyond simple SKI calculus
- Side effects occur only through an output combinator; everything else is evaluated as pure function application
- Despite an extremely minimal syntax, it is guaranteed, from the standpoint of theoretical computer science, to be Turing complete

## Languages It Was Influenced By

- [Lisp](lisp.md)


## Languages It Influenced

Its direct influence on later languages appears to be limited.


## Current Status

Unlambda is positioned as an esoteric language and is not used for practical purposes. Its theoretical purity as a "variable-free functional language" makes it especially favored, among esoteric languages, by those with an interest in the theory of computation.

## Hello World

The function `.x` (which prints the character x and then returns its argument unchanged) is chained repeatedly with ``` ` ``` (function application), and finally the identity function `i` is supplied as a dummy argument, printing "Hello, world" one character at a time. The newline is printed by `r`.

```
`r``````````.H.e.l.l.o. .w.o.r.l.di
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/Unlambda)
