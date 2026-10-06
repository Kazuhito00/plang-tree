# Pkl

- Year: 2024
- Designer(s): Apple Inc. (the Pkl team)
- Paradigm(s): declarative, object-oriented, functional
- Family: domain-specific

## Problem It Aimed to Solve

Static configuration formats such as JSON and YAML ran into fundamental limits as systems grew more complex: they lacked validation capabilities and offered no way to avoid duplication. An alternative approach—embedding configuration as a DSL within a general-purpose programming language—had also been tried, but that tied the configuration to a specific language ecosystem. Apple developed Pkl as a dedicated configuration language that combines programming-language-like features such as classes, functions, and static-type validation with the ability to emit multiple output formats including JSON, YAML, XML, and plist. The goal was to let large-scale application configuration and infrastructure definitions be written in a way that is both safe and reusable.

## Features

- Configuration can be structured using object-oriented constructs such as classes, inheritance, and functions
- A static type system allows values to be validated before execution
- A single Pkl source can generate multiple output formats, including JSON, YAML, XML, and plist
- Built on a declarative notation, while still supporting computation and function definitions for templating and reuse
- A domain-specific language dedicated to configuration authoring, independent of any particular language ecosystem

## Languages It Was Influenced By

No direct linguistic ancestors have been identified.


## Languages It Influenced

Its direct influence on later languages appears to be limited.


## Current Status

Pkl is a language that only appeared in 2024. Apple uses it internally for its own application configuration and infrastructure definitions while also publishing it as open source. As an active language, it is in the process of gaining adoption as a type-safe alternative to JSON/YAML for configuration authoring.

## Hello World

```
name = "Pkl: The Configuration Language"

output {
  text = "Hello, world!"
}
```

## External Links

No Wikipedia article was found.
