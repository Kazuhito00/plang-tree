# GAMS

- Year: 1978
- Designer(s): Alex Meeraus, Anthony Brooke, David Kendrick
- Paradigm(s): declarative, procedural
- Family: numeric-scientific

## Problem It Aimed to Solve

In the 1970s, the economic modeling division of the World Bank faced the problem that large-scale mathematical optimization models had to be manually rewritten for each solver, a process prone to frequent errors. GAMS separated the mathematical representation of a model from the input format required by any particular solver, allowing models to be written concisely using an algebraic notation built from sets, parameters, variables, and equations. This let economists and researchers formulate and maintain large optimization problems without needing to worry about the input/output specifications of a specific solver. It supports a wide range of optimization problem classes, including linear, nonlinear, and mixed-integer programming.

## Features

- Models are expressed through algebraic building blocks: sets, parameters, variables, and equations
- Separates the model description from solver input/output handling, so the same model can be passed to multiple solvers (CPLEX, CONOPT, and others)
- Supports a wide range of optimization problem classes, including linear programming (LP), nonlinear programming (NLP), and mixed-integer programming (MIP)
- Allows data definitions (set elements and parameter values) to be written separately from the mathematical structure of the model
- Provides declarative syntax and reporting features that keep large-scale models manageable

## Languages It Was Influenced By

No direct linguistic ancestors have been identified.


## Languages It Influenced

Its direct influence on later languages appears to be limited.


## Current Status

GAMS remains an actively used language, widely applied today in economics, energy policy, agriculture, supply chain, and other fields requiring mathematical optimization modeling. It continues to be developed and maintained as a commercial product by GAMS Development Corporation.

## Hello World

```gams
display "Hello, World!";
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/General_Algebraic_Modeling_System)
