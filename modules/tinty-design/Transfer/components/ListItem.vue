<script setup>
const props = defineProps({
  data: {
    type: Array,
    default: () => [],
  },
  leftOrRight: {
    type: String,
    validator: (value) => ['left', 'right'].includes(value),
  },
})

const emit = defineEmits(['checkboxClick'])
const checkboxClick = (checked, leftOrRight, item) => {
  emit('checkboxClick', checked, leftOrRight, item)
}
</script>

<template>
  <div v-for="(item, index) of data" :key="item.id" :class="['list-item', item.disabled ? 'disabled' : '']">
    <input type="checkbox" :disabled="item.disabled" :id="'__checkbox__' + item.id" @click="checkboxClick($event.target.checked, leftOrRight, item)" />
    <label :for="'__checkbox__' + item.id">{{ item.phone_name }}</label>
  </div>
</template>

<style lang="scss" scoped>
.list-item {
  display: flex;
  align-items: center;
  height: 30px;
  font-size: 12px;
  color: #666;

  &.disabled {
    opacity: 0.6;
  }
}
</style>
