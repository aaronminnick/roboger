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