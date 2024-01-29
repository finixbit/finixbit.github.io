---
title: "Autonomous Hacking of Programs for a 6-month-old baby"
publishedAt: 2024-01-29
description: "Autonomous Hacking of Programs for a 6-month-old baby"
slug: "autonomous-hacking-of-programs-for-a-6-month-old-baby"
isPublish: true
---

## What is Software?
  
Software is a set of instructions, data, or programs used to operate a computer and execute specific tasks - `Webopedia`.


Software can consist of a single Program or multiple Programs.
```
Software = [Program, Program, ...]
```

## What is Program?
Each Program consists of one or more self-contained functions with each doing a specific task and reusable.  
Since there could be multiple Functions, there is always a start function to begin with but capable of calling other functions to do a specific task.
```
Program = [Function, Function, ...]
```

## What is Function?
Each Function consists of one or more instructions to carry out various operations. 
```
Function = [Instruction, Instruction, ...]
```

## What is Instruction?
An Instruction is a basic command or operation.
Instructions differ from Programming languages but I have categorized them to understand vulnerability research.
```
Instruction = 
    Data Definition  
    Data Movement           
    Data Manipulation    
    Conditional Flow         
    Function call        
```

### Instruction - Data Definition
This Instruction is used in the creation of new data/variables.
```rust
# Generic Example
DEFINE var1 = constant:0

# Assembly 
var1 db 0

# Python
var1 = 0

# Javascript
const var1 = 0;
```

### Instruction - Data Movement 
This Instruction is used in moving data/variable into another data/variable.
```rust
# Generic Example
DEFINE var1 = constant:0

# Assembly 
var1 db 0

# Python
var1 = 0

# Javascript
const var1 = 0;
```

### Instruction - Data Manipulation
This Instruction is used in transforming data/variables into another value.
Examples are plus, minus, addition, etc.
```rust
# Generic Example
DEFINE var1 = constant:0

# Assembly 
var1 db 0

# Python
var1 = 0

# Javascript
const var1 = 0;
```

### Instruction - Conditional Flow
This Instruction is used to allow the execution of different sets of instructions based on certain conditions allowing the program to make decisions and choose a specific path of execution depending on whether a particular condition is true or false.
Examples are if, else, jump, etc.
```rust
# Generic Example
IF condition THEN do_something

# Assembly 
var1 db 0

# Python
if condition: do_something()

# Javascript
if (condition) { do_something() }
```

### Instruction - Function call
This Instruction is used in transforming data/variables into another value.
Examples are plus, minus, addition, etc.
```rust
# Generic Example
CALL do_something ARGS variable:var1

# Assembly 
var1 db 0

# Python
do_something(var1)

# Javascript
do_something(var1)
```

## What is a Computer Bugs?
A computer bug refers to an error or unintended behaviour in a computer program that causes it to produce incorrect or unexpected results.

## What is Source Instruction?
So as baby researchers, we want to find a way to trigger an error or unintended behaviour in the computer program.  
This means we need to have some sort of control over what data gets into the computer program which leads to knowing how data gets into the Program.  
This is usually termed as the `Source`.  
This can be Environment Variables, Web Form/Query Input, Command Line Input,  Network data, File data, etc, basically any data from the user.

## What is Sink Instruction?
after knowing where data from users gets into our program, we need to know where our data can potentially be used improperly within the program.  
This is usually called the `Sink`.

## Manually Tracing Source instructions to Sink Instructions
First, we find all Source instructions that hold data we can control.  
Examples are Environment Variables data, Web Form/Query data, Command Line data, NETWORK data, and any data from the user.  
The Example below accepts Environment Variables data using `get_env_input`, therefore `get_env_input` becomes our source Instruction.
```rust
index_number = get_env_input(index_number)
```

Secondly, we find all `Sink` instruction which has the potential of using our data improperly.  
An example is using user-controlled Input Data as an Array Index. What if the user sends the value `15` which is used on an array of 10?
```rust
index_number = get_env_input(index_number)
student_array[10] = {...}
printLine(student_array[index_number])
```
A bug can happen at any type of instruction `[Data Definition, Data Movement, Data Manipulation, Function call, Conditional Flow]`

A bug at the `Data Definition` will look like the sample code below where user-controlled input which is an `integer` type is assigned to an `integer` without validation.
```rust
// user uses "hello world" instead of an integer value as env
int index_number = get_env_input()
```

A bug at a `Data Movement` instruction will look like the sample code below where user-controlled input which is a `string` type is assigned to an `integer` without validation.
```rust
// user uses "hello world" instead of an integer value as env
string index_number = get_env_input()
int another value =  index_number
```

Finally, we manually followed all other instructions where the source input data is used while also checking if there was some validation of our data.  
if there was no validation or poor validation, then we can flag it and manually test it out.  


## Automatically Tracing Source to Sink Instructions 
Sometimes the codebase can be very large and complex to manually look through for bugs.  
We need to represent Programs, Functions, Instructions, and Variables in. a way we can programmatically navigate from our source data to ur sink or potentially vulnerable Instructions.   
 Most language frameworks provide something called `intermediate representation` or in short `IR` which represents your program in a simpler form to be able to write rules/passes to check for bugs.   

### Intermediate Representation IR Resources 
[LLVM IR for all LLVM supported Languages](https://llvm.org/docs/LangRef.html)  
[GCC Gimple for C/C++](https://llvm.org/docs/LangRef.html)  
[Valgrind's VEX IR](https://github.com/angr/pyvex)  
[P-code for all Ghidra Supported Processors](https://riverloopsecurity.com/blog/2019/05/pcode/)
