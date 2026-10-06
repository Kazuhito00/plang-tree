# Swift

- Year: 2014
- Designer(s): Chris Lattner
- Paradigm(s): object-oriented, functional, protocol-oriented
- Family: concurrent-actor

## Problem It Aimed to Solve

Objective-C, which had long supported Apple's iOS/macOS development, carried old C-derived syntax and bugs stemming from manual pointer manipulation and nil references. In addition, its distinctive grammar, which mixed C with Smalltalk-style messaging syntax, was costly for beginners to learn. Chris Lattner, also a developer of the LLVM compiler infrastructure, designed a new language, Swift, that maintained interoperability with Objective-C while combining modern type safety, safe nil handling via optional types, and fast execution speed, making it Apple's next-generation standard language across its platforms.

## Features

- Optional types make explicit in the type system which values may hold nil, preventing runtime nil-reference errors
- Advocates "protocol-oriented programming," designing around protocols (interfaces) rather than class inheritance
- Uses value types (structs) and copy-on-write optimization to achieve safe data sharing without relying on reference types
- Automatic Reference Counting (ARC) for memory management avoids garbage-collection pauses
- LLVM-based optimization achieves execution speed on par with or better than Objective-C
- Maintains interoperability with Objective-C, allowing existing assets to be replaced incrementally

## Languages It Was Influenced By

- [Objective-C](objective_c.md)
- [Rust](rust.md)
- [Haskell](haskell.md)
- [Python](python.md)
- [C#](c_sharp.md)


## Languages It Influenced

- [Carbon](carbon.md)
- [Mojo](mojo.md)
- [V](v_lang.md)
- [Hylo](hylo_lang.md)


## Current Status

Swift has now completely replaced Objective-C as the standard development language across all Apple platforms, including iOS, macOS, and watchOS, and open-sourcing has advanced its expansion into other fields such as server-side development.

## Hello World

```
print("Hello, world!")
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/Swift_%28programming_language%29)
