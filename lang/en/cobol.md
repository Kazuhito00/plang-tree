# COBOL

- Year: 1959
- Designer(s): The CODASYL committee, strongly influenced by Grace Hopper's vision
- Paradigm(s): procedural
- Family: origin

## Problem It Aimed to Solve

In the late 1950s, businesses and government agencies faced rapidly growing demand to computerize clerical operations such as payroll and inventory management, but each manufacturer used its own proprietary language and machine code, so programs had no portability and were difficult even for non-technical staff to read. Grace Hopper had been advocating for practical compilers and programming written in language close to English, and inspired by this vision the CODASYL committee set out to develop a standard language.

By adopting a verbose syntax close to English prose, COBOL aimed to let managers and auditors read and verify code, while also ensuring portability across machines from different manufacturers. This matched the political demand in military and government procurement to avoid lock-in to a specific vendor.

## Features

- Adopts verbose syntax close to English sentences (MOVE, ADD, PERFORM, etc.)
- A structure that clearly separates processing into sections such as DATA DIVISION and PROCEDURE DIVISION
- Strong support for decimal arithmetic and report output suited to business data processing
- Designed with an emphasis on portability across manufacturers as a standard specification
- A huge amount of legacy code still runs in core banking, insurance, and government systems
- Its verbosity aids maintainability but tends to make code lengthy

## Languages It Was Influenced By

- [Fortran](fortran.md)


## Languages It Influenced

- [PL/I](pl_i.md)
- [ABAP](abap.md)
- [Progress ABL (OpenEdge)](progress_abl.md)
- [Rockstar](rockstar_lang.md)


## Current Status

COBOL is currently positioned as a legacy language (status: legacy), but an enormous amount of COBOL code still runs in the core systems of banks and insurance companies, and demand for maintenance and migration work continues.

As the engineer workforce ages, projects to maintain existing assets or migrate them to other languages continue to arise around the world.

## Hello World

```cobol
IDENTIFICATION DIVISION.
PROGRAM-ID. HELLO-WORLD.
PROCEDURE DIVISION.
    DISPLAY 'Hello, world!'.
    STOP RUN.
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/COBOL)
