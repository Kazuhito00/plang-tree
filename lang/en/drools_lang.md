# Drools

- Year: 2001
- Designer(s): Bob McWhirter, Mark Proctor
- Paradigm(s): logic, declarative, object-oriented
- Family: logic-declarative

## Problem It Aimed to Solve

In the early 2000s, Java enterprise applications increasingly needed to separate business rules from application code and manage them in a form that non-engineers could also understand and maintain. Drools was developed as a business rule management system (BRMS) that fits naturally into Java applications, using an inference engine that extends the Rete algorithm and treating POJOs (Plain Old Java Objects) as facts. Its governing organization later moved to JBoss (Red Hat) and then to the Apache Software Foundation, and it remains widely used today as a core component of the KIE platform.

## Features

- Uses ReteOO, an extension of the Rete algorithm, as the core of its inference engine, achieving efficient pattern matching
- Treats POJOs (Plain Old Java Objects) directly as "facts," allowing them to be incorporated directly into a Java application's domain model
- Has its own rule-authoring language called DRL (Drools Rule Language), which lets business rules be written declaratively
- An open-source business rule management system (BRMS) whose governance passed through JBoss (Red Hat) and on to the Apache Software Foundation
- Serves as the core component of the KIE (Knowledge Is Everything) platform, integrated with workflow and event processing in addition to the rule engine
- Designed with the guiding philosophy that business rules should be writable and maintainable in a form that non-engineers can also understand

## Languages It Was Influenced By

- [Java](java.md)


## Languages It Influenced

Its direct influence on later languages appears to be limited.


## Current Status

Drools is an actively developed and used system, widely adopted in the Java enterprise field as a core component of the KIE platform. Under ongoing development by the open-source community and Red Hat, it continues to be used today as an active business rule engine.

## Hello World

```
rule "Hello World"
    when
    then
        System.out.println("Hello, World!");
end
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/Drools)
