<template>
  <g>
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
    <circle v-if="draggersVisible" cx="10" cy="10" r="10" fill="blue" />
  </g>
</template>

<script>
export default {
  name: "SvgFrame",
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