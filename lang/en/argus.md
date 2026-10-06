# Argus

- Year: 1983
- Designer(s): Barbara Liskov, Maurice Herlihy, Paul Johnson, Robert Scheifler, William Weihl
- Paradigm(s): object-oriented, concurrent
- Family: concurrent-actor

## Problem It Aimed to Solve

In the 1980s, a major challenge in distributed systems was guaranteeing the fault tolerance and consistency of programs running across multiple machines. Barbara Liskov and colleagues at MIT extended the CLU language they had designed to create Argus, a language for building robust distributed programs. They introduced objects called "guardians" that encapsulate related procedures, along with a concept called "actions" that guarantee atomicity, providing a mechanism that kept data consistent even in the face of partial failures. This work influenced later language design for distributed systems and transaction processing.

## Features

- Inherits CLU's cluster (abstract data type) mechanism while extending it for distributed environments
- Structures programs around units called "guardians" that encapsulate related procedures and data
- Introduces a transaction-like concept called an "action" that guarantees atomicity and consistency for operations spanning multiple machines
- Provides a mechanism ensuring data never falls into an inconsistent state even in the presence of partial failures such as crashes or network partitions
- Allows nested actions, enabling complex distributed processing to be built up in stages

## Languages It Was Influenced By

- [CLU](clu.md)


## Languages It Influenced

Its direct influence on later languages appears to be limited.


## Current Status

Argus never saw wide use as a practical programming language and is now regarded as a historical language whose research role has ended. Concepts such as guardians and atomic actions went on to influence later research into distributed transaction processing systems and RPC design, and it continues to be cited as an important case study in the history of distributed systems research.

## Hello World

Argus organizes programs around distributed objects called "guardians," and uses stream output primitives inherited from CLU.

```
hello = guardian is start
    start = proc ()
        po: stream := stream$primary_output()
        stream$putl(po, "Hello, world!")
    end start
end hello
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/Argus_%28programming_language%29)
