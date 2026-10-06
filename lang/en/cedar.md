# Cedar

- Year: 1980
- Designer(s): James H. Morris, Warren Teitelman
- Paradigm(s): procedural, systems, concurrent
- Family: algol-pascal

## Problem It Aimed to Solve

Researchers at Xerox PARC who continued to use Mesa came to feel that its static type system and manual memory management were too cumbersome for an experimental, interactive programming environment. In a workstation environment where people wanted to quickly try out new ideas, having to strictly fix types and worry about freeing memory each time got in the way of productivity. Morris and Teitelman therefore set out to build a language on top of Mesa that incorporated garbage collection, dynamic typing, and enhanced string handling, so that it could be used comfortably within an interactive development environment. The name Cedar comes from the image of a new branch growing on the existing tree that is Mesa.

## Features

- Builds on Mesa's static type system while combining it with elements of garbage collection and dynamic typing
- Designed on the premise of integration with an interactive programming environment (the Cedar/Mesa environment), allowing experimental code changes to be reflected on the spot
- Enhanced string processing and text editing features, making it suited for document processing and user interface development
- Inherited concurrency (process) mechanisms from Mesa, allowing software for multitasking workstations to be written
- Had a strong character as an internal Xerox PARC research project, and was never commercially deployed externally

## Languages It Was Influenced By

- [Mesa](mesa.md)


## Languages It Influenced

- [Java](java.md)


## Current Status

It is historical (a language whose historical role has ended) and is not used today. It is referenced in the history of research on GUI and garbage collection practicality, as an experiment in interactive programming environments at Xerox PARC.

## Hello World

```
DIRECTORY IO;

Hello: PROGRAM IMPORTS IO =
BEGIN
    IO.PutF["Hello, World!\n"];
END.
```

## External Links

No Wikipedia article was found.
