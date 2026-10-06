# Prolog

- Year: 1972
- Designer(s): Alain Colmerauer, Robert Kowalski
- Paradigm(s): logic
- Family: logic-declarative

## Problem It Aimed to Solve

In the early 1970s, natural language processing researchers faced a problem: when grammar rules and semantic interpretation rules were written in a procedural language, the description of "how to process things" buried the clarity of the language rules themselves. Alain Colmerauer of France and Robert Kowalski of the United Kingdom wanted to create a language that would directly execute the ideas of formal logic (predicate logic) as a program, so that one only had to write facts and rules about "what is true," and the system would automatically perform the inference. Born from this idea, Prolog became the flagship of a new paradigm, logic programming, operating based on a resolution principle involving backtracking search.

## Features

- A logic programming language that describes knowledge as a collection of facts and rules
- Has a mechanism for declaring "what is true" rather than "how to compute it"
- Derives solutions satisfying conditions through automatic search via backtracking
- Performs pattern matching of variables through unification
- Has been used for many years in AI research such as natural language processing and expert systems

## Languages It Was Influenced By

No direct linguistic ancestors have been identified.


## Languages It Influenced

- [Erlang](erlang.md)
- [Wolfram Language](wolfram_language.md)
- [Datalog](datalog.md)
- [Mercury](mercury.md)
- [Oz](oz.md)
- [GNU Prolog](gnu_prolog.md)
- [Visual Prolog](visual_prolog.md)
- [Curry](curry.md)
- [CUE](cue_lang.md)
- [Shen](shen_lang.md)


## Current Status

Prolog is positioned as a niche language (status: niche), and as the flagship of logic programming it continues to be used in AI and natural language processing research and in some reasoning systems.

## Hello World

```prolog
:- write('Hello, World!'), nl.
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/Prolog)
