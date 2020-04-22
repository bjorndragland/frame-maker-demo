<template>
  <div>
    <div id="SvgMainWindow">
      <SvgMain></SvgMain>
    </div>
    <div id="PartListWindow">
      <UiPartList></UiPartList>
    </div>
  </div>
</template>

<script>
import SvgMain from "./SvgMain.vue";
import UiPartList from "@/components/UiPartList.vue";
export default {
  components: {
    SvgMain,
    UiPartList
  }
};
</script>

<style scoped>
</style>