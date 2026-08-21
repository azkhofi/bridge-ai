// Menghasilkan ikon PWA PNG (192 & 512) dari favicon.svg terbaru.
import { Resvg } from '@resvg/resvg-js'
import { readFileSync, writeFileSync } from 'fs'

const svg = readFileSync(new URL('../public/favicon.svg', import.meta.url))

for (const size of [192, 512]) {
  const resvg = new Resvg(svg, { fitTo: { mode: 'width', value: size } })
  const png = resvg.render().asPng()
  const out = new URL(`../public/icon-${size}.png`, import.meta.url)
  writeFileSync(out, png)
  console.log('generated', out.pathname, png.length, 'bytes')
}
