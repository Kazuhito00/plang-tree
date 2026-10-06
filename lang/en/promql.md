# PromQL

- Year: 2012
- Designer(s): Matt T. Proud, Julius Volz
- Paradigm(s): declarative, functional, query
- Family: logic-declarative

## Problem It Aimed to Solve

At SoundCloud, existing monitoring tools such as StatsD and Graphite could no longer keep up with monitoring an increasingly containerized infrastructure. What was needed was a powerful query language capable of collecting multi-dimensional, labeled metrics and aggregating and evaluating alert conditions against them in real time. Drawing on ideas from Google's internal monitoring system Borgmon, Matt T. Proud and Julius Volz designed PromQL as a functional query language dedicated to the time-series data of Prometheus. Combined with its multi-dimensional data model, it achieves both operational simplicity and powerful aggregation expressiveness.

## Features

- Works with time-series data identified along multiple dimensions through labels (key-value pairs)
- Provides a rich set of aggregation and transformation functions such as `rate()`, `sum()`, `avg()`, and `histogram_quantile()`
- Distinguishes data types such as range vectors, instant vectors, and scalars, and supports aggregation over a specified time window
- Can be used directly as the condition expression in alerting rules, serving both monitoring and visualization
- Specialized for Prometheus's time-series database and not applicable to other general-purpose data

## Languages It Was Influenced By

No direct linguistic ancestors have been identified.


## Languages It Influenced

Its direct influence on later languages appears to be limited.


## Current Status

PromQL is an actively used language today (status: active), remaining, in effect, the standard query language across the cloud-native monitoring ecosystem centered on Prometheus. It occupies a particularly important position in monitoring and alerting for Kubernetes environments.

## Hello World

PromQL has no notion of printing a string directly, so a pseudo "Hello World" can be expressed by embedding a message into a label using `label_replace`.

```promql
label_replace(vector(1), "message", "Hello, World!", "", "")
```

## External Links

No Wikipedia article was found.
