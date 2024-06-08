"use strict";
exports.enGB = void 0;
var _index = require("./en-US/_lib/formatDistance.js");
var _index2 = require("./en-US/_lib/formatRelative.js");
var _index3 = require("./en-US/_lib/localize.js");
var _index4 = require("./en-US/_lib/match.js");

var _index5 = require("./en-GB/_lib/formatLong.js");

/**
 * @category Locales
 * @summary English locale (United Kingdom).
 * @language English
 * @iso-639-2 eng
 * @author Alex [@glintik](https://github.com/glintik)
 */
const enGB = (exports.enGB = {
  code: "en-GB",
  formatDistance: _index.formatDistance,
  formatLong: _index5.formatLong,
  formatRelative: _index2.formatRelative,
  localize: _index3.localize,
  match: _index4.match,
  options: {
    weekStartsOn: 1 /* Monday */,
    firstWeekContainsDate: 4,
  },
});
