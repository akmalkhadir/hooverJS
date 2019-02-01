# HooverJS
A program that navigates an imaginary robotic hoover through an equally imaginary room.

## Instructions to run

* On a machine with node and npm installed, clone this repo and navigate to the repo folder 

* `npm install` to install dependencies

* `npm start` to run the program

* `npm test` to run tests

## Input

Input for this program can be modified in `input.txt` file in the root directory. The format for input is as the following:

Example:

```
5 5
1 2
1 0
2 2
2 3
NNESEESWNWW
```

* the first line holds the room dimensions (X Y), separated by a single space (all coordinates will be presented in this format)
* the second line holds the hoover position
* subsequent lines contain the zero or more positions of patches of dirt (one per line)
* the next line then always contains the driving instructions (at least one)

### Additional features to consider
* Write input validations that stops bad/wrong input from running.