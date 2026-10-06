# Crowbar

- Year: 2004
- Designer(s): Kazuya Maebashi (前橋和弥)
- Paradigm(s): procedural, scripting
- Family: scripting

## Problem It Aimed to Solve

Japanese programmer Kazuya Maebashi developed Crowbar as an educational sample language for people who want to learn the craft of building their own language processors and interpreters from scratch. It is designed as teaching material that walks learners step by step through building a language implementation—from parsing with yacc and lex, through implementing a tree-walking interpreter, to adding a garbage collector and closures. Its grammar follows C while its dynamic typing gives it Perl-like ease of use. It is purely a learning sample, and it is not intended to be adopted as a practical language or optimized for performance.

## Features

- Uses a parser built with yacc and lex, with the design and implementation explained as teaching material for building a language processor
- Operates as a tree-walking interpreter, executing programs by directly evaluating the syntax tree
- Adopts a C-like grammar while its dynamic typing allows Perl-like, easygoing code
- Includes a mark-and-sweep garbage collector rather than reference counting, doubling as teaching material for memory management
- Designed so that features such as function closures are added incrementally as the teaching progresses

## Languages It Was Influenced By

- [C](c.md)
- [Perl](perl.md)


## Languages It Influenced

- [Diksam](diksam_lang.md)


## Current Status

Crowbar is positioned as a language dedicated to educational use, and it is not intended for practical application development. It continues to be referenced today, including through the book "Building a Programming Language" (プログラミング言語を作る), as introductory teaching material for building one's own language processor in the Japanese-speaking world.

## Hello World

With a C-like grammar, the `print` statement is used to output a string.

```
print("Hello, World!\n");
```

## External Links

No Wikipedia article was found.
