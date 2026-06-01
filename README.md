# Bifurcation Locus Limit Latent Space

An interactive WebGL study of bifurcation-locus limit geometry in a latent-space slice stack. The page renders a progressive three-dimensional line object with curve-type controls, rib/background balance, depth-gradient control, and a repeatable scan pass that hides foreground slices as the wave moves through the volume.

Open `index.html` locally or host the repository as a static site.

## Gemini Artifacts

- Current Gemini artifact: [gemini.google.com/share/457213c0b552](https://gemini.google.com/share/457213c0b552)
- Original Gemini artifact by [@cammakingminds](https://github.com/cammakingminds): [gemini.google.com/share/8838217a650f](https://gemini.google.com/share/8838217a650f)

## Demos

The repository includes small H.264 MP4 captures in `media/` for quick previewing.

<video src="media/demo-06-full-run.mp4" controls muted width="720"></video>

| Demo | Video |
| --- | --- |
| Overview | [demo-01-overview.mp4](media/demo-01-overview.mp4) |
| Controls | [demo-02-controls.mp4](media/demo-02-controls.mp4) |
| Scan pass | [demo-03-scan.mp4](media/demo-03-scan.mp4) |
| Repeatable scan | [demo-04-repeat-scan.mp4](media/demo-04-repeat-scan.mp4) |
| Depth gradient | [demo-05-depth-gradient.mp4](media/demo-05-depth-gradient.mp4) |
| Full run | [demo-06-full-run.mp4](media/demo-06-full-run.mp4) |

## Run Locally

```sh
python3 -m http.server 8765 --bind 127.0.0.1
```

Then open [http://127.0.0.1:8765/index.html](http://127.0.0.1:8765/index.html).

## Validation

```sh
node --test tests/scan-behavior.test.mjs
```
