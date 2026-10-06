# Gren

- Year: 2022
- Designer(s): Robin Heggelund Hansen
- Paradigm(s): functional, declarative
- Family: ml-functional

## Problem It Aimed to Solve

Elm had gained support as a simple, safe functional language for front-end development, but its development was dependent on essentially a single author, leading to dissatisfaction that community requests were slow to be reflected in the language specification. Gren was forked from Elm in response to this situation, with the goal of evolving the language continuously under community-driven governance. It carries over Elm's pure functional approach of managing side effects and error handling through the type system, while adding its own extensions such as improved array operations and support for Node.js. Since 2024 it has moved away from a single-developer model to a core-team-based development structure.

## Features

- Carries over Elm's pure functional design, managing side effects and error handling safely through the type system
- Adopts community-driven governance rather than depending on a single author (moving to a core-team structure since 2024)
- Improves and extends parts of the standard library, such as array operations, compared with Elm
- Supports execution on Node.js in addition to the browser, opening the door to server-side and CLI tool development
- Inherits the design philosophy of a strong static type system and type inference that makes runtime errors unlikely
- Built around immutable data structures

## Languages It Was Influenced By

- [Elm](elm.md)


## Languages It Influenced

Its direct influence on later languages appears to be limited.


## Current Status

Niche. As a fork of Elm, Gren continues to be developed under community-driven governance. Adoption has grown mainly among those dissatisfied with Elm's community governance, but its user base remains limited.

## Hello World

```gren
module Main exposing (main)

import Node
import Stream

main : Node.Program {} {}
main =
    Node.defineSimpleProgram
        (\env ->
            env.stdout
                |> Stream.sendLine "Hello, world!"
        )
```

## External Links

No Wikipedia article was found.
