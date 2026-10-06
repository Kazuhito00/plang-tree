# Ballerina

- Year: 2017
- Designer(s): Sanjiva Weerawarana, James Clark, WSO2
- Paradigm(s): concurrent, procedural, object-oriented
- Family: concurrent-actor

## Problem It Aimed to Solve

Ballerina was developed out of a desire to naturally express service integration, API calls, and concurrency as code, replacing configuration-file-centric integration tools like traditional EAI (Enterprise Application Integration) and ESB (Enterprise Service Bus). Traditional tools favored visual integration through GUIs and XML configuration, but this approach suffered from declining maintainability as systems grew more complex and larger in scale. Ballerina therefore aimed to build elements of integration processing, such as network communication and data exchange, into the language as first-class features, supporting the development of cloud-native distributed systems at the level of the programming language itself.

## Features

- Has concepts geared toward integration processing, such as services, resources, and workers, as first-class language elements, allowing API integration to be naturally expressed in code
- Natively supports data structures such as JSON, XML, and tables, making it easy to convert between heterogeneous data formats
- Has syntax that explicitly distinguishes sequential from concurrent processing, allowing asynchronous operations such as network calls to be handled safely
- Supports a "sequence diagram view" that can be visualized as a graphical diagram, with a design philosophy of mutual conversion between code and diagrams
- Has type safety and null safety, and adopts an error-handling style similar to that of the Go language

## Languages It Was Influenced By

- [Java](java.md)
- [JavaScript](javascript.md)
- [Go](go.md)
- [Rust](rust.md)
- [C#](c_sharp.md)


## Languages It Influenced

Its direct influence on later languages appears to be limited.


## Current Status

Ballerina is positioned as an active language, widely used today. Open-source development continues, led by WSO2, and adoption is growing in the fields of cloud-native API integration and microservice development.

## Hello World

In Ballerina, the `io` module is imported and output is performed from the `main` function.

```ballerina
import ballerina/io;

public function main() {
    io:println("Hello, World!");
}
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/Ballerina_%28programming_language%29)
