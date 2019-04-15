"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var error_if_not_populated_array_1 = require("error-if-not-populated-array");
function _doMultiReplace(replaceFunction, oldValues, newValues, array) {
    _checkArrays([oldValues, newValues, array], error_if_not_populated_array_1.errorIfNotPopulatedArray);
    _errorIfNewValuesIsTooShort(newValues, oldValues);
    __doMultiReplace(replaceFunction, oldValues, newValues, array);
    function _checkArrays(arrays, functionThatChecksThem) {
        arrays.forEach(function (arr) { return functionThatChecksThem(arr); });
    }
    function _errorIfNewValuesIsTooShort(newValues, values) {
        if (newValues.length < values.length)
            throw new Error('The array of new values must have at least the' +
                ' same length as the array of values to replace');
    }
    function __doMultiReplace(replaceFunction, oldValues, newValues, array) {
        var i = -1;
        while (++i < oldValues.length) {
            replaceFunction(oldValues[i], newValues[i], array);
        }
    }
}
exports._doMultiReplace = _doMultiReplace;
