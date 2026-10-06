# Objective-C

- Year: 1984
- Designer(s): Brad Cox, Tom Love
- Paradigm(s): object-oriented, procedural
- Family: c-family

## Problem It Aimed to Solve

In the early 1980s, Brad Cox and Tom Love were strongly influenced by Smalltalk's flexible design philosophy of "objects exchanging messages with each other," but Smalltalk itself was ill-suited to practical software product development because of its execution speed. So they designed Objective-C by adding Smalltalk-style dynamic messaging and object orientation to C in the form of a library and preprocessor, while keeping C's practical speed and closeness to the system. This design was practically advantageous in that it allowed object orientation to be introduced incrementally while still making full use of an existing C codebase.

## Features

- A complete superset of C, allowing existing C code to be used as is
- Object orientation through dynamic message sending (messaging) inherited from Smalltalk
- Centers on dynamic binding, resolving methods at runtime, enabling flexible runtime manipulation
- A distinctive message-sending syntax using square brackets (the `[obj method:arg]` form)
- A design closely tied to the NeXTSTEP/Cocoa frameworks
- Flexible extensibility through categories (adding methods to existing classes) and protocols
- Before the introduction of ARC (Automatic Reference Counting), developers had to manage reference counts manually
- High flexibility to dynamically swap classes and methods at runtime (such as method swizzling)
- Because of its full compatibility with C, existing C libraries can be called directly
- The dynamically typed `id` type allows flexible object references whose type is not fixed until runtime
- Follows the C-derived convention of separating header files (.h) from implementation files (.m)
- Closure-like functionality was added in later versions via block syntax
- Although an exception-handling mechanism exists, it is not normally used for ordinary error handling in the Cocoa frameworks

## Languages It Was Influenced By

- [C](c.md)
- [Smalltalk](smalltalk.md)
- [Common Lisp](common_lisp.md)


## Languages It Influenced

- [Java](java.md)
- [Swift](swift.md)


## Current Status

Objective-C supported NeXT and Apple products (macOS/iOS) for many years from the 1990s through the 2010s, but after Swift appeared in 2014 it ceded the leading role, and its current position is centered mainly on maintaining legacy code. Even so, a great deal of existing application assets have accumulated over the years, and it is not uncommon for Swift code and Objective-C code to coexist within the same project.

## Hello World

```
#import <Foundation/Foundation.h>

int main(int argc, const char * argv[]) {
    @autoreleasepool {
        NSLog(@"Hello, World!");
    }
    return 0;
}
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/Objective-C)
