# ONE Logo Animation

An animated 3D logo built with [Three.js](https://threejs.org/) and [Vite](https://vitejs.dev/). The animation features a star orbiting a pulsing circular path, which then slides into position beside the "NE" logotype as the text fades in.

## Preview

The animation plays out in three stages:

1. **Grow** — the orbit ring expands outward from its initial radius.
2. **Shrink & Slide** — the ring contracts and the orbit group moves to the left.
3. **Reveal** — once in position, the "NE" text fades in alongside the orbit.

## Tech Stack

| Tool | Version |
|------|---------|
| [Three.js](https://threejs.org/) | ^0.182.0 |
| [Vite](https://vitejs.dev/) | ^7.3.1 |

## Project Structure

```
logo/
├── index.html
├── package.json
├── public/
│   └── fonts/
│       └── helvetiker_regular.typeface.json
└── src/
    ├── main.js                  # Scene setup, animation loop
    ├── constants/
    │   ├── canvas_config.js     # Canvas dimensions for text texture
    │   ├── management.js        # Camera & light configuration
    │   └── radiusvars.js        # Orbit radius min / max / initial values
    └── objects/
        ├── Orbit.js             # OrbitPath — animatable ellipse ring
        ├── Star.js              # Star — white sphere mesh
        └── Text.js              # Text — canvas-texture plane with fade-in
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)

### Installation

```bash
git clone https://github.com/your-username/logo.git
cd logo
npm install
```

### Development

```bash
npm run dev
```

Open your browser at `http://localhost:5173` to see the animation.

## Configuration

All tweakable values are centralised in `src/constants/`:

| File | What it controls |
|------|-----------------|
| `canvas_config.js` | Width & height of the canvas used to render the "NE" text texture |
| `management.js` | Camera field-of-view, near/far clipping planes, position, and light settings |
| `radiusvars.js` | Starting, minimum, and maximum radius of the orbit ring |

Animation speed values (step increments per frame) live in the `animate()` function in `src/main.js`.

