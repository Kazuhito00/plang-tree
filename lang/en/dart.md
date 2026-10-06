# Dart

- Year: 2011
- Designer(s): Google (Lars Bak and others)
- Paradigm(s): object-oriented
- Family: scripting

## Problem It Aimed to Solve

In the early 2010s, Google believed that in its large-scale internal web application development, JavaScript's dynamic typing and weak structuring were undermining codebase maintainability. Lars Bak and others, who had experience developing virtual machines, set out to create a language with class-based object orientation and a type system, one that could also receive advanced tooling support from IDEs, aiming to offer an alternative to JavaScript with an eye, initially, toward embedding a dedicated VM in the browser.

## Features

- Class-based object orientation together with a gradually adoptable type system
- Supports both transpilation to JavaScript and native compilation
- A mechanism that uses Just-In-Time and Ahead-of-Time compilation separately for development and for production
- Originally aimed at the web, later expanded to mobile and desktop
- Drew renewed major attention as the UI description language of the Flutter framework

## Languages It Was Influenced By

- [JavaScript](javascript.md)
- [Java](java.md)
- [C#](c_sharp.md)
- [Smalltalk](smalltalk.md)


## Languages It Influenced

Its direct influence on later languages appears to be limited.


## Current Status

The direct adoption in browsers it originally aimed for never materialized, but the language is now "active," having returned to the spotlight as the core language of Google's Flutter framework for mobile and desktop app development. It is an example of a language that survived by changing its role, from a web-oriented origin to a cross-platform UI development language.

## Hello World

```
void main() {
  print('Hello, World!');
}
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/Dart_%28programming_language%29)
