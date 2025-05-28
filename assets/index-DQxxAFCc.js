(function () {
	const t = document.createElement('link').relList;
	if (t && t.supports && t.supports('modulepreload')) return;
	for (const r of document.querySelectorAll('link[rel="modulepreload"]')) i(r);
	new MutationObserver((r) => {
		for (const n of r)
			if (n.type === 'childList')
				for (const s of n.addedNodes)
					s.tagName === 'LINK' && s.rel === 'modulepreload' && i(s);
	}).observe(document, { childList: !0, subtree: !0 });
	function e(r) {
		const n = {};
		return (
			r.integrity && (n.integrity = r.integrity),
			r.referrerPolicy && (n.referrerPolicy = r.referrerPolicy),
			r.crossOrigin === 'use-credentials'
				? (n.credentials = 'include')
				: r.crossOrigin === 'anonymous'
				? (n.credentials = 'omit')
				: (n.credentials = 'same-origin'),
			n
		);
	}
	function i(r) {
		if (r.ep) return;
		r.ep = !0;
		const n = e(r);
		fetch(r.href, n);
	}
})();
function ce(l) {
	if (l === void 0)
		throw new ReferenceError(
			"this hasn't been initialised - super() hasn't been called"
		);
	return l;
}
function io(l, t) {
	(l.prototype = Object.create(t.prototype)),
		(l.prototype.constructor = l),
		(l.__proto__ = t);
}
/*!
 * GSAP 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
 */ var It = {
		autoSleep: 120,
		force3D: 'auto',
		nullTargetWarn: 1,
		units: { lineHeight: '' },
	},
	gi = { duration: 0.5, overwrite: !1, delay: 0 },
	Bn,
	wt,
	nt,
	ae = 1e8,
	St = 1 / ae,
	an = Math.PI * 2,
	Fa = an / 4,
	Ia = 0,
	ro = Math.sqrt,
	Ba = Math.cos,
	za = Math.sin,
	yt = function (t) {
		return typeof t == 'string';
	},
	at = function (t) {
		return typeof t == 'function';
	},
	ge = function (t) {
		return typeof t == 'number';
	},
	zn = function (t) {
		return typeof t > 'u';
	},
	le = function (t) {
		return typeof t == 'object';
	},
	kt = function (t) {
		return t !== !1;
	},
	Yn = function () {
		return typeof window < 'u';
	},
	fr = function (t) {
		return at(t) || yt(t);
	},
	no =
		(typeof ArrayBuffer == 'function' && ArrayBuffer.isView) || function () {},
	Pt = Array.isArray,
	ln = /(?:-?\.?\d|\.)+/gi,
	so = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
	oi = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
	Wr = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
	oo = /[+-]=-?[.\d]+/,
	ao = /[^,'"\[\]\s]+/gi,
	Ya = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
	st,
	re,
	un,
	Xn,
	Bt = {},
	xr = {},
	lo,
	uo = function (t) {
		return (xr = mi(t, Bt)) && Dt;
	},
	$n = function (t, e) {
		return console.warn(
			'Invalid property',
			t,
			'set to',
			e,
			'Missing plugin? gsap.registerPlugin()'
		);
	},
	Gi = function (t, e) {
		return !e && console.warn(t);
	},
	fo = function (t, e) {
		return (t && (Bt[t] = e) && xr && (xr[t] = e)) || Bt;
	},
	ji = function () {
		return 0;
	},
	Xa = { suppressEvents: !0, isStart: !0, kill: !1 },
	dr = { suppressEvents: !0, kill: !1 },
	$a = { suppressEvents: !0 },
	Wn = {},
	Me = [],
	fn = {},
	co,
	Rt = {},
	Vr = {},
	ps = 30,
	_r = [],
	Vn = '',
	Un = function (t) {
		var e = t[0],
			i,
			r;
		if ((le(e) || at(e) || (t = [t]), !(i = (e._gsap || {}).harness))) {
			for (r = _r.length; r-- && !_r[r].targetTest(e); );
			i = _r[r];
		}
		for (r = t.length; r--; )
			(t[r] && (t[r]._gsap || (t[r]._gsap = new Fo(t[r], i)))) ||
				t.splice(r, 1);
		return t;
	},
	We = function (t) {
		return t._gsap || Un(qt(t))[0]._gsap;
	},
	ho = function (t, e, i) {
		return (i = t[e]) && at(i)
			? t[e]()
			: (zn(i) && t.getAttribute && t.getAttribute(e)) || i;
	},
	Mt = function (t, e) {
		return (t = t.split(',')).forEach(e) || t;
	},
	ft = function (t) {
		return Math.round(t * 1e5) / 1e5 || 0;
	},
	_t = function (t) {
		return Math.round(t * 1e7) / 1e7 || 0;
	},
	ui = function (t, e) {
		var i = e.charAt(0),
			r = parseFloat(e.substr(2));
		return (
			(t = parseFloat(t)),
			i === '+' ? t + r : i === '-' ? t - r : i === '*' ? t * r : t / r
		);
	},
	Wa = function (t, e) {
		for (var i = e.length, r = 0; t.indexOf(e[r]) < 0 && ++r < i; );
		return r < i;
	},
	vr = function () {
		var t = Me.length,
			e = Me.slice(0),
			i,
			r;
		for (fn = {}, Me.length = 0, i = 0; i < t; i++)
			(r = e[i]),
				r && r._lazy && (r.render(r._lazy[0], r._lazy[1], !0)._lazy = 0);
	},
	Hn = function (t) {
		return !!(t._initted || t._startAt || t.add);
	},
	_o = function (t, e, i, r) {
		Me.length && !wt && vr(),
			t.render(e, i, !!(wt && e < 0 && Hn(t))),
			Me.length && !wt && vr();
	},
	po = function (t) {
		var e = parseFloat(t);
		return (e || e === 0) && (t + '').match(ao).length < 2
			? e
			: yt(t)
			? t.trim()
			: t;
	},
	go = function (t) {
		return t;
	},
	zt = function (t, e) {
		for (var i in e) i in t || (t[i] = e[i]);
		return t;
	},
	Va = function (t) {
		return function (e, i) {
			for (var r in i)
				r in e || (r === 'duration' && t) || r === 'ease' || (e[r] = i[r]);
		};
	},
	mi = function (t, e) {
		for (var i in e) t[i] = e[i];
		return t;
	},
	gs = function l(t, e) {
		for (var i in e)
			i !== '__proto__' &&
				i !== 'constructor' &&
				i !== 'prototype' &&
				(t[i] = le(e[i]) ? l(t[i] || (t[i] = {}), e[i]) : e[i]);
		return t;
	},
	wr = function (t, e) {
		var i = {},
			r;
		for (r in t) r in e || (i[r] = t[r]);
		return i;
	},
	zi = function (t) {
		var e = t.parent || st,
			i = t.keyframes ? Va(Pt(t.keyframes)) : zt;
		if (kt(t.inherit))
			for (; e; ) i(t, e.vars.defaults), (e = e.parent || e._dp);
		return t;
	},
	Ua = function (t, e) {
		for (var i = t.length, r = i === e.length; r && i-- && t[i] === e[i]; );
		return i < 0;
	},
	mo = function (t, e, i, r, n) {
		var s = t[r],
			o;
		if (n) for (o = e[n]; s && s[n] > o; ) s = s._prev;
		return (
			s ? ((e._next = s._next), (s._next = e)) : ((e._next = t[i]), (t[i] = e)),
			e._next ? (e._next._prev = e) : (t[r] = e),
			(e._prev = s),
			(e.parent = e._dp = t),
			e
		);
	},
	Dr = function (t, e, i, r) {
		i === void 0 && (i = '_first'), r === void 0 && (r = '_last');
		var n = e._prev,
			s = e._next;
		n ? (n._next = s) : t[i] === e && (t[i] = s),
			s ? (s._prev = n) : t[r] === e && (t[r] = n),
			(e._next = e._prev = e.parent = null);
	},
	De = function (t, e) {
		t.parent &&
			(!e || t.parent.autoRemoveChildren) &&
			t.parent.remove &&
			t.parent.remove(t),
			(t._act = 0);
	},
	Ve = function (t, e) {
		if (t && (!e || e._end > t._dur || e._start < 0))
			for (var i = t; i; ) (i._dirty = 1), (i = i.parent);
		return t;
	},
	Ha = function (t) {
		for (var e = t.parent; e && e.parent; )
			(e._dirty = 1), e.totalDuration(), (e = e.parent);
		return t;
	},
	cn = function (t, e, i, r) {
		return (
			t._startAt &&
			(wt
				? t._startAt.revert(dr)
				: (t.vars.immediateRender && !t.vars.autoRevert) ||
				  t._startAt.render(e, !0, r))
		);
	},
	qa = function l(t) {
		return !t || (t._ts && l(t.parent));
	},
	ms = function (t) {
		return t._repeat ? yi(t._tTime, (t = t.duration() + t._rDelay)) * t : 0;
	},
	yi = function (t, e) {
		var i = Math.floor((t = _t(t / e)));
		return t && i === t ? i - 1 : i;
	},
	Tr = function (t, e) {
		return (
			(t - e._start) * e._ts +
			(e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
		);
	},
	Ar = function (t) {
		return (t._end = _t(
			t._start + (t._tDur / Math.abs(t._ts || t._rts || St) || 0)
		));
	},
	Rr = function (t, e) {
		var i = t._dp;
		return (
			i &&
				i.smoothChildTiming &&
				t._ts &&
				((t._start = _t(
					i._time -
						(t._ts > 0
							? e / t._ts
							: ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)
				)),
				Ar(t),
				i._dirty || Ve(i, t)),
			t
		);
	},
	yo = function (t, e) {
		var i;
		if (
			((e._time ||
				(!e._dur && e._initted) ||
				(e._start < t._time && (e._dur || !e.add))) &&
				((i = Tr(t.rawTime(), e)),
				(!e._dur || nr(0, e.totalDuration(), i) - e._tTime > St) &&
					e.render(i, !0)),
			Ve(t, e)._dp && t._initted && t._time >= t._dur && t._ts)
		) {
			if (t._dur < t.duration())
				for (i = t; i._dp; )
					i.rawTime() >= 0 && i.totalTime(i._tTime), (i = i._dp);
			t._zTime = -1e-8;
		}
	},
	se = function (t, e, i, r) {
		return (
			e.parent && De(e),
			(e._start = _t(
				(ge(i) ? i : i || t !== st ? Ht(t, i, e) : t._time) + e._delay
			)),
			(e._end = _t(
				e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)
			)),
			mo(t, e, '_first', '_last', t._sort ? '_start' : 0),
			hn(e) || (t._recent = e),
			r || yo(t, e),
			t._ts < 0 && Rr(t, t._tTime),
			t
		);
	},
	xo = function (t, e) {
		return (
			(Bt.ScrollTrigger || $n('scrollTrigger', e)) &&
			Bt.ScrollTrigger.create(e, t)
		);
	},
	vo = function (t, e, i, r, n) {
		if ((Gn(t, e, n), !t._initted)) return 1;
		if (
			!i &&
			t._pt &&
			!wt &&
			((t._dur && t.vars.lazy !== !1) || (!t._dur && t.vars.lazy)) &&
			co !== Lt.frame
		)
			return Me.push(t), (t._lazy = [n, r]), 1;
	},
	Ga = function l(t) {
		var e = t.parent;
		return e && e._ts && e._initted && !e._lock && (e.rawTime() < 0 || l(e));
	},
	hn = function (t) {
		var e = t.data;
		return e === 'isFromStart' || e === 'isStart';
	},
	ja = function (t, e, i, r) {
		var n = t.ratio,
			s =
				e < 0 ||
				(!e &&
					((!t._start && Ga(t) && !(!t._initted && hn(t))) ||
						((t._ts < 0 || t._dp._ts < 0) && !hn(t))))
					? 0
					: 1,
			o = t._rDelay,
			f = 0,
			u,
			c,
			d;
		if (
			(o &&
				t._repeat &&
				((f = nr(0, t._tDur, e)),
				(c = yi(f, o)),
				t._yoyo && c & 1 && (s = 1 - s),
				c !== yi(t._tTime, o) &&
					((n = 1 - s), t.vars.repeatRefresh && t._initted && t.invalidate())),
			s !== n || wt || r || t._zTime === St || (!e && t._zTime))
		) {
			if (!t._initted && vo(t, e, r, i, f)) return;
			for (
				d = t._zTime,
					t._zTime = e || (i ? St : 0),
					i || (i = e && !d),
					t.ratio = s,
					t._from && (s = 1 - s),
					t._time = 0,
					t._tTime = f,
					u = t._pt;
				u;

			)
				u.r(s, u.d), (u = u._next);
			e < 0 && cn(t, e, i, !0),
				t._onUpdate && !i && Ft(t, 'onUpdate'),
				f && t._repeat && !i && t.parent && Ft(t, 'onRepeat'),
				(e >= t._tDur || e < 0) &&
					t.ratio === s &&
					(s && De(t, 1),
					!i &&
						!wt &&
						(Ft(t, s ? 'onComplete' : 'onReverseComplete', !0),
						t._prom && t._prom()));
		} else t._zTime || (t._zTime = e);
	},
	Ka = function (t, e, i) {
		var r;
		if (i > e)
			for (r = t._first; r && r._start <= i; ) {
				if (r.data === 'isPause' && r._start > e) return r;
				r = r._next;
			}
		else
			for (r = t._last; r && r._start >= i; ) {
				if (r.data === 'isPause' && r._start < e) return r;
				r = r._prev;
			}
	},
	xi = function (t, e, i, r) {
		var n = t._repeat,
			s = _t(e) || 0,
			o = t._tTime / t._tDur;
		return (
			o && !r && (t._time *= s / t._dur),
			(t._dur = s),
			(t._tDur = n ? (n < 0 ? 1e10 : _t(s * (n + 1) + t._rDelay * n)) : s),
			o > 0 && !r && Rr(t, (t._tTime = t._tDur * o)),
			t.parent && Ar(t),
			i || Ve(t.parent, t),
			t
		);
	},
	ys = function (t) {
		return t instanceof Ct ? Ve(t) : xi(t, t._dur);
	},
	Qa = { _start: 0, endTime: ji, totalDuration: ji },
	Ht = function l(t, e, i) {
		var r = t.labels,
			n = t._recent || Qa,
			s = t.duration() >= ae ? n.endTime(!1) : t._dur,
			o,
			f,
			u;
		return yt(e) && (isNaN(e) || e in r)
			? ((f = e.charAt(0)),
			  (u = e.substr(-1) === '%'),
			  (o = e.indexOf('=')),
			  f === '<' || f === '>'
					? (o >= 0 && (e = e.replace(/=/, '')),
					  (f === '<' ? n._start : n.endTime(n._repeat >= 0)) +
							(parseFloat(e.substr(1)) || 0) *
								(u ? (o < 0 ? n : i).totalDuration() / 100 : 1))
					: o < 0
					? (e in r || (r[e] = s), r[e])
					: ((f = parseFloat(e.charAt(o - 1) + e.substr(o + 1))),
					  u && i && (f = (f / 100) * (Pt(i) ? i[0] : i).totalDuration()),
					  o > 1 ? l(t, e.substr(0, o - 1), i) + f : s + f))
			: e == null
			? s
			: +e;
	},
	Yi = function (t, e, i) {
		var r = ge(e[1]),
			n = (r ? 2 : 1) + (t < 2 ? 0 : 1),
			s = e[n],
			o,
			f;
		if ((r && (s.duration = e[1]), (s.parent = i), t)) {
			for (o = s, f = i; f && !('immediateRender' in o); )
				(o = f.vars.defaults || {}), (f = kt(f.vars.inherit) && f.parent);
			(s.immediateRender = kt(o.immediateRender)),
				t < 2 ? (s.runBackwards = 1) : (s.startAt = e[n - 1]);
		}
		return new dt(e[0], s, e[n + 1]);
	},
	Re = function (t, e) {
		return t || t === 0 ? e(t) : e;
	},
	nr = function (t, e, i) {
		return i < t ? t : i > e ? e : i;
	},
	bt = function (t, e) {
		return !yt(t) || !(e = Ya.exec(t)) ? '' : e[1];
	},
	Za = function (t, e, i) {
		return Re(i, function (r) {
			return nr(t, e, r);
		});
	},
	dn = [].slice,
	wo = function (t, e) {
		return (
			t &&
			le(t) &&
			'length' in t &&
			((!e && !t.length) || (t.length - 1 in t && le(t[0]))) &&
			!t.nodeType &&
			t !== re
		);
	},
	Ja = function (t, e, i) {
		return (
			i === void 0 && (i = []),
			t.forEach(function (r) {
				var n;
				return (yt(r) && !e) || wo(r, 1)
					? (n = i).push.apply(n, qt(r))
					: i.push(r);
			}) || i
		);
	},
	qt = function (t, e, i) {
		return nt && !e && nt.selector
			? nt.selector(t)
			: yt(t) && !i && (un || !vi())
			? dn.call((e || Xn).querySelectorAll(t), 0)
			: Pt(t)
			? Ja(t, i)
			: wo(t)
			? dn.call(t, 0)
			: t
			? [t]
			: [];
	},
	_n = function (t) {
		return (
			(t = qt(t)[0] || Gi('Invalid scope') || {}),
			function (e) {
				var i = t.current || t.nativeElement || t;
				return qt(
					e,
					i.querySelectorAll
						? i
						: i === t
						? Gi('Invalid scope') || Xn.createElement('div')
						: t
				);
			}
		);
	},
	To = function (t) {
		return t.sort(function () {
			return 0.5 - Math.random();
		});
	},
	bo = function (t) {
		if (at(t)) return t;
		var e = le(t) ? t : { each: t },
			i = Ue(e.ease),
			r = e.from || 0,
			n = parseFloat(e.base) || 0,
			s = {},
			o = r > 0 && r < 1,
			f = isNaN(r) || o,
			u = e.axis,
			c = r,
			d = r;
		return (
			yt(r)
				? (c = d = { center: 0.5, edges: 0.5, end: 1 }[r] || 0)
				: !o && f && ((c = r[0]), (d = r[1])),
			function (_, a, p) {
				var h = (p || e).length,
					m = s[h],
					v,
					T,
					b,
					S,
					y,
					P,
					k,
					w,
					C;
				if (!m) {
					if (((C = e.grid === 'auto' ? 0 : (e.grid || [1, ae])[1]), !C)) {
						for (
							k = -1e8;
							k < (k = p[C++].getBoundingClientRect().left) && C < h;

						);
						C < h && C--;
					}
					for (
						m = s[h] = [],
							v = f ? Math.min(C, h) * c - 0.5 : r % C,
							T = C === ae ? 0 : f ? (h * d) / C - 0.5 : (r / C) | 0,
							k = 0,
							w = ae,
							P = 0;
						P < h;
						P++
					)
						(b = (P % C) - v),
							(S = T - ((P / C) | 0)),
							(m[P] = y = u ? Math.abs(u === 'y' ? S : b) : ro(b * b + S * S)),
							y > k && (k = y),
							y < w && (w = y);
					r === 'random' && To(m),
						(m.max = k - w),
						(m.min = w),
						(m.v = h =
							(parseFloat(e.amount) ||
								parseFloat(e.each) *
									(C > h
										? h - 1
										: u
										? u === 'y'
											? h / C
											: C
										: Math.max(C, h / C)) ||
								0) * (r === 'edges' ? -1 : 1)),
						(m.b = h < 0 ? n - h : n),
						(m.u = bt(e.amount || e.each) || 0),
						(i = i && h < 0 ? Ro(i) : i);
				}
				return (
					(h = (m[_] - m.min) / m.max || 0),
					_t(m.b + (i ? i(h) : h) * m.v) + m.u
				);
			}
		);
	},
	pn = function (t) {
		var e = Math.pow(10, ((t + '').split('.')[1] || '').length);
		return function (i) {
			var r = _t(Math.round(parseFloat(i) / t) * t * e);
			return (r - (r % 1)) / e + (ge(i) ? 0 : bt(i));
		};
	},
	So = function (t, e) {
		var i = Pt(t),
			r,
			n;
		return (
			!i &&
				le(t) &&
				((r = i = t.radius || ae),
				t.values
					? ((t = qt(t.values)), (n = !ge(t[0])) && (r *= r))
					: (t = pn(t.increment))),
			Re(
				e,
				i
					? at(t)
						? function (s) {
								return (n = t(s)), Math.abs(n - s) <= r ? n : s;
						  }
						: function (s) {
								for (
									var o = parseFloat(n ? s.x : s),
										f = parseFloat(n ? s.y : 0),
										u = ae,
										c = 0,
										d = t.length,
										_,
										a;
									d--;

								)
									n
										? ((_ = t[d].x - o), (a = t[d].y - f), (_ = _ * _ + a * a))
										: (_ = Math.abs(t[d] - o)),
										_ < u && ((u = _), (c = d));
								return (
									(c = !r || u <= r ? t[c] : s),
									n || c === s || ge(s) ? c : c + bt(s)
								);
						  }
					: pn(t)
			)
		);
	},
	Po = function (t, e, i, r) {
		return Re(Pt(t) ? !e : i === !0 ? !!(i = 0) : !r, function () {
			return Pt(t)
				? t[~~(Math.random() * t.length)]
				: (i = i || 1e-5) &&
						(r = i < 1 ? Math.pow(10, (i + '').length - 2) : 1) &&
						Math.floor(
							Math.round((t - i / 2 + Math.random() * (e - t + i * 0.99)) / i) *
								i *
								r
						) / r;
		});
	},
	tl = function () {
		for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
			e[i] = arguments[i];
		return function (r) {
			return e.reduce(function (n, s) {
				return s(n);
			}, r);
		};
	},
	el = function (t, e) {
		return function (i) {
			return t(parseFloat(i)) + (e || bt(i));
		};
	},
	il = function (t, e, i) {
		return ko(t, e, 0, 1, i);
	},
	Co = function (t, e, i) {
		return Re(i, function (r) {
			return t[~~e(r)];
		});
	},
	rl = function l(t, e, i) {
		var r = e - t;
		return Pt(t)
			? Co(t, l(0, t.length), e)
			: Re(i, function (n) {
					return ((r + ((n - t) % r)) % r) + t;
			  });
	},
	nl = function l(t, e, i) {
		var r = e - t,
			n = r * 2;
		return Pt(t)
			? Co(t, l(0, t.length - 1), e)
			: Re(i, function (s) {
					return (s = (n + ((s - t) % n)) % n || 0), t + (s > r ? n - s : s);
			  });
	},
	Ki = function (t) {
		for (var e = 0, i = '', r, n, s, o; ~(r = t.indexOf('random(', e)); )
			(s = t.indexOf(')', r)),
				(o = t.charAt(r + 7) === '['),
				(n = t.substr(r + 7, s - r - 7).match(o ? ao : ln)),
				(i +=
					t.substr(e, r - e) + Po(o ? n : +n[0], o ? 0 : +n[1], +n[2] || 1e-5)),
				(e = s + 1);
		return i + t.substr(e, t.length - e);
	},
	ko = function (t, e, i, r, n) {
		var s = e - t,
			o = r - i;
		return Re(n, function (f) {
			return i + (((f - t) / s) * o || 0);
		});
	},
	sl = function l(t, e, i, r) {
		var n = isNaN(t + e)
			? 0
			: function (a) {
					return (1 - a) * t + a * e;
			  };
		if (!n) {
			var s = yt(t),
				o = {},
				f,
				u,
				c,
				d,
				_;
			if ((i === !0 && (r = 1) && (i = null), s))
				(t = { p: t }), (e = { p: e });
			else if (Pt(t) && !Pt(e)) {
				for (c = [], d = t.length, _ = d - 2, u = 1; u < d; u++)
					c.push(l(t[u - 1], t[u]));
				d--,
					(n = function (p) {
						p *= d;
						var h = Math.min(_, ~~p);
						return c[h](p - h);
					}),
					(i = e);
			} else r || (t = mi(Pt(t) ? [] : {}, t));
			if (!c) {
				for (f in e) qn.call(o, t, f, 'get', e[f]);
				n = function (p) {
					return Qn(p, o) || (s ? t.p : t);
				};
			}
		}
		return Re(i, n);
	},
	xs = function (t, e, i) {
		var r = t.labels,
			n = ae,
			s,
			o,
			f;
		for (s in r)
			(o = r[s] - e),
				o < 0 == !!i && o && n > (o = Math.abs(o)) && ((f = s), (n = o));
		return f;
	},
	Ft = function (t, e, i) {
		var r = t.vars,
			n = r[e],
			s = nt,
			o = t._ctx,
			f,
			u,
			c;
		if (n)
			return (
				(f = r[e + 'Params']),
				(u = r.callbackScope || t),
				i && Me.length && vr(),
				o && (nt = o),
				(c = f ? n.apply(u, f) : n.call(u)),
				(nt = s),
				c
			);
	},
	Ai = function (t) {
		return (
			De(t),
			t.scrollTrigger && t.scrollTrigger.kill(!!wt),
			t.progress() < 1 && Ft(t, 'onInterrupt'),
			t
		);
	},
	ai,
	Mo = [],
	Eo = function (t) {
		if (t)
			if (((t = (!t.name && t.default) || t), Yn() || t.headless)) {
				var e = t.name,
					i = at(t),
					r =
						e && !i && t.init
							? function () {
									this._props = [];
							  }
							: t,
					n = {
						init: ji,
						render: Qn,
						add: qn,
						kill: wl,
						modifier: vl,
						rawVars: 0,
					},
					s = {
						targetTest: 0,
						get: 0,
						getSetter: Kn,
						aliases: {},
						register: 0,
					};
				if ((vi(), t !== r)) {
					if (Rt[e]) return;
					zt(r, zt(wr(t, n), s)),
						mi(r.prototype, mi(n, wr(t, s))),
						(Rt[(r.prop = e)] = r),
						t.targetTest && (_r.push(r), (Wn[e] = 1)),
						(e =
							(e === 'css' ? 'CSS' : e.charAt(0).toUpperCase() + e.substr(1)) +
							'Plugin');
				}
				fo(e, r), t.register && t.register(Dt, r, Et);
			} else Mo.push(t);
	},
	et = 255,
	Ri = {
		aqua: [0, et, et],
		lime: [0, et, 0],
		silver: [192, 192, 192],
		black: [0, 0, 0],
		maroon: [128, 0, 0],
		teal: [0, 128, 128],
		blue: [0, 0, et],
		navy: [0, 0, 128],
		white: [et, et, et],
		olive: [128, 128, 0],
		yellow: [et, et, 0],
		orange: [et, 165, 0],
		gray: [128, 128, 128],
		purple: [128, 0, 128],
		green: [0, 128, 0],
		red: [et, 0, 0],
		pink: [et, 192, 203],
		cyan: [0, et, et],
		transparent: [et, et, et, 0],
	},
	Ur = function (t, e, i) {
		return (
			(t += t < 0 ? 1 : t > 1 ? -1 : 0),
			((t * 6 < 1
				? e + (i - e) * t * 6
				: t < 0.5
				? i
				: t * 3 < 2
				? e + (i - e) * (2 / 3 - t) * 6
				: e) *
				et +
				0.5) |
				0
		);
	},
	Oo = function (t, e, i) {
		var r = t ? (ge(t) ? [t >> 16, (t >> 8) & et, t & et] : 0) : Ri.black,
			n,
			s,
			o,
			f,
			u,
			c,
			d,
			_,
			a,
			p;
		if (!r) {
			if ((t.substr(-1) === ',' && (t = t.substr(0, t.length - 1)), Ri[t]))
				r = Ri[t];
			else if (t.charAt(0) === '#') {
				if (
					(t.length < 6 &&
						((n = t.charAt(1)),
						(s = t.charAt(2)),
						(o = t.charAt(3)),
						(t =
							'#' +
							n +
							n +
							s +
							s +
							o +
							o +
							(t.length === 5 ? t.charAt(4) + t.charAt(4) : ''))),
					t.length === 9)
				)
					return (
						(r = parseInt(t.substr(1, 6), 16)),
						[r >> 16, (r >> 8) & et, r & et, parseInt(t.substr(7), 16) / 255]
					);
				(t = parseInt(t.substr(1), 16)), (r = [t >> 16, (t >> 8) & et, t & et]);
			} else if (t.substr(0, 3) === 'hsl') {
				if (((r = p = t.match(ln)), !e))
					(f = (+r[0] % 360) / 360),
						(u = +r[1] / 100),
						(c = +r[2] / 100),
						(s = c <= 0.5 ? c * (u + 1) : c + u - c * u),
						(n = c * 2 - s),
						r.length > 3 && (r[3] *= 1),
						(r[0] = Ur(f + 1 / 3, n, s)),
						(r[1] = Ur(f, n, s)),
						(r[2] = Ur(f - 1 / 3, n, s));
				else if (~t.indexOf('='))
					return (r = t.match(so)), i && r.length < 4 && (r[3] = 1), r;
			} else r = t.match(ln) || Ri.transparent;
			r = r.map(Number);
		}
		return (
			e &&
				!p &&
				((n = r[0] / et),
				(s = r[1] / et),
				(o = r[2] / et),
				(d = Math.max(n, s, o)),
				(_ = Math.min(n, s, o)),
				(c = (d + _) / 2),
				d === _
					? (f = u = 0)
					: ((a = d - _),
					  (u = c > 0.5 ? a / (2 - d - _) : a / (d + _)),
					  (f =
							d === n
								? (s - o) / a + (s < o ? 6 : 0)
								: d === s
								? (o - n) / a + 2
								: (n - s) / a + 4),
					  (f *= 60)),
				(r[0] = ~~(f + 0.5)),
				(r[1] = ~~(u * 100 + 0.5)),
				(r[2] = ~~(c * 100 + 0.5))),
			i && r.length < 4 && (r[3] = 1),
			r
		);
	},
	Do = function (t) {
		var e = [],
			i = [],
			r = -1;
		return (
			t.split(Ee).forEach(function (n) {
				var s = n.match(oi) || [];
				e.push.apply(e, s), i.push((r += s.length + 1));
			}),
			(e.c = i),
			e
		);
	},
	vs = function (t, e, i) {
		var r = '',
			n = (t + r).match(Ee),
			s = e ? 'hsla(' : 'rgba(',
			o = 0,
			f,
			u,
			c,
			d;
		if (!n) return t;
		if (
			((n = n.map(function (_) {
				return (
					(_ = Oo(_, e, 1)) &&
					s +
						(e ? _[0] + ',' + _[1] + '%,' + _[2] + '%,' + _[3] : _.join(',')) +
						')'
				);
			})),
			i && ((c = Do(t)), (f = i.c), f.join(r) !== c.c.join(r)))
		)
			for (u = t.replace(Ee, '1').split(oi), d = u.length - 1; o < d; o++)
				r +=
					u[o] +
					(~f.indexOf(o)
						? n.shift() || s + '0,0,0,0)'
						: (c.length ? c : n.length ? n : i).shift());
		if (!u)
			for (u = t.split(Ee), d = u.length - 1; o < d; o++) r += u[o] + n[o];
		return r + u[d];
	},
	Ee = (function () {
		var l =
				'(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b',
			t;
		for (t in Ri) l += '|' + t + '\\b';
		return new RegExp(l + ')', 'gi');
	})(),
	ol = /hsl[a]?\(/,
	Ao = function (t) {
		var e = t.join(' '),
			i;
		if (((Ee.lastIndex = 0), Ee.test(e)))
			return (
				(i = ol.test(e)),
				(t[1] = vs(t[1], i)),
				(t[0] = vs(t[0], i, Do(t[1]))),
				!0
			);
	},
	Qi,
	Lt = (function () {
		var l = Date.now,
			t = 500,
			e = 33,
			i = l(),
			r = i,
			n = 1e3 / 240,
			s = n,
			o = [],
			f,
			u,
			c,
			d,
			_,
			a,
			p = function h(m) {
				var v = l() - r,
					T = m === !0,
					b,
					S,
					y,
					P;
				if (
					((v > t || v < 0) && (i += v - e),
					(r += v),
					(y = r - i),
					(b = y - s),
					(b > 0 || T) &&
						((P = ++d.frame),
						(_ = y - d.time * 1e3),
						(d.time = y = y / 1e3),
						(s += b + (b >= n ? 4 : n - b)),
						(S = 1)),
					T || (f = u(h)),
					S)
				)
					for (a = 0; a < o.length; a++) o[a](y, _, P, m);
			};
		return (
			(d = {
				time: 0,
				frame: 0,
				tick: function () {
					p(!0);
				},
				deltaRatio: function (m) {
					return _ / (1e3 / (m || 60));
				},
				wake: function () {
					lo &&
						(!un &&
							Yn() &&
							((re = un = window),
							(Xn = re.document || {}),
							(Bt.gsap = Dt),
							(re.gsapVersions || (re.gsapVersions = [])).push(Dt.version),
							uo(xr || re.GreenSockGlobals || (!re.gsap && re) || {}),
							Mo.forEach(Eo)),
						(c = typeof requestAnimationFrame < 'u' && requestAnimationFrame),
						f && d.sleep(),
						(u =
							c ||
							function (m) {
								return setTimeout(m, (s - d.time * 1e3 + 1) | 0);
							}),
						(Qi = 1),
						p(2));
				},
				sleep: function () {
					(c ? cancelAnimationFrame : clearTimeout)(f), (Qi = 0), (u = ji);
				},
				lagSmoothing: function (m, v) {
					(t = m || 1 / 0), (e = Math.min(v || 33, t));
				},
				fps: function (m) {
					(n = 1e3 / (m || 240)), (s = d.time * 1e3 + n);
				},
				add: function (m, v, T) {
					var b = v
						? function (S, y, P, k) {
								m(S, y, P, k), d.remove(b);
						  }
						: m;
					return d.remove(m), o[T ? 'unshift' : 'push'](b), vi(), b;
				},
				remove: function (m, v) {
					~(v = o.indexOf(m)) && o.splice(v, 1) && a >= v && a--;
				},
				_listeners: o,
			}),
			d
		);
	})(),
	vi = function () {
		return !Qi && Lt.wake();
	},
	H = {},
	al = /^[\d.\-M][\d.\-,\s]/,
	ll = /["']/g,
	ul = function (t) {
		for (
			var e = {},
				i = t.substr(1, t.length - 3).split(':'),
				r = i[0],
				n = 1,
				s = i.length,
				o,
				f,
				u;
			n < s;
			n++
		)
			(f = i[n]),
				(o = n !== s - 1 ? f.lastIndexOf(',') : f.length),
				(u = f.substr(0, o)),
				(e[r] = isNaN(u) ? u.replace(ll, '').trim() : +u),
				(r = f.substr(o + 1).trim());
		return e;
	},
	fl = function (t) {
		var e = t.indexOf('(') + 1,
			i = t.indexOf(')'),
			r = t.indexOf('(', e);
		return t.substring(e, ~r && r < i ? t.indexOf(')', i + 1) : i);
	},
	cl = function (t) {
		var e = (t + '').split('('),
			i = H[e[0]];
		return i && e.length > 1 && i.config
			? i.config.apply(
					null,
					~t.indexOf('{') ? [ul(e[1])] : fl(t).split(',').map(po)
			  )
			: H._CE && al.test(t)
			? H._CE('', t)
			: i;
	},
	Ro = function (t) {
		return function (e) {
			return 1 - t(1 - e);
		};
	},
	Lo = function l(t, e) {
		for (var i = t._first, r; i; )
			i instanceof Ct
				? l(i, e)
				: i.vars.yoyoEase &&
				  (!i._yoyo || !i._repeat) &&
				  i._yoyo !== e &&
				  (i.timeline
						? l(i.timeline, e)
						: ((r = i._ease),
						  (i._ease = i._yEase),
						  (i._yEase = r),
						  (i._yoyo = e))),
				(i = i._next);
	},
	Ue = function (t, e) {
		return (t && (at(t) ? t : H[t] || cl(t))) || e;
	},
	Qe = function (t, e, i, r) {
		i === void 0 &&
			(i = function (f) {
				return 1 - e(1 - f);
			}),
			r === void 0 &&
				(r = function (f) {
					return f < 0.5 ? e(f * 2) / 2 : 1 - e((1 - f) * 2) / 2;
				});
		var n = { easeIn: e, easeOut: i, easeInOut: r },
			s;
		return (
			Mt(t, function (o) {
				(H[o] = Bt[o] = n), (H[(s = o.toLowerCase())] = i);
				for (var f in n)
					H[
						s + (f === 'easeIn' ? '.in' : f === 'easeOut' ? '.out' : '.inOut')
					] = H[o + '.' + f] = n[f];
			}),
			n
		);
	},
	No = function (t) {
		return function (e) {
			return e < 0.5 ? (1 - t(1 - e * 2)) / 2 : 0.5 + t((e - 0.5) * 2) / 2;
		};
	},
	Hr = function l(t, e, i) {
		var r = e >= 1 ? e : 1,
			n = (i || (t ? 0.3 : 0.45)) / (e < 1 ? e : 1),
			s = (n / an) * (Math.asin(1 / r) || 0),
			o = function (c) {
				return c === 1 ? 1 : r * Math.pow(2, -10 * c) * za((c - s) * n) + 1;
			},
			f =
				t === 'out'
					? o
					: t === 'in'
					? function (u) {
							return 1 - o(1 - u);
					  }
					: No(o);
		return (
			(n = an / n),
			(f.config = function (u, c) {
				return l(t, u, c);
			}),
			f
		);
	},
	qr = function l(t, e) {
		e === void 0 && (e = 1.70158);
		var i = function (s) {
				return s ? --s * s * ((e + 1) * s + e) + 1 : 0;
			},
			r =
				t === 'out'
					? i
					: t === 'in'
					? function (n) {
							return 1 - i(1 - n);
					  }
					: No(i);
		return (
			(r.config = function (n) {
				return l(t, n);
			}),
			r
		);
	};
Mt('Linear,Quad,Cubic,Quart,Quint,Strong', function (l, t) {
	var e = t < 5 ? t + 1 : t;
	Qe(
		l + ',Power' + (e - 1),
		t
			? function (i) {
					return Math.pow(i, e);
			  }
			: function (i) {
					return i;
			  },
		function (i) {
			return 1 - Math.pow(1 - i, e);
		},
		function (i) {
			return i < 0.5
				? Math.pow(i * 2, e) / 2
				: 1 - Math.pow((1 - i) * 2, e) / 2;
		}
	);
});
H.Linear.easeNone = H.none = H.Linear.easeIn;
Qe('Elastic', Hr('in'), Hr('out'), Hr());
(function (l, t) {
	var e = 1 / t,
		i = 2 * e,
		r = 2.5 * e,
		n = function (o) {
			return o < e
				? l * o * o
				: o < i
				? l * Math.pow(o - 1.5 / t, 2) + 0.75
				: o < r
				? l * (o -= 2.25 / t) * o + 0.9375
				: l * Math.pow(o - 2.625 / t, 2) + 0.984375;
		};
	Qe(
		'Bounce',
		function (s) {
			return 1 - n(1 - s);
		},
		n
	);
})(7.5625, 2.75);
Qe('Expo', function (l) {
	return Math.pow(2, 10 * (l - 1)) * l + l * l * l * l * l * l * (1 - l);
});
Qe('Circ', function (l) {
	return -(ro(1 - l * l) - 1);
});
Qe('Sine', function (l) {
	return l === 1 ? 1 : -Ba(l * Fa) + 1;
});
Qe('Back', qr('in'), qr('out'), qr());
H.SteppedEase =
	H.steps =
	Bt.SteppedEase =
		{
			config: function (t, e) {
				t === void 0 && (t = 1);
				var i = 1 / t,
					r = t + (e ? 0 : 1),
					n = e ? 1 : 0,
					s = 1 - St;
				return function (o) {
					return (((r * nr(0, s, o)) | 0) + n) * i;
				};
			},
		};
gi.ease = H['quad.out'];
Mt(
	'onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt',
	function (l) {
		return (Vn += l + ',' + l + 'Params,');
	}
);
var Fo = function (t, e) {
		(this.id = Ia++),
			(t._gsap = this),
			(this.target = t),
			(this.harness = e),
			(this.get = e ? e.get : ho),
			(this.set = e ? e.getSetter : Kn);
	},
	Zi = (function () {
		function l(e) {
			(this.vars = e),
				(this._delay = +e.delay || 0),
				(this._repeat = e.repeat === 1 / 0 ? -2 : e.repeat || 0) &&
					((this._rDelay = e.repeatDelay || 0),
					(this._yoyo = !!e.yoyo || !!e.yoyoEase)),
				(this._ts = 1),
				xi(this, +e.duration, 1, 1),
				(this.data = e.data),
				nt && ((this._ctx = nt), nt.data.push(this)),
				Qi || Lt.wake();
		}
		var t = l.prototype;
		return (
			(t.delay = function (i) {
				return i || i === 0
					? (this.parent &&
							this.parent.smoothChildTiming &&
							this.startTime(this._start + i - this._delay),
					  (this._delay = i),
					  this)
					: this._delay;
			}),
			(t.duration = function (i) {
				return arguments.length
					? this.totalDuration(
							this._repeat > 0 ? i + (i + this._rDelay) * this._repeat : i
					  )
					: this.totalDuration() && this._dur;
			}),
			(t.totalDuration = function (i) {
				return arguments.length
					? ((this._dirty = 0),
					  xi(
							this,
							this._repeat < 0
								? i
								: (i - this._repeat * this._rDelay) / (this._repeat + 1)
					  ))
					: this._tDur;
			}),
			(t.totalTime = function (i, r) {
				if ((vi(), !arguments.length)) return this._tTime;
				var n = this._dp;
				if (n && n.smoothChildTiming && this._ts) {
					for (Rr(this, i), !n._dp || n.parent || yo(n, this); n && n.parent; )
						n.parent._time !==
							n._start +
								(n._ts >= 0
									? n._tTime / n._ts
									: (n.totalDuration() - n._tTime) / -n._ts) &&
							n.totalTime(n._tTime, !0),
							(n = n.parent);
					!this.parent &&
						this._dp.autoRemoveChildren &&
						((this._ts > 0 && i < this._tDur) ||
							(this._ts < 0 && i > 0) ||
							(!this._tDur && !i)) &&
						se(this._dp, this, this._start - this._delay);
				}
				return (
					(this._tTime !== i ||
						(!this._dur && !r) ||
						(this._initted && Math.abs(this._zTime) === St) ||
						(!i && !this._initted && (this.add || this._ptLookup))) &&
						(this._ts || (this._pTime = i), _o(this, i, r)),
					this
				);
			}),
			(t.time = function (i, r) {
				return arguments.length
					? this.totalTime(
							Math.min(this.totalDuration(), i + ms(this)) %
								(this._dur + this._rDelay) || (i ? this._dur : 0),
							r
					  )
					: this._time;
			}),
			(t.totalProgress = function (i, r) {
				return arguments.length
					? this.totalTime(this.totalDuration() * i, r)
					: this.totalDuration()
					? Math.min(1, this._tTime / this._tDur)
					: this.rawTime() >= 0 && this._initted
					? 1
					: 0;
			}),
			(t.progress = function (i, r) {
				return arguments.length
					? this.totalTime(
							this.duration() *
								(this._yoyo && !(this.iteration() & 1) ? 1 - i : i) +
								ms(this),
							r
					  )
					: this.duration()
					? Math.min(1, this._time / this._dur)
					: this.rawTime() > 0
					? 1
					: 0;
			}),
			(t.iteration = function (i, r) {
				var n = this.duration() + this._rDelay;
				return arguments.length
					? this.totalTime(this._time + (i - 1) * n, r)
					: this._repeat
					? yi(this._tTime, n) + 1
					: 1;
			}),
			(t.timeScale = function (i, r) {
				if (!arguments.length) return this._rts === -1e-8 ? 0 : this._rts;
				if (this._rts === i) return this;
				var n =
					this.parent && this._ts ? Tr(this.parent._time, this) : this._tTime;
				return (
					(this._rts = +i || 0),
					(this._ts = this._ps || i === -1e-8 ? 0 : this._rts),
					this.totalTime(
						nr(-Math.abs(this._delay), this.totalDuration(), n),
						r !== !1
					),
					Ar(this),
					Ha(this)
				);
			}),
			(t.paused = function (i) {
				return arguments.length
					? (this._ps !== i &&
							((this._ps = i),
							i
								? ((this._pTime =
										this._tTime || Math.max(-this._delay, this.rawTime())),
								  (this._ts = this._act = 0))
								: (vi(),
								  (this._ts = this._rts),
								  this.totalTime(
										this.parent && !this.parent.smoothChildTiming
											? this.rawTime()
											: this._tTime || this._pTime,
										this.progress() === 1 &&
											Math.abs(this._zTime) !== St &&
											(this._tTime -= St)
								  ))),
					  this)
					: this._ps;
			}),
			(t.startTime = function (i) {
				if (arguments.length) {
					this._start = i;
					var r = this.parent || this._dp;
					return (
						r && (r._sort || !this.parent) && se(r, this, i - this._delay), this
					);
				}
				return this._start;
			}),
			(t.endTime = function (i) {
				return (
					this._start +
					(kt(i) ? this.totalDuration() : this.duration()) /
						Math.abs(this._ts || 1)
				);
			}),
			(t.rawTime = function (i) {
				var r = this.parent || this._dp;
				return r
					? i &&
					  (!this._ts ||
							(this._repeat && this._time && this.totalProgress() < 1))
						? this._tTime % (this._dur + this._rDelay)
						: this._ts
						? Tr(r.rawTime(i), this)
						: this._tTime
					: this._tTime;
			}),
			(t.revert = function (i) {
				i === void 0 && (i = $a);
				var r = wt;
				return (
					(wt = i),
					Hn(this) &&
						(this.timeline && this.timeline.revert(i),
						this.totalTime(-0.01, i.suppressEvents)),
					this.data !== 'nested' && i.kill !== !1 && this.kill(),
					(wt = r),
					this
				);
			}),
			(t.globalTime = function (i) {
				for (var r = this, n = arguments.length ? i : r.rawTime(); r; )
					(n = r._start + n / (Math.abs(r._ts) || 1)), (r = r._dp);
				return !this.parent && this._sat ? this._sat.globalTime(i) : n;
			}),
			(t.repeat = function (i) {
				return arguments.length
					? ((this._repeat = i === 1 / 0 ? -2 : i), ys(this))
					: this._repeat === -2
					? 1 / 0
					: this._repeat;
			}),
			(t.repeatDelay = function (i) {
				if (arguments.length) {
					var r = this._time;
					return (this._rDelay = i), ys(this), r ? this.time(r) : this;
				}
				return this._rDelay;
			}),
			(t.yoyo = function (i) {
				return arguments.length ? ((this._yoyo = i), this) : this._yoyo;
			}),
			(t.seek = function (i, r) {
				return this.totalTime(Ht(this, i), kt(r));
			}),
			(t.restart = function (i, r) {
				return (
					this.play().totalTime(i ? -this._delay : 0, kt(r)),
					this._dur || (this._zTime = -1e-8),
					this
				);
			}),
			(t.play = function (i, r) {
				return i != null && this.seek(i, r), this.reversed(!1).paused(!1);
			}),
			(t.reverse = function (i, r) {
				return (
					i != null && this.seek(i || this.totalDuration(), r),
					this.reversed(!0).paused(!1)
				);
			}),
			(t.pause = function (i, r) {
				return i != null && this.seek(i, r), this.paused(!0);
			}),
			(t.resume = function () {
				return this.paused(!1);
			}),
			(t.reversed = function (i) {
				return arguments.length
					? (!!i !== this.reversed() &&
							this.timeScale(-this._rts || (i ? -1e-8 : 0)),
					  this)
					: this._rts < 0;
			}),
			(t.invalidate = function () {
				return (this._initted = this._act = 0), (this._zTime = -1e-8), this;
			}),
			(t.isActive = function () {
				var i = this.parent || this._dp,
					r = this._start,
					n;
				return !!(
					!i ||
					(this._ts &&
						this._initted &&
						i.isActive() &&
						(n = i.rawTime(!0)) >= r &&
						n < this.endTime(!0) - St)
				);
			}),
			(t.eventCallback = function (i, r, n) {
				var s = this.vars;
				return arguments.length > 1
					? (r
							? ((s[i] = r),
							  n && (s[i + 'Params'] = n),
							  i === 'onUpdate' && (this._onUpdate = r))
							: delete s[i],
					  this)
					: s[i];
			}),
			(t.then = function (i) {
				var r = this;
				return new Promise(function (n) {
					var s = at(i) ? i : go,
						o = function () {
							var u = r.then;
							(r.then = null),
								at(s) && (s = s(r)) && (s.then || s === r) && (r.then = u),
								n(s),
								(r.then = u);
						};
					(r._initted && r.totalProgress() === 1 && r._ts >= 0) ||
					(!r._tTime && r._ts < 0)
						? o()
						: (r._prom = o);
				});
			}),
			(t.kill = function () {
				Ai(this);
			}),
			l
		);
	})();
zt(Zi.prototype, {
	_time: 0,
	_start: 0,
	_end: 0,
	_tTime: 0,
	_tDur: 0,
	_dirty: 0,
	_repeat: 0,
	_yoyo: !1,
	parent: null,
	_initted: !1,
	_rDelay: 0,
	_ts: 1,
	_dp: 0,
	ratio: 0,
	_zTime: -1e-8,
	_prom: 0,
	_ps: !1,
	_rts: 1,
});
var Ct = (function (l) {
	io(t, l);
	function t(i, r) {
		var n;
		return (
			i === void 0 && (i = {}),
			(n = l.call(this, i) || this),
			(n.labels = {}),
			(n.smoothChildTiming = !!i.smoothChildTiming),
			(n.autoRemoveChildren = !!i.autoRemoveChildren),
			(n._sort = kt(i.sortChildren)),
			st && se(i.parent || st, ce(n), r),
			i.reversed && n.reverse(),
			i.paused && n.paused(!0),
			i.scrollTrigger && xo(ce(n), i.scrollTrigger),
			n
		);
	}
	var e = t.prototype;
	return (
		(e.to = function (r, n, s) {
			return Yi(0, arguments, this), this;
		}),
		(e.from = function (r, n, s) {
			return Yi(1, arguments, this), this;
		}),
		(e.fromTo = function (r, n, s, o) {
			return Yi(2, arguments, this), this;
		}),
		(e.set = function (r, n, s) {
			return (
				(n.duration = 0),
				(n.parent = this),
				zi(n).repeatDelay || (n.repeat = 0),
				(n.immediateRender = !!n.immediateRender),
				new dt(r, n, Ht(this, s), 1),
				this
			);
		}),
		(e.call = function (r, n, s) {
			return se(this, dt.delayedCall(0, r, n), s);
		}),
		(e.staggerTo = function (r, n, s, o, f, u, c) {
			return (
				(s.duration = n),
				(s.stagger = s.stagger || o),
				(s.onComplete = u),
				(s.onCompleteParams = c),
				(s.parent = this),
				new dt(r, s, Ht(this, f)),
				this
			);
		}),
		(e.staggerFrom = function (r, n, s, o, f, u, c) {
			return (
				(s.runBackwards = 1),
				(zi(s).immediateRender = kt(s.immediateRender)),
				this.staggerTo(r, n, s, o, f, u, c)
			);
		}),
		(e.staggerFromTo = function (r, n, s, o, f, u, c, d) {
			return (
				(o.startAt = s),
				(zi(o).immediateRender = kt(o.immediateRender)),
				this.staggerTo(r, n, o, f, u, c, d)
			);
		}),
		(e.render = function (r, n, s) {
			var o = this._time,
				f = this._dirty ? this.totalDuration() : this._tDur,
				u = this._dur,
				c = r <= 0 ? 0 : _t(r),
				d = this._zTime < 0 != r < 0 && (this._initted || !u),
				_,
				a,
				p,
				h,
				m,
				v,
				T,
				b,
				S,
				y,
				P,
				k;
			if (
				(this !== st && c > f && r >= 0 && (c = f), c !== this._tTime || s || d)
			) {
				if (
					(o !== this._time &&
						u &&
						((c += this._time - o), (r += this._time - o)),
					(_ = c),
					(S = this._start),
					(b = this._ts),
					(v = !b),
					d && (u || (o = this._zTime), (r || !n) && (this._zTime = r)),
					this._repeat)
				) {
					if (
						((P = this._yoyo),
						(m = u + this._rDelay),
						this._repeat < -1 && r < 0)
					)
						return this.totalTime(m * 100 + r, n, s);
					if (
						((_ = _t(c % m)),
						c === f
							? ((h = this._repeat), (_ = u))
							: ((y = _t(c / m)),
							  (h = ~~y),
							  h && h === y && ((_ = u), h--),
							  _ > u && (_ = u)),
						(y = yi(this._tTime, m)),
						!o &&
							this._tTime &&
							y !== h &&
							this._tTime - y * m - this._dur <= 0 &&
							(y = h),
						P && h & 1 && ((_ = u - _), (k = 1)),
						h !== y && !this._lock)
					) {
						var w = P && y & 1,
							C = w === (P && h & 1);
						if (
							(h < y && (w = !w),
							(o = w ? 0 : c % u ? u : c),
							(this._lock = 1),
							(this.render(o || (k ? 0 : _t(h * m)), n, !u)._lock = 0),
							(this._tTime = c),
							!n && this.parent && Ft(this, 'onRepeat'),
							this.vars.repeatRefresh && !k && (this.invalidate()._lock = 1),
							(o && o !== this._time) ||
								v !== !this._ts ||
								(this.vars.onRepeat && !this.parent && !this._act))
						)
							return this;
						if (
							((u = this._dur),
							(f = this._tDur),
							C &&
								((this._lock = 2),
								(o = w ? u : -1e-4),
								this.render(o, !0),
								this.vars.repeatRefresh && !k && this.invalidate()),
							(this._lock = 0),
							!this._ts && !v)
						)
							return this;
						Lo(this, k);
					}
				}
				if (
					(this._hasPause &&
						!this._forcing &&
						this._lock < 2 &&
						((T = Ka(this, _t(o), _t(_))), T && (c -= _ - (_ = T._start))),
					(this._tTime = c),
					(this._time = _),
					(this._act = !b),
					this._initted ||
						((this._onUpdate = this.vars.onUpdate),
						(this._initted = 1),
						(this._zTime = r),
						(o = 0)),
					!o && c && !n && !y && (Ft(this, 'onStart'), this._tTime !== c))
				)
					return this;
				if (_ >= o && r >= 0)
					for (a = this._first; a; ) {
						if (
							((p = a._next), (a._act || _ >= a._start) && a._ts && T !== a)
						) {
							if (a.parent !== this) return this.render(r, n, s);
							if (
								(a.render(
									a._ts > 0
										? (_ - a._start) * a._ts
										: (a._dirty ? a.totalDuration() : a._tDur) +
												(_ - a._start) * a._ts,
									n,
									s
								),
								_ !== this._time || (!this._ts && !v))
							) {
								(T = 0), p && (c += this._zTime = -1e-8);
								break;
							}
						}
						a = p;
					}
				else {
					a = this._last;
					for (var I = r < 0 ? r : _; a; ) {
						if (((p = a._prev), (a._act || I <= a._end) && a._ts && T !== a)) {
							if (a.parent !== this) return this.render(r, n, s);
							if (
								(a.render(
									a._ts > 0
										? (I - a._start) * a._ts
										: (a._dirty ? a.totalDuration() : a._tDur) +
												(I - a._start) * a._ts,
									n,
									s || (wt && Hn(a))
								),
								_ !== this._time || (!this._ts && !v))
							) {
								(T = 0), p && (c += this._zTime = I ? -1e-8 : St);
								break;
							}
						}
						a = p;
					}
				}
				if (
					T &&
					!n &&
					(this.pause(),
					(T.render(_ >= o ? 0 : -1e-8)._zTime = _ >= o ? 1 : -1),
					this._ts)
				)
					return (this._start = S), Ar(this), this.render(r, n, s);
				this._onUpdate && !n && Ft(this, 'onUpdate', !0),
					((c === f && this._tTime >= this.totalDuration()) || (!c && o)) &&
						(S === this._start || Math.abs(b) !== Math.abs(this._ts)) &&
						(this._lock ||
							((r || !u) &&
								((c === f && this._ts > 0) || (!c && this._ts < 0)) &&
								De(this, 1),
							!n &&
								!(r < 0 && !o) &&
								(c || o || !f) &&
								(Ft(
									this,
									c === f && r >= 0 ? 'onComplete' : 'onReverseComplete',
									!0
								),
								this._prom &&
									!(c < f && this.timeScale() > 0) &&
									this._prom())));
			}
			return this;
		}),
		(e.add = function (r, n) {
			var s = this;
			if ((ge(n) || (n = Ht(this, n, r)), !(r instanceof Zi))) {
				if (Pt(r))
					return (
						r.forEach(function (o) {
							return s.add(o, n);
						}),
						this
					);
				if (yt(r)) return this.addLabel(r, n);
				if (at(r)) r = dt.delayedCall(0, r);
				else return this;
			}
			return this !== r ? se(this, r, n) : this;
		}),
		(e.getChildren = function (r, n, s, o) {
			r === void 0 && (r = !0),
				n === void 0 && (n = !0),
				s === void 0 && (s = !0),
				o === void 0 && (o = -1e8);
			for (var f = [], u = this._first; u; )
				u._start >= o &&
					(u instanceof dt
						? n && f.push(u)
						: (s && f.push(u), r && f.push.apply(f, u.getChildren(!0, n, s)))),
					(u = u._next);
			return f;
		}),
		(e.getById = function (r) {
			for (var n = this.getChildren(1, 1, 1), s = n.length; s--; )
				if (n[s].vars.id === r) return n[s];
		}),
		(e.remove = function (r) {
			return yt(r)
				? this.removeLabel(r)
				: at(r)
				? this.killTweensOf(r)
				: (r.parent === this && Dr(this, r),
				  r === this._recent && (this._recent = this._last),
				  Ve(this));
		}),
		(e.totalTime = function (r, n) {
			return arguments.length
				? ((this._forcing = 1),
				  !this._dp &&
						this._ts &&
						(this._start = _t(
							Lt.time -
								(this._ts > 0
									? r / this._ts
									: (this.totalDuration() - r) / -this._ts)
						)),
				  l.prototype.totalTime.call(this, r, n),
				  (this._forcing = 0),
				  this)
				: this._tTime;
		}),
		(e.addLabel = function (r, n) {
			return (this.labels[r] = Ht(this, n)), this;
		}),
		(e.removeLabel = function (r) {
			return delete this.labels[r], this;
		}),
		(e.addPause = function (r, n, s) {
			var o = dt.delayedCall(0, n || ji, s);
			return (
				(o.data = 'isPause'), (this._hasPause = 1), se(this, o, Ht(this, r))
			);
		}),
		(e.removePause = function (r) {
			var n = this._first;
			for (r = Ht(this, r); n; )
				n._start === r && n.data === 'isPause' && De(n), (n = n._next);
		}),
		(e.killTweensOf = function (r, n, s) {
			for (var o = this.getTweensOf(r, s), f = o.length; f--; )
				Se !== o[f] && o[f].kill(r, n);
			return this;
		}),
		(e.getTweensOf = function (r, n) {
			for (var s = [], o = qt(r), f = this._first, u = ge(n), c; f; )
				f instanceof dt
					? Wa(f._targets, o) &&
					  (u
							? (!Se || (f._initted && f._ts)) &&
							  f.globalTime(0) <= n &&
							  f.globalTime(f.totalDuration()) > n
							: !n || f.isActive()) &&
					  s.push(f)
					: (c = f.getTweensOf(o, n)).length && s.push.apply(s, c),
					(f = f._next);
			return s;
		}),
		(e.tweenTo = function (r, n) {
			n = n || {};
			var s = this,
				o = Ht(s, r),
				f = n,
				u = f.startAt,
				c = f.onStart,
				d = f.onStartParams,
				_ = f.immediateRender,
				a,
				p = dt.to(
					s,
					zt(
						{
							ease: n.ease || 'none',
							lazy: !1,
							immediateRender: !1,
							time: o,
							overwrite: 'auto',
							duration:
								n.duration ||
								Math.abs(
									(o - (u && 'time' in u ? u.time : s._time)) / s.timeScale()
								) ||
								St,
							onStart: function () {
								if ((s.pause(), !a)) {
									var m =
										n.duration ||
										Math.abs(
											(o - (u && 'time' in u ? u.time : s._time)) /
												s.timeScale()
										);
									p._dur !== m && xi(p, m, 0, 1).render(p._time, !0, !0),
										(a = 1);
								}
								c && c.apply(p, d || []);
							},
						},
						n
					)
				);
			return _ ? p.render(0) : p;
		}),
		(e.tweenFromTo = function (r, n, s) {
			return this.tweenTo(n, zt({ startAt: { time: Ht(this, r) } }, s));
		}),
		(e.recent = function () {
			return this._recent;
		}),
		(e.nextLabel = function (r) {
			return r === void 0 && (r = this._time), xs(this, Ht(this, r));
		}),
		(e.previousLabel = function (r) {
			return r === void 0 && (r = this._time), xs(this, Ht(this, r), 1);
		}),
		(e.currentLabel = function (r) {
			return arguments.length
				? this.seek(r, !0)
				: this.previousLabel(this._time + St);
		}),
		(e.shiftChildren = function (r, n, s) {
			s === void 0 && (s = 0);
			for (var o = this._first, f = this.labels, u; o; )
				o._start >= s && ((o._start += r), (o._end += r)), (o = o._next);
			if (n) for (u in f) f[u] >= s && (f[u] += r);
			return Ve(this);
		}),
		(e.invalidate = function (r) {
			var n = this._first;
			for (this._lock = 0; n; ) n.invalidate(r), (n = n._next);
			return l.prototype.invalidate.call(this, r);
		}),
		(e.clear = function (r) {
			r === void 0 && (r = !0);
			for (var n = this._first, s; n; ) (s = n._next), this.remove(n), (n = s);
			return (
				this._dp && (this._time = this._tTime = this._pTime = 0),
				r && (this.labels = {}),
				Ve(this)
			);
		}),
		(e.totalDuration = function (r) {
			var n = 0,
				s = this,
				o = s._last,
				f = ae,
				u,
				c,
				d;
			if (arguments.length)
				return s.timeScale(
					(s._repeat < 0 ? s.duration() : s.totalDuration()) /
						(s.reversed() ? -r : r)
				);
			if (s._dirty) {
				for (d = s.parent; o; )
					(u = o._prev),
						o._dirty && o.totalDuration(),
						(c = o._start),
						c > f && s._sort && o._ts && !s._lock
							? ((s._lock = 1), (se(s, o, c - o._delay, 1)._lock = 0))
							: (f = c),
						c < 0 &&
							o._ts &&
							((n -= c),
							((!d && !s._dp) || (d && d.smoothChildTiming)) &&
								((s._start += c / s._ts), (s._time -= c), (s._tTime -= c)),
							s.shiftChildren(-c, !1, -1 / 0),
							(f = 0)),
						o._end > n && o._ts && (n = o._end),
						(o = u);
				xi(s, s === st && s._time > n ? s._time : n, 1, 1), (s._dirty = 0);
			}
			return s._tDur;
		}),
		(t.updateRoot = function (r) {
			if ((st._ts && (_o(st, Tr(r, st)), (co = Lt.frame)), Lt.frame >= ps)) {
				ps += It.autoSleep || 120;
				var n = st._first;
				if ((!n || !n._ts) && It.autoSleep && Lt._listeners.length < 2) {
					for (; n && !n._ts; ) n = n._next;
					n || Lt.sleep();
				}
			}
		}),
		t
	);
})(Zi);
zt(Ct.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
var hl = function (t, e, i, r, n, s, o) {
		var f = new Et(this._pt, t, e, 0, 1, $o, null, n),
			u = 0,
			c = 0,
			d,
			_,
			a,
			p,
			h,
			m,
			v,
			T;
		for (
			f.b = i,
				f.e = r,
				i += '',
				r += '',
				(v = ~r.indexOf('random(')) && (r = Ki(r)),
				s && ((T = [i, r]), s(T, t, e), (i = T[0]), (r = T[1])),
				_ = i.match(Wr) || [];
			(d = Wr.exec(r));

		)
			(p = d[0]),
				(h = r.substring(u, d.index)),
				a ? (a = (a + 1) % 5) : h.substr(-5) === 'rgba(' && (a = 1),
				p !== _[c++] &&
					((m = parseFloat(_[c - 1]) || 0),
					(f._pt = {
						_next: f._pt,
						p: h || c === 1 ? h : ',',
						s: m,
						c: p.charAt(1) === '=' ? ui(m, p) - m : parseFloat(p) - m,
						m: a && a < 4 ? Math.round : 0,
					}),
					(u = Wr.lastIndex));
		return (
			(f.c = u < r.length ? r.substring(u, r.length) : ''),
			(f.fp = o),
			(oo.test(r) || v) && (f.e = 0),
			(this._pt = f),
			f
		);
	},
	qn = function (t, e, i, r, n, s, o, f, u, c) {
		at(r) && (r = r(n || 0, t, s));
		var d = t[e],
			_ =
				i !== 'get'
					? i
					: at(d)
					? u
						? t[
								e.indexOf('set') || !at(t['get' + e.substr(3)])
									? e
									: 'get' + e.substr(3)
						  ](u)
						: t[e]()
					: d,
			a = at(d) ? (u ? ml : Yo) : jn,
			p;
		if (
			(yt(r) &&
				(~r.indexOf('random(') && (r = Ki(r)),
				r.charAt(1) === '=' &&
					((p = ui(_, r) + (bt(_) || 0)), (p || p === 0) && (r = p))),
			!c || _ !== r || gn)
		)
			return !isNaN(_ * r) && r !== ''
				? ((p = new Et(
						this._pt,
						t,
						e,
						+_ || 0,
						r - (_ || 0),
						typeof d == 'boolean' ? xl : Xo,
						0,
						a
				  )),
				  u && (p.fp = u),
				  o && p.modifier(o, this, t),
				  (this._pt = p))
				: (!d && !(e in t) && $n(e, r),
				  hl.call(this, t, e, _, r, a, f || It.stringFilter, u));
	},
	dl = function (t, e, i, r, n) {
		if (
			(at(t) && (t = Xi(t, n, e, i, r)),
			!le(t) || (t.style && t.nodeType) || Pt(t) || no(t))
		)
			return yt(t) ? Xi(t, n, e, i, r) : t;
		var s = {},
			o;
		for (o in t) s[o] = Xi(t[o], n, e, i, r);
		return s;
	},
	Io = function (t, e, i, r, n, s) {
		var o, f, u, c;
		if (
			Rt[t] &&
			(o = new Rt[t]()).init(
				n,
				o.rawVars ? e[t] : dl(e[t], r, n, s, i),
				i,
				r,
				s
			) !== !1 &&
			((i._pt = f = new Et(i._pt, n, t, 0, 1, o.render, o, 0, o.priority)),
			i !== ai)
		)
			for (u = i._ptLookup[i._targets.indexOf(n)], c = o._props.length; c--; )
				u[o._props[c]] = f;
		return o;
	},
	Se,
	gn,
	Gn = function l(t, e, i) {
		var r = t.vars,
			n = r.ease,
			s = r.startAt,
			o = r.immediateRender,
			f = r.lazy,
			u = r.onUpdate,
			c = r.runBackwards,
			d = r.yoyoEase,
			_ = r.keyframes,
			a = r.autoRevert,
			p = t._dur,
			h = t._startAt,
			m = t._targets,
			v = t.parent,
			T = v && v.data === 'nested' ? v.vars.targets : m,
			b = t._overwrite === 'auto' && !Bn,
			S = t.timeline,
			y,
			P,
			k,
			w,
			C,
			I,
			R,
			L,
			O,
			W,
			X,
			z,
			B;
		if (
			(S && (!_ || !n) && (n = 'none'),
			(t._ease = Ue(n, gi.ease)),
			(t._yEase = d ? Ro(Ue(d === !0 ? n : d, gi.ease)) : 0),
			d &&
				t._yoyo &&
				!t._repeat &&
				((d = t._yEase), (t._yEase = t._ease), (t._ease = d)),
			(t._from = !S && !!r.runBackwards),
			!S || (_ && !r.stagger))
		) {
			if (
				((L = m[0] ? We(m[0]).harness : 0),
				(z = L && r[L.prop]),
				(y = wr(r, Wn)),
				h &&
					(h._zTime < 0 && h.progress(1),
					e < 0 && c && o && !a ? h.render(-1, !0) : h.revert(c && p ? dr : Xa),
					(h._lazy = 0)),
				s)
			) {
				if (
					(De(
						(t._startAt = dt.set(
							m,
							zt(
								{
									data: 'isStart',
									overwrite: !1,
									parent: v,
									immediateRender: !0,
									lazy: !h && kt(f),
									startAt: null,
									delay: 0,
									onUpdate:
										u &&
										function () {
											return Ft(t, 'onUpdate');
										},
									stagger: 0,
								},
								s
							)
						))
					),
					(t._startAt._dp = 0),
					(t._startAt._sat = t),
					e < 0 && (wt || (!o && !a)) && t._startAt.revert(dr),
					o && p && e <= 0 && i <= 0)
				) {
					e && (t._zTime = e);
					return;
				}
			} else if (c && p && !h) {
				if (
					(e && (o = !1),
					(k = zt(
						{
							overwrite: !1,
							data: 'isFromStart',
							lazy: o && !h && kt(f),
							immediateRender: o,
							stagger: 0,
							parent: v,
						},
						y
					)),
					z && (k[L.prop] = z),
					De((t._startAt = dt.set(m, k))),
					(t._startAt._dp = 0),
					(t._startAt._sat = t),
					e < 0 && (wt ? t._startAt.revert(dr) : t._startAt.render(-1, !0)),
					(t._zTime = e),
					!o)
				)
					l(t._startAt, St, St);
				else if (!e) return;
			}
			for (
				t._pt = t._ptCache = 0, f = (p && kt(f)) || (f && !p), P = 0;
				P < m.length;
				P++
			) {
				if (
					((C = m[P]),
					(R = C._gsap || Un(m)[P]._gsap),
					(t._ptLookup[P] = W = {}),
					fn[R.id] && Me.length && vr(),
					(X = T === m ? P : T.indexOf(C)),
					L &&
						(O = new L()).init(C, z || y, t, X, T) !== !1 &&
						((t._pt = w =
							new Et(t._pt, C, O.name, 0, 1, O.render, O, 0, O.priority)),
						O._props.forEach(function (tt) {
							W[tt] = w;
						}),
						O.priority && (I = 1)),
					!L || z)
				)
					for (k in y)
						Rt[k] && (O = Io(k, y, t, X, C, T))
							? O.priority && (I = 1)
							: (W[k] = w =
									qn.call(t, C, k, 'get', y[k], X, T, 0, r.stringFilter));
				t._op && t._op[P] && t.kill(C, t._op[P]),
					b &&
						t._pt &&
						((Se = t),
						st.killTweensOf(C, W, t.globalTime(e)),
						(B = !t.parent),
						(Se = 0)),
					t._pt && f && (fn[R.id] = 1);
			}
			I && Wo(t), t._onInit && t._onInit(t);
		}
		(t._onUpdate = u),
			(t._initted = (!t._op || t._pt) && !B),
			_ && e <= 0 && S.render(ae, !0, !0);
	},
	_l = function (t, e, i, r, n, s, o, f) {
		var u = ((t._pt && t._ptCache) || (t._ptCache = {}))[e],
			c,
			d,
			_,
			a;
		if (!u)
			for (
				u = t._ptCache[e] = [], _ = t._ptLookup, a = t._targets.length;
				a--;

			) {
				if (((c = _[a][e]), c && c.d && c.d._pt))
					for (c = c.d._pt; c && c.p !== e && c.fp !== e; ) c = c._next;
				if (!c)
					return (
						(gn = 1),
						(t.vars[e] = '+=0'),
						Gn(t, o),
						(gn = 0),
						f ? Gi(e + ' not eligible for reset') : 1
					);
				u.push(c);
			}
		for (a = u.length; a--; )
			(d = u[a]),
				(c = d._pt || d),
				(c.s = (r || r === 0) && !n ? r : c.s + (r || 0) + s * c.c),
				(c.c = i - c.s),
				d.e && (d.e = ft(i) + bt(d.e)),
				d.b && (d.b = c.s + bt(d.b));
	},
	pl = function (t, e) {
		var i = t[0] ? We(t[0]).harness : 0,
			r = i && i.aliases,
			n,
			s,
			o,
			f;
		if (!r) return e;
		n = mi({}, e);
		for (s in r)
			if (s in n) for (f = r[s].split(','), o = f.length; o--; ) n[f[o]] = n[s];
		return n;
	},
	gl = function (t, e, i, r) {
		var n = e.ease || r || 'power1.inOut',
			s,
			o;
		if (Pt(e))
			(o = i[t] || (i[t] = [])),
				e.forEach(function (f, u) {
					return o.push({ t: (u / (e.length - 1)) * 100, v: f, e: n });
				});
		else
			for (s in e)
				(o = i[s] || (i[s] = [])),
					s === 'ease' || o.push({ t: parseFloat(t), v: e[s], e: n });
	},
	Xi = function (t, e, i, r, n) {
		return at(t)
			? t.call(e, i, r, n)
			: yt(t) && ~t.indexOf('random(')
			? Ki(t)
			: t;
	},
	Bo = Vn + 'repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert',
	zo = {};
Mt(Bo + ',id,stagger,delay,duration,paused,scrollTrigger', function (l) {
	return (zo[l] = 1);
});
var dt = (function (l) {
	io(t, l);
	function t(i, r, n, s) {
		var o;
		typeof r == 'number' && ((n.duration = r), (r = n), (n = null)),
			(o = l.call(this, s ? r : zi(r)) || this);
		var f = o.vars,
			u = f.duration,
			c = f.delay,
			d = f.immediateRender,
			_ = f.stagger,
			a = f.overwrite,
			p = f.keyframes,
			h = f.defaults,
			m = f.scrollTrigger,
			v = f.yoyoEase,
			T = r.parent || st,
			b = (Pt(i) || no(i) ? ge(i[0]) : 'length' in r) ? [i] : qt(i),
			S,
			y,
			P,
			k,
			w,
			C,
			I,
			R;
		if (
			((o._targets = b.length
				? Un(b)
				: Gi(
						'GSAP target ' + i + ' not found. https://gsap.com',
						!It.nullTargetWarn
				  ) || []),
			(o._ptLookup = []),
			(o._overwrite = a),
			p || _ || fr(u) || fr(c))
		) {
			if (
				((r = o.vars),
				(S = o.timeline =
					new Ct({
						data: 'nested',
						defaults: h || {},
						targets: T && T.data === 'nested' ? T.vars.targets : b,
					})),
				S.kill(),
				(S.parent = S._dp = ce(o)),
				(S._start = 0),
				_ || fr(u) || fr(c))
			) {
				if (((k = b.length), (I = _ && bo(_)), le(_)))
					for (w in _) ~Bo.indexOf(w) && (R || (R = {}), (R[w] = _[w]));
				for (y = 0; y < k; y++)
					(P = wr(r, zo)),
						(P.stagger = 0),
						v && (P.yoyoEase = v),
						R && mi(P, R),
						(C = b[y]),
						(P.duration = +Xi(u, ce(o), y, C, b)),
						(P.delay = (+Xi(c, ce(o), y, C, b) || 0) - o._delay),
						!_ &&
							k === 1 &&
							P.delay &&
							((o._delay = c = P.delay), (o._start += c), (P.delay = 0)),
						S.to(C, P, I ? I(y, C, b) : 0),
						(S._ease = H.none);
				S.duration() ? (u = c = 0) : (o.timeline = 0);
			} else if (p) {
				zi(zt(S.vars.defaults, { ease: 'none' })),
					(S._ease = Ue(p.ease || r.ease || 'none'));
				var L = 0,
					O,
					W,
					X;
				if (Pt(p))
					p.forEach(function (z) {
						return S.to(b, z, '>');
					}),
						S.duration();
				else {
					P = {};
					for (w in p)
						w === 'ease' || w === 'easeEach' || gl(w, p[w], P, p.easeEach);
					for (w in P)
						for (
							O = P[w].sort(function (z, B) {
								return z.t - B.t;
							}),
								L = 0,
								y = 0;
							y < O.length;
							y++
						)
							(W = O[y]),
								(X = {
									ease: W.e,
									duration: ((W.t - (y ? O[y - 1].t : 0)) / 100) * u,
								}),
								(X[w] = W.v),
								S.to(b, X, L),
								(L += X.duration);
					S.duration() < u && S.to({}, { duration: u - S.duration() });
				}
			}
			u || o.duration((u = S.duration()));
		} else o.timeline = 0;
		return (
			a === !0 && !Bn && ((Se = ce(o)), st.killTweensOf(b), (Se = 0)),
			se(T, ce(o), n),
			r.reversed && o.reverse(),
			r.paused && o.paused(!0),
			(d ||
				(!u &&
					!p &&
					o._start === _t(T._time) &&
					kt(d) &&
					qa(ce(o)) &&
					T.data !== 'nested')) &&
				((o._tTime = -1e-8), o.render(Math.max(0, -c) || 0)),
			m && xo(ce(o), m),
			o
		);
	}
	var e = t.prototype;
	return (
		(e.render = function (r, n, s) {
			var o = this._time,
				f = this._tDur,
				u = this._dur,
				c = r < 0,
				d = r > f - St && !c ? f : r < St ? 0 : r,
				_,
				a,
				p,
				h,
				m,
				v,
				T,
				b,
				S;
			if (!u) ja(this, r, n, s);
			else if (
				d !== this._tTime ||
				!r ||
				s ||
				(!this._initted && this._tTime) ||
				(this._startAt && this._zTime < 0 !== c) ||
				this._lazy
			) {
				if (((_ = d), (b = this.timeline), this._repeat)) {
					if (((h = u + this._rDelay), this._repeat < -1 && c))
						return this.totalTime(h * 100 + r, n, s);
					if (
						((_ = _t(d % h)),
						d === f
							? ((p = this._repeat), (_ = u))
							: ((m = _t(d / h)),
							  (p = ~~m),
							  p && p === m ? ((_ = u), p--) : _ > u && (_ = u)),
						(v = this._yoyo && p & 1),
						v && ((S = this._yEase), (_ = u - _)),
						(m = yi(this._tTime, h)),
						_ === o && !s && this._initted && p === m)
					)
						return (this._tTime = d), this;
					p !== m &&
						(b && this._yEase && Lo(b, v),
						this.vars.repeatRefresh &&
							!v &&
							!this._lock &&
							_ !== h &&
							this._initted &&
							((this._lock = s = 1),
							(this.render(_t(h * p), !0).invalidate()._lock = 0)));
				}
				if (!this._initted) {
					if (vo(this, c ? r : _, s, n, d)) return (this._tTime = 0), this;
					if (o !== this._time && !(s && this.vars.repeatRefresh && p !== m))
						return this;
					if (u !== this._dur) return this.render(r, n, s);
				}
				if (
					((this._tTime = d),
					(this._time = _),
					!this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
					(this.ratio = T = (S || this._ease)(_ / u)),
					this._from && (this.ratio = T = 1 - T),
					!o && d && !n && !m && (Ft(this, 'onStart'), this._tTime !== d))
				)
					return this;
				for (a = this._pt; a; ) a.r(T, a.d), (a = a._next);
				(b && b.render(r < 0 ? r : b._dur * b._ease(_ / this._dur), n, s)) ||
					(this._startAt && (this._zTime = r)),
					this._onUpdate &&
						!n &&
						(c && cn(this, r, n, s), Ft(this, 'onUpdate')),
					this._repeat &&
						p !== m &&
						this.vars.onRepeat &&
						!n &&
						this.parent &&
						Ft(this, 'onRepeat'),
					(d === this._tDur || !d) &&
						this._tTime === d &&
						(c && !this._onUpdate && cn(this, r, !0, !0),
						(r || !u) &&
							((d === this._tDur && this._ts > 0) || (!d && this._ts < 0)) &&
							De(this, 1),
						!n &&
							!(c && !o) &&
							(d || o || v) &&
							(Ft(this, d === f ? 'onComplete' : 'onReverseComplete', !0),
							this._prom && !(d < f && this.timeScale() > 0) && this._prom()));
			}
			return this;
		}),
		(e.targets = function () {
			return this._targets;
		}),
		(e.invalidate = function (r) {
			return (
				(!r || !this.vars.runBackwards) && (this._startAt = 0),
				(this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0),
				(this._ptLookup = []),
				this.timeline && this.timeline.invalidate(r),
				l.prototype.invalidate.call(this, r)
			);
		}),
		(e.resetTo = function (r, n, s, o, f) {
			Qi || Lt.wake(), this._ts || this.play();
			var u = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
				c;
			return (
				this._initted || Gn(this, u),
				(c = this._ease(u / this._dur)),
				_l(this, r, n, s, o, c, u, f)
					? this.resetTo(r, n, s, o, 1)
					: (Rr(this, 0),
					  this.parent ||
							mo(
								this._dp,
								this,
								'_first',
								'_last',
								this._dp._sort ? '_start' : 0
							),
					  this.render(0))
			);
		}),
		(e.kill = function (r, n) {
			if ((n === void 0 && (n = 'all'), !r && (!n || n === 'all')))
				return (
					(this._lazy = this._pt = 0),
					this.parent
						? Ai(this)
						: this.scrollTrigger && this.scrollTrigger.kill(!!wt),
					this
				);
			if (this.timeline) {
				var s = this.timeline.totalDuration();
				return (
					this.timeline.killTweensOf(r, n, Se && Se.vars.overwrite !== !0)
						._first || Ai(this),
					this.parent &&
						s !== this.timeline.totalDuration() &&
						xi(this, (this._dur * this.timeline._tDur) / s, 0, 1),
					this
				);
			}
			var o = this._targets,
				f = r ? qt(r) : o,
				u = this._ptLookup,
				c = this._pt,
				d,
				_,
				a,
				p,
				h,
				m,
				v;
			if ((!n || n === 'all') && Ua(o, f))
				return n === 'all' && (this._pt = 0), Ai(this);
			for (
				d = this._op = this._op || [],
					n !== 'all' &&
						(yt(n) &&
							((h = {}),
							Mt(n, function (T) {
								return (h[T] = 1);
							}),
							(n = h)),
						(n = pl(o, n))),
					v = o.length;
				v--;

			)
				if (~f.indexOf(o[v])) {
					(_ = u[v]),
						n === 'all'
							? ((d[v] = n), (p = _), (a = {}))
							: ((a = d[v] = d[v] || {}), (p = n));
					for (h in p)
						(m = _ && _[h]),
							m &&
								((!('kill' in m.d) || m.d.kill(h) === !0) && Dr(this, m, '_pt'),
								delete _[h]),
							a !== 'all' && (a[h] = 1);
				}
			return this._initted && !this._pt && c && Ai(this), this;
		}),
		(t.to = function (r, n) {
			return new t(r, n, arguments[2]);
		}),
		(t.from = function (r, n) {
			return Yi(1, arguments);
		}),
		(t.delayedCall = function (r, n, s, o) {
			return new t(n, 0, {
				immediateRender: !1,
				lazy: !1,
				overwrite: !1,
				delay: r,
				onComplete: n,
				onReverseComplete: n,
				onCompleteParams: s,
				onReverseCompleteParams: s,
				callbackScope: o,
			});
		}),
		(t.fromTo = function (r, n, s) {
			return Yi(2, arguments);
		}),
		(t.set = function (r, n) {
			return (n.duration = 0), n.repeatDelay || (n.repeat = 0), new t(r, n);
		}),
		(t.killTweensOf = function (r, n, s) {
			return st.killTweensOf(r, n, s);
		}),
		t
	);
})(Zi);
zt(dt.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 });
Mt('staggerTo,staggerFrom,staggerFromTo', function (l) {
	dt[l] = function () {
		var t = new Ct(),
			e = dn.call(arguments, 0);
		return e.splice(l === 'staggerFromTo' ? 5 : 4, 0, 0), t[l].apply(t, e);
	};
});
var jn = function (t, e, i) {
		return (t[e] = i);
	},
	Yo = function (t, e, i) {
		return t[e](i);
	},
	ml = function (t, e, i, r) {
		return t[e](r.fp, i);
	},
	yl = function (t, e, i) {
		return t.setAttribute(e, i);
	},
	Kn = function (t, e) {
		return at(t[e]) ? Yo : zn(t[e]) && t.setAttribute ? yl : jn;
	},
	Xo = function (t, e) {
		return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e6) / 1e6, e);
	},
	xl = function (t, e) {
		return e.set(e.t, e.p, !!(e.s + e.c * t), e);
	},
	$o = function (t, e) {
		var i = e._pt,
			r = '';
		if (!t && e.b) r = e.b;
		else if (t === 1 && e.e) r = e.e;
		else {
			for (; i; )
				(r =
					i.p +
					(i.m ? i.m(i.s + i.c * t) : Math.round((i.s + i.c * t) * 1e4) / 1e4) +
					r),
					(i = i._next);
			r += e.c;
		}
		e.set(e.t, e.p, r, e);
	},
	Qn = function (t, e) {
		for (var i = e._pt; i; ) i.r(t, i.d), (i = i._next);
	},
	vl = function (t, e, i, r) {
		for (var n = this._pt, s; n; )
			(s = n._next), n.p === r && n.modifier(t, e, i), (n = s);
	},
	wl = function (t) {
		for (var e = this._pt, i, r; e; )
			(r = e._next),
				(e.p === t && !e.op) || e.op === t
					? Dr(this, e, '_pt')
					: e.dep || (i = 1),
				(e = r);
		return !i;
	},
	Tl = function (t, e, i, r) {
		r.mSet(t, e, r.m.call(r.tween, i, r.mt), r);
	},
	Wo = function (t) {
		for (var e = t._pt, i, r, n, s; e; ) {
			for (i = e._next, r = n; r && r.pr > e.pr; ) r = r._next;
			(e._prev = r ? r._prev : s) ? (e._prev._next = e) : (n = e),
				(e._next = r) ? (r._prev = e) : (s = e),
				(e = i);
		}
		t._pt = n;
	},
	Et = (function () {
		function l(e, i, r, n, s, o, f, u, c) {
			(this.t = i),
				(this.s = n),
				(this.c = s),
				(this.p = r),
				(this.r = o || Xo),
				(this.d = f || this),
				(this.set = u || jn),
				(this.pr = c || 0),
				(this._next = e),
				e && (e._prev = this);
		}
		var t = l.prototype;
		return (
			(t.modifier = function (i, r, n) {
				(this.mSet = this.mSet || this.set),
					(this.set = Tl),
					(this.m = i),
					(this.mt = n),
					(this.tween = r);
			}),
			l
		);
	})();
Mt(
	Vn +
		'parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger',
	function (l) {
		return (Wn[l] = 1);
	}
);
Bt.TweenMax = Bt.TweenLite = dt;
Bt.TimelineLite = Bt.TimelineMax = Ct;
st = new Ct({
	sortChildren: !1,
	defaults: gi,
	autoRemoveChildren: !0,
	id: 'root',
	smoothChildTiming: !0,
});
It.stringFilter = Ao;
var He = [],
	pr = {},
	bl = [],
	ws = 0,
	Sl = 0,
	Gr = function (t) {
		return (pr[t] || bl).map(function (e) {
			return e();
		});
	},
	mn = function () {
		var t = Date.now(),
			e = [];
		t - ws > 2 &&
			(Gr('matchMediaInit'),
			He.forEach(function (i) {
				var r = i.queries,
					n = i.conditions,
					s,
					o,
					f,
					u;
				for (o in r)
					(s = re.matchMedia(r[o]).matches),
						s && (f = 1),
						s !== n[o] && ((n[o] = s), (u = 1));
				u && (i.revert(), f && e.push(i));
			}),
			Gr('matchMediaRevert'),
			e.forEach(function (i) {
				return i.onMatch(i, function (r) {
					return i.add(null, r);
				});
			}),
			(ws = t),
			Gr('matchMedia'));
	},
	Vo = (function () {
		function l(e, i) {
			(this.selector = i && _n(i)),
				(this.data = []),
				(this._r = []),
				(this.isReverted = !1),
				(this.id = Sl++),
				e && this.add(e);
		}
		var t = l.prototype;
		return (
			(t.add = function (i, r, n) {
				at(i) && ((n = r), (r = i), (i = at));
				var s = this,
					o = function () {
						var u = nt,
							c = s.selector,
							d;
						return (
							u && u !== s && u.data.push(s),
							n && (s.selector = _n(n)),
							(nt = s),
							(d = r.apply(s, arguments)),
							at(d) && s._r.push(d),
							(nt = u),
							(s.selector = c),
							(s.isReverted = !1),
							d
						);
					};
				return (
					(s.last = o),
					i === at
						? o(s, function (f) {
								return s.add(null, f);
						  })
						: i
						? (s[i] = o)
						: o
				);
			}),
			(t.ignore = function (i) {
				var r = nt;
				(nt = null), i(this), (nt = r);
			}),
			(t.getTweens = function () {
				var i = [];
				return (
					this.data.forEach(function (r) {
						return r instanceof l
							? i.push.apply(i, r.getTweens())
							: r instanceof dt &&
									!(r.parent && r.parent.data === 'nested') &&
									i.push(r);
					}),
					i
				);
			}),
			(t.clear = function () {
				this._r.length = this.data.length = 0;
			}),
			(t.kill = function (i, r) {
				var n = this;
				if (
					(i
						? (function () {
								for (var o = n.getTweens(), f = n.data.length, u; f--; )
									(u = n.data[f]),
										u.data === 'isFlip' &&
											(u.revert(),
											u.getChildren(!0, !0, !1).forEach(function (c) {
												return o.splice(o.indexOf(c), 1);
											}));
								for (
									o
										.map(function (c) {
											return {
												g:
													c._dur ||
													c._delay ||
													(c._sat && !c._sat.vars.immediateRender)
														? c.globalTime(0)
														: -1 / 0,
												t: c,
											};
										})
										.sort(function (c, d) {
											return d.g - c.g || -1 / 0;
										})
										.forEach(function (c) {
											return c.t.revert(i);
										}),
										f = n.data.length;
									f--;

								)
									(u = n.data[f]),
										u instanceof Ct
											? u.data !== 'nested' &&
											  (u.scrollTrigger && u.scrollTrigger.revert(), u.kill())
											: !(u instanceof dt) && u.revert && u.revert(i);
								n._r.forEach(function (c) {
									return c(i, n);
								}),
									(n.isReverted = !0);
						  })()
						: this.data.forEach(function (o) {
								return o.kill && o.kill();
						  }),
					this.clear(),
					r)
				)
					for (var s = He.length; s--; )
						He[s].id === this.id && He.splice(s, 1);
			}),
			(t.revert = function (i) {
				this.kill(i || {});
			}),
			l
		);
	})(),
	Pl = (function () {
		function l(e) {
			(this.contexts = []), (this.scope = e), nt && nt.data.push(this);
		}
		var t = l.prototype;
		return (
			(t.add = function (i, r, n) {
				le(i) || (i = { matches: i });
				var s = new Vo(0, n || this.scope),
					o = (s.conditions = {}),
					f,
					u,
					c;
				nt && !s.selector && (s.selector = nt.selector),
					this.contexts.push(s),
					(r = s.add('onMatch', r)),
					(s.queries = i);
				for (u in i)
					u === 'all'
						? (c = 1)
						: ((f = re.matchMedia(i[u])),
						  f &&
								(He.indexOf(s) < 0 && He.push(s),
								(o[u] = f.matches) && (c = 1),
								f.addListener
									? f.addListener(mn)
									: f.addEventListener('change', mn)));
				return (
					c &&
						r(s, function (d) {
							return s.add(null, d);
						}),
					this
				);
			}),
			(t.revert = function (i) {
				this.kill(i || {});
			}),
			(t.kill = function (i) {
				this.contexts.forEach(function (r) {
					return r.kill(i, !0);
				});
			}),
			l
		);
	})(),
	br = {
		registerPlugin: function () {
			for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
				e[i] = arguments[i];
			e.forEach(function (r) {
				return Eo(r);
			});
		},
		timeline: function (t) {
			return new Ct(t);
		},
		getTweensOf: function (t, e) {
			return st.getTweensOf(t, e);
		},
		getProperty: function (t, e, i, r) {
			yt(t) && (t = qt(t)[0]);
			var n = We(t || {}).get,
				s = i ? go : po;
			return (
				i === 'native' && (i = ''),
				t &&
					(e
						? s(((Rt[e] && Rt[e].get) || n)(t, e, i, r))
						: function (o, f, u) {
								return s(((Rt[o] && Rt[o].get) || n)(t, o, f, u));
						  })
			);
		},
		quickSetter: function (t, e, i) {
			if (((t = qt(t)), t.length > 1)) {
				var r = t.map(function (c) {
						return Dt.quickSetter(c, e, i);
					}),
					n = r.length;
				return function (c) {
					for (var d = n; d--; ) r[d](c);
				};
			}
			t = t[0] || {};
			var s = Rt[e],
				o = We(t),
				f = (o.harness && (o.harness.aliases || {})[e]) || e,
				u = s
					? function (c) {
							var d = new s();
							(ai._pt = 0),
								d.init(t, i ? c + i : c, ai, 0, [t]),
								d.render(1, d),
								ai._pt && Qn(1, ai);
					  }
					: o.set(t, f);
			return s
				? u
				: function (c) {
						return u(t, f, i ? c + i : c, o, 1);
				  };
		},
		quickTo: function (t, e, i) {
			var r,
				n = Dt.to(
					t,
					zt(
						((r = {}), (r[e] = '+=0.1'), (r.paused = !0), (r.stagger = 0), r),
						i || {}
					)
				),
				s = function (f, u, c) {
					return n.resetTo(e, f, u, c);
				};
			return (s.tween = n), s;
		},
		isTweening: function (t) {
			return st.getTweensOf(t, !0).length > 0;
		},
		defaults: function (t) {
			return t && t.ease && (t.ease = Ue(t.ease, gi.ease)), gs(gi, t || {});
		},
		config: function (t) {
			return gs(It, t || {});
		},
		registerEffect: function (t) {
			var e = t.name,
				i = t.effect,
				r = t.plugins,
				n = t.defaults,
				s = t.extendTimeline;
			(r || '').split(',').forEach(function (o) {
				return (
					o && !Rt[o] && !Bt[o] && Gi(e + ' effect requires ' + o + ' plugin.')
				);
			}),
				(Vr[e] = function (o, f, u) {
					return i(qt(o), zt(f || {}, n), u);
				}),
				s &&
					(Ct.prototype[e] = function (o, f, u) {
						return this.add(Vr[e](o, le(f) ? f : (u = f) && {}, this), u);
					});
		},
		registerEase: function (t, e) {
			H[t] = Ue(e);
		},
		parseEase: function (t, e) {
			return arguments.length ? Ue(t, e) : H;
		},
		getById: function (t) {
			return st.getById(t);
		},
		exportRoot: function (t, e) {
			t === void 0 && (t = {});
			var i = new Ct(t),
				r,
				n;
			for (
				i.smoothChildTiming = kt(t.smoothChildTiming),
					st.remove(i),
					i._dp = 0,
					i._time = i._tTime = st._time,
					r = st._first;
				r;

			)
				(n = r._next),
					(e ||
						!(
							!r._dur &&
							r instanceof dt &&
							r.vars.onComplete === r._targets[0]
						)) &&
						se(i, r, r._start - r._delay),
					(r = n);
			return se(st, i, 0), i;
		},
		context: function (t, e) {
			return t ? new Vo(t, e) : nt;
		},
		matchMedia: function (t) {
			return new Pl(t);
		},
		matchMediaRefresh: function () {
			return (
				He.forEach(function (t) {
					var e = t.conditions,
						i,
						r;
					for (r in e) e[r] && ((e[r] = !1), (i = 1));
					i && t.revert();
				}) || mn()
			);
		},
		addEventListener: function (t, e) {
			var i = pr[t] || (pr[t] = []);
			~i.indexOf(e) || i.push(e);
		},
		removeEventListener: function (t, e) {
			var i = pr[t],
				r = i && i.indexOf(e);
			r >= 0 && i.splice(r, 1);
		},
		utils: {
			wrap: rl,
			wrapYoyo: nl,
			distribute: bo,
			random: Po,
			snap: So,
			normalize: il,
			getUnit: bt,
			clamp: Za,
			splitColor: Oo,
			toArray: qt,
			selector: _n,
			mapRange: ko,
			pipe: tl,
			unitize: el,
			interpolate: sl,
			shuffle: To,
		},
		install: uo,
		effects: Vr,
		ticker: Lt,
		updateRoot: Ct.updateRoot,
		plugins: Rt,
		globalTimeline: st,
		core: {
			PropTween: Et,
			globals: fo,
			Tween: dt,
			Timeline: Ct,
			Animation: Zi,
			getCache: We,
			_removeLinkedListItem: Dr,
			reverting: function () {
				return wt;
			},
			context: function (t) {
				return t && nt && (nt.data.push(t), (t._ctx = nt)), nt;
			},
			suppressOverwrites: function (t) {
				return (Bn = t);
			},
		},
	};
Mt('to,from,fromTo,delayedCall,set,killTweensOf', function (l) {
	return (br[l] = dt[l]);
});
Lt.add(Ct.updateRoot);
ai = br.to({}, { duration: 0 });
var Cl = function (t, e) {
		for (var i = t._pt; i && i.p !== e && i.op !== e && i.fp !== e; )
			i = i._next;
		return i;
	},
	kl = function (t, e) {
		var i = t._targets,
			r,
			n,
			s;
		for (r in e)
			for (n = i.length; n--; )
				(s = t._ptLookup[n][r]),
					s &&
						(s = s.d) &&
						(s._pt && (s = Cl(s, r)),
						s && s.modifier && s.modifier(e[r], t, i[n], r));
	},
	jr = function (t, e) {
		return {
			name: t,
			headless: 1,
			rawVars: 1,
			init: function (r, n, s) {
				s._onInit = function (o) {
					var f, u;
					if (
						(yt(n) &&
							((f = {}),
							Mt(n, function (c) {
								return (f[c] = 1);
							}),
							(n = f)),
						e)
					) {
						f = {};
						for (u in n) f[u] = e(n[u]);
						n = f;
					}
					kl(o, n);
				};
			},
		};
	},
	Dt =
		br.registerPlugin(
			{
				name: 'attr',
				init: function (t, e, i, r, n) {
					var s, o, f;
					this.tween = i;
					for (s in e)
						(f = t.getAttribute(s) || ''),
							(o = this.add(
								t,
								'setAttribute',
								(f || 0) + '',
								e[s],
								r,
								n,
								0,
								0,
								s
							)),
							(o.op = s),
							(o.b = f),
							this._props.push(s);
				},
				render: function (t, e) {
					for (var i = e._pt; i; )
						wt ? i.set(i.t, i.p, i.b, i) : i.r(t, i.d), (i = i._next);
				},
			},
			{
				name: 'endArray',
				headless: 1,
				init: function (t, e) {
					for (var i = e.length; i--; )
						this.add(t, i, t[i] || 0, e[i], 0, 0, 0, 0, 0, 1);
				},
			},
			jr('roundProps', pn),
			jr('modifiers'),
			jr('snap', So)
		) || br;
dt.version = Ct.version = Dt.version = '3.13.0';
lo = 1;
Yn() && vi();
H.Power0;
H.Power1;
H.Power2;
H.Power3;
H.Power4;
H.Linear;
H.Quad;
H.Cubic;
H.Quart;
H.Quint;
H.Strong;
H.Elastic;
H.Back;
H.SteppedEase;
H.Bounce;
H.Sine;
H.Expo;
H.Circ;
/*!
 * CSSPlugin 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
 */ var Ts,
	Pe,
	fi,
	Zn,
	$e,
	bs,
	Jn,
	Ml = function () {
		return typeof window < 'u';
	},
	me = {},
	Ye = 180 / Math.PI,
	ci = Math.PI / 180,
	Je = Math.atan2,
	Ss = 1e8,
	ts = /([A-Z])/g,
	El = /(left|right|width|margin|padding|x)/i,
	Ol = /[\s,\(]\S/,
	oe = {
		autoAlpha: 'opacity,visibility',
		scale: 'scaleX,scaleY',
		alpha: 'opacity',
	},
	yn = function (t, e) {
		return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e);
	},
	Dl = function (t, e) {
		return e.set(
			e.t,
			e.p,
			t === 1 ? e.e : Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u,
			e
		);
	},
	Al = function (t, e) {
		return e.set(
			e.t,
			e.p,
			t ? Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u : e.b,
			e
		);
	},
	Rl = function (t, e) {
		var i = e.s + e.c * t;
		e.set(e.t, e.p, ~~(i + (i < 0 ? -0.5 : 0.5)) + e.u, e);
	},
	Uo = function (t, e) {
		return e.set(e.t, e.p, t ? e.e : e.b, e);
	},
	Ho = function (t, e) {
		return e.set(e.t, e.p, t !== 1 ? e.b : e.e, e);
	},
	Ll = function (t, e, i) {
		return (t.style[e] = i);
	},
	Nl = function (t, e, i) {
		return t.style.setProperty(e, i);
	},
	Fl = function (t, e, i) {
		return (t._gsap[e] = i);
	},
	Il = function (t, e, i) {
		return (t._gsap.scaleX = t._gsap.scaleY = i);
	},
	Bl = function (t, e, i, r, n) {
		var s = t._gsap;
		(s.scaleX = s.scaleY = i), s.renderTransform(n, s);
	},
	zl = function (t, e, i, r, n) {
		var s = t._gsap;
		(s[e] = i), s.renderTransform(n, s);
	},
	ot = 'transform',
	Ot = ot + 'Origin',
	Yl = function l(t, e) {
		var i = this,
			r = this.target,
			n = r.style,
			s = r._gsap;
		if (t in me && n) {
			if (((this.tfm = this.tfm || {}), t !== 'transform'))
				(t = oe[t] || t),
					~t.indexOf(',')
						? t.split(',').forEach(function (o) {
								return (i.tfm[o] = he(r, o));
						  })
						: (this.tfm[t] = s.x ? s[t] : he(r, t)),
					t === Ot && (this.tfm.zOrigin = s.zOrigin);
			else
				return oe.transform.split(',').forEach(function (o) {
					return l.call(i, o, e);
				});
			if (this.props.indexOf(ot) >= 0) return;
			s.svg &&
				((this.svgo = r.getAttribute('data-svg-origin')),
				this.props.push(Ot, e, '')),
				(t = ot);
		}
		(n || e) && this.props.push(t, e, n[t]);
	},
	qo = function (t) {
		t.translate &&
			(t.removeProperty('translate'),
			t.removeProperty('scale'),
			t.removeProperty('rotate'));
	},
	Xl = function () {
		var t = this.props,
			e = this.target,
			i = e.style,
			r = e._gsap,
			n,
			s;
		for (n = 0; n < t.length; n += 3)
			t[n + 1]
				? t[n + 1] === 2
					? e[t[n]](t[n + 2])
					: (e[t[n]] = t[n + 2])
				: t[n + 2]
				? (i[t[n]] = t[n + 2])
				: i.removeProperty(
						t[n].substr(0, 2) === '--'
							? t[n]
							: t[n].replace(ts, '-$1').toLowerCase()
				  );
		if (this.tfm) {
			for (s in this.tfm) r[s] = this.tfm[s];
			r.svg &&
				(r.renderTransform(),
				e.setAttribute('data-svg-origin', this.svgo || '')),
				(n = Jn()),
				(!n || !n.isStart) &&
					!i[ot] &&
					(qo(i),
					r.zOrigin &&
						i[Ot] &&
						((i[Ot] += ' ' + r.zOrigin + 'px'),
						(r.zOrigin = 0),
						r.renderTransform()),
					(r.uncache = 1));
		}
	},
	Go = function (t, e) {
		var i = { target: t, props: [], revert: Xl, save: Yl };
		return (
			t._gsap || Dt.core.getCache(t),
			e &&
				t.style &&
				t.nodeType &&
				e.split(',').forEach(function (r) {
					return i.save(r);
				}),
			i
		);
	},
	jo,
	xn = function (t, e) {
		var i = Pe.createElementNS
			? Pe.createElementNS(
					(e || 'http://www.w3.org/1999/xhtml').replace(/^https/, 'http'),
					t
			  )
			: Pe.createElement(t);
		return i && i.style ? i : Pe.createElement(t);
	},
	Gt = function l(t, e, i) {
		var r = getComputedStyle(t);
		return (
			r[e] ||
			r.getPropertyValue(e.replace(ts, '-$1').toLowerCase()) ||
			r.getPropertyValue(e) ||
			(!i && l(t, wi(e) || e, 1)) ||
			''
		);
	},
	Ps = 'O,Moz,ms,Ms,Webkit'.split(','),
	wi = function (t, e, i) {
		var r = e || $e,
			n = r.style,
			s = 5;
		if (t in n && !i) return t;
		for (
			t = t.charAt(0).toUpperCase() + t.substr(1);
			s-- && !(Ps[s] + t in n);

		);
		return s < 0 ? null : (s === 3 ? 'ms' : s >= 0 ? Ps[s] : '') + t;
	},
	vn = function () {
		Ml() &&
			window.document &&
			((Ts = window),
			(Pe = Ts.document),
			(fi = Pe.documentElement),
			($e = xn('div') || { style: {} }),
			xn('div'),
			(ot = wi(ot)),
			(Ot = ot + 'Origin'),
			($e.style.cssText =
				'border-width:0;line-height:0;position:absolute;padding:0'),
			(jo = !!wi('perspective')),
			(Jn = Dt.core.reverting),
			(Zn = 1));
	},
	Cs = function (t) {
		var e = t.ownerSVGElement,
			i = xn(
				'svg',
				(e && e.getAttribute('xmlns')) || 'http://www.w3.org/2000/svg'
			),
			r = t.cloneNode(!0),
			n;
		(r.style.display = 'block'), i.appendChild(r), fi.appendChild(i);
		try {
			n = r.getBBox();
		} catch {}
		return i.removeChild(r), fi.removeChild(i), n;
	},
	ks = function (t, e) {
		for (var i = e.length; i--; )
			if (t.hasAttribute(e[i])) return t.getAttribute(e[i]);
	},
	Ko = function (t) {
		var e, i;
		try {
			e = t.getBBox();
		} catch {
			(e = Cs(t)), (i = 1);
		}
		return (
			(e && (e.width || e.height)) || i || (e = Cs(t)),
			e && !e.width && !e.x && !e.y
				? {
						x: +ks(t, ['x', 'cx', 'x1']) || 0,
						y: +ks(t, ['y', 'cy', 'y1']) || 0,
						width: 0,
						height: 0,
				  }
				: e
		);
	},
	Qo = function (t) {
		return !!(t.getCTM && (!t.parentNode || t.ownerSVGElement) && Ko(t));
	},
	je = function (t, e) {
		if (e) {
			var i = t.style,
				r;
			e in me && e !== Ot && (e = ot),
				i.removeProperty
					? ((r = e.substr(0, 2)),
					  (r === 'ms' || e.substr(0, 6) === 'webkit') && (e = '-' + e),
					  i.removeProperty(
							r === '--' ? e : e.replace(ts, '-$1').toLowerCase()
					  ))
					: i.removeAttribute(e);
		}
	},
	Ce = function (t, e, i, r, n, s) {
		var o = new Et(t._pt, e, i, 0, 1, s ? Ho : Uo);
		return (t._pt = o), (o.b = r), (o.e = n), t._props.push(i), o;
	},
	Ms = { deg: 1, rad: 1, turn: 1 },
	$l = { grid: 1, flex: 1 },
	Ae = function l(t, e, i, r) {
		var n = parseFloat(i) || 0,
			s = (i + '').trim().substr((n + '').length) || 'px',
			o = $e.style,
			f = El.test(e),
			u = t.tagName.toLowerCase() === 'svg',
			c = (u ? 'client' : 'offset') + (f ? 'Width' : 'Height'),
			d = 100,
			_ = r === 'px',
			a = r === '%',
			p,
			h,
			m,
			v;
		if (r === s || !n || Ms[r] || Ms[s]) return n;
		if (
			(s !== 'px' && !_ && (n = l(t, e, i, 'px')),
			(v = t.getCTM && Qo(t)),
			(a || s === '%') && (me[e] || ~e.indexOf('adius')))
		)
			return (
				(p = v ? t.getBBox()[f ? 'width' : 'height'] : t[c]),
				ft(a ? (n / p) * d : (n / 100) * p)
			);
		if (
			((o[f ? 'width' : 'height'] = d + (_ ? s : r)),
			(h =
				(r !== 'rem' && ~e.indexOf('adius')) ||
				(r === 'em' && t.appendChild && !u)
					? t
					: t.parentNode),
			v && (h = (t.ownerSVGElement || {}).parentNode),
			(!h || h === Pe || !h.appendChild) && (h = Pe.body),
			(m = h._gsap),
			m && a && m.width && f && m.time === Lt.time && !m.uncache)
		)
			return ft((n / m.width) * d);
		if (a && (e === 'height' || e === 'width')) {
			var T = t.style[e];
			(t.style[e] = d + r), (p = t[c]), T ? (t.style[e] = T) : je(t, e);
		} else
			(a || s === '%') &&
				!$l[Gt(h, 'display')] &&
				(o.position = Gt(t, 'position')),
				h === t && (o.position = 'static'),
				h.appendChild($e),
				(p = $e[c]),
				h.removeChild($e),
				(o.position = 'absolute');
		return (
			f && a && ((m = We(h)), (m.time = Lt.time), (m.width = h[c])),
			ft(_ ? (p * n) / d : p && n ? (d / p) * n : 0)
		);
	},
	he = function (t, e, i, r) {
		var n;
		return (
			Zn || vn(),
			e in oe &&
				e !== 'transform' &&
				((e = oe[e]), ~e.indexOf(',') && (e = e.split(',')[0])),
			me[e] && e !== 'transform'
				? ((n = tr(t, r)),
				  (n =
						e !== 'transformOrigin'
							? n[e]
							: n.svg
							? n.origin
							: Pr(Gt(t, Ot)) + ' ' + n.zOrigin + 'px'))
				: ((n = t.style[e]),
				  (!n || n === 'auto' || r || ~(n + '').indexOf('calc(')) &&
						(n =
							(Sr[e] && Sr[e](t, e, i)) ||
							Gt(t, e) ||
							ho(t, e) ||
							(e === 'opacity' ? 1 : 0))),
			i && !~(n + '').trim().indexOf(' ') ? Ae(t, e, n, i) + i : n
		);
	},
	Wl = function (t, e, i, r) {
		if (!i || i === 'none') {
			var n = wi(e, t, 1),
				s = n && Gt(t, n, 1);
			s && s !== i
				? ((e = n), (i = s))
				: e === 'borderColor' && (i = Gt(t, 'borderTopColor'));
		}
		var o = new Et(this._pt, t.style, e, 0, 1, $o),
			f = 0,
			u = 0,
			c,
			d,
			_,
			a,
			p,
			h,
			m,
			v,
			T,
			b,
			S,
			y;
		if (
			((o.b = i),
			(o.e = r),
			(i += ''),
			(r += ''),
			r.substring(0, 6) === 'var(--' &&
				(r = Gt(t, r.substring(4, r.indexOf(')')))),
			r === 'auto' &&
				((h = t.style[e]),
				(t.style[e] = r),
				(r = Gt(t, e) || r),
				h ? (t.style[e] = h) : je(t, e)),
			(c = [i, r]),
			Ao(c),
			(i = c[0]),
			(r = c[1]),
			(_ = i.match(oi) || []),
			(y = r.match(oi) || []),
			y.length)
		) {
			for (; (d = oi.exec(r)); )
				(m = d[0]),
					(T = r.substring(f, d.index)),
					p
						? (p = (p + 1) % 5)
						: (T.substr(-5) === 'rgba(' || T.substr(-5) === 'hsla(') && (p = 1),
					m !== (h = _[u++] || '') &&
						((a = parseFloat(h) || 0),
						(S = h.substr((a + '').length)),
						m.charAt(1) === '=' && (m = ui(a, m) + S),
						(v = parseFloat(m)),
						(b = m.substr((v + '').length)),
						(f = oi.lastIndex - b.length),
						b ||
							((b = b || It.units[e] || S),
							f === r.length && ((r += b), (o.e += b))),
						S !== b && (a = Ae(t, e, h, b) || 0),
						(o._pt = {
							_next: o._pt,
							p: T || u === 1 ? T : ',',
							s: a,
							c: v - a,
							m: (p && p < 4) || e === 'zIndex' ? Math.round : 0,
						}));
			o.c = f < r.length ? r.substring(f, r.length) : '';
		} else o.r = e === 'display' && r === 'none' ? Ho : Uo;
		return oo.test(r) && (o.e = 0), (this._pt = o), o;
	},
	Es = { top: '0%', bottom: '100%', left: '0%', right: '100%', center: '50%' },
	Vl = function (t) {
		var e = t.split(' '),
			i = e[0],
			r = e[1] || '50%';
		return (
			(i === 'top' || i === 'bottom' || r === 'left' || r === 'right') &&
				((t = i), (i = r), (r = t)),
			(e[0] = Es[i] || i),
			(e[1] = Es[r] || r),
			e.join(' ')
		);
	},
	Ul = function (t, e) {
		if (e.tween && e.tween._time === e.tween._dur) {
			var i = e.t,
				r = i.style,
				n = e.u,
				s = i._gsap,
				o,
				f,
				u;
			if (n === 'all' || n === !0) (r.cssText = ''), (f = 1);
			else
				for (n = n.split(','), u = n.length; --u > -1; )
					(o = n[u]),
						me[o] && ((f = 1), (o = o === 'transformOrigin' ? Ot : ot)),
						je(i, o);
			f &&
				(je(i, ot),
				s &&
					(s.svg && i.removeAttribute('transform'),
					(r.scale = r.rotate = r.translate = 'none'),
					tr(i, 1),
					(s.uncache = 1),
					qo(r)));
		}
	},
	Sr = {
		clearProps: function (t, e, i, r, n) {
			if (n.data !== 'isFromStart') {
				var s = (t._pt = new Et(t._pt, e, i, 0, 0, Ul));
				return (s.u = r), (s.pr = -10), (s.tween = n), t._props.push(i), 1;
			}
		},
	},
	Ji = [1, 0, 0, 1, 0, 0],
	Zo = {},
	Jo = function (t) {
		return t === 'matrix(1, 0, 0, 1, 0, 0)' || t === 'none' || !t;
	},
	Os = function (t) {
		var e = Gt(t, ot);
		return Jo(e) ? Ji : e.substr(7).match(so).map(ft);
	},
	es = function (t, e) {
		var i = t._gsap || We(t),
			r = t.style,
			n = Os(t),
			s,
			o,
			f,
			u;
		return i.svg && t.getAttribute('transform')
			? ((f = t.transform.baseVal.consolidate().matrix),
			  (n = [f.a, f.b, f.c, f.d, f.e, f.f]),
			  n.join(',') === '1,0,0,1,0,0' ? Ji : n)
			: (n === Ji &&
					!t.offsetParent &&
					t !== fi &&
					!i.svg &&
					((f = r.display),
					(r.display = 'block'),
					(s = t.parentNode),
					(!s || (!t.offsetParent && !t.getBoundingClientRect().width)) &&
						((u = 1), (o = t.nextElementSibling), fi.appendChild(t)),
					(n = Os(t)),
					f ? (r.display = f) : je(t, 'display'),
					u &&
						(o
							? s.insertBefore(t, o)
							: s
							? s.appendChild(t)
							: fi.removeChild(t))),
			  e && n.length > 6 ? [n[0], n[1], n[4], n[5], n[12], n[13]] : n);
	},
	wn = function (t, e, i, r, n, s) {
		var o = t._gsap,
			f = n || es(t, !0),
			u = o.xOrigin || 0,
			c = o.yOrigin || 0,
			d = o.xOffset || 0,
			_ = o.yOffset || 0,
			a = f[0],
			p = f[1],
			h = f[2],
			m = f[3],
			v = f[4],
			T = f[5],
			b = e.split(' '),
			S = parseFloat(b[0]) || 0,
			y = parseFloat(b[1]) || 0,
			P,
			k,
			w,
			C;
		i
			? f !== Ji &&
			  (k = a * m - p * h) &&
			  ((w = S * (m / k) + y * (-h / k) + (h * T - m * v) / k),
			  (C = S * (-p / k) + y * (a / k) - (a * T - p * v) / k),
			  (S = w),
			  (y = C))
			: ((P = Ko(t)),
			  (S = P.x + (~b[0].indexOf('%') ? (S / 100) * P.width : S)),
			  (y = P.y + (~(b[1] || b[0]).indexOf('%') ? (y / 100) * P.height : y))),
			r || (r !== !1 && o.smooth)
				? ((v = S - u),
				  (T = y - c),
				  (o.xOffset = d + (v * a + T * h) - v),
				  (o.yOffset = _ + (v * p + T * m) - T))
				: (o.xOffset = o.yOffset = 0),
			(o.xOrigin = S),
			(o.yOrigin = y),
			(o.smooth = !!r),
			(o.origin = e),
			(o.originIsAbsolute = !!i),
			(t.style[Ot] = '0px 0px'),
			s &&
				(Ce(s, o, 'xOrigin', u, S),
				Ce(s, o, 'yOrigin', c, y),
				Ce(s, o, 'xOffset', d, o.xOffset),
				Ce(s, o, 'yOffset', _, o.yOffset)),
			t.setAttribute('data-svg-origin', S + ' ' + y);
	},
	tr = function (t, e) {
		var i = t._gsap || new Fo(t);
		if ('x' in i && !e && !i.uncache) return i;
		var r = t.style,
			n = i.scaleX < 0,
			s = 'px',
			o = 'deg',
			f = getComputedStyle(t),
			u = Gt(t, Ot) || '0',
			c,
			d,
			_,
			a,
			p,
			h,
			m,
			v,
			T,
			b,
			S,
			y,
			P,
			k,
			w,
			C,
			I,
			R,
			L,
			O,
			W,
			X,
			z,
			B,
			tt,
			rt,
			j,
			V,
			Y,
			K,
			G,
			Yt;
		return (
			(c = d = _ = h = m = v = T = b = S = 0),
			(a = p = 1),
			(i.svg = !!(t.getCTM && Qo(t))),
			f.translate &&
				((f.translate !== 'none' ||
					f.scale !== 'none' ||
					f.rotate !== 'none') &&
					(r[ot] =
						(f.translate !== 'none'
							? 'translate3d(' +
							  (f.translate + ' 0 0').split(' ').slice(0, 3).join(', ') +
							  ') '
							: '') +
						(f.rotate !== 'none' ? 'rotate(' + f.rotate + ') ' : '') +
						(f.scale !== 'none'
							? 'scale(' + f.scale.split(' ').join(',') + ') '
							: '') +
						(f[ot] !== 'none' ? f[ot] : '')),
				(r.scale = r.rotate = r.translate = 'none')),
			(k = es(t, i.svg)),
			i.svg &&
				(i.uncache
					? ((tt = t.getBBox()),
					  (u = i.xOrigin - tt.x + 'px ' + (i.yOrigin - tt.y) + 'px'),
					  (B = ''))
					: (B = !e && t.getAttribute('data-svg-origin')),
				wn(t, B || u, !!B || i.originIsAbsolute, i.smooth !== !1, k)),
			(y = i.xOrigin || 0),
			(P = i.yOrigin || 0),
			k !== Ji &&
				((R = k[0]),
				(L = k[1]),
				(O = k[2]),
				(W = k[3]),
				(c = X = k[4]),
				(d = z = k[5]),
				k.length === 6
					? ((a = Math.sqrt(R * R + L * L)),
					  (p = Math.sqrt(W * W + O * O)),
					  (h = R || L ? Je(L, R) * Ye : 0),
					  (T = O || W ? Je(O, W) * Ye + h : 0),
					  T && (p *= Math.abs(Math.cos(T * ci))),
					  i.svg && ((c -= y - (y * R + P * O)), (d -= P - (y * L + P * W))))
					: ((Yt = k[6]),
					  (K = k[7]),
					  (j = k[8]),
					  (V = k[9]),
					  (Y = k[10]),
					  (G = k[11]),
					  (c = k[12]),
					  (d = k[13]),
					  (_ = k[14]),
					  (w = Je(Yt, Y)),
					  (m = w * Ye),
					  w &&
							((C = Math.cos(-w)),
							(I = Math.sin(-w)),
							(B = X * C + j * I),
							(tt = z * C + V * I),
							(rt = Yt * C + Y * I),
							(j = X * -I + j * C),
							(V = z * -I + V * C),
							(Y = Yt * -I + Y * C),
							(G = K * -I + G * C),
							(X = B),
							(z = tt),
							(Yt = rt)),
					  (w = Je(-O, Y)),
					  (v = w * Ye),
					  w &&
							((C = Math.cos(-w)),
							(I = Math.sin(-w)),
							(B = R * C - j * I),
							(tt = L * C - V * I),
							(rt = O * C - Y * I),
							(G = W * I + G * C),
							(R = B),
							(L = tt),
							(O = rt)),
					  (w = Je(L, R)),
					  (h = w * Ye),
					  w &&
							((C = Math.cos(w)),
							(I = Math.sin(w)),
							(B = R * C + L * I),
							(tt = X * C + z * I),
							(L = L * C - R * I),
							(z = z * C - X * I),
							(R = B),
							(X = tt)),
					  m &&
							Math.abs(m) + Math.abs(h) > 359.9 &&
							((m = h = 0), (v = 180 - v)),
					  (a = ft(Math.sqrt(R * R + L * L + O * O))),
					  (p = ft(Math.sqrt(z * z + Yt * Yt))),
					  (w = Je(X, z)),
					  (T = Math.abs(w) > 2e-4 ? w * Ye : 0),
					  (S = G ? 1 / (G < 0 ? -G : G) : 0)),
				i.svg &&
					((B = t.getAttribute('transform')),
					(i.forceCSS = t.setAttribute('transform', '') || !Jo(Gt(t, ot))),
					B && t.setAttribute('transform', B))),
			Math.abs(T) > 90 &&
				Math.abs(T) < 270 &&
				(n
					? ((a *= -1), (T += h <= 0 ? 180 : -180), (h += h <= 0 ? 180 : -180))
					: ((p *= -1), (T += T <= 0 ? 180 : -180))),
			(e = e || i.uncache),
			(i.x =
				c -
				((i.xPercent =
					c &&
					((!e && i.xPercent) ||
						(Math.round(t.offsetWidth / 2) === Math.round(-c) ? -50 : 0)))
					? (t.offsetWidth * i.xPercent) / 100
					: 0) +
				s),
			(i.y =
				d -
				((i.yPercent =
					d &&
					((!e && i.yPercent) ||
						(Math.round(t.offsetHeight / 2) === Math.round(-d) ? -50 : 0)))
					? (t.offsetHeight * i.yPercent) / 100
					: 0) +
				s),
			(i.z = _ + s),
			(i.scaleX = ft(a)),
			(i.scaleY = ft(p)),
			(i.rotation = ft(h) + o),
			(i.rotationX = ft(m) + o),
			(i.rotationY = ft(v) + o),
			(i.skewX = T + o),
			(i.skewY = b + o),
			(i.transformPerspective = S + s),
			(i.zOrigin = parseFloat(u.split(' ')[2]) || (!e && i.zOrigin) || 0) &&
				(r[Ot] = Pr(u)),
			(i.xOffset = i.yOffset = 0),
			(i.force3D = It.force3D),
			(i.renderTransform = i.svg ? ql : jo ? ta : Hl),
			(i.uncache = 0),
			i
		);
	},
	Pr = function (t) {
		return (t = t.split(' '))[0] + ' ' + t[1];
	},
	Kr = function (t, e, i) {
		var r = bt(e);
		return ft(parseFloat(e) + parseFloat(Ae(t, 'x', i + 'px', r))) + r;
	},
	Hl = function (t, e) {
		(e.z = '0px'),
			(e.rotationY = e.rotationX = '0deg'),
			(e.force3D = 0),
			ta(t, e);
	},
	Ie = '0deg',
	Ei = '0px',
	Be = ') ',
	ta = function (t, e) {
		var i = e || this,
			r = i.xPercent,
			n = i.yPercent,
			s = i.x,
			o = i.y,
			f = i.z,
			u = i.rotation,
			c = i.rotationY,
			d = i.rotationX,
			_ = i.skewX,
			a = i.skewY,
			p = i.scaleX,
			h = i.scaleY,
			m = i.transformPerspective,
			v = i.force3D,
			T = i.target,
			b = i.zOrigin,
			S = '',
			y = (v === 'auto' && t && t !== 1) || v === !0;
		if (b && (d !== Ie || c !== Ie)) {
			var P = parseFloat(c) * ci,
				k = Math.sin(P),
				w = Math.cos(P),
				C;
			(P = parseFloat(d) * ci),
				(C = Math.cos(P)),
				(s = Kr(T, s, k * C * -b)),
				(o = Kr(T, o, -Math.sin(P) * -b)),
				(f = Kr(T, f, w * C * -b + b));
		}
		m !== Ei && (S += 'perspective(' + m + Be),
			(r || n) && (S += 'translate(' + r + '%, ' + n + '%) '),
			(y || s !== Ei || o !== Ei || f !== Ei) &&
				(S +=
					f !== Ei || y
						? 'translate3d(' + s + ', ' + o + ', ' + f + ') '
						: 'translate(' + s + ', ' + o + Be),
			u !== Ie && (S += 'rotate(' + u + Be),
			c !== Ie && (S += 'rotateY(' + c + Be),
			d !== Ie && (S += 'rotateX(' + d + Be),
			(_ !== Ie || a !== Ie) && (S += 'skew(' + _ + ', ' + a + Be),
			(p !== 1 || h !== 1) && (S += 'scale(' + p + ', ' + h + Be),
			(T.style[ot] = S || 'translate(0, 0)');
	},
	ql = function (t, e) {
		var i = e || this,
			r = i.xPercent,
			n = i.yPercent,
			s = i.x,
			o = i.y,
			f = i.rotation,
			u = i.skewX,
			c = i.skewY,
			d = i.scaleX,
			_ = i.scaleY,
			a = i.target,
			p = i.xOrigin,
			h = i.yOrigin,
			m = i.xOffset,
			v = i.yOffset,
			T = i.forceCSS,
			b = parseFloat(s),
			S = parseFloat(o),
			y,
			P,
			k,
			w,
			C;
		(f = parseFloat(f)),
			(u = parseFloat(u)),
			(c = parseFloat(c)),
			c && ((c = parseFloat(c)), (u += c), (f += c)),
			f || u
				? ((f *= ci),
				  (u *= ci),
				  (y = Math.cos(f) * d),
				  (P = Math.sin(f) * d),
				  (k = Math.sin(f - u) * -_),
				  (w = Math.cos(f - u) * _),
				  u &&
						((c *= ci),
						(C = Math.tan(u - c)),
						(C = Math.sqrt(1 + C * C)),
						(k *= C),
						(w *= C),
						c &&
							((C = Math.tan(c)),
							(C = Math.sqrt(1 + C * C)),
							(y *= C),
							(P *= C))),
				  (y = ft(y)),
				  (P = ft(P)),
				  (k = ft(k)),
				  (w = ft(w)))
				: ((y = d), (w = _), (P = k = 0)),
			((b && !~(s + '').indexOf('px')) || (S && !~(o + '').indexOf('px'))) &&
				((b = Ae(a, 'x', s, 'px')), (S = Ae(a, 'y', o, 'px'))),
			(p || h || m || v) &&
				((b = ft(b + p - (p * y + h * k) + m)),
				(S = ft(S + h - (p * P + h * w) + v))),
			(r || n) &&
				((C = a.getBBox()),
				(b = ft(b + (r / 100) * C.width)),
				(S = ft(S + (n / 100) * C.height))),
			(C =
				'matrix(' + y + ',' + P + ',' + k + ',' + w + ',' + b + ',' + S + ')'),
			a.setAttribute('transform', C),
			T && (a.style[ot] = C);
	},
	Gl = function (t, e, i, r, n) {
		var s = 360,
			o = yt(n),
			f = parseFloat(n) * (o && ~n.indexOf('rad') ? Ye : 1),
			u = f - r,
			c = r + u + 'deg',
			d,
			_;
		return (
			o &&
				((d = n.split('_')[1]),
				d === 'short' &&
					((u %= s), u !== u % (s / 2) && (u += u < 0 ? s : -360)),
				d === 'cw' && u < 0
					? (u = ((u + s * Ss) % s) - ~~(u / s) * s)
					: d === 'ccw' && u > 0 && (u = ((u - s * Ss) % s) - ~~(u / s) * s)),
			(t._pt = _ = new Et(t._pt, e, i, r, u, Dl)),
			(_.e = c),
			(_.u = 'deg'),
			t._props.push(i),
			_
		);
	},
	Ds = function (t, e) {
		for (var i in e) t[i] = e[i];
		return t;
	},
	jl = function (t, e, i) {
		var r = Ds({}, i._gsap),
			n = 'perspective,force3D,transformOrigin,svgOrigin',
			s = i.style,
			o,
			f,
			u,
			c,
			d,
			_,
			a,
			p;
		r.svg
			? ((u = i.getAttribute('transform')),
			  i.setAttribute('transform', ''),
			  (s[ot] = e),
			  (o = tr(i, 1)),
			  je(i, ot),
			  i.setAttribute('transform', u))
			: ((u = getComputedStyle(i)[ot]),
			  (s[ot] = e),
			  (o = tr(i, 1)),
			  (s[ot] = u));
		for (f in me)
			(u = r[f]),
				(c = o[f]),
				u !== c &&
					n.indexOf(f) < 0 &&
					((a = bt(u)),
					(p = bt(c)),
					(d = a !== p ? Ae(i, f, u, p) : parseFloat(u)),
					(_ = parseFloat(c)),
					(t._pt = new Et(t._pt, o, f, d, _ - d, yn)),
					(t._pt.u = p || 0),
					t._props.push(f));
		Ds(o, r);
	};
Mt('padding,margin,Width,Radius', function (l, t) {
	var e = 'Top',
		i = 'Right',
		r = 'Bottom',
		n = 'Left',
		s = (t < 3 ? [e, i, r, n] : [e + n, e + i, r + i, r + n]).map(function (o) {
			return t < 2 ? l + o : 'border' + o + l;
		});
	Sr[t > 1 ? 'border' + l : l] = function (o, f, u, c, d) {
		var _, a;
		if (arguments.length < 4)
			return (
				(_ = s.map(function (p) {
					return he(o, p, u);
				})),
				(a = _.join(' ')),
				a.split(_[0]).length === 5 ? _[0] : a
			);
		(_ = (c + '').split(' ')),
			(a = {}),
			s.forEach(function (p, h) {
				return (a[p] = _[h] = _[h] || _[((h - 1) / 2) | 0]);
			}),
			o.init(f, a, d);
	};
});
var ea = {
	name: 'css',
	register: vn,
	targetTest: function (t) {
		return t.style && t.nodeType;
	},
	init: function (t, e, i, r, n) {
		var s = this._props,
			o = t.style,
			f = i.vars.startAt,
			u,
			c,
			d,
			_,
			a,
			p,
			h,
			m,
			v,
			T,
			b,
			S,
			y,
			P,
			k,
			w;
		Zn || vn(),
			(this.styles = this.styles || Go(t)),
			(w = this.styles.props),
			(this.tween = i);
		for (h in e)
			if (h !== 'autoRound' && ((c = e[h]), !(Rt[h] && Io(h, e, i, r, t, n)))) {
				if (
					((a = typeof c),
					(p = Sr[h]),
					a === 'function' && ((c = c.call(i, r, t, n)), (a = typeof c)),
					a === 'string' && ~c.indexOf('random(') && (c = Ki(c)),
					p)
				)
					p(this, t, h, c, i) && (k = 1);
				else if (h.substr(0, 2) === '--')
					(u = (getComputedStyle(t).getPropertyValue(h) + '').trim()),
						(c += ''),
						(Ee.lastIndex = 0),
						Ee.test(u) || ((m = bt(u)), (v = bt(c))),
						v ? m !== v && (u = Ae(t, h, u, v) + v) : m && (c += m),
						this.add(o, 'setProperty', u, c, r, n, 0, 0, h),
						s.push(h),
						w.push(h, 0, o[h]);
				else if (a !== 'undefined') {
					if (
						(f && h in f
							? ((u = typeof f[h] == 'function' ? f[h].call(i, r, t, n) : f[h]),
							  yt(u) && ~u.indexOf('random(') && (u = Ki(u)),
							  bt(u + '') ||
									u === 'auto' ||
									(u += It.units[h] || bt(he(t, h)) || ''),
							  (u + '').charAt(1) === '=' && (u = he(t, h)))
							: (u = he(t, h)),
						(_ = parseFloat(u)),
						(T = a === 'string' && c.charAt(1) === '=' && c.substr(0, 2)),
						T && (c = c.substr(2)),
						(d = parseFloat(c)),
						h in oe &&
							(h === 'autoAlpha' &&
								(_ === 1 && he(t, 'visibility') === 'hidden' && d && (_ = 0),
								w.push('visibility', 0, o.visibility),
								Ce(
									this,
									o,
									'visibility',
									_ ? 'inherit' : 'hidden',
									d ? 'inherit' : 'hidden',
									!d
								)),
							h !== 'scale' &&
								h !== 'transform' &&
								((h = oe[h]), ~h.indexOf(',') && (h = h.split(',')[0]))),
						(b = h in me),
						b)
					) {
						if (
							(this.styles.save(h),
							a === 'string' &&
								c.substring(0, 6) === 'var(--' &&
								((c = Gt(t, c.substring(4, c.indexOf(')')))),
								(d = parseFloat(c))),
							S ||
								((y = t._gsap),
								(y.renderTransform && !e.parseTransform) ||
									tr(t, e.parseTransform),
								(P = e.smoothOrigin !== !1 && y.smooth),
								(S = this._pt =
									new Et(this._pt, o, ot, 0, 1, y.renderTransform, y, 0, -1)),
								(S.dep = 1)),
							h === 'scale')
						)
							(this._pt = new Et(
								this._pt,
								y,
								'scaleY',
								y.scaleY,
								(T ? ui(y.scaleY, T + d) : d) - y.scaleY || 0,
								yn
							)),
								(this._pt.u = 0),
								s.push('scaleY', h),
								(h += 'X');
						else if (h === 'transformOrigin') {
							w.push(Ot, 0, o[Ot]),
								(c = Vl(c)),
								y.svg
									? wn(t, c, 0, P, 0, this)
									: ((v = parseFloat(c.split(' ')[2]) || 0),
									  v !== y.zOrigin && Ce(this, y, 'zOrigin', y.zOrigin, v),
									  Ce(this, o, h, Pr(u), Pr(c)));
							continue;
						} else if (h === 'svgOrigin') {
							wn(t, c, 1, P, 0, this);
							continue;
						} else if (h in Zo) {
							Gl(this, y, h, _, T ? ui(_, T + c) : c);
							continue;
						} else if (h === 'smoothOrigin') {
							Ce(this, y, 'smooth', y.smooth, c);
							continue;
						} else if (h === 'force3D') {
							y[h] = c;
							continue;
						} else if (h === 'transform') {
							jl(this, c, t);
							continue;
						}
					} else h in o || (h = wi(h) || h);
					if (b || ((d || d === 0) && (_ || _ === 0) && !Ol.test(c) && h in o))
						(m = (u + '').substr((_ + '').length)),
							d || (d = 0),
							(v = bt(c) || (h in It.units ? It.units[h] : m)),
							m !== v && (_ = Ae(t, h, u, v)),
							(this._pt = new Et(
								this._pt,
								b ? y : o,
								h,
								_,
								(T ? ui(_, T + d) : d) - _,
								!b && (v === 'px' || h === 'zIndex') && e.autoRound !== !1
									? Rl
									: yn
							)),
							(this._pt.u = v || 0),
							m !== v && v !== '%' && ((this._pt.b = u), (this._pt.r = Al));
					else if (h in o) Wl.call(this, t, h, u, T ? T + c : c);
					else if (h in t) this.add(t, h, u || t[h], T ? T + c : c, r, n);
					else if (h !== 'parseTransform') {
						$n(h, c);
						continue;
					}
					b ||
						(h in o
							? w.push(h, 0, o[h])
							: typeof t[h] == 'function'
							? w.push(h, 2, t[h]())
							: w.push(h, 1, u || t[h])),
						s.push(h);
				}
			}
		k && Wo(this);
	},
	render: function (t, e) {
		if (e.tween._time || !Jn())
			for (var i = e._pt; i; ) i.r(t, i.d), (i = i._next);
		else e.styles.revert();
	},
	get: he,
	aliases: oe,
	getSetter: function (t, e, i) {
		var r = oe[e];
		return (
			r && r.indexOf(',') < 0 && (e = r),
			e in me && e !== Ot && (t._gsap.x || he(t, 'x'))
				? i && bs === i
					? e === 'scale'
						? Il
						: Fl
					: (bs = i || {}) && (e === 'scale' ? Bl : zl)
				: t.style && !zn(t.style[e])
				? Ll
				: ~e.indexOf('-')
				? Nl
				: Kn(t, e)
		);
	},
	core: { _removeProperty: je, _getMatrix: es },
};
Dt.utils.checkPrefix = wi;
Dt.core.getStyleSaver = Go;
(function (l, t, e, i) {
	var r = Mt(l + ',' + t + ',' + e, function (n) {
		me[n] = 1;
	});
	Mt(t, function (n) {
		(It.units[n] = 'deg'), (Zo[n] = 1);
	}),
		(oe[r[13]] = l + ',' + t),
		Mt(i, function (n) {
			var s = n.split(':');
			oe[s[1]] = r[s[0]];
		});
})(
	'x,y,z,scale,scaleX,scaleY,xPercent,yPercent',
	'rotation,rotationX,rotationY,skewX,skewY',
	'transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective',
	'0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY'
);
Mt(
	'x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective',
	function (l) {
		It.units[l] = 'px';
	}
);
Dt.registerPlugin(ea);
var Ze = Dt.registerPlugin(ea) || Dt;
Ze.core.Tween;
/*!
 * matrix 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
 */ var _e,
	qe,
	is,
	Lr,
	Li,
	gr,
	Cr,
	$i,
	te = 'transform',
	Tn = te + 'Origin',
	ia,
	ra = function (t) {
		var e = t.ownerDocument || t;
		for (
			!(te in t.style) &&
			('msTransform' in t.style) &&
			((te = 'msTransform'), (Tn = te + 'Origin'));
			e.parentNode && (e = e.parentNode);

		);
		if (((qe = window), (Cr = new Ke()), e)) {
			(_e = e),
				(is = e.documentElement),
				(Lr = e.body),
				($i = _e.createElementNS('http://www.w3.org/2000/svg', 'g')),
				($i.style.transform = 'none');
			var i = e.createElement('div'),
				r = e.createElement('div'),
				n = e && (e.body || e.firstElementChild);
			n &&
				n.appendChild &&
				(n.appendChild(i),
				i.appendChild(r),
				i.setAttribute(
					'style',
					'position:static;transform:translate3d(0,0,1px)'
				),
				(ia = r.offsetParent !== i),
				n.removeChild(i));
		}
		return e;
	},
	Kl = function (t) {
		for (var e, i; t && t !== Lr; )
			(i = t._gsap),
				i && i.uncache && i.get(t, 'x'),
				i &&
					!i.scaleX &&
					!i.scaleY &&
					i.renderTransform &&
					((i.scaleX = i.scaleY = 1e-4),
					i.renderTransform(1, i),
					e ? e.push(i) : (e = [i])),
				(t = t.parentNode);
		return e;
	},
	na = [],
	sa = [],
	Ql = function () {
		return qe.pageYOffset || _e.scrollTop || is.scrollTop || Lr.scrollTop || 0;
	},
	Zl = function () {
		return (
			qe.pageXOffset || _e.scrollLeft || is.scrollLeft || Lr.scrollLeft || 0
		);
	},
	rs = function (t) {
		return (
			t.ownerSVGElement || ((t.tagName + '').toLowerCase() === 'svg' ? t : null)
		);
	},
	Jl = function l(t) {
		if (qe.getComputedStyle(t).position === 'fixed') return !0;
		if (((t = t.parentNode), t && t.nodeType === 1)) return l(t);
	},
	Qr = function l(t, e) {
		if (t.parentNode && (_e || ra(t))) {
			var i = rs(t),
				r = i
					? i.getAttribute('xmlns') || 'http://www.w3.org/2000/svg'
					: 'http://www.w3.org/1999/xhtml',
				n = i ? (e ? 'rect' : 'g') : 'div',
				s = e !== 2 ? 0 : 100,
				o = e === 3 ? 100 : 0,
				f =
					'position:absolute;display:block;pointer-events:none;margin:0;padding:0;',
				u = _e.createElementNS
					? _e.createElementNS(r.replace(/^https/, 'http'), n)
					: _e.createElement(n);
			return (
				e &&
					(i
						? (gr || (gr = l(t)),
						  u.setAttribute('width', 0.01),
						  u.setAttribute('height', 0.01),
						  u.setAttribute('transform', 'translate(' + s + ',' + o + ')'),
						  gr.appendChild(u))
						: (Li || ((Li = l(t)), (Li.style.cssText = f)),
						  (u.style.cssText =
								f +
								'width:0.1px;height:0.1px;top:' +
								o +
								'px;left:' +
								s +
								'px'),
						  Li.appendChild(u))),
				u
			);
		}
		throw 'Need document and parent.';
	},
	tu = function (t) {
		for (var e = new Ke(), i = 0; i < t.numberOfItems; i++)
			e.multiply(t.getItem(i).matrix);
		return e;
	},
	eu = function (t) {
		var e = t.getCTM(),
			i;
		return (
			e ||
				((i = t.style[te]),
				(t.style[te] = 'none'),
				t.appendChild($i),
				(e = $i.getCTM()),
				t.removeChild($i),
				i
					? (t.style[te] = i)
					: t.style.removeProperty(
							te.replace(/([A-Z])/g, '-$1').toLowerCase()
					  )),
			e || Cr.clone()
		);
	},
	iu = function (t, e) {
		var i = rs(t),
			r = t === i,
			n = i ? na : sa,
			s = t.parentNode,
			o =
				s && !i && s.shadowRoot && s.shadowRoot.appendChild ? s.shadowRoot : s,
			f,
			u,
			c,
			d,
			_,
			a;
		if (t === qe) return t;
		if (
			(n.length || n.push(Qr(t, 1), Qr(t, 2), Qr(t, 3)), (f = i ? gr : Li), i)
		)
			r
				? ((c = eu(t)), (d = -c.e / c.a), (_ = -c.f / c.d), (u = Cr))
				: t.getBBox
				? ((c = t.getBBox()),
				  (u = t.transform ? t.transform.baseVal : {}),
				  (u = u.numberOfItems
						? u.numberOfItems > 1
							? tu(u)
							: u.getItem(0).matrix
						: Cr),
				  (d = u.a * c.x + u.c * c.y),
				  (_ = u.b * c.x + u.d * c.y))
				: ((u = new Ke()), (d = _ = 0)),
				(r ? i : s).appendChild(f),
				f.setAttribute(
					'transform',
					'matrix(' +
						u.a +
						',' +
						u.b +
						',' +
						u.c +
						',' +
						u.d +
						',' +
						(u.e + d) +
						',' +
						(u.f + _) +
						')'
				);
		else {
			if (((d = _ = 0), ia))
				for (
					u = t.offsetParent, c = t;
					c && (c = c.parentNode) && c !== u && c.parentNode;

				)
					(qe.getComputedStyle(c)[te] + '').length > 4 &&
						((d = c.offsetLeft), (_ = c.offsetTop), (c = 0));
			if (
				((a = qe.getComputedStyle(t)),
				a.position !== 'absolute' && a.position !== 'fixed')
			)
				for (u = t.offsetParent; s && s !== u; )
					(d += s.scrollLeft || 0), (_ += s.scrollTop || 0), (s = s.parentNode);
			(c = f.style),
				(c.top = t.offsetTop - _ + 'px'),
				(c.left = t.offsetLeft - d + 'px'),
				(c[te] = a[te]),
				(c[Tn] = a[Tn]),
				(c.position = a.position === 'fixed' ? 'fixed' : 'absolute'),
				o.appendChild(f);
		}
		return f;
	},
	Zr = function (t, e, i, r, n, s, o) {
		return (t.a = e), (t.b = i), (t.c = r), (t.d = n), (t.e = s), (t.f = o), t;
	},
	Ke = (function () {
		function l(e, i, r, n, s, o) {
			e === void 0 && (e = 1),
				i === void 0 && (i = 0),
				r === void 0 && (r = 0),
				n === void 0 && (n = 1),
				s === void 0 && (s = 0),
				o === void 0 && (o = 0),
				Zr(this, e, i, r, n, s, o);
		}
		var t = l.prototype;
		return (
			(t.inverse = function () {
				var i = this.a,
					r = this.b,
					n = this.c,
					s = this.d,
					o = this.e,
					f = this.f,
					u = i * s - r * n || 1e-10;
				return Zr(
					this,
					s / u,
					-r / u,
					-n / u,
					i / u,
					(n * f - s * o) / u,
					-(i * f - r * o) / u
				);
			}),
			(t.multiply = function (i) {
				var r = this.a,
					n = this.b,
					s = this.c,
					o = this.d,
					f = this.e,
					u = this.f,
					c = i.a,
					d = i.c,
					_ = i.b,
					a = i.d,
					p = i.e,
					h = i.f;
				return Zr(
					this,
					c * r + _ * s,
					c * n + _ * o,
					d * r + a * s,
					d * n + a * o,
					f + p * r + h * s,
					u + p * n + h * o
				);
			}),
			(t.clone = function () {
				return new l(this.a, this.b, this.c, this.d, this.e, this.f);
			}),
			(t.equals = function (i) {
				var r = this.a,
					n = this.b,
					s = this.c,
					o = this.d,
					f = this.e,
					u = this.f;
				return (
					r === i.a &&
					n === i.b &&
					s === i.c &&
					o === i.d &&
					f === i.e &&
					u === i.f
				);
			}),
			(t.apply = function (i, r) {
				r === void 0 && (r = {});
				var n = i.x,
					s = i.y,
					o = this.a,
					f = this.b,
					u = this.c,
					c = this.d,
					d = this.e,
					_ = this.f;
				return (
					(r.x = n * o + s * u + d || 0), (r.y = n * f + s * c + _ || 0), r
				);
			}),
			l
		);
	})();
function Xe(l, t, e, i) {
	if (!l || !l.parentNode || (_e || ra(l)).documentElement === l)
		return new Ke();
	var r = Kl(l),
		n = rs(l),
		s = n ? na : sa,
		o = iu(l),
		f = s[0].getBoundingClientRect(),
		u = s[1].getBoundingClientRect(),
		c = s[2].getBoundingClientRect(),
		d = o.parentNode,
		_ = Jl(l),
		a = new Ke(
			(u.left - f.left) / 100,
			(u.top - f.top) / 100,
			(c.left - f.left) / 100,
			(c.top - f.top) / 100,
			f.left + (_ ? 0 : Zl()),
			f.top + (_ ? 0 : Ql())
		);
	if ((d.removeChild(o), r))
		for (f = r.length; f--; )
			(u = r[f]), (u.scaleX = u.scaleY = 0), u.renderTransform(1, u);
	return t ? a.inverse() : a;
}
function As(l) {
	if (l === void 0)
		throw new ReferenceError(
			"this hasn't been initialised - super() hasn't been called"
		);
	return l;
}
function ru(l, t) {
	(l.prototype = Object.create(t.prototype)),
		(l.prototype.constructor = l),
		(l.__proto__ = t);
}
var U,
	it,
	Nt,
	ee,
	pe,
	Jr,
	de,
	bn,
	Ni,
	ke,
	oa,
	Sn,
	er,
	ns,
	Fi,
	Zt,
	Ii,
	mr,
	aa,
	Pn,
	kr = 0,
	la = function () {
		return typeof window < 'u';
	},
	ua = function () {
		return U || (la() && (U = window.gsap) && U.registerPlugin && U);
	},
	be = function (t) {
		return typeof t == 'function';
	},
	Wi = function (t) {
		return typeof t == 'object';
	},
	Jt = function (t) {
		return typeof t > 'u';
	},
	yr = function () {
		return !1;
	},
	Vi = 'transform',
	Cn = 'transformOrigin',
	we = function (t) {
		return Math.round(t * 1e4) / 1e4;
	},
	Oi = Array.isArray,
	cr = function (t, e) {
		var i = Nt.createElementNS
			? Nt.createElementNS(
					'http://www.w3.org/1999/xhtml'.replace(/^https/, 'http'),
					t
			  )
			: Nt.createElement(t);
		return i.style ? i : Nt.createElement(t);
	},
	Rs = 180 / Math.PI,
	ti = 1e20,
	nu = new Ke(),
	Te =
		Date.now ||
		function () {
			return new Date().getTime();
		},
	Ge = [],
	hi = {},
	su = 0,
	ou = /^(?:a|input|textarea|button|select)$/i,
	Ls = 0,
	ei = {},
	fe = {},
	fa = function (t, e) {
		var i = {},
			r;
		for (r in t) i[r] = e ? t[r] * e : t[r];
		return i;
	},
	au = function (t, e) {
		for (var i in e) i in t || (t[i] = e[i]);
		return t;
	},
	Ns = function l(t, e) {
		for (var i = t.length, r; i--; )
			e
				? (t[i].style.touchAction = e)
				: t[i].style.removeProperty('touch-action'),
				(r = t[i].children),
				r && r.length && l(r, e);
	},
	ca = function () {
		return Ge.forEach(function (t) {
			return t();
		});
	},
	lu = function (t) {
		Ge.push(t), Ge.length === 1 && U.ticker.add(ca);
	},
	Fs = function () {
		return !Ge.length && U.ticker.remove(ca);
	},
	Is = function (t) {
		for (var e = Ge.length; e--; ) Ge[e] === t && Ge.splice(e, 1);
		U.to(Fs, {
			overwrite: !0,
			delay: 15,
			duration: 0,
			onComplete: Fs,
			data: '_draggable',
		});
	},
	uu = function (t, e) {
		for (var i in e) i in t || (t[i] = e[i]);
		return t;
	},
	pt = function (t, e, i, r) {
		if (t.addEventListener) {
			var n = er[e];
			(r = r || (oa ? { passive: !1 } : null)),
				t.addEventListener(n || e, i, r),
				n && e !== n && t.addEventListener(e, i, r);
		}
	},
	ht = function (t, e, i, r) {
		if (t.removeEventListener) {
			var n = er[e];
			t.removeEventListener(n || e, i, r),
				n && e !== n && t.removeEventListener(e, i, r);
		}
	},
	Vt = function (t) {
		t.preventDefault && t.preventDefault(),
			t.preventManipulation && t.preventManipulation();
	},
	fu = function (t, e) {
		for (var i = t.length; i--; ) if (t[i].identifier === e) return !0;
	},
	cu = function l(t) {
		(ns = t.touches && kr < t.touches.length), ht(t.target, 'touchend', l);
	},
	Bs = function (t) {
		(ns = t.touches && kr < t.touches.length), pt(t.target, 'touchend', cu);
	},
	di = function (t) {
		return (
			it.pageYOffset ||
			t.scrollTop ||
			t.documentElement.scrollTop ||
			t.body.scrollTop ||
			0
		);
	},
	_i = function (t) {
		return (
			it.pageXOffset ||
			t.scrollLeft ||
			t.documentElement.scrollLeft ||
			t.body.scrollLeft ||
			0
		);
	},
	zs = function l(t, e) {
		pt(t, 'scroll', e), Ti(t.parentNode) || l(t.parentNode, e);
	},
	Ys = function l(t, e) {
		ht(t, 'scroll', e), Ti(t.parentNode) || l(t.parentNode, e);
	},
	Ti = function (t) {
		return (
			!t ||
			t === ee ||
			t.nodeType === 9 ||
			t === Nt.body ||
			t === it ||
			!t.nodeType ||
			!t.parentNode
		);
	},
	Xs = function (t, e) {
		var i = e === 'x' ? 'Width' : 'Height',
			r = 'scroll' + i,
			n = 'client' + i;
		return Math.max(
			0,
			Ti(t)
				? Math.max(ee[r], pe[r]) - (it['inner' + i] || ee[n] || pe[n])
				: t[r] - t[n]
		);
	},
	tn = function l(t, e) {
		var i = Xs(t, 'x'),
			r = Xs(t, 'y');
		Ti(t) ? (t = fe) : l(t.parentNode, e),
			(t._gsMaxScrollX = i),
			(t._gsMaxScrollY = r),
			e ||
				((t._gsScrollX = t.scrollLeft || 0), (t._gsScrollY = t.scrollTop || 0));
	},
	en = function (t, e, i) {
		var r = t.style;
		r &&
			(Jt(r[e]) && (e = Ni(e, t) || e),
			i == null
				? r.removeProperty &&
				  r.removeProperty(e.replace(/([A-Z])/g, '-$1').toLowerCase())
				: (r[e] = i));
	},
	ir = function (t) {
		return it.getComputedStyle(
			t instanceof Element ? t : t.host || (t.parentNode || {}).host || t
		);
	},
	ze = {},
	ii = function (t) {
		if (t === it)
			return (
				(ze.left = ze.top = 0),
				(ze.width = ze.right =
					ee.clientWidth || t.innerWidth || pe.clientWidth || 0),
				(ze.height = ze.bottom =
					(t.innerHeight || 0) - 20 < ee.clientHeight
						? ee.clientHeight
						: t.innerHeight || pe.clientHeight || 0),
				ze
			);
		var e = t.ownerDocument || Nt,
			i = Jt(t.pageX)
				? !t.nodeType && !Jt(t.left) && !Jt(t.top)
					? t
					: ke(t)[0].getBoundingClientRect()
				: {
						left: t.pageX - _i(e),
						top: t.pageY - di(e),
						right: t.pageX - _i(e) + 1,
						bottom: t.pageY - di(e) + 1,
				  };
		return (
			Jt(i.right) && !Jt(i.width)
				? ((i.right = i.left + i.width), (i.bottom = i.top + i.height))
				: Jt(i.width) &&
				  (i = {
						width: i.right - i.left,
						height: i.bottom - i.top,
						right: i.right,
						left: i.left,
						bottom: i.bottom,
						top: i.top,
				  }),
			i
		);
	},
	ut = function (t, e, i) {
		var r = t.vars,
			n = r[i],
			s = t._listeners[e],
			o;
		return (
			be(n) &&
				(o = n.apply(
					r.callbackScope || t,
					r[i + 'Params'] || [t.pointerEvent]
				)),
			s && t.dispatchEvent(e) === !1 && (o = !1),
			o
		);
	},
	$s = function (t, e) {
		var i = ke(t)[0],
			r,
			n,
			s;
		return !i.nodeType && i !== it
			? Jt(t.left)
				? ((n = t.min || t.minX || t.minRotation || 0),
				  (r = t.min || t.minY || 0),
				  {
						left: n,
						top: r,
						width: (t.max || t.maxX || t.maxRotation || 0) - n,
						height: (t.max || t.maxY || 0) - r,
				  })
				: ((s = { x: 0, y: 0 }),
				  {
						left: t.left - s.x,
						top: t.top - s.y,
						width: t.width,
						height: t.height,
				  })
			: hu(i, e);
	},
	Ut = {},
	hu = function (t, e) {
		e = ke(e)[0];
		var i = t.getBBox && t.ownerSVGElement,
			r = t.ownerDocument || Nt,
			n,
			s,
			o,
			f,
			u,
			c,
			d,
			_,
			a,
			p,
			h,
			m,
			v;
		if (t === it)
			(o = di(r)),
				(n = _i(r)),
				(s =
					n +
					(r.documentElement.clientWidth ||
						t.innerWidth ||
						r.body.clientWidth ||
						0)),
				(f =
					o +
					((t.innerHeight || 0) - 20 < r.documentElement.clientHeight
						? r.documentElement.clientHeight
						: t.innerHeight || r.body.clientHeight || 0));
		else {
			if (e === it || Jt(e)) return t.getBoundingClientRect();
			(n = o = 0),
				i
					? ((p = t.getBBox()), (h = p.width), (m = p.height))
					: (t.viewBox &&
							(p = t.viewBox.baseVal) &&
							((n = p.x || 0), (o = p.y || 0), (h = p.width), (m = p.height)),
					  h ||
							((v = ir(t)),
							(p = v.boxSizing === 'border-box'),
							(h =
								(parseFloat(v.width) || t.clientWidth || 0) +
								(p
									? 0
									: parseFloat(v.borderLeftWidth) +
									  parseFloat(v.borderRightWidth))),
							(m =
								(parseFloat(v.height) || t.clientHeight || 0) +
								(p
									? 0
									: parseFloat(v.borderTopWidth) +
									  parseFloat(v.borderBottomWidth))))),
				(s = h),
				(f = m);
		}
		return t === e
			? { left: n, top: o, width: s - n, height: f - o }
			: ((u = Xe(e, !0).multiply(Xe(t))),
			  (c = u.apply({ x: n, y: o })),
			  (d = u.apply({ x: s, y: o })),
			  (_ = u.apply({ x: s, y: f })),
			  (a = u.apply({ x: n, y: f })),
			  (n = Math.min(c.x, d.x, _.x, a.x)),
			  (o = Math.min(c.y, d.y, _.y, a.y)),
			  {
					left: n,
					top: o,
					width: Math.max(c.x, d.x, _.x, a.x) - n,
					height: Math.max(c.y, d.y, _.y, a.y) - o,
			  });
	},
	rn = function (t, e, i, r, n, s) {
		var o = {},
			f,
			u,
			c;
		if (e)
			if (n !== 1 && e instanceof Array) {
				if (((o.end = f = []), (c = e.length), Wi(e[0])))
					for (u = 0; u < c; u++) f[u] = fa(e[u], n);
				else for (u = 0; u < c; u++) f[u] = e[u] * n;
				(i += 1.1), (r -= 1.1);
			} else
				be(e)
					? (o.end = function (d) {
							var _ = e.call(t, d),
								a,
								p;
							if (n !== 1)
								if (Wi(_)) {
									a = {};
									for (p in _) a[p] = _[p] * n;
									_ = a;
								} else _ *= n;
							return _;
					  })
					: (o.end = e);
		return (
			(i || i === 0) && (o.max = i),
			(r || r === 0) && (o.min = r),
			s && (o.velocity = 0),
			o
		);
	},
	du = function l(t) {
		var e;
		return !t || !t.getAttribute || t === pe
			? !1
			: (e = t.getAttribute('data-clickable')) === 'true' ||
			  (e !== 'false' &&
					(ou.test(t.nodeName + '') ||
						t.getAttribute('contentEditable') === 'true'))
			? !0
			: l(t.parentNode);
	},
	hr = function (t, e) {
		for (var i = t.length, r; i--; )
			(r = t[i]),
				(r.ondragstart = r.onselectstart = e ? null : yr),
				U.set(r, { lazy: !0, userSelect: e ? 'text' : 'none' });
	},
	_u = function l(t) {
		if (ir(t).position === 'fixed') return !0;
		if (((t = t.parentNode), t && t.nodeType === 1)) return l(t);
	},
	ha,
	kn,
	pu = function (t, e) {
		(t = U.utils.toArray(t)[0]), (e = e || {});
		var i = document.createElement('div'),
			r = i.style,
			n = t.firstChild,
			s = 0,
			o = 0,
			f = t.scrollTop,
			u = t.scrollLeft,
			c = t.scrollWidth,
			d = t.scrollHeight,
			_ = 0,
			a = 0,
			p = 0,
			h,
			m,
			v,
			T,
			b,
			S;
		ha && e.force3D !== !1
			? ((b = 'translate3d('), (S = 'px,0px)'))
			: Vi && ((b = 'translate('), (S = 'px)')),
			(this.scrollTop = function (y, P) {
				if (!arguments.length) return -this.top();
				this.top(-y, P);
			}),
			(this.scrollLeft = function (y, P) {
				if (!arguments.length) return -this.left();
				this.left(-y, P);
			}),
			(this.left = function (y, P) {
				if (!arguments.length) return -(t.scrollLeft + o);
				var k = t.scrollLeft - u,
					w = o;
				if ((k > 2 || k < -2) && !P) {
					(u = t.scrollLeft),
						U.killTweensOf(this, { left: 1, scrollLeft: 1 }),
						this.left(-u),
						e.onKill && e.onKill();
					return;
				}
				(y = -y),
					y < 0
						? ((o = (y - 0.5) | 0), (y = 0))
						: y > a
						? ((o = (y - a) | 0), (y = a))
						: (o = 0),
					(o || w) &&
						(this._skip || (r[Vi] = b + -o + 'px,' + -s + S),
						o + _ >= 0 && (r.paddingRight = o + _ + 'px')),
					(t.scrollLeft = y | 0),
					(u = t.scrollLeft);
			}),
			(this.top = function (y, P) {
				if (!arguments.length) return -(t.scrollTop + s);
				var k = t.scrollTop - f,
					w = s;
				if ((k > 2 || k < -2) && !P) {
					(f = t.scrollTop),
						U.killTweensOf(this, { top: 1, scrollTop: 1 }),
						this.top(-f),
						e.onKill && e.onKill();
					return;
				}
				(y = -y),
					y < 0
						? ((s = (y - 0.5) | 0), (y = 0))
						: y > p
						? ((s = (y - p) | 0), (y = p))
						: (s = 0),
					(s || w) && (this._skip || (r[Vi] = b + -o + 'px,' + -s + S)),
					(t.scrollTop = y | 0),
					(f = t.scrollTop);
			}),
			(this.maxScrollTop = function () {
				return p;
			}),
			(this.maxScrollLeft = function () {
				return a;
			}),
			(this.disable = function () {
				for (n = i.firstChild; n; )
					(T = n.nextSibling), t.appendChild(n), (n = T);
				t === i.parentNode && t.removeChild(i);
			}),
			(this.enable = function () {
				if (((n = t.firstChild), n !== i)) {
					for (; n; ) (T = n.nextSibling), i.appendChild(n), (n = T);
					t.appendChild(i), this.calibrate();
				}
			}),
			(this.calibrate = function (y) {
				var P = t.clientWidth === h,
					k,
					w,
					C;
				(f = t.scrollTop),
					(u = t.scrollLeft),
					!(
						P &&
						t.clientHeight === m &&
						i.offsetHeight === v &&
						c === t.scrollWidth &&
						d === t.scrollHeight &&
						!y
					) &&
						((s || o) &&
							((w = this.left()),
							(C = this.top()),
							this.left(-t.scrollLeft),
							this.top(-t.scrollTop)),
						(k = ir(t)),
						(!P || y) &&
							((r.display = 'block'),
							(r.width = 'auto'),
							(r.paddingRight = '0px'),
							(_ = Math.max(0, t.scrollWidth - t.clientWidth)),
							_ &&
								(_ +=
									parseFloat(k.paddingLeft) +
									(kn ? parseFloat(k.paddingRight) : 0))),
						(r.display = 'inline-block'),
						(r.position = 'relative'),
						(r.overflow = 'visible'),
						(r.verticalAlign = 'top'),
						(r.boxSizing = 'content-box'),
						(r.width = '100%'),
						(r.paddingRight = _ + 'px'),
						kn && (r.paddingBottom = k.paddingBottom),
						(h = t.clientWidth),
						(m = t.clientHeight),
						(c = t.scrollWidth),
						(d = t.scrollHeight),
						(a = t.scrollWidth - h),
						(p = t.scrollHeight - m),
						(v = i.offsetHeight),
						(r.display = 'block'),
						(w || C) && (this.left(w), this.top(C)));
			}),
			(this.content = i),
			(this.element = t),
			(this._skip = !1),
			this.enable();
	},
	nn = function (t) {
		if (la() && document.body) {
			var e = window && window.navigator;
			(it = window),
				(Nt = document),
				(ee = Nt.documentElement),
				(pe = Nt.body),
				(Jr = cr('div')),
				(mr = !!window.PointerEvent),
				(de = cr('div')),
				(de.style.cssText =
					'visibility:hidden;height:1px;top:-1px;pointer-events:none;position:relative;clear:both;cursor:grab'),
				(Ii = de.style.cursor === 'grab' ? 'grab' : 'move'),
				(Fi = e && e.userAgent.toLowerCase().indexOf('android') !== -1),
				(Sn =
					('ontouchstart' in ee && 'orientation' in it) ||
					(e && (e.MaxTouchPoints > 0 || e.msMaxTouchPoints > 0))),
				(kn = (function () {
					var i = cr('div'),
						r = cr('div'),
						n = r.style,
						s = pe,
						o;
					return (
						(n.display = 'inline-block'),
						(n.position = 'relative'),
						(i.style.cssText =
							'width:90px;height:40px;padding:10px;overflow:auto;visibility:hidden'),
						i.appendChild(r),
						s.appendChild(i),
						(o = r.offsetHeight + 18 > i.scrollHeight),
						s.removeChild(i),
						o
					);
				})()),
				(er = (function (i) {
					for (
						var r = i.split(','),
							n = (
								('onpointerdown' in Jr)
									? 'pointerdown,pointermove,pointerup,pointercancel'
									: ('onmspointerdown' in Jr)
									? 'MSPointerDown,MSPointerMove,MSPointerUp,MSPointerCancel'
									: i
							).split(','),
							s = {},
							o = 4;
						--o > -1;

					)
						(s[r[o]] = n[o]), (s[n[o]] = r[o]);
					try {
						ee.addEventListener(
							'test',
							null,
							Object.defineProperty({}, 'passive', {
								get: function () {
									oa = 1;
								},
							})
						);
					} catch {}
					return s;
				})('touchstart,touchmove,touchend,touchcancel')),
				pt(Nt, 'touchcancel', yr),
				pt(it, 'touchmove', yr),
				pe && pe.addEventListener('touchstart', yr),
				pt(Nt, 'contextmenu', function () {
					for (var i in hi) hi[i].isPressed && hi[i].endDrag();
				}),
				(U = bn = ua());
		}
		U
			? ((Zt = U.plugins.inertia),
			  (aa = U.core.context || function () {}),
			  (Ni = U.utils.checkPrefix),
			  (Vi = Ni(Vi)),
			  (Cn = Ni(Cn)),
			  (ke = U.utils.toArray),
			  (Pn = U.core.getStyleSaver),
			  (ha = !!Ni('perspective')))
			: t && console.warn('Please gsap.registerPlugin(Draggable)');
	},
	gu = (function () {
		function l(e) {
			(this._listeners = {}), (this.target = e || this);
		}
		var t = l.prototype;
		return (
			(t.addEventListener = function (i, r) {
				var n = this._listeners[i] || (this._listeners[i] = []);
				~n.indexOf(r) || n.push(r);
			}),
			(t.removeEventListener = function (i, r) {
				var n = this._listeners[i],
					s = n && n.indexOf(r);
				s >= 0 && n.splice(s, 1);
			}),
			(t.dispatchEvent = function (i) {
				var r = this,
					n;
				return (
					(this._listeners[i] || []).forEach(function (s) {
						return s.call(r, { type: i, target: r.target }) === !1 && (n = !1);
					}),
					n
				);
			}),
			l
		);
	})(),
	bi = (function (l) {
		ru(t, l);
		function t(e, i) {
			var r;
			(r = l.call(this) || this),
				bn || nn(1),
				(e = ke(e)[0]),
				(r.styles = Pn && Pn(e, 'transform,left,top')),
				Zt || (Zt = U.plugins.inertia),
				(r.vars = i = fa(i || {})),
				(r.target = e),
				(r.x = r.y = r.rotation = 0),
				(r.dragResistance = parseFloat(i.dragResistance) || 0),
				(r.edgeResistance = isNaN(i.edgeResistance)
					? 1
					: parseFloat(i.edgeResistance) || 0),
				(r.lockAxis = i.lockAxis),
				(r.autoScroll = i.autoScroll || 0),
				(r.lockedAxis = null),
				(r.allowEventDefault = !!i.allowEventDefault),
				U.getProperty(e, 'x');
			var n = (i.type || 'x,y').toLowerCase(),
				s = ~n.indexOf('x') || ~n.indexOf('y'),
				o = n.indexOf('rotation') !== -1,
				f = o ? 'rotation' : s ? 'x' : 'left',
				u = s ? 'y' : 'top',
				c = !!(~n.indexOf('x') || ~n.indexOf('left') || n === 'scroll'),
				d = !!(~n.indexOf('y') || ~n.indexOf('top') || n === 'scroll'),
				_ = i.minimumMovement || 2,
				a = As(r),
				p = ke(i.trigger || i.handle || e),
				h = {},
				m = 0,
				v = !1,
				T = i.autoScrollMarginTop || 40,
				b = i.autoScrollMarginRight || 40,
				S = i.autoScrollMarginBottom || 40,
				y = i.autoScrollMarginLeft || 40,
				P = i.clickableTest || du,
				k = 0,
				w = e._gsap || U.core.getCache(e),
				C = _u(e),
				I = function (g, M) {
					return parseFloat(w.get(e, g, M));
				},
				R = e.ownerDocument || Nt,
				L,
				O,
				W,
				X,
				z,
				B,
				tt,
				rt,
				j,
				V,
				Y,
				K,
				G,
				Yt,
				Xt,
				Si,
				mt,
				Fr,
				ye,
				xe,
				Le,
				Pi,
				xt,
				Q,
				ls,
				$t,
				jt,
				Ir,
				Br,
				us,
				At,
				fs,
				ar,
				cs = function (g) {
					return (
						Vt(g),
						g.stopImmediatePropagation && g.stopImmediatePropagation(),
						!1
					);
				},
				ie = function F(g) {
					if (a.autoScroll && a.isDragging && (v || mt)) {
						var M = e,
							x = a.autoScroll * 15,
							E,
							D,
							A,
							$,
							N,
							Z,
							q,
							J;
						for (
							v = !1,
								fe.scrollTop =
									it.pageYOffset != null
										? it.pageYOffset
										: R.documentElement.scrollTop != null
										? R.documentElement.scrollTop
										: R.body.scrollTop,
								fe.scrollLeft =
									it.pageXOffset != null
										? it.pageXOffset
										: R.documentElement.scrollLeft != null
										? R.documentElement.scrollLeft
										: R.body.scrollLeft,
								$ = a.pointerX - fe.scrollLeft,
								N = a.pointerY - fe.scrollTop;
							M && !D;

						)
							(D = Ti(M.parentNode)),
								(E = D ? fe : M.parentNode),
								(A = D
									? {
											bottom: Math.max(ee.clientHeight, it.innerHeight || 0),
											right: Math.max(ee.clientWidth, it.innerWidth || 0),
											left: 0,
											top: 0,
									  }
									: E.getBoundingClientRect()),
								(Z = q = 0),
								d &&
									((J = E._gsMaxScrollY - E.scrollTop),
									J < 0
										? (q = J)
										: N > A.bottom - S && J
										? ((v = !0),
										  (q = Math.min(
												J,
												(x * (1 - Math.max(0, A.bottom - N) / S)) | 0
										  )))
										: N < A.top + T &&
										  E.scrollTop &&
										  ((v = !0),
										  (q = -Math.min(
												E.scrollTop,
												(x * (1 - Math.max(0, N - A.top) / T)) | 0
										  ))),
									q && (E.scrollTop += q)),
								c &&
									((J = E._gsMaxScrollX - E.scrollLeft),
									J < 0
										? (Z = J)
										: $ > A.right - b && J
										? ((v = !0),
										  (Z = Math.min(
												J,
												(x * (1 - Math.max(0, A.right - $) / b)) | 0
										  )))
										: $ < A.left + y &&
										  E.scrollLeft &&
										  ((v = !0),
										  (Z = -Math.min(
												E.scrollLeft,
												(x * (1 - Math.max(0, $ - A.left) / y)) | 0
										  ))),
									Z && (E.scrollLeft += Z)),
								D &&
									(Z || q) &&
									(it.scrollTo(E.scrollLeft, E.scrollTop),
									Mi(a.pointerX + Z, a.pointerY + q)),
								(M = E);
					}
					if (mt) {
						var lt = a.x,
							Tt = a.y;
						o
							? ((a.deltaX = lt - parseFloat(w.rotation)),
							  (a.rotation = lt),
							  (w.rotation = lt + 'deg'),
							  w.renderTransform(1, w))
							: O
							? (d && ((a.deltaY = Tt - O.top()), O.top(Tt)),
							  c && ((a.deltaX = lt - O.left()), O.left(lt)))
							: s
							? (d && ((a.deltaY = Tt - parseFloat(w.y)), (w.y = Tt + 'px')),
							  c && ((a.deltaX = lt - parseFloat(w.x)), (w.x = lt + 'px')),
							  w.renderTransform(1, w))
							: (d &&
									((a.deltaY = Tt - parseFloat(e.style.top || 0)),
									(e.style.top = Tt + 'px')),
							  c &&
									((a.deltaX = lt - parseFloat(e.style.left || 0)),
									(e.style.left = lt + 'px'))),
							rt &&
								!g &&
								!Ir &&
								((Ir = !0),
								ut(a, 'drag', 'onDrag') === !1 &&
									(c && (a.x -= a.deltaX), d && (a.y -= a.deltaY), F(!0)),
								(Ir = !1));
					}
					mt = !1;
				},
				Ne = function (g, M) {
					var x = a.x,
						E = a.y,
						D,
						A;
					e._gsap || (w = U.core.getCache(e)),
						w.uncache && U.getProperty(e, 'x'),
						s
							? ((a.x = parseFloat(w.x)), (a.y = parseFloat(w.y)))
							: o
							? (a.x = a.rotation = parseFloat(w.rotation))
							: O
							? ((a.y = O.top()), (a.x = O.left()))
							: ((a.y = parseFloat(e.style.top || ((A = ir(e)) && A.top)) || 0),
							  (a.x = parseFloat(e.style.left || (A || {}).left) || 0)),
						(ye || xe || Le) &&
							!M &&
							(a.isDragging || a.isThrowing) &&
							(Le &&
								((ei.x = a.x),
								(ei.y = a.y),
								(D = Le(ei)),
								D.x !== a.x && ((a.x = D.x), (mt = !0)),
								D.y !== a.y && ((a.y = D.y), (mt = !0))),
							ye &&
								((D = ye(a.x)),
								D !== a.x && ((a.x = D), o && (a.rotation = D), (mt = !0))),
							xe && ((D = xe(a.y)), D !== a.y && (a.y = D), (mt = !0))),
						mt && ie(!0),
						g ||
							((a.deltaX = a.x - x),
							(a.deltaY = a.y - E),
							ut(a, 'throwupdate', 'onThrowUpdate'));
				},
				zr = function (g, M, x, E) {
					return (
						M == null && (M = -1e20),
						x == null && (x = ti),
						be(g)
							? function (D) {
									var A = a.isPressed ? 1 - a.edgeResistance : 1;
									return (
										g.call(
											a,
											(D > x ? x + (D - x) * A : D < M ? M + (D - M) * A : D) *
												E
										) * E
									);
							  }
							: Oi(g)
							? function (D) {
									for (var A = g.length, $ = 0, N = ti, Z, q; --A > -1; )
										(Z = g[A]),
											(q = Z - D),
											q < 0 && (q = -q),
											q < N && Z >= M && Z <= x && (($ = A), (N = q));
									return g[$];
							  }
							: isNaN(g)
							? function (D) {
									return D;
							  }
							: function () {
									return g * E;
							  }
					);
				},
				Aa = function (g, M, x, E, D, A, $) {
					return (
						(A = A && A < ti ? A * A : ti),
						be(g)
							? function (N) {
									var Z = a.isPressed ? 1 - a.edgeResistance : 1,
										q = N.x,
										J = N.y,
										lt,
										Tt,
										ue;
									return (
										(N.x = q =
											q > x ? x + (q - x) * Z : q < M ? M + (q - M) * Z : q),
										(N.y = J =
											J > D ? D + (J - D) * Z : J < E ? E + (J - E) * Z : J),
										(lt = g.call(a, N)),
										lt !== N && ((N.x = lt.x), (N.y = lt.y)),
										$ !== 1 && ((N.x *= $), (N.y *= $)),
										A < ti &&
											((Tt = N.x - q),
											(ue = N.y - J),
											Tt * Tt + ue * ue > A && ((N.x = q), (N.y = J))),
										N
									);
							  }
							: Oi(g)
							? function (N) {
									for (
										var Z = g.length, q = 0, J = ti, lt, Tt, ue, Wt;
										--Z > -1;

									)
										(ue = g[Z]),
											(lt = ue.x - N.x),
											(Tt = ue.y - N.y),
											(Wt = lt * lt + Tt * Tt),
											Wt < J && ((q = Z), (J = Wt));
									return J <= A ? g[q] : N;
							  }
							: function (N) {
									return N;
							  }
					);
				},
				Yr = function () {
					var g, M, x, E;
					(tt = !1),
						O
							? (O.calibrate(),
							  (a.minX = Y = -O.maxScrollLeft()),
							  (a.minY = G = -O.maxScrollTop()),
							  (a.maxX = V = a.maxY = K = 0),
							  (tt = !0))
							: i.bounds &&
							  ((g = $s(i.bounds, e.parentNode)),
							  o
									? ((a.minX = Y = g.left),
									  (a.maxX = V = g.left + g.width),
									  (a.minY = G = a.maxY = K = 0))
									: !Jt(i.bounds.maxX) || !Jt(i.bounds.maxY)
									? ((g = i.bounds),
									  (a.minX = Y = g.minX),
									  (a.minY = G = g.minY),
									  (a.maxX = V = g.maxX),
									  (a.maxY = K = g.maxY))
									: ((M = $s(e, e.parentNode)),
									  (a.minX = Y = Math.round(I(f, 'px') + g.left - M.left)),
									  (a.minY = G = Math.round(I(u, 'px') + g.top - M.top)),
									  (a.maxX = V = Math.round(Y + (g.width - M.width))),
									  (a.maxY = K = Math.round(G + (g.height - M.height)))),
							  Y > V && ((a.minX = V), (a.maxX = V = Y), (Y = a.minX)),
							  G > K && ((a.minY = K), (a.maxY = K = G), (G = a.minY)),
							  o && ((a.minRotation = Y), (a.maxRotation = V)),
							  (tt = !0)),
						i.liveSnap &&
							((x = i.liveSnap === !0 ? i.snap || {} : i.liveSnap),
							(E = Oi(x) || be(x)),
							o
								? ((ye = zr(E ? x : x.rotation, Y, V, 1)), (xe = null))
								: x.points
								? (Le = Aa(E ? x : x.points, Y, V, G, K, x.radius, O ? -1 : 1))
								: (c &&
										(ye = zr(
											E ? x : x.x || x.left || x.scrollLeft,
											Y,
											V,
											O ? -1 : 1
										)),
								  d &&
										(xe = zr(
											E ? x : x.y || x.top || x.scrollTop,
											G,
											K,
											O ? -1 : 1
										))));
				},
				Ra = function () {
					(a.isThrowing = !1), ut(a, 'throwcomplete', 'onThrowComplete');
				},
				La = function () {
					a.isThrowing = !1;
				},
				Xr = function (g, M) {
					var x, E, D, A;
					g && Zt
						? (g === !0 &&
								((x = i.snap || i.liveSnap || {}),
								(E = Oi(x) || be(x)),
								(g = {
									resistance:
										(i.throwResistance || i.resistance || 1e3) / (o ? 10 : 1),
								}),
								o
									? (g.rotation = rn(a, E ? x : x.rotation, V, Y, 1, M))
									: (c &&
											(g[f] = rn(
												a,
												E ? x : x.points || x.x || x.left,
												V,
												Y,
												O ? -1 : 1,
												M || a.lockedAxis === 'x'
											)),
									  d &&
											(g[u] = rn(
												a,
												E ? x : x.points || x.y || x.top,
												K,
												G,
												O ? -1 : 1,
												M || a.lockedAxis === 'y'
											)),
									  (x.points || (Oi(x) && Wi(x[0]))) &&
											((g.linkedProps = f + ',' + u), (g.radius = x.radius)))),
						  (a.isThrowing = !0),
						  (A = isNaN(i.overshootTolerance)
								? i.edgeResistance === 1
									? 0
									: 1 - a.edgeResistance + 0.2
								: i.overshootTolerance),
						  g.duration ||
								(g.duration = {
									max: Math.max(
										i.minDuration || 0,
										'maxDuration' in i ? i.maxDuration : 2
									),
									min: isNaN(i.minDuration)
										? A === 0 || (Wi(g) && g.resistance > 1e3)
											? 0
											: 0.5
										: i.minDuration,
									overshoot: A,
								}),
						  (a.tween = D =
								U.to(O || e, {
									inertia: g,
									data: '_draggable',
									inherit: !1,
									onComplete: Ra,
									onInterrupt: La,
									onUpdate: i.fastMode ? ut : Ne,
									onUpdateParams: i.fastMode
										? [a, 'onthrowupdate', 'onThrowUpdate']
										: x && x.radius
										? [!1, !0]
										: [],
								})),
						  i.fastMode ||
								(O && (O._skip = !0),
								D.render(1e9, !0, !0),
								Ne(!0, !0),
								(a.endX = a.x),
								(a.endY = a.y),
								o && (a.endRotation = a.x),
								D.play(0),
								Ne(!0, !0),
								O && (O._skip = !1)))
						: tt && a.applyBounds();
				},
				hs = function (g) {
					var M = Q,
						x;
					(Q = Xe(e.parentNode, !0)),
						g &&
							a.isPressed &&
							!Q.equals(M || new Ke()) &&
							((x = M.inverse().apply({ x: W, y: X })),
							Q.apply(x, x),
							(W = x.x),
							(X = x.y)),
						Q.equals(nu) && (Q = null);
				},
				lr = function () {
					var g = 1 - a.edgeResistance,
						M = C ? _i(R) : 0,
						x = C ? di(R) : 0,
						E,
						D,
						A;
					s &&
						((w.x = I(f, 'px') + 'px'),
						(w.y = I(u, 'px') + 'px'),
						w.renderTransform()),
						hs(!1),
						(Ut.x = a.pointerX - M),
						(Ut.y = a.pointerY - x),
						Q && Q.apply(Ut, Ut),
						(W = Ut.x),
						(X = Ut.y),
						mt && (Mi(a.pointerX, a.pointerY), ie(!0)),
						(fs = Xe(e)),
						O
							? (Yr(), (B = O.top()), (z = O.left()))
							: (Ci() ? (Ne(!0, !0), Yr()) : a.applyBounds(),
							  o
									? ((E = e.ownerSVGElement
											? [w.xOrigin - e.getBBox().x, w.yOrigin - e.getBBox().y]
											: (ir(e)[Cn] || '0 0').split(' ')),
									  (Si = a.rotationOrigin =
											Xe(e).apply({
												x: parseFloat(E[0]) || 0,
												y: parseFloat(E[1]) || 0,
											})),
									  Ne(!0, !0),
									  (D = a.pointerX - Si.x - M),
									  (A = Si.y - a.pointerY + x),
									  (z = a.x),
									  (B = a.y = Math.atan2(A, D) * Rs))
									: ((B = I(u, 'px')), (z = I(f, 'px')))),
						tt &&
							g &&
							(z > V ? (z = V + (z - V) / g) : z < Y && (z = Y - (Y - z) / g),
							o ||
								(B > K
									? (B = K + (B - K) / g)
									: B < G && (B = G - (G - B) / g))),
						(a.startX = z = we(z)),
						(a.startY = B = we(B));
				},
				Ci = function () {
					return a.tween && a.tween.isActive();
				},
				Na = function () {
					de.parentNode &&
						!Ci() &&
						!a.isDragging &&
						de.parentNode.removeChild(de);
				},
				ki = function (g, M) {
					var x;
					if (
						!L ||
						a.isPressed ||
						!g ||
						((g.type === 'mousedown' || g.type === 'pointerdown') &&
							!M &&
							Te() - k < 30 &&
							er[a.pointerEvent.type])
					) {
						At && g && L && Vt(g);
						return;
					}
					if (
						((ls = Ci()),
						(ar = !1),
						(a.pointerEvent = g),
						er[g.type]
							? ((xt = ~g.type.indexOf('touch')
									? g.currentTarget || g.target
									: R),
							  pt(xt, 'touchend', Kt),
							  pt(xt, 'touchmove', Fe),
							  pt(xt, 'touchcancel', Kt),
							  pt(R, 'touchstart', Bs))
							: ((xt = null), pt(R, 'mousemove', Fe)),
						(jt = null),
						(!mr || !xt) &&
							(pt(R, 'mouseup', Kt),
							g && g.target && pt(g.target, 'mouseup', Kt)),
						(Pi = P.call(a, g.target) && i.dragClickables === !1 && !M),
						Pi)
					) {
						pt(g.target, 'change', Kt),
							ut(a, 'pressInit', 'onPressInit'),
							ut(a, 'press', 'onPress'),
							hr(p, !0),
							(At = !1);
						return;
					}
					if (
						(($t =
							!xt ||
							c === d ||
							a.vars.allowNativeTouchScrolling === !1 ||
							(a.vars.allowContextMenu && g && (g.ctrlKey || g.which > 2))
								? !1
								: c
								? 'y'
								: 'x'),
						(At = !$t && !a.allowEventDefault),
						At && (Vt(g), pt(it, 'touchforcechange', Vt)),
						g.changedTouches
							? ((g = Yt = g.changedTouches[0]), (Xt = g.identifier))
							: g.pointerId
							? (Xt = g.pointerId)
							: (Yt = Xt = null),
						kr++,
						lu(ie),
						(X = a.pointerY = g.pageY),
						(W = a.pointerX = g.pageX),
						ut(a, 'pressInit', 'onPressInit'),
						($t || a.autoScroll) && tn(e.parentNode),
						e.parentNode &&
							a.autoScroll &&
							!O &&
							!o &&
							e.parentNode._gsMaxScrollX &&
							!de.parentNode &&
							!e.getBBox &&
							((de.style.width = e.parentNode.scrollWidth + 'px'),
							e.parentNode.appendChild(de)),
						lr(),
						a.tween && a.tween.kill(),
						(a.isThrowing = !1),
						U.killTweensOf(O || e, h, !0),
						O && U.killTweensOf(e, { scrollTo: 1 }, !0),
						(a.tween = a.lockedAxis = null),
						(i.zIndexBoost || (!o && !O && i.zIndexBoost !== !1)) &&
							(e.style.zIndex = t.zIndex++),
						(a.isPressed = !0),
						(rt = !!(i.onDrag || a._listeners.drag)),
						(j = !!(i.onMove || a._listeners.move)),
						i.cursor !== !1 || i.activeCursor)
					)
						for (x = p.length; --x > -1; )
							U.set(p[x], {
								cursor:
									i.activeCursor ||
									i.cursor ||
									(Ii === 'grab' ? 'grabbing' : Ii),
							});
					ut(a, 'press', 'onPress');
				},
				Fe = function (g) {
					var M = g,
						x,
						E,
						D,
						A,
						$,
						N;
					if (!L || ns || !a.isPressed || !g) {
						At && g && L && Vt(g);
						return;
					}
					if (((a.pointerEvent = g), (x = g.changedTouches), x)) {
						if (((g = x[0]), g !== Yt && g.identifier !== Xt)) {
							for (
								A = x.length;
								--A > -1 && (g = x[A]).identifier !== Xt && g.target !== e;

							);
							if (A < 0) return;
						}
					} else if (g.pointerId && Xt && g.pointerId !== Xt) return;
					if (
						xt &&
						$t &&
						!jt &&
						((Ut.x = g.pageX - (C ? _i(R) : 0)),
						(Ut.y = g.pageY - (C ? di(R) : 0)),
						Q && Q.apply(Ut, Ut),
						(E = Ut.x),
						(D = Ut.y),
						($ = Math.abs(E - W)),
						(N = Math.abs(D - X)),
						(($ !== N && ($ > _ || N > _)) || (Fi && $t === jt)) &&
							((jt = $ > N && c ? 'x' : 'y'),
							$t && jt !== $t && pt(it, 'touchforcechange', Vt),
							a.vars.lockAxisOnTouchScroll !== !1 &&
								c &&
								d &&
								((a.lockedAxis = jt === 'x' ? 'y' : 'x'),
								be(a.vars.onLockAxis) && a.vars.onLockAxis.call(a, M)),
							Fi && $t === jt))
					) {
						Kt(M);
						return;
					}
					!a.allowEventDefault &&
					(!$t || (jt && $t !== jt)) &&
					M.cancelable !== !1
						? (Vt(M), (At = !0))
						: At && (At = !1),
						a.autoScroll && (v = !0),
						Mi(g.pageX, g.pageY, j);
				},
				Mi = function (g, M, x) {
					var E = 1 - a.dragResistance,
						D = 1 - a.edgeResistance,
						A = a.pointerX,
						$ = a.pointerY,
						N = B,
						Z = a.x,
						q = a.y,
						J = a.endX,
						lt = a.endY,
						Tt = a.endRotation,
						ue = mt,
						Wt,
						ve,
						vt,
						ct,
						$r,
						Qt;
					(a.pointerX = g),
						(a.pointerY = M),
						C && ((g -= _i(R)), (M -= di(R))),
						o
							? ((ct = Math.atan2(Si.y - M, g - Si.x) * Rs),
							  ($r = a.y - ct),
							  $r > 180
									? ((B -= 360), (a.y = ct))
									: $r < -180 && ((B += 360), (a.y = ct)),
							  a.x !== z || Math.max(Math.abs(W - g), Math.abs(X - M)) > _
									? ((a.y = ct), (vt = z + (B - ct) * E))
									: (vt = z))
							: (Q &&
									((Qt = g * Q.a + M * Q.c + Q.e),
									(M = g * Q.b + M * Q.d + Q.f),
									(g = Qt)),
							  (ve = M - X),
							  (Wt = g - W),
							  ve < _ && ve > -_ && (ve = 0),
							  Wt < _ && Wt > -_ && (Wt = 0),
							  (a.lockAxis || a.lockedAxis) &&
									(Wt || ve) &&
									((Qt = a.lockedAxis),
									Qt ||
										((a.lockedAxis = Qt =
											c && Math.abs(Wt) > Math.abs(ve) ? 'y' : d ? 'x' : null),
										Qt &&
											be(a.vars.onLockAxis) &&
											a.vars.onLockAxis.call(a, a.pointerEvent)),
									Qt === 'y' ? (ve = 0) : Qt === 'x' && (Wt = 0)),
							  (vt = we(z + Wt * E)),
							  (ct = we(B + ve * E))),
						(ye || xe || Le) &&
							(a.x !== vt || (a.y !== ct && !o)) &&
							(Le &&
								((ei.x = vt),
								(ei.y = ct),
								(Qt = Le(ei)),
								(vt = we(Qt.x)),
								(ct = we(Qt.y))),
							ye && (vt = we(ye(vt))),
							xe && (ct = we(xe(ct)))),
						tt &&
							(vt > V
								? (vt = V + Math.round((vt - V) * D))
								: vt < Y && (vt = Y + Math.round((vt - Y) * D)),
							o ||
								(ct > K
									? (ct = Math.round(K + (ct - K) * D))
									: ct < G && (ct = Math.round(G + (ct - G) * D)))),
						(a.x !== vt || (a.y !== ct && !o)) &&
							(o
								? ((a.endRotation = a.x = a.endX = vt), (mt = !0))
								: (d && ((a.y = a.endY = ct), (mt = !0)),
								  c && ((a.x = a.endX = vt), (mt = !0))),
							!x || ut(a, 'move', 'onMove') !== !1
								? !a.isDragging &&
								  a.isPressed &&
								  ((a.isDragging = ar = !0), ut(a, 'dragstart', 'onDragStart'))
								: ((a.pointerX = A),
								  (a.pointerY = $),
								  (B = N),
								  (a.x = Z),
								  (a.y = q),
								  (a.endX = J),
								  (a.endY = lt),
								  (a.endRotation = Tt),
								  (mt = ue)));
				},
				Kt = function F(g, M) {
					if (
						!L ||
						!a.isPressed ||
						(g &&
							Xt != null &&
							!M &&
							((g.pointerId && g.pointerId !== Xt && g.target !== e) ||
								(g.changedTouches && !fu(g.changedTouches, Xt))))
					) {
						At && g && L && Vt(g);
						return;
					}
					a.isPressed = !1;
					var x = g,
						E = a.isDragging,
						D = a.vars.allowContextMenu && g && (g.ctrlKey || g.which > 2),
						A = U.delayedCall(0.001, Na),
						$,
						N,
						Z,
						q,
						J;
					if (
						(xt
							? (ht(xt, 'touchend', F),
							  ht(xt, 'touchmove', Fe),
							  ht(xt, 'touchcancel', F),
							  ht(R, 'touchstart', Bs))
							: ht(R, 'mousemove', Fe),
						ht(it, 'touchforcechange', Vt),
						(!mr || !xt) &&
							(ht(R, 'mouseup', F),
							g && g.target && ht(g.target, 'mouseup', F)),
						(mt = !1),
						E && ((m = Ls = Te()), (a.isDragging = !1)),
						Is(ie),
						Pi && !D)
					) {
						g && (ht(g.target, 'change', F), (a.pointerEvent = x)),
							hr(p, !1),
							ut(a, 'release', 'onRelease'),
							ut(a, 'click', 'onClick'),
							(Pi = !1);
						return;
					}
					for (N = p.length; --N > -1; )
						en(p[N], 'cursor', i.cursor || (i.cursor !== !1 ? Ii : null));
					if ((kr--, g)) {
						if (
							(($ = g.changedTouches),
							$ && ((g = $[0]), g !== Yt && g.identifier !== Xt))
						) {
							for (
								N = $.length;
								--N > -1 && (g = $[N]).identifier !== Xt && g.target !== e;

							);
							if (N < 0 && !M) return;
						}
						(a.pointerEvent = x),
							(a.pointerX = g.pageX),
							(a.pointerY = g.pageY);
					}
					return (
						D && x
							? (Vt(x), (At = !0), ut(a, 'release', 'onRelease'))
							: x && !E
							? ((At = !1),
							  ls && (i.snap || i.bounds) && Xr(i.inertia || i.throwProps),
							  ut(a, 'release', 'onRelease'),
							  (!Fi || x.type !== 'touchmove') &&
									x.type.indexOf('cancel') === -1 &&
									(ut(a, 'click', 'onClick'),
									Te() - k < 300 && ut(a, 'doubleclick', 'onDoubleClick'),
									(q = x.target || e),
									(k = Te()),
									(J = function () {
										k !== Br &&
											a.enabled() &&
											!a.isPressed &&
											!x.defaultPrevented &&
											(q.click
												? q.click()
												: R.createEvent &&
												  ((Z = R.createEvent('MouseEvents')),
												  Z.initMouseEvent(
														'click',
														!0,
														!0,
														it,
														1,
														a.pointerEvent.screenX,
														a.pointerEvent.screenY,
														a.pointerX,
														a.pointerY,
														!1,
														!1,
														!1,
														!1,
														0,
														null
												  ),
												  q.dispatchEvent(Z)));
									}),
									!Fi && !x.defaultPrevented && U.delayedCall(0.05, J)))
							: (Xr(i.inertia || i.throwProps),
							  !a.allowEventDefault &&
							  x &&
							  (i.dragClickables !== !1 || !P.call(a, x.target)) &&
							  E &&
							  (!$t || (jt && $t === jt)) &&
							  x.cancelable !== !1
									? ((At = !0), Vt(x))
									: (At = !1),
							  ut(a, 'release', 'onRelease')),
						Ci() && A.duration(a.tween.duration()),
						E && ut(a, 'dragend', 'onDragEnd'),
						!0
					);
				},
				ur = function (g) {
					if (g && a.isDragging && !O) {
						var M = g.target || e.parentNode,
							x = M.scrollLeft - M._gsScrollX,
							E = M.scrollTop - M._gsScrollY;
						(x || E) &&
							(Q
								? ((W -= x * Q.a + E * Q.c), (X -= E * Q.d + x * Q.b))
								: ((W -= x), (X -= E)),
							(M._gsScrollX += x),
							(M._gsScrollY += E),
							Mi(a.pointerX, a.pointerY));
					}
				},
				ds = function (g) {
					var M = Te(),
						x = M - k < 100,
						E = M - m < 50,
						D = x && Br === k,
						A = a.pointerEvent && a.pointerEvent.defaultPrevented,
						$ = x && us === k,
						N = g.isTrusted || (g.isTrusted == null && x && D);
					if (
						((D || (E && a.vars.suppressClickOnDrag !== !1)) &&
							g.stopImmediatePropagation &&
							g.stopImmediatePropagation(),
						x &&
							!(a.pointerEvent && a.pointerEvent.defaultPrevented) &&
							(!D || (N && !$)))
					) {
						N && D && (us = k), (Br = k);
						return;
					}
					(a.isPressed || E || x) && (!N || !g.detail || !x || A) && Vt(g),
						!x &&
							!E &&
							!ar &&
							(g && g.target && (a.pointerEvent = g),
							ut(a, 'click', 'onClick'));
				},
				_s = function (g) {
					return Q
						? { x: g.x * Q.a + g.y * Q.c + Q.e, y: g.x * Q.b + g.y * Q.d + Q.f }
						: { x: g.x, y: g.y };
				};
			return (
				(Fr = t.get(e)),
				Fr && Fr.kill(),
				(r.startDrag = function (F, g) {
					var M, x, E, D;
					ki(F || a.pointerEvent, !0),
						g &&
							!a.hitTest(F || a.pointerEvent) &&
							((M = ii(F || a.pointerEvent)),
							(x = ii(e)),
							(E = _s({ x: M.left + M.width / 2, y: M.top + M.height / 2 })),
							(D = _s({ x: x.left + x.width / 2, y: x.top + x.height / 2 })),
							(W -= E.x - D.x),
							(X -= E.y - D.y)),
						a.isDragging ||
							((a.isDragging = ar = !0), ut(a, 'dragstart', 'onDragStart'));
				}),
				(r.drag = Fe),
				(r.endDrag = function (F) {
					return Kt(F || a.pointerEvent, !0);
				}),
				(r.timeSinceDrag = function () {
					return a.isDragging ? 0 : (Te() - m) / 1e3;
				}),
				(r.timeSinceClick = function () {
					return (Te() - k) / 1e3;
				}),
				(r.hitTest = function (F, g) {
					return t.hitTest(a.target, F, g);
				}),
				(r.getDirection = function (F, g) {
					var M =
							F === 'velocity' && Zt ? F : Wi(F) && !o ? 'element' : 'start',
						x,
						E,
						D,
						A,
						$,
						N;
					return (
						M === 'element' && (($ = ii(a.target)), (N = ii(F))),
						(x =
							M === 'start'
								? a.x - z
								: M === 'velocity'
								? Zt.getVelocity(e, f)
								: $.left + $.width / 2 - (N.left + N.width / 2)),
						o
							? x < 0
								? 'counter-clockwise'
								: 'clockwise'
							: ((g = g || 2),
							  (E =
									M === 'start'
										? a.y - B
										: M === 'velocity'
										? Zt.getVelocity(e, u)
										: $.top + $.height / 2 - (N.top + N.height / 2)),
							  (D = Math.abs(x / E)),
							  (A = D < 1 / g ? '' : x < 0 ? 'left' : 'right'),
							  D < g && (A !== '' && (A += '-'), (A += E < 0 ? 'up' : 'down')),
							  A)
					);
				}),
				(r.applyBounds = function (F, g) {
					var M, x, E, D, A, $;
					if (F && i.bounds !== F) return (i.bounds = F), a.update(!0, g);
					if ((Ne(!0), Yr(), tt && !Ci())) {
						if (
							((M = a.x),
							(x = a.y),
							M > V ? (M = V) : M < Y && (M = Y),
							x > K ? (x = K) : x < G && (x = G),
							(a.x !== M || a.y !== x) &&
								((E = !0),
								(a.x = a.endX = M),
								o ? (a.endRotation = M) : (a.y = a.endY = x),
								(mt = !0),
								ie(!0),
								a.autoScroll && !a.isDragging))
						)
							for (
								tn(e.parentNode),
									D = e,
									fe.scrollTop =
										it.pageYOffset != null
											? it.pageYOffset
											: R.documentElement.scrollTop != null
											? R.documentElement.scrollTop
											: R.body.scrollTop,
									fe.scrollLeft =
										it.pageXOffset != null
											? it.pageXOffset
											: R.documentElement.scrollLeft != null
											? R.documentElement.scrollLeft
											: R.body.scrollLeft;
								D && !$;

							)
								($ = Ti(D.parentNode)),
									(A = $ ? fe : D.parentNode),
									d &&
										A.scrollTop > A._gsMaxScrollY &&
										(A.scrollTop = A._gsMaxScrollY),
									c &&
										A.scrollLeft > A._gsMaxScrollX &&
										(A.scrollLeft = A._gsMaxScrollX),
									(D = A);
						a.isThrowing &&
							(E || a.endX > V || a.endX < Y || a.endY > K || a.endY < G) &&
							Xr(i.inertia || i.throwProps, E);
					}
					return a;
				}),
				(r.update = function (F, g, M) {
					if (g && a.isPressed) {
						var x = Xe(e),
							E = fs.apply({ x: a.x - z, y: a.y - B }),
							D = Xe(e.parentNode, !0);
						D.apply({ x: x.e - E.x, y: x.f - E.y }, E),
							(a.x -= E.x - D.e),
							(a.y -= E.y - D.f),
							ie(!0),
							lr();
					}
					var A = a.x,
						$ = a.y;
					return (
						hs(!g),
						F ? a.applyBounds() : (mt && M && ie(!0), Ne(!0)),
						g && (Mi(a.pointerX, a.pointerY), mt && ie(!0)),
						a.isPressed &&
							!g &&
							((c && Math.abs(A - a.x) > 0.01) ||
								(d && Math.abs($ - a.y) > 0.01 && !o)) &&
							lr(),
						a.autoScroll &&
							(tn(e.parentNode, a.isDragging),
							(v = a.isDragging),
							ie(!0),
							Ys(e, ur),
							zs(e, ur)),
						a
					);
				}),
				(r.enable = function (F) {
					var g = { lazy: !0 },
						M,
						x,
						E;
					if (
						(i.cursor !== !1 && (g.cursor = i.cursor || Ii),
						U.utils.checkPrefix('touchCallout') && (g.touchCallout = 'none'),
						F !== 'soft')
					) {
						for (
							Ns(
								p,
								c === d
									? 'none'
									: (i.allowNativeTouchScrolling &&
											(e.scrollHeight === e.clientHeight) ==
												(e.scrollWidth === e.clientHeight)) ||
									  i.allowEventDefault
									? 'manipulation'
									: c
									? 'pan-y'
									: 'pan-x'
							),
								x = p.length;
							--x > -1;

						)
							(E = p[x]),
								mr || pt(E, 'mousedown', ki),
								pt(E, 'touchstart', ki),
								pt(E, 'click', ds, !0),
								U.set(E, g),
								E.getBBox &&
									E.ownerSVGElement &&
									c !== d &&
									U.set(E.ownerSVGElement, {
										touchAction:
											i.allowNativeTouchScrolling || i.allowEventDefault
												? 'manipulation'
												: c
												? 'pan-y'
												: 'pan-x',
									}),
								i.allowContextMenu || pt(E, 'contextmenu', cs);
						hr(p, !1);
					}
					return (
						zs(e, ur),
						(L = !0),
						Zt &&
							F !== 'soft' &&
							Zt.track(O || e, s ? 'x,y' : o ? 'rotation' : 'top,left'),
						(e._gsDragID = M = e._gsDragID || 'd' + su++),
						(hi[M] = a),
						O && (O.enable(), (O.element._gsDragID = M)),
						(i.bounds || o) && lr(),
						i.bounds && a.applyBounds(),
						a
					);
				}),
				(r.disable = function (F) {
					for (var g = a.isDragging, M = p.length, x; --M > -1; )
						en(p[M], 'cursor', null);
					if (F !== 'soft') {
						for (Ns(p, null), M = p.length; --M > -1; )
							(x = p[M]),
								en(x, 'touchCallout', null),
								ht(x, 'mousedown', ki),
								ht(x, 'touchstart', ki),
								ht(x, 'click', ds, !0),
								ht(x, 'contextmenu', cs);
						hr(p, !0),
							xt &&
								(ht(xt, 'touchcancel', Kt),
								ht(xt, 'touchend', Kt),
								ht(xt, 'touchmove', Fe)),
							ht(R, 'mouseup', Kt),
							ht(R, 'mousemove', Fe);
					}
					return (
						Ys(e, ur),
						(L = !1),
						Zt &&
							F !== 'soft' &&
							(Zt.untrack(O || e, s ? 'x,y' : o ? 'rotation' : 'top,left'),
							a.tween && a.tween.kill()),
						O && O.disable(),
						Is(ie),
						(a.isDragging = a.isPressed = Pi = !1),
						g && ut(a, 'dragend', 'onDragEnd'),
						a
					);
				}),
				(r.enabled = function (F, g) {
					return arguments.length ? (F ? a.enable(g) : a.disable(g)) : L;
				}),
				(r.kill = function () {
					return (
						(a.isThrowing = !1),
						a.tween && a.tween.kill(),
						a.disable(),
						U.set(p, { clearProps: 'userSelect' }),
						delete hi[e._gsDragID],
						a
					);
				}),
				(r.revert = function () {
					this.kill(), this.styles && this.styles.revert();
				}),
				~n.indexOf('scroll') &&
					((O = r.scrollProxy =
						new pu(
							e,
							au(
								{
									onKill: function () {
										a.isPressed && Kt(null);
									},
								},
								i
							)
						)),
					(e.style.overflowY = d && !Sn ? 'auto' : 'hidden'),
					(e.style.overflowX = c && !Sn ? 'auto' : 'hidden'),
					(e = O.content)),
				o ? (h.rotation = 1) : (c && (h[f] = 1), d && (h[u] = 1)),
				(w.force3D = 'force3D' in i ? i.force3D : !0),
				aa(As(r)),
				r.enable(),
				r
			);
		}
		return (
			(t.register = function (i) {
				(U = i), nn();
			}),
			(t.create = function (i, r) {
				return (
					bn || nn(!0),
					ke(i).map(function (n) {
						return new t(n, r);
					})
				);
			}),
			(t.get = function (i) {
				return hi[(ke(i)[0] || {})._gsDragID];
			}),
			(t.timeSinceDrag = function () {
				return (Te() - Ls) / 1e3;
			}),
			(t.hitTest = function (i, r, n) {
				if (i === r) return !1;
				var s = ii(i),
					o = ii(r),
					f = s.top,
					u = s.left,
					c = s.right,
					d = s.bottom,
					_ = s.width,
					a = s.height,
					p = o.left > c || o.right < u || o.top > d || o.bottom < f,
					h,
					m,
					v;
				return p || !n
					? !p
					: ((v = (n + '').indexOf('%') !== -1),
					  (n = parseFloat(n) || 0),
					  (h = { left: Math.max(u, o.left), top: Math.max(f, o.top) }),
					  (h.width = Math.min(c, o.right) - h.left),
					  (h.height = Math.min(d, o.bottom) - h.top),
					  h.width < 0 || h.height < 0
							? !1
							: v
							? ((n *= 0.01),
							  (m = h.width * h.height),
							  m >= _ * a * n || m >= o.width * o.height * n)
							: h.width > n && h.height > n);
			}),
			t
		);
	})(gu);
uu(bi.prototype, {
	pointerX: 0,
	pointerY: 0,
	startX: 0,
	startY: 0,
	deltaX: 0,
	deltaY: 0,
	isDragging: !1,
	isPressed: !1,
});
bi.zIndex = 1e3;
bi.version = '3.13.0';
ua() && U.registerPlugin(bi);
/*!
 * VelocityTracker: 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
 */ var ne,
	Mn,
	Ui,
	da,
	si,
	li,
	En,
	_a,
	pa = function () {
		return ne || (typeof window < 'u' && (ne = window.gsap));
	},
	On = {},
	mu = function (t) {
		return Math.round(t * 1e4) / 1e4;
	},
	Dn = function (t) {
		return _a(t).id;
	},
	Bi = function (t) {
		return On[Dn(typeof t == 'string' ? Ui(t)[0] : t)];
	},
	Ws = function (t) {
		var e = si,
			i;
		if (t - En >= 0.05)
			for (En = t; e; )
				(i = e.g(e.t, e.p)),
					(i !== e.v1 || t - e.t1 > 0.2) &&
						((e.v2 = e.v1), (e.v1 = i), (e.t2 = e.t1), (e.t1 = t)),
					(e = e._next);
	},
	yu = { deg: 360, rad: Math.PI * 2 },
	sn = function () {
		(ne = pa()),
			ne &&
				((Ui = ne.utils.toArray),
				(da = ne.utils.getUnit),
				(_a = ne.core.getCache),
				(li = ne.ticker),
				(Mn = 1));
	},
	xu = function (t, e, i, r) {
		(this.t = t),
			(this.p = e),
			(this.g = t._gsap.get),
			(this.rCap = yu[i || da(this.g(t, e))]),
			(this.v1 = this.v2 = 0),
			(this.t1 = this.t2 = li.time),
			r && ((this._next = r), (r._prev = this));
	},
	sr = (function () {
		function l(e, i) {
			Mn || sn(),
				(this.target = Ui(e)[0]),
				(On[Dn(this.target)] = this),
				(this._props = {}),
				i && this.add(i);
		}
		l.register = function (i) {
			(ne = i), sn();
		};
		var t = l.prototype;
		return (
			(t.get = function (i, r) {
				var n =
						this._props[i] || console.warn('Not tracking ' + i + ' velocity.'),
					s,
					o,
					f;
				return (
					(s = parseFloat(r ? n.v1 : n.g(n.t, n.p))),
					(o = s - parseFloat(n.v2)),
					(f = n.rCap),
					f && ((o = o % f), o !== o % (f / 2) && (o = o < 0 ? o + f : o - f)),
					mu(o / ((r ? n.t1 : li.time) - n.t2))
				);
			}),
			(t.getAll = function () {
				var i = {},
					r = this._props,
					n;
				for (n in r) i[n] = this.get(n);
				return i;
			}),
			(t.isTracking = function (i) {
				return i in this._props;
			}),
			(t.add = function (i, r) {
				i in this._props ||
					(si || (li.add(Ws), (En = li.time)),
					(si = this._props[i] = new xu(this.target, i, r, si)));
			}),
			(t.remove = function (i) {
				var r = this._props[i],
					n,
					s;
				r &&
					((n = r._prev),
					(s = r._next),
					n && (n._next = s),
					s ? (s._prev = n) : si === r && (li.remove(Ws), (si = 0)),
					delete this._props[i]);
			}),
			(t.kill = function (i) {
				for (var r in this._props) this.remove(r);
				i || delete On[Dn(this.target)];
			}),
			(l.track = function (i, r, n) {
				Mn || sn();
				for (
					var s = [],
						o = Ui(i),
						f = r.split(','),
						u = (n || '').split(','),
						c = o.length,
						d,
						_;
					c--;

				) {
					for (d = Bi(o[c]) || new l(o[c]), _ = f.length; _--; )
						d.add(f[_], u[_] || u[0]);
					s.push(d);
				}
				return s;
			}),
			(l.untrack = function (i, r) {
				var n = (r || '').split(',');
				Ui(i).forEach(function (s) {
					var o = Bi(s);
					o &&
						(n.length
							? n.forEach(function (f) {
									return o.remove(f);
							  })
							: o.kill(1));
				});
			}),
			(l.isTracking = function (i, r) {
				var n = Bi(i);
				return n && n.isTracking(r);
			}),
			(l.getVelocity = function (i, r) {
				var n = Bi(i);
				return !n || !n.isTracking(r)
					? console.warn('Not tracking velocity of ' + r)
					: n.get(r);
			}),
			l
		);
	})();
sr.getByTarget = Bi;
pa() && ne.registerPlugin(sr);
/*!
 * InertiaPlugin 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
 */ var gt,
	ga,
	Vs,
	ma,
	An,
	Hi,
	ya,
	xa,
	va,
	ss,
	wa,
	qi,
	Rn,
	Ta,
	Mr = sr.getByTarget,
	ba = function () {
		return (
			gt ||
			(typeof window < 'u' && (gt = window.gsap) && gt.registerPlugin && gt)
		);
	},
	vu = function (t) {
		return typeof t == 'string';
	},
	rr = function (t) {
		return typeof t == 'number';
	},
	Oe = function (t) {
		return typeof t == 'object';
	},
	Ln = function (t) {
		return typeof t == 'function';
	},
	wu = 1,
	Sa = Array.isArray,
	Tu = function (t) {
		return t;
	},
	pi = 1e10,
	Us = 1 / pi,
	Pa = 0.05,
	bu = function (t) {
		return Math.round(t * 1e4) / 1e4;
	},
	Su = function (t, e, i) {
		for (var r in e) !(r in t) && r !== i && (t[r] = e[r]);
		return t;
	},
	Pu = function l(t) {
		var e = {},
			i,
			r;
		for (i in t) e[i] = Oe((r = t[i])) && !Sa(r) ? l(r) : r;
		return e;
	},
	Hs = function (t, e, i, r, n) {
		var s = e.length,
			o = 0,
			f = pi,
			u,
			c,
			d,
			_;
		if (Oe(t)) {
			for (; s--; ) {
				(u = e[s]), (c = 0);
				for (d in t) (_ = u[d] - t[d]), (c += _ * _);
				c < f && ((o = s), (f = c));
			}
			if ((n || pi) < pi && n < Math.sqrt(f)) return t;
		} else
			for (; s--; )
				(u = e[s]),
					(c = u - t),
					c < 0 && (c = -c),
					c < f && u >= r && u <= i && ((o = s), (f = c));
		return e[o];
	},
	Ca = function (t, e, i, r, n, s, o) {
		if (t.end === 'auto') return t;
		var f = t.end,
			u,
			c;
		if (((i = isNaN(i) ? pi : i), (r = isNaN(r) ? -1e10 : r), Oe(e))) {
			if (
				((u = e.calculated ? e : (Ln(f) ? f(e, o) : Hs(e, f, i, r, s)) || e),
				!e.calculated)
			) {
				for (c in u) e[c] = u[c];
				e.calculated = !0;
			}
			u = u[n];
		} else u = Ln(f) ? f(e, o) : Sa(f) ? Hs(e, f, i, r, s) : parseFloat(f);
		return (
			u > i ? (u = i) : u < r && (u = r),
			{ max: u, min: u, unitFactor: t.unitFactor }
		);
	},
	Er = function (t, e, i) {
		return isNaN(t[e]) ? i : +t[e];
	},
	os = function (t, e) {
		return (e * Pa * t) / ss;
	},
	qs = function (t, e, i) {
		return Math.abs(((e - t) * ss) / i / Pa);
	},
	ka = {
		resistance: 1,
		checkpoint: 1,
		preventOvershoot: 1,
		linkedProps: 1,
		radius: 1,
		duration: 1,
	},
	Ma = function (t, e, i, r) {
		if (e.linkedProps) {
			var n = e.linkedProps.split(','),
				s = {},
				o,
				f,
				u,
				c,
				d,
				_;
			for (o = 0; o < n.length; o++)
				(f = n[o]),
					(u = e[f]),
					u &&
						(rr(u.velocity)
							? (c = u.velocity)
							: ((d = d || Mr(t)), (c = d && d.isTracking(f) ? d.get(f) : 0)),
						(_ = Math.abs(c / Er(u, 'resistance', r))),
						(s[f] = parseFloat(i(t, f)) + os(c, _)));
			return s;
		}
	},
	Cu = function (t, e, i, r, n, s) {
		if (
			(i === void 0 && (i = 10),
			r === void 0 && (r = 0.2),
			n === void 0 && (n = 1),
			vu(t) && (t = ma(t)[0]),
			!t)
		)
			return 0;
		var o = 0,
			f = pi,
			u = e.inertia || e,
			c = va(t).get,
			d = Er(u, 'resistance', Hi.resistance),
			_,
			a,
			p,
			h,
			m,
			v,
			T,
			b,
			S,
			y;
		y = Ma(t, u, c, d);
		for (_ in u)
			ka[_] ||
				((a = u[_]),
				Oe(a) ||
					((b = b || Mr(t)),
					b && b.isTracking(_)
						? (a = rr(a) ? { velocity: a } : { velocity: b.get(_) })
						: ((h = +a || 0), (p = Math.abs(h / d)))),
				Oe(a) &&
					(rr(a.velocity)
						? (h = a.velocity)
						: ((b = b || Mr(t)), (h = b && b.isTracking(_) ? b.get(_) : 0)),
					(p = wa(r, i, Math.abs(h / Er(a, 'resistance', d)))),
					(m = parseFloat(c(t, _)) || 0),
					(v = m + os(h, p)),
					'end' in a &&
						((a = Ca(a, y && _ in y ? y : v, a.max, a.min, _, u.radius, h)),
						qi === e && (qi = u = Pu(e)),
						(u[_] = Su(a, u[_], 'end'))),
					'max' in a && v > +a.max + Us
						? ((S = a.unitFactor || Hi.unitFactors[_] || 1),
						  (T =
								(m > a.max && a.min !== a.max) || (h * S > -15 && h * S < 45)
									? r + (i - r) * 0.1
									: qs(m, a.max, h)),
						  T + n < f && (f = T + n))
						: 'min' in a &&
						  v < +a.min - Us &&
						  ((S = a.unitFactor || Hi.unitFactors[_] || 1),
						  (T =
								(m < a.min && a.min !== a.max) || (h * S > -45 && h * S < 15)
									? r + (i - r) * 0.1
									: qs(m, a.min, h)),
						  T + n < f && (f = T + n)),
					T > o && (o = T)),
				p > o && (o = p));
		return o > f && (o = f), o > i ? i : o < r ? r : o;
	},
	Gs = function () {
		(gt = ba()),
			gt &&
				((Vs = gt.parseEase),
				(ma = gt.utils.toArray),
				(ya = gt.utils.getUnit),
				(va = gt.core.getCache),
				(wa = gt.utils.clamp),
				(Rn = gt.core.getStyleSaver),
				(Ta = gt.core.reverting || function () {}),
				(An = Vs('power3')),
				(ss = An(0.05)),
				(xa = gt.core.PropTween),
				gt.config({
					resistance: 100,
					unitFactors: {
						time: 1e3,
						totalTime: 1e3,
						progress: 1e3,
						totalProgress: 1e3,
					},
				}),
				(Hi = gt.config()),
				gt.registerPlugin(sr),
				(ga = 1));
	},
	as = {
		version: '3.13.0',
		name: 'inertia',
		register: function (t) {
			(gt = t), Gs();
		},
		init: function (t, e, i, r, n) {
			ga || Gs();
			var s = Mr(t);
			if (e === 'auto') {
				if (!s) {
					console.warn(
						'No inertia tracking on ' +
							t +
							'. InertiaPlugin.track(target) first.'
					);
					return;
				}
				e = s.getAll();
			}
			(this.styles = Rn && typeof t.style == 'object' && Rn(t)),
				(this.target = t),
				(this.tween = i),
				(qi = e);
			var o = t._gsap,
				f = o.get,
				u = e.duration,
				c = Oe(u),
				d = e.preventOvershoot || (c && u.overshoot === 0),
				_ = Er(e, 'resistance', Hi.resistance),
				a = rr(u)
					? u
					: Cu(
							t,
							e,
							(c && u.max) || 10,
							(c && u.min) || 0.2,
							c && 'overshoot' in u ? +u.overshoot : d ? 0 : 1
					  ),
				p,
				h,
				m,
				v,
				T,
				b,
				S,
				y,
				P;
			(e = qi), (qi = 0), (P = Ma(t, e, f, _));
			for (p in e)
				ka[p] ||
					((h = e[p]),
					Ln(h) && (h = h(r, t, n)),
					rr(h)
						? (T = h)
						: Oe(h) && !isNaN(h.velocity)
						? (T = +h.velocity)
						: s && s.isTracking(p)
						? (T = s.get(p))
						: console.warn(
								'ERROR: No velocity was defined for ' + t + ' property: ' + p
						  ),
					(b = os(T, a)),
					(y = 0),
					(m = f(t, p)),
					(v = ya(m)),
					(m = parseFloat(m)),
					Oe(h) &&
						((S = m + b),
						'end' in h &&
							(h = Ca(h, P && p in P ? P : S, h.max, h.min, p, e.radius, T)),
						'max' in h && +h.max < S
							? d || h.preventOvershoot
								? (b = h.max - m)
								: (y = h.max - m - b)
							: 'min' in h &&
							  +h.min > S &&
							  (d || h.preventOvershoot
									? (b = h.min - m)
									: (y = h.min - m - b))),
					this._props.push(p),
					this.styles && this.styles.save(p),
					(this._pt = new xa(this._pt, t, p, m, 0, Tu, 0, o.set(t, p, this))),
					(this._pt.u = v || 0),
					(this._pt.c1 = b),
					(this._pt.c2 = y));
			return i.duration(a), wu;
		},
		render: function (t, e) {
			var i = e._pt;
			if (((t = An(e.tween._time / e.tween._dur)), t || !Ta()))
				for (; i; )
					i.set(i.t, i.p, bu(i.s + i.c1 * t + i.c2 * t * t) + i.u, i.d, t),
						(i = i._next);
			else e.styles.revert();
		},
	};
'track,untrack,isTracking,getVelocity,getByTarget'
	.split(',')
	.forEach(function (l) {
		return (as[l] = sr[l]);
	});
ba() && gt.registerPlugin(as);
/*!
 * SplitText 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2025, GreenSock. All rights reserved. Subject to the terms at https://gsap.com/standard-license.
 * @author: Jack Doyle
 */ let Di,
	ri,
	Nn,
	ku = () => Nn || Nr.register(window.gsap),
	js = typeof Intl < 'u' ? new Intl.Segmenter() : 0,
	Or = (l) =>
		typeof l == 'string'
			? Or(document.querySelectorAll(l))
			: 'length' in l
			? Array.from(l)
			: [l],
	Ks = (l) => Or(l).filter((t) => t instanceof HTMLElement),
	Fn = [],
	on = function () {},
	Mu = /\s+/g,
	Qs = new RegExp(
		'\\p{RI}\\p{RI}|\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?(\\u{200D}\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?)*|.',
		'gu'
	),
	Zs = { left: 0, top: 0, width: 0, height: 0 },
	Js = (l, t) => {
		if (t) {
			let e = new Set(l.join('').match(t) || Fn),
				i = l.length,
				r,
				n,
				s,
				o;
			if (e.size)
				for (; --i > -1; ) {
					n = l[i];
					for (s of e)
						if (s.startsWith(n) && s.length > n.length) {
							for (
								r = 0, o = n;
								s.startsWith((o += l[i + ++r])) && o.length < s.length;

							);
							if (r && o.length === s.length) {
								(l[i] = s), l.splice(i + 1, r);
								break;
							}
						}
				}
		}
		return l;
	},
	to = (l) =>
		window.getComputedStyle(l).display === 'inline' &&
		(l.style.display = 'inline-block'),
	ni = (l, t, e) =>
		t.insertBefore(typeof l == 'string' ? document.createTextNode(l) : l, e),
	In = (l, t, e) => {
		let i = t[l + 'sClass'] || '',
			{ tag: r = 'div', aria: n = 'auto', propIndex: s = !1 } = t,
			o = l === 'line' ? 'block' : 'inline-block',
			f = i.indexOf('++') > -1,
			u = (c) => {
				let d = document.createElement(r),
					_ = e.length + 1;
				return (
					i && (d.className = i + (f ? ' ' + i + _ : '')),
					s && d.style.setProperty('--' + l, _ + ''),
					n !== 'none' && d.setAttribute('aria-hidden', 'true'),
					r !== 'span' &&
						((d.style.position = 'relative'), (d.style.display = o)),
					(d.textContent = c),
					e.push(d),
					d
				);
			};
		return f && (i = i.replace('++', '')), (u.collection = e), u;
	},
	Eu = (l, t, e, i) => {
		let r = In('line', e, i),
			n = window.getComputedStyle(l).textAlign || 'left';
		return (s, o) => {
			let f = r('');
			for (f.style.textAlign = n, l.insertBefore(f, t[s]); s < o; s++)
				f.appendChild(t[s]);
			f.normalize();
		};
	},
	Ea = (l, t, e, i, r, n, s, o, f, u) => {
		var c;
		let d = Array.from(l.childNodes),
			_ = 0,
			{ wordDelimiter: a, reduceWhiteSpace: p = !0, prepareText: h } = t,
			m = l.getBoundingClientRect(),
			v = m,
			T = !p && window.getComputedStyle(l).whiteSpace.substring(0, 3) === 'pre',
			b = 0,
			S = e.collection,
			y,
			P,
			k,
			w,
			C,
			I,
			R,
			L,
			O,
			W,
			X,
			z,
			B,
			tt,
			rt,
			j,
			V,
			Y;
		for (
			typeof a == 'object'
				? ((k = a.delimiter || a), (P = a.replaceWith || ''))
				: (P = a === '' ? '' : a || ' '),
				y = P !== ' ';
			_ < d.length;
			_++
		)
			if (((w = d[_]), w.nodeType === 3)) {
				for (
					rt = w.textContent || '',
						p
							? (rt = rt.replace(Mu, ' '))
							: T &&
							  (rt = rt.replace(
									/\n/g,
									P +
										`
`
							  )),
						h && (rt = h(rt, l)),
						w.textContent = rt,
						C = P || k ? rt.split(k || P) : rt.match(o) || Fn,
						V = C[C.length - 1],
						L = y ? V.slice(-1) === ' ' : !V,
						V || C.pop(),
						v = m,
						R = y ? C[0].charAt(0) === ' ' : !C[0],
						R && ni(' ', l, w),
						C[0] || C.shift(),
						Js(C, f),
						(n && u) || (w.textContent = ''),
						O = 1;
					O <= C.length;
					O++
				)
					if (
						((j = C[O - 1]),
						!p &&
							T &&
							j.charAt(0) ===
								`
` &&
							((c = w.previousSibling) == null || c.remove(),
							ni(document.createElement('br'), l, w),
							(j = j.slice(1))),
						!p && j === '')
					)
						ni(P, l, w);
					else if (j === ' ') l.insertBefore(document.createTextNode(' '), w);
					else {
						if (
							(y && j.charAt(0) === ' ' && ni(' ', l, w),
							b && O === 1 && !R && S.indexOf(b.parentNode) > -1
								? ((I = S[S.length - 1]),
								  I.appendChild(document.createTextNode(i ? '' : j)))
								: ((I = e(i ? '' : j)),
								  ni(I, l, w),
								  b && O === 1 && !R && I.insertBefore(b, I.firstChild)),
							i)
						)
							for (
								X = js
									? Js(
											[...js.segment(j)].map((K) => K.segment),
											f
									  )
									: j.match(o) || Fn,
									Y = 0;
								Y < X.length;
								Y++
							)
								I.appendChild(
									X[Y] === ' ' ? document.createTextNode(' ') : i(X[Y])
								);
						if (n && u) {
							if (
								((rt = w.textContent = rt.substring(j.length + 1, rt.length)),
								(W = I.getBoundingClientRect()),
								W.top > v.top && W.left <= v.left)
							) {
								for (z = l.cloneNode(), B = l.childNodes[0]; B && B !== I; )
									(tt = B), (B = B.nextSibling), z.appendChild(tt);
								l.parentNode.insertBefore(z, l), r && to(z);
							}
							v = W;
						}
						(O < C.length || L) &&
							ni(
								O >= C.length ? ' ' : y && j.slice(-1) === ' ' ? ' ' + P : P,
								l,
								w
							);
					}
				l.removeChild(w), (b = 0);
			} else
				w.nodeType === 1 &&
					(s && s.indexOf(w) > -1
						? (S.indexOf(w.previousSibling) > -1 &&
								S[S.length - 1].appendChild(w),
						  (b = w))
						: (Ea(w, t, e, i, r, n, s, o, f, !0), (b = 0)),
					r && to(w));
	};
const Oa = class Da {
	constructor(t, e) {
		(this.isSplit = !1),
			ku(),
			(this.elements = Ks(t)),
			(this.chars = []),
			(this.words = []),
			(this.lines = []),
			(this.masks = []),
			(this.vars = e),
			(this._split = () => this.isSplit && this.split(this.vars));
		let i = [],
			r,
			n = () => {
				let s = i.length,
					o;
				for (; s--; ) {
					o = i[s];
					let f = o.element.offsetWidth;
					if (f !== o.width) {
						(o.width = f), this._split();
						return;
					}
				}
			};
		(this._data = {
			orig: i,
			obs:
				typeof ResizeObserver < 'u' &&
				new ResizeObserver(() => {
					clearTimeout(r), (r = setTimeout(n, 200));
				}),
		}),
			on(this),
			this.split(e);
	}
	split(t) {
		this.isSplit && this.revert(), (this.vars = t = t || this.vars || {});
		let {
				type: e = 'chars,words,lines',
				aria: i = 'auto',
				deepSlice: r = !0,
				smartWrap: n,
				onSplit: s,
				autoSplit: o = !1,
				specialChars: f,
				mask: u,
			} = this.vars,
			c = e.indexOf('lines') > -1,
			d = e.indexOf('chars') > -1,
			_ = e.indexOf('words') > -1,
			a = d && !_ && !c,
			p = f && ('push' in f ? new RegExp('(?:' + f.join('|') + ')', 'gu') : f),
			h = p ? new RegExp(p.source + '|' + Qs.source, 'gu') : Qs,
			m = !!t.ignore && Ks(t.ignore),
			{ orig: v, animTime: T, obs: b } = this._data,
			S;
		return (
			(d || _ || c) &&
				(this.elements.forEach((y, P) => {
					(v[P] = {
						element: y,
						html: y.innerHTML,
						ariaL: y.getAttribute('aria-label'),
						ariaH: y.getAttribute('aria-hidden'),
					}),
						i === 'auto'
							? y.setAttribute('aria-label', (y.textContent || '').trim())
							: i === 'hidden' && y.setAttribute('aria-hidden', 'true');
					let k = [],
						w = [],
						C = [],
						I = d ? In('char', t, k) : null,
						R = In('word', t, w),
						L,
						O,
						W,
						X;
					if ((Ea(y, t, R, I, a, r && (c || a), m, h, p, !1), c)) {
						let z = Or(y.childNodes),
							B = Eu(y, z, t, C),
							tt,
							rt = [],
							j = 0,
							V = z.map((K) =>
								K.nodeType === 1 ? K.getBoundingClientRect() : Zs
							),
							Y = Zs;
						for (L = 0; L < z.length; L++)
							(tt = z[L]),
								tt.nodeType === 1 &&
									(tt.nodeName === 'BR'
										? (rt.push(tt), B(j, L + 1), (j = L + 1), (Y = V[j]))
										: (L &&
												V[L].top > Y.top &&
												V[L].left <= Y.left &&
												(B(j, L), (j = L)),
										  (Y = V[L])));
						j < L && B(j, L),
							rt.forEach((K) => {
								var G;
								return (G = K.parentNode) == null ? void 0 : G.removeChild(K);
							});
					}
					if (!_) {
						for (L = 0; L < w.length; L++)
							if (
								((O = w[L]),
								d || !O.nextSibling || O.nextSibling.nodeType !== 3)
							)
								if (n && !c) {
									for (
										W = document.createElement('span'),
											W.style.whiteSpace = 'nowrap';
										O.firstChild;

									)
										W.appendChild(O.firstChild);
									O.replaceWith(W);
								} else O.replaceWith(...O.childNodes);
							else
								(X = O.nextSibling),
									X &&
										X.nodeType === 3 &&
										((X.textContent =
											(O.textContent || '') + (X.textContent || '')),
										O.remove());
						(w.length = 0), y.normalize();
					}
					this.lines.push(...C), this.words.push(...w), this.chars.push(...k);
				}),
				u &&
					this[u] &&
					this.masks.push(
						...this[u].map((y) => {
							let P = y.cloneNode();
							return (
								y.replaceWith(P),
								P.appendChild(y),
								y.className &&
									(P.className = y.className.replace(/(\b\w+\b)/g, '$1-mask')),
								(P.style.overflow = 'clip'),
								P
							);
						})
					)),
			(this.isSplit = !0),
			ri &&
				(o
					? ri.addEventListener('loadingdone', this._split)
					: ri.status === 'loading' &&
					  console.warn('SplitText called before fonts loaded')),
			(S = s && s(this)) &&
				S.totalTime &&
				(this._data.anim = T ? S.totalTime(T) : S),
			c &&
				o &&
				this.elements.forEach((y, P) => {
					(v[P].width = y.offsetWidth), b && b.observe(y);
				}),
			this
		);
	}
	revert() {
		var t, e;
		let { orig: i, anim: r, obs: n } = this._data;
		return (
			n && n.disconnect(),
			i.forEach(({ element: s, html: o, ariaL: f, ariaH: u }) => {
				(s.innerHTML = o),
					f ? s.setAttribute('aria-label', f) : s.removeAttribute('aria-label'),
					u
						? s.setAttribute('aria-hidden', u)
						: s.removeAttribute('aria-hidden');
			}),
			(this.chars.length =
				this.words.length =
				this.lines.length =
				i.length =
				this.masks.length =
					0),
			(this.isSplit = !1),
			ri == null || ri.removeEventListener('loadingdone', this._split),
			r && ((this._data.animTime = r.totalTime()), r.revert()),
			(e = (t = this.vars).onRevert) == null || e.call(t, this),
			this
		);
	}
	static create(t, e) {
		return new Da(t, e);
	}
	static register(t) {
		(Di = Di || t || window.gsap),
			Di && ((Or = Di.utils.toArray), (on = Di.core.context || on)),
			!Nn && window.innerWidth > 0 && ((ri = document.fonts), (Nn = !0));
	}
};
Oa.version = '3.13.0';
let Nr = Oa;
Ze.registerPlugin(Nr, bi, as);
const eo = document.getElementById('svg'),
	or = Ze.timeline(),
	Ou = 'M0 502S175 272 500 272s500 230 500 230V0H0Z',
	Du = 'M0 2S175 1 500 1s500 1 500 1V0H0Z',
	Au = document.querySelectorAll('.loader-text span');
Au.forEach((l, t) => {
	or.to(l, { duration: 0.18, delay: t * 0.01, autoAlpha: 1 })
		.to(l, { duration: 0.18, delay: t * 0.01 + 0.01, autoAlpha: 0 })
		.timeScale(1.5);
});
or.to(eo, { duration: 0.8, attr: { d: Ou }, ease: 'power2.in' }).to(eo, {
	duration: 0.8,
	attr: { d: Du },
	ease: 'power2.out',
});
or.to('.loader-wrapper', { y: -1500 });
or.to('.loader-wrapper', { zIndex: -1, display: 'none' });
Ze.timeline({ defaults: { delay: 2.5, duration: 0.8, ease: 'power2.inOut' } });
const Ru = document.querySelector('.logo'),
	Lu = new Nr('.logo', { type: 'chars, words', charsClass: 'char++' }),
	Nu = Ze.from(Lu.chars, {
		xPercent: 'random([-50, 50])',
		autoAlpha: 0,
		stagger: { amount: 1, from: 'random' },
		ease: 'power4.inOut',
		duration: 0.8,
	});
Ru.addEventListener('mouseenter', () => {
	console.log('Logo hovered'), Nu.restart();
});
const Fu = document.querySelector('h1'),
	Iu = document.querySelector('.fixed'),
	Bu = new Nr(Fu, {
		type: 'lines, chars, words',
		charsClass: 'hero-char++',
		reduceWhiteSpace: !0,
	});
or.from(
	Bu.chars,
	{
		yPercent: 'random([-180, 180])',
		autoAlpha: 0,
		stagger: { amount: 1, from: 'random' },
		ease: 'power4.inOut',
	},
	'-=0.5'
).to(Iu, { autoAlpha: 1, duration: 0.8 });
document.getElementById('hero');
const zu = document.querySelector('.hero-text-stack'),
	Yu = Ze.utils.toArray('.hero-char');
Yu.forEach((l) => {
	bi.create(l, {
		type: 'x,y',
		bounds: zu,
		inertia: !0,
		minY: -100,
		maxY: 200,
		minX: -100,
		maxX: 200,
		lockedAxis: 'x',
		onDrag: function () {
			(this.deltaX = this.x - this.startX),
				(this.deltaY = this.y - this.startY),
				console.log(`Dragged: ${this.deltaX}, ${this.deltaY}`);
		},
		onDragEnd: function () {
			Ze.to(l, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out' });
		},
	});
});
