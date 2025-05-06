<template>
  <el-slider
      :style="item.size=='custom' ? getItemStyle(item):''"
      style="width: 80%;margin:0px 20px"
      v-model="item.n"
      :size="item.size=='custom' ?'':item.size"
      :min="item.min"
      :max="item.max"
      :step="item.step"
      :format-tooltip="formatTooltip"
  />

</template>

<script setup>
import {getItemStyle} from "@/public";

import {defineEmits, defineProps} from "vue";

const {item} = defineProps(['item'])
console.log("自定义组件数据", item);
const emits = defineEmits(["CustomEvent"]);
console.log("自定义组件事件", emits);

function formatTooltip(index){
  return index
}

</script>