# OpenSCAD

- Year: 2010
- Designer(s): Clifford Wolf, Marius Kintel
- Paradigm(s): declarative, functional
- Family: domain-specific

## Problem It Aimed to Solve

When creating solid models for 3D printers or machine tools, interactive CAD tools operated by mouse made it difficult to rebuild a model from scratch or track a change history even for a slight change in dimensions. OpenSCAD aimed to make parameter changes, version control, and reuse easier by describing solid models as script code, allowing precise, reproducible 3D design in a programmer-like manner.

## Features

- Generates basic shapes (primitives) such as cubes, spheres, and cylinders as function calls, combining them to create complex forms
- Builds models through set operations (CSG: Constructive Solid Geometry) such as union, difference, and intersection
- Because models are described as procedural code, they pair well with parameterization via variables and with version control systems such as Git
- Adopts a programmer-oriented operating model in which the model is checked by writing and re-evaluating (rendering) code, rather than by direct GUI editing
- Has functional-language-like properties, with no reassignment to variables; model definitions are recomputed on every evaluation

## Languages It Was Influenced By

- [Haskell](haskell.md)


## Languages It Influenced

Its direct influence on later languages appears to be limited.


## Current Status

OpenSCAD is a niche language used in a specific field. It enjoys persistent support as a parametric model-design tool, mainly within the 3D printing enthusiast and maker-movement communities.

## Hello World

OpenSCAD has no concept equivalent to standard output, so the example below instead shows a string printed to the console using an `echo` statement.

```openscad
echo("Hello, World!");
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/OpenSCAD)
