# Nix

- Year: 2003
- Designer(s): Eelco Dolstra
- Paradigm(s): functional, declarative
- Family: domain-specific

## Problem It Aimed to Solve

Nix is a purely functional package description language designed to resolve the "dependency hell" that plagues software building and deployment. In conventional package management systems, updating one package would frequently break another, or build results would vary depending on the environment. As doctoral research, Eelco Dolstra conceived of treating a package build as a pure function without side effects, deriving a unique path in a store from the hash value of its inputs (source code and dependent packages). This was meant to simultaneously achieve reproducibility, where the same inputs always yield the same result, and reliability, where different versions of packages can coexist without conflict.

## Features

- A hash value is computed from all inputs to a package build, and the resulting artifact is stored at a unique path of the form `/nix/store/<hash>-<name>`
- Reproducibility, where the same inputs always yield the same output, lies at the core of the language design
- A lazily evaluated, purely functional language that describes packages and system configuration as side-effect-free expressions
- Multiple versions of packages and libraries can coexist without conflict, and switching dependencies can be done atomically
- Also applied to declarative configuration management of an entire OS, as in NixOS, allowing an entire system to be described as "one giant expression"

## Languages It Was Influenced By

- [Haskell](haskell.md)
- [Standard ML](standard_ml.md)


## Languages It Influenced

- [Dhall](dhall.md)


## Current Status

Nix is actively and widely used today. As the core language of the NixOS distribution and the Nix package manager, it retains strong support in communities that prioritize reproducible builds and development environments.

## Hello World

A Nix expression returns a value when evaluated. Using `builtins.trace`, you can print a message while still returning a value.

```nix
builtins.trace "Hello, World!" null
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/Nix_%28package_manager%29)
