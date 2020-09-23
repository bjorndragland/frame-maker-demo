<template>
  <g>
    <rect x="170" y="70" width="260" height="160" fill="none" stroke="black" stroke-width="2px" />

    <rect
      x="150"
      y="50"
      width="300"
      height="200"
      fill="none"
      stroke="black"
      stroke-width="2px"
      pointer-events="visible"
      @mouseover="draggersVisible=true"
      @mouseleave="draggersVisible=false"
    />

    <line x1="150" x2="170" y1="50" y2="70" stroke="black" stroke-width="1px" />
    <line x1="450" x2="430" y1="50" y2="70" stroke="black" stroke-width="1px" />
    <line x1="150" x2="170" y1="50" y2="70" stroke="black" stroke-width="1px" />
    <line x1="150" x2="170" y1="50" y2="70" stroke="black" stroke-width="1px" />

    <SvgDragArrow v-if="draggersVisible" x="150" y="150" angle="0"></SvgDragArrow>
    <SvgDragArrow v-if="draggersVisible" x="450" y="150" angle="0"></SvgDragArrow>
    <SvgDragArrow v-if="draggersVisible" x="300" y="250" angle="90"></SvgDragArrow>
    <SvgDragArrow v-if="draggersVisible" x="300" y="50" angle="90"></SvgDragArrow>
  </g>
</template>

<script>
import SvgDragArrow from "./SvgDragArrow.vue";
export default {
  name: "SvgFrame",
  components: {
    SvgDragArrow
  },
  data() {
    return {
      draggersVisible: false
    };
  },
  methods: {},
  computed: {}
};
</script>

<style>
</style>