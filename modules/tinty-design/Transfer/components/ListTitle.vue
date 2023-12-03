<script setup>
const props = defineProps({
  title: {
    type: String,
    default: '列表',
  },
})
</script>

<template>
  <h1 class="list-title">{{ title }}</h1>
</template>

<style lang="scss" scoped>
.list-title {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  margin: 0;
  border-bottom: 1px solid #ccc;
  font-size: 14px;
  color: #333;
  background-color: #efefef;
}
</style>
