# Carbon

- Year: 2022
- Designer(s): Google (Chandler Carruth and others)
- Paradigm(s): procedural, object-oriented, generic
- Family: c-family

## Problem It Aimed to Solve

Since its debut in 1985, C++ has been unable to discard many old features in order to maintain backward compatibility, and it has accumulated years of technical debt, including the complexity of template metaprogramming, a lack of memory safety, and slow build times. Even though there was a need to bridge the gap between modern systems programming languages like Rust and C++, organizations with enormous C++ codebases, such as Google, found it practically impossible to replace them wholesale with a new language. Chandler Carruth and others at Google therefore experimentally announced Carbon in 2022 as a successor language that could be adopted incrementally while interoperating bidirectionally with C++.

## Features

- Prioritizes interoperability as its top design goal, allowing C++ code and Carbon code to call each other bidirectionally within the same project
- Has a more predictable generics mechanism in place of templates
- Plans to gradually introduce ownership and borrowing mechanisms aimed at improving memory safety
- Adopts LLVM as its compilation foundation, ensuring compatibility with existing C++ toolchains
- As of 2022, it remains an experimental project and its language specification continues to change

## Languages It Was Influenced By

- [C++](c_plus_plus.md)
- [Rust](rust.md)
- [Swift](swift.md)
- [Kotlin](kotlin.md)
- [Zig](zig.md)


## Languages It Influenced

Its direct influence on later languages appears to be limited.


## Current Status

Carbon remains an experimental language under active development (status: active), drawing attention as a candidate successor language that could gradually resolve the technical debt carried by C++. However, it has not yet reached a formal 1.0 release, and full-fledged industrial adoption is still a matter for the future.

## Hello World

```
package HelloWorld api;

fn Main() -> i32 {
  Print("Hello, World!");
  return 0;
}
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/Carbon_%28programming_language%29)
