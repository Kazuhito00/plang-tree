# Elixir

- Year: 2012
- Designer(s): José Valim
- Paradigm(s): functional, concurrent
- Family: concurrent-actor

## Problem It Aimed to Solve

José Valim, who worked on the Ruby on Rails core team, was frustrated by the limits of Ruby's concurrency performance (the difficulty of using multiple cores due to things like the global interpreter lock). Meanwhile, the Erlang VM (BEAM) offered high concurrency and fault tolerance proven in telephone switching systems, but its syntax was unfamiliar to programmers used to dynamic languages like Ruby, and it lacked macro-based metaprogramming and modern development tooling. So Valim designed Elixir as a new language that combined BEAM's robust concurrency foundation with Ruby-like, readable syntax and a powerful macro system.

## Features

- Runs on the Erlang VM (BEAM) and can directly use Erlang's lightweight processes and OTP library assets
- Has readable syntax influenced by Ruby, such as the pipe operator (`|>`)
- A powerful macro system makes it easy to build DSLs (domain-specific languages)
- A functional programming style based on immutable data and pattern matching
- A well-developed build toolchain and package management, including Mix and Hex, that improves the development experience
- Widely used for building highly concurrent, real-time web applications through the Phoenix web framework

## Languages It Was Influenced By

- [Erlang](erlang.md)
- [Ruby](ruby.md)
- [Clojure](clojure.md)


## Languages It Influenced

- [Gleam](gleam.md)


## Current Status

Elixir is increasingly adopted for web services and real-time communication systems that demand fault tolerance and high concurrency, and it continues to be actively developed as a language that carries Erlang's reliability forward in a more approachable, modern form.

## Hello World

```
IO.puts("Hello, World!")
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/Elixir_%28programming_language%29)
