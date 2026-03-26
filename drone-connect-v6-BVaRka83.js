import "./modulepreload-polyfill-B5Qt9EMX.js";
import { S as je, c as z, M as Ae, D as se, V as Oe, P as qe, W as ct, a as xe, A as dt, m as pt, n as Ye, o as ft, l as Ke, H as mt, b as ht, v as ut, h as gt, g as yt, E as be, T as Le, f as D, q as te, w as vt, G as wt, B as xt, d as J, e as Q, L as ee, N as ye, p as bt, i as Mt, j as St, C as Ct } from "./three-qkzU8FvL.js";
import { D as Et, G as Ft } from "./DRACOLoader-vjdbR7_p.js";
import { R as kt } from "./RGBELoader-5qm8pwqm.js";
import { O as Rt } from "./OrbitControls-BuFslVWb.js";
import { g as F } from "./index-DDlvirwQ.js";
import "./BufferGeometryUtils-BZ-SHm62.js";

const _e = new Ct(), S = new je();
let A = null, he = new z(0, 0, 0), ue = new be(0, 0, 0);
const Pt = { bobAmp: 0.04, bobPeriod: 5, stallPeriod: 3, stallDepth: 0.35, pitchAmp: 0.0075 };

const It = (t, i) => {
    const n = t.geometry;
    if (!n) return;
    const o = n.attributes.position, e = n.attributes.normal;
    if (!o || !e) return;
    const r = new Float32Array(o.count * 2);
    t.updateMatrixWorld(true);
    const s = new z(), a = new z(), c = new Mt().getNormalMatrix(t.matrixWorld);
    
    for (let l = 0; l < o.count; l++) {
        s.set(o.getX(l), o.getY(l), o.getZ(l)); s.applyMatrix4(t.matrixWorld);
        a.set(e.getX(l), e.getY(l), e.getZ(l)); a.applyMatrix3(c).normalize();
        const v = Math.abs(a.x), k = Math.abs(a.y), y = Math.abs(a.z);
        let f, R;
        if (v >= k && v >= y) { f = s.y; R = s.z; }
        else if (k >= v && k >= y) { f = s.x; R = s.z; }
        else { f = s.x; R = s.y; }
        r[l * 2 + 0] = f * i; r[l * 2 + 1] = R * i;
    }
    n.setAttribute("uv", new St(r, 2));
    n.attributes.uv.needsUpdate = true;
};

const Tt = (t = {}) => {
    const n = t.towCount || 32, o = 256 / n, e = t.gap || 1;
    const r = () => { const d = document.createElement("canvas"); d.width = 256; d.height = 256; return { c: d, ctx: d.getContext("2d") }; };
    const { c: s, ctx: a } = r();
    a.fillStyle = "#1a1a1e"; a.fillRect(0, 0, 256, 256);
    for (let d = 0; d < n; d++) {
        for (let w = 0; w < n; w++) {
            const u = w * o, g = d * o, E = (w + d) % 4 < 2;
            if (E) { const h = 120 + Math.random() * 20; a.fillStyle = `rgb(${h},${h},${h + 3})`; }
            else { const h = 85 + Math.random() * 20; a.fillStyle = `rgb(${h + 2},${h},${h})`; }
            a.fillRect(u + e, g + e, o - e * 2, o - e * 2);
            const p = 5;
            if (E) {
                for (let h = 0; h < p; h++) {
                    const m = u + e + (o - e * 2) * (h + 0.5) / p;
                    a.strokeStyle = `rgba(255,255,255,${0.03 + Math.random() * 0.04})`;
                    a.lineWidth = 0.8; a.beginPath(); a.moveTo(m, g + e); a.lineTo(m, g + o - e); a.stroke();
                }
            } else {
                for (let h = 0; h < p; h++) {
                    const m = g + e + (o - e * 2) * (h + 0.5) / p;
                    a.strokeStyle = `rgba(255,255,255,${0.03 + Math.random() * 0.04})`;
                    a.lineWidth = 0.8; a.beginPath(); a.moveTo(u + e, m); a.lineTo(u + o - e, m); a.stroke();
                }
            }
        }
    }
    const { c, ctx: l } = r(), v = 90;
    l.fillStyle = `rgb(${v},${v},${v})`; l.fillRect(0, 0, 256, 256);
    for (let d = 0; d < n; d++) {
        for (let w = 0; w < n; w++) {
            const u = w * o, g = d * o, p = (w + d) % 4 < 2 ? v - 6 + Math.random() * 4 : v + 2 + Math.random() * 6;
            l.fillStyle = `rgb(${p},${p},${p})`; l.fillRect(u + e, g + e, o - e * 2, o - e * 2);
        }
    }
    for (let d = 0; d < n; d++) {
        for (let w = 0; w < n; w++) {
            const u = w * o, g = d * o, E = v + 30;
            l.fillStyle = `rgb(${E},${E},${E})`; l.fillRect(u, g, o, e); l.fillRect(u, g, e, o);
        }
    }
    const { c: k, ctx: y } = r();
    y.fillStyle = "rgb(128,128,255)"; y.fillRect(0, 0, 256, 256);
    for (let d = 0; d < n; d++) {
        for (let w = 0; w < n; w++) {
            const u = w * o, g = d * o;
            if ((w + d) % 4 < 2) {
                const p = (o - e * 2) / 2;
                y.fillStyle = "rgba(110,128,255,0.45)"; y.fillRect(u + e, g + e, p, o - e * 2);
                y.fillStyle = "rgba(146,128,255,0.45)"; y.fillRect(u + e + p, g + e, p, o - e * 2);
                y.fillStyle = "rgba(128,115,255,0.3)"; y.fillRect(u + e, g + e, o - e * 2, 2);
                y.fillStyle = "rgba(128,141,255,0.3)"; y.fillRect(u + e, g + o - e - 2, o - e * 2, 2);
            } else {
                const p = (o - e * 2) / 2;
                y.fillStyle = "rgba(128,110,255,0.45)"; y.fillRect(u + e, g + e, o - e * 2, p);
                y.fillStyle = "rgba(128,146,255,0.45)"; y.fillRect(u + e, g + e + p, o - e * 2, p);
                y.fillStyle = "rgba(115,128,255,0.3)"; y.fillRect(u + e, g + e, 2, o - e * 2);
                y.fillStyle = "rgba(141,128,255,0.3)"; y.fillRect(u + o - e - 2, g + e, 2, o - e * 2);
            }
        }
    }
    for (let d = 0; d < n; d++) {
        for (let w = 0; w < n; w++) {
            const u = w * o, g = d * o;
            y.fillStyle = "rgba(128,108,240,0.5)"; y.fillRect(u, g, o, e + 1);
            y.fillStyle = "rgba(108,128,240,0.5)"; y.fillRect(u, g, e + 1, o);
        }
    }
    const f = 16, R = new J(s);
    R.colorSpace = xe; R.wrapS = R.wrapT = Q; R.generateMipmaps = true; R.minFilter = ee; R.magFilter = D; R.anisotropy = f;
    const b = new J(c);
    b.colorSpace = ye; b.wrapS = b.wrapT = Q; b.generateMipmaps = true; b.minFilter = ee; b.magFilter = D; b.anisotropy = f;
    const O = new J(k);
    O.colorSpace = ye; O.wrapS = O.wrapT = Q; O.generateMipmaps = true; O.minFilter = ee; O.magFilter = D; O.anisotropy = f;
    return { albedo: R, rough: b, normal: O };
};

const zt = (t = {}) => {
    const n = t.cellCols || 4, o = t.cellRows || 6, e = t.cellGap || 10, r = t.busBarCount || 5, s = t.fingerSpacing || 4, a = (256 - (n + 1) * e) / n, c = (256 - (o + 1) * e) / o;
    const l = () => { const p = document.createElement("canvas"); p.width = 256; p.height = 256; return { c: p, ctx: p.getContext("2d") }; };
    const v = p => e + p * (a + e), k = p => e + p * (c + e);
    const { c: y, ctx: f } = l();
    f.fillStyle = "#474751"; f.fillRect(0, 0, 256, 256);
    for (let p = 0; p < o; p++) {
        for (let h = 0; h < n; h++) {
            const m = v(h), M = k(p), L = Math.random() * 4 - 2;
            f.fillStyle = `rgb(${6 + L}, ${8 + L}, ${18 + L})`; f.fillRect(m, M, a, c);
            f.strokeStyle = "rgba(30, 50, 100, 0.5)"; f.lineWidth = 2; f.strokeRect(m + 1, M + 1, a - 2, c - 2);
            const _ = f.createLinearGradient(m, M, m + a, M + c);
            _.addColorStop(0, "rgba(40, 50, 90, 0.08)"); _.addColorStop(1, "rgba(20, 25, 50, 0.08)");
            f.fillStyle = _; f.fillRect(m, M, a, c);
            for (let P = 0; P < r; P++) {
                const fe = M + c * (P + 1) / (r + 1);
                f.strokeStyle = "rgba(50, 50, 58, 0.95)"; f.lineWidth = 1.5; f.beginPath(); f.moveTo(m, fe); f.lineTo(m + a, fe); f.stroke();
            }
            f.strokeStyle = "rgba(45, 45, 55, 0.50)"; f.lineWidth = 0.5;
            for (let P = m + s; P < m + a; P += s) { f.beginPath(); f.moveTo(P, M); f.lineTo(P, M + c); f.stroke(); }
            for (let P = 0; P < r; P++) {
                const fe = M + c * (P + 1) / (r + 1);
                for (let Ce = m + s * 3; Ce < m + a; Ce += s * 4) {
                    f.save(); f.translate(Ce, fe); f.rotate(Math.PI / 4);
                    f.fillStyle = "rgba(55, 55, 65, 0.7)"; f.fillRect(-1.5, -1.5, 3, 3); f.restore();
                }
            }
        }
    }
    const { c: R, ctx: b } = l();
    b.fillStyle = "rgb(90, 90, 90)"; b.fillRect(0, 0, 256, 256);
    for (let p = 0; p < o; p++) {
        for (let h = 0; h < n; h++) {
            const m = v(h), M = k(p), L = 50 + Math.random() * 5;
            b.fillStyle = `rgb(${L}, ${L}, ${L})`; b.fillRect(m, M, a, c);
            b.strokeStyle = "rgb(60, 60, 60)"; b.lineWidth = 2; b.strokeRect(m + 1, M + 1, a - 2, c - 2);
            for (let _ = 0; _ < r; _++) {
                const P = M + c * (_ + 1) / (r + 1);
                b.strokeStyle = "rgb(30, 30, 30)"; b.lineWidth = 1.5; b.beginPath(); b.moveTo(m, P); b.lineTo(m + a, P); b.stroke();
            }
        }
    }
    const { c: O, ctx: d } = l();
    d.fillStyle = "rgb(128, 128, 255)"; d.fillRect(0, 0, 256, 256);
    for (let p = 0; p < o; p++) {
        for (let h = 0; h < n; h++) {
            const m = v(h), M = k(p);
            d.fillStyle = "rgba(118, 128, 255, 0.6)"; d.fillRect(m, M, 2, c);
            d.fillStyle = "rgba(138, 128, 255, 0.6)"; d.fillRect(m + a - 2, M, 2, c);
            d.fillStyle = "rgba(128, 118, 255, 0.6)"; d.fillRect(m, M, a, 2);
            d.fillStyle = "rgba(128, 138, 255, 0.6)"; d.fillRect(m, M + c - 2, a, 2);
            for (let L = 0; L < r; L++) {
                const _ = M + c * (L + 1) / (r + 1);
                d.fillStyle = "rgba(128, 118, 255, 0.4)"; d.fillRect(m, _ - 1, a, 1);
                d.fillStyle = "rgba(128, 138, 255, 0.4)"; d.fillRect(m, _ + 1, a, 1);
            }
        }
    }
    for (let p = 0; p < o; p++) {
        for (let h = 0; h < n; h++) {
            const m = v(h), M = k(p);
            d.fillStyle = "rgba(128, 108, 240, 0.5)"; d.fillRect(m - e, M - e, a + e * 2, e);
            d.fillStyle = "rgba(108, 128, 240, 0.5)"; d.fillRect(m - e, M, e, c);
        }
    }
    const w = 16, u = new J(y);
    u.colorSpace = xe; u.wrapS = u.wrapT = Q; u.generateMipmaps = true; u.minFilter = ee; u.magFilter = D; u.anisotropy = w;
    const g = new J(R);
    g.colorSpace = ye; g.wrapS = g.wrapT = Q; g.generateMipmaps = true; g.minFilter = ee; g.magFilter = D; g.anisotropy = w;
    const E = new J(O);
    E.colorSpace = ye; E.wrapS = E.wrapT = Q; E.generateMipmaps = true; E.minFilter = ee; E.magFilter = D; E.anisotropy = w;
    return { albedo: u, rough: g, normal: E };
};

const Ee = Tt({ glossy: false, towCount: 24 });
const Fe = zt();
const me = {
    solarPanel: new Ae({ color: 16777215, map: Fe.albedo, metalness: 0.08, roughness: 0.45, roughnessMap: Fe.rough, clearcoat: 0.9, clearcoatRoughness: 0.05, normalMap: Fe.normal, normalScale: new Oe(0.4, 0.4), envMapIntensity: 0.5, side: se, shadowSide: se }),
    carbonMatte: new Ae({ color: 7171437, map: Ee.albedo, metalness: 0, roughness: 0.92, roughnessMap: Ee.rough, clearcoat: 0, normalMap: Ee.normal, normalScale: new Oe(0.2, 0.2), envMapIntensity: 0.25, side: se, shadowSide: se })
};

const Dt = { matte: 40 };
const Lt = 3;
const C = new qe(15, window.innerWidth / window.innerHeight, 0.1, 1e3);
C.position.set(19.28, 16.29, 25.2);

const x = new ct({ antialias: true, alpha: true });
x.setSize(window.innerWidth, window.innerHeight);
x.setPixelRatio(Math.min(window.devicePixelRatio, 2));
x.outputColorSpace = xe;
x.toneMapping = dt;
x.toneMappingExposure = 3.2;
x.setClearColor(0, 0);

const $t = 500, At = new pt($t, 32, 16), Xe = 42 * Math.PI / 180;
const N = new Ye({
    uniforms: {
        tImage: { value: null }, tNightImage: { value: null }, uNightMix: { value: 0 },
        uOpacity: { value: 1 }, uCenterDir: { value: new z(-0.621, -0.343, -0.705) },
        uHFov: { value: Xe }, uImageAspect: { value: 16 / 9 }, uHOffset: { value: 0 }, uVOffset: { value: 0 }
    },
    vertexShader: "varying vec3 vLocalPos;\nvoid main() {\n  vLocalPos = position;\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n}",
    fragmentShader: "uniform sampler2D tImage;\nuniform sampler2D tNightImage;\nuniform float uNightMix;\nuniform float uOpacity;\nuniform vec3 uCenterDir;\nuniform float uHFov;\nuniform float uImageAspect;\nuniform float uHOffset;\nuniform float uVOffset;\nvarying vec3 vLocalPos;\nvoid main() {\n  vec3 dir = normalize(vLocalPos);\n  vec3 forward = normalize(uCenterDir);\n  vec3 worldUp = abs(forward.y) < 0.99 ? vec3(0.0, 1.0, 0.0) : vec3(1.0, 0.0, 0.0);\n  vec3 right = normalize(cross(worldUp, forward));\n  vec3 up = cross(forward, right);\n  float dForward = dot(dir, forward);\n  float dRight = dot(dir, right);\n  float dUp = dot(dir, up);\n  float azimuth = atan(dRight, dForward);\n  float elevation = asin(clamp(dUp, -1.0, 1.0));\n  float halfH = uHFov * 0.5;\n  float vFov = uHFov / uImageAspect;\n  float halfV = vFov * 0.5;\n  float u = azimuth / (2.0 * halfH) + 0.5;\n  u += uHOffset;\n  float v = 0.5 + elevation / (2.0 * halfV);\n  v += uVOffset;\n  if (u < 0.0 || u > 1.0 || v < 0.0 || v > 1.0) {\n    gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);\n    return;\n  }\n  float ew = 0.03;\n  float edgeFade = smoothstep(0.0, ew, u) * smoothstep(0.0, ew, 1.0 - u) * smoothstep(0.0, ew, v) * smoothstep(0.0, ew, 1.0 - v);\n  vec2 uv = vec2(u, v);\n  vec3 dayColor = texture2D(tImage, uv).rgb;\n  vec3 nightColor = texture2D(tNightImage, vec2(1.0 - u, v)).rgb;\n  vec3 blended = mix(dayColor, nightColor, uNightMix);\n  gl_FragColor = vec4(blended, uOpacity * edgeFade);\n}",
    side: ft, transparent: true, depthWrite: false
});

const Ze = new Ke(At, N);
Ze.renderOrder = -1e3;
const Je = new je();
Je.add(Ze);

const oe = new qe(15, window.innerWidth / window.innerHeight, 0.1, 1e3);
oe.position.set(-23.705, 16.498, -19.656);
oe.lookAt(0.6, 0.98, 0);

let le = document.getElementById("scroll-styles");
if (!le) {
    le = document.createElement("style");
    le.id = "scroll-styles";
    document.head.appendChild(le);
}
le.textContent = ``; 

let Y = document.getElementById("connect-drone");
if (!Y) {
    Y = document.createElement("div");
    Y.id = "connect-drone";
    document.body.appendChild(Y);
}
Y.innerHTML = "";
Y.appendChild(x.domElement);

const Me = document.createElement("div");
Me.id = "night-tint";
Me.style.cssText = "position:absolute;inset:0;background:#5C7EAD;opacity:0;pointer-events:none;";
Y.appendChild(Me);

let ne = document.getElementById("hero-section");
if (!ne) {
    ne = document.createElement("div"); ne.id = "hero-section";
    const t = document.createElement("div"); t.id = "hero-text";
    ["Connecting", "the world"].forEach(i => {
        const n = document.createElement("div");
        i.split("").forEach(o => {
            if (o === " ") n.appendChild(document.createTextNode(" "));
            else {
