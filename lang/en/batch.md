# Windows Batch (Command Prompt)

- Year: 1981
- Designer(s): Microsoft (Tim Paterson and others)
- Paradigm(s): scripting, procedural
- Family: shell

## Problem It Aimed to Solve

In MS-DOS, which appeared in 1981, users had to manually type a series of commands into the command interpreter COMMAND.COM each time. Performing routine operations (such as copying files or making backups) manually every time was inefficient, and, as an extension of the command-line operations carried over from CP/M, a mechanism was needed that could bundle a series of commands into a file and run them automatically. The resulting batch file (.bat) had minimal control constructs such as IF, GOTO, and FOR, and on Windows NT-based systems, cmd.exe — the successor to COMMAND.COM — carried this on.

## Features

- Commands interpreted by COMMAND.COM/cmd.exe are written one per line in a text file with the .bat extension
- Has minimal control structures such as branching via GOTO statements and labels, and conditional branching via IF statements
- Allows simple parameter passing using environment variables (%VAR%) and parameters (%1, %2, ...)
- On Windows NT-based systems, cmd.exe serves as the interpreter and is used for system administration tasks such as registry operations and network configuration
- Continues to run today for backward compatibility, even after the emergence of the more powerful successor, PowerShell

## Languages It Was Influenced By

No direct linguistic ancestors have been identified.


## Languages It Influenced

Its direct influence on later languages appears to be limited.


## Current Status

Now that the more capable [PowerShell](powershell.md) has appeared, adoption in new development has decreased, but it remains widely used in legacy automation scripts and the maintenance of older systems — the most fundamental scripting language in the Windows environment.

## Hello World

```batch
@echo off
echo Hello, World!
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/Batch_file)
