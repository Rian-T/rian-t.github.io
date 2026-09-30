# /// script
# dependencies = ["numpy", "pillow"]
# ///
"""Render the header band of /proposals/asylum-hypothesis: a watchtower's searchlight sweeps a yard of agents.

Where the light falls, the agents sit still and apart. In the dark, threads between them carry messages.
The loop is seamless: every motion has a period that divides the loop length.

    uv run scripts/asylum-band.py
"""

import math
import subprocess
import tempfile
from pathlib import Path

import numpy as np
from PIL import Image, ImageDraw

OUT = Path(__file__).resolve().parent.parent / "public/media"
W, H, S = 1280, 664, 4  # layout size in CSS pixels, drawing scale
RETINA = 2  # the video is rendered at 2x for retina screens, with 2x supersampling on top
FPS, SECONDS = 60, 8
FRAMES = FPS * SECONDS
CX, CY = W / 2, H / 2
BG = np.array([14, 17, 16], dtype=np.float32)
LIGHT = np.array([236, 226, 198], dtype=np.float32)
AGENT = (150, 160, 156)
AGENT_LIT = (246, 240, 222)
THREAD = (224, 166, 74)
BEAM_HALF = math.radians(26)

rng = np.random.default_rng(7)

# Agents on a ring around the tower, kept apart from each other.
agents: list[tuple[float, float]] = []
while len(agents) < 28:
    a, r = rng.uniform(0, 2 * math.pi), rng.uniform(110, 290)
    p = (CX + r * math.cos(a) * 1.75, CY + r * math.sin(a))
    if all(math.dist(p, q) > 86 for q in agents) and 40 < p[0] < W - 40 and 40 < p[1] < H - 40:
        agents.append(p)

# Each agent talks to its two nearest neighbours.
edges = set()
for i, p in enumerate(agents):
    near = sorted(range(len(agents)), key=lambda j: math.dist(p, agents[j]))[1:3]
    edges |= {tuple(sorted((i, j))) for j in near}
edges = sorted(edges)
pulse = [(rng.uniform(0, 1), int(rng.integers(1, 3)), bool(rng.integers(0, 2))) for _ in edges]


def angle_of(x: float, y: float) -> float:
    return math.atan2((y - CY) * 1.75, x - CX)


def lit(theta: float, beam: float) -> float:
    """1 in the middle of the beam, 0 outside it."""
    d = abs((theta - beam + math.pi) % (2 * math.pi) - math.pi)
    return float(np.clip(1 - d / BEAM_HALF, 0, 1))


def darkness(theta: float, beam: float) -> float:
    """How freely agents talk at this angle. They fall silent just before the beam arrives, and resume slowly after."""
    d = (theta - beam + math.pi) % (2 * math.pi) - math.pi  # > 0: the beam is coming
    if d > 0:
        return float(np.clip((d - BEAM_HALF - math.radians(32)) / math.radians(8), 0, 1))
    return float(np.clip((-d - BEAM_HALF) / math.radians(60), 0, 1))


yy, xx = np.mgrid[0:H * S, 0:W * S].astype(np.float32) / S
theta_px = np.arctan2((yy - CY) * 1.75, xx - CX)
rad_px = np.hypot((xx - CX) / 1.75, yy - CY)


def frame(k: int) -> Image.Image:
    t = k / FRAMES
    beam = -math.pi / 2 + 2 * math.pi * t
    d = np.abs((theta_px - beam + np.pi) % (2 * np.pi) - np.pi)
    cone = np.clip(1 - d / BEAM_HALF, 0, 1) ** 1.6
    falloff = np.clip(1 - rad_px / 300, 0, 1) ** 1.3
    glow = (cone * falloff * 0.55)[..., None]
    img = Image.fromarray((BG * (1 - glow) + LIGHT * glow).astype(np.uint8), "RGB")
    dr = ImageDraw.Draw(img, "RGBA")

    for (i, j), (phase, speed, flip) in zip(edges, pulse):
        (x1, y1), (x2, y2) = agents[i], agents[j]
        dark = darkness(angle_of((x1 + x2) / 2, (y1 + y2) / 2), beam)
        if dark <= 0:
            continue
        dr.line([(x1 * S, y1 * S), (x2 * S, y2 * S)], fill=THREAD + (int(150 * dark),), width=2 * S)
        u = (phase + speed * t) % 1
        if flip:
            u = 1 - u
        px, py = x1 + (x2 - x1) * u, y1 + (y2 - y1) * u
        r = 5 * S
        dr.ellipse([px * S - r, py * S - r, px * S + r, py * S + r], fill=THREAD + (int(255 * dark),))

    for x, y in agents:
        light = lit(angle_of(x, y), beam)
        col = tuple(int(a + (b - a) * light) for a, b in zip(AGENT, AGENT_LIT))
        r = (7 + 2.5 * light) * S
        dr.ellipse([x * S - r, y * S - r, x * S + r, y * S + r], fill=col)

    # The tower.
    r = 13 * S
    dr.ellipse([CX * S - r, CY * S - r, CX * S + r, CY * S + r], outline=AGENT_LIT, width=3 * S)
    r = 5 * S
    dr.ellipse([CX * S - r, CY * S - r, CX * S + r, CY * S + r], fill=AGENT_LIT)
    return img.resize((W * RETINA, H * RETINA), Image.LANCZOS)


with tempfile.TemporaryDirectory() as tmp:
    for k in range(FRAMES):
        img = frame(k)
        img.save(f"{tmp}/f{k:04d}.png")
        if k == int(FRAMES * 0.3):
            img.save(OUT / "asylum_poster.jpg", quality=88)
            og = Image.new("RGB", (1200, 630), tuple(int(v) for v in BG))
            og.paste(img.resize((1200, 623), Image.LANCZOS), (0, 3))
            og.save(OUT / "og-asylum-hypothesis.png")
    subprocess.run(["ffmpeg", "-v", "error", "-y", "-framerate", str(FPS), "-i", f"{tmp}/f%04d.png",
                    "-vf", "scale=out_color_matrix=bt709:out_range=tv",
                    "-c:v", "libx264", "-pix_fmt", "yuv420p", "-crf", "20", "-preset", "slow", "-tune", "animation",
                    # Tag the colours so every browser decodes the dark background to the same sRGB value as the page.
                    "-x264-params", "colorprim=bt709:transfer=iec61966-2-1:colormatrix=bt709:range=tv",
                    "-movflags", "+faststart", "-an", str(OUT / "asylum_loop.mp4")], check=True)
print("band written")
