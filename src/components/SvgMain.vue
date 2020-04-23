<template>
  <div>
    <svg
      id="SvgMain"
      class="svgTop"
      version="1.1"
      xmlns:dc="http://purl.org/dc/elements/1.1/"
      xmlns:cc="http://creativecommons.org/ns#"
      xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
      xmlns:svg="http://www.w3.org/2000/svg"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      height="400"
      width="600"
    >
      <!-- horisontal lines -->
      <line
        v-for="lines in 40"
        :key="lines"
        x1="0"
        x2="600"
        :y1="lines * 10"
        :y2="lines * 10"
        stroke="lightgray"
        stroke-width="0.5"
      />

      <!-- vertical lines -->
      <line
        v-for="lines in 60"
        :key="lines*1000"
        :x1="lines * 10"
        :x2="lines * 10"
        y1="0"
        y2="400"
        stroke="lightgray"
        stroke-width="0.5px"
      />

      <rect x="0" y="0" width="600" height="400" fill="none" stroke="black" stroke-width="1" />
      <SvgFrame />
      <!-- <circle cx="50" cy="50" r="25" /> -->
    </svg>
  </div>
</template>

<script>
import SvgFrame from "./SvgFrame.vue";
export default {
  data() {
    return {
      horLines: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110]
    };
  },
  components: {
    SvgFrame
  }
};
</script>

<style>
</style>