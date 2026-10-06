# Ceylon

- Year: 2011
- Designer(s): Red Hat (Gavin King)
- Paradigm(s): object-oriented, functional
- Family: jvm-dotnet

## Problem It Aimed to Solve

Ceylon's designer Gavin King was also known as the author of Hibernate, a prominent Java EE framework, and through his day-to-day development work he keenly felt Java's design weaknesses. In particular, "type erasure" — where generics exist only at compile time and their type information is erased at runtime — and the lack of null safety, which led to frequent runtime exceptions, made maintaining large codebases difficult. Ceylon was developed to fundamentally overhaul these weaknesses while also aiming to be a next-generation Java alternative equipped with a large-scale module system.

## Features

- A sounder implementation of generics that avoids type erasure
- Null safety at the language level (expressed through optional types)
- A module system built in by default, designed with large-scale development in mind
- Functional programming elements that emphasize higher-order functions and immutability
- A multi-platform design that can target both the JVM and JavaScript
- More readable union and intersection type expressions while retaining static typing

## Languages It Was Influenced By

- [Java](java.md)
- [Scala](scala.md)
- [Smalltalk](smalltalk.md)
- [Lisp](lisp.md)


## Languages It Influenced

Its direct influence on later languages appears to be limited.


## Current Status

Ceylon had a technically ambitious design, but it did not achieve widespread adoption, partly due to the rise of competing JVM languages such as Kotlin, and development by Red Hat ended around 2020, leaving it treated as a historical language. It is sometimes referenced in the history of language design as an example that pioneered pointing out and attempting to solve Java's weaknesses. Although the project itself has ended, parts of its design philosophy have left an influence on discussions within other JVM language communities.

## Hello World

```ceylon
shared void run() {
    print("Hello, World!");
}
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/Ceylon_%28programming_language%29)
