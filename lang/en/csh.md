# csh (C Shell)

- Year: 1978
- Designer(s): Bill Joy
- Paradigm(s): scripting, procedural
- Family: shell

## Problem It Aimed to Solve

In the late 1970s, Bill Joy, who led the development of BSD Unix at the University of California, Berkeley, found the interactive usability of the shells of the time lacking—for instance, there was no way to reuse command history.

Additionally, for programmers accustomed to C, the syntax of the Bourne Shell demanded a different style of writing than C did, imposing a learning cost. Joy therefore designed csh as an interaction-oriented shell whose expressions and control syntax were closer to those of C, and which also came equipped with history and alias functionality.

## Features

- Control structures such as if/while/foreach can be written in a syntax resembling C
- Introduced history functionality early on, allowing command history to be recalled and re-executed
- Alias functionality lets frequently used commands be invoked with shortened names
- Has interactive process-management features such as job control
- Was bundled standard with BSD Unix and became popular for its interactive usability
- On the other hand, as a scripting language it had many specification flaws and pitfalls, and was considered ill-suited for writing scripts

## Languages It Was Influenced By

- [C](c.md)


## Languages It Influenced

- [Bash](bash.md)
- [Zsh](zsh.md)


## Current Status

Design flaws pointed out in csh as a scripting language led to it being gradually replaced by Bourne-family shells for system administration purposes.

Its lineage as an interactive shell was carried on by tcsh, but csh itself is now a legacy presence that sees hardly any use in new script development.

## Hello World

```csh
echo "Hello, World!"
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/C_shell)
