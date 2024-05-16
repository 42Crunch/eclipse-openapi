import { j as t, q as n, T as o } from "./TriangleExclamation.DXu4kS4a.js";
const s = (r) => /* @__PURE__ */ t.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 512", width: "1em", height: "1em", ...r, children: /* @__PURE__ */ t.jsx("path", { d: "M173 131.5c56.2-56.23 147.3-56.23 203.5 0C430 185 432.9 270.9 383 327.9l-5.3 6.1c-8.8 10-23.9 11-33.9 2.3s-11-23.9-2.3-33.9l5.4-6.1c33.2-38 31.3-95.2-4.4-130.9-37.4-38.3-98.1-38.3-136.4 0L93.63 278.7c-37.44 37.5-37.44 98.2 0 135.6 35.67 34.8 92.97 37.6 130.87 4.4l6.2-5.4c9.9-8.7 25.1-7.7 33.8 2.3 8.8 9.9 7.7 25.1-2.2 33.8l-6.2 5.4c-57 49.8-142.9 47-196.41-6.6-56.185-56.1-56.185-148.1 0-203.4L173 131.5zm294 249c-56.2 56.2-147.3 56.2-203.5 0-54.4-54.4-56.4-139.4-6.6-196.4l4.7-5.4c8.7-10 23.9-11 33.9-2.3s11 23.9 2.3 33.9l-4.7 5.4c-33.3 38-31.3 95.2 4.3 130.9 37.5 37.4 98.2 37.4 135.7 0l113.3-113.3c37.4-37.5 37.4-98.2 0-135.6-35.7-35.68-93-37.59-130.9-4.35l-6.2 5.35c-9.9 8.7-25.1 7.7-33.8-2.26-8.8-9.97-7.7-25.14 2.2-33.86l6.2-5.36c57-49.872 142.9-47.01 196.4 6.54 56.2 56.14 56.2 147.24 0 203.44L467 380.5z" }) });
function l({
  value: r,
  onChange: c
}) {
  return /* @__PURE__ */ t.jsx(
    i,
    {
      active: r,
      onClick: (e) => {
        e.preventDefault(), e.stopPropagation(), c(!r);
      },
      children: /* @__PURE__ */ t.jsx(a, { active: r })
    }
  );
}
const i = n.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 34px;
  height: 17px;
  border-radius: 30px;
  border: 1px solid var(${o.border});
  ${({ active: r }) => r ? `background-color: var(${o.buttonBackground}); justify-content: end;` : `background-color: var(${o.background}); justify-content: start;`}
`, a = n.div`
  width: 12px;
  height: 12px;
  border-radius: 12px;
  margin-right: 2px;
  margin-left: 2px;
  ${({ active: r }) => r ? `background-color: var(${o.buttonForeground}); border: 1px solid var(${o.buttonForeground});` : `background-color: var(${o.border}); border: 1px solid var(${o.border});`}
`;
export {
  s as S,
  l as a
};
