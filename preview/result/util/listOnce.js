"use strict";
/**
 * Check if `value` is already mentioned in `list` (expected to
 * be an array), otherwise push the value onto the end of the list.
 *
 * @param {[]} list An array that might include `value`.
 * @param {*} value What might be included in `list`.
 */

function listOnce(list, value) {
  if (!list.includes(value)) list.push(value);
}

module.exports = listOnce;