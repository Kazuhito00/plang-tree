# GraphQL

- Year: 2015
- Designer(s): Lee Byron, Nick Schrock, Dan Schafer
- Paradigm(s): declarative, query
- Family: logic-declarative

## Problem It Aimed to Solve

Facebook's mobile apps suffered from the inefficiency of "over-fetching" more data than needed from REST APIs, or conversely "under-fetching," which required multiple requests. The number of endpoints kept growing to accommodate the differing data needs of each client, and the cost of managing them kept rising along with it. Lee Byron, Nick Schrock, and Dan Schafer developed GraphQL as a query language that lets a client declaratively specify the exact data structure it needs and fetch it in one go. Development began internally in 2012, and after GraphQL was released as open source in 2015, it was rapidly adopted as a standard for API design in place of REST.

## Features

- Lets a client specify only the fields it needs, preventing both over-fetching and under-fetching
- A schema-driven API design in which queries are sent to a single endpoint
- A type system that strictly defines the schema, letting the server validate the correctness of a query
- Handles three kinds of operations — Query (fetch), Mutation (update), and Subscription (subscribe) — within a unified model
- Lets multiple resources be fetched in a single request through nesting, reducing the number of round trips

## Languages It Was Influenced By

No direct linguistic ancestors have been identified.


## Languages It Influenced

Its direct influence on later languages appears to be limited.


## Current Status

GraphQL is an actively used language today (status: active), widely adopted in web and mobile application development as an alternative to REST APIs. Many companies, including GitHub and Shopify, publish GraphQL APIs, and its ecosystem continues to expand.

## Hello World

Assuming the schema defines a `hello` field that returns the string "Hello, World!", a client fetches it with the following query.

```graphql
query {
  hello
}
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/GraphQL)
