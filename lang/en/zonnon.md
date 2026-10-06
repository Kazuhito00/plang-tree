# Zonnon

- Year: 2005
- Designer(s): Jürg Gutknecht
- Paradigm(s): procedural, object-oriented, concurrent
- Family: algol-pascal

## Problem It Aimed to Solve

Zonnon was designed at ETH Zürich, carrying on the lineage of the Oberon family of languages by Niklaus Wirth and Jürg Gutknecht, with the goal of more naturally modeling real-world concurrent and distributed systems. Earlier Oberon-family languages were designed on the assumption of sequential processing and lacked adequate language mechanisms for expressing concurrency and distributed processing. Zonnon introduced the concept of "active objects," providing a unified model in which objects behave as autonomous agents that interact through syntactically controlled dialogues. It also incorporated a composition-oriented approach to inheritance based on aggregation, balancing object orientation with modularity. An implementation running on .NET is provided, and the language is used mainly for academic and educational purposes.

## Features

- Introduces the concept of "active objects," allowing concurrency to be expressed through objects that act as autonomous agents
- Active objects interact safely with one another through syntactically controlled "dialogues"
- Adopts a design that favors aggregation (composition) over inheritance, enabling more flexible code reuse
- Retains the simple, readable syntax and strong static typing inherited from the Oberon family of languages
- An implementation running on .NET is provided, enabling integration with the existing .NET ecosystem
- An experimental language from ETH Zürich, focused primarily on academic and educational use

## Languages It Was Influenced By

- [Oberon](oberon.md)
- [Pascal](pascal.md)


## Languages It Influenced

Its direct influence on later languages appears to be limited.


## Current Status

Zonnon is positioned as a niche language. It has not achieved widespread industrial use, but as a design that develops further the concurrency model of the Oberon family, it continues to be used for academic and educational purposes within the .NET environment.

## Hello World

```
module Hello;
begin
  writeln("Hello, world!")
end Hello.
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/Zonnon)
