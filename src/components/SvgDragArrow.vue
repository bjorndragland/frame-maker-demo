<template>
  <g :transform="translationPoints">
    <!-- points="0,50 50,0 50,25 200,25 200,0 250,50 200,100 200,75 50,75 50,100 0,50" -->

    <polygon
      points="0,10 10,0 10,5 40,5 40,0 50,10 40,20 40,15 10,15 10,20 0,10"
      fill="#e2a22c"
      stroke="#000000"
      stroke-width="1"
    />
  </g>
</template>

<script>
export default {
  name: "SvgDragArrow",
  props: ["x", "y", "angle"],
  computed: {
    translationPoints() {
      let thex = this.x - 25;
      let they = this.y - 10;
      let theangle = this.angle;
      return (
        "translate(" + thex + " " + they + ") rotate(" + theangle + " 25 10)"
      );
    }
  },
  methods: {
    close() {
      this.$emit("closeCB");
    }
  }
};
</script>

<style>
</style>