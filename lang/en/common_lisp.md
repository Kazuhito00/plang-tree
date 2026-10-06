# Common Lisp

- Year: 1984
- Designer(s): A committee (centered on Guy Steele)
- Paradigm(s): functional, object-oriented, symbolic processing
- Family: Lisp/Scheme family

## Problem It Aimed to Solve

From the 1970s through the 1980s, Lisp had splintered into many incompatible dialects such as MacLisp, InterLisp, Zetalisp, and Franz Lisp, and this had become a major problem for program portability and tool sharing. For industry to seriously adopt Lisp in AI development and large-scale software development, it was essential to unify these proliferating dialects into a standardized specification. A committee centered on Guy Steele integrated the good parts of the existing implementations while formulating a comprehensive standard that also included object-oriented features. This unification effort took several years and ultimately culminated in an ANSI standard.

Behind this was also the fact that numerous AI research projects, funded by organizations such as DARPA, had sprung up and were being developed on different processing systems, and the lack of a common foundation was an obstacle to reusing research results and collaborative development.

## Features

- An extremely large and comprehensive language specification that integrates the features of multiple Lisp dialects
- Built-in CLOS (Common Lisp Object System), a powerful and flexible object-oriented system
- Sophisticated error handling and restart mechanisms through its condition system
- Both dynamic and lexical scope can be chosen on a per-variable basis
- Standardized as an ANSI standard, with multiple commercial and open-source implementations
- Designed with a package system for namespace separation and management of large-scale programs in mind
- Its specification was documented in detail through CLtL (Common Lisp the Language), a detailed language reference

## Languages It Was Influenced By

- [Lisp](lisp.md)
- [Scheme](scheme.md)
- [Maclisp](maclisp.md)
- [Interlisp](interlisp.md)


## Languages It Influenced

- [Objective-C](objective_c.md)
- [Clojure](clojure.md)
- [Emacs Lisp](emacs_lisp.md)
- [Dylan](dylan.md)
- [Sather](sather.md)
- [EuLisp](eulisp.md)
- [LFE](lfe.md)
- [Shen](shen_lang.md)


## Current Status

Common Lisp is currently positioned as "niche," but as an industrial standard that unified multiple Lisp dialects, its completeness is high, and as a language with a powerful object system typified by CLOS, it continues to be used by a certain body of users to this day. High-performance implementations such as SBCL continue to be developed, and it remains firmly adopted in specific fields such as financial systems and AI research.

## Hello World

```
(format t "Hello, World!~%")
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/Common_Lisp)
