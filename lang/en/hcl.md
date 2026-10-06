# HCL

- Year: 2014
- Designer(s): Mitchell Hashimoto, Martin Atkins
- Paradigm(s): declarative
- Family: domain-specific

## Problem It Aimed to Solve

HCL (HashiCorp Configuration Language) is a configuration language created for HashiCorp's tools, including Terraform. At the time, JSON was commonly used as a configuration format for managing infrastructure as code, but JSON does not allow comments, is strict about trailing commas, and was hard for humans to read and write by hand. On the other hand, using a general-purpose programming language directly for configuration description would raise the learning cost too much and make the syntax overly complex. HashiCorp wanted something in between: a structured format that was easy for humans to read and write, yet also easy for machines to handle. It was also a design requirement that it be interconvertible with JSON, aiming for compatibility with existing JSON-based toolchains.

## Features

- Expresses hierarchical configuration through block structures (in a form such as `resource "type" "name" { ... }`)
- Offers human-friendly conveniences not found in JSON, such as comments (`#`, `//`, `/* */`)
- Has a certain degree of programmability while remaining declarative, including variable references, expressions, conditional branching, and loops via for-expressions
- Its syntax tree can be mechanically converted to JSON, and internally it can be treated as equivalent to a JSON representation
- Adopted as a common configuration language across multiple HashiCorp products, including Terraform, Packer, Vault, and Consul
- Not a Turing-complete general-purpose language, but a domain-specific language (DSL) dedicated to configuration description

## Languages It Was Influenced By

No direct linguistic ancestors have been identified.


## Languages It Influenced

Its direct influence on later languages appears to be limited.


## Current Status

It is actively and widely used today. In particular, in the practice of Infrastructure as Code (IaC) using Terraform, it has established itself as the de facto standard configuration language, and is used on a daily basis in the field of building and managing cloud infrastructure.

## Hello World

Since HCL is a configuration language, there is no concept of "executing it to print a string," but the example below shows defining a message as a Terraform output value.

```hcl
output "hello" {
  value = "Hello, World!"
}
```

## External Links

No Wikipedia article was found.
