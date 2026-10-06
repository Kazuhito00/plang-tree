# Kotlin

- Year: 2011
- Designer(s): JetBrains
- Paradigm(s): object-oriented, functional
- Family: jvm-dotnet

## Problem It Aimed to Solve

The IDE company JetBrains had long developed its own product (IntelliJ IDEA) in Java, and was routinely troubled by Java's verbose syntax and the null pointer exceptions (NullPointerException) that frequently occurred at runtime. Scala, an existing JVM language, offered high expressiveness but suffered from slow compilation and a steep learning curve, so there was a need for a practical language that could fully interoperate with existing Java codebases while offering simpler and safer syntax. Adoption grew rapidly after Google designated it an official language for Android development in 2017.

## Features

- Full interoperability with Java bytecode, allowing existing Java libraries to be used as-is
- A "null safety" mechanism that distinguishes nullable and non-null types at the type-system level
- Concise syntax, such as data classes and extension functions, that reduces boilerplate code
- Lightweight asynchronous programming through coroutines
- Established itself as an official Android development language, spreading rapidly in mobile development
- Language features such as `when` expressions and smart casts that make conditional branching and null checks more concise

## Languages It Was Influenced By

- [Java](java.md)
- [Scala](scala.md)
- [C#](c_sharp.md)
- [Groovy](groovy.md)
- [JavaScript](javascript.md)


## Languages It Influenced

- [Carbon](carbon.md)
- [V](v_lang.md)


## Current Status

Kotlin has now established itself as Google's official Android development language and is an actively used language that is displacing Java. It has also broadened its scope into server-side development (with frameworks such as Ktor) and multiplatform development (Kotlin Multiplatform), becoming one of the central languages of the JVM ecosystem. JetBrains itself continues to use it as the development language for its own IDE products, and adoption within enterprises has been increasing year by year.

## Hello World

```kotlin
fun main() {
    println("Hello, World!")
}
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/Kotlin_%28programming_language%29)
