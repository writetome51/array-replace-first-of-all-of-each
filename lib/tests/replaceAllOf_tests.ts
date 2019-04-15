import { replaceAllOf } from '../privy/replaceAllOf_replaceAllOfEach';
import { arraysMatch } from '@writetome51/arrays-match';


let arr: any[] = [1, 2, 3, 1, 2, 3, 1, 2, 3, '1', '2', '3'];
let arrCopy = arr;


// Test 1: make sure it works for numbers:
replaceAllOf(2, 20, arr);
if (arraysMatch(arr, [1, 20, 3, 1, 20, 3, 1, 20, 3, '1', '2', '3'])) console.log('test 1 passed');
else console.log('test 1 FAILED');


//Test 1A: make sure memory reference isn't broken:
if (arraysMatch(arr, arrCopy)) console.log('test 1A passed');
else console.log('test 1A FAILED');


// Test 2: make sure function performs normally when there's only 1 instance of item to replace:
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
replaceAllOf(2, 20, arr);
if (arraysMatch(arr, [1, 20, 3, 4, 5, 6, 7, 8, 9])) console.log('test 2 passed');
else console.log('test 2 FAILED');


// Test 3: make sure it works for strings:
arr = ['aa', 'a', 'aa', 'a', 'aa', 'a', 'aa', 'a', 10, 'aa', 1];
replaceAllOf('a', 'z', arr);
if (arraysMatch(arr, ['aa', 'z', 'aa', 'z', 'aa', 'z', 'aa', 'z', 10, 'aa', 1])) console.log('test 3 passed');
else console.log('test 3 FAILED');


// Test 4: make sure it works for booleans:
arr = [true, false, true, false, 1, 0, 1, undefined];
arrCopy = arr;
replaceAllOf(false, 'no', arr);
if (arraysMatch(arr, [true, 'no', true, 'no', 1, 0, 1, undefined])) console.log('test 4 passed');
else console.log('test 4 FAILED');


// Test 4A: make sure memory reference isn't broken:
if (arraysMatch(arr, arrCopy)) console.log('test 4A passed');
else console.log('test 4A FAILED');


// Test 5: make sure it works for arrays:
arr = ['bb', ['bb'], ['b'], 'bb', ['bb'], ['b'], 'bb'];
arrCopy = arr;
replaceAllOf(['bb'], [], arr);
if (arraysMatch(arr, ['bb', [], ['b'], 'bb', [], ['b'], 'bb'])) console.log('test 5 passed');
else console.log('test 5 FAILED');


// Test 5A: make sure memory reference isn't broken:
if (arraysMatch(arr, arrCopy)) console.log('test 5A passed');
else console.log('test 5A FAILED');


// Test 6:
arr = ['', '0', '', '0', '', '0'];
replaceAllOf('', 0, arr);
if (arraysMatch(arr, [0, '0', 0, '0', 0, '0'])) console.log('test 6 passed');
else console.log('test 6 FAILED');


// Test 7:
arr = ['', 0, '', 0, '', 0];
replaceAllOf('', 1, arr);
if (arraysMatch(arr, [1, 0, 1, 0, 1, 0])) console.log('test 7 passed');
else console.log('test 7 FAILED');


// Test 8: make sure it's ok to replace items with objects:
arr = ['bb', ['bb'], ['b'], 'bb', ['bb'], ['b'], 'bb'];
replaceAllOf(['b'], {prop1: 'b'}, arr);
if (arr[2].prop1 && arr[5].prop1 && arr[2].prop1 === 'b' && arr[5].prop1 === 'b')
	console.log('test 8 passed');
else console.log('test 8 FAILED');


// Test 9: should trigger error if first arg is object:
let errorTriggered = false;
try {
	replaceAllOf({}, [], arr);
}
catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 9 passed');
else console.log('test 9 FAILED');


// Test 10: should trigger error if oldvalue and newvalue are identical:
arr = [1, 2, 3, 1, 2, 3, 1, 2, 3];
errorTriggered = false;
try {
	replaceAllOf(1, 1, arr);
}
catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 10 passed');
else console.log('test 10 FAILED');


// Test 10A: same as test 10, except now its for identical arrays:
arr = [[1], 2, 3, [1], 2, 3, [1], 2, 3];
errorTriggered = false;
try {
	replaceAllOf([1], [1], arr);
}
catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 10A passed');
else console.log('test 10A FAILED');


// Test 11: should NOT trigger error when oldvalue and newvalue are identical if oldvalue isn't found
// in the array:
arr = [1, 2, 3, 1, 2, 3, 1, 2, 3];
errorTriggered = false;
try {
	replaceAllOf(10, 10, arr);
}
catch (e) {
	errorTriggered = true;
}
if (!(errorTriggered)) console.log('test 11 passed');
else console.log('test 11 FAILED');