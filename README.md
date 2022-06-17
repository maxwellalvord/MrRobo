# Mr Robo
By Maxwell Alvord

A simple html page to translate numbers into Robot (made up language).

## technologies Used

* HTML
* CSS
* Bootstrap
* JQuery
* MarkDown

## Description

This page will allow the user to input a number and be able to see it translated into robot. Simply enter a number and click the button.

## Setup/Installation Requirements

* Clone this repository to your desktop.
* Open MrRobo folder.
* Open index.html

### Alternative Setup
* Visit the [gh-pages](https://maxwellalvord.github.io/MrRobo/)

## Known Bugs
* Webpage will crash if inputted number is 1,000,000 or more, limit set to error at 10,000.

## License
[MIT](https://opensource.org/licenses/MIT)

Copyright &copy;
2022 Maxwell Alvord

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


## Manual testing

Describe: beepBoop()

Test: "It should return a beep for 1 and boop for 2"
Code: beepBoop(1);
Expected Output: beep

Test: "It should return a beep for 1 and boop for 2"
Code: beepBoop(2);
Expected Output: beep

Test: "It should return the translated language but to 15"
Code: let answer = "";
let spaceArray = number.split(" ");
beepBoop(7);
Expected Output: "0 beep boop Wybmn 4 5 6 7"
