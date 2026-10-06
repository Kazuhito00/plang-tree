# sh (Bourne Shell)

- Year: 1977
- Designer(s): Stephen Bourne
- Paradigm(s): scripting, procedural
- Family: shell

## Problem It Aimed to Solve

The old shell (the Thompson shell) bundled with 1970s Unix Version 7 had very poor control structures, such as variables, loops, and conditionals, and lacked the features needed to write substantial scripts.

Stephen Bourne of Bell Labs designed the Bourne Shell as a more robust language, drawing on the block structure and expression concepts of ALGOL 68, able to withstand both interactive command entry and script writing for system administration. This design was adopted as the standard shell across Unix-family operating systems and became the common foundation for the shell languages that followed.

## Features

- Command execution and process cooperation through pipes and redirection as basic operations
- Control structures close to the ALGOL family, such as if/while/for/case
- Supports shell variables, environment variables, and function definitions, functioning as a simple scripting language
- Rich facilities for combining processes to build up processing, such as subshells and command substitution
- Standardized as POSIX `sh`, forming the minimal common foundation across many Unix-family systems
- Combines two roles, an interactive shell and a scripting language, in a single language

## Languages It Was Influenced By

- [ALGOL 68](algol_68.md)


## Languages It Influenced

- [Bash](bash.md)
- [Zsh](zsh.md)


## Current Status

sh (Bourne Shell) remains active today as the basic specification for POSIX-compliant shell scripting, continuing to exist as `/bin/sh` on many Unix-family systems.

It is the syntactic prototype of successor shells such as Bash and Zsh, and it is positioned as the starting point of the shell-scripting field itself. Its role as a highly portable, minimal common language continues to be valued in writing automation scripts today.

## Hello World

```sh
echo "Hello, World!"
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/Bourne_shell)
