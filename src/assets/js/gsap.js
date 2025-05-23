/*!
 * GSAP 3.0.5
 * https://greensock.com
 *
 * @license Copyright 2020, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? e(exports)
    : "function" == typeof define && define.amd
    ? define(["exports"], e)
    : e(((t = t || self).window = t.window || {}));
})(this, function (e) {
  "use strict";
  function _inheritsLoose(t, e) {
    (t.prototype = Object.create(e.prototype)),
      ((t.prototype.constructor = t).__proto__ = e);
  }
  function _assertThisInitialized(t) {
    if (void 0 === t)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return t;
  }
  function n(t) {
    return "string" == typeof t;
  }
  function o(t) {
    return "function" == typeof t;
  }
  function p(t) {
    return "number" == typeof t;
  }
  function q(t) {
    return void 0 === t;
  }
  function r(t) {
    return "object" == typeof t;
  }
  function s(t) {
    return !1 !== t;
  }
  function t() {
    return "undefined" != typeof window;
  }
  function u(t) {
    return o(t) || n(t);
  }
  function J(t) {
    return (l = dt(t, at)) && ne;
  }
  function K(t, e) {
    return console.warn(
      "Invalid property",
      t,
      "set to",
      e,
      "Missing plugin? gsap.registerPlugin()"
    );
  }
  function L(t, e) {
    return !e && console.warn(t);
  }
  function M(t, e) {
    return (t && (at[t] = e) && l && (l[t] = e)) || at;
  }
  function N() {
    return 0;
  }
  function X(t) {
    var e,
      n,
      i = t[0];
    if ((r(i) || o(i) || (t = [t]), !(e = (i._gsap || {}).harness))) {
      for (n = pt.length; n-- && !pt[n].targetTest(i); );
      e = pt[n];
    }
    for (n = t.length; n--; )
      (t[n] && (t[n]._gsap || (t[n]._gsap = new Rt(t[n], e)))) ||
        t.splice(n, 1);
    return t;
  }
  function Y(t) {
    return t._gsap || X(yt(t))[0]._gsap;
  }
  function Z(t, e) {
    var r = t[e];
    return o(r) ? t[e]() : (q(r) && t.getAttribute(e)) || r;
  }
  function $(t, e) {
    return (t = t.split(",")).forEach(e) || t;
  }
  function _(t) {
    return Math.round(1e4 * t) / 1e4;
  }
  function aa(t, e) {
    for (var r = e.length, n = 0; t.indexOf(e[n]) < 0 && ++n < r; );
    return n < r;
  }
  function ba(t, e, r) {
    var n,
      i = p(t[1]),
      a = (i ? 2 : 1) + (e < 2 ? 0 : 1),
      o = t[a];
    return (
      i && (o.duration = t[1]),
      1 === e
        ? ((o.runBackwards = 1), (o.immediateRender = s(o.immediateRender)))
        : 2 === e &&
          ((n = t[a - 1]),
          (o.startAt = n),
          (o.immediateRender = s(o.immediateRender))),
      (o.parent = r),
      o
    );
  }
  function ca() {
    var t,
      e,
      r = ot.length,
      n = ot.slice(0);
    for (ut = {}, t = ot.length = 0; t < r; t++)
      (e = n[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0);
  }
  function da(t, e, r, n) {
    ot.length && ca(), t.render(e, r, n), ot.length && ca();
  }
  function ea(t) {
    var e = parseFloat(t);
    return e || 0 === e ? e : t;
  }
  function fa(t) {
    return t;
  }
  function ga(t, e) {
    for (var r in e) r in t || (t[r] = e[r]);
    return t;
  }
  function ha(t, e) {
    for (var r in e)
      r in t || "duration" === r || "ease" === r || (t[r] = e[r]);
  }
  function ja(t, e) {
    for (var n in e) t[n] = r(e[n]) ? ja(t[n] || (t[n] = {}), e[n]) : e[n];
    return t;
  }
  function ka(t, e) {
    var r,
      n = {};
    for (r in t) r in e || (n[r] = t[r]);
    return n;
  }
  function oa(t, e, r, n) {
    void 0 === r && (r = "_first"), void 0 === n && (n = "_last");
    var i = e._prev,
      a = e._next;
    i ? (i._next = a) : t[r] === e && (t[r] = a),
      a ? (a._prev = i) : t[n] === e && (t[n] = i),
      (e._dp = t),
      (e._next = e._prev = e.parent = null);
  }
  function pa(t, e) {
    !t.parent || (e && !t.parent.autoRemoveChildren) || t.parent.remove(t),
      (t._act = 0);
  }
  function qa(t) {
    for (var e = t; e; ) (e._dirty = 1), (e = e.parent);
    return t;
  }
  function ta(t) {
    return t._repeat ? ct(t._tTime, (t = t.duration() + t._rDelay)) * t : 0;
  }
  function va(t, e) {
    return (
      (t - e._start) * e._ts +
      (0 < e._ts ? 0 : e._dirty ? e.totalDuration() : e._tDur)
    );
  }
  function wa(t, e, r) {
    if (
      (e.parent && pa(e),
      (e._start = r + e._delay),
      (e._end = e._start + (e.totalDuration() / e._ts || 0)),
      (function _addLinkedListItem(t, e, r, n, i) {
        void 0 === r && (r = "_first"), void 0 === n && (n = "_last");
        var a,
          s = t[n];
        if (i) for (a = e[i]; s && s[i] > a; ) s = s._prev;
        s
          ? ((e._next = s._next), (s._next = e))
          : ((e._next = t[r]), (t[r] = e)),
          e._next ? (e._next._prev = e) : (t[n] = e),
          (e._prev = s),
          (e.parent = t);
      })(t, e, "_first", "_last", t._sort ? "_start" : 0),
      (t._recent = e)._time || (!e._dur && e._initted))
    ) {
      var n = (t.rawTime() - e._start) * e._ts;
      (!e._dur || gt(0, e.totalDuration(), n) - e._tTime > B) &&
        e.render(n, !0);
    }
    if ((qa(t), t._dp && t._time >= t._dur && t._ts && t._dur < t.duration()))
      for (var i = t; i._dp; ) i.totalTime(i._tTime, !0), (i = i._dp);
    return t;
  }
  function xa(t, e, r, n) {
    return (
      Yt(t, e),
      t._initted
        ? !r &&
          t._pt &&
          ((t._dur && !1 !== t.vars.lazy) || (!t._dur && t.vars.lazy)) &&
          d !== Mt.frame
          ? (ot.push(t), (t._lazy = [e, n]), 1)
          : void 0
        : 1
    );
  }
  function Aa(t) {
    if (t instanceof Bt) return qa(t);
    var e = t._repeat;
    return (
      (t._tDur = e
        ? e < 0
          ? 1e12
          : _(t._dur * (e + 1) + t._rDelay * e)
        : t._dur),
      qa(t.parent),
      t
    );
  }
  function Ca(t, e) {
    var r,
      i,
      a = t.labels,
      s = t._recent || mt,
      o = t.duration() >= F ? s.endTime(!1) : t._dur;
    return n(e) && (isNaN(e) || e in a)
      ? "<" === (r = e.charAt(0)) || ">" === r
        ? ("<" === r ? s._start : s.endTime(0 <= s._repeat)) +
          (parseFloat(e.substr(1)) || 0)
        : (r = e.indexOf("=")) < 0
        ? (e in a || (a[e] = o), a[e])
        : ((i = +(e.charAt(r - 1) + e.substr(r + 1))),
          1 < r ? Ca(t, e.substr(0, r - 1)) + i : o + i)
      : null == e
      ? o
      : +e;
  }
  function Da(t, e) {
    return t || 0 === t ? e(t) : e;
  }
  function Fa(t) {
    return (t + "").substr((parseFloat(t) + "").length);
  }
  function Ia(t) {
    return (
      t &&
      r(t) &&
      "length" in t &&
      (!t.length || (t.length - 1 in t && r(t[0]))) &&
      !t.nodeType &&
      t !== i
    );
  }
  function La(t) {
    if (o(t)) return t;
    var c = r(t) ? t : { each: t },
      m = Ft(c.ease),
      g = c.from || 0,
      v = parseFloat(c.base) || 0,
      y = {},
      e = 0 < g && g < 1,
      w = isNaN(g) || e,
      b = c.axis,
      T = g,
      x = g;
    return (
      n(g)
        ? (T = x = { center: 0.5, edges: 0.5, end: 1 }[g] || 0)
        : !e && w && ((T = g[0]), (x = g[1])),
      function (t, e, r) {
        var n,
          i,
          a,
          s,
          o,
          u,
          h,
          l,
          f,
          p = (r || c).length,
          d = y[p];
        if (!d) {
          if (!(f = "auto" === c.grid ? 0 : (c.grid || [1, F])[1])) {
            for (
              h = -F;
              h < (h = r[f++].getBoundingClientRect().left) && f < p;

            );
            f--;
          }
          for (
            d = y[p] = [],
              n = w ? Math.min(f, p) * T - 0.5 : g % f,
              i = w ? (p * x) / f - 0.5 : (g / f) | 0,
              l = F,
              u = h = 0;
            u < p;
            u++
          )
            (a = (u % f) - n),
              (s = i - ((u / f) | 0)),
              (d[u] = o = b ? Math.abs("y" === b ? s : a) : V(a * a + s * s)),
              h < o && (h = o),
              o < l && (l = o);
          (d.max = h - l),
            (d.min = l),
            (d.v = p =
              (parseFloat(c.amount) ||
                parseFloat(c.each) *
                  (p < f
                    ? p - 1
                    : b
                    ? "y" === b
                      ? p / f
                      : f
                    : Math.max(f, p / f)) ||
                0) * ("edges" === g ? -1 : 1)),
            (d.b = p < 0 ? v - p : v),
            (d.u = Fa(c.amount || c.each) || 0),
            (m = m && p < 0 ? Dt(m) : m);
        }
        return (
          (p = (d[t] - d.min) / d.max || 0), _(d.b + (m ? m(p) : p) * d.v) + d.u
        );
      }
    );
  }
  function Ma(e) {
    var r = e < 1 ? Math.pow(10, (e + "").length - 2) : 1;
    return function (t) {
      return ~~(Math.round(parseFloat(t) / e) * e * r) / r + (p(t) ? 0 : Fa(t));
    };
  }
  function Na(u, t) {
    var h,
      l,
      e = W(u);
    return (
      !e &&
        r(u) &&
        ((h = e = u.radius || F),
        u.values
          ? ((u = yt(u.values)), (l = !p(u[0])) && (h *= h))
          : (u = Ma(u.increment))),
      Da(
        t,
        e
          ? o(u)
            ? function (t) {
                return (l = u(t)), Math.abs(l - t) <= h ? l : t;
              }
            : function (t) {
                for (
                  var e,
                    r,
                    n = parseFloat(l ? t.x : t),
                    i = parseFloat(l ? t.y : 0),
                    a = F,
                    s = 0,
                    o = u.length;
                  o--;

                )
                  (e = l
                    ? (e = u[o].x - n) * e + (r = u[o].y - i) * r
                    : Math.abs(u[o] - n)) < a && ((a = e), (s = o));
                return (
                  (s = !h || a <= h ? u[s] : t),
                  l || s === t || p(t) ? s : s + Fa(t)
                );
              }
          : Ma(u)
      )
    );
  }
  function Oa(t, e, r, n) {
    return Da(W(t) ? !e : !0 === r ? !!(r = 0) : !n, function () {
      return W(t)
        ? t[~~(Math.random() * t.length)]
        : (r = r || 1e-5) &&
            (n = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) &&
            ~~(Math.round((t + Math.random() * (e - t)) / r) * r * n) / n;
    });
  }
  function Sa(e, r, t) {
    return Da(t, function (t) {
      return e[~~r(t)];
    });
  }
  function Va(t) {
    for (var e, r, n, i, a = 0, s = ""; ~(e = t.indexOf("random(", a)); )
      (n = t.indexOf(")", e)),
        (i = "[" === t.charAt(e + 7)),
        (r = t.substr(e + 7, n - e - 7).match(i ? it : G)),
        (s += t.substr(a, e - a) + Oa(i ? r : +r[0], +r[1], +r[2] || 1e-5)),
        (a = n + 1);
    return s + t.substr(a, t.length - a);
  }
  function Ya(t, e, r) {
    var n,
      i,
      a,
      s = t.labels,
      o = F;
    for (n in s)
      (i = s[n] - e) < 0 == !!r &&
        i &&
        o > (i = Math.abs(i)) &&
        ((a = n), (o = i));
    return a;
  }
  function $a(t) {
    return pa(t), t.progress() < 1 && bt(t, "onInterrupt"), t;
  }
  function db(t, e, r) {
    return (
      ((6 * (t = t < 0 ? t + 1 : 1 < t ? t - 1 : t) < 1
        ? e + (r - e) * t * 6
        : t < 0.5
        ? r
        : 3 * t < 2
        ? e + (r - e) * (2 / 3 - t) * 6
        : e) *
        Tt +
        0.5) |
      0
    );
  }
  function eb(t, e) {
    var r,
      n,
      i,
      a,
      s,
      o,
      u,
      h,
      l,
      f,
      _ = t ? (p(t) ? [t >> 16, (t >> 8) & Tt, t & Tt] : 0) : xt.black;
    if (!_) {
      if (("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), xt[t]))
        _ = xt[t];
      else if ("#" === t.charAt(0))
        4 === t.length &&
          (t =
            "#" +
            (r = t.charAt(1)) +
            r +
            (n = t.charAt(2)) +
            n +
            (i = t.charAt(3)) +
            i),
          (_ = [(t = parseInt(t.substr(1), 16)) >> 16, (t >> 8) & Tt, t & Tt]);
      else if ("hsl" === t.substr(0, 3))
        if (((_ = f = t.match(G)), e)) {
          if (~t.indexOf("=")) return t.match(tt);
        } else
          (a = (+_[0] % 360) / 360),
            (s = _[1] / 100),
            (r =
              2 * (o = _[2] / 100) -
              (n = o <= 0.5 ? o * (s + 1) : o + s - o * s)),
            3 < _.length && (_[3] *= 1),
            (_[0] = db(a + 1 / 3, r, n)),
            (_[1] = db(a, r, n)),
            (_[2] = db(a - 1 / 3, r, n));
      else _ = t.match(G) || xt.transparent;
      _ = _.map(Number);
    }
    return (
      e &&
        !f &&
        ((r = _[0] / Tt),
        (n = _[1] / Tt),
        (i = _[2] / Tt),
        (o = ((u = Math.max(r, n, i)) + (h = Math.min(r, n, i))) / 2),
        u === h
          ? (a = s = 0)
          : ((l = u - h),
            (s = 0.5 < o ? l / (2 - u - h) : l / (u + h)),
            (a =
              u === r
                ? (n - i) / l + (n < i ? 6 : 0)
                : u === n
                ? (i - r) / l + 2
                : (r - n) / l + 4),
            (a *= 60)),
        (_[0] = (a + 0.5) | 0),
        (_[1] = (100 * s + 0.5) | 0),
        (_[2] = (100 * o + 0.5) | 0)),
      _
    );
  }
  function fb(t, e) {
    var r,
      n,
      i,
      a = (t + "").match(kt),
      s = 0,
      o = "";
    if (!a) return t;
    for (r = 0; r < a.length; r++)
      (n = a[r]),
        (s += (i = t.substr(s, t.indexOf(n, s) - s)).length + n.length),
        3 === (n = eb(n, e)).length && n.push(1),
        (o +=
          i +
          (e
            ? "hsla(" + n[0] + "," + n[1] + "%," + n[2] + "%," + n[3]
            : "rgba(" + n.join(",")) +
          ")");
    return o + t.substr(s);
  }
  function ib(t) {
    var e,
      r = t.join(" ");
    (kt.lastIndex = 0),
      kt.test(r) &&
        ((e = Ot.test(r)), (t[0] = fb(t[0], e)), (t[1] = fb(t[1], e)));
  }
  function qb(t) {
    var e = (t + "").split("("),
      r = Pt[e[0]];
    return r && 1 < e.length && r.config
      ? r.config.apply(
          null,
          ~t.indexOf("{")
            ? [
                (function _parseObjectInString(t) {
                  for (
                    var e,
                      r,
                      n,
                      i = {},
                      a = t.substr(1, t.length - 3).split(":"),
                      s = a[0],
                      o = 1,
                      u = a.length;
                    o < u;
                    o++
                  )
                    (r = a[o]),
                      (e = o !== u - 1 ? r.lastIndexOf(",") : r.length),
                      (n = r.substr(0, e)),
                      (i[s] = isNaN(n) ? n.replace(At, "").trim() : +n),
                      (s = r.substr(e + 1).trim());
                  return i;
                })(e[1]),
              ]
            : rt.exec(t)[1].split(",").map(ea)
        )
      : Pt._CE && St.test(t)
      ? Pt._CE("", t)
      : r;
  }
  function tb(t, e, r, n) {
    void 0 === r &&
      (r = function easeOut(t) {
        return 1 - e(1 - t);
      }),
      void 0 === n &&
        (n = function easeInOut(t) {
          return t < 0.5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2;
        });
    var i,
      a = { easeIn: e, easeOut: r, easeInOut: n };
    return (
      $(t, function (t) {
        for (var e in ((Pt[t] = at[t] = a), (Pt[(i = t.toLowerCase())] = r), a))
          Pt[
            i + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")
          ] = Pt[t + "." + e] = a[e];
      }),
      a
    );
  }
  function ub(e) {
    return function (t) {
      return t < 0.5 ? (1 - e(1 - 2 * t)) / 2 : 0.5 + e(2 * (t - 0.5)) / 2;
    };
  }
  function vb(r, t, e) {
    function zk(t) {
      return 1 === t ? 1 : n * Math.pow(2, -10 * t) * H((t - a) * i) + 1;
    }
    var n = 1 <= t ? t : 1,
      i = (e || (r ? 0.3 : 0.45)) / (t < 1 ? t : 1),
      a = (i / z) * (Math.asin(1 / n) || 0),
      s =
        "out" === r
          ? zk
          : "in" === r
          ? function (t) {
              return 1 - zk(1 - t);
            }
          : ub(zk);
    return (
      (i = z / i),
      (s.config = function (t, e) {
        return vb(r, t, e);
      }),
      s
    );
  }
  function wb(e, r) {
    function Hk(t) {
      return --t * t * ((r + 1) * t + r) + 1;
    }
    void 0 === r && (r = 1.70158);
    var t =
      "out" === e
        ? Hk
        : "in" === e
        ? function (t) {
            return 1 - Hk(1 - t);
          }
        : ub(Hk);
    return (
      (t.config = function (t) {
        return wb(e, t);
      }),
      t
    );
  }
  var R,
    i,
    a,
    h,
    l,
    f,
    d,
    c,
    m,
    g,
    v,
    y,
    w,
    b,
    T,
    x,
    k,
    O,
    C,
    P,
    S,
    A,
    D,
    j = {
      autoSleep: 120,
      force3D: "auto",
      nullTargetWarn: 1,
      units: { lineHeight: "" },
    },
    E = { duration: 0.5, overwrite: !1, delay: 0 },
    F = 1e8,
    B = 1 / F,
    z = 2 * Math.PI,
    I = z / 4,
    U = 0,
    V = Math.sqrt,
    Q = Math.cos,
    H = Math.sin,
    W = Array.isArray,
    G = /(?:-?\.?\d|\.)+/gi,
    tt = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,
    et = /[-+=\.]*\d+(?:\.|e-|e)*\d*/gi,
    rt = /\(([^()]+)\)/i,
    nt = /[\+-]=-?[\.\d]+/,
    it = /[#\-+\.]*\b[a-z\d-=+%.]+/gi,
    at = {},
    st = {},
    ot = [],
    ut = {},
    ht = {},
    lt = {},
    ft = 30,
    pt = [],
    _t = "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
    dt = function _merge(t, e) {
      for (var r in e) t[r] = e[r];
      return t;
    },
    ct = function _animationCycle(t, e) {
      return (t /= e) && ~~t === t ? ~~t - 1 : ~~t;
    },
    mt = { _start: 0, endTime: N },
    gt = function _clamp(t, e, r) {
      return r < t ? t : e < r ? e : r;
    },
    vt = [].slice,
    yt = function toArray(t, e) {
      return !n(t) || e || (!a && Ct())
        ? W(t)
          ? (function _flatten(t, e, r) {
              return (
                void 0 === r && (r = []),
                t.forEach(function (t) {
                  return (n(t) && !e) || Ia(t)
                    ? r.push.apply(r, yt(t))
                    : r.push(t);
                }) || r
              );
            })(t, e)
          : Ia(t)
          ? vt.call(t, 0)
          : t
          ? [t]
          : []
        : vt.call(h.querySelectorAll(t), 0);
    },
    wt = function mapRange(e, t, r, n, i) {
      var a = t - e,
        s = n - r;
      return Da(i, function (t) {
        return r + ((t - e) / a) * s;
      });
    },
    bt = function _callback(t, e, r) {
      var n,
        i,
        a = t.vars,
        s = a[e];
      if (s)
        return (
          (n = a[e + "Params"]),
          (i = a.callbackScope || t),
          r && ot.length && ca(),
          n ? s.apply(i, n) : s.call(i)
        );
    },
    Tt = 255,
    xt = {
      aqua: [0, Tt, Tt],
      lime: [0, Tt, 0],
      silver: [192, 192, 192],
      black: [0, 0, 0],
      maroon: [128, 0, 0],
      teal: [0, 128, 128],
      blue: [0, 0, Tt],
      navy: [0, 0, 128],
      white: [Tt, Tt, Tt],
      olive: [128, 128, 0],
      yellow: [Tt, Tt, 0],
      orange: [Tt, 165, 0],
      gray: [128, 128, 128],
      purple: [128, 0, 128],
      green: [0, 128, 0],
      red: [Tt, 0, 0],
      pink: [Tt, 192, 203],
      cyan: [0, Tt, Tt],
      transparent: [Tt, Tt, Tt, 0],
    },
    kt = (function () {
      var t,
        e =
          "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
      for (t in xt) e += "|" + t + "\\b";
      return new RegExp(e + ")", "gi");
    })(),
    Ot = /hsl[a]?\(/,
    Mt =
      ((b = Date.now),
      (T = 500),
      (x = 33),
      (k = b()),
      (O = k),
      (P = C = 1 / 60),
      (w = {
        time: 0,
        frame: 0,
        tick: function tick() {
          Fj(!0);
        },
        wake: function wake() {
          f &&
            (!a &&
              t() &&
              ((i = a = window),
              (h = i.document || {}),
              (at.gsap = ne),
              (i.gsapVersions || (i.gsapVersions = [])).push(ne.version),
              J(l || i.GreenSockGlobals || (!i.gsap && i) || {}),
              (y = i.requestAnimationFrame)),
            g && w.sleep(),
            (v =
              y ||
              function (t) {
                return setTimeout(t, (1e3 * (P - w.time) + 1) | 0);
              }),
            (m = 1),
            Fj(2));
        },
        sleep: function sleep() {
          (y ? i.cancelAnimationFrame : clearTimeout)(g), (m = 0), (v = N);
        },
        lagSmoothing: function lagSmoothing(t, e) {
          (T = t || 1e8), (x = Math.min(e, T, 0));
        },
        fps: function fps(t) {
          (C = 1 / (t || 60)), (P = w.time + C);
        },
        add: function add(t) {
          S.indexOf(t) < 0 && S.push(t), Ct();
        },
        remove: function remove(t) {
          var e;
          ~(e = S.indexOf(t)) && S.splice(e, 1);
        },
        _listeners: (S = []),
      })),
    Ct = function _wake() {
      return !m && Mt.wake();
    },
    Pt = {},
    St = /^[\d.\-M][\d.\-,\s]/,
    At = /["']/g,
    Dt = function _invertEase(e) {
      return function (t) {
        return 1 - e(1 - t);
      };
    },
    Ft = function _parseEase(t, e) {
      return (t && (o(t) ? t : Pt[t] || qb(t))) || e;
    };
  function Fj(e) {
    var t,
      r,
      n = b() - O,
      i = !0 === e;
    T < n && (k += n - x),
      (O += n),
      (w.time = (O - k) / 1e3),
      (0 < (t = w.time - P) || i) &&
        (w.frame++, (P += t + (C <= t ? 0.004 : C - t)), (r = 1)),
      i || (g = v(Fj)),
      r &&
        S.forEach(function (t) {
          return t(w.time, n, w.frame, e);
        });
  }
  function Yk(t) {
    return t < D
      ? A * t * t
      : t < 0.7272727272727273
      ? A * Math.pow(t - 1.5 / 2.75, 2) + 0.75
      : t < 0.9090909090909092
      ? A * (t -= 2.25 / 2.75) * t + 0.9375
      : A * Math.pow(t - 2.625 / 2.75, 2) + 0.984375;
  }
  $("Linear,Quad,Cubic,Quart,Quint,Strong", function (t, e) {
    var r = e < 5 ? e + 1 : e;
    tb(
      t + ",Power" + (r - 1),
      e
        ? function (t) {
            return Math.pow(t, r);
          }
        : function (t) {
            return t;
          },
      function (t) {
        return 1 - Math.pow(1 - t, r);
      },
      function (t) {
        return t < 0.5
          ? Math.pow(2 * t, r) / 2
          : 1 - Math.pow(2 * (1 - t), r) / 2;
      }
    );
  }),
    (Pt.Linear.easeNone = Pt.none = Pt.Linear.easeIn),
    tb("Elastic", vb("in"), vb("out"), vb()),
    (A = 7.5625),
    (D = 1 / 2.75),
    tb(
      "Bounce",
      function (t) {
        return 1 - Yk(1 - t);
      },
      Yk
    ),
    tb("Expo", function (t) {
      return t ? Math.pow(2, 10 * (t - 1)) : 0;
    }),
    tb("Circ", function (t) {
      return -(V(1 - t * t) - 1);
    }),
    tb("Sine", function (t) {
      return 1 - Q(t * I);
    }),
    tb("Back", wb("in"), wb("out"), wb()),
    (Pt.SteppedEase =
      Pt.steps =
      at.SteppedEase =
        {
          config: function config(t, e) {
            void 0 === t && (t = 1);
            var r = 1 / t,
              n = t + (e ? 0 : 1),
              i = e ? 1 : 0;
            return function (t) {
              return (((n * gt(0, 0.99999999, t)) | 0) + i) * r;
            };
          },
        }),
    (E.ease = Pt["quad.out"]);
  var zt,
    Rt = function GSCache(t, e) {
      (this.id = U++),
        ((t._gsap = this).target = t),
        (this.harness = e),
        (this.get = e ? e.get : Z),
        (this.set = e ? e.getSetter : Qt);
    },
    Et =
      (((zt = Animation.prototype).delay = function delay(t) {
        return t || 0 === t ? ((this._delay = t), this) : this._delay;
      }),
      (zt.duration = function duration(t) {
        var e = arguments.length,
          r = this._repeat,
          n = 0 < r ? r * ((e ? t : this._dur) + this._rDelay) : 0;
        return e
          ? this.totalDuration(r < 0 ? t : t + n)
          : this.totalDuration() && this._dur;
      }),
      (zt.totalDuration = function totalDuration(t) {
        if (!arguments.length) return this._tDur;
        var e = this._repeat,
          r = (t || this._rDelay) && e < 0;
        return (
          (this._tDur = r ? 1e12 : t),
          (this._dur = r ? t : (t - e * this._rDelay) / (e + 1)),
          (this._dirty = 0),
          qa(this.parent),
          this
        );
      }),
      (zt.totalTime = function totalTime(t, e) {
        if ((Ct(), !arguments.length)) return this._tTime;
        var r,
          n = this.parent || this._dp;
        if (n && n.smoothChildTiming && this._ts) {
          for (
            r = this._start,
              this._start =
                n._time -
                (0 < this._ts
                  ? t / this._ts
                  : ((this._dirty ? this.totalDuration() : this._tDur) - t) /
                    -this._ts),
              this._end += this._start - r,
              n._dirty || qa(n);
            n.parent;

          )
            n.parent._time !==
              n._start +
                (0 < n._ts
                  ? n._tTime / n._ts
                  : (n.totalDuration() - n._tTime) / -n._ts) &&
              n.totalTime(n._tTime, !0),
              (n = n.parent);
          this.parent || wa(this._dp, this, this._start - this._delay);
        }
        return (
          (this._tTime === t && (this._dur || e)) ||
            (this._ts || (this._pTime = t), da(this, t, e)),
          this
        );
      }),
      (zt.time = function time(t, e) {
        return arguments.length
          ? this.totalTime(
              Math.min(this.totalDuration(), t + ta(this)) % this._dur ||
                (t ? this._dur : 0),
              e
            )
          : this._time;
      }),
      (zt.totalProgress = function totalProgress(t, e) {
        return arguments.length
          ? this.totalTime(this.totalDuration() * t, e)
          : this._tTime / this.totalDuration();
      }),
      (zt.progress = function progress(t, e) {
        return arguments.length
          ? this.totalTime(
              this.duration() *
                (!this._yoyo || 1 & this.iteration() ? t : 1 - t) +
                ta(this),
              e
            )
          : this.duration()
          ? this._time / this._dur
          : this.ratio;
      }),
      (zt.iteration = function iteration(t, e) {
        var r = this.duration() + this._rDelay;
        return arguments.length
          ? this.totalTime(this._time + (t - 1) * r, e)
          : this._repeat
          ? ct(this._tTime, r) + 1
          : 1;
      }),
      (zt.timeScale = function timeScale(t) {
        return arguments.length
          ? null !== this._pauseTS
            ? ((this._pauseTS = t), this)
            : ((this._ts = t),
              (function _recacheAncestors(t) {
                for (var e = t.parent; e && e.parent; )
                  (e._dirty = 1), e.totalDuration(), (e = e.parent);
                return t;
              })(
                this.totalTime(
                  this.parent ? va(this.parent._time, this) : this._tTime,
                  !0
                )
              ))
          : this._ts || this._pauseTS || 0;
      }),
      (zt.paused = function paused(t) {
        var e = !this._ts;
        return arguments.length
          ? (e !== t &&
              (t
                ? ((this._pauseTS = this._ts),
                  (this._pTime =
                    this._tTime || Math.max(-this._delay, this.rawTime())),
                  (this._ts = this._act = 0))
                : ((this._ts = this._pauseTS || 1),
                  (this._pauseTS = null),
                  (t = this._tTime || this._pTime),
                  1 === this.progress() && (this._tTime -= B),
                  this.totalTime(t, !0))),
            this)
          : e;
      }),
      (zt.startTime = function startTime(t) {
        return arguments.length
          ? (this.parent &&
              this.parent._sort &&
              wa(this.parent, this, t - this._delay),
            this)
          : this._start;
      }),
      (zt.endTime = function endTime(t) {
        return (
          this._start +
          (s(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts)
        );
      }),
      (zt.rawTime = function rawTime(t) {
        var e = this.parent || this._dp;
        return e
          ? t &&
            (!this._ts ||
              (this._repeat && this._time && this.totalProgress() < 1))
            ? this._tTime % (this._dur + this._rDelay)
            : this._ts
            ? va(e.rawTime(t), this)
            : this._tTime
          : this._tTime;
      }),
      (zt.repeat = function repeat(t) {
        return arguments.length ? ((this._repeat = t), Aa(this)) : this._repeat;
      }),
      (zt.repeatDelay = function repeatDelay(t) {
        return arguments.length ? ((this._rDelay = t), Aa(this)) : this._rDelay;
      }),
      (zt.yoyo = function yoyo(t) {
        return arguments.length ? ((this._yoyo = t), this) : this._yoyo;
      }),
      (zt.seek = function seek(t, e) {
        return this.totalTime(Ca(this, t), s(e));
      }),
      (zt.restart = function restart(t, e) {
        return this.play().totalTime(t ? -this._delay : 0, s(e));
      }),
      (zt.play = function play(t, e) {
        return null != t && this.seek(t, e), this.reversed(!1).paused(!1);
      }),
      (zt.reverse = function reverse(t, e) {
        return (
          null != t && this.seek(t || this.totalDuration(), e),
          this.reversed(!0).paused(!1)
        );
      }),
      (zt.pause = function pause(t, e) {
        return null != t && this.seek(t, e), this.paused(!0);
      }),
      (zt.resume = function resume() {
        return this.paused(!1);
      }),
      (zt.reversed = function reversed(t) {
        var e = this._ts || this._pauseTS || 0;
        return arguments.length
          ? (t !== this.reversed() &&
              ((this[null === this._pauseTS ? "_ts" : "_pauseTS"] =
                Math.abs(e) * (t ? -1 : 1)),
              this.totalTime(this._tTime, !0)),
            this)
          : e < 0;
      }),
      (zt.invalidate = function invalidate() {
        return (this._initted = 0), this;
      }),
      (zt.isActive = function isActive(t) {
        var e,
          r = this.parent || this._dp,
          n = this._start;
        return !(
          r &&
          !(
            this._ts &&
            (this._initted || !t) &&
            r.isActive(t) &&
            (e = r.rawTime(!0)) >= n &&
            e < this.endTime(!0) - B
          )
        );
      }),
      (zt.eventCallback = function eventCallback(t, e, r) {
        var n = this.vars;
        return 1 < arguments.length
          ? (e
              ? ((n[t] = e),
                r && (n[t + "Params"] = r),
                "onUpdate" === t && (this._onUpdate = e))
              : delete n[t],
            this)
          : n[t];
      }),
      (zt.then = function then(t) {
        var n = this;
        return new Promise(function (e) {
          function qm() {
            var t = n.then;
            (n.then = null),
              (r = r(n)) &&
                (r.then || r === n) &&
                ((n._prom = r), (n.then = t)),
              e(r),
              (n.then = t);
          }
          var r = t || fa;
          (n._initted && 1 === n.totalProgress() && 0 <= n._ts) ||
          (!n._tTime && n._ts < 0)
            ? qm()
            : (n._prom = qm);
        });
      }),
      (zt.kill = function kill() {
        $a(this);
      }),
      Animation);
  function Animation(t, e) {
    var r = t.parent || R;
    (this.vars = t),
      (this._dur = this._tDur = +t.duration || 0),
      (this._delay = +t.delay || 0),
      (this._repeat = t.repeat || 0) &&
        ((this._rDelay = t.repeatDelay || 0),
        (this._yoyo = !!t.yoyo || !!t.yoyoEase),
        Aa(this)),
      (this._ts = 1),
      (this.data = t.data),
      m || Mt.wake(),
      r && wa(r, this, e || 0 === e ? e : r._time),
      t.reversed && this.reversed(!0),
      t.paused && this.paused(!0);
  }
  ga(Et.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: !1,
    parent: 0,
    _initted: !1,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -B,
    _prom: 0,
    _pauseTS: null,
  });
  var Bt = (function (i) {
    function Timeline(t, e) {
      var r;
      return (
        void 0 === t && (t = {}),
        ((r = i.call(this, t, e) || this).labels = {}),
        (r.smoothChildTiming = s(t.smoothChildTiming)),
        (r.autoRemoveChildren = !!t.autoRemoveChildren),
        (r._sort = s(t.sortChildren)),
        r
      );
    }
    _inheritsLoose(Timeline, i);
    var t = Timeline.prototype;
    return (
      (t.to = function to(t, e, r, n) {
        return new Xt(t, ba(arguments, 0, this), Ca(this, p(e) ? n : r)), this;
      }),
      (t.from = function from(t, e, r, n) {
        return new Xt(t, ba(arguments, 1, this), Ca(this, p(e) ? n : r)), this;
      }),
      (t.fromTo = function fromTo(t, e, r, n, i) {
        return new Xt(t, ba(arguments, 2, this), Ca(this, p(e) ? i : n)), this;
      }),
      (t.set = function set(t, e, r) {
        return (
          (e.duration = 0),
          (e.parent = this),
          e.repeatDelay || (e.repeat = 0),
          (e.immediateRender = !!e.immediateRender),
          new Xt(t, e, Ca(this, r)),
          this
        );
      }),
      (t.call = function call(t, e, r) {
        return wa(this, Xt.delayedCall(0, t, e), Ca(this, r));
      }),
      (t.staggerTo = function staggerTo(t, e, r, n, i, a, s) {
        return (
          (r.duration = e),
          (r.stagger = r.stagger || n),
          (r.onComplete = a),
          (r.onCompleteParams = s),
          (r.parent = this),
          new Xt(t, r, Ca(this, i)),
          this
        );
      }),
      (t.staggerFrom = function staggerFrom(t, e, r, n, i, a, o) {
        return (
          (r.runBackwards = 1),
          (r.immediateRender = s(r.immediateRender)),
          this.staggerTo(t, e, r, n, i, a, o)
        );
      }),
      (t.staggerFromTo = function staggerFromTo(t, e, r, n, i, a, o, u) {
        return (
          (n.startAt = r),
          (n.immediateRender = s(n.immediateRender)),
          this.staggerTo(t, e, n, i, a, o, u)
        );
      }),
      (t.render = function render(t, e, r) {
        var n,
          i,
          a,
          s,
          o,
          u,
          h,
          l,
          f,
          p,
          d,
          c = this._time,
          m = this._dirty ? this.totalDuration() : this._tDur,
          g = this._dur,
          v = m - B < t && 0 <= t && this !== R ? m : t < B ? 0 : t,
          y = this._zTime < 0 != t < 0 && (this._initted || !g);
        if (v !== this._tTime || r || y) {
          if (
            (y && (g || (c = this._zTime), (!t && e) || (this._zTime = t)),
            (n = v),
            (f = this._start),
            (u = 0 === (l = this._ts)),
            c !== this._time && g && (n += this._time - c),
            this._repeat &&
              ((d = this._yoyo),
              (o = g + this._rDelay),
              (g < (n = _(v % o)) || m === v) && (n = g),
              (s = ~~(v / o)) && s === v / o && ((n = g), s--),
              d && 1 & s && (n = g - n),
              s !== (p = ct(this._tTime, o)) && !this._lock))
          ) {
            var w = d && 1 & p,
              b = w === (d && 1 & s);
            if (
              (s < p && (w = !w),
              (c = w ? 0 : g),
              (this._lock = 1),
              (this.render(c, e, !g)._lock = 0),
              !e && this.parent && bt(this, "onRepeat"),
              c !== this._time || u != !this._ts)
            )
              return this;
            if (
              (b &&
                ((this._lock = 2),
                (c = w ? g + 1e-4 : -1e-4),
                this.render(c, !0)),
              (this._lock = 0),
              !this._ts && !u)
            )
              return this;
          }
          if (
            (this._hasPause &&
              !this._forcing &&
              this._lock < 2 &&
              (h = (function _findNextPauseTween(t, e, r) {
                var n;
                if (e < r)
                  for (n = t._first; n && n._start <= r; ) {
                    if (!n._dur && "isPause" === n.data && n._start > e)
                      return n;
                    n = n._next;
                  }
                else
                  for (n = t._last; n && n._start >= r; ) {
                    if (!n._dur && "isPause" === n.data && n._start < e)
                      return n;
                    n = n._prev;
                  }
              })(this, _(c), _(n))) &&
              (v -= n - (n = h._start)),
            (this._tTime = v),
            (this._time = n),
            (this._act = !l),
            this._initted ||
              ((this._onUpdate = this.vars.onUpdate), (this._initted = 1)),
            c || !n || e || bt(this, "onStart"),
            c <= n && 0 <= t)
          )
            for (i = this._first; i; ) {
              if (
                ((a = i._next), (i._act || n >= i._start) && i._ts && h !== i)
              ) {
                if (i.parent !== this) return this.render(t, e, r);
                if (
                  (i.render(
                    0 < i._ts
                      ? (n - i._start) * i._ts
                      : (i._dirty ? i.totalDuration() : i._tDur) +
                          (n - i._start) * i._ts,
                    e,
                    r
                  ),
                  n !== this._time || (!this._ts && !u))
                ) {
                  h = 0;
                  break;
                }
              }
              i = a;
            }
          else {
            i = this._last;
            for (var T = t < 0 ? t : n; i; ) {
              if (
                ((a = i._prev), (i._act || T <= i._end) && i._ts && h !== i)
              ) {
                if (i.parent !== this) return this.render(t, e, r);
                if (
                  (i.render(
                    0 < i._ts
                      ? (T - i._start) * i._ts
                      : (i._dirty ? i.totalDuration() : i._tDur) +
                          (T - i._start) * i._ts,
                    e,
                    r
                  ),
                  n !== this._time || (!this._ts && !u))
                ) {
                  h = 0;
                  break;
                }
              }
              i = a;
            }
          }
          if (
            h &&
            !e &&
            (this.pause(),
            (h.render(c <= n ? 0 : -B)._zTime = c <= n ? 1 : -1),
            this._ts)
          )
            return (this._start = f), this.render(t, e, r);
          this._onUpdate && !e && bt(this, "onUpdate", !0),
            (v === m || (!v && this._ts < 0)) &&
              ((f !== this._start && Math.abs(l) === Math.abs(this._ts)) ||
                ((!n || m >= this.totalDuration()) &&
                  ((!t && g) ||
                    !((v && 0 < this._ts) || (!v && this._ts < 0)) ||
                    pa(this, 1),
                  e ||
                    (t < 0 && !c) ||
                    (bt(this, v === m ? "onComplete" : "onReverseComplete", !0),
                    this._prom && this._prom()))));
        }
        return this;
      }),
      (t.add = function add(t, e) {
        var r = this;
        if ((p(e) || (e = Ca(this, e)), !(t instanceof Et))) {
          if (W(t))
            return (
              t.forEach(function (t) {
                return r.add(t, e);
              }),
              qa(this)
            );
          if (n(t)) return this.addLabel(t, e);
          if (!o(t)) return this;
          t = Xt.delayedCall(0, t);
        }
        return this !== t ? wa(this, t, e) : this;
      }),
      (t.getChildren = function getChildren(t, e, r, n) {
        void 0 === t && (t = !0),
          void 0 === e && (e = !0),
          void 0 === r && (r = !0),
          void 0 === n && (n = -F);
        for (var i = [], a = this._first; a; )
          a._start >= n &&
            (a instanceof Xt
              ? e && i.push(a)
              : (r && i.push(a),
                t && i.push.apply(i, a.getChildren(!0, e, r)))),
            (a = a._next);
        return i;
      }),
      (t.getById = function getById(t) {
        for (var e = this.getChildren(1, 1, 1), r = e.length; r--; )
          if (e[r].vars.id === t) return e[r];
      }),
      (t.remove = function remove(t) {
        return n(t)
          ? this.removeLabel(t)
          : o(t)
          ? this.killTweensOf(t)
          : (oa(this, t),
            t === this._recent && (this._recent = this._last),
            qa(this));
      }),
      (t.totalTime = function totalTime(t, e) {
        return arguments.length
          ? ((this._forcing = 1),
            this.parent ||
              this._dp ||
              !this._ts ||
              (this._start =
                Mt.time -
                (0 < this._ts
                  ? t / this._ts
                  : (this.totalDuration() - t) / -this._ts)),
            i.prototype.totalTime.call(this, t, e),
            (this._forcing = 0),
            this)
          : this._tTime;
      }),
      (t.addLabel = function addLabel(t, e) {
        return (this.labels[t] = Ca(this, e)), this;
      }),
      (t.removeLabel = function removeLabel(t) {
        return delete this.labels[t], this;
      }),
      (t.addPause = function addPause(t, e, r) {
        var n = Xt.delayedCall(0, e || N, r);
        return (
          (n.data = "isPause"), (this._hasPause = 1), wa(this, n, Ca(this, t))
        );
      }),
      (t.removePause = function removePause(t) {
        var e = this._first;
        for (t = Ca(this, t); e; )
          e._start === t && "isPause" === e.data && pa(e), (e = e._next);
      }),
      (t.killTweensOf = function killTweensOf(t, e, r) {
        for (var n = this.getTweensOf(t, r), i = n.length; i--; )
          Lt !== n[i] && n[i].kill(t, e);
        return this;
      }),
      (t.getTweensOf = function getTweensOf(t, e) {
        for (var r, n = [], i = yt(t), a = this._first; a; )
          a instanceof Xt
            ? !aa(a._targets, i) ||
              (e && !a.isActive("started" === e)) ||
              n.push(a)
            : (r = a.getTweensOf(i, e)).length && n.push.apply(n, r),
            (a = a._next);
        return n;
      }),
      (t.tweenTo = function tweenTo(t, e) {
        var r = this,
          n = Ca(r, t),
          i = e && e.startAt,
          a = Xt.to(
            r,
            ga(
              {
                ease: "none",
                lazy: !1,
                time: n,
                duration:
                  Math.abs(n - (i && "time" in i ? i.time : r._time)) /
                    r.timeScale() || B,
                onStart: function onStart() {
                  r.pause();
                  var t = Math.abs(n - r._time) / r.timeScale();
                  a._dur !== t && ((a._dur = t), a.render(a._time, !0, !0)),
                    e && e.onStart && e.onStart.apply(a, e.onStartParams || []);
                },
              },
              e
            )
          );
        return a;
      }),
      (t.tweenFromTo = function tweenFromTo(t, e, r) {
        return this.tweenTo(e, ga({ startAt: { time: Ca(this, t) } }, r));
      }),
      (t.recent = function recent() {
        return this._recent;
      }),
      (t.nextLabel = function nextLabel(t) {
        return void 0 === t && (t = this._time), Ya(this, Ca(this, t));
      }),
      (t.previousLabel = function previousLabel(t) {
        return void 0 === t && (t = this._time), Ya(this, Ca(this, t), 1);
      }),
      (t.currentLabel = function currentLabel(t) {
        return arguments.length
          ? this.seek(t, !0)
          : this.previousLabel(this._time + B);
      }),
      (t.shiftChildren = function shiftChildren(t, e, r) {
        void 0 === r && (r = 0);
        for (var n, i = this._first, a = this.labels; i; )
          i._start >= r && (i._start += t), (i = i._next);
        if (e) for (n in a) a[n] >= r && (a[n] += t);
        return qa(this);
      }),
      (t.invalidate = function invalidate() {
        var t = this._first;
        for (this._lock = 0; t; ) t.invalidate(), (t = t._next);
        return i.prototype.invalidate.call(this);
      }),
      (t.clear = function clear(t) {
        void 0 === t && (t = !0);
        for (var e, r = this._first; r; )
          (e = r._next), this.remove(r), (r = e);
        return (
          (this._time = this._tTime = 0), t && (this.labels = {}), qa(this)
        );
      }),
      (t.totalDuration = function totalDuration(t) {
        var e,
          r,
          n = 0,
          i = this,
          a = i._last,
          s = F,
          o = i._repeat,
          u = o * i._rDelay || 0,
          h = o < 0;
        if (arguments.length) return h ? i : i.timeScale(i.totalDuration() / t);
        if (i._dirty) {
          for (; a; )
            (e = a._prev),
              a._dirty && a.totalDuration(),
              a._start > s && i._sort && a._ts && !i._lock
                ? ((i._lock = 1), wa(i, a, a._start - a._delay), (i._lock = 0))
                : (s = a._start),
              a._start < 0 &&
                a._ts &&
                ((n -= a._start),
                ((!i.parent && !i._dp) ||
                  (i.parent && i.parent.smoothChildTiming)) &&
                  ((i._start += a._start / i._ts),
                  (i._time -= a._start),
                  (i._tTime -= a._start)),
                i.shiftChildren(-a._start, !1, -1e20),
                (s = 0)),
              n <
                (r = a._end =
                  a._start + a._tDur / Math.abs(a._ts || a._pauseTS || B)) &&
                a._ts &&
                (n = _(r)),
              (a = e);
          (i._dur = i === R && i._time > n ? i._time : Math.min(F, n)),
            (i._tDur =
              h && (i._dur || u) ? 1e12 : Math.min(F, n * (o + 1) + u)),
            (i._end =
              i._start + (i._tDur / Math.abs(i._ts || i._pauseTS || B) || 0)),
            (i._dirty = 0);
        }
        return i._tDur;
      }),
      (Timeline.updateRoot = function updateRoot(t) {
        if ((R._ts && (da(R, va(t, R)), (d = Mt.frame)), Mt.frame >= ft)) {
          ft += j.autoSleep || 120;
          var e = R._first;
          if ((!e || !e._ts) && j.autoSleep && Mt._listeners.length < 2) {
            for (; e && !e._ts; ) e = e._next;
            e || Mt.sleep();
          }
        }
      }),
      Timeline
    );
  })(Et);
  ga(Bt.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
  function Db(t, e, i, a, s, u) {
    var h, l, f, p;
    if (
      ht[t] &&
      !1 !==
        (h = new ht[t]()).init(
          s,
          h.rawVars
            ? e[t]
            : (function _processVars(t, e, i, a, s) {
                if (
                  (o(t) && (t = qt(t, s, e, i, a)),
                  !r(t) || (t.style && t.nodeType) || W(t))
                )
                  return n(t) ? qt(t, s, e, i, a) : t;
                var u,
                  h = {};
                for (u in t) h[u] = qt(t[u], s, e, i, a);
                return h;
              })(e[t], a, s, u, i),
          i,
          a,
          u
        ) &&
      ((i._pt = l = new ee(i._pt, s, t, 0, 1, h.render, h, 0, h.priority)),
      i !== c)
    )
      for (f = i._ptLookup[i._targets.indexOf(s)], p = h._props.length; p--; )
        f[h._props[p]] = l;
    return h;
  }
  var Lt,
    It = function _addPropTween(t, e, r, i, a, s, u, h, l) {
      o(i) && (i = i(a || 0, t, s));
      var f,
        p = t[e],
        _ =
          "get" !== r
            ? r
            : o(p)
            ? l
              ? t[
                  e.indexOf("set") || !o(t["get" + e.substr(3)])
                    ? e
                    : "get" + e.substr(3)
                ](l)
              : t[e]()
            : p,
        d = o(p) ? (l ? $t : Vt) : Ut;
      if (
        (n(i) &&
          (~i.indexOf("random(") && (i = Va(i)),
          "=" === i.charAt(1) &&
            (i =
              parseFloat(_) +
              parseFloat(i.substr(2)) * ("-" === i.charAt(0) ? -1 : 1) +
              (Fa(_) || 0))),
        _ !== i)
      )
        return isNaN(_ + i)
          ? (p || e in t || K(e, i),
            function _addComplexStringPropTween(t, e, r, n, i, a, s) {
              var o,
                u,
                h,
                l,
                f,
                p,
                _,
                d,
                c = new ee(this._pt, t, e, 0, 1, Gt, null, i),
                m = 0,
                g = 0;
              for (
                c.b = r,
                  c.e = n,
                  r += "",
                  (_ = ~(n += "").indexOf("random(")) && (n = Va(n)),
                  a && (a((d = [r, n]), t, e), (r = d[0]), (n = d[1])),
                  u = r.match(et) || [];
                (o = et.exec(n));

              )
                (l = o[0]),
                  (f = n.substring(m, o.index)),
                  h ? (h = (h + 1) % 5) : "rgba(" === f.substr(-5) && (h = 1),
                  l !== u[g++] &&
                    ((p = parseFloat(u[g - 1]) || 0),
                    (c._pt = {
                      _next: c._pt,
                      p: f || 1 === g ? f : ",",
                      s: p,
                      c:
                        "=" === l.charAt(1)
                          ? parseFloat(l.substr(2)) *
                            ("-" === l.charAt(0) ? -1 : 1)
                          : parseFloat(l) - p,
                      m: h && h < 4 ? Math.round : 0,
                    }),
                    (m = et.lastIndex));
              return (
                (c.c = m < n.length ? n.substring(m, n.length) : ""),
                (c.fp = s),
                (nt.test(n) || _) && (c.e = 0),
                (this._pt = c)
              );
            }.call(this, t, e, _, i, d, h || j.stringFilter, l))
          : ((f = new ee(
              this._pt,
              t,
              e,
              +_ || 0,
              i - (_ || 0),
              "boolean" == typeof p ? Wt : Ht,
              0,
              d
            )),
            l && (f.fp = l),
            u && f.modifier(u, this, t),
            (this._pt = f));
    },
    Yt = function _initTween(t, e) {
      var r,
        n,
        i,
        a,
        o,
        u,
        h,
        l,
        f,
        p,
        _,
        d,
        c = t.vars,
        m = c.ease,
        g = c.startAt,
        v = c.immediateRender,
        y = c.lazy,
        w = c.onUpdate,
        b = c.onUpdateParams,
        T = c.callbackScope,
        x = c.runBackwards,
        k = c.yoyoEase,
        O = c.keyframes,
        M = c.autoRevert,
        C = t._dur,
        P = t._startAt,
        S = t._targets,
        A = t.parent,
        D = A && "nested" === A.data ? A.parent._targets : S,
        F = "auto" === t._overwrite,
        z = t.timeline;
      if (
        (!z || (O && m) || (m = "none"),
        (t._ease = Ft(m, E.ease)),
        (t._yEase = k ? Dt(Ft(!0 === k ? m : k, E.ease)) : 0),
        k &&
          t._yoyo &&
          !t._repeat &&
          ((k = t._yEase), (t._yEase = t._ease), (t._ease = k)),
        !z)
      ) {
        if ((P && P.render(-1, !0).kill(), g)) {
          if (
            (pa(
              (t._startAt = Xt.set(
                S,
                ga(
                  {
                    data: "isStart",
                    overwrite: !1,
                    parent: A,
                    immediateRender: !0,
                    lazy: s(y),
                    startAt: null,
                    delay: 0,
                    onUpdate: w,
                    onUpdateParams: b,
                    callbackScope: T,
                    stagger: 0,
                  },
                  g
                )
              ))
            ),
            v)
          )
            if (0 < e) M || (t._startAt = 0);
            else if (C) return;
        } else if (x && C)
          if (P) M || (t._startAt = 0);
          else if (
            (e && (v = !1),
            pa(
              (t._startAt = Xt.set(
                S,
                dt(ka(c, st), {
                  overwrite: !1,
                  data: "isFromStart",
                  lazy: v && s(y),
                  immediateRender: v,
                  stagger: 0,
                  parent: A,
                })
              ))
            ),
            v)
          ) {
            if (!e) return;
          } else _initTween(t._startAt, B);
        for (
          r = ka(c, st),
            d = (l = S[(t._pt = 0)] ? Y(S[0]).harness : 0) && c[l.prop],
            y = (C && s(y)) || (y && !C),
            n = 0;
          n < S.length;
          n++
        ) {
          if (
            ((h = (o = S[n])._gsap || X(S)[n]._gsap),
            (t._ptLookup[n] = p = {}),
            ut[h.id] && ca(),
            (_ = D === S ? n : D.indexOf(o)),
            l &&
              !1 !== (f = new l()).init(o, d || r, t, _, D) &&
              ((t._pt = a =
                new ee(t._pt, o, f.name, 0, 1, f.render, f, 0, f.priority)),
              f._props.forEach(function (t) {
                p[t] = a;
              }),
              f.priority && (u = 1)),
            !l || d)
          )
            for (i in r)
              ht[i] && (f = Db(i, r, t, _, o, D))
                ? f.priority && (u = 1)
                : (p[i] = a =
                    It.call(t, o, i, "get", r[i], _, D, 0, c.stringFilter));
          t._op && t._op[n] && t.kill(o, t._op[n]),
            F && t._pt && ((Lt = t), R.killTweensOf(o, p, "started"), (Lt = 0)),
            t._pt && y && (ut[h.id] = 1);
        }
        u && te(t), t._onInit && t._onInit(t);
      }
      (t._from = !z && !!c.runBackwards), (t._onUpdate = w), (t._initted = 1);
    },
    qt = function _parseFuncOrString(t, e, r, i, a) {
      return o(t)
        ? t.call(e, r, i, a)
        : n(t) && ~t.indexOf("random(")
        ? Va(t)
        : t;
    },
    Nt = _t + ",repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",
    jt = (Nt + ",id,stagger,delay,duration,paused").split(","),
    Xt = (function (O) {
      function Tween(t, e, n) {
        var i;
        "number" == typeof e && ((n.duration = e), (e = n), (n = null));
        var a,
          o,
          h,
          l,
          f,
          _,
          d,
          c,
          m = (i =
            O.call(
              this,
              (function _inheritDefaults(t) {
                var e = t.parent || R,
                  r = t.keyframes ? ha : ga;
                if (s(t.inherit))
                  for (; e; ) r(t, e.vars.defaults), (e = e.parent);
                return t;
              })(e),
              n
            ) || this).vars,
          g = m.duration,
          v = m.delay,
          y = m.immediateRender,
          w = m.stagger,
          b = m.overwrite,
          T = m.keyframes,
          x = m.defaults,
          k = W(t) && p(t[0]) ? [t] : yt(t);
        if (
          ((i._targets = k.length
            ? X(k)
            : L(
                "GSAP target " + t + " not found. https://greensock.com",
                !j.nullTargetWarn
              ) || []),
          (i._ptLookup = []),
          (i._overwrite = b),
          T || w || u(g) || u(v))
        ) {
          if (
            ((e = i.vars),
            (a = i.timeline =
              new Bt({ data: "nested", defaults: x || {} })).kill(),
            (a.parent = _assertThisInitialized(i)),
            T)
          )
            ga(a.vars.defaults, { ease: "none" }),
              T.forEach(function (t) {
                return a.to(k, t, ">");
              });
          else {
            if (((l = k.length), (d = w ? La(w) : N), r(w)))
              for (f in w) ~Nt.indexOf(f) && ((c = c || {})[f] = w[f]);
            for (o = 0; o < l; o++) {
              for (f in ((h = {}), e)) jt.indexOf(f) < 0 && (h[f] = e[f]);
              (h.stagger = 0),
                c && dt(h, c),
                e.yoyoEase && !e.repeat && (h.yoyoEase = e.yoyoEase),
                (_ = k[o]),
                (h.duration = +qt(g, _assertThisInitialized(i), o, _, k)),
                (h.delay =
                  (+qt(v, _assertThisInitialized(i), o, _, k) || 0) - i._delay),
                !w &&
                  1 === l &&
                  h.delay &&
                  ((i._delay = v = h.delay), (i._start += v), (h.delay = 0)),
                a.to(_, h, d(o, _, k));
            }
            g = v = 0;
          }
          g || i.duration((g = a.duration()));
        } else i.timeline = 0;
        return (
          !0 === b &&
            ((Lt = _assertThisInitialized(i)), R.killTweensOf(k), (Lt = 0)),
          (y ||
            (!g &&
              !T &&
              i._start === i.parent._time &&
              s(y) &&
              (function _hasNoPausedAncestors(t) {
                return !t || (t._ts && _hasNoPausedAncestors(t.parent));
              })(_assertThisInitialized(i)) &&
              "nested" !== i.parent.data)) &&
            ((i._tTime = -B), i.render(Math.max(0, -v))),
          i
        );
      }
      _inheritsLoose(Tween, O);
      var t = Tween.prototype;
      return (
        (t.render = function render(t, e, r) {
          var n,
            i,
            a,
            s,
            o,
            u,
            h,
            l,
            f,
            p = this._time,
            d = this._tDur,
            c = this._dur,
            m = d - B < t && 0 <= t ? d : t < B ? 0 : t;
          if (c) {
            if (
              m !== this._tTime ||
              !t ||
              r ||
              (this._startAt && this._zTime < 0 != t < 0)
            ) {
              if (((n = m), (l = this.timeline), this._repeat)) {
                if (
                  ((s = c + this._rDelay),
                  c < (n = _(m % s)) && (n = c),
                  (a = ~~(m / s)) && a === m / s && ((n = c), a--),
                  (u = this._yoyo && 1 & a) && ((f = this._yEase), (n = c - n)),
                  (o = ct(this._tTime, s)),
                  n === p && !r && this._initted)
                )
                  return this;
                a !== o &&
                  this.vars.repeatRefresh &&
                  !this._lock &&
                  ((this._lock = r = 1),
                  (this.render(s * a, !0).invalidate()._lock = 0));
              }
              if (!this._initted && xa(this, n, r, e))
                return (this._tTime = 0), this;
              for (
                this._tTime = m,
                  this._time = n,
                  !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
                  this.ratio = h = (f || this._ease)(n / c),
                  this._from && (this.ratio = h = 1 - h),
                  p || !n || e || bt(this, "onStart"),
                  i = this._pt;
                i;

              )
                i.r(h, i.d), (i = i._next);
              (l && l.render(t < 0 ? t : !n && u ? -B : l._dur * h, e, r)) ||
                (this._startAt && (this._zTime = t)),
                this._onUpdate &&
                  !e &&
                  (t < 0 && this._startAt && this._startAt.render(t, !0, r),
                  bt(this, "onUpdate")),
                this._repeat &&
                  a !== o &&
                  this.vars.onRepeat &&
                  !e &&
                  this.parent &&
                  bt(this, "onRepeat"),
                (m !== d && m) ||
                  this._tTime !== m ||
                  (t < 0 &&
                    this._startAt &&
                    !this._onUpdate &&
                    this._startAt.render(t, !0, r),
                  (!t && c) ||
                    !((m && 0 < this._ts) || (!m && this._ts < 0)) ||
                    pa(this, 1),
                  e ||
                    (t < 0 && !p) ||
                    (bt(this, m === d ? "onComplete" : "onReverseComplete", !0),
                    this._prom && this._prom()));
            }
          } else
            !(function _renderZeroDurationTween(t, e, r, n) {
              var i,
                a = t._zTime < 0 ? 0 : 1,
                s = e < 0 ? 0 : 1,
                o = t._rDelay,
                u = 0;
              if (
                (o &&
                  t._repeat &&
                  ((u = gt(0, t._tDur, e)),
                  ct(u, o) !== ct(t._tTime, o) &&
                    ((a = 1 - s),
                    t.vars.repeatRefresh && t._initted && t.invalidate())),
                (t._initted || !xa(t, e, n, r)) &&
                  (s !== a || n || t._zTime === B || (!e && t._zTime)))
              ) {
                for (
                  t._zTime = e || (r ? B : 0),
                    t.ratio = s,
                    t._from && (s = 1 - s),
                    t._time = 0,
                    t._tTime = u,
                    r || bt(t, "onStart"),
                    i = t._pt;
                  i;

                )
                  i.r(s, i.d), (i = i._next);
                !s &&
                  t._startAt &&
                  !t._onUpdate &&
                  t._start &&
                  t._startAt.render(e, !0, n),
                  t._onUpdate && !r && bt(t, "onUpdate"),
                  u && t._repeat && !r && t.parent && bt(t, "onRepeat"),
                  (e >= t._tDur || e < 0) &&
                    t.ratio === s &&
                    (t.ratio && pa(t, 1),
                    r ||
                      (bt(t, t.ratio ? "onComplete" : "onReverseComplete", !0),
                      t._prom && t._prom()));
              }
            })(this, t, e, r);
          return this;
        }),
        (t.targets = function targets() {
          return this._targets;
        }),
        (t.invalidate = function invalidate() {
          return (
            (this._pt =
              this._op =
              this._startAt =
              this._onUpdate =
              this._act =
              this._lazy =
                0),
            (this._ptLookup = []),
            this.timeline && this.timeline.invalidate(),
            O.prototype.invalidate.call(this)
          );
        }),
        (t.kill = function kill(t, e) {
          if (
            (void 0 === e && (e = "all"),
            !(t || (e && "all" !== e)) && ((this._lazy = 0), this.parent))
          )
            return $a(this);
          if (this.timeline)
            return (
              this.timeline.killTweensOf(t, e, Lt && !0 !== Lt.vars.overwrite),
              this
            );
          var r,
            i,
            a,
            s,
            o,
            u,
            h,
            l = this._targets,
            f = t ? yt(t) : l,
            p = this._ptLookup,
            _ = this._pt;
          if (
            (!e || "all" === e) &&
            (function _arraysMatch(t, e) {
              for (
                var r = t.length, n = r === e.length;
                n && r-- && t[r] === e[r];

              );
              return r < 0;
            })(l, f)
          )
            return $a(this);
          for (
            r = this._op = this._op || [],
              "all" !== e &&
                (n(e) &&
                  ((o = {}),
                  $(e, function (t) {
                    return (o[t] = 1);
                  }),
                  (e = o)),
                (e = (function _addAliasesToVars(t, e) {
                  var r,
                    n,
                    i,
                    a,
                    s = t[0] ? Y(t[0]).harness : 0,
                    o = s && s.aliases;
                  if (!o) return e;
                  for (n in ((r = dt({}, e)), o))
                    if ((n in r))
                      for (i = (a = o[n].split(",")).length; i--; )
                        r[a[i]] = r[n];
                  return r;
                })(l, e))),
              h = l.length;
            h--;

          )
            if (~f.indexOf(l[h]))
              for (o in ((i = p[h]),
              "all" === e
                ? ((r[h] = e), (s = i), (a = {}))
                : ((a = r[h] = r[h] || {}), (s = e)),
              s))
                (u = i && i[o]) &&
                  (("kill" in u.d && !0 !== u.d.kill(o)) || oa(this, u, "_pt"),
                  delete i[o]),
                  "all" !== a && (a[o] = 1);
          return this._initted && !this._pt && _ && $a(this), this;
        }),
        (Tween.to = function to(t, e, r) {
          return new Tween(t, e, r);
        }),
        (Tween.from = function from(t, e) {
          return new Tween(t, ba(arguments, 1));
        }),
        (Tween.delayedCall = function delayedCall(t, e, r, n) {
          return new Tween(e, 0, {
            immediateRender: !1,
            lazy: !1,
            overwrite: !1,
            delay: t,
            onComplete: e,
            onReverseComplete: e,
            onCompleteParams: r,
            onReverseCompleteParams: r,
            callbackScope: n,
          });
        }),
        (Tween.fromTo = function fromTo(t, e, r) {
          return new Tween(t, ba(arguments, 2));
        }),
        (Tween.set = function set(t, e) {
          return (
            (e.duration = 0), e.repeatDelay || (e.repeat = 0), new Tween(t, e)
          );
        }),
        (Tween.killTweensOf = function killTweensOf(t, e, r) {
          return R.killTweensOf(t, e, r);
        }),
        Tween
      );
    })(Et);
  ga(Xt.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 }),
    $("staggerTo,staggerFrom,staggerFromTo", function (r) {
      Xt[r] = function () {
        var t = new Bt(),
          e = yt(arguments);
        return e.splice("staggerFromTo" === r ? 5 : 4, 0, 0), t[r].apply(t, e);
      };
    });
  function Ob(t, e, r) {
    return t.setAttribute(e, r);
  }
  function Wb(t, e, r, n) {
    n.mSet(t, e, n.m.call(n.tween, r, n.mt), n);
  }
  var Ut = function _setterPlain(t, e, r) {
      return (t[e] = r);
    },
    Vt = function _setterFunc(t, e, r) {
      return t[e](r);
    },
    $t = function _setterFuncWithParam(t, e, r, n) {
      return t[e](n.fp, r);
    },
    Qt = function _getSetter(t, e) {
      return o(t[e]) ? Vt : q(t[e]) && t.setAttribute ? Ob : Ut;
    },
    Ht = function _renderPlain(t, e) {
      return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4, e);
    },
    Wt = function _renderBoolean(t, e) {
      return e.set(e.t, e.p, !!(e.s + e.c * t), e);
    },
    Gt = function _renderComplexString(t, e) {
      var r = e._pt,
        n = "";
      if (!t && e.b) n = e.b;
      else if (1 === t && e.e) n = e.e;
      else {
        for (; r; )
          (n =
            r.p +
            (r.m
              ? r.m(r.s + r.c * t)
              : Math.round(1e4 * (r.s + r.c * t)) / 1e4) +
            n),
            (r = r._next);
        n += e.c;
      }
      e.set(e.t, e.p, n, e);
    },
    Zt = function _renderPropTweens(t, e) {
      for (var r = e._pt; r; ) r.r(t, r.d), (r = r._next);
    },
    Jt = function _addPluginModifier(t, e, r, n) {
      for (var i, a = this._pt; a; )
        (i = a._next), a.p === n && a.modifier(t, e, r), (a = i);
    },
    Kt = function _killPropTweensOf(t) {
      for (var e, r, n = this._pt; n; )
        (r = n._next),
          (n.p === t && !n.op) || n.op === t
            ? oa(this, n, "_pt")
            : n.dep || (e = 1),
          (n = r);
      return !e;
    },
    te = function _sortPropTweensByPriority(t) {
      for (var e, r, n, i, a = t._pt; a; ) {
        for (e = a._next, r = n; r && r.pr > a.pr; ) r = r._next;
        (a._prev = r ? r._prev : i) ? (a._prev._next = a) : (n = a),
          (a._next = r) ? (r._prev = a) : (i = a),
          (a = e);
      }
      t._pt = n;
    },
    ee =
      ((PropTween.prototype.modifier = function modifier(t, e, r) {
        (this.mSet = this.mSet || this.set),
          (this.set = Wb),
          (this.m = t),
          (this.mt = r),
          (this.tween = e);
      }),
      PropTween);
  function PropTween(t, e, r, n, i, a, s, o, u) {
    (this.t = e),
      (this.s = n),
      (this.c = i),
      (this.p = r),
      (this.r = a || Ht),
      (this.d = s || this),
      (this.set = o || Ut),
      (this.pr = u || 0),
      (this._next = t) && (t._prev = this);
  }
  $(
    _t +
      ",parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert",
    function (t) {
      (st[t] = 1), "on" === t.substr(0, 2) && (st[t + "Params"] = 1);
    }
  ),
    (at.TweenMax = at.TweenLite = Xt),
    (at.TimelineLite = at.TimelineMax = Bt),
    (R = new Bt({
      sortChildren: !1,
      defaults: E,
      autoRemoveChildren: !0,
      id: "root",
    })),
    (j.stringFilter = ib);
  var re = {
    registerPlugin: function registerPlugin() {
      for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
        e[r] = arguments[r];
      e.forEach(function (t) {
        return (function _createPlugin(t) {
          var e = (t = (!t.name && t.default) || t).name,
            r = o(t),
            n =
              e && !r && t.init
                ? function () {
                    this._props = [];
                  }
                : t,
            i = {
              init: N,
              render: Zt,
              add: It,
              kill: Kt,
              modifier: Jt,
              rawVars: 0,
            },
            a = {
              targetTest: 0,
              get: 0,
              getSetter: Qt,
              aliases: {},
              register: 0,
            };
          if ((Ct(), t !== n)) {
            if (ht[e]) return;
            ga(n, ga(ka(t, i), a)),
              dt(n.prototype, dt(i, ka(t, a))),
              (ht[(n.prop = e)] = n),
              t.targetTest && (pt.push(n), (st[e] = 1)),
              (e =
                ("css" === e
                  ? "CSS"
                  : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin");
          }
          M(e, n), t.register && t.register(ne, n, ee);
        })(t);
      });
    },
    timeline: function timeline(t) {
      return new Bt(t);
    },
    getTweensOf: function getTweensOf(t, e) {
      return R.getTweensOf(t, e);
    },
    getProperty: function getProperty(i, t, e, r) {
      n(i) && (i = yt(i)[0]);
      var a = Y(i || {}).get,
        s = e ? fa : ea;
      return (
        "native" === e && (e = ""),
        i
          ? t
            ? s(((ht[t] && ht[t].get) || a)(i, t, e, r))
            : function (t, e, r) {
                return s(((ht[t] && ht[t].get) || a)(i, t, e, r));
              }
          : i
      );
    },
    quickSetter: function quickSetter(r, e, n) {
      if (1 < (r = yt(r)).length) {
        var i = r.map(function (t) {
            return ne.quickSetter(t, e, n);
          }),
          a = i.length;
        return function (t) {
          for (var e = a; e--; ) i[e](t);
        };
      }
      r = r[0] || {};
      var s = ht[e],
        o = Y(r),
        u = s
          ? function (t) {
              var e = new s();
              (c._pt = 0),
                e.init(r, n ? t + n : t, c, 0, [r]),
                e.render(1, e),
                c._pt && Zt(1, c);
            }
          : o.set(r, e);
      return s
        ? u
        : function (t) {
            return u(r, e, n ? t + n : t, o, 1);
          };
    },
    isTweening: function isTweening(t) {
      return 0 < R.getTweensOf(t, !0).length;
    },
    defaults: function defaults(t) {
      return t && t.ease && (t.ease = Ft(t.ease, E.ease)), ja(E, t || {});
    },
    config: function config(t) {
      return ja(j, t || {});
    },
    registerEffect: function registerEffect(t) {
      var i = t.name,
        n = t.effect,
        e = t.plugins,
        a = t.defaults,
        s = t.extendTimeline;
      (e || "").split(",").forEach(function (t) {
        return (
          t && !ht[t] && !at[t] && L(i + " effect requires " + t + " plugin.")
        );
      }),
        (lt[i] = function (t, e) {
          return n(yt(t), ga(e || {}, a));
        }),
        s &&
          (Bt.prototype[i] = function (t, e, n) {
            return this.add(lt[i](t, r(e) ? e : (n = e) && {}), n);
          });
    },
    registerEase: function registerEase(t, e) {
      Pt[t] = Ft(e);
    },
    parseEase: function parseEase(t, e) {
      return arguments.length ? Ft(t, e) : Pt;
    },
    getById: function getById(t) {
      return R.getById(t);
    },
    exportRoot: function exportRoot(t, e) {
      void 0 === t && (t = {});
      var r,
        n,
        i = new Bt(t);
      for (
        i.smoothChildTiming = s(t.smoothChildTiming),
          R.remove(i),
          i._dp = 0,
          i._time = i._tTime = R._time,
          r = R._first;
        r;

      )
        (n = r._next),
          (!e &&
            !r._dur &&
            r instanceof Xt &&
            r.vars.onComplete === r._targets[0]) ||
            wa(i, r, r._start - r._delay),
          (r = n);
      return wa(R, i, 0), i;
    },
    utils: {
      wrap: function wrap(e, t, r) {
        var n = t - e;
        return W(e)
          ? Sa(e, wrap(0, e.length), t)
          : Da(r, function (t) {
              return ((n + ((t - e) % n)) % n) + e;
            });
      },
      wrapYoyo: function wrapYoyo(e, t, r) {
        var n = t - e,
          i = 2 * n;
        return W(e)
          ? Sa(e, wrapYoyo(0, e.length - 1), t)
          : Da(r, function (t) {
              return e + (n < (t = (i + ((t - e) % i)) % i) ? i - t : t);
            });
      },
      distribute: La,
      random: Oa,
      snap: Na,
      normalize: function normalize(t, e, r) {
        return wt(t, e, 0, 1, r);
      },
      getUnit: Fa,
      clamp: function clamp(e, r, t) {
        return Da(t, function (t) {
          return gt(e, r, t);
        });
      },
      splitColor: eb,
      toArray: yt,
      mapRange: wt,
      pipe: function pipe() {
        for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
          e[r] = arguments[r];
        return function (t) {
          return e.reduce(function (t, e) {
            return e(t);
          }, t);
        };
      },
      unitize: function unitize(e, r) {
        return function (t) {
          return e(parseFloat(t)) + (r || Fa(t));
        };
      },
      interpolate: function interpolate(e, r, t, i) {
        var a = isNaN(e + r)
          ? 0
          : function (t) {
              return (1 - t) * e + t * r;
            };
        if (!a) {
          var s,
            o,
            u,
            h,
            l,
            f = n(e),
            p = {};
          if ((!0 === t && (i = 1) && (t = null), f))
            (e = { p: e }), (r = { p: r });
          else if (W(e) && !W(r)) {
            for (u = [], h = e.length, l = h - 2, o = 1; o < h; o++)
              u.push(interpolate(e[o - 1], e[o]));
            h--,
              (a = function func(t) {
                t *= h;
                var e = Math.min(l, ~~t);
                return u[e](t - e);
              }),
              (t = r);
          } else i || (e = dt(W(e) ? [] : {}, e));
          if (!u) {
            for (s in r) It.call(p, e, s, "get", r[s]);
            a = function func(t) {
              return Zt(t, p) || (f ? e.p : e);
            };
          }
        }
        return Da(t, a);
      },
    },
    install: J,
    effects: lt,
    ticker: Mt,
    updateRoot: Bt.updateRoot,
    plugins: ht,
    globalTimeline: R,
    core: {
      PropTween: ee,
      globals: M,
      Tween: Xt,
      Timeline: Bt,
      Animation: Et,
      getCache: Y,
    },
  };
  $("to,from,fromTo,delayedCall,set,killTweensOf", function (t) {
    return (re[t] = Xt[t]);
  }),
    Mt.add(Bt.updateRoot),
    (c = re.to({}, { duration: 0 }));
  function $b(t, e) {
    for (var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e; )
      r = r._next;
    return r;
  }
  function ac(t, a) {
    return {
      name: t,
      rawVars: 1,
      init: function init(t, i, e) {
        e._onInit = function (t) {
          var e, r;
          if (
            (n(i) &&
              ((e = {}),
              $(i, function (t) {
                return (e[t] = 1);
              }),
              (i = e)),
            a)
          ) {
            for (r in ((e = {}), i)) e[r] = a(i[r]);
            i = e;
          }
          !(function _addModifiers(t, e) {
            var r,
              n,
              i,
              a = t._targets;
            for (r in e)
              for (n = a.length; n--; )
                (i = (i = t._ptLookup[n][r]) && i.d) &&
                  (i._pt && (i = $b(i, r)),
                  i && i.modifier && i.modifier(e[r], t, a[n], r));
          })(t, i);
        };
      },
    };
  }
  var ne =
    re.registerPlugin(
      {
        name: "attr",
        init: function init(t, e, r, n, i) {
          for (var a in e)
            this.add(
              t,
              "setAttribute",
              (t.getAttribute(a) || 0) + "",
              e[a],
              n,
              i,
              0,
              0,
              a
            ),
              this._props.push(a);
        },
      },
      {
        name: "endArray",
        init: function init(t, e) {
          for (var r = e.length; r--; ) this.add(t, r, t[r] || 0, e[r]);
        },
      },
      ac("roundProps", Ma),
      ac("modifiers"),
      ac("snap", Na)
    ) || re;
  (Xt.version = Bt.version = ne.version = "3.0.5"), (f = 1), t() && Ct();
  function Mc(t, e) {
    return e.set(e.t, e.p, ~~(1e3 * (e.s + e.c * t)) / 1e3 + e.u, e);
  }
  function Nc(t, e) {
    return e.set(
      e.t,
      e.p,
      1 === t ? e.e : ~~(1e3 * (e.s + e.c * t)) / 1e3 + e.u,
      e
    );
  }
  function Oc(t, e) {
    return e.set(e.t, e.p, t ? ~~(1e3 * (e.s + e.c * t)) / 1e3 + e.u : e.b, e);
  }
  function Pc(t, e) {
    var r = e.s + e.c * t;
    e.set(e.t, e.p, ~~(r + (r < 0 ? -0.5 : 0.5)) + e.u, e);
  }
  function Qc(t, e) {
    return e.set(e.t, e.p, t ? e.e : e.b, e);
  }
  function Rc(t, e) {
    return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e);
  }
  function Sc(t, e, r) {
    return (t.style[e] = r);
  }
  function Tc(t, e, r) {
    return t.style.setProperty(e, r);
  }
  function Uc(t, e, r) {
    return (t._gsap[e] = r);
  }
  function Vc(t, e, r) {
    return (t._gsap.scaleX = t._gsap.scaleY = r);
  }
  function Wc(t, e, r, n, i) {
    var a = t._gsap;
    (a.scaleX = a.scaleY = r), a.renderTransform(i, a);
  }
  function Xc(t, e, r, n, i) {
    var a = t._gsap;
    (a[e] = r), a.renderTransform(i, a);
  }
  function _c(t, e) {
    var r = ae.createElementNS
      ? ae.createElementNS(
          (e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
          t
        )
      : ae.createElement(t);
    return r.style ? r : ae.createElement(t);
  }
  function ad(t, e, r) {
    var n = getComputedStyle(t);
    return (
      n[e] ||
      n.getPropertyValue(e.replace(Le, "-$1").toLowerCase()) ||
      n.getPropertyValue(e) ||
      (!r && ad(t, Ve(e) || e, 1)) ||
      ""
    );
  }
  function dd() {
    !(function _windowExists() {
      return "undefined" != typeof window;
    })() ||
      ((ie = window),
      (ae = ie.document),
      (se = ae.documentElement),
      (ue = _c("div") || { style: {} }),
      (he = _c("div")),
      (je = Ve(je)),
      (Xe = Ve(Xe)),
      (ue.style.cssText =
        "border-width:0;line-height:0;position:absolute;padding:0"),
      (fe = !!Ve("perspective")),
      (oe = 1));
  }
  function fd(t, e) {
    for (var r = e.length; r--; )
      if (t.hasAttribute(e[r])) return t.getAttribute(e[r]);
  }
  function gd(e) {
    var r;
    try {
      r = e.getBBox();
    } catch (t) {
      r = function _getBBoxHack(t) {
        var e,
          r = _c(
            "svg",
            (this.ownerSVGElement &&
              this.ownerSVGElement.getAttribute("xmlns")) ||
              "http://www.w3.org/2000/svg"
          ),
          n = this.parentNode,
          i = this.nextSibling,
          a = this.style.cssText;
        if (
          (se.appendChild(r),
          r.appendChild(this),
          (this.style.display = "block"),
          t)
        )
          try {
            (e = this.getBBox()),
              (this._gsapBBox = this.getBBox),
              (this.getBBox = _getBBoxHack);
          } catch (t) {}
        else this._gsapBBox && (e = this._gsapBBox());
        return (
          i ? n.insertBefore(this, i) : n.appendChild(this),
          se.removeChild(r),
          (this.style.cssText = a),
          e
        );
      }.call(e, !0);
    }
    return !r || r.width || r.x || r.y
      ? r
      : {
          x: +fd(e, ["x", "cx", "x1"]) || 0,
          y: +fd(e, ["y", "cy", "y1"]) || 0,
          width: 0,
          height: 0,
        };
  }
  function hd(t) {
    return !(!t.getCTM || (t.parentNode && !t.ownerSVGElement) || !gd(t));
  }
  function id(t, e) {
    if (e) {
      var r = t.style;
      e in ze && (e = je),
        r.removeProperty
          ? (("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6)) ||
              (e = "-" + e),
            r.removeProperty(e.replace(Le, "-$1").toLowerCase()))
          : r.removeAttribute(e);
    }
  }
  function jd(t, e, r, n, i, a) {
    var s = new ee(t._pt, e, r, 0, 1, a ? Rc : Qc);
    return ((t._pt = s).b = n), (s.e = i), t._props.push(r), s;
  }
  function ld(t, e, r, n) {
    var i,
      a,
      s,
      o,
      u = parseFloat(r) || 0,
      h = (r + "").trim().substr((u + "").length) || "px",
      l = ue.style,
      f = Ye.test(e),
      p = "svg" === t.tagName.toLowerCase(),
      d = (p ? "client" : "offset") + (f ? "Width" : "Height"),
      c = "px" === n;
    return n === h || !u || $e[n] || $e[h]
      ? u
      : ((o = t.getCTM && hd(t)),
        "%" === n && ze[e]
          ? _((u / (o ? t.getBBox()[f ? "width" : "height"] : t[d])) * 100)
          : ((l[f ? "width" : "height"] = 100 + (c ? h : n)),
            (a = "em" === n && t.appendChild && !p ? t : t.parentNode),
            o && (a = (t.ownerSVGElement || {}).parentNode),
            (a && a !== ae && a.appendChild) || (a = ae.body),
            (s = a._gsap) && "%" === n && s.width && f && s.time === Mt.time
              ? _((u / s.width) * 100)
              : (a.appendChild(ue),
                (i = ue[d]),
                a.removeChild(ue),
                f &&
                  "%" === n &&
                  (((s = Y(a)).time = Mt.time), (s.width = a[d])),
                _(c ? (i * u) / 100 : (100 / i) * u))));
  }
  function md(t, e, r, n) {
    var i;
    return (
      oe || dd(),
      e in Ne &&
        "transform" !== e &&
        ~(e = Ne[e]).indexOf(",") &&
        (e = e.split(",")[0]),
      ze[e] && "transform" !== e
        ? ((i = Ze(t, n)),
          (i =
            "transformOrigin" !== e ? i[e] : Je(ad(t, Xe)) + i.zOrigin + "px"))
        : ((i = t.style[e]) &&
            "auto" !== i &&
            !n &&
            !~(i + "").indexOf("calc(")) ||
          (i = ad(t, e) || Z(t, e) || ("opacity" === e ? 1 : 0)),
      r ? ld(t, e, i, r) + r : i
    );
  }
  function nd(t, e, r, n) {
    var i,
      a,
      s,
      o,
      u,
      h,
      l,
      f,
      p,
      _,
      d,
      c,
      m = new ee(this._pt, t.style, e, 0, 1, Gt),
      g = 0,
      v = 0;
    if (
      ((m.b = r),
      (m.e = n),
      (r += ""),
      "auto" === (n += "") &&
        ((t.style[e] = n), (n = ad(t, e) || n), (t.style[e] = r)),
      ib((i = [r, n])),
      (n = i[1]),
      !!(h = (r = i[0]).indexOf("rgba(")) != !!(l = n.indexOf("rgba(")) &&
        (h
          ? (r = r.substr(h) + " " + r.substr(0, h - 1))
          : (n = n.substr(l) + " " + n.substr(0, l - 1))),
      (s = r.match(Ie) || []),
      (n.match(Ie) || []).length)
    ) {
      for (; (a = Ie.exec(n)); )
        (l = a[0]),
          (p = n.substring(g, a.index)),
          u ? (u = (u + 1) % 5) : "rgba(" === p.substr(-5) && (u = 1),
          l !== (h = s[v++] || "") &&
            ((o = parseFloat(h) || 0),
            (d = h.substr((o + "").length)),
            (c = "=" === l.charAt(1) ? +(l.charAt(0) + "1") : 0) &&
              (l = l.substr(2)),
            (f = parseFloat(l)),
            (_ = l.substr((f + "").length)),
            (g = Ie.lastIndex - _.length),
            _ ||
              ((_ = _ || j.units[e] || d),
              g === n.length && ((n += _), (m.e += _))),
            d !== _ && (o = ld(t, e, h, _) || 0),
            (m._pt = {
              _next: m._pt,
              p: p || 1 === v ? p : ",",
              s: o,
              c: c ? c * f : f - o,
              m: u && u < 4 ? Math.round : 0,
            }));
      m.c = g < n.length ? n.substring(g, n.length) : "";
    } else m.r = "display" === e && "none" === n ? Rc : Qc;
    return nt.test(n) && (m.e = 0), (this._pt = m);
  }
  function pd(t) {
    var e = t.split(" "),
      r = e[0],
      n = e[1] || "50%";
    return (
      ("top" !== r && "bottom" !== r && "left" !== n && "right" !== n) ||
        ((t = r), (r = n), (n = t)),
      (e[0] = Qe[r] || r),
      (e[1] = Qe[n] || n),
      e.join(" ")
    );
  }
  function qd(t, e) {
    if (e.tween && e.tween._time === e.tween._dur) {
      var r,
        n,
        i,
        a = e.t,
        s = a.style,
        o = e.u;
      if ("all" === o || !0 === o) (s.cssText = ""), (n = 1);
      else
        for (i = (o = o.split(",")).length; -1 < --i; )
          (r = o[i]),
            ze[r] && ((n = 1), (r = "transformOrigin" === r ? Xe : je)),
            id(a, r);
      n &&
        (id(a, je),
        (n = a._gsap) && (n.svg && a.removeAttribute("transform"), Ze(a, 1)));
    }
  }
  function ud(t) {
    return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t;
  }
  function vd(t) {
    var e = ad(t, je);
    return ud(e) ? We : e.substr(7).match(tt).map(_);
  }
  function wd(t, e) {
    var r,
      n,
      i,
      a,
      s = t._gsap,
      o = t.style,
      u = vd(t);
    return s.svg && t.getAttribute("transform")
      ? "1,0,0,1,0,0" ===
        (u = [
          (i = t.transform.baseVal.consolidate().matrix).a,
          i.b,
          i.c,
          i.d,
          i.e,
          i.f,
        ]).join(",")
        ? We
        : u
      : (u !== We ||
          t.offsetParent ||
          t === se ||
          s.svg ||
          ((i = o.display),
          (o.display = "block"),
          ((r = t.parentNode) && t.offsetParent) ||
            ((a = 1), (n = t.nextSibling), se.appendChild(t)),
          (u = vd(t)),
          i ? (o.display = i) : id(t, "display"),
          a &&
            (n
              ? r.insertBefore(t, n)
              : r
              ? r.appendChild(t)
              : se.removeChild(t))),
        e && 6 < u.length ? [u[0], u[1], u[4], u[5], u[12], u[13]] : u);
  }
  function xd(t, e, r, n, i, a) {
    var s,
      o,
      u,
      h = t._gsap,
      l = i || wd(t, !0),
      f = h.xOrigin || 0,
      p = h.yOrigin || 0,
      _ = h.xOffset || 0,
      d = h.yOffset || 0,
      c = l[0],
      m = l[1],
      g = l[2],
      v = l[3],
      y = l[4],
      w = l[5],
      b = e.split(" "),
      T = parseFloat(b[0]) || 0,
      x = parseFloat(b[1]) || 0;
    r
      ? l !== We &&
        (o = c * v - m * g) &&
        ((u = T * (-m / o) + x * (c / o) - (c * w - m * y) / o),
        (T = T * (v / o) + x * (-g / o) + (g * w - v * y) / o),
        (x = u))
      : ((T = (s = gd(t)).x + (~b[0].indexOf("%") ? (T / 100) * s.width : T)),
        (x = s.y + (~(b[1] || b[0]).indexOf("%") ? (x / 100) * s.height : x))),
      n || (!1 !== n && h.smooth)
        ? ((y = T - f),
          (w = x - p),
          (h.xOffset = _ + (y * c + w * g) - y),
          (h.yOffset = d + (y * m + w * v) - w))
        : (h.xOffset = h.yOffset = 0),
      (h.xOrigin = T),
      (h.yOrigin = x),
      (h.smooth = !!n),
      (h.origin = e),
      (h.originIsAbsolute = !!r),
      (t.style[Xe] = "0px 0px"),
      a &&
        (jd(a, h, "xOrigin", f, T),
        jd(a, h, "yOrigin", p, x),
        jd(a, h, "xOffset", _, h.xOffset),
        jd(a, h, "yOffset", d, h.yOffset));
  }
  function Ad(t, e, r) {
    var n = Fa(e);
    return _(parseFloat(e) + parseFloat(ld(t, "x", r + "px", n))) + n;
  }
  function Hd(t, e, r, i, a, s) {
    var o,
      u,
      h = 360,
      l = n(a),
      f = parseFloat(a) * (l && ~a.indexOf("rad") ? Re : 1),
      p = s ? f * s : f - i,
      _ = i + p + "deg";
    return (
      l &&
        ("short" === (o = a.split("_")[1]) &&
          (p %= h) !== p % 180 &&
          (p += p < 0 ? h : -h),
        "cw" === o && p < 0
          ? (p = ((p + 36e9) % h) - ~~(p / h) * h)
          : "ccw" === o && 0 < p && (p = ((p - 36e9) % h) - ~~(p / h) * h)),
      (t._pt = u = new ee(t._pt, e, r, i, p, Nc)),
      (u.e = _),
      (u.u = "deg"),
      t._props.push(r),
      u
    );
  }
  function Id(t, e, r) {
    var n,
      i,
      a,
      s,
      o,
      u,
      h,
      l = he.style,
      f = r._gsap;
    for (i in ((l.cssText =
      getComputedStyle(r).cssText + ";position:absolute;display:block;"),
    (l[je] = e),
    ae.body.appendChild(he),
    (n = Ze(he, 1)),
    ze))
      (a = f[i]) !== (s = n[i]) &&
        "perspective" !== i &&
        ((o = Fa(a) !== (h = Fa(s)) ? ld(r, i, a, h) : parseFloat(a)),
        (u = parseFloat(s)),
        (t._pt = new ee(t._pt, f, i, o, u - o, Mc)),
        (t._pt.u = h),
        t._props.push(i));
    ae.body.removeChild(he);
  }
  var ie,
    ae,
    se,
    oe,
    ue,
    he,
    le,
    fe,
    pe,
    _e,
    de,
    ce = Pt.Power0,
    me = Pt.Power1,
    ge = Pt.Power2,
    ve = Pt.Power3,
    ye = Pt.Power4,
    we = Pt.Linear,
    be = Pt.Quad,
    Te = Pt.Cubic,
    xe = Pt.Quart,
    ke = Pt.Quint,
    Oe = Pt.Strong,
    Me = Pt.Elastic,
    Ce = Pt.Back,
    Pe = Pt.SteppedEase,
    Se = Pt.Bounce,
    Ae = Pt.Sine,
    De = Pt.Expo,
    Fe = Pt.Circ,
    ze = {},
    Re = 180 / Math.PI,
    Ee = Math.PI / 180,
    Be = Math.atan2,
    Le = /([A-Z])/g,
    Ie = /[-+=\.]*\d+[\.e-]*\d*[a-z%]*/g,
    Ye = /(?:left|right|width|margin|padding|x)/i,
    qe = /[\s,\(]\S/,
    Ne = {
      autoAlpha: "opacity,visibility",
      scale: "scaleX,scaleY",
      alpha: "opacity",
    },
    je = "transform",
    Xe = je + "Origin",
    Ue = "O,Moz,ms,Ms,Webkit".split(","),
    Ve = function _checkPropPrefix(t, e) {
      var r = (e || ue).style,
        n = 5;
      if (t in r) return t;
      for (
        t = t.charAt(0).toUpperCase() + t.substr(1);
        n-- && !(Ue[n] + t in r);

      );
      return n < 0 ? null : (3 === n ? "ms" : 0 <= n ? Ue[n] : "") + t;
    },
    $e = { deg: 1, rad: 1, turn: 1 },
    Qe = {
      top: "0%",
      bottom: "100%",
      left: "0%",
      right: "100%",
      center: "50%",
    },
    He = {
      clearProps: function clearProps(t, e, r, n, i) {
        if ("isFromStart" !== i.data) {
          var a = (t._pt = new ee(t._pt, e, r, 0, 0, qd));
          return (a.u = n), (a.pr = -10), (a.tween = i), t._props.push(r), 1;
        }
      },
    },
    We = [1, 0, 0, 1, 0, 0],
    Ge = {},
    Ze = function _parseTransform(t, e) {
      var r = t._gsap || new Rt(t);
      if ("x" in r && !e && !r.uncache) return r;
      var n,
        i,
        a,
        s,
        o,
        u,
        h,
        l,
        f,
        p,
        d,
        c,
        m,
        g,
        v,
        y,
        w,
        b,
        T,
        x,
        k,
        O,
        M,
        C,
        P,
        S,
        A,
        D,
        F,
        z,
        R = t.style,
        E = r.scaleX < 0,
        B = r.xOrigin || 0,
        L = r.yOrigin || 0,
        I = "deg",
        Y = ad(t, Xe) || "0";
      return (
        (n = i = a = u = h = l = f = p = d = 0),
        (s = o = 1),
        (r.svg = !(!t.getCTM || !hd(t))),
        (c = wd(t, r.svg)),
        r.svg && xd(t, Y, r.originIsAbsolute, !1 !== r.smooth, c),
        c !== We &&
          ((y = c[0]),
          (w = c[1]),
          (b = c[2]),
          (T = c[3]),
          (n = x = c[4]),
          (i = k = c[5]),
          6 === c.length
            ? ((s = Math.sqrt(y * y + w * w)),
              (o = Math.sqrt(T * T + b * b)),
              (u = y || w ? Be(w, y) * Re : 0),
              (f = b || T ? Be(b, T) * Re + u : 0),
              r.svg && ((n -= B - (B * y + L * b)), (i -= L - (B * w + L * T))))
            : ((z = c[6]),
              (D = c[7]),
              (P = c[8]),
              (S = c[9]),
              (A = c[10]),
              (F = c[11]),
              (n = c[12]),
              (i = c[13]),
              (a = c[14]),
              (h = (m = Be(z, A)) * Re),
              m &&
                ((O = x * (g = Math.cos(-m)) + P * (v = Math.sin(-m))),
                (M = k * g + S * v),
                (C = z * g + A * v),
                (P = x * -v + P * g),
                (S = k * -v + S * g),
                (A = z * -v + A * g),
                (F = D * -v + F * g),
                (x = O),
                (k = M),
                (z = C)),
              (l = (m = Be(-b, A)) * Re),
              m &&
                ((g = Math.cos(-m)),
                (F = T * (v = Math.sin(-m)) + F * g),
                (y = O = y * g - P * v),
                (w = M = w * g - S * v),
                (b = C = b * g - A * v)),
              (u = (m = Be(w, y)) * Re),
              m &&
                ((O = y * (g = Math.cos(m)) + w * (v = Math.sin(m))),
                (M = x * g + k * v),
                (w = w * g - y * v),
                (k = k * g - x * v),
                (y = O),
                (x = M)),
              h &&
                359.9 < Math.abs(h) + Math.abs(u) &&
                ((h = u = 0), (l = 180 - l)),
              (s = _(Math.sqrt(y * y + w * w + b * b))),
              (o = _(Math.sqrt(k * k + z * z))),
              (m = Be(x, k)),
              (f = 2e-4 < Math.abs(m) ? m * Re : 0),
              (d = F ? 1 / (F < 0 ? -F : F) : 0)),
          r.svg &&
            ((c = t.getAttribute("transform")),
            (r.forceCSS = t.setAttribute("transform", "") || !ud(ad(t, je))),
            c && t.setAttribute("transform", c))),
        90 < Math.abs(f) &&
          Math.abs(f) < 270 &&
          (E
            ? ((s *= -1),
              (f += u <= 0 ? 180 : -180),
              (u += u <= 0 ? 180 : -180))
            : ((o *= -1), (f += f <= 0 ? 180 : -180))),
        (r.x =
          ((r.xPercent =
            n && Math.round(t.offsetWidth / 2) === Math.round(-n) ? -50 : 0)
            ? 0
            : n) + "px"),
        (r.y =
          ((r.yPercent =
            i && Math.round(t.offsetHeight / 2) === Math.round(-i) ? -50 : 0)
            ? 0
            : i) + "px"),
        (r.z = a + "px"),
        (r.scaleX = _(s)),
        (r.scaleY = _(o)),
        (r.rotation = _(u) + I),
        (r.rotationX = _(h) + I),
        (r.rotationY = _(l) + I),
        (r.skewX = f + I),
        (r.skewY = p + I),
        (r.transformPerspective = d + "px"),
        (r.zOrigin = parseFloat(Y.split(" ")[2]) || 0) && (R[Xe] = Je(Y)),
        (r.xOffset = r.yOffset = 0),
        (r.force3D = j.force3D),
        (r.renderTransform = r.svg ? ir : fe ? nr : Ke),
        (r.uncache = 0),
        r
      );
    },
    Je = function _firstTwoOnly(t) {
      return (t = t.split(" "))[0] + " " + t[1];
    },
    Ke = function _renderNon3DTransforms(t, e) {
      (e.z = "0px"),
        (e.rotationY = e.rotationX = "0deg"),
        (e.force3D = 0),
        nr(t, e);
    },
    tr = "0deg",
    er = "0px",
    rr = ") ",
    nr = function _renderCSSTransforms(t, e) {
      var r = e || this,
        n = r.xPercent,
        i = r.yPercent,
        a = r.x,
        s = r.y,
        o = r.z,
        u = r.rotation,
        h = r.rotationY,
        l = r.rotationX,
        f = r.skewX,
        p = r.skewY,
        _ = r.scaleX,
        d = r.scaleY,
        c = r.transformPerspective,
        m = r.force3D,
        g = r.target,
        v = r.zOrigin,
        y = "",
        w = ("auto" === m && t && 1 !== t) || !0 === m;
      if (v && (l !== tr || h !== tr)) {
        var b,
          T = parseFloat(h) * Ee,
          x = Math.sin(T),
          k = Math.cos(T);
        (T = parseFloat(l) * Ee),
          (b = Math.cos(T)),
          (a = Ad(g, a, x * b * -v)),
          (s = Ad(g, s, -Math.sin(T) * -v)),
          (o = Ad(g, o, k * b * -v + v));
      }
      (n || i) && (y = "translate(" + n + "%, " + i + "%) "),
        (!w && a === er && s === er && o === er) ||
          (y +=
            o !== er || w
              ? "translate3d(" + a + ", " + s + ", " + o + ") "
              : "translate(" + a + ", " + s + rr),
        c !== er && (y += "perspective(" + c + rr),
        u !== tr && (y += "rotate(" + u + rr),
        h !== tr && (y += "rotateY(" + h + rr),
        l !== tr && (y += "rotateX(" + l + rr),
        (f === tr && p === tr) || (y += "skew(" + f + ", " + p + rr),
        (1 === _ && 1 === d) || (y += "scale(" + _ + ", " + d + rr),
        (g.style[je] = y || "translate(0, 0)");
    },
    ir = function _renderSVGTransforms(t, e) {
      var r,
        n,
        i,
        a,
        s,
        o = e || this,
        u = o.xPercent,
        h = o.yPercent,
        l = o.x,
        f = o.y,
        p = o.rotation,
        d = o.skewX,
        c = o.skewY,
        m = o.scaleX,
        g = o.scaleY,
        v = o.target,
        y = o.xOrigin,
        w = o.yOrigin,
        b = o.xOffset,
        T = o.yOffset,
        x = o.forceCSS,
        k = parseFloat(l),
        O = parseFloat(f);
      (p = parseFloat(p)),
        (d = parseFloat(d)),
        (c = parseFloat(c)) && ((d += c = parseFloat(c)), (p += c)),
        p || d
          ? ((p *= Ee),
            (d *= Ee),
            (r = Math.cos(p) * m),
            (n = Math.sin(p) * m),
            (i = Math.sin(p - d) * -g),
            (a = Math.cos(p - d) * g),
            d &&
              ((c *= Ee),
              (s = Math.tan(d - c)),
              (i *= s = Math.sqrt(1 + s * s)),
              (a *= s),
              c &&
                ((s = Math.tan(c)), (r *= s = Math.sqrt(1 + s * s)), (n *= s))),
            (r = _(r)),
            (n = _(n)),
            (i = _(i)),
            (a = _(a)))
          : ((r = m), (a = g), (n = i = 0)),
        ((k && !~(l + "").indexOf("px")) || (O && !~(f + "").indexOf("px"))) &&
          ((k = ld(v, "x", l, "px")), (O = ld(v, "y", f, "px"))),
        (y || w || b || T) &&
          ((k = _(k + y - (y * r + w * i) + b)),
          (O = _(O + w - (y * n + w * a) + T))),
        (u || h) &&
          ((s = v.getBBox()),
          (k = _(k + (u / 100) * s.width)),
          (O = _(O + (h / 100) * s.height))),
        (s =
          "matrix(" +
          r +
          "," +
          n +
          "," +
          i +
          "," +
          a +
          "," +
          k +
          "," +
          O +
          ")"),
        v.setAttribute("transform", s),
        x && (v.style[je] = s);
    },
    ar = {
      name: "css",
      register: dd,
      targetTest: function targetTest(t) {
        return t.style && t.nodeType;
      },
      init: function init(t, e, r, n, i) {
        var a,
          s,
          o,
          u,
          h,
          l,
          f,
          p,
          _,
          d,
          c,
          m,
          g,
          v,
          y,
          w = this._props,
          b = t.style;
        for (f in (oe || dd(), e))
          if (
            "autoRound" !== f &&
            ((s = e[f]), !ht[f] || !Db(f, e, r, n, t, i))
          )
            if (
              ((l = He[f]),
              "function" === (h = typeof s) &&
                (h = typeof (s = s.call(r, n, t, i))),
              "string" === h && ~s.indexOf("random(") && (s = Va(s)),
              l)
            )
              l(this, t, f, s, r) && (y = 1);
            else if ("--" === f.substr(0, 2))
              this.add(
                b,
                "setProperty",
                getComputedStyle(t).getPropertyValue(f) + "",
                s + "",
                n,
                i,
                0,
                0,
                f
              );
            else {
              if (
                ((a = md(t, f)),
                (u = parseFloat(a)),
                (d =
                  "string" === h && "=" === s.charAt(1)
                    ? +(s.charAt(0) + "1")
                    : 0) && (s = s.substr(2)),
                (o = parseFloat(s)),
                f in Ne &&
                  ("autoAlpha" === f &&
                    (1 === u &&
                      "hidden" === md(t, "visibility") &&
                      o &&
                      (u = 0),
                    jd(
                      this,
                      b,
                      "visibility",
                      u ? "inherit" : "hidden",
                      o ? "inherit" : "hidden",
                      !o
                    )),
                  "scale" !== f &&
                    "transform" !== f &&
                    ~(f = Ne[f]).indexOf(",") &&
                    (f = f.split(",")[0])),
                (c = f in ze))
              )
                if (
                  (m ||
                    ((g = t._gsap),
                    (v = !1 !== e.smoothOrigin && g.smooth),
                    ((m = this._pt =
                      new ee(
                        this._pt,
                        b,
                        je,
                        0,
                        1,
                        g.renderTransform,
                        g,
                        0,
                        -1
                      )).dep = 1)),
                  "scale" === f)
                )
                  (this._pt = new ee(
                    this._pt,
                    g,
                    "scaleY",
                    g.scaleY,
                    d ? d * o : o - g.scaleY
                  )),
                    w.push("scaleY", f),
                    (f += "X");
                else {
                  if ("transformOrigin" === f) {
                    (s = pd(s)),
                      g.svg
                        ? xd(t, s, 0, v, 0, this)
                        : ((_ = parseFloat(s.split(" ")[2])) !== g.zOrigin &&
                            jd(this, g, "zOrigin", g.zOrigin, _),
                          jd(this, b, f, Je(a), Je(s)));
                    continue;
                  }
                  if ("svgOrigin" === f) {
                    xd(t, s, 1, v, 0, this);
                    continue;
                  }
                  if (f in Ge) {
                    Hd(this, g, f, u, s, d);
                    continue;
                  }
                  if ("smoothOrigin" === f) {
                    jd(this, g, "smooth", g.smooth, s);
                    continue;
                  }
                  if ("force3D" === f) {
                    g[f] = s;
                    continue;
                  }
                  if ("transform" === f) {
                    Id(this, s, t);
                    continue;
                  }
                }
              else f in b || (f = Ve(f) || f);
              if (
                c ||
                ((o || 0 === o) && (u || 0 === u) && !qe.test(s) && f in b)
              )
                (p = (a + "").substr((u + "").length)) !==
                  (_ =
                    (s + "").substr((o + "").length) ||
                    (f in j.units ? j.units[f] : p)) && (u = ld(t, f, a, _)),
                  (this._pt = new ee(
                    this._pt,
                    c ? g : b,
                    f,
                    u,
                    d ? d * o : o - u,
                    "px" !== _ || !1 === e.autoRound || c ? Mc : Pc
                  )),
                  (this._pt.u = _ || 0),
                  p !== _ && ((this._pt.b = a), (this._pt.r = Oc));
              else if (f in b) nd.call(this, t, f, a, s);
              else {
                if (!(f in t)) {
                  K(f, s);
                  continue;
                }
                this.add(t, f, t[f], s, n, i);
              }
              w.push(f);
            }
        y && te(this);
      },
      get: md,
      aliases: Ne,
      getSetter: function getSetter(t, e, r) {
        return e in ze && e !== Xe && (t._gsap.x || md(t, "x"))
          ? r && le === r
            ? "scale" === e
              ? Vc
              : Uc
            : (le = r || {}) && ("scale" === e ? Wc : Xc)
          : t.style && !q(t.style[e])
          ? Sc
          : ~e.indexOf("-")
          ? Tc
          : Qt(t, e);
      },
    };
  (ne.utils.checkPrefix = Ve),
    (de = $(
      (pe = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent") +
        "," +
        (_e = "rotation,rotationX,rotationY,skewX,skewY") +
        ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
      function (t) {
        ze[t] = 1;
      }
    )),
    $(_e, function (t) {
      (j.units[t] = "deg"), (Ge[t] = 1);
    }),
    (Ne[de[13]] = pe + "," + _e),
    $(
      "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,9:rotateX,10:rotateY",
      function (t) {
        var e = t.split(":");
        Ne[e[1]] = de[e[0]];
      }
    ),
    $(
      "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
      function (t) {
        j.units[t] = "px";
      }
    ),
    ne.registerPlugin(ar);
  var sr = ne.registerPlugin(ar) || ne;
  (e.Back = Ce),
    (e.Bounce = Se),
    (e.CSSPlugin = ar),
    (e.Circ = Fe),
    (e.Cubic = Te),
    (e.Elastic = Me),
    (e.Expo = De),
    (e.Linear = we),
    (e.Power0 = ce),
    (e.Power1 = me),
    (e.Power2 = ge),
    (e.Power3 = ve),
    (e.Power4 = ye),
    (e.Quad = be),
    (e.Quart = xe),
    (e.Quint = ke),
    (e.Sine = Ae),
    (e.SteppedEase = Pe),
    (e.Strong = Oe),
    (e.TimelineLite = Bt),
    (e.TimelineMax = Bt),
    (e.TweenLite = Xt),
    (e.TweenMax = Xt),
    (e.default = sr),
    (e.gsap = sr);
  if (typeof window === "undefined" || window !== e) {
    Object.defineProperty(e, "__esModule", { value: !0 });
  } else {
    delete e.default;
  }
});
//# sourceMappingURL=gsap.min.js.map
