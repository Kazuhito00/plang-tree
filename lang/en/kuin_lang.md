# Kuin

- Year: 2016
- Designer(s): Kuina-chan (くいなちゃん)
- Paradigm(s): procedural, object-oriented, functional
- Family: scripting

## Problem It Aimed to Solve

Japanese programmer "Kuina-chan" developed Kuin out of a sense that no language existed offering the ease of use of HSP while also being as practical and high-performance as C++. Aimed mainly at game development and practical application development, it combines a syntax intended to be easy for beginners with static typing and class-based object-oriented features. It adopts a distinctive syntax design—including using `::` as its assignment operator—so that important information appears at the start of each line. It is a continuously developed language for games and practical use, used mainly within a Japanese-speaking community.

## Features

- A practical language specification combining an HSP-like gentle learning curve with static typing and class-based object orientation
- A distinctively designed syntax, including the use of `::` as its assignment operator, arranged so that important information (such as a variable name) comes at the start of each line
- Aimed mainly at game development, with drawing, audio, and input functionality integrated into its standard library
- Can be used by combining multiple paradigms—procedural, object-oriented, and functional
- Japanese-language documentation and development tools are maintained for a community centered on Japanese speakers

## Languages It Was Influenced By

- [HSP(Hot Soup Processor)](hsp.md)
- [C++](c_plus_plus.md)


## Languages It Influenced

Its direct influence on later languages appears to be limited.


## Current Status

Kuin occupies a niche position, used mainly within a Japanese-speaking community for game development and hobbyist programming. Development continues, and it retains a degree of support as a language aiming to balance practicality with ease of learning.

## Hello World

Inside a main function starting with `func main()`, the `cui@print` function from the CUI library is called as a `do` statement to output a string.

```
func main()
	do cui@print("Hello, World!\n")
end func
```

## External Links

No Wikipedia article was found.
