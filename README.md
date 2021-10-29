## Mr. Roboger's Neighborhood
#### _by Aaron Minnick_
### Technologies Used:
* HTML
* CSS (including Bootstrap)
* Javascript (Including jQuery)

This is the week 3 independent project at [Epicodus](https://www.epicodus.com). The goal of the project is to take a number from the user and return a range of numbers from 0 to the inputted number with the following substitutions made:

* Numbers that contain a 1: all digits are replaced (all digits) with "Beep!"
* Numbers that contain a 2: all digits are replaced (all digits) with "Boop!"
* Numbers that contain a 3: all digits are replaced (all digits) with "Won't you be my neighbor?"
* _Presence of a 3 overrules a 1 or 2, and presence of a 2 overules a 1. So 21 follows the third rule, and 31 or 213 follow the third._

We were required to use a loop and to practice test driven development. To see a list of my TDD specs, please scroll to the end of the readme.

To check out the project, click [HERE](https://aaronminnick.github.io/roboger/). _(For an easter egg, try putting in a negative number, or a very large number.)_ Or, follow the setup instructions below to launch the page from a local copy on your machine.

### Setup Instructions:
_(Please note, the below instructions are using gitbash on a Windows computer. Commands may vary if you are using a different OS or terminal program.)_
* Initialize a local repository in your desired location using the terminal:
```
$ git init
```
* Clone this repository to your local repository (the link may be easily got using the green "Code" button on the github page):
```
$ git clone https://github.com/aaronminnick/roboger
```
* Open index.html with your default browser:
```
$ start index.html
```
**Or** you may use the green "Code" button to download the files to your computer. Then simply extract the package, and open index.html with your browser of choice.

### Known Bugs/Issues:
* The program bogs down upwards of ~10000 as an input. For now, there is a humorous alert message to dismiss to give you something to do while you wait for the results to load.

_Thanks for reading! Please feel free to contact me with feedback!_
***
#### [License: CC-BY-NC-SA](https://creativecommons.org/licenses/by-nc-sa/4.0/legalcode)
![](https://licensebuttons.net/l/by-nc-sa/3.0/88x31.png)
#### Copyright (c) 2021 Aaron Minnick

***
### TDD Specs

#### **Describe: neighbor()**

>Test: "It should return an array containing 0 if the number 0 is inputted."  
>Code: ```neighbor(0);```  
>Expected Output: ```[0]```

>Test: "It should return an array of length n+1 (to include 0) if the number n is inputted."  
>Code: ```neighbor(4);```  
>Expected Output: ```[0, 1, 2, 3, 4]```

>Test: "It should return null if not given a number as input."  
>Code: ```neighbor("0");```  
>Expected Output: ```null```

>Test: "It should return null if given NaN or Infinity as input (which js considers as numbers)."  
>Code: ```neighbor(NaN);```  
>Alt.Code: ```neighbor(Infinity);```    
>Expected Output: ```null```

>Test: "It should substitute "Beep!" in the return array for the number 1."  
>Code: ```neighbor(1);```  
>Expected Output: ```[0, "Beep!"]```

>Test: "It should substitute "Beep!" in the return array for any number containing a 1."  
>Code: ```neighbor("11");```  
>Expected Output: ```[0, "Beep!", 2, ... 9, "Beep!", "Beep!"]```

>Test: "It should substitute "Boop!" in the return array for the number 2."  
>Code: ```neighbor(2);```  
>Expected Output: ```[0, "Beep!", "Boop!"]```

>Test: "It should substitute "Boop!" in the return array for any number containing a 2."  
>Code: ```neighbor("12");```  
>Expected Output: ```[0, "Beep!", "Boop!", 4 ... 9, "Beep!", "Beep!", "Boop!"]```

>Test: "If a number contains both a 1 and a 2, it will substitute "Boop!"."  
>Code: ```neighbor("12");```  
>Expected Output: ```[0, "Beep!", "Boop!", 4 ... 9, "Beep!", "Beep!", "Boop!"]```

>Test: "It should substitute "Won't you be my neighbor?" in the return array for the number 3."  
>Code: ```neighbor(3);```  
>Expected Output: ```[0, "Beep!", "Boop!", "Won't you be my neighbor?"]```

>Test: "It should substitute "Won't you be my neighbor?" in the return array for any number containing a 3."  
>Code: ```neighbor("13");```  
>Expected Output: ```[0, "Beep!", "Boop!", "Won't you be my neighbor?", 4, ... 9, "Beep!", "Beep!", "Boop!", "Won't you be my neighbor?"]```

>Test: "If a number contains both a 1 and a 3, it will substitute "Won't you be my neighbor?"."  
>Code: ```neighbor("13");```  
>Expected Output: ```[0, "Beep!", "Boop!", "Won't you be my neighbor?", 4, ... 9, "Beep!", "Beep!", "Boop!", "Won't you be my neighbor?"]```

>Test: "If a number contains both a 2 and a 3, it will substitute "Won't you be my neighbor?"."  
>Code: ```neighbor("23");```  
>Expected Output: ```[0, "Beep!", "Boop!", "Won't you be my neighbor?", 4, ... 9, "Beep!", "Beep!", "Boop!", "Won't you be my neighbor?", "Beep!", "Beep!", "Beep!", "Beep!", "Beep!", "Beep!", "Boop!", "Boop!", "Boop!", "Won't you be my neighbor?"]```

#### **Describe: listMaker()**

>Test: "It should accept an array and return it as a joined string with each item of the array wrapped in li tags."  
>Code: ```listMaker([0, "Beep!", "Boop!"]);```  
>Expected Output: ```"<li>0</li><li>Beep!</li><li>Boop!</li>"```

>Test: "It should work as intended for an array of only one item."  
>Code: ```listMaker([0]);```  
>Expected Output: ```"<li>0</li>"```

>Test: "It should return array values preceded by the number value in binary."
>Code: ```listMaker([0, "Beep!", "Boop!]");```  
>Expected Output: ```<li>0: 0</li><li>1: Beep!</li><li>10: Boop!</li>```