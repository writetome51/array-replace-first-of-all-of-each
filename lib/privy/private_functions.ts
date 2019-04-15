import { errorIfNotPopulatedArray } from 'error-if-not-populated-array';


export function _doMultiReplace(replaceFunction, oldValues, newValues, array) {
	
	_checkArrays([oldValues, newValues, array], errorIfNotPopulatedArray);
	_errorIfNewValuesIsTooShort(newValues, oldValues);

	__doMultiReplace(replaceFunction, oldValues, newValues, array);


	function _checkArrays(arrays, functionThatChecksThem) {
		arrays.forEach((arr) => functionThatChecksThem(arr));
	}


	function _errorIfNewValuesIsTooShort(newValues, values) {
		if (newValues.length < values.length) throw new Error('The array of new values must have at least the' +
			' same length as the array of values to replace');
	}


	function __doMultiReplace(replaceFunction, oldValues, newValues, array) {
		let i = -1;
		while (++i < oldValues.length) {
			replaceFunction(oldValues[i], newValues[i], array);
		}
	}


}
