<script setup>
const props = defineProps({
  leftButtonDisabled: {
    type: Boolean,
    default: true,
  },
  rightButtonDisabled: {
    type: Boolean,
    default: true,
  },
})

const emit = defineEmits(['leftButtonClick', 'rightButtonClick'])

const leftButtonClick = () => {
  emit('leftButtonClick')
}
const rightButtonClick = () => {
  emit('rightButtonClick')
}
</script>

<template>
  <div class="box button-group">
    <button :disabled="leftButtonDisabled" @click="leftButtonClick">&lt;</button>
    <button :disabled="rightButtonDisabled" @click="rightButtonClick">&gt;</button>
  </div>
</template>

<style lang="scss" scoped>
.button-group {
  display: flex;
  justify-content: center;
  align-items: center;
  border-left: #ddd 1px solid;
  border-right: #ddd 1px solid;
  button {
    width: 38px;
    height: 38px;
    border: none;
    background-color: orange;
    color: #fff;
    border-radius: 5px;
    outline: none;
    cursor: pointer;

    &:disabled {
      opacity: 0.6;
    }

    &:nth-child(2) {
      margin-left: 10px;
    }
  }
}
</style>
