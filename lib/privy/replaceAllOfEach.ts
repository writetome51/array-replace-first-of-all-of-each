import { _doMultiReplace } from './_doMultiReplace';
import { replaceAllOf } from '@writetome51/array-replace-first-of-all-of';


// Won't work if values contains object.

export function replaceAllOfEach(values: any[], newValues: any[], array) {
	_doMultiReplace(replaceAllOf, values, newValues, array);
}
