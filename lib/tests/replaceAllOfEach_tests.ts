import { replaceAllOfEach } from '../privy/replaceAllOfEach';
import { arraysMatch } from '@writetome51/arrays-match';


let arr: any[] = [1, 2, 3, 1, 2, 3, 1, 2, 3, '1', '2', '3'];
let arrCopy = arr;


// Test 1: make sure it works for numbers:
replaceAllOfEach([1, 2, 3], [10, 20, 30], arr);
if (arraysMatch(arr, [10, 20, 30, 10, 20, 30, 10, 20, 30, '1', '2', '3'])) console.log('test 1 passed');
else console.log('test 1 FAILED');


//Test 1A: make sure memory reference isn't broken:
if (arraysMatch(arr, arrCopy)) console.log('test 1A passed');
else console.log('test 1A FAILED');


// Test 2: make sure function performs normally when there's only 1 instance of item to replace:
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
replaceAllOfEach([2], [20], arr);
if (arraysMatch(arr, [1, 20, 3, 4, 5, 6, 7, 8, 9])) console.log('test 2 passed');
else console.log('test 2 FAILED');


// Test 3: make sure it works for strings:
arr = ['aa', 'a', 'aa', 'a', 'aa', 'a', 'aa', 'a', 10, 'aa', 1];
replaceAllOfEach(['a', 'aa'], ['z', 'cc'], arr);
if (arraysMatch(arr, ['cc', 'z', 'cc', 'z', 'cc', 'z', 'cc', 'z', 10, 'cc', 1]))
	console.log('test 3 passed');
else console.log('test 3 FAILED');


// Test 4: make sure it works for booleans:
arr = [true, false, true, false, 1, 0, 1, undefined];
arrCopy = arr;
replaceAllOfEach([false, true], ['no', 'yes'], arr);
if (arraysMatch(arr, ['yes', 'no', 'yes', 'no', 1, 0, 1, undefined])) console.log('test 4 passed');
else console.log('test 4 FAILED');


// Test 4A: make sure memory reference isn't broken:
if (arraysMatch(arr, arrCopy)) console.log('test 4A passed');
else console.log('test 4A FAILED');


// Test 5: make sure it works for arrays:
arr = ['bb', ['bb'], ['b'], 'bb', ['bb'], ['b'], 'bb'];
arrCopy = arr;
replaceAllOfEach([['bb'], ['b']], [[], ['c']], arr);
if (arraysMatch(arr, ['bb', [], ['c'], 'bb', [], ['c'], 'bb'])) console.log('test 5 passed');
else console.log('test 5 FAILED');


// Test 5A: make sure memory reference isn't broken:
if (arraysMatch(arr, arrCopy)) console.log('test 5A passed');
else console.log('test 5A FAILED');


// Test 6:
arr = ['', '0', '', '0', '', '0'];
replaceAllOfEach(['', '0'], [0, ''], arr);
if (arraysMatch(arr, [0, '', 0, '', 0, ''])) console.log('test 6 passed');
else console.log('test 6 FAILED');


// Test 7:
arr = ['', 0, '', 0, '', 0];
replaceAllOfEach(['', 0], [0, 1], arr);
if (arraysMatch(arr, [1, 1, 1, 1, 1, 1])) console.log('test 7 passed');
else console.log('test 7 FAILED');


// Test 8: make sure it's ok to replace items with objects:
arr = ['', 0, '', 0, '', 0];
replaceAllOfEach(['', ''], [0, 1], arr);
if (arraysMatch(arr, [0, 0, 0, 0, 0, 0])) console.log('test 8 passed');
else console.log('test 8 FAILED');


// Test 9: should trigger error if first arg is object:
let errorTriggered = false;
try {
	replaceAllOfEach({}, [], arr);
}
catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 9 passed');
else console.log('test 9 FAILED');


// Test 9A: should trigger error if second arg is object:
errorTriggered = false;
try {
	replaceAllOfEach([1], {}, arr);
}
catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 9A passed');
else console.log('test 9A FAILED');


// Test 10: should trigger error if oldvalue and newvalue are identical:
arr = [1, 2, 3, 1, 2, 3, 1, 2, 3];
errorTriggered = false;
try {
	replaceAllOfEach([1, 3], [2, 3], arr);
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
	replaceAllOfEach([[1]], [[1]], arr);
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
	replaceAllOfEach([10], [1], arr);
}
catch (e) {
	errorTriggered = true;
}
if (!(errorTriggered)) console.log('test 11 passed');
else console.log('test 11 FAILED');
