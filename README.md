_WIP: README Goes here_

----------
## TDD Specs

### **Describe: neighbor()**

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
>Expected Output: ```[0, "Beep!", 2, 3, 4, 5, 6, 7, 8, 9, "Beep!", "Beep!"]```

>Test: "It should substitute "Boop!" in the return array for the number 2."  
>Code: ```neighbor(2);```  
>Expected Output: ```[0, "Beep!", "Boop!"]```

>Test: "It should substitute "Boop!" in the return array for any number containing a 2."  
>Code: ```neighbor("12");```  
>Expected Output: ```[0, "Beep!", 2, ... 9, "Beep!", "Beep!", "Boop!"]```

>Test: "If a number contains both a 1 and a 2, it will substitute "Boop!"."  
>Code: ```neighbor("12");```  
>Expected Output: ```[0, "Beep!", 2, ... 9, "Beep!", "Beep!", "Boop!"]```