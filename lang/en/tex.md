# TeX

- Year: 1978
- Designer(s): Donald Knuth
- Paradigm(s): macro, declarative
- Family: domain-specific

## Problem It Aimed to Solve

Donald Knuth was deeply dissatisfied that the revised edition of his own book, "The Art of Computer Programming," was published with degraded typesetting quality as a result of the shift from letterpress printing to phototypesetting. In particular, typesetting academic books containing mathematical formulas required a high level of specialized skill, and the general document processing systems of the time could not reproduce that quality.

Knuth therefore set out to design and implement his own typesetting system, one that could rigorously control line spacing, letter spacing, and even mathematical formula layout as algorithms, in order to achieve high-quality typesetting by computer. Development took far longer than originally anticipated, and Knuth himself ended up researching typography theory as a result.

## Features

- Its macro feature allows complex typesetting commands to be defined in a reusable form
- Has advanced features specialized for mathematical typesetting, making it strong for the layout of academic papers and mathematics books
- Achieves beautiful line spacing through line-breaking and page-breaking optimization algorithms (a dynamic-programming-like method that considers an entire paragraph)
- Produces platform-independent output (DVI, later PDF), so typesetting results match across different machines
- Its language specification is fixed so that version numbers converge toward pi, preserving long-term compatibility
- A Turing-complete macro language, meaning general-purpose computation beyond document processing is possible in principle

## Languages It Was Influenced By

No direct linguistic ancestors have been identified.


## Languages It Influenced

Its direct influence on later languages appears to be limited.


## Current Status

TeX is still widely used today in the typesetting of academic papers and mathematics books, and especially in the form of LaTeX it remains the de facto standard for writing papers in fields such as mathematics, physics, and computer science. Despite being designed more than 40 years ago, the fact that it is still actively used today is an unusual case of longevity in the history of programming languages.

## Hello World

```tex
Hello, World!
\bye
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/TeX)
