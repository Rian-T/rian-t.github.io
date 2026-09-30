"""Write the SVG figure of /proposals/asylum-hypothesis into the page, from src/data/asylum-18-1.json.

The page holds static SVG, like the blog posts. This script rewrites the blocks between
<!-- fig:NAME --> and <!-- /fig:NAME --> in src/pages/proposals/asylum-hypothesis.md.

    uv run scripts/asylum-extract.py ~/gpai/runs/metr-goffman-18-1
    uv run scripts/asylum-figures.py
"""

import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
RUN = json.loads((ROOT / "src/data/asylum-18-1.json").read_text())
PAGE = ROOT / "src/pages/proposals/asylum-hypothesis.md"


def tm(s: str) -> float:
    h, m, x = (int(v) for v in s.split(":"))
    return h * 60 + m + x / 60


T0, T1 = tm(RUN["window"][0]), tm(RUN["window"][1])
lanes = RUN["lanes"]


def name_at(lane: dict, t: float) -> str:
    name = lane["segments"][0]["name"]
    for s in lane["segments"]:
        if s["start"] and tm(s["start"]) <= t:
            name = s["name"]
    return name


def hhmm(t: float) -> str:
    return f"{int(t // 60)}:{int(round(t % 60)):02d}"


def axis(x, y0: float, left: float, right: float) -> list[str]:
    out = [f'<line class="axis" x1="{left}" y1="{y0}" x2="{right}" y2="{y0}"></line>']
    for h in range(18 * 60 + 30, 21 * 60 + 1, 30):
        label = hhmm(h) + (" UTC" if h == 18 * 60 + 30 else "")
        out.append(f'<text class="tick" x="{x(h):.1f}" y="{y0 + 18}">{label}</text>')
    return out


def growth_svg() -> str:
    """Messages the agents write in the folder the staff never check, counted over the run."""
    W, H, L, R, T, B = 680, 220, 34, 90, 16, 28
    posts = sorted((tm(t), name_at(l, tm(t))) for l in lanes for t in l["back"])
    top = 42
    x = lambda t: L + (t - T0) / (T1 - T0) * (W - L - R)
    y = lambda v: H - B - v / top * (H - T - B)
    out = [f'<svg viewBox="0 0 {W} {H}" role="img" aria-label="Messages in the unchecked folder rise from 0 to {len(posts)} over three hours">']
    out.append('<g class="grid">' + "".join(
        f'<line x1="{L}" y1="{y(v):.1f}" x2="{x(T1):.1f}" y2="{y(v):.1f}"></line><text x="{L - 8}" y="{y(v) + 4:.1f}">{v}</text>'
        for v in range(0, top + 1, 10)) + "</g>")
    c, d, hits = 0, f"M{x(T0):.1f},{y(0):.1f}", []
    for t, a in posts:
        c += 1
        d += f" H{x(t):.1f} V{y(c):.1f}"
        hits.append(f'<circle class="hit" cx="{x(t):.1f}" cy="{y(c):.1f}" r="7"><title>agent-{a}, {hhmm(t)} UTC, message {c}</title></circle>')
    d += f" H{x(T1):.1f}"
    # A vertical bar at each agent's first message, labelled with its first name.
    seen = []
    for t, a in posts:
        if a in seen:
            continue
        seen.append(a)
        ly = T + 10 + (len(seen) - 1) * 13
        out.append(f'<line class="first" x1="{x(t):.1f}" y1="{T}" x2="{x(t):.1f}" y2="{H - B}"></line>')
        out.append(f'<text class="first-name" x="{x(t) + 4:.1f}" y="{ly}">agent-{a}</text>')
    out.append(f'<path class="step" d="{d}" pathLength="1"></path>')
    out.append(f'<circle class="end" cx="{x(T1):.1f}" cy="{y(c):.1f}" r="4"></circle>')
    out.append(f'<text class="end-label" x="{x(T1) + 10:.1f}" y="{y(c) + 4:.1f}">{c} messages</text>')
    out += hits
    out.append(f'<line class="axis" x1="{L}" y1="{H - B}" x2="{x(T1):.1f}" y2="{H - B}"></line>')
    for h, label in ((18 * 60 + 4, "start"), (19 * 60 + 4, "1 h"), (20 * 60 + 4, "2 h"), (21 * 60 + 4, "3 h")):
        out.append(f'<text class="tick" x="{x(h):.1f}" y="{H - B + 18}">{label}</text>')
    out.append("</svg>")
    return "\n".join(out)


page = PAGE.read_text()
for name, svg in (("growth", growth_svg()),):
    page, n = re.subn(rf"(<!-- fig:{name} -->\n).*?(\n?<!-- /fig:{name} -->)", lambda m: m.group(1) + svg + m.group(2), page, flags=re.S)
    assert n == 1, name
PAGE.write_text(page)
print("figures written")
