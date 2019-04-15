# replaceFirstOfEach(<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;values,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;newValues,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;array<br>): void

First instance of `values[i]` found in `array` gets replaced with `newValues[i]`.  
This is repeated for each value in `values`.

# replaceAllOfEach(<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;values,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;newValues,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;array<br>): void

All instances of `values[i]` found in `array` get replaced with `newValues[i]`.   
This is repeated for each value in `values`.

NOTICE :  For all the functions, any parameter called `value` cannot be an  
object.  It can be an array.  
Any parameter called `values` cannot contain an object.  It can contain arrays.  
You can, however, pass an object as a `newValue`, or have an object inside of  
`newValues`.

## Installation
`npm i  @writetome51/array-replace-first-of-all-of-each`


## Examples
```
let arr = [1,2,3,1,2,3,1,2,3];  
replaceFirstOfEach([1,2,3], [10,20,30], arr);  
// arr is now [10,20,30,1,2,3,1,2,3]

let arr = [1,2,3,1,2,3,1,2,3];  
replaceAllOfEach([1,2,3], [10,20,30], arr);  
// arr is now [10,20,30,10,20,30,10,20,30]
```

## Loading
```
// if using TypeScript:
import {replaceFirstOfEach,  replaceAllOfEach}   
	from '@writetome51/array-replace-first-of-all-of-each';

// if using ES5 JavaScript:
var replaceFirstOfEach = 
	require('@writetome51/array-replace-first-of-all-of-each').replaceFirstOfEach;
var replaceAllOfEach = 
	require('@writetome51/array-replace-first-of-all-of-each').replaceAllOfEach;
```
