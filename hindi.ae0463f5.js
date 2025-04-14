// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"KmX9":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getElementByIdAssured = exports.emptyCell = void 0;
var getElementByIdAssured = exports.getElementByIdAssured = function getElementByIdAssured(_document, _id) {
  var element = _document.getElementById(_id);
  if (element == null) throw TypeError("element is null");
  return element;
};
var emptyCell = exports.emptyCell = ["-", "-"];
},{}],"V5zq":[function(require,module,exports) {
"use strict";

var _helpers = require("./helpers");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
var showTable = function showTable(table, rowsText, IDLabel) {
  var _iterator = _createForOfIteratorHelper(rowsText.entries()),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _step$value = _slicedToArray(_step.value, 2),
        rowNumber = _step$value[0],
        rowText = _step$value[1];
      var row = table.insertRow();
      row.id = "table-".concat(IDLabel, "-row-").concat(rowNumber);
      var _iterator2 = _createForOfIteratorHelper(rowText),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _step2$value = _slicedToArray(_step2.value, 2),
            primaryText = _step2$value[0],
            secondaryText = _step2$value[1];
          var cell = row.insertCell();
          cell.classList.add("table-letters-cell");
          if (primaryText == "-" && secondaryText == "-") {
            cell.classList.add("emptyCell");
          }
          var vowel = cell.appendChild(document.createElement("p"));
          var primaryLetter = vowel.appendChild(document.createElement("span"));
          primaryLetter.classList.add("letter-primary");
          primaryLetter.classList.add("show-primary");
          primaryLetter.textContent = primaryText;
          var secondaryLetter = vowel.appendChild(document.createElement("span"));
          secondaryLetter.classList.add("letter-secondary");
          primaryLetter.classList.add("show-secondary");
          secondaryLetter.textContent = secondaryText;
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
};
var tableVowels = (0, _helpers.getElementByIdAssured)(document, "table-vowels");
var vowelRowsText = [[["अ", "a"], ["आ", "ā"], ["इ", "i"], ["ई", "ī"], ["उ", "u"], ["ऊ", "ū"]], [["ए", "ē"], ["ऐ", "ai"], ["ओ", "ō"], ["औ", "au"], ["अं", "ṁ"], ["अः", "ḥ"]]];
showTable(tableVowels, vowelRowsText, "vowels");
var tableConsonants = (0, _helpers.getElementByIdAssured)(document, "table-consonants");
var consonantRowsText = [[["क्", "k"], ["ख्", "kh"], ["ग्", "g"], ["घ्", "gh"], ["ङ्", "ṅ"], _helpers.emptyCell, _helpers.emptyCell, ["ह्", "h"]], [["च्", "c"], ["छ्", "ch"], ["ज्", "j"], ["झ्", "jh"], ["ञ्", "ñ"], ["य्", "y"], ["श्", "ś"], _helpers.emptyCell], [["ट्", "ṭ"], ["ठ्", "ṭh"], ["ड्", "ḍ"], ["ढ्", "ḍh"], ["ण्", "ṇ"], ["र्", "r"], ["ष्", "ṣ"], _helpers.emptyCell], [["त्", "t"], ["थ्", "th"], ["द्", "d"], ["ध्", "dh"], ["न्", "n"], ["ल्", "l"], ["स्", "s"], _helpers.emptyCell], [["प्", "t"], ["फ्", "ph"], ["ब्", "b"], ["भ्", "bh"], ["म्", "m"], ["व्", "v"], _helpers.emptyCell, _helpers.emptyCell]];
showTable(tableConsonants, consonantRowsText, "consonants");
},{"./helpers":"KmX9"}]},{},["V5zq"], null)
//# sourceMappingURL=hindi.ae0463f5.js.map