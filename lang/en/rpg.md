# RPG

- Year: 1959
- Designer(s): IBM
- Paradigm(s): procedural
- Family: origin

## Problem It Aimed to Solve

In the accounting and inventory management operations of 1950s businesses, tabulating machines (punched-card accounting machines) that mechanically aggregated punch cards were widely used, but they required physical rewiring of plugboards and lacked flexibility. IBM wanted to replace this with computer programs while still allowing clerks accustomed to operating tabulating machines to define routine report-generation tasks without having to learn complex procedural programming.

As the name RPG (Report Program Generator) suggests, the language was designed so that simply specifying input, calculation, and output specifications in tabular form would generate a report-producing program — a design specialized for business use. This made it easier for existing tabulating-machine operators to transition directly into program creators.

## Features

- A distinctive style in which input, calculation, and output specifications are each written in fixed-format tabular form
- A design accessible even to non-programmers, carrying over the feel of operating punched-card tabulating machines
- Specialized for report generation and business data processing rather than being a general-purpose language
- Used as a standard language on IBM's midrange machines (System/3, AS/400, and today's IBM i series)
- Later versions (such as RPG IV) added more free-form syntax and modern features
- Tightly integrated with databases (DB2 for i), maintaining a design specialized for business application development

## Languages It Was Influenced By

No direct linguistic ancestors have been identified.


## Languages It Influenced

Its direct influence on later languages appears to be limited.


## Current Status

It is currently positioned as a legacy language (status: legacy), but it remains in active operation in the core business systems of companies that adopt IBM i series machines, and demand for maintenance and updates continues.

While adoption in new development is limited, the scale of existing assets is large, and it is expected to be maintained over the long term.

## Hello World

In RPG's fixed format (RPG III/400 generation), calculation specifications (C specs) are written at fixed column positions. Below is the simplest example, displaying a string on screen using the `DSPLY` operation (in an actual source file, column positions are determined even more strictly).

```
     C           'HELLO'   DSPLY
     C                     RETRN
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/IBM_RPG)
