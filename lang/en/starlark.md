# Starlark

- Year: 2015
- Designer(s): Alan Donovan, Google Bazel team
- Paradigm(s): scripting, procedural, functional, declarative
- Family: scripting

## Problem It Aimed to Solve

Starlark is a language designed for writing BUILD files in Google's build tool, Bazel. Build configurations often become complex, and a simple declarative format alone lacks sufficient expressive power; yet allowing arbitrary shell scripts or general-purpose languages makes build analysis, parallel execution, and cache-validity determination extremely difficult. Starlark adopted a familiar, Python-like syntax while deliberately restricting the language's features, aiming to guarantee that evaluation of build files would be deterministic and could be safely analyzed and executed in parallel.

## Features

- Its syntax is close to a subset of Python, so anyone with Python experience can read and write it almost as-is
- Prohibits global mutable state, external I/O, and non-deterministic operations (such as getting the current time or generating random values) as a matter of language specification
- Evaluation is deterministic, and the fact that the same input always produces the same result supports build reproducibility
- Functions are first-class, but recursion is restricted, making it a design that is unlikely to cause infinite loops
- Used as the description language for Bazel's BUILD and WORKSPACE files, and also adopted by build tools other than Bazel (such as Buck)

## Languages It Was Influenced By

- [Python](python.md)


## Languages It Influenced

Its direct influence on later languages appears to be limited.


## Current Status

It is currently in wide use. It has established itself as the standard language for describing build configurations in large-scale software projects that adopt Bazel.

## Hello World

Starlark has a built-in `print` function and can output strings just as in Python.

```python
print("Hello, World!")
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/Starlark)
