# AMPL

- Year: 1985
- Designer(s): Robert Fourer, David Gay, Brian Kernighan
- Paradigm(s): declarative, procedural
- Family: numeric-scientific

## Problem It Aimed to Solve

At AT&T Bell Laboratories, there was a need to express large-scale linear and nonlinear optimization problems in a readable notation close to mathematical formulas, while allowing the same model to be passed to multiple different solvers. Existing mathematical programming software depended heavily on solver-specific input formats, making it difficult to separate the model from its data. AMPL addressed this by writing models in syntax close to mathematical notation and separating them from data definitions, improving model reusability and maintainability. It can interface with numerous solvers through the nl file format.

## Features

- Sets, parameters, variables, objective functions, and constraints can be written in syntax close to mathematical notation
- Model definitions and data definitions can be kept in separate files, making it easy to apply the same model to different datasets
- Interfaces with numerous solvers, including CPLEX and Gurobi, through the common nl intermediate representation
- Provides an interactive command-line interface for validating models and checking results interactively
- Supports a wide range of problem classes, including linear programming, nonlinear programming, mixed-integer programming, and network optimization

## Languages It Was Influenced By

- [AWK](awk.md)
- [C](c.md)


## Languages It Influenced

Its direct influence on later languages appears to be limited.


## Current Status

AMPL remains an actively used language, widely applied in large-scale mathematical optimization modeling across industry and academia. It is offered as a commercial product by AMPL Optimization, and its integration with many modern solvers continues to be maintained.

## Hello World

```ampl
print "Hello, World!";
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/AMPL)
