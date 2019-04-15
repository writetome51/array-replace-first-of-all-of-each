import { _doMultiReplace } from './_doMultiReplace';
import { replaceFirstOf } from '@writetome51/array-replace-first-of-all-of';


// Won't work if values contains object.

export function replaceFirstOfEach(values: any[], newValues: any[], array): void {
	_doMultiReplace(replaceFirstOf, values, newValues, array);
}
