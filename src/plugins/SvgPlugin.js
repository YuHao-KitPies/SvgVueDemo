import {SVG} from "@svgdotjs/svg.js";
import "@svgdotjs/svg.topoly.js";

export default {
  install: Vue => {
    Vue.prototype.$svg = SVG;
  }
};
