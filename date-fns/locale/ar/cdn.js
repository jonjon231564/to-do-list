function _typeof(o) {"@babel/helpers - typeof";return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {return typeof o;} : function (o) {return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;}, _typeof(o);}function ownKeys(e, r) {var t = Object.keys(e);if (Object.getOwnPropertySymbols) {var o = Object.getOwnPropertySymbols(e);r && (o = o.filter(function (r) {return Object.getOwnPropertyDescriptor(e, r).enumerable;})), t.push.apply(t, o);}return t;}function _objectSpread(e) {for (var r = 1; r < arguments.length; r++) {var t = null != arguments[r] ? arguments[r] : {};r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {_defineProperty(e, r, t[r]);}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));});}return e;}function _defineProperty(obj, key, value) {key = _toPropertyKey(key);if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _toPropertyKey(t) {var i = _toPrimitive(t, "string");return "symbol" == _typeof(i) ? i : String(i);}function _toPrimitive(t, r) {if ("object" != _typeof(t) || !t) return t;var e = t[Symbol.toPrimitive];if (void 0 !== e) {var i = e.call(t, r || "default");if ("object" != _typeof(i)) return i;throw new TypeError("@@toPrimitive must return a primitive value.");}return ("string" === r ? String : Number)(t);}(function (_window$dateFns) {var __defProp = Object.defineProperty;
  var __export = function __export(target, all) {
    for (var name in all)
    __defProp(target, name, {
      get: all[name],
      enumerable: true,
      configurable: true,
      set: function set(newValue) {return all[name] = function () {return newValue;};}
    });
  };

  // lib/locale/ar/_lib/formatDistance.mjs
  var formatDistanceLocale = {
    lessThanXSeconds: {
      one: "\u0623\u0642\u0644 \u0645\u0646 \u062B\u0627\u0646\u064A\u0629",
      two: "\u0623\u0642\u0644 \u0645\u0646 \u062B\u0627\u0646\u064A\u062A\u064A\u0646",
      threeToTen: "\u0623\u0642\u0644 \u0645\u0646 {{count}} \u062B\u0648\u0627\u0646\u064A",
      other: "\u0623\u0642\u0644 \u0645\u0646 {{count}} \u062B\u0627\u0646\u064A\u0629"
    },
    xSeconds: {
      one: "\u062B\u0627\u0646\u064A\u0629 \u0648\u0627\u062D\u062F\u0629",
      two: "\u062B\u0627\u0646\u064A\u062A\u0627\u0646",
      threeToTen: "{{count}} \u062B\u0648\u0627\u0646\u064A",
      other: "{{count}} \u062B\u0627\u0646\u064A\u0629"
    },
    halfAMinute: "\u0646\u0635\u0641 \u062F\u0642\u064A\u0642\u0629",
    lessThanXMinutes: {
      one: "\u0623\u0642\u0644 \u0645\u0646 \u062F\u0642\u064A\u0642\u0629",
      two: "\u0623\u0642\u0644 \u0645\u0646 \u062F\u0642\u064A\u0642\u062A\u064A\u0646",
      threeToTen: "\u0623\u0642\u0644 \u0645\u0646 {{count}} \u062F\u0642\u0627\u0626\u0642",
      other: "\u0623\u0642\u0644 \u0645\u0646 {{count}} \u062F\u0642\u064A\u0642\u0629"
    },
    xMinutes: {
      one: "\u062F\u0642\u064A\u0642\u0629 \u0648\u0627\u062D\u062F\u0629",
      two: "\u062F\u0642\u064A\u0642\u062A\u0627\u0646",
      threeToTen: "{{count}} \u062F\u0642\u0627\u0626\u0642",
      other: "{{count}} \u062F\u0642\u064A\u0642\u0629"
    },
    aboutXHours: {
      one: "\u0633\u0627\u0639\u0629 \u0648\u0627\u062D\u062F\u0629 \u062A\u0642\u0631\u064A\u0628\u0627\u064B",
      two: "\u0633\u0627\u0639\u062A\u064A\u0646 \u062A\u0642\u0631\u064A\u0628\u0627",
      threeToTen: "{{count}} \u0633\u0627\u0639\u0627\u062A \u062A\u0642\u0631\u064A\u0628\u0627\u064B",
      other: "{{count}} \u0633\u0627\u0639\u0629 \u062A\u0642\u0631\u064A\u0628\u0627\u064B"
    },
    xHours: {
      one: "\u0633\u0627\u0639\u0629 \u0648\u0627\u062D\u062F\u0629",
      two: "\u0633\u0627\u0639\u062A\u0627\u0646",
      threeToTen: "{{count}} \u0633\u0627\u0639\u0627\u062A",
      other: "{{count}} \u0633\u0627\u0639\u0629"
    },
    xDays: {
      one: "\u064A\u0648\u0645 \u0648\u0627\u062D\u062F",
      two: "\u064A\u0648\u0645\u0627\u0646",
      threeToTen: "{{count}} \u0623\u064A\u0627\u0645",
      other: "{{count}} \u064A\u0648\u0645"
    },
    aboutXWeeks: {
      one: "\u0623\u0633\u0628\u0648\u0639 \u0648\u0627\u062D\u062F \u062A\u0642\u0631\u064A\u0628\u0627",
      two: "\u0623\u0633\u0628\u0648\u0639\u064A\u0646 \u062A\u0642\u0631\u064A\u0628\u0627",
      threeToTen: "{{count}} \u0623\u0633\u0627\u0628\u064A\u0639 \u062A\u0642\u0631\u064A\u0628\u0627",
      other: "{{count}} \u0623\u0633\u0628\u0648\u0639\u0627 \u062A\u0642\u0631\u064A\u0628\u0627"
    },
    xWeeks: {
      one: "\u0623\u0633\u0628\u0648\u0639 \u0648\u0627\u062D\u062F",
      two: "\u0623\u0633\u0628\u0648\u0639\u0627\u0646",
      threeToTen: "{{count}} \u0623\u0633\u0627\u0628\u064A\u0639",
      other: "{{count}} \u0623\u0633\u0628\u0648\u0639\u0627"
    },
    aboutXMonths: {
      one: "\u0634\u0647\u0631 \u0648\u0627\u062D\u062F \u062A\u0642\u0631\u064A\u0628\u0627\u064B",
      two: "\u0634\u0647\u0631\u064A\u0646 \u062A\u0642\u0631\u064A\u0628\u0627",
      threeToTen: "{{count}} \u0623\u0634\u0647\u0631 \u062A\u0642\u0631\u064A\u0628\u0627",
      other: "{{count}} \u0634\u0647\u0631\u0627 \u062A\u0642\u0631\u064A\u0628\u0627\u064B"
    },
    xMonths: {
      one: "\u0634\u0647\u0631 \u0648\u0627\u062D\u062F",
      two: "\u0634\u0647\u0631\u0627\u0646",
      threeToTen: "{{count}} \u0623\u0634\u0647\u0631",
      other: "{{count}} \u0634\u0647\u0631\u0627"
    },
    aboutXYears: {
      one: "\u0633\u0646\u0629 \u0648\u0627\u062D\u062F\u0629 \u062A\u0642\u0631\u064A\u0628\u0627\u064B",
      two: "\u0633\u0646\u062A\u064A\u0646 \u062A\u0642\u0631\u064A\u0628\u0627",
      threeToTen: "{{count}} \u0633\u0646\u0648\u0627\u062A \u062A\u0642\u0631\u064A\u0628\u0627\u064B",
      other: "{{count}} \u0633\u0646\u0629 \u062A\u0642\u0631\u064A\u0628\u0627\u064B"
    },
    xYears: {
      one: "\u0633\u0646\u0629 \u0648\u0627\u062D\u062F",
      two: "\u0633\u0646\u062A\u0627\u0646",
      threeToTen: "{{count}} \u0633\u0646\u0648\u0627\u062A",
      other: "{{count}} \u0633\u0646\u0629"
    },
    overXYears: {
      one: "\u0623\u0643\u062B\u0631 \u0645\u0646 \u0633\u0646\u0629",
      two: "\u0623\u0643\u062B\u0631 \u0645\u0646 \u0633\u0646\u062A\u064A\u0646",
      threeToTen: "\u0623\u0643\u062B\u0631 \u0645\u0646 {{count}} \u0633\u0646\u0648\u0627\u062A",
      other: "\u0623\u0643\u062B\u0631 \u0645\u0646 {{count}} \u0633\u0646\u0629"
    },
    almostXYears: {
      one: "\u0645\u0627 \u064A\u0642\u0627\u0631\u0628 \u0633\u0646\u0629 \u0648\u0627\u062D\u062F\u0629",
      two: "\u0645\u0627 \u064A\u0642\u0627\u0631\u0628 \u0633\u0646\u062A\u064A\u0646",
      threeToTen: "\u0645\u0627 \u064A\u0642\u0627\u0631\u0628 {{count}} \u0633\u0646\u0648\u0627\u062A",
      other: "\u0645\u0627 \u064A\u0642\u0627\u0631\u0628 {{count}} \u0633\u0646\u0629"
    }
  };
  var formatDistance = function formatDistance(token, count, options) {
    var usageGroup = formatDistanceLocale[token];
    var result;
    if (typeof usageGroup === "string") {
      result = usageGroup;
    } else if (count === 1) {
      result = usageGroup.one;
    } else if (count === 2) {
      result = usageGroup.two;
    } else if (count <= 10) {
      result = usageGroup.threeToTen.replace("{{count}}", String(count));
    } else {
      result = usageGroup.other.replace("{{count}}", String(count));
    }
    if (options !== null && options !== void 0 && options.addSuffix) {
      if (options.comparison && options.comparison > 0) {
        return "\u062E\u0644\u0627\u0644 " + result;
      } else {
        return "\u0645\u0646\u0630 " + result;
      }
    }
    return result;
  };

  // lib/locale/_lib/buildFormatLongFn.mjs
  function buildFormatLongFn(args) {
    return function () {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var width = options.width ? String(options.width) : args.defaultWidth;
      var format = args.formats[width] || args.formats[args.defaultWidth];
      return format;
    };
  }

  // lib/locale/ar/_lib/formatLong.mjs
  var dateFormats = {
    full: "EEEE\u060C do MMMM y",
    long: "do MMMM y",
    medium: "d MMM y",
    short: "dd/MM/yyyy"
  };
  var timeFormats = {
    full: "HH:mm:ss",
    long: "HH:mm:ss",
    medium: "HH:mm:ss",
    short: "HH:mm"
  };
  var dateTimeFormats = {
    full: "{{date}} '\u0639\u0646\u062F \u0627\u0644\u0633\u0627\u0639\u0629' {{time}}",
    long: "{{date}} '\u0639\u0646\u062F \u0627\u0644\u0633\u0627\u0639\u0629' {{time}}",
    medium: "{{date}}, {{time}}",
    short: "{{date}}, {{time}}"
  };
  var formatLong = {
    date: buildFormatLongFn({
      formats: dateFormats,
      defaultWidth: "full"
    }),
    time: buildFormatLongFn({
      formats: timeFormats,
      defaultWidth: "full"
    }),
    dateTime: buildFormatLongFn({
      formats: dateTimeFormats,
      defaultWidth: "full"
    })
  };

  // lib/locale/ar/_lib/formatRelative.mjs
  var formatRelativeLocale = {
    lastWeek: "eeee '\u0627\u0644\u0645\u0627\u0636\u064A \u0639\u0646\u062F \u0627\u0644\u0633\u0627\u0639\u0629' p",
    yesterday: "'\u0627\u0644\u0623\u0645\u0633 \u0639\u0646\u062F \u0627\u0644\u0633\u0627\u0639\u0629' p",
    today: "'\u0627\u0644\u064A\u0648\u0645 \u0639\u0646\u062F \u0627\u0644\u0633\u0627\u0639\u0629' p",
    tomorrow: "'\u063A\u062F\u0627 \u0639\u0646\u062F \u0627\u0644\u0633\u0627\u0639\u0629' p",
    nextWeek: "eeee '\u0627\u0644\u0642\u0627\u062F\u0645 \u0639\u0646\u062F \u0627\u0644\u0633\u0627\u0639\u0629' p",
    other: "P"
  };
  var formatRelative = function formatRelative(token) {return formatRelativeLocale[token];};

  // lib/locale/_lib/buildLocalizeFn.mjs
  function buildLocalizeFn(args) {
    return function (value, options) {
      var context = options !== null && options !== void 0 && options.context ? String(options.context) : "standalone";
      var valuesArray;
      if (context === "formatting" && args.formattingValues) {
        var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
        var width = options !== null && options !== void 0 && options.width ? String(options.width) : defaultWidth;
        valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
      } else {
        var _defaultWidth = args.defaultWidth;
        var _width = options !== null && options !== void 0 && options.width ? String(options.width) : args.defaultWidth;
        valuesArray = args.values[_width] || args.values[_defaultWidth];
      }
      var index = args.argumentCallback ? args.argumentCallback(value) : value;
      return valuesArray[index];
    };
  }

  // lib/locale/ar/_lib/localize.mjs
  var eraValues = {
    narrow: ["\u0642", "\u0628"],
    abbreviated: ["\u0642.\u0645.", "\u0628.\u0645."],
    wide: ["\u0642\u0628\u0644 \u0627\u0644\u0645\u064A\u0644\u0627\u062F", "\u0628\u0639\u062F \u0627\u0644\u0645\u064A\u0644\u0627\u062F"]
  };
  var quarterValues = {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["\u06311", "\u06312", "\u06313", "\u06314"],
    wide: ["\u0627\u0644\u0631\u0628\u0639 \u0627\u0644\u0623\u0648\u0644", "\u0627\u0644\u0631\u0628\u0639 \u0627\u0644\u062B\u0627\u0646\u064A", "\u0627\u0644\u0631\u0628\u0639 \u0627\u0644\u062B\u0627\u0644\u062B", "\u0627\u0644\u0631\u0628\u0639 \u0627\u0644\u0631\u0627\u0628\u0639"]
  };
  var monthValues = {
    narrow: ["\u064A", "\u0641", "\u0645", "\u0623", "\u0645", "\u064A", "\u064A", "\u0623", "\u0633", "\u0623", "\u0646", "\u062F"],
    abbreviated: [
    "\u064A\u0646\u0627\u064A\u0631",
    "\u0641\u0628\u0631\u0627\u064A\u0631",
    "\u0645\u0627\u0631\u0633",
    "\u0623\u0628\u0631\u064A\u0644",
    "\u0645\u0627\u064A\u0648",
    "\u064A\u0648\u0646\u064A\u0648",
    "\u064A\u0648\u0644\u064A\u0648",
    "\u0623\u063A\u0633\u0637\u0633",
    "\u0633\u0628\u062A\u0645\u0628\u0631",
    "\u0623\u0643\u062A\u0648\u0628\u0631",
    "\u0646\u0648\u0641\u0645\u0628\u0631",
    "\u062F\u064A\u0633\u0645\u0628\u0631"],

    wide: [
    "\u064A\u0646\u0627\u064A\u0631",
    "\u0641\u0628\u0631\u0627\u064A\u0631",
    "\u0645\u0627\u0631\u0633",
    "\u0623\u0628\u0631\u064A\u0644",
    "\u0645\u0627\u064A\u0648",
    "\u064A\u0648\u0646\u064A\u0648",
    "\u064A\u0648\u0644\u064A\u0648",
    "\u0623\u063A\u0633\u0637\u0633",
    "\u0633\u0628\u062A\u0645\u0628\u0631",
    "\u0623\u0643\u062A\u0648\u0628\u0631",
    "\u0646\u0648\u0641\u0645\u0628\u0631",
    "\u062F\u064A\u0633\u0645\u0628\u0631"]

  };
  var dayValues = {
    narrow: ["\u062D", "\u0646", "\u062B", "\u0631", "\u062E", "\u062C", "\u0633"],
    short: ["\u0623\u062D\u062F", "\u0627\u062B\u0646\u064A\u0646", "\u062B\u0644\u0627\u062B\u0627\u0621", "\u0623\u0631\u0628\u0639\u0627\u0621", "\u062E\u0645\u064A\u0633", "\u062C\u0645\u0639\u0629", "\u0633\u0628\u062A"],
    abbreviated: ["\u0623\u062D\u062F", "\u0627\u062B\u0646\u064A\u0646", "\u062B\u0644\u0627\u062B\u0627\u0621", "\u0623\u0631\u0628\u0639\u0627\u0621", "\u062E\u0645\u064A\u0633", "\u062C\u0645\u0639\u0629", "\u0633\u0628\u062A"],
    wide: [
    "\u0627\u0644\u0623\u062D\u062F",
    "\u0627\u0644\u0627\u062B\u0646\u064A\u0646",
    "\u0627\u0644\u062B\u0644\u0627\u062B\u0627\u0621",
    "\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621",
    "\u0627\u0644\u062E\u0645\u064A\u0633",
    "\u0627\u0644\u062C\u0645\u0639\u0629",
    "\u0627\u0644\u0633\u0628\u062A"]

  };
  var dayPeriodValues = {
    narrow: {
      am: "\u0635",
      pm: "\u0645",
      morning: "\u0627\u0644\u0635\u0628\u0627\u062D",
      noon: "\u0627\u0644\u0638\u0647\u0631",
      afternoon: "\u0628\u0639\u062F \u0627\u0644\u0638\u0647\u0631",
      evening: "\u0627\u0644\u0645\u0633\u0627\u0621",
      night: "\u0627\u0644\u0644\u064A\u0644",
      midnight: "\u0645\u0646\u062A\u0635\u0641 \u0627\u0644\u0644\u064A\u0644"
    },
    abbreviated: {
      am: "\u0635",
      pm: "\u0645",
      morning: "\u0627\u0644\u0635\u0628\u0627\u062D",
      noon: "\u0627\u0644\u0638\u0647\u0631",
      afternoon: "\u0628\u0639\u062F \u0627\u0644\u0638\u0647\u0631",
      evening: "\u0627\u0644\u0645\u0633\u0627\u0621",
      night: "\u0627\u0644\u0644\u064A\u0644",
      midnight: "\u0645\u0646\u062A\u0635\u0641 \u0627\u0644\u0644\u064A\u0644"
    },
    wide: {
      am: "\u0635",
      pm: "\u0645",
      morning: "\u0627\u0644\u0635\u0628\u0627\u062D",
      noon: "\u0627\u0644\u0638\u0647\u0631",
      afternoon: "\u0628\u0639\u062F \u0627\u0644\u0638\u0647\u0631",
      evening: "\u0627\u0644\u0645\u0633\u0627\u0621",
      night: "\u0627\u0644\u0644\u064A\u0644",
      midnight: "\u0645\u0646\u062A\u0635\u0641 \u0627\u0644\u0644\u064A\u0644"
    }
  };
  var formattingDayPeriodValues = {
    narrow: {
      am: "\u0635",
      pm: "\u0645",
      morning: "\u0641\u064A \u0627\u0644\u0635\u0628\u0627\u062D",
      noon: "\u0627\u0644\u0638\u0647\u0631",
      afternoon: "\u0628\u0639\u062F \u0627\u0644\u0638\u0647\u0631",
      evening: "\u0641\u064A \u0627\u0644\u0645\u0633\u0627\u0621",
      night: "\u0641\u064A \u0627\u0644\u0644\u064A\u0644",
      midnight: "\u0645\u0646\u062A\u0635\u0641 \u0627\u0644\u0644\u064A\u0644"
    },
    abbreviated: {
      am: "\u0635",
      pm: "\u0645",
      morning: "\u0641\u064A \u0627\u0644\u0635\u0628\u0627\u062D",
      noon: "\u0627\u0644\u0638\u0647\u0631",
      afternoon: "\u0628\u0639\u062F \u0627\u0644\u0638\u0647\u0631",
      evening: "\u0641\u064A \u0627\u0644\u0645\u0633\u0627\u0621",
      night: "\u0641\u064A \u0627\u0644\u0644\u064A\u0644",
      midnight: "\u0645\u0646\u062A\u0635\u0641 \u0627\u0644\u0644\u064A\u0644"
    },
    wide: {
      am: "\u0635",
      pm: "\u0645",
      morning: "\u0641\u064A \u0627\u0644\u0635\u0628\u0627\u062D",
      noon: "\u0627\u0644\u0638\u0647\u0631",
      afternoon: "\u0628\u0639\u062F \u0627\u0644\u0638\u0647\u0631",
      evening: "\u0641\u064A \u0627\u0644\u0645\u0633\u0627\u0621",
      night: "\u0641\u064A \u0627\u0644\u0644\u064A\u0644",
      midnight: "\u0645\u0646\u062A\u0635\u0641 \u0627\u0644\u0644\u064A\u0644"
    }
  };
  var ordinalNumber = function ordinalNumber(num) {return String(num);};
  var localize = {
    ordinalNumber: ordinalNumber,
    era: buildLocalizeFn({
      values: eraValues,
      defaultWidth: "wide"
    }),
    quarter: buildLocalizeFn({
      values: quarterValues,
      defaultWidth: "wide",
      argumentCallback: function argumentCallback(quarter) {return quarter - 1;}
    }),
    month: buildLocalizeFn({
      values: monthValues,
      defaultWidth: "wide"
    }),
    day: buildLocalizeFn({
      values: dayValues,
      defaultWidth: "wide"
    }),
    dayPeriod: buildLocalizeFn({
      values: dayPeriodValues,
      defaultWidth: "wide",
      formattingValues: formattingDayPeriodValues,
      defaultFormattingWidth: "wide"
    })
  };

  // lib/locale/_lib/buildMatchPatternFn.mjs
  function buildMatchPatternFn(args) {
    return function (string) {var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var matchResult = string.match(args.matchPattern);
      if (!matchResult)
      return null;
      var matchedString = matchResult[0];
      var parseResult = string.match(args.parsePattern);
      if (!parseResult)
      return null;
      var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
      value = options.valueCallback ? options.valueCallback(value) : value;
      var rest = string.slice(matchedString.length);
      return { value: value, rest: rest };
    };
  }

  // lib/locale/_lib/buildMatchFn.mjs
  function buildMatchFn(args) {
    return function (string) {var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var width = options.width;
      var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
      var matchResult = string.match(matchPattern);
      if (!matchResult) {
        return null;
      }
      var matchedString = matchResult[0];
      var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
      var key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, function (pattern) {return pattern.test(matchedString);}) : findKey(parsePatterns, function (pattern) {return pattern.test(matchedString);});
      var value;
      value = args.valueCallback ? args.valueCallback(key) : key;
      value = options.valueCallback ? options.valueCallback(value) : value;
      var rest = string.slice(matchedString.length);
      return { value: value, rest: rest };
    };
  }
  var findKey = function findKey(object, predicate) {
    for (var key in object) {
      if (Object.prototype.hasOwnProperty.call(object, key) && predicate(object[key])) {
        return key;
      }
    }
    return;
  };
  var findIndex = function findIndex(array, predicate) {
    for (var key = 0; key < array.length; key++) {
      if (predicate(array[key])) {
        return key;
      }
    }
    return;
  };

  // lib/locale/ar/_lib/match.mjs
  var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
  var parseOrdinalNumberPattern = /\d+/i;
  var matchEraPatterns = {
    narrow: /[قب]/,
    abbreviated: /[قب]\.م\./,
    wide: /(قبل|بعد) الميلاد/
  };
  var parseEraPatterns = {
    any: [/قبل/, /بعد/]
  };
  var matchQuarterPatterns = {
    narrow: /^[1234]/i,
    abbreviated: /ر[1234]/,
    wide: /الربع (الأول|الثاني|الثالث|الرابع)/
  };
  var parseQuarterPatterns = {
    any: [/1/i, /2/i, /3/i, /4/i]
  };
  var matchMonthPatterns = {
    narrow: /^[أيفمسند]/,
    abbreviated: /^(يناير|فبراير|مارس|أبريل|مايو|يونيو|يوليو|أغسطس|سبتمبر|أكتوبر|نوفمبر|ديسمبر)/,
    wide: /^(يناير|فبراير|مارس|أبريل|مايو|يونيو|يوليو|أغسطس|سبتمبر|أكتوبر|نوفمبر|ديسمبر)/
  };
  var parseMonthPatterns = {
    narrow: [
    /^ي/i,
    /^ف/i,
    /^م/i,
    /^أ/i,
    /^م/i,
    /^ي/i,
    /^ي/i,
    /^أ/i,
    /^س/i,
    /^أ/i,
    /^ن/i,
    /^د/i],

    any: [
    /^يناير/i,
    /^فبراير/i,
    /^مارس/i,
    /^أبريل/i,
    /^مايو/i,
    /^يونيو/i,
    /^يوليو/i,
    /^أغسطس/i,
    /^سبتمبر/i,
    /^أكتوبر/i,
    /^نوفمبر/i,
    /^ديسمبر/i]

  };
  var matchDayPatterns = {
    narrow: /^[حنثرخجس]/i,
    short: /^(أحد|اثنين|ثلاثاء|أربعاء|خميس|جمعة|سبت)/i,
    abbreviated: /^(أحد|اثنين|ثلاثاء|أربعاء|خميس|جمعة|سبت)/i,
    wide: /^(الأحد|الاثنين|الثلاثاء|الأربعاء|الخميس|الجمعة|السبت)/i
  };
  var parseDayPatterns = {
    narrow: [/^ح/i, /^ن/i, /^ث/i, /^ر/i, /^خ/i, /^ج/i, /^س/i],
    wide: [
    /^الأحد/i,
    /^الاثنين/i,
    /^الثلاثاء/i,
    /^الأربعاء/i,
    /^الخميس/i,
    /^الجمعة/i,
    /^السبت/i],

    any: [/^أح/i, /^اث/i, /^ث/i, /^أر/i, /^خ/i, /^ج/i, /^س/i]
  };
  var matchDayPeriodPatterns = {
    narrow: /^(ص|م|منتصف الليل|الظهر|بعد الظهر|في الصباح|في المساء|في الليل)/,
    any: /^(ص|م|منتصف الليل|الظهر|بعد الظهر|في الصباح|في المساء|في الليل)/
  };
  var parseDayPeriodPatterns = {
    any: {
      am: /^ص/,
      pm: /^م/,
      midnight: /منتصف الليل/,
      noon: /الظهر/,
      afternoon: /بعد الظهر/,
      morning: /في الصباح/,
      evening: /في المساء/,
      night: /في الليل/
    }
  };
  var match = {
    ordinalNumber: buildMatchPatternFn({
      matchPattern: matchOrdinalNumberPattern,
      parsePattern: parseOrdinalNumberPattern,
      valueCallback: function valueCallback(value) {return parseInt(value, 10);}
    }),
    era: buildMatchFn({
      matchPatterns: matchEraPatterns,
      defaultMatchWidth: "wide",
      parsePatterns: parseEraPatterns,
      defaultParseWidth: "any"
    }),
    quarter: buildMatchFn({
      matchPatterns: matchQuarterPatterns,
      defaultMatchWidth: "wide",
      parsePatterns: parseQuarterPatterns,
      defaultParseWidth: "any",
      valueCallback: function valueCallback(index) {return index + 1;}
    }),
    month: buildMatchFn({
      matchPatterns: matchMonthPatterns,
      defaultMatchWidth: "wide",
      parsePatterns: parseMonthPatterns,
      defaultParseWidth: "any"
    }),
    day: buildMatchFn({
      matchPatterns: matchDayPatterns,
      defaultMatchWidth: "wide",
      parsePatterns: parseDayPatterns,
      defaultParseWidth: "any"
    }),
    dayPeriod: buildMatchFn({
      matchPatterns: matchDayPeriodPatterns,
      defaultMatchWidth: "any",
      parsePatterns: parseDayPeriodPatterns,
      defaultParseWidth: "any"
    })
  };

  // lib/locale/ar.mjs
  var ar = {
    code: "ar",
    formatDistance: formatDistance,
    formatLong: formatLong,
    formatRelative: formatRelative,
    localize: localize,
    match: match,
    options: {
      weekStartsOn: 6,
      firstWeekContainsDate: 1
    }
  };

  // lib/locale/ar/cdn.js
  window.dateFns = _objectSpread(_objectSpread({},
  window.dateFns), {}, {
    locale: _objectSpread(_objectSpread({}, (_window$dateFns =
    window.dateFns) === null || _window$dateFns === void 0 ? void 0 : _window$dateFns.locale), {}, {
      ar: ar }) });



  //# debugId=B5D9520E7A8601A864756e2164756e21
})();

//# sourceMappingURL=cdn.js.map