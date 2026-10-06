# PostScript

- Year: 1982
- Designer(s): John Warnock and others (Adobe)
- Paradigm(s): stack-based, declarative
- Family: domain-specific

## Problem It Aimed to Solve

In the early 1980s, laser printers and typesetting machines each had their own proprietary control codes depending on the manufacturer and model, making it difficult to print the same document accurately on a different output device. John Warnock and others, who had been researching page description at Xerox PARC, conceived of a language to solve this problem by describing the placement of text, graphics, and images on a page in a device-independent way.

Because Xerox was reluctant to commercialize the technology, Warnock and colleagues left to found Adobe and turned it into a product called PostScript. A defining characteristic was its Forth-derived, stack-based execution model, which allowed the processor built into a printer to directly interpret and execute the program.

## Features

- Describes commands using a stack-based postfix notation (reverse Polish notation)
- Describes an entire page as a "program," which the printer executes to produce the rendered output
- Can express high-quality, device-independent graphics and typesetting using Bezier curves and outline fonts
- Turing-complete, and capable of general-purpose computation such as conditionals and loops
- Became the core technology of the desktop publishing (DTP) revolution, through devices such as the LaserWriter co-developed with Apple
- Gave rise to the Type font formats, in which even the font outline data itself is described as a program

## Languages It Was Influenced By

- [Forth](forth.md)
- [Lisp](lisp.md)


## Languages It Influenced

- [Processing](processing.md)


## Current Status

PostScript is now a legacy technology, with new practical use almost entirely replaced by PDF, but its historical significance as a foundational technology of the printing industry, with immense influence over many years, remains great. Some print workflows and RIPs (raster image processors) still continue to use PostScript implementations.

## Hello World

```postscript
%!PS
/Helvetica findfont 24 scalefont setfont
72 720 moveto
(Hello, World!) show
showpage
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/PostScript)
