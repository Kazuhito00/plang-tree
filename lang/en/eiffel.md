# Eiffel

- Year: 1986
- Designer(s): Bertrand Meyer
- Paradigm(s): object-oriented
- Family: algol-pascal

## Problem It Aimed to Solve

In the 1980s, object-oriented programming was building its theoretical foundations through languages such as Simula and Smalltalk, but mechanisms for systematically guaranteeing software reliability were left up to each language, relying heavily on the discretion of the implementer.

Bertrand Meyer proposed the concept of "Design by Contract," which builds preconditions, postconditions, and class invariants directly into the language itself, and believed that implementing this as a pure object-oriented language could systematically eliminate software bugs starting from the design stage.

Fundamentally raising reliability and reusability was the central motivation behind the creation of Eiffel.

## Features

- Design by Contract (preconditions, postconditions, class invariants) built in as a standard language feature
- A class mechanism supporting multiple inheritance as well as single inheritance
- Type-safe reuse through generics (generic classes)
- Automatic memory management via garbage collection
- Error handling that integrates exception handling with contract violation detection
- Design guidelines that reflect software engineering theory, such as the "Uniform Access Principle"

## Languages It Was Influenced By

- [Simula](simula.md)
- [Ada](ada.md)


## Languages It Influenced

- [C#](c_sharp.md)
- [Racket](racket.md)
- [Ruby](ruby.md)
- [Java](java.md)
- [Sather](sather.md)


## Current Status

Eiffel is currently a niche language and never became a widely adopted mainstream language.

However, as the pioneering language that first realized the concept of contract programming as a language feature, it continues to be highly regarded in the field of software engineering, and it is still used today in the development of some high-reliability systems.

## Hello World

```
class
    HELLO_WORLD

create
    make

feature

    make
            -- Print a greeting.
        do
            print ("Hello, World!%N")
        end

end
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/Eiffel_%28programming_language%29)
