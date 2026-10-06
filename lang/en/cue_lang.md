# CUE

- Year: 2019
- Designer(s): Marcel van Lohuizen
- Paradigm(s): declarative, logic, query
- Family: domain-specific

## Problem It Aimed to Solve

Google used in-house languages such as GCL and BCL for configuration management in systems like its internal cluster manager, Borg, but these suffered from growing syntactic complexity and difficulty of validation. Drawing on this experience, Marcel van Lohuizen, a Google alumnus, designed CUE as a constraint-based language that treats types and values uniformly, and open-sourced it in 2019. CUE aims to handle multiple use cases — data validation, configuration management, schema definition, and code generation — within a single language. It has seen growing adoption in cloud-native configuration management tools related to Kubernetes, such as Dagger and Timoni.

## Features

- Does not distinguish between types and values, treating both uniformly as "constraints," so schema definitions and concrete configuration values can be written in the same language
- Data validity can be checked through combinations of constraints, letting a single language fill roles similar to JSON Schema or OpenAPI
- Designed as a superset of JSON and YAML, so existing JSON/YAML configuration files can be imported directly
- Multiple constraints or configurations can be safely merged through unification, letting conflicts or duplication in configuration be caught at compile time
- Adopts a declarative evaluation model free of circular references or side effects, so the result of a configuration file does not depend on the order of its inputs
- Increasingly used in cloud-native toolchains, including the generation and validation of Kubernetes manifests

## Languages It Was Influenced By

- [Go](go.md)
- [Prolog](prolog.md)


## Languages It Influenced

Its direct influence on later languages appears to be limited.


## Current Status

CUE is an active language, with growing adoption as a configuration management and data validation language within the cloud-native ecosystem. Backed by its track record originating at Google, its use continues to grow, particularly around Kubernetes-related tools.

## Hello World

CUE is a data definition language, so a statement that simply binds a value to a field is itself a program.

```cue
message: "Hello, world!"
```

## External Links

No Wikipedia article was found.
