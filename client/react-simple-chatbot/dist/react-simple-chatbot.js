!(function (e, t) {
  typeof exports === 'object' && typeof module === 'object' ? module.exports = t(require('styled-components')) : typeof define === 'function' && define.amd ? define(['styled-components'], t) : typeof exports === 'object' ? exports.ReactSimpleChatbot = t(require('styled-components')) : e.ReactSimpleChatbot = t(e['styled-components']);
}(typeof self !== 'undefined' ? self : this, (e) => function(e) {
      function t(r) {
          if (n[r]) return n[r].exports;
          var o = n[r] = {
              i: r,
              l: !1,
              exports: {}
          };
          return e[r].call(o.exports, o, o.exports, t), o.l = !0, o.exports
      }
      var n = {};
      return t.m = e, t.c = n, t.d = function(e, n, r) {
          t.o(e, n) || Object.defineProperty(e, n, {
              enumerable: !0,
              get: r
          })
      }, t.r = function(e) {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
              value: "Module"
          }), Object.defineProperty(e, "__esModule", {
              value: !0
          })
      }, t.t = function(e, n) {
          if (1 & n && (e = t(e)), 8 & n) return e;
          if (4 & n && "object" == typeof e && e && e.__esModule) return e;
          var r = Object.create(null);
          if (t.r(r), Object.defineProperty(r, "default", {
                  enumerable: !0,
                  value: e
              }), 2 & n && "string" != typeof e)
              for (var o in e) t.d(r, o, function(t) {
                  return e[t]
              }.bind(null, o));
          return r
      }, t.n = function(e) {
          var n = e && e.__esModule ? function() {
              return e.default
          } : function() {
              return e
          };
          return t.d(n, "a", n), n
      }, t.o = function(e, t) {
          return Object.prototype.hasOwnProperty.call(e, t)
      }, t.p = "dist/", t(t.s = 14)
  }([function(e, t, n) {
      e.exports = n(10)()
  }, function(e, t, n) {
      "use strict";
      e.exports = n(5)
  }, function(t, n) {
      t.exports = e
  }, function(e, t) {
      function n(e, t, o) {
          return t instanceof Array ? function(e, t, r) {
              for (var o = 0, i = t.length; o < i; o++) t[o] = n(e, t[o], r);
              return t
          }(e, t, o) : t instanceof l ? t.length ? o.hasOwnProperty(t) ? o[t] : o[t] = function(e, t) {
              for (var n = 0, o = t.length; n < o; e = e[t[n++].replace(u, r)]);
              return e
          }(e, t.split(r)) : e : t instanceof Object ? function(e, t, r) {
              for (var o in t) t.hasOwnProperty(o) && (t[o] = n(e, t[o], r));
              return t
          }(e, t, o) : t
      }
      var r = "~",
          o = "\\x" + ("0" + r.charCodeAt(0).toString(16)).slice(-2),
          i = "\\" + o,
          a = new RegExp(o, "g"),
          u = new RegExp(i, "g"),
          s = new RegExp("(?:^|([^\\\\]))" + i),
          c = [].indexOf || function(e) {
              for (var t = this.length; t-- && this[t] !== e;);
              return t
          },
          l = String;
      this.stringify = function(e, t, n, u) {
          return JSON.stringify(e, function(e, t, n) {
              var u, s = [],
                  l = [e],
                  p = [e],
                  f = [n ? r : "[Circular]"],
                  d = e,
                  y = 1;
              return function(e, g) {
                  return t && (g = t.call(this, e, g)), "" !== e && (d !== this && (u = y - c.call(l, this) - 1, y -= u, l.splice(y, l.length), s.splice(y - 1, s.length), d = this), "object" == typeof g && g ? (c.call(l, g) < 0 && l.push(d = g), y = l.length, (u = c.call(p, g)) < 0 ? (u = p.push(g) - 1, n ? (s.push(("" + e).replace(a, o)), f[u] = r + s.join(r)) : f[u] = f[0]) : g = f[u]) : "string" == typeof g && n && (g = g.replace(o, i).replace(r, o))), g
              }
          }(e, t, !u), n)
      }, this.parse = function(e, t) {
          return JSON.parse(e, function(e) {
              return function(t, a) {
                  var u = "string" == typeof a;
                  return u && a.charAt(0) === r ? new l(a.slice(1)) : ("" === t && (a = n(a, a, {})), u && (a = a.replace(s, "$1" + r).replace(i, o)), e ? e.call(this, t, a) : a)
              }
          }(t))
      }
  }, function(e, t, n) {
      e.exports = function(e, t) {
          var n = ["abcdefghijklmnopqrstuvwxyz", "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "0123456789", "~!@#$%^&()_+-={}[];',"],
              r = "";
          (t = t || "aA0").split("").forEach(function(e) {
              isNaN(parseInt(e)) ? /[a-z]/.test(e) ? r += n[0] : /[A-Z]/.test(e) ? r += n[1] : r += n[3] : r += n[2]
          }), e = e || 30;
          for (var o = ""; e--;) o += r.charAt(Math.floor(Math.random() * r.length));
          return o
      }
  }, function(e, t, n) {
      "use strict";

      function r(e) {
          for (var t = arguments.length - 1, n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, r = 0; r < t; r++) n += "&args[]=" + encodeURIComponent(arguments[r + 1]);
          h(!1, "Minified React error #" + e + "; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ", n)
      }

      function o(e, t, n) {
          this.props = e, this.context = t, this.refs = v, this.updater = n || P
      }

      function i() {}

      function a(e, t, n) {
          this.props = e, this.context = t, this.refs = v, this.updater = n || P
      }

      function u(e, t, n) {
          var r = void 0,
              o = {},
              i = null,
              a = null;
          if (null != t)
              for (r in void 0 !== t.ref && (a = t.ref), void 0 !== t.key && (i = "" + t.key), t) T.call(t, r) && !D.hasOwnProperty(r) && (o[r] = t[r]);
          var u = arguments.length - 2;
          if (1 === u) o.children = n;
          else if (1 < u) {
              for (var s = Array(u), c = 0; c < u; c++) s[c] = arguments[c + 2];
              o.children = s
          }
          if (e && e.defaultProps)
              for (r in u = e.defaultProps) void 0 === o[r] && (o[r] = u[r]);
          return {
              $$typeof: j,
              type: e,
              key: i,
              ref: a,
              props: o,
              _owner: C.current
          }
      }

      function s(e) {
          return "object" == typeof e && null !== e && e.$$typeof === j
      }

      function c(e, t, n, r) {
          if (R.length) {
              var o = R.pop();
              return o.result = e, o.keyPrefix = t, o.func = n, o.context = r, o.count = 0, o
          }
          return {
              result: e,
              keyPrefix: t,
              func: n,
              context: r,
              count: 0
          }
      }

      function l(e) {
          e.result = null, e.keyPrefix = null, e.func = null, e.context = null, e.count = 0, 10 > R.length && R.push(e)
      }

      function p(e, t, n, o) {
          var i = typeof e;
          "undefined" !== i && "boolean" !== i || (e = null);
          var a = !1;
          if (null === e) a = !0;
          else switch (i) {
              case "string":
              case "number":
                  a = !0;
                  break;
              case "object":
                  switch (e.$$typeof) {
                      case j:
                      case M:
                          a = !0
                  }
          }
          if (a) return n(o, e, "" === t ? "." + f(e, 0) : t), 1;
          if (a = 0, t = "" === t ? "." : t + ":", Array.isArray(e))
              for (var u = 0; u < e.length; u++) {
                  var s = t + f(i = e[u], u);
                  a += p(i, s, n, o)
              } else if (null === e || void 0 === e ? s = null : s = "function" == typeof(s = z && e[z] || e["@@iterator"]) ? s : null, "function" == typeof s)
                  for (e = s.call(e), u = 0; !(i = e.next()).done;) a += p(i = i.value, s = t + f(i, u++), n, o);
              else "object" === i && r("31", "[object Object]" === (n = "" + e) ? "object with keys {" + Object.keys(e).join(", ") + "}" : n, "");
          return a
      }

      function f(e, t) {
          return "object" == typeof e && null !== e && null != e.key ? function(e) {
              var t = {
                  "=": "=0",
                  ":": "=2"
              };
              return "$" + ("" + e).replace(/[=:]/g, function(e) {
                  return t[e]
              })
          }(e.key) : t.toString(36)
      }

      function d(e, t) {
          e.func.call(e.context, t, e.count++)
      }

      function y(e, t, n) {
          var r = e.result,
              o = e.keyPrefix;
          e = e.func.call(e.context, t, e.count++), Array.isArray(e) ? g(e, r, n, m.thatReturnsArgument) : null != e && (s(e) && (t = o + (!e.key || t && t.key === e.key ? "" : ("" + e.key).replace(A, "$&/") + "/") + n, e = {
              $$typeof: j,
              type: e.type,
              key: t,
              ref: e.ref,
              props: e.props,
              _owner: e._owner
          }), r.push(e))
      }

      function g(e, t, n, r, o) {
          var i = "";
          null != n && (i = ("" + n).replace(A, "$&/") + "/"), t = c(t, i, r, o), null == e || p(e, "", y, t), l(t)
      }
      var b = n(6),
          h = n(7),
          v = n(8),
          m = n(9),
          S = "function" == typeof Symbol && Symbol.for,
          j = S ? Symbol.for("react.element") : 60103,
          M = S ? Symbol.for("react.portal") : 60106,
          w = S ? Symbol.for("react.fragment") : 60107,
          x = S ? Symbol.for("react.strict_mode") : 60108,
          O = S ? Symbol.for("react.profiler") : 60114,
          I = S ? Symbol.for("react.provider") : 60109,
          N = S ? Symbol.for("react.context") : 60110,
          k = S ? Symbol.for("react.async_mode") : 60111,
          E = S ? Symbol.for("react.forward_ref") : 60112;
      S && Symbol.for("react.timeout");
      var z = "function" == typeof Symbol && Symbol.iterator,
          P = {
              isMounted: function() {
                  return !1
              },
              enqueueForceUpdate: function() {},
              enqueueReplaceState: function() {},
              enqueueSetState: function() {}
          };
      o.prototype.isReactComponent = {}, o.prototype.setState = function(e, t) {
          "object" != typeof e && "function" != typeof e && null != e && r("85"), this.updater.enqueueSetState(this, e, t, "setState")
      }, o.prototype.forceUpdate = function(e) {
          this.updater.enqueueForceUpdate(this, e, "forceUpdate")
      }, i.prototype = o.prototype;
      var L = a.prototype = new i;
      L.constructor = a, b(L, o.prototype), L.isPureReactComponent = !0;
      var C = {
              current: null
          },
          T = Object.prototype.hasOwnProperty,
          D = {
              key: !0,
              ref: !0,
              __self: !0,
              __source: !0
          },
          A = /\/+/g,
          R = [],
          B = {
              Children: {
                  map: function(e, t, n) {
                      if (null == e) return e;
                      var r = [];
                      return g(e, r, null, t, n), r
                  },
                  forEach: function(e, t, n) {
                      if (null == e) return e;
                      t = c(null, null, t, n), null == e || p(e, "", d, t), l(t)
                  },
                  count: function(e) {
                      return null == e ? 0 : p(e, "", m.thatReturnsNull, null)
                  },
                  toArray: function(e) {
                      var t = [];
                      return g(e, t, null, m.thatReturnsArgument), t
                  },
                  only: function(e) {
                      return s(e) || r("143"), e
                  }
              },
              createRef: function() {
                  return {
                      current: null
                  }
              },
              Component: o,
              PureComponent: a,
              createContext: function(e, t) {
                  return void 0 === t && (t = null), (e = {
                      $$typeof: N,
                      _calculateChangedBits: t,
                      _defaultValue: e,
                      _currentValue: e,
                      _currentValue2: e,
                      _changedBits: 0,
                      _changedBits2: 0,
                      Provider: null,
                      Consumer: null
                  }).Provider = {
                      $$typeof: I,
                      _context: e
                  }, e.Consumer = e
              },
              forwardRef: function(e) {
                  return {
                      $$typeof: E,
                      render: e
                  }
              },
              Fragment: w,
              StrictMode: x,
              unstable_AsyncMode: k,
              unstable_Profiler: O,
              createElement: u,
              cloneElement: function(e, t, n) {
                  (null === e || void 0 === e) && r("267", e);
                  var o = void 0,
                      i = b({}, e.props),
                      a = e.key,
                      u = e.ref,
                      s = e._owner;
                  if (null != t) {
                      void 0 !== t.ref && (u = t.ref, s = C.current), void 0 !== t.key && (a = "" + t.key);
                      var c = void 0;
                      for (o in e.type && e.type.defaultProps && (c = e.type.defaultProps), t) T.call(t, o) && !D.hasOwnProperty(o) && (i[o] = void 0 === t[o] && void 0 !== c ? c[o] : t[o])
                  }
                  if (1 == (o = arguments.length - 2)) i.children = n;
                  else if (1 < o) {
                      c = Array(o);
                      for (var l = 0; l < o; l++) c[l] = arguments[l + 2];
                      i.children = c
                  }
                  return {
                      $$typeof: j,
                      type: e.type,
                      key: a,
                      ref: u,
                      props: i,
                      _owner: s
                  }
              },
              createFactory: function(e) {
                  var t = u.bind(null, e);
                  return t.type = e, t
              },
              isValidElement: s,
              version: "16.4.1",
              __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
                  ReactCurrentOwner: C,
                  assign: b
              }
          },
          _ = {
              default: B
          },
          G = _ && B || _;
      e.exports = G.default ? G.default : G
  }, function(e, t, n) {
      "use strict";
      var r = Object.getOwnPropertySymbols,
          o = Object.prototype.hasOwnProperty,
          i = Object.prototype.propertyIsEnumerable;
      e.exports = function() {
          try {
              if (!Object.assign) return !1;
              var e = new String("abc");
              if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;
              for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
              if ("0123456789" !== Object.getOwnPropertyNames(t).map(function(e) {
                      return t[e]
                  }).join("")) return !1;
              var r = {};
              return "abcdefghijklmnopqrst".split("").forEach(function(e) {
                  r[e] = e
              }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("")
          } catch (e) {
              return !1
          }
      }() ? Object.assign : function(e, t) {
          for (var n, a, u = function(e) {
                  if (null === e || void 0 === e) throw new TypeError("Object.assign cannot be called with null or undefined");
                  return Object(e)
              }(e), s = 1; s < arguments.length; s++) {
              for (var c in n = Object(arguments[s])) o.call(n, c) && (u[c] = n[c]);
              if (r) {
                  a = r(n);
                  for (var l = 0; l < a.length; l++) i.call(n, a[l]) && (u[a[l]] = n[a[l]])
              }
          }
          return u
      }
  }, function(e, t, n) {
      "use strict";
      var r = function(e) {};
      e.exports = function(e, t, n, o, i, a, u, s) {
          if (r(t), !e) {
              var c;
              if (void 0 === t) c = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
              else {
                  var l = [n, o, i, a, u, s],
                      p = 0;
                  (c = new Error(t.replace(/%s/g, function() {
                      return l[p++]
                  }))).name = "Invariant Violation"
              }
              throw c.framesToPop = 1, c
          }
      }
  }, function(e, t, n) {
      "use strict";
      e.exports = {}
  }, function(e, t, n) {
      "use strict";

      function r(e) {
          return function() {
              return e
          }
      }
      var o = function() {};
      o.thatReturns = r, o.thatReturnsFalse = r(!1), o.thatReturnsTrue = r(!0), o.thatReturnsNull = r(null), o.thatReturnsThis = function() {
          return this
      }, o.thatReturnsArgument = function(e) {
          return e
      }, e.exports = o
  }, function(e, t, n) {
      "use strict";
      var r = n(11),
          o = n(12),
          i = n(13);
      e.exports = function() {
          function e(e, t, n, r, a, u) {
              u !== i && o(!1, "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")
          }

          function t() {
              return e
          }
          e.isRequired = e;
          var n = {
              array: e,
              bool: e,
              func: e,
              number: e,
              object: e,
              string: e,
              symbol: e,
              any: e,
              arrayOf: t,
              element: e,
              instanceOf: t,
              node: e,
              objectOf: t,
              oneOf: t,
              oneOfType: t,
              shape: t,
              exact: t
          };
          return n.checkPropTypes = r, n.PropTypes = n, n
      }
  }, function(e, t, n) {
      "use strict";

      function r(e) {
          return function() {
              return e
          }
      }
      var o = function() {};
      o.thatReturns = r, o.thatReturnsFalse = r(!1), o.thatReturnsTrue = r(!0), o.thatReturnsNull = r(null), o.thatReturnsThis = function() {
          return this
      }, o.thatReturnsArgument = function(e) {
          return e
      }, e.exports = o
  }, function(e, t, n) {
      "use strict";
      var r = function(e) {};
      e.exports = function(e, t, n, o, i, a, u, s) {
          if (r(t), !e) {
              var c;
              if (void 0 === t) c = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
              else {
                  var l = [n, o, i, a, u, s],
                      p = 0;
                  (c = new Error(t.replace(/%s/g, function() {
                      return l[p++]
                  }))).name = "Invariant Violation"
              }
              throw c.framesToPop = 1, c
          }
      }
  }, function(e, t, n) {
      "use strict";
      e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  }, function(e, t, n) {
      "use strict";

      function r() {
          var e = u(["\n  0% { box-shadow: 0 0 0 0 ", "; }\n  70% { box-shadow: 0 0 0 10px ", "; }\n  100% { box-shadow: 0 0 0 0 ", "; }\n"]);
          return r = function() {
              return e
          }, e
      }

      function o() {
          var e = u(["\n  25% { transform: rotate(-1deg); }\n  100% { transform: rotate(1deg); }\n"]);
          return o = function() {
              return e
          }, e
      }

      function i() {
          var e = u(["\n  100% { transform: scale(1); }\n"]);
          return i = function() {
              return e
          }, e
      }

      function a() {
          var e = u(["\n  0% { opacity: .2; }\n  20% { opacity: 1; }\n  100% { opacity: .2; }\n"]);
          return a = function() {
              return e
          }, e
      }

      function u(e, t) {
          return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
              raw: {
                  value: Object.freeze(t)
              }
          }))
      }

      function s() {
          var e = function(e, t) {
              return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                  raw: {
                      value: Object.freeze(t)
                  }
              }))
          }(["\n  animation: ", " 1.4s infinite both;\n  animation-delay: ", ";\n"]);
          return s = function() {
              return e
          }, e
      }

      function c() {
          var e = function(e, t) {
              return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                  raw: {
                      value: Object.freeze(t)
                  }
              }))
          }(["\n  background: #fff;\n  border-radius: 5px;\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 1px 2px 0px;\n  display: flex;\n  justify-content: center;\n  margin: 0 6px 10px 6px;\n  padding: 16px;\n"]);
          return c = function() {
              return e
          }, e
      }

      function l(e) {
          return (l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
              return typeof e
          } : function(e) {
              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
          })(e)
      }

      function p(e, t) {
          for (var n = 0; n < t.length; n++) {
              var r = t[n];
              r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
          }
      }

      function f(e) {
          return (f = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e)
          })(e)
      }

      function d(e, t) {
          if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
          e.prototype = Object.create(t && t.prototype, {
              constructor: {
                  value: e,
                  writable: !0,
                  configurable: !0
              }
          }), t && function(e, t) {
              (Object.setPrototypeOf || function(e, t) {
                  return e.__proto__ = t, e
              })(e, t)
          }(e, t)
      }

      function y(e) {
          if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return e
      }

      function g(e, t, n) {
          return t in e ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
          }) : e[t] = n, e
      }

      function b() {
          var e = function(e, t) {
              return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                  raw: {
                      value: Object.freeze(t)
                  }
              }))
          }(["\n  animation: ", " .3s ease forwards;\n  cursor: pointer;\n  display: inline-block;\n  margin: 2px;\n  transform: scale(0);\n"]);
          return b = function() {
              return e
          }, e
      }

      function h() {
          var e = function(e, t) {
              return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                  raw: {
                      value: Object.freeze(t)
                  }
              }))
          }(["\n  background: ", ";\n  border-radius: 22px;\n  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.15);\n  color: ", ";\n  display: inline-block;\n  font-size: 14px;\n  padding: 12px;\n\n  &:hover { opacity: .7; }\n"]);
          return h = function() {
              return e
          }, e
      }

      function v() {
          var e = function(e, t) {
              return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                  raw: {
                      value: Object.freeze(t)
                  }
              }))
          }(["\n  margin: 2px 0 12px 0;\n  padding: 0 6px;\n"]);
          return v = function() {
              return e
          }, e
      }

      function m() {
          var e = function(e, t) {
              return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                  raw: {
                      value: Object.freeze(t)
                  }
              }))
          }(["\n\n"]);
          return m = function() {
              return e
          }, e
      }

      function S(e) {
          return (S = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
              return typeof e
          } : function(e) {
              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
          })(e)
      }

      function j(e, t) {
          for (var n = 0; n < t.length; n++) {
              var r = t[n];
              r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
          }
      }

      function M(e) {
          return (M = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e)
          })(e)
      }

      function w(e, t) {
          if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
          e.prototype = Object.create(t && t.prototype, {
              constructor: {
                  value: e,
                  writable: !0,
                  configurable: !0
              }
          }), t && function(e, t) {
              (Object.setPrototypeOf || function(e, t) {
                  return e.__proto__ = t, e
              })(e, t)
          }(e, t)
      }

      function x(e) {
          if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return e
      }

      function O(e, t, n) {
          return t in e ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
          }) : e[t] = n, e
      }

      function I() {
          var e = function(e, t) {
              return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                  raw: {
                      value: Object.freeze(t)
                  }
              }))
          }(["\n  animation: ", " .3s ease forwards;\n  background: ", ";\n  border-radius: ", ";\n  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.15);\n  color: ", ";\n  display: inline-block;\n  font-size: 14px;\n  max-width: 50%;\n  margin: ", ";\n  overflow: hidden;\n  position: relative;\n  padding: 12px;\n  transform: scale(0);\n  transform-origin: ", ";\n"]);
          return I = function() {
              return e
          }, e
      }

      function N() {
          var e = function(e, t) {
              return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                  raw: {
                      value: Object.freeze(t)
                  }
              }))
          }(["\n  animation: ", " .3s ease forwards;\n  border-radius: ", ";\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 1px 2px 0px;\n  height: 40px;\n  min-width: 40px;\n  padding: 3px;\n  transform: scale(0);\n  transform-origin: ", ";\n  width: 40;\n"]);
          return N = function() {
              return e
          }, e
      }

      function k() {
          var e = function(e, t) {
              return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                  raw: {
                      value: Object.freeze(t)
                  }
              }))
          }(["\n  display: inline-block;\n  order: ", ";\n  padding: 6px;\n"]);
          return k = function() {
              return e
          }, e
      }

      function E() {
          var e = function(e, t) {
              return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                  raw: {
                      value: Object.freeze(t)
                  }
              }))
          }(["\n  align-items: flex-end;\n  display: flex;\n  justify-content: ", ";\n"]);
          return E = function() {
              return e
          }, e
      }

      function z(e) {
          return (z = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
              return typeof e
          } : function(e) {
              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
          })(e)
      }

      function P(e, t) {
          for (var n = 0; n < t.length; n++) {
              var r = t[n];
              r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
          }
      }

      function L(e) {
          return (L = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e)
          })(e)
      }

      function C(e, t) {
          if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
          e.prototype = Object.create(t && t.prototype, {
              constructor: {
                  value: e,
                  writable: !0,
                  configurable: !0
              }
          }), t && function(e, t) {
              (Object.setPrototypeOf || function(e, t) {
                  return e.__proto__ = t, e
              })(e, t)
          }(e, t)
      }

      function T(e) {
          if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return e
      }

      function D(e, t, n) {
          return t in e ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
          }) : e[t] = n, e
      }

      function A(e) {
          return (A = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
              return typeof e
          } : function(e) {
              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
          })(e)
      }

      function R() {
          var e = function(e, t) {
              return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                  raw: {
                      value: Object.freeze(t)
                  }
              }))
          }(["\n  background: ", ";\n  border-radius: 10px;\n  box-shadow: 0 12px 24px 0 rgba(0, 0, 0, 0.15);\n  font-family: ", ";\n  overflow: hidden;\n  position: ", ";\n  bottom: ", ";\n  top: ", ";\n  right: ", ";\n  left: ", ";\n  width: ", ";\n  height: ", ";\n  z-index: 999;\n  transform: ", ";\n  transform-origin: ", ";\n  transition: transform .3s ease;\n\n  @media screen and (max-width: 568px) {\n    border-radius: ", ";\n    bottom: 0 !important;\n    left: initial !important;\n    height: 100%;\n    right: 0 !important;\n    top: initial !important;\n    width: 100%;\n  }\n"]);
          return R = function() {
              return e
          }, e
      }

      function B() {
          var e = function(e, t) {
              return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                  raw: {
                      value: Object.freeze(t)
                  }
              }))
          }(["\n  height: calc(", " - ", ");\n  overflow-y: scroll;\n  margin-top: 2px;\n  padding-top: 6px;\n\n  @media screen and (max-width: 568px) {\n    height: ", ";\n  }\n"]);
          return B = function() {
              return e
          }, e
      }

      function _() {
          var e = function(e, t) {
              return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                  raw: {
                      value: Object.freeze(t)
                  }
              }))
          }(["\n  align-items: center;\n  background: ", ";\n  color: ", ";\n  display: flex;\n  fill: ", ";\n  height: 56px;\n  justify-content: space-between;\n  padding: 0 10px;\n"]);
          return _ = function() {
              return e
          }, e
      }

      function G() {
          var e = function(e, t) {
              return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                  raw: {
                      value: Object.freeze(t)
                  }
              }))
          }(["\n  margin: 0;\n  font-size:", ";\n"]);
          return G = function() {
              return e
          }, e
      }

      function V() {
          var e = function(e, t) {
              return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                  raw: {
                      value: Object.freeze(t)
                  }
              }))
          }(["\n  cursor: pointer;\n"]);
          return V = function() {
              return e
          }, e
      }

      function Z() {
          var e = function(e, t) {
              return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                  raw: {
                      value: Object.freeze(t)
                  }
              }))
          }(["\n  align-items: center;\n  cursor: pointer;\n  background: ", ";\n  bottom: 32px;\n  border-radius: 100%;\n  box-shadow: 0 12px 24px 0 rgba(0, 0, 0, 0.15);\n  display: flex;\n  fill: ", ";\n  height: 56px;\n  justify-content: center;\n  position: fixed;\n  right: 32px;\n  transform: ", ";\n  transition: transform .3s ease;\n  width: 56px;\n  z-index: 999;\n"]);
          return Z = function() {
              return e
          }, e
      }

      function q() {
          var e = function(e, t) {
              return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                  raw: {
                      value: Object.freeze(t)
                  }
              }))
          }(["\n  height: 24px;\n  width: 24px;\n"]);
          return q = function() {
              return e
          }, e
      }

      function U() {
          var e = function(e, t) {
              return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                  raw: {
                      value: Object.freeze(t)
                  }
              }))
          }(["\n  position: relative;\n"]);
          return U = function() {
              return e
          }, e
      }

      function Q() {
          var e = function(e, t) {
              return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                  raw: {
                      value: Object.freeze(t)
                  }
              }))
          }(["\n  animation: ", ";\n  border: 0;\n  border-radius: 0;\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n  border-top: ", ";\n  box-shadow: ", ";\n  box-sizing: border-box;\n  color: ", ";\n  font-size: 16px;\n  opacity: ", ";\n  outline: none;\n  padding: ", ";\n  width: 100%;\n  -webkit-appearance: none;\n\n  &:disabled { background: #fff; }\n\n  @media screen and (max-width: 568px) {\n    border-bottom-left-radius: ", ";\n    border-bottom-right-radius: ", ";\n  }\n"]);
          return Q = function() {
              return e
          }, e
      }

      function F() {
          var e = function(e, t) {
              return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                  raw: {
                      value: Object.freeze(t)
                  }
              }))
          }(["\n  background-color: transparent;\n  border: 0;\n  border-bottom-right-radius: 10px;\n  box-shadow: none;\n  cursor: ", ";\n  fill: ", ";\n  opacity: ", ";\n  outline: none;\n  padding: 14px 16px 12px 16px;\n  position: absolute;\n  right: 0;\n  top: 0;\n  &:before {\n    content: '';\n    position: absolute;\n    width: 23px;\n    height: 23px;\n    border-radius: 50%;\n    animation: ", ";\n  }\n  &:not(:disabled):hover {\n    opacity: 0.7;\n  }\n"]);
          return F = function() {
              return e
          }, e
      }

      function Y(e, t) {
          for (var n = 0; n < t.length; n++) {
              var r = t[n];
              r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
          }
      }

      function H(e, t, n) {
          return t && Y(e.prototype, t), n && Y(e, n), e
      }

      function W(e) {
          return (W = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
              return typeof e
          } : function(e) {
              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
          })(e)
      }

      function J() {
          return (J = Object.assign || function(e) {
              for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
              }
              return e
          }).apply(this, arguments)
      }

      function X(e, t) {
          for (var n = 0; n < t.length; n++) {
              var r = t[n];
              r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
          }
      }

      function K(e) {
          return (K = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e)
          })(e)
      }

      function $(e, t) {
          if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
          e.prototype = Object.create(t && t.prototype, {
              constructor: {
                  value: e,
                  writable: !0,
                  configurable: !0
              }
          }), t && function(e, t) {
              (Object.setPrototypeOf || function(e, t) {
                  return e.__proto__ = t, e
              })(e, t)
          }(e, t)
      }

      function ee(e) {
          if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return e
      }

      function te(e, t, n) {
          return t in e ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
          }) : e[t] = n, e
      }
      n.r(t);
      var ne = n(1),
          re = n.n(ne),
          oe = n(0),
          ie = n.n(oe),
          ae = n(4),
          ue = n.n(ae),
          se = n(2),
          ce = n.n(se),
          le = function(e) {
              var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
                  n = function(e) {
                      e = e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function(e, t, n, r) {
                          return t + t + n + n + r + r
                      });
                      var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
                      return t ? {
                          r: parseInt(t[1], 16),
                          g: parseInt(t[2], 16),
                          b: parseInt(t[3], 16)
                      } : null
                  }(e);
              return "rgba(".concat(n.r, ", ").concat(n.g, ", ").concat(n.b, ", ").concat(t, ")")
          },
          pe = Object(se.keyframes)(a()),
          fe = Object(se.keyframes)(i()),
          de = Object(se.keyframes)(o()),
          ye = ce.a.span(s(), pe, function(e) {
              return e.delay
          }),
          ge = function() {
              return re.a.createElement("span", {
                  className: "rsc-loading"
              }, re.a.createElement(ye, {
                  delay: "0s"
              }, "."), re.a.createElement(ye, {
                  delay: ".2s"
              }, "."), re.a.createElement(ye, {
                  delay: ".4s"
              }, "."))
          },
          be = ce.a.div(c()),
          he = function(e) {
              function t() {
                  var e, n;
                  ! function(e, t) {
                      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                  }(this, t);
                  for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i];
                  return g(y(y(n = function(e, t) {
                      return !t || "object" !== l(t) && "function" != typeof t ? y(e) : t
                  }(this, (e = f(t)).call.apply(e, [this].concat(o))))), "state", {
                      loading: !0
                  }), g(y(y(n)), "renderComponent", function() {
                      var e = n.props,
                          t = e.step,
                          r = e.steps,
                          o = e.previousStep,
                          i = e.triggerNextStep,
                          a = t.component;
                      return re.a.cloneElement(a, {
                          step: t,
                          steps: r,
                          previousStep: o,
                          triggerNextStep: i
                      })
                  }), n
              }
              return d(t, ne.Component),
                  function(e, t, n) {
                      t && p(e.prototype, t), n && p(e, n)
                  }(t, [{
                      key: "componentDidMount",
                      value: function() {
                          var e = this,
                              t = this.props,
                              n = t.speak,
                              r = t.step,
                              o = t.previousValue,
                              i = t.triggerNextStep,
                              a = r.delay,
                              u = r.waitAction;
                          setTimeout(function() {
                              e.setState({
                                  loading: !1
                              }, function() {
                                  u || r.rendered || i(), n(r, o)
                              })
                          }, a)
                      }
                  }, {
                      key: "render",
                      value: function() {
                          var e = this.state.loading,
                              t = this.props.style;
                          return re.a.createElement(be, {
                              className: "rsc-cs",
                              style: t
                          }, e ? re.a.createElement(ge, null) : this.renderComponent())
                      }
                  }]), t
          }();
      he.propTypes = {
          previousStep: ie.a.objectOf(ie.a.any).isRequired,
          previousValue: ie.a.oneOfType([ie.a.string, ie.a.bool, ie.a.number, ie.a.object, ie.a.array]),
          speak: ie.a.func,
          step: ie.a.objectOf(ie.a.any).isRequired,
          steps: ie.a.objectOf(ie.a.any).isRequired,
          style: ie.a.objectOf(ie.a.any).isRequired,
          triggerNextStep: ie.a.func.isRequired
      }, he.defaultProps = {
          previousValue: "",
          speak: function() {}
      };
      var ve = he,
          me = ce.a.li(b(), fe),
          Se = {
              background: "#f5f8fb",
              fontFamily: "monospace",
              headerBgColor: "#6e48aa",
              headerFontColor: "#fff",
              headerFontSize: "16px",
              botBubbleColor: "#6E48AA",
              botFontColor: "#fff",
              userBubbleColor: "#fff",
              userFontColor: "#4a4a4a"
          },
          je = ce.a.a(h(), function(e) {
              return e.theme.botBubbleColor
          }, function(e) {
              return e.theme.botFontColor
          });
      je.defaultProps = {
          theme: Se
      };
      var Me = je,
          we = ce.a.ul(v()),
          xe = ce.a.div(m()),
          Oe = function(e) {
              function t() {
                  var e, n;
                  ! function(e, t) {
                      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                  }(this, t);
                  for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i];
                  return O(x(x(n = function(e, t) {
                      return !t || "object" !== S(t) && "function" != typeof t ? x(e) : t
                  }(this, (e = M(t)).call.apply(e, [this].concat(o))))), "onOptionClick", function(e) {
                      var t = e.value;
                      (0, n.props.triggerNextStep)({
                          value: t
                      })
                  }), O(x(x(n)), "renderOption", function(e) {
                      var t = n.props,
                          r = t.bubbleOptionStyle,
                          o = t.step.user,
                          i = e.value,
                          a = e.label;
                      return re.a.createElement(me, {
                          key: i,
                          className: "rsc-os-option"
                      }, re.a.createElement(Me, {
                          className: "rsc-os-option-element",
                          style: r,
                          user: o,
                          onClick: function() {
                              return n.onOptionClick({
                                  value: i
                              })
                          }
                      }, a))
                  }), n
              }
              return w(t, ne.Component),
                  function(e, t, n) {
                      t && j(e.prototype, t), n && j(e, n)
                  }(t, [{
                      key: "render",
                      value: function() {
                          var e = this.props.step.options;
                          return re.a.createElement(xe, {
                              className: "rsc-os"
                          }, re.a.createElement(we, {
                              className: "rsc-os-options"
                          }, Object.values(e).map(this.renderOption)))
                      }
                  }]), t
          }();
      Oe.propTypes = {
          bubbleOptionStyle: ie.a.objectOf(ie.a.any).isRequired,
          step: ie.a.objectOf(ie.a.any).isRequired,
          triggerNextStep: ie.a.func.isRequired
      };
      var Ie = Oe,
          Ne = ce.a.div(I(), fe, function(e) {
              return e.user ? e.theme.userBubbleColor : e.theme.botBubbleColor
          }, function(e) {
              var t = e.isFirst,
                  n = e.isLast,
                  r = e.user;
              return t || n ? !t && n ? r ? "18px 0 18px 18px" : "0 18px 18px 18px" : e.user ? "18px 18px 0 18px" : "18px 18px 18px 0" : r ? "18px 0 0 18px" : "0 18px 18px 0px"
          }, function(e) {
              return e.user ? e.theme.userFontColor : e.theme.botFontColor
          }, function(e) {
              var t = e.isFirst,
                  n = e.showAvatar,
                  r = e.user;
              return !t && n ? r ? "-8px 46px 10px 0" : "-8px 0 10px 46px" : t || n ? "0 0 10px 0" : r ? "-8px 0px 10px 0" : "-8px 0 10px 0px"
          }, function(e) {
              var t = e.isFirst,
                  n = e.user;
              return t ? n ? "bottom right" : "bottom left" : n ? "top right" : "top left"
          });
      Ne.defaultProps = {
          theme: Se
      };
      var ke = Ne,
          Ee = ce.a.img(N(), fe, function(e) {
              return e.user ? "50% 50% 50% 0" : "50% 50% 0 50%"
          }, function(e) {
              return e.user ? "bottom left" : "bottom right"
          }),
          ze = ce.a.div(k(), function(e) {
              return e.user ? "1" : "0"
          }),
          Pe = ce.a.div(E(), function(e) {
              return e.user ? "flex-end" : "flex-start"
          }),
          Le = function(e) {
              function t() {
                  var e, n;
                  ! function(e, t) {
                      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                  }(this, t);
                  for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i];
                  return D(T(T(n = function(e, t) {
                      return !t || "object" !== z(t) && "function" != typeof t ? T(e) : t
                  }(this, (e = L(t)).call.apply(e, [this].concat(o))))), "state", {
                      loading: !0
                  }), D(T(T(n)), "getMessage", function() {
                      var e = n.props,
                          t = e.previousValue,
                          r = e.step.message;
                      return r ? r.replace(/{previousValue}/g, t) : ""
                  }), D(T(T(n)), "renderMessage", function() {
                      var e = n.props,
                          t = e.step,
                          r = e.steps,
                          o = e.previousStep,
                          i = e.triggerNextStep,
                          a = t.component;
                      return a ? re.a.cloneElement(a, {
                          step: t,
                          steps: r,
                          previousStep: o,
                          triggerNextStep: i
                      }) : n.getMessage()
                  }), n
              }
              return C(t, ne.Component),
                  function(e, t, n) {
                      t && P(e.prototype, t), n && P(e, n)
                  }(t, [{
                      key: "componentDidMount",
                      value: function() {
                          var e = this,
                              t = this.props,
                              n = t.step,
                              r = t.speak,
                              o = t.previousValue,
                              i = t.triggerNextStep,
                              a = n.component,
                              u = n.delay,
                              s = n.waitAction,
                              c = a && s;
                          setTimeout(function() {
                              e.setState({
                                  loading: !1
                              }, function() {
                                  c || n.rendered || i(), r(n, o)
                              })
                          }, u)
                      }
                  }, {
                      key: "render",
                      value: function() {
                          var e = this.props,
                              t = e.step,
                              n = e.isFirst,
                              r = e.isLast,
                              o = e.avatarStyle,
                              i = e.bubbleStyle,
                              a = e.hideBotAvatar,
                              u = e.hideUserAvatar,
                              s = this.state.loading,
                              c = t.avatar,
                              l = t.user,
                              p = l ? !u : !a;
                          return re.a.createElement(Pe, {
                              className: "rsc-ts ".concat(l ? "rsc-ts-user" : "rsc-ts-bot"),
                              user: l
                          }, re.a.createElement(ze, {
                              className: "rsc-ts-image-container",
                              user: l
                          }, n && p && re.a.createElement(Ee, {
                              className: "rsc-ts-image",
                              style: o,
                              showAvatar: p,
                              user: l,
                              src: c,
                              alt: "avatar"
                          })), re.a.createElement(ke, {
                              className: "rsc-ts-bubble",
                              style: i,
                              user: l,
                              showAvatar: p,
                              isFirst: n,
                              isLast: r
                          }, s ? re.a.createElement(ge, null) : this.renderMessage()))
                      }
                  }]), t
          }();
      Le.propTypes = {
          avatarStyle: ie.a.objectOf(ie.a.any).isRequired,
          isFirst: ie.a.bool.isRequired,
          isLast: ie.a.bool.isRequired,
          bubbleStyle: ie.a.objectOf(ie.a.any).isRequired,
          hideBotAvatar: ie.a.bool.isRequired,
          hideUserAvatar: ie.a.bool.isRequired,
          previousStep: ie.a.objectOf(ie.a.any),
          previousValue: ie.a.oneOfType([ie.a.string, ie.a.bool, ie.a.number, ie.a.object, ie.a.array]),
          speak: ie.a.func,
          step: ie.a.objectOf(ie.a.any).isRequired,
          steps: ie.a.objectOf(ie.a.any),
          triggerNextStep: ie.a.func.isRequired
      }, Le.defaultProps = {
          previousStep: {},
          previousValue: "",
          speak: function() {},
          steps: {}
      };
      var Ce = Le,
          Te = [{
              key: "id",
              types: ["string", "number"],
              required: !0
          }, {
              key: "user",
              types: ["boolean"],
              required: !0
          }, {
              key: "trigger",
              types: ["string", "number", "function"],
              required: !1
          }, {
              key: "validator",
              types: ["function"],
              required: !1
          }, {
              key: "end",
              types: ["boolean"],
              required: !1
          }, {
              key: "placeholder",
              types: ["string"],
              required: !1
          }, {
              key: "inputAttributes",
              types: ["object"],
              required: !1
          }, {
              key: "metadata",
              types: ["object"],
              required: !1
          }],
          De = [{
              key: "id",
              types: ["string", "number"],
              required: !0
          }, {
              key: "message",
              types: ["string", "function"],
              required: !0
          }, {
              key: "avatar",
              types: ["string"],
              required: !1
          }, {
              key: "trigger",
              types: ["string", "number", "function"],
              required: !1
          }, {
              key: "delay",
              types: ["number"],
              required: !1
          }, {
              key: "end",
              types: ["boolean"],
              required: !1
          }, {
              key: "placeholder",
              types: ["string"],
              required: !1
          }, {
              key: "hideInput",
              types: ["boolean"],
              required: !1
          }, {
              key: "inputAttributes",
              types: ["object"],
              required: !1
          }, {
              key: "metadata",
              types: ["object"],
              required: !1
          }],
          Ae = [{
              key: "id",
              types: ["string", "number"],
              required: !0
          }, {
              key: "options",
              types: ["object"],
              required: !0
          }, {
              key: "end",
              types: ["boolean"],
              required: !1
          }, {
              key: "placeholder",
              types: ["string"],
              required: !1
          }, {
              key: "hideInput",
              types: ["boolean"],
              required: !1
          }, {
              key: "inputAttributes",
              types: ["object"],
              required: !1
          }, {
              key: "metadata",
              types: ["object"],
              required: !1
          }],
          Re = [{
              key: "id",
              types: ["string", "number"],
              required: !0
          }, {
              key: "component",
              types: ["any"],
              required: !0
          }, {
              key: "avatar",
              types: ["string"],
              required: !1
          }, {
              key: "replace",
              types: ["boolean"],
              required: !1
          }, {
              key: "waitAction",
              types: ["boolean"],
              required: !1
          }, {
              key: "asMessage",
              types: ["boolean"],
              required: !1
          }, {
              key: "trigger",
              types: ["string", "number", "function"],
              required: !1
          }, {
              key: "delay",
              types: ["number"],
              required: !1
          }, {
              key: "end",
              types: ["boolean"],
              required: !1
          }, {
              key: "placeholder",
              types: ["string"],
              required: !1
          }, {
              key: "hideInput",
              types: ["boolean"],
              required: !1
          }, {
              key: "inputAttributes",
              types: ["object"],
              required: !1
          }, {
              key: "metadata",
              types: ["object"],
              required: !1
          }],
          Be = [{
              key: "id",
              types: ["string", "number"],
              required: !0
          }, {
              key: "update",
              types: ["string", "number"],
              required: !0
          }, {
              key: "trigger",
              types: ["string", "number", "function"],
              required: !0
          }, {
              key: "placeholder",
              types: ["string"],
              required: !1
          }, {
              key: "inputAttributes",
              types: ["object"],
              required: !1
          }, {
              key: "metadata",
              types: ["object"],
              required: !1
          }],
          _e = n(3),
          Ge = {
              parse: function(e) {
                  var t = [];
                  if (e.user) t = Te;
                  else if (e.message) t = De;
                  else if (e.options) t = Ae;
                  else if (e.component) t = Re;
                  else {
                      if (!e.update) throw new Error("The step ".concat(_e.stringify(e), " is invalid"));
                      t = Be
                  }
                  for (var n = 0, r = t.length; n < r; n += 1) {
                      var o = t[n],
                          i = o.key,
                          a = o.types,
                          u = o.required;
                      if (!e[i] && u) throw new Error("Key '".concat(i, "' is required in step ").concat(_e.stringify(e)));
                      if (e[i] && "any" !== a[0] && a.indexOf(A(e[i])) < 0) throw new Error("The type of '".concat(i, "' value must be ").concat(a.join(" or "), " instead of ").concat(A(e[i])))
                  }
                  var s = t.map(function(e) {
                      return e.key
                  });
                  for (var i in e) s.indexOf(i) < 0 && (console.error("Invalid key '".concat(i, "' in step '").concat(e.id, "'")), delete e[i]);
                  return e
              },
              checkInvalidIds: function(e) {
                  for (var t in e) {
                      var n = e[t],
                          r = e[t].trigger;
                      if ("function" != typeof r)
                          if (n.options)
                              for (var o = n.options.filter(function(e) {
                                      return "function" != typeof e.trigger
                                  }).map(function(e) {
                                      return e.trigger
                                  }), i = 0, a = o.length; i < a; i += 1) {
                                  var u = o[i];
                                  if (u && !e[u]) throw new Error("The id '".concat(u, "' triggered by option ").concat(i + 1, " in step '").concat(e[t].id, "' does not exist"))
                              } else if (r && !e[r]) throw new Error("The id '".concat(r, "' triggered by step '").concat(e[t].id, "' does not exist"))
                  }
              }
          },
          Ve = n(3),
          Ze = function(e, t) {
              var n = Ve.parse(Ve.stringify(t));
              for (var r in n)
                  for (var o = 0, i = n[r].length; o < i; o += 1) n[r][o].component && (n[r][o].component = n[r][o].id);
              localStorage.setItem(e, Ve.stringify(n))
          },
          qe = ce.a.div(R(), function(e) {
              return e.theme.background
          }, function(e) {
              return e.theme.fontFamily
          }, function(e) {
              return e.floating ? "fixed" : "relative"
          }, function(e) {
              var t = e.floating,
                  n = e.floatingStyle;
              return t ? n.bottom || "32px" : "initial"
          }, function(e) {
              var t = e.floating,
                  n = e.floatingStyle;
              return t && n.top || "initial"
          }, function(e) {
              var t = e.floating,
                  n = e.floatingStyle;
              return t ? n.right || "32px" : "initial"
          }, function(e) {
              var t = e.floating,
                  n = e.floatingStyle;
              return t && n.left || "initial"
          }, function(e) {
              return e.width
          }, function(e) {
              return e.height
          }, function(e) {
              return e.opened ? "scale(1)" : "scale(0)"
          }, function(e) {
              return e.floatingStyle.transformOrigin || "bottom right"
          }, function(e) {
              return e.floating ? "0" : ""
          });
      qe.defaultProps = {
          theme: Se
      };
      var Ue = qe,
          Qe = ce.a.div(B(), function(e) {
              return e.height
          }, function(e) {
              return e.hideInput ? "56px" : "112px"
          }, function(e) {
              return e.floating ? "calc(100% - 112px)" : ""
          }),
          Fe = ce.a.div(_(), function(e) {
              return e.theme.headerBgColor
          }, function(e) {
              return e.theme.headerFontColor
          }, function(e) {
              return e.theme.headerFontColor
          });
      Fe.defaultProps = {
          theme: Se
      };
      var Ye = Fe,
          He = ce.a.h2(G(), function(e) {
              return e.theme.headerFontSize
          });
      He.defaultProps = {
          theme: Se
      };
      var We = He,
          Je = ce.a.a(V()),
          Xe = ce.a.a(Z(), function(e) {
              return e.theme.headerBgColor
          }, function(e) {
              return e.theme.headerFontColor
          }, function(e) {
              return e.opened ? "scale(0)" : "scale(1)"
          });
      Xe.defaultProps = {
          theme: {
              headerBgColor: "#6e48aa",
              headerFontColor: "#fff"
          }
      };
      var Ke = Xe,
          $e = ce.a.img(q()),
          et = ce.a.div(U()),
          tt = ce.a.input(Q(), function(e) {
              return e.invalid ? "".concat(de, " .2s ease") : ""
          }, function(e) {
              return e.invalid ? "0" : "1px solid #eee"
          }, function(e) {
              return e.invalid ? "inset 0 0 2px #E53935" : "none"
          }, function(e) {
              return e.invalid ? "#E53935" : ""
          }, function(e) {
              return e.disabled && !e.invalid ? ".5" : "1"
          }, function(e) {
              return e.hasButton ? "16px 52px 16px 10px" : "16px 10px"
          }, function(e) {
              return e.floating ? "0" : "10px"
          }, function(e) {
              return e.floating ? "0" : "10px"
          }),
          nt = ce.a.button(F(), function(e) {
              return e.disabled ? "default" : "pointer"
          }, function(e) {
              var t = e.speaking,
                  n = e.invalid,
                  r = e.theme;
              return t ? r.headerBgColor : n ? "#E53935" : "#4a4a4a"
          }, function(e) {
              return e.disabled && !e.invalid ? ".5" : "1"
          }, function(e) {
              var t = e.theme;
              return e.speaking ? "".concat(function(e) {
                  return Object(se.keyframes)(r(), le(e, .4), le(e, 0), le(e, 0))
              }(t.headerBgColor), " 2s ease infinite") : ""
          });
      nt.defaultProps = {
          theme: Se
      };
      var rt = nt,
          ot = null,
          it = function() {},
          at = function() {
              function e() {
                  var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : it,
                      n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : it,
                      r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : it,
                      o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "en";
                  return function(e, t) {
                      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                  }(this, e), ot || (ot = this), this.state = {
                      inputValue: "",
                      lang: o,
                      onChange: t,
                      onEnd: n,
                      onStop: r
                  }, this.onResult = this.onResult.bind(this), this.onEnd = this.onEnd.bind(this), this.setup(), ot
              }
              return H(e, null, [{
                  key: "isSupported",
                  value: function() {
                      return "webkitSpeechRecognition" in window
                  }
              }]), H(e, [{
                  key: "onChange",
                  value: function(e) {
                      var t = this.state.onChange;
                      this.setState({
                          inputValue: e
                      }), t(e)
                  }
              }, {
                  key: "onFinal",
                  value: function(e) {
                      this.setState({
                          inputValue: e
                      }), this.recognition.stop()
                  }
              }, {
                  key: "onEnd",
                  value: function() {
                      var e = this.state,
                          t = e.onStop,
                          n = e.onEnd,
                          r = e.force;
                      this.setState({
                          speaking: !1
                      }), r ? t() : n()
                  }
              }, {
                  key: "onResult",
                  value: function(e) {
                      for (var t = "", n = "", r = e.resultIndex; r < e.results.length; r += 1) e.results[r].isFinal ? (n += e.results[r][0].transcript, this.onFinal(n)) : (t += e.results[r][0].transcript, this.onChange(t))
                  }
              }, {
                  key: "setState",
                  value: function(e) {
                      this.state = Object.assign({}, this.state, e)
                  }
              }, {
                  key: "setup",
                  value: function() {
                      if (!e.isSupported()) return this;
                      var t = window.webkitSpeechRecognition;
                      return this.recognition = new t, this.recognition.continuous = !0, this.recognition.interimResults = !0, this.recognition.lang = this.state.lang, this.recognition.onresult = this.onResult, this.recognition.onend = this.onEnd, this
                  }
              }, {
                  key: "setLang",
                  value: function(e) {
                      return this.setState({
                          lang: e
                      }), this.setup(), this
                  }
              }, {
                  key: "speak",
                  value: function() {
                      return e.isSupported() ? (this.state.speaking ? (this.setState({
                          force: !0
                      }), this.recognition.stop()) : (this.recognition.start(), this.setState({
                          speaking: !0,
                          inputValue: ""
                      })), this) : this
                  }
              }]), e
          }(),
          ut = function() {
              return re.a.createElement("svg", {
                  height: "24",
                  viewBox: "0 0 24 24",
                  width: "24",
                  xmlns: "http://www.w3.org/2000/svg"
              }, re.a.createElement("path", {
                  d: "M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"
              }), re.a.createElement("path", {
                  d: "M0 0h24v24H0z",
                  fill: "none"
              }))
          },
          st = function() {
              return re.a.createElement("svg", {
                  height: "24",
                  viewBox: "0 0 24 24",
                  width: "24",
                  xmlns: "http://www.w3.org/2000/svg"
              }, re.a.createElement("path", {
                  d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
              }), re.a.createElement("path", {
                  d: "M0 0h24v24H0z",
                  fill: "none"
              }))
          },
          ct = function(e) {
              return re.a.createElement("svg", {
                  version: "1.1",
                  xmlns: "http://www.w3.org/2000/svg",
                  width: e.size,
                  height: e.size,
                  viewBox: "0 0 500 500"
              }, re.a.createElement("g", null, re.a.createElement("g", null, re.a.createElement("polygon", {
                  points: "0,497.25 535.5,267.75 0,38.25 0,216.75 382.5,267.75 0,318.75"
              }))))
          };
      ct.propTypes = {
          size: ie.a.number
      }, ct.defaultProps = {
          size: 20
      };
      var lt = ct,
          pt = function(e) {
              return re.a.createElement("svg", {
                  version: "1.1",
                  xmlns: "http://www.w3.org/2000/svg",
                  width: e.size,
                  height: e.size,
                  viewBox: "0 0 400 400"
              }, re.a.createElement("g", null, re.a.createElement("path", {
                  d: "M290.991,240.991c0,26.392-21.602,47.999-48.002,47.999h-11.529c-26.4,0-48.002-21.607-48.002-47.999V104.002   c0-26.4,21.602-48.004,48.002-48.004h11.529c26.4,0,48.002,21.604,48.002,48.004V240.991z"
              }), re.a.createElement("path", {
                  d: "M342.381,209.85h-8.961c-4.932,0-8.961,4.034-8.961,8.961v8.008c0,50.26-37.109,91.001-87.361,91.001   c-50.26,0-87.109-40.741-87.109-91.001v-8.008c0-4.927-4.029-8.961-8.961-8.961h-8.961c-4.924,0-8.961,4.034-8.961,8.961v8.008   c0,58.862,40.229,107.625,96.07,116.362v36.966h-34.412c-4.932,0-8.961,4.039-8.961,8.971v17.922c0,4.923,4.029,8.961,8.961,8.961   h104.688c4.926,0,8.961-4.038,8.961-8.961v-17.922c0-4.932-4.035-8.971-8.961-8.971h-34.43v-36.966   c55.889-8.729,96.32-57.5,96.32-116.362v-8.008C351.342,213.884,347.303,209.85,342.381,209.85z"
              })))
          };
      pt.propTypes = {
          size: ie.a.number
      }, pt.defaultProps = {
          size: 20
      };
      var ft = pt,
          dt = function() {
              return /iphone|ipod|android|ie|blackberry|fennec/i.test(navigator.userAgent)
          },
          yt = function(e) {
              return "string" == typeof e
          },
          gt = function(e) {
              return function(t, n) {
                  var r = e.lang,
                      o = e.voice,
                      i = e.enable,
                      a = t.user;
                  if (window.SpeechSynthesisUtterance && window.speechSynthesis && !a && i) {
                      var u = function(e) {
                              var t = e.message,
                                  n = e.metadata,
                                  r = void 0 === n ? {} : n;
                              return yt(r.speak) ? r.speak : yt(t) ? t : ""
                          }(t),
                          s = new window.SpeechSynthesisUtterance;
                      s.text = u.replace(/{previousValue}/g, n), s.lang = r, s.voice = o, window.speechSynthesis.speak(s)
                  }
              }
          },
          bt = function(e) {
              function t(e) {
                  var n;
                  return function(e, t) {
                      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                  }(this, t), te(ee(ee(n = function(e, t) {
                      return !t || "object" !== W(t) && "function" != typeof t ? ee(e) : t
                  }(this, K(t).call(this, e)))), "onNodeInserted", function(e) {
                      e.currentTarget.scrollTop = e.currentTarget.scrollHeight
                  }), te(ee(ee(n)), "onResize", function() {
                      n.content.scrollTop = n.content.scrollHeight
                  }), te(ee(ee(n)), "onRecognitionChange", function(e) {
                      n.setState({
                          inputValue: e
                      })
                  }), te(ee(ee(n)), "onRecognitionEnd", function() {
                      n.setState({
                          speaking: !1
                      }), n.handleSubmitButton()
                  }), te(ee(ee(n)), "onRecognitionStop", function() {
                      n.setState({
                          speaking: !1
                      })
                  }), te(ee(ee(n)), "onValueChange", function(e) {
                      n.setState({
                          inputValue: e.target.value
                      })
                  }), te(ee(ee(n)), "getTriggeredStep", function(e, t) {
                      var r = n.generateRenderedStepsById();
                      return "function" == typeof e ? e({
                          value: t,
                          steps: r
                      }) : e
                  }), te(ee(ee(n)), "getStepMessage", function(e) {
                      var t = n.state.previousSteps,
                          r = t.length > 0 ? t.length - 1 : 0,
                          o = n.generateRenderedStepsById(),
                          i = t[r].value;
                      return "function" == typeof e ? e({
                          previousValue: i,
                          steps: o
                      }) : e
                  }), te(ee(ee(n)), "generateRenderedStepsById", function() {
                      for (var e = n.state.previousSteps, t = {}, r = 0, o = e.length; r < o; r += 1) {
                          var i = e[r],
                              a = i.id,
                              u = i.message,
                              s = i.value,
                              c = i.metadata;
                          t[a] = {
                              id: a,
                              message: u,
                              value: s,
                              metadata: c
                          }
                      }
                      return t
                  }), te(ee(ee(n)), "triggerNextStep", function(e) {
                      var t = n.props.enableMobileAutoFocus,
                          r = n.state,
                          o = r.defaultUserSettings,
                          i = r.previousSteps,
                          a = r.renderedSteps,
                          u = r.steps,
                          s = n.state,
                          c = s.currentStep,
                          l = s.previousStep,
                          p = c.end;
                      if (e && e.value && (c.value = e.value), e && e.hideInput && (c.hideInput = e.hideInput), e && e.trigger && (c.trigger = n.getTriggeredStep(e.trigger, e.value)), p) n.handleEnd();
                      else if (c.options && e) {
                          var f = c.options.filter(function(t) {
                                  return t.value === e.value
                              })[0],
                              d = n.getTriggeredStep(f.trigger, c.value);
                          delete c.options, c = Object.assign({}, c, f, o, {
                              user: !0,
                              message: f.label,
                              trigger: d
                          }), a.pop(), i.pop(), a.push(c), i.push(c), n.setState({
                              currentStep: c,
                              renderedSteps: a,
                              previousSteps: i
                          })
                      } else if (c.trigger) {
                          c.replace && a.pop();
                          var y = n.getTriggeredStep(c.trigger, c.value),
                              g = Object.assign({}, u[y]);
                          if (g.message) g.message = n.getStepMessage(g.message);
                          else if (g.update) {
                              var b = g;
                              if ((g = Object.assign({}, u[b.update])).options)
                                  for (var h = 0, v = g.options.length; h < v; h += 1) g.options[h].trigger = b.trigger;
                              else g.trigger = b.trigger
                          }
                          g.key = ue()(24), l = c, c = g, n.setState({
                              renderedSteps: a,
                              currentStep: c,
                              previousStep: l
                          }, function() {
                              g.user ? n.setState({
                                  disabled: !1
                              }, function() {
                                  !t && dt() || n.input && n.input.focus()
                              }) : (a.push(g), i.push(g), n.setState({
                                  renderedSteps: a,
                                  previousSteps: i
                              }))
                          })
                      }
                      var m = n.props,
                          S = m.cache,
                          j = m.cacheName;
                      S && setTimeout(function() {
                          Ze(j, {
                              currentStep: c,
                              previousStep: l,
                              previousSteps: i,
                              renderedSteps: a
                          })
                      }, 300)
                  }), te(ee(ee(n)), "handleEnd", function() {
                      var e = n.props.handleEnd;
                      if (e) {
                          for (var t = n.state.previousSteps, r = t.map(function(e) {
                                  return {
                                      id: e.id,
                                      message: e.message,
                                      value: e.value,
                                      metadata: e.metadata
                                  }
                              }), o = [], i = 0, a = t.length; i < a; i += 1) {
                              var u = t[i],
                                  s = u.id,
                                  c = u.message,
                                  l = u.value,
                                  p = u.metadata;
                              o[s] = {
                                  id: s,
                                  message: c,
                                  value: l,
                                  metadata: p
                              }
                          }
                          e({
                              renderedSteps: r,
                              steps: o,
                              values: t.filter(function(e) {
                                  return e.value
                              }).map(function(e) {
                                  return e.value
                              })
                          })
                      }
                  }), te(ee(ee(n)), "isInputValueEmpty", function() {
                      var e = n.state.inputValue;
                      return Boolean(e) && e.length > 0
                  }), te(ee(ee(n)), "isLastPosition", function(e) {
                      var t = n.state.renderedSteps,
                          r = t.length,
                          o = t.map(function(e) {
                              return e.key
                          }).indexOf(e.key);
                      if (r <= 1 || o + 1 === r) return !0;
                      var i = t[o + 1];
                      return !i.message && !i.asMessage || e.user !== i.user
                  }), te(ee(ee(n)), "isFirstPosition", function(e) {
                      var t = n.state.renderedSteps,
                          r = t.map(function(e) {
                              return e.key
                          }).indexOf(e.key);
                      if (0 === r) return !0;
                      var o = t[r - 1];
                      return !o.message && !o.asMessage || e.user !== o.user
                  }), te(ee(ee(n)), "handleKeyPress", function(e) {
                      "Enter" === e.key && n.submitUserMessage()
                  }), te(ee(ee(n)), "handleSubmitButton", function() {
                      var e = n.state,
                          t = e.speaking,
                          r = e.recognitionEnable;
                      if ((n.isInputValueEmpty() || t) && r) return n.recognition.speak(), void(t || n.setState({
                          speaking: !0
                      }));
                      n.submitUserMessage()
                  }), te(ee(ee(n)), "submitUserMessage", function() {
                      var e = n.state,
                          t = e.defaultUserSettings,
                          r = e.inputValue,
                          o = e.previousSteps,
                          i = e.renderedSteps,
                          a = n.state.currentStep;
                      if (!a.validator || !n.checkInvalidInput()) {
                          var u = {
                              message: r,
                              value: r
                          };
                          a = Object.assign({}, t, a, u), i.push(a), o.push(a), n.setState({
                              currentStep: a,
                              renderedSteps: i,
                              previousSteps: o,
                              disabled: !0,
                              inputValue: ""
                          }, function() {
                              n.input && n.input.blur()
                          })
                      }
                  }), te(ee(ee(n)), "checkInvalidInput", function() {
                      var e = n.props.enableMobileAutoFocus,
                          t = n.state,
                          r = t.currentStep,
                          o = t.inputValue,
                          i = r.validator(o),
                          a = o;
                      return !("boolean" == typeof i && i || (n.setState({
                          inputValue: i.toString(),
                          inputInvalid: !0,
                          disabled: !0
                      }, function() {
                          setTimeout(function() {
                              n.setState({
                                  inputValue: a,
                                  inputInvalid: !1,
                                  disabled: !1
                              }, function() {
                                  !e && dt() || n.input && n.input.focus()
                              })
                          }, 2e3)
                      }), 0))
                  }), te(ee(ee(n)), "toggleChatBot", function(e) {
                      var t = n.props.toggleFloating;
                      t ? t({
                          opened: e
                      }) : n.setState({
                          opened: e
                      })
                  }), te(ee(ee(n)), "renderStep", function(e, t) {
                      var r = n.state.renderedSteps,
                          o = n.props,
                          i = o.avatarStyle,
                          a = o.bubbleStyle,
                          u = o.bubbleOptionStyle,
                          s = o.customStyle,
                          c = o.hideBotAvatar,
                          l = o.hideUserAvatar,
                          p = o.speechSynthesis,
                          f = e.options,
                          d = e.component,
                          y = e.asMessage,
                          g = n.generateRenderedStepsById(),
                          b = t > 0 ? r[t - 1] : {};
                      return d && !y ? re.a.createElement(ve, {
                          key: t,
                          speak: n.speak,
                          step: e,
                          steps: g,
                          style: s,
                          previousStep: b,
                          previousValue: b.value,
                          triggerNextStep: n.triggerNextStep
                      }) : f ? re.a.createElement(Ie, {
                          key: t,
                          step: e,
                          speak: n.speak,
                          previousValue: b.value,
                          triggerNextStep: n.triggerNextStep,
                          bubbleOptionStyle: u
                      }) : re.a.createElement(Ce, {
                          key: t,
                          step: e,
                          steps: g,
                          speak: n.speak,
                          previousStep: b,
                          previousValue: b.value,
                          triggerNextStep: n.triggerNextStep,
                          avatarStyle: i,
                          bubbleStyle: a,
                          hideBotAvatar: c,
                          hideUserAvatar: l,
                          speechSynthesis: p,
                          isFirst: n.isFirstPosition(e),
                          isLast: n.isLastPosition(e)
                      })
                  }), n.state = {
                      renderedSteps: [],
                      previousSteps: [],
                      currentStep: {},
                      previousStep: {},
                      steps: {},
                      disabled: !0,
                      opened: e.opened || !e.floating,
                      inputValue: "",
                      inputInvalid: !1,
                      speaking: !1,
                      recognitionEnable: e.recognitionEnable && at.isSupported(),
                      defaultUserSettings: {}
                  }, n.speak = gt(e.speechSynthesis), n
              }
              return $(t, ne.Component),
                  function(e, t, n) {
                      t && X(e.prototype, t), n && X(e, n)
                  }(t, [{
                      key: "componentWillMount",
                      value: function() {
                          for (var e = this, t = this.props.steps, n = this.props, r = n.botDelay, o = n.botAvatar, i = n.cache, a = n.cacheName, u = n.customDelay, s = n.enableMobileAutoFocus, c = n.userAvatar, l = {}, p = {
                                  delay: r,
                                  avatar: o
                              }, f = {
                                  delay: n.userDelay,
                                  avatar: c,
                                  hideInput: !1
                              }, d = {
                                  delay: u
                              }, y = 0, g = t.length; y < g; y += 1) {
                              var b = t[y],
                                  h = {};
                              b.user ? h = f : b.message || b.asMessage ? h = p : b.component && (h = d), l[b.id] = Object.assign({}, h, Ge.parse(b))
                          }
                          Ge.checkInvalidIds(l);
                          var v = t[0];
                          if (v.message) {
                              var m = v.message;
                              v.message = "function" == typeof m ? m() : m, l[v.id].message = v.message
                          }
                          var S = function(e, t) {
                                  var n = e.cacheName,
                                      r = e.cache,
                                      o = e.firstStep,
                                      i = e.steps,
                                      a = o,
                                      u = [i[a.id]],
                                      s = [i[a.id]];
                                  if (r && localStorage.getItem(n)) {
                                      var c = Ve.parse(localStorage.getItem(n)),
                                          l = c.renderedSteps[c.renderedSteps.length - 1];
                                      if (!l || !l.end) {
                                          for (var p = 0, f = c.renderedSteps.length; p < f; p += 1) {
                                              var d = c.renderedSteps[p];
                                              if (c.renderedSteps[p].delay = 0, c.renderedSteps[p].rendered = !0, d.component) {
                                                  var y = d.id;
                                                  c.renderedSteps[p].component = i[y].component
                                              }
                                          }
                                          var g = c.currentStep,
                                              b = g.trigger,
                                              h = g.end,
                                              v = g.options,
                                              m = c.currentStep.id;
                                          if (v && delete c.currentStep.rendered, !b && !h)
                                              if (v)
                                                  for (var S = 0; S < v.length; S += 1) c.currentStep.options[S].trigger = i[m].options[S].trigger;
                                              else c.currentStep.trigger = i[m].trigger;
                                          return c.currentStep.user && t(), c
                                      }
                                      localStorage.removeItem(n)
                                  }
                                  return {
                                      currentStep: a,
                                      previousStep: {},
                                      previousSteps: s,
                                      renderedSteps: u
                                  }
                              }({
                                  cacheName: a,
                                  cache: i,
                                  firstStep: v,
                                  steps: l
                              }, function() {
                                  e.setState({
                                      disabled: !1
                                  }, function() {
                                      !s && dt() || e.input && e.input.focus()
                                  })
                              }),
                              j = S.currentStep,
                              M = S.previousStep,
                              w = S.previousSteps,
                              x = S.renderedSteps;
                          this.setState({
                              currentStep: j,
                              defaultUserSettings: f,
                              previousStep: M,
                              previousSteps: w,
                              renderedSteps: x,
                              steps: l
                          })
                      }
                  }, {
                      key: "componentDidMount",
                      value: function() {
                          var e = this.state.recognitionEnable,
                              t = this.props.recognitionLang;
                          e && (this.recognition = new at(this.onRecognitionChange, this.onRecognitionEnd, this.onRecognitionStop, t)), this.content && (this.content.addEventListener("DOMNodeInserted", this.onNodeInserted), window.addEventListener("resize", this.onResize))
                      }
                  }, {
                      key: "componentWillUpdate",
                      value: function(e, t) {
                          var n = e.opened;
                          void 0 !== n && n !== t.opened && this.setState({
                              opened: n
                          })
                      }
                  }, {
                      key: "componentWillUnmount",
                      value: function() {
                          this.content && (this.content.removeEventListener("DOMNodeInserted", this.onNodeInserted), window.removeEventListener("resize", this.onResize))
                      }
                  }, {
                      key: "render",
                      value: function() {
                          var e = this,
                              t = this.state,
                              n = t.currentStep,
                              r = t.disabled,
                              o = t.inputInvalid,
                              i = t.inputValue,
                              a = t.opened,
                              u = t.renderedSteps,
                              s = t.speaking,
                              c = t.recognitionEnable,
                              l = this.props,
                              p = l.className,
                              f = l.contentStyle,
                              d = l.floating,
                              y = l.floatingIcon,
                              g = l.floatingStyle,
                              b = l.footerStyle,
                              h = l.headerComponent,
                              v = l.headerTitle,
                              m = l.hideHeader,
                              S = l.hideSubmitButton,
                              j = l.inputStyle,
                              M = l.placeholder,
                              w = l.inputAttributes,
                              x = l.recognitionPlaceholder,
                              O = l.style,
                              I = l.submitButtonStyle,
                              N = l.width,
                              k = l.height,
                              E = h || re.a.createElement(Ye, {
                                  className: "rsc-header"
                              }, re.a.createElement(We, {
                                  className: "rsc-header-title"
                              }, v), d && re.a.createElement(Je, {
                                  className: "rsc-header-close-button",
                                  onClick: function() {
                                      return e.toggleChatBot(!1)
                                  }
                              }, re.a.createElement(st, null))),
                              z = (this.isInputValueEmpty() || s) && c ? re.a.createElement(ft, null) : re.a.createElement(lt, null),
                              P = s ? x : n.placeholder || M,
                              L = n.inputAttributes || w;
                          return re.a.createElement("div", {
                              className: "rsc ".concat(p)
                          }, d && re.a.createElement(Ke, {
                              className: "rsc-float-button",
                              style: g,
                              opened: a,
                              onClick: function() {
                                  return e.toggleChatBot(!0)
                              }
                          }, "string" == typeof y ? re.a.createElement($e, {
                              src: y
                          }) : y), re.a.createElement(Ue, {
                              className: "rsc-container",
                              floating: d,
                              floatingStyle: g,
                              opened: a,
                              style: O,
                              width: N,
                              height: k
                          }, !m && E, re.a.createElement(Qe, {
                              className: "rsc-content",
                              innerRef: function(t) {
                                  return e.content = t
                              },
                              floating: d,
                              style: f,
                              height: k,
                              hideInput: n.hideInput
                          }, u.map(this.renderStep)), re.a.createElement(et, {
                              className: "rsc-footer",
                              style: b
                          }, !n.hideInput && re.a.createElement(tt, J({
                              type: "textarea",
                              style: j,
                              innerRef: function(t) {
                                  return e.input = t
                              },
                              className: "rsc-input",
                              placeholder: o ? "" : P,
                              onKeyPress: this.handleKeyPress,
                              onChange: this.onValueChange,
                              value: i,
                              floating: d,
                              invalid: o,
                              disabled: r,
                              hasButton: !S
                          }, L)), !n.hideInput && !S && re.a.createElement(rt, {
                              className: "rsc-submit-button",
                              style: I,
                              onClick: this.handleSubmitButton,
                              invalid: o,
                              disabled: r,
                              speaking: s
                          }, z))))
                      }
                  }]), t
          }();
      bt.propTypes = {
          avatarStyle: ie.a.objectOf(ie.a.any),
          botAvatar: ie.a.string,
          botDelay: ie.a.number,
          bubbleOptionStyle: ie.a.objectOf(ie.a.any),
          bubbleStyle: ie.a.objectOf(ie.a.any),
          cache: ie.a.bool,
          cacheName: ie.a.string,
          className: ie.a.string,
          contentStyle: ie.a.objectOf(ie.a.any),
          customDelay: ie.a.number,
          customStyle: ie.a.objectOf(ie.a.any),
          enableMobileAutoFocus: ie.a.bool,
          floating: ie.a.bool,
          floatingIcon: ie.a.oneOfType([ie.a.string, ie.a.element]),
          floatingStyle: ie.a.objectOf(ie.a.any),
          footerStyle: ie.a.objectOf(ie.a.any),
          handleEnd: ie.a.func,
          headerComponent: ie.a.element,
          headerTitle: ie.a.string,
          height: ie.a.string,
          hideBotAvatar: ie.a.bool,
          hideHeader: ie.a.bool,
          hideSubmitButton: ie.a.bool,
          hideUserAvatar: ie.a.bool,
          inputAttributes: ie.a.objectOf(ie.a.any),
          inputStyle: ie.a.objectOf(ie.a.any),
          opened: ie.a.bool,
          toggleFloating: ie.a.func,
          placeholder: ie.a.string,
          recognitionEnable: ie.a.bool,
          recognitionLang: ie.a.string,
          recognitionPlaceholder: ie.a.string,
          speechSynthesis: ie.a.shape({
              enable: ie.a.bool,
              lang: ie.a.string,
              voice: "undefined" != typeof window ? ie.a.instanceOf(window.SpeechSynthesisVoice) : ie.a.any
          }),
          steps: ie.a.arrayOf(ie.a.object).isRequired,
          style: ie.a.objectOf(ie.a.any),
          submitButtonStyle: ie.a.objectOf(ie.a.any),
          userAvatar: ie.a.string,
          userDelay: ie.a.number,
          width: ie.a.string
      }, bt.defaultProps = {
          avatarStyle: {},
          botDelay: 1e3,
          bubbleOptionStyle: {},
          bubbleStyle: {},
          cache: !1,
          cacheName: "rsc_cache",
          className: "",
          contentStyle: {},
          customStyle: {},
          customDelay: 1e3,
          enableMobileAutoFocus: !1,
          floating: !1,
          floatingIcon: re.a.createElement(ut, null),
          floatingStyle: {},
          footerStyle: {},
          handleEnd: void 0,
          headerComponent: void 0,
          headerTitle: "Chat",
          height: "520px",
          hideBotAvatar: !1,
          hideHeader: !1,
          hideSubmitButton: !1,
          hideUserAvatar: !1,
          inputStyle: {},
          opened: void 0,
          placeholder: "Type the message ...",
          inputAttributes: {},
          recognitionEnable: !1,
          recognitionLang: "en",
          recognitionPlaceholder: "Listening ...",
          speechSynthesis: {
              enable: !1,
              lang: "en",
              voice: window.speechSynthesis.getVoices()[4],
          },
          style: {},
          submitButtonStyle: {},
          toggleFloating: void 0,
          userDelay: 1e3,
          width: "350px",
          botAvatar: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIHN0eWxlPSJmaWxsOiM5M0M3RUY7IiBkPSJNMzAyLjU0NSw2OS44MThjMC0yNS43MDctMjAuODQtNDYuNTQ1LTQ2LjU0NS00Ni41NDVzLTQ2LjU0NSwyMC44MzgtNDYuNTQ1LDQ2LjU0NQ0KCWMwLDE3LjIyNSw5LjM2NSwzMi4yNTQsMjMuMjczLDQwLjMwNHY4My44MThoNDYuNTQ1di04My44MThDMjkzLjE4MSwxMDIuMDczLDMwMi41NDUsODcuMDQzLDMwMi41NDUsNjkuODE4eiIvPg0KPHBhdGggc3R5bGU9ImZpbGw6IzVBOEJCMDsiIGQ9Ik0yNTYsMjMuMjczdjE3MC42NjdoMjMuMjczdi04My44MThjMTMuOTA4LTguMDQ5LDIzLjI3My0yMy4wNzcsMjMuMjczLTQwLjMwNA0KCUMzMDIuNTQ1LDQ0LjExMSwyODEuNzA1LDIzLjI3MywyNTYsMjMuMjczeiIvPg0KPHJlY3QgeT0iMjQwLjQ4NSIgc3R5bGU9ImZpbGw6IzkzQzdFRjsiIHdpZHRoPSIyNDguMjQyIiBoZWlnaHQ9IjEyNC4xMjEiLz4NCjxyZWN0IHg9IjI2My43NTgiIHk9IjI0MC40ODUiIHN0eWxlPSJmaWxsOiM1QThCQjA7IiB3aWR0aD0iMjQ4LjI0MiIgaGVpZ2h0PSIxMjQuMTIxIi8+DQo8cmVjdCB4PSIxODYuMTgyIiB5PSIzNjQuNjA2IiBzdHlsZT0iZmlsbDojOTNDN0VGOyIgd2lkdGg9IjEzOS42MzYiIGhlaWdodD0iMTI0LjEyMSIvPg0KPHJlY3QgeD0iMjU2IiB5PSIzNjQuNjA2IiBzdHlsZT0iZmlsbDojNUE4QkIwOyIgd2lkdGg9IjY5LjgxOCIgaGVpZ2h0PSIxMjQuMTIxIi8+DQo8cmVjdCB4PSI0Ni41NDUiIHk9IjE2Mi45MDkiIHN0eWxlPSJmaWxsOiNDQ0U5Rjk7IiB3aWR0aD0iNDE4LjkwOSIgaGVpZ2h0PSIyNzkuMjczIi8+DQo8cmVjdCB4PSIyNTYiIHk9IjE2Mi45MDkiIHN0eWxlPSJmaWxsOiM5M0M3RUY7IiB3aWR0aD0iMjA5LjQ1NSIgaGVpZ2h0PSIyNzkuMjczIi8+DQo8cGF0aCBzdHlsZT0iZmlsbDojM0M1RDc2OyIgZD0iTTE5My45MzksMjcxLjUxNWMwLDE3LjEzOC0xMy44OTQsMzEuMDMtMzEuMDMsMzEuMDNsMCwwYy0xNy4xMzYsMC0zMS4wMy0xMy44OTItMzEuMDMtMzEuMDNsMCwwDQoJYzAtMTcuMTM4LDEzLjg5NC0zMS4wMywzMS4wMy0zMS4wM2wwLDBDMTgwLjA0NiwyNDAuNDg1LDE5My45MzksMjU0LjM3NywxOTMuOTM5LDI3MS41MTVMMTkzLjkzOSwyNzEuNTE1eiIvPg0KPHBhdGggc3R5bGU9ImZpbGw6IzFFMkUzQjsiIGQ9Ik0zODAuMTIxLDI3MS41MTVjMCwxNy4xMzgtMTMuODk0LDMxLjAzLTMxLjAzLDMxLjAzbDAsMGMtMTcuMTM3LDAtMzEuMDMtMTMuODkyLTMxLjAzLTMxLjAzbDAsMA0KCWMwLTE3LjEzOCwxMy44OTQtMzEuMDMsMzEuMDMtMzEuMDNsMCwwQzM2Ni4yMjcsMjQwLjQ4NSwzODAuMTIxLDI1NC4zNzcsMzgwLjEyMSwyNzEuNTE1TDM4MC4xMjEsMjcxLjUxNXoiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiMzQzVENzY7IiBkPSJNMTg2LjE4MiwzNDkuMDkxYzAsMzguNTU4LDMxLjI1OCw2OS44MTgsNjkuODE4LDY5LjgxOGwwLDBjMzguNTU4LDAsNjkuODE4LTMxLjI2LDY5LjgxOC02OS44MTgNCglIMTg2LjE4MnoiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiMxRTJFM0I7IiBkPSJNMjU2LDM0OS4wOTFjMCwzOC41NTgsMCw0Ni41NDUsMCw2OS44MThsMCwwYzM4LjU1OCwwLDY5LjgxOC0zMS4yNiw2OS44MTgtNjkuODE4SDI1NnoiLz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K",
          userAvatar: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgLTIwOC41IDIxIDEwMCAxMDAiIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9Ii0yMDguNSAyMSAxMDAgMTAwIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnNrZXRjaD0iaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGc+PGNpcmNsZSBjeD0iLTE1OC41IiBjeT0iNzEiIGZpbGw9IiNGNUVFRTUiIGlkPSJNYXNrIiByPSI1MCIvPjxnPjxkZWZzPjxjaXJjbGUgY3g9Ii0xNTguNSIgY3k9IjcxIiBpZD0iTWFza18yXyIgcj0iNTAiLz48L2RlZnM+PGNsaXBQYXRoIGlkPSJNYXNrXzRfIj48dXNlIG92ZXJmbG93PSJ2aXNpYmxlIiB4bGluazpocmVmPSIjTWFza18yXyIvPjwvY2xpcFBhdGg+PHBhdGggY2xpcC1wYXRoPSJ1cmwoI01hc2tfNF8pIiBkPSJNLTEwOC41LDEyMXYtMTRjMCwwLTIxLjItNC45LTI4LTYuN2MtMi41LTAuNy03LTMuMy03LTEyICAgICBjMC0xLjcsMC02LjMsMC02LjNoLTE1aC0xNWMwLDAsMCw0LjYsMCw2LjNjMCw4LjctNC41LDExLjMtNywxMmMtNi44LDEuOS0yOC4xLDcuMy0yOC4xLDYuN3YxNGg1MC4xSC0xMDguNXoiIGZpbGw9IiNFNkMxOUMiIGlkPSJNYXNrXzNfIi8+PGcgY2xpcC1wYXRoPSJ1cmwoI01hc2tfNF8pIj48ZGVmcz48cGF0aCBkPSJNLTEwOC41LDEyMXYtMTRjMCwwLTIxLjItNC45LTI4LTYuN2MtMi41LTAuNy03LTMuMy03LTEyYzAtMS43LDAtNi4zLDAtNi4zaC0xNWgtMTVjMCwwLDAsNC42LDAsNi4zICAgICAgIGMwLDguNy00LjUsMTEuMy03LDEyYy02LjgsMS45LTI4LjEsNy4zLTI4LjEsNi43djE0aDUwLjFILTEwOC41eiIgaWQ9Ik1hc2tfMV8iLz48L2RlZnM+PGNsaXBQYXRoIGlkPSJNYXNrXzVfIj48dXNlIG92ZXJmbG93PSJ2aXNpYmxlIiB4bGluazpocmVmPSIjTWFza18xXyIvPjwvY2xpcFBhdGg+PHBhdGggY2xpcC1wYXRoPSJ1cmwoI01hc2tfNV8pIiBkPSJNLTE1OC41LDEwMC4xYzEyLjcsMCwyMy0xOC42LDIzLTM0LjQgICAgICBjMC0xNi4yLTEwLjMtMjQuNy0yMy0yNC43cy0yMyw4LjUtMjMsMjQuN0MtMTgxLjUsODEuNS0xNzEuMiwxMDAuMS0xNTguNSwxMDAuMXoiIGZpbGw9IiNENEIwOEMiIGlkPSJoZWFkLXNoYWRvdyIvPjwvZz48L2c+PHBhdGggZD0iTS0xNTguNSw5NmMxMi43LDAsMjMtMTYuMywyMy0zMWMwLTE1LjEtMTAuMy0yMy0yMy0yM3MtMjMsNy45LTIzLDIzICAgIEMtMTgxLjUsNzkuNy0xNzEuMiw5Ni0xNTguNSw5NnoiIGZpbGw9IiNGMkNFQTUiIGlkPSJoZWFkIi8+PC9nPjwvc3ZnPg=="
      };
      var ht = bt;
      n.d(t, "Loading", function() {
          return ge
      }), t.default = ht
  }])));
