# Erlang

- Year: 1986
- Designer(s): Joe Armstrong and others (Ericsson)
- Paradigm(s): functional, concurrent
- Family: concurrent-actor

## Problem It Aimed to Solve

In the 1980s, Ericsson was developing software for telephone switches that had to handle millions of simultaneous calls while ensuring that a crash in one process would not affect any other, keeping the entire system running for years without stopping—an extremely demanding requirement. The procedural languages of the time made it difficult to design systems that combined massive concurrency with self-healing from failures, so Joe Armstrong and others built a new language on top of the logic language Prolog, adopting an "actor model" in which lightweight processes communicate only through message passing. The result made it possible to build highly available systems based on the philosophy of "let it crash"—giving up on a failed part and simply restarting it.

## Features

- A concurrency model in which lightweight processes (actors) share no memory and communicate only via message passing
- Equipped with a self-healing mechanism (OTP) based on supervisor trees, which can automatically restart just the failed part when a fault occurs
- Variables are, once bound, immutable data as a rule
- Hot code swapping allows running code to be updated without stopping the system
- Runs on its own virtual machine called BEAM, and its track record in the telecommunications industry has made it synonymous with high availability

## Languages It Was Influenced By

- [Prolog](prolog.md)
- [Lisp](lisp.md)
- [Smalltalk](smalltalk.md)


## Languages It Influenced

- [Rust](rust.md)
- [Elixir](elixir.md)
- [Pony](pony.md)
- [Gleam](gleam.md)
- [Oz](oz.md)
- [LFE](lfe.md)
- [Inko](inko_lang.md)


## Current Status

Erlang continues to run behind the scenes of communications infrastructure and messaging systems (such as WhatsApp), and is highly regarded as a language that has proven fault tolerance and high concurrency. Direct adoption remains niche, but its design philosophy has been carried on by the family of BEAM languages led by Elixir, and it continues to develop actively today.

## Hello World

```
-module(hello).
-export([main/0]).

main() ->
    io:format("Hello, World!~n").
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/Erlang_%28programming_language%29)
