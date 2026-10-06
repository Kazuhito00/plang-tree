# Karel

- Year: 1981
- Designer(s): Richard E. Pattis
- Paradigm(s): procedural, visual
- Family: educational-visual

## Problem It Aimed to Solve

For people learning to program for the first time, the syntactic details of a language tend to get in the way of essential thinking. Karel was created to teach the fundamentals of procedural programming — instruction sequencing, iteration, and conditional branching — separated from syntactic complexity. It adopted the intuitive metaphor of moving a robot named Karel around an imaginary grid world, letting learners experience abstract control-structure concepts as concrete tasks like "cross a wall" or "pick up a beeper," softening the learning curve for beginners.

## Features

- The robot moving through a grid world is given only a small handful of basic instructions, such as move forward, turn right, pick up, and put down
- Learners can learn the concepts of abstraction and reuse by assembling new instructions as user-defined procedures
- Uses iteration (repetition) and conditional branching (sensor checks such as whether a wall is present) to build complex behavior out of combinations of basic instructions alone
- Execution results are always visually fed back as the movement of the robot in the grid world
- Designed to distill Pascal's structured programming ideas down into an extremely minimal instruction set

## Languages It Was Influenced By

- [Pascal](pascal.md)


## Languages It Influenced

Its direct influence on later languages appears to be limited.


## Current Status

Karel is used for educational purposes. It has been a staple teaching tool in introductory computer science education since the 1980s, and it continues to be used today in introductory university courses as a first step into procedural programming.

## Hello World

Since Karel has no concept of string output, the following instead shows the smallest "working program" example, in which the robot takes one step forward and puts down one beeper.

```
BEGINNING-OF-PROGRAM
    BEGINNING-OF-EXECUTION
        move;
        putbeeper;
    END-OF-EXECUTION
END-OF-PROGRAM
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/Karel_%28programming_language%29)
