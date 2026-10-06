# fish

- Year: 2005
- Designer(s): Axel Liljencrantz
- Paradigm(s): scripting, procedural
- Family: shell

## Problem It Aimed to Solve

Years of maintaining backward compatibility had left Bash and Zsh with syntax that was in places inconsistent, and that was hard to use comfortably without initial configuration.

Axel Liljencrantz wanted to design from scratch, without being bound by backward compatibility with the sh family, so as to create a user-friendly interactive shell that offers smart autocompletion and readable syntax by default, with no configuration file required. This is how fish came about; the name derives from "friendly interactive shell."

## Features

- Abandons POSIX sh compatibility in favor of a more consistent, original syntax
- Automatic command and argument suggestions are enabled by default
- Syntax highlighting and smart tab completion work out of the box with no configuration
- Configuration files are written in a simple, original command language
- Comes with a standard web-browser-based configuration screen, among other features that show a heavy investment in user experience
- Prioritizes interactive usability above all, favoring the interactive experience over script compatibility

## Languages It Was Influenced By

- [Bash](bash.md)
- [Zsh](zsh.md)


## Languages It Influenced

Its direct influence on later languages appears to be limited.


## Current Status

Because of its lack of POSIX compatibility, fish is unlikely to become a corporate systems-administration standard, but it retains a strong following centered on individual interactive use, making it a niche presence.

Its approach of providing a comfortable experience with no configuration required is often cited when discussing the modern shell and terminal experience.

## Hello World

```fish
echo "Hello, World!"
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/Fish_%28Unix_shell%29)
