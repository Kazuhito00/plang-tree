# Bash

- Year: 1989
- Designer(s): Brian Fox (GNU)
- Paradigm(s): scripting, procedural
- Family: shell

## Problem It Aimed to Solve

In the 1980s, the standard Unix shell, the Bourne Shell, was proprietary software owned by AT&T and could not be freely modified or redistributed. The GNU Project aimed to build a "completely free Unix-compatible OS," and as part of that effort a free, Bourne-Shell-compatible shell was needed.

Brian Fox developed Bash as an extended shell that preserved sh-compatible syntax while incorporating features such as the C shell's history mechanism and the Korn shell's completion functionality. The name "Bourne-Again SHell" signals that it is the spiritual successor to the Bourne Shell.

## Features

- Maintains command compatibility with the Bourne Shell (sh) while adding command-line editing and history features
- Greatly enhances interactive usability with features such as tab completion and job control
- Has scripting-oriented extensions not found in the sh standard, such as array variables and arithmetic evaluation
- Includes features that support writing large-scale scripts, such as function definitions and local variables
- Distributed under the GPL as part of the GNU Project, and free to use and modify
- Has been bundled as the default shell in GNU/Linux distributions

## Languages It Was Influenced By

- [sh(Bourne Shell)](sh.md)
- [csh(C Shell)](csh.md)


## Languages It Influenced

- [Zsh](zsh.md)
- [fish](fish.md)


## Current Status

Bash is still adopted as the default shell in most Linux distributions today, and remains widely used as a scripting language for system administration and CI/CD.

Beyond the GNU Project's original goal of a free Bourne-Shell-compatible environment, it has become, in effect, one of the industry-standard shells — an indispensable presence in server operations and automation.

## Hello World

```bash
echo "Hello, World!"
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/Bash_%28Unix_shell%29)
