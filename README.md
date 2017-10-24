# dirty-semicolons
Quick and stupid in-place semicolon remover for javascript. WARNING: Does not use a real parser!

## rationale

I wanted to remove semicolons from all my old files. And after looking through too many complicated es-beautifiers, I decided to write a dirty and stupid program.

## WARNING

This is a very stupid program designed for how I write code. Read how it works before using:

1. Read each line in a file (not each parsed javascript code line, but each "physical" line)
2. If the line has only one semicolon then remove the semicolon
3. If it has more than one semicolon, then do not remove it (this covers my for(;;) usage)
4. Overwrite original file unless -o is provided

That's it. 

## installation

    npm i dirty-semicolons

## command-line options

    $ dirty-semicolons --help

    Usage: index [options] <file...>

    Quick and dirty semicolon remover for javascript. WARNING: does not use a real parser. See https://github.com/davidfig/dirty-semicolons

    Options:

        -V, --version  output the version number
        -o, --output   Output file (default is to overwrite original file)
        -h, --help     output usage information

## license  
MIT License  
(c) 2017 [YOPEY YOPEY LLC](https://yopeyopey.com/) by [David Figatner](https://twitter.com/yopey_yopey/)