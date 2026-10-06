# Jsonnet

- Year: 2014
- Designer(s): Dave Cunningham
- Paradigm(s): declarative, functional, object-oriented
- Family: domain-specific

## Problem It Aimed to Solve

Within Google, the JSON/YAML files describing service configurations had grown bloated, producing large numbers of duplicated copies to express subtle differences between environments, which severely degraded maintainability. Jsonnet aimed to extend JSON with programming-language-like features such as variables, functions, inheritance, and mixins, so that configuration files could be generated and reused systematically. A defining characteristic is that it was designed not as a template engine, but as a pure functional language that itself outputs JSON.

## Features

- Output is always valid JSON, and Jsonnet code functions as a template language describing the process of generating it
- Object inheritance (merging objects with `+`) and mixins allow common configuration to be reused while selectively overridden
- Has programming-language-like features such as functions, local variables, and conditional expressions, but adopts a pure functional evaluation model with no side effects
- The concept of "hidden fields" allows intermediate data not meant for the final JSON output to be kept within the configuration file
- Adopted in large-scale configuration management settings such as Kubernetes manifests and CI/CD configuration

## Languages It Was Influenced By

- [Python](python.md)


## Languages It Influenced

Its direct influence on later languages appears to be limited.


## Current Status

It is a niche language used in a specific field. It continues to be used as a tool for reusing and generating complex configuration in the field of cloud infrastructure configuration management, centered around Kubernetes.

## Hello World

A Jsonnet program is itself an expression, and its evaluation result is output directly as JSON.

```jsonnet
{
  message: "Hello, World!"
}
```

## External Links

No Wikipedia article was found.
