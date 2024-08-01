import "./style.css"
import { gsap } from "gsap"
import { Rendering } from "./rendering"
import * as THREE from "three";

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"
import { customSinPalette, palettes, sinPalettes } from "./palettes";
import { getPaletteFromParams, setupControls } from "./utils";

// Colors 
let paletteKey = getPaletteFromParams("blue")

let palette = palettes[paletteKey]
let sinPalette = customSinPalette[paletteKey]

class Demo {
  constructor(){
    this.rendering = new Rendering(document.querySelector("#canvas"), palette)
    this.controls = new OrbitControls(this.rendering.camera, this.rendering.canvas)

    this.uTime = new THREE.Uniform(0)
    this.uVisibility = new THREE.Uniform(1)
    this.init()
  }
  init(){
    const box = new THREE.PlaneGeometry()
    const mat = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        uTime: this.uTime,
        uAspect: new THREE.Uniform(this.getAspectRatio()),
        uVisibility: this.uVisibility,
        uBG: new THREE.Uniform(palette.BG),
        c0: new THREE.Uniform(sinPalette.c0),
        c1: new THREE.Uniform(sinPalette.c1),
        c2: new THREE.Uniform(sinPalette.c2),
        c3: new THREE.Uniform(sinPalette.c3),
        
      }
    })

    let mesh = new THREE.Mesh(box,mat)
    this.rendering.scene.add(mesh)
    this.mesh = mesh;

    this.addEvents()
  }
  addEvents(){
    window.addEventListener('resize', this.onResize)
    gsap.ticker.add(this.tick)
  }
  onResize(){
    this.mesh.material.uAspect.value = this.getAspectRatio()
  }
  
  getAspectRatio() {
    let screen = this.rendering.vp.screen
    let width = Math.max(screen.width, screen.height);
    let height = width;

    let sizeRatioX = width / height;
    let texRatioX = screen.width / screen.height;
    let ratioX = Math.min(sizeRatioX / texRatioX, 1);

    let sizeRatioY = height / width;
    let texRatioY = screen.height / screen.width;
    let ratioY = Math.min(sizeRatioY / texRatioY, 1);

    return [1/ratioY, 1/ratioX];
  }
  tick = (time, delta)=>{
    this.uTime.value += delta;
    this.rendering.render()
  }
}
let vertexShader = glsl`
  varying vec2 vUv;
  void main() {
   vec3 transformed = position;
   vUv = uv;
   gl_Position = vec4(transformed * 2., 1.);
  }
`
                       
let fragmentShader = glsl`
  varying vec2 vUv;

  uniform vec3 c0;
  uniform vec3 c1;
  uniform vec3 c2;
  uniform vec3 c3;

  uniform float uTime;
  uniform vec3 uBG;
  uniform vec2 uAspect;
  uniform float uVisibility;

  vec3 palette(in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d) {
   return a + b * cos(6.28318 * (c * t + d));
  }
  vec3 paletteAnim(in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d) {
   return cos(6.28318 * (c * t + d));
  }
  #pragma glslify: noise = require(glsl-noise/simplex/3d)
  void main() {
   vec3 color1 = vec3(noise(vec3(vUv, 0.)));
   float res = 0.;
   const int size = 5;
   const int size2 = 7;
   vec2 uv = vUv;
   // uv.x += (uAspect).x/2.;
   uv += -0.5;
   uv = uv * (1. / uAspect);
   uv = uv / 2.5;
   uv += 0.5;
   for (int iy = -2; iy < size2; iy++)
     for (int ix = -2; ix < size2; ix++) {
       vec2 pos = vec2(float(ix) / float(size), float(iy) / float(size)) + 0.1;
       vec2 rel = pos - uv;
       float len = length(rel);
       float angle = atan(rel.y, rel.x) + uTime * 0.0002;
       angle = cos(angle * 8. + length(uv - 0.5) * 3.14 * 8.) * 0.5 + 0.5;
       res += smoothstep(1., 0.8, len) * 0.1 * angle;
     }
   vec3 color = vec3(1.);
   color = vec3(noise(vec3(vUv, 0.)));
   color = vec3(res);
   // * 8.
   float colorFreq = res;
   vec3 paletteColor = palette(colorFreq, c0, c1, c2, c3);

   vec3 anim = paletteAnim(colorFreq, c0, c1, c2, c3) * 0.5 + 0.5;
   float greyAnim = (anim.r + anim.g + anim.b) / 3.;
   color =
       mix(paletteColor, uBG, smoothstep((0.), greyAnim, (1. - uVisibility)));
   gl_FragColor = vec4(color, 1.0);
  }
`
                   

let demo = new Demo()

setupControls(paletteKey)
