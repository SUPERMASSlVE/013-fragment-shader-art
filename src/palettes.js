import { Color } from "three";
import * as THREE from "three";
THREE.ColorManagement.enabled = false

export const paletteList = ["black", "pink", "aquamarine", "blue", "darkblue", "grey", "white", "orange"]

export const palettes = {
  black: {
    "index": 0,
    "accentPalette": "black",
    "id": "black",
    "BG":             new Color("#100f10"),
    "BGLight":        new Color("#2a282a"),
    "text":           new Color("#b9bec2"),
    "highlightHover": new Color("#cccccc"),
    "inactive":       new Color("#6d6d6d"),
    "highlight":      new Color("#ffffff")
  },
  pink: {
    "index": 1,
    "accentPalette": "black",
    "id": "pink",
    "text":           new Color("#f0dede"),
    "inactive":       new Color("#e39393"),
    "BG":             new Color("#db7676"),
    "highlightHover": new Color("#f3c6c6"),
    "BGLight":        new Color("#d55f5f"),
    "highlight":      new Color("#ffffff")
  },
  aquamarine: {
    "index": 2,
    "accentPalette": "black",
    "id": "aquamarine",
    "BGLight":        new Color("#66a2a5"),
    "text":           new Color("#e0f1f1"),
    "highlightHover": new Color("#b5d6d8"),
    "inactive":       new Color("#56979b"),
    "BG":             new Color("#7fb9bc"),
    "highlight":      new Color("#ffffff")
  },
  blue: {
    "index": 3,
    "accentPalette": "black",
    "id": "blue",
    "BG":             new Color("#5963fa"),
    "BGLight":        new Color("#424bd3"),
    "highlight":      new Color("#f6f6f4"),
    "text":           new Color("#d2daf3"),
    "highlightHover": new Color("#c1c3e9"),
    "inactive":       new Color("#7b82e7")
  },
  darkblue:{
    "index": 4,
    "accentPalette": "black",
    "id": "darkblue",
    "BGLight":        new Color("#2c4570"),
    "BG":             new Color("#446091"),
    "text":           new Color("#a4b8db"),
    "highlightHover": new Color("#9fbae9"),
    "highlight":      new Color("#e7e6e4"),
    "inactive":       new Color("#6580ad")
  },
  grey: {
    "index": 5,
    "accentPalette": "white",
    "id": "grey",
    "inactive":       new Color("#7c8598"),
    "BG":             new Color("#ebebeb"),
    "BGLight":        new Color("#bcc2c9"),
    "highlight":      new Color("#122438"),
    "text":           new Color("#2a3e53"),
    "highlightHover": new Color("#3c526a")
  },
  white: {
    "index": 6,
    "accentPalette": "white",
    "id": "white",
    "BG":             new Color("#ffffff"),
    "BGLight":        new Color("#dfdfdf"),
    "text":           new Color("#3d3d3d"),
    "highlightHover": new Color("#333333"),
    "inactive":       new Color("#8d8d8d"),
    "highlight":      new Color("#000000"),
  },
  orange: {
    "index": 7,
    "accentPalette": "black",
    "id": "orange",
    "BG":             new Color("#f5e1ce"),
    "BGLight":        new Color("#f1d7c0"),
    "highlight":      new Color("#f04924"),
    "text":           new Color("#ff7657"),
    "highlightHover": new Color("#fd6e4e"),
    "inactive":       new Color("#ebaf92")
  }
}


export const sinPalettes = {
  black: {
    c0: new Color(0x404040),
    c1: new Color(0xcef316),
    c2: new Color(0x815903),
    c3: new Color(0xae00ff),
  },
  pink: {
    c0: new Color(0x949494),
    c1: new Color(0x9ccd32),
    c2: new Color(0x835a01),
    c3: new Color(0x7b6f80),
  },
  aquamarine: {
    c0: new Color(0x7df96c),
    c1: new Color(0xaccd32),
    c2: new Color(0x8f7338),
    c3: new Color(0xf52ee5),
  },
  blue: {
    c0: new Color(0.8 , 0.95, 0.4),
    c1: new Color(0.5 , 0.5, 0.35),
    c2: new Color(0.1 , 0.5, 0.4),
    c3: new Color(0   , 0, 0.85),
  },
  darkblue: {
    c0: new Color(0xd8e3ba),
    c1: new Color(0x7f7f59),
    c2: new Color(0x197f66),
    c3: new Color(0x090953),
  },
  grey: {
    c0: new Color(0x878787),
    c1: new Color(0x83a59a),
    c2: new Color(0xebebeb),
    c3: new Color(0x00d6bd),
  },
  white: {
    c0: new Color(0x878787),
    c1: new Color(0x707070),
    c2: new Color(0xffffff),
    c3: new Color(0x4b7d95),
  },
  orange: {
    c0: new Color(0.5, 0.5, 0.5),
    c1: new Color(0.5, 0.5, 0.5),
    c2: new Color(0.5, 0.5, 0.5),
    c3: new Color(0.5, 0.5, 0.5),
  },
};

export const customSinPalette =  {
  ...sinPalettes,
  black: {
    c0: new Color(0.4588235294117647,0.4588235294117647,0.4588235294117647),
    c1: new Color(0.65,1,0),
    c2: new Color(0.59,0.23,0),
    c3: new Color(0,0,0),
  },
  pink: {
    ...sinPalettes.pink,
    c3: new Color(0.76, 0.62, 0.75),
  },
  aquamarine: {
    c0: new Color(0.49019607843137253,0.9764705882352941,0.4235294117647059),
    c1: new Color(0.6745098039215687,0.803921568627451,0.19607843137254902),
    c2: new Color(0.5607843137254902,0.45098039215686275,0.86),
    c3: new Color(0.9607843137254902,0.1803921568627451,0.8980392156862745),
  },
  blue: {
    c0: new Color(0.3568627450980392,0.26666666666666666,0.023529411764705882),
    c1: new Color(0.59,0.66,1),
    c2: new Color(0.61,0.5,0.4),
    c3: new Color(0.02,0.45,0.85),
  },
  darkblue: {
    c0: new Color(0.6901960784313725,0.7058823529411765,0.6549019607843137),
    c1: new Color(0.4980392156862745,0.4980392156862745,0.34901960784313724),
    c2: new Color(0.52,0.4980392156862745,0.35),
    c3: new Color(0.78,0.86,0.21),
  },
  orange: {
    c0: new Color(0.5843137254901961,0.20392156862745098,0.13725490196078433),
    c1: new Color(0.56,0.33,0.1),
    c2: new Color(0.46,0.53,0.5),
    c3: new Color(0.82,0.59,0.14),
  },
}
