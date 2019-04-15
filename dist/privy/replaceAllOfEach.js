"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _doMultiReplace_1 = require("./_doMultiReplace");
var array_replace_first_of_all_of_1 = require("@writetome51/array-replace-first-of-all-of");
// Won't work if values contains object.
function replaceAllOfEach(values, newValues, array) {
    _doMultiReplace_1._doMultiReplace(array_replace_first_of_all_of_1.replaceAllOf, values, newValues, array);
}
exports.replaceAllOfEach = replaceAllOfEach;
