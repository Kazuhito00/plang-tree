# Greenfoot

- Year: 2006
- Designer(s): Michael Kölling, Poul Henriksen
- Paradigm(s): object-oriented, visual, event-driven
- Family: educational-visual

## Problem It Aimed to Solve

Classes, objects, inheritance, and polymorphism, the core concepts of object-oriented programming, are difficult for beginners to grasp by just looking at code. Greenfoot tackled this problem by letting learners experience these concepts, based on the practical language Java, in the visible form of 2D simulations and games. Because the code you write can be seen immediately as a character's movement on screen, it aimed to be an educational environment where the correspondence between class definitions and object behavior could be learned intuitively.

## Features

- A hybrid development environment where you write ordinary Java source code while classes are visually arranged as icons and inheritance relationships are displayed
- Objects called "actors" are placed in a 2D world, and each actor's method calls can be executed interactively with results confirmed immediately
- Uses a standard Java compiler and runtime as-is, so the language specification itself is completely shared with Java
- Frame-by-frame update processing for games and simulations (the `act` method) teaches an event-driven program structure
- A class diagram of inheritance relationships is displayed at all times in the editor, emphasizing the visualization of object-oriented design

## Languages It Was Influenced By

- [Java](java.md)


## Languages It Influenced

Its direct influence on later languages appears to be limited.


## Current Status

Greenfoot is used for educational purposes. It continues to be adopted today as teaching material for practically learning object orientation, in introductory Java courses ranging from secondary education to university general education.

## Hello World

Inside an actor class's `act` method, a string is printed to the console using Greenfoot's standard message output.

```java
public class MyActor extends Actor
{
    public void act()
    {
        System.out.println("Hello, World!");
    }
}
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/Greenfoot)
