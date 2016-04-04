[![Coverage Status](https://coveralls.io/repos/github/mormrod/setgame/badge.svg?branch=master)](https://coveralls.io/github/mormrod/setgame?branch=master)

# Overview
SetGame is a simple Javascript representation of a similar card game called "Set".  I do not own the Copyright on the original and I just present this code purely for demonstration and non-profit purposes.  The aim is to make the code as light as possible using a combination of tools including Gulp, script concatenation, SASS, browserify, and Bower and NPM package managers.

## Installation
1. Clone the repo.
2. Run "bower install" at the root.
3. Run "npm install" at the root.

## Running
1. Run "gulp" at the root, and it will build all of the code into a new subfolder "/public".
2. Setup your webhost with "public" as the root folder.
3. Go to your webhost, and it will open "index.html".  Alternatively, just open "index.html" in a web browser.

## The Game
When the game opens you are given 30 random cards. They can be made up from the following:
1. Contain 1, 2 or 3 "shapes".
2. Those "shapes" can be either Red, Green or Blue.
3. The "shapes" can either be coloured-in or just an outline.
4. The "shapes" can either be a Plus sign, a Paper plane, a Heart or a Trash can.
The aim is to remove as many cards from the screen as possible by finding all the "Sets".  Bear in mind, as it's randomly generated, you will very rarely be able to clear the screen!  But the fun is trying.. right?

## How to Play
The basic rules are:
* You must select three cards that you believe belong in a Set.
* A "Set" can be three cards where:
* * ALL THREE have the SAME number of shapes, or ALL THREE have completely different number of shapes (i.e no two are the same).
* * ALL THREE have the SAME colour shapes, or ALL THREE have completely different coloured shapes (i.e no two are the same).
* * ALL THREE have the SAME style of shapes (coloured-in or outline), or ALL THREE have completely different style of shapes (i.e no two are the same).
* * ALL THREE have the SAME shape, or ALL THREE have completely different shapes (i.e no two are the same).
* If your selection is a set then those cards will disappear.  If your selection is not a set then the cards will deselect ready for you to try again.  A brief description of why your selection is not a Set will appear at the bottom of the page.
* To restart, just refresh the screen and the cards will be randomly generated again.

## Changelog

* 1.0.0 - Created and committed initial working version of the application
