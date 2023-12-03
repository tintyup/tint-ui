<script setup>
const props = defineProps({
  data: {
    type: Array,
    default: () => [],
  },
  targetIndex: {
    type: Number,
    default: 0,
  },
})

const emit = defineEmits(['selectChange'])

const selectChange = (value) => {
  emit('selectChange', value)
}
</script>

<template>
  <select @change="selectChange($event.target.value)">
    <option v-for="(title, index) of data" :key="index" :value="index">{{ title }}</option>
  </select>
</template>

<style lang="scss" scoped></style>
