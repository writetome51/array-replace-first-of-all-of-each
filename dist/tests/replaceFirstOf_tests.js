"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var replaceFirstOf_replaceFirstOfEach_1 = require("../privy/replaceFirstOf_replaceFirstOfEach");
var arrays_match_1 = require("@writetome51/arrays-match");
var arr = [1, 2, 3, 1, 2, 3, 1, 2, 3, '1', '2', '3'];
var arrCopy = arr;
// Test 1: make sure it works for numbers:
replaceFirstOf_replaceFirstOfEach_1.replaceFirstOf(2, 20, arr);
if (arrays_match_1.arraysMatch(arr, [1, 20, 3, 1, 2, 3, 1, 2, 3, '1', '2', '3']))
    console.log('test 1 passed');
else
    console.log('test 1 FAILED');
//Test 1A: make sure memory reference isn't broken:
if (arrays_match_1.arraysMatch(arr, arrCopy))
    console.log('test 1A passed');
else
    console.log('test 1A FAILED');
// Test 3: make sure it works for strings:
arr = ['aa', 'a', 'aa', 'a', 'aa', 'a', 'aa', 'a', 10, 'aa', 1];
replaceFirstOf_replaceFirstOfEach_1.replaceFirstOf('a', 'z', arr);
if (arrays_match_1.arraysMatch(arr, ['aa', 'z', 'aa', 'a', 'aa', 'a', 'aa', 'a', 10, 'aa', 1]))
    console.log('test 3 passed');
else
    console.log('test 3 FAILED');
// Test 4: make sure it works for booleans:
arr = [true, false, true, false, 1, 0, 1, undefined];
arrCopy = arr;
replaceFirstOf_replaceFirstOfEach_1.replaceFirstOf(false, 'no', arr);
if (arrays_match_1.arraysMatch(arr, [true, 'no', true, false, 1, 0, 1, undefined]))
    console.log('test 4 passed');
else
    console.log('test 4 FAILED');
// Test 5: make sure it works for arrays:
arr = ['bb', ['bb'], ['b'], 'bb', ['bb'], ['b'], 'bb'];
arrCopy = arr;
replaceFirstOf_replaceFirstOfEach_1.replaceFirstOf(['bb'], [], arr);
if (arrays_match_1.arraysMatch(arr, ['bb', [], ['b'], 'bb', ['bb'], ['b'], 'bb']))
    console.log('test 5 passed');
else
    console.log('test 5 FAILED');
// Test 5A: make sure memory reference isn't broken:
if (arrays_match_1.arraysMatch(arr, arrCopy))
    console.log('test 5A passed');
else
    console.log('test 5A FAILED');
// Test 6:
arr = ['', '0', '', '0', '', '0'];
replaceFirstOf_replaceFirstOfEach_1.replaceFirstOf('', 0, arr);
if (arrays_match_1.arraysMatch(arr, [0, '0', '', '0', '', '0']))
    console.log('test 6 passed');
else
    console.log('test 6 FAILED');
// Test 7:
arr = ['', 0, '', 0, '', 0];
replaceFirstOf_replaceFirstOfEach_1.replaceFirstOf('', 1, arr);
if (arrays_match_1.arraysMatch(arr, [1, 0, '', 0, '', 0]))
    console.log('test 7 passed');
else
    console.log('test 7 FAILED');
// Test 8: make sure it's ok to replace items with objects:
arr = ['bb', ['bb'], ['b'], 'bb', ['bb'], ['b'], 'bb'];
replaceFirstOf_replaceFirstOfEach_1.replaceFirstOf(['b'], { prop1: 'b' }, arr);
if (arr[2].prop1 && arr[2].prop1 === 'b')
    console.log('test 8 passed');
else
    console.log('test 8 FAILED');
// Test 9: should trigger error if first arg is object:
var errorTriggered = false;
try {
    replaceFirstOf_replaceFirstOfEach_1.replaceFirstOf({}, [], arr);
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered)
    console.log('test 9 passed');
else
    console.log('test 9 FAILED');
// Test 10: should trigger error if oldvalue and newvalue are identical:
arr = [1, 2, 3, 1, 2, 3, 1, 2, 3];
errorTriggered = false;
try {
    replaceFirstOf_replaceFirstOfEach_1.replaceFirstOf(1, 1, arr);
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered)
    console.log('test 10 passed');
else
    console.log('test 10 FAILED');
// Test 10A: same as test 10, except now its for identical arrays:
arr = [[1], 2, 3, [1], 2, 3, [1], 2, 3];
errorTriggered = false;
try {
    replaceFirstOf_replaceFirstOfEach_1.replaceFirstOf([1], [1], arr);
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered)
    console.log('test 10A passed');
else
    console.log('test 10A FAILED');
// Test 11: should trigger error if oldvalue and newvalue are identical even when oldvalue isn't found
// in the array:
arr = [1, 2, 3, 1, 2, 3, 1, 2, 3];
errorTriggered = false;
try {
    replaceFirstOf_replaceFirstOfEach_1.replaceFirstOf(10, 10, arr);
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered)
    console.log('test 11 passed');
else
    console.log('test 11 FAILED');
// Test 12: should trigger error if third arg is not array:
arr = [1, 2, 3, 1, 2, 3, 1, 2, 3];
errorTriggered = false;
try {
    replaceFirstOf_replaceFirstOfEach_1.replaceFirstOf(10, 1, {});
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered)
    console.log('test 12 passed');
else
    console.log('test 12 FAILED');
