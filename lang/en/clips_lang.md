# CLIPS

- Year: 1985
- Designer(s): Gary Riley
- Paradigm(s): logic, declarative, object-oriented, procedural
- Family: logic-declarative

## Problem It Aimed to Solve

In the mid-1980s, NASA's Johnson Space Center depended on the expensive commercial expert-system tool ART*Inference, which brought problems of cost and dependence on Lisp-specific hardware environments. CLIPS was developed to address this as a low-cost, highly portable, C-based tool for building expert systems. It adopted forward-chaining, rule-based inference inspired by Charles Forgy's OPS5, together with Lisp-like syntax, and object-oriented features were integrated later. Thanks to its high portability — running wherever a general-purpose C compiler is available — it was widely adopted in industry and education, and it influenced many derivative languages, Jess among them.

## Features

- Built around a forward-chaining, rule-based inference engine using Charles Forgy's Rete algorithm
- Adopts a declarative programming style, writing rules and facts in Lisp-like parenthesized syntax
- Later integrated an object-oriented extension called COOL (CLIPS Object-Oriented Language), which also enabled procedural-style code
- Highly portable because it is implemented in C, running on many platforms wherever a general-purpose C compiler is available
- Provided as public-domain software with no dependency on commercial tools, removing any cost barrier
- Used for many years across industry, the military, and education as a proven expert-system shell originating from NASA

## Languages It Was Influenced By

- [Lisp](lisp.md)


## Languages It Influenced

- [Jess](jess_lang.md)


## Current Status

CLIPS holds a niche position, still used today in some industrial, research, and educational settings to build rule-based expert systems. Although it has receded from mainstream development, its portability and proven track record have kept a loyal user base.

## Hello World

```
(printout t "Hello, World!" crlf)
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/CLIPS)
