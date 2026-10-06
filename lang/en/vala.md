# Vala

- Year: 2006
- Designer(s): Jürg Billeter, Raffaele Sandrini
- Paradigm(s): object-oriented, procedural
- Family: c-family

## Problem It Aimed to Solve

Applications for the GNOME desktop environment were written in raw C while using the GObject object system, which placed a heavy burden on developers who had to manually manage reference counting and write boilerplate code for signal connections. A modern, readable syntax like C#'s could improve productivity, but GNOME depended on a large body of existing library assets (GTK, GLib, and others) tightly bound to the C ABI (binary interface), and any new language needed to be able to use them as-is. Billeter and Sandrini therefore designed Vala as a language with C#-like syntax that compiles down to plain C source code, maintaining full binary compatibility with GObject.

## Features

- Has modern, C#-like object-oriented syntax with classes, interfaces, properties, and signals
- The compiler generates C source code at compile time rather than a Vala-specific intermediate representation, which is then natively compiled with GCC or similar
- Automatically handles GObject reference counting, greatly reducing the amount of manual memory management code
- Can seamlessly call existing C libraries such as GLib/GTK through header information (VAPI files)
- Has no garbage collector, instead performing deterministic memory deallocation based on ownership

## Languages It Was Influenced By

- [C#](c_sharp.md)
- [C](c.md)
- [C++](c_plus_plus.md)
- [Java](java.md)
- [D](d.md)


## Languages It Influenced

Its direct influence on later languages appears to be limited.


## Current Status

Vala continues to be used in some GNOME-related projects, but its adoption remains limited, placing it in a "niche" position. In GTK application development, there has been a shift toward more widely used options such as Python, plain C, or Rust, and Vala remains a choice geared toward a specific community.

## Hello World

```
void main() {
    stdout.printf("Hello, World!\n");
}
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/Vala_%28programming_language%29)
