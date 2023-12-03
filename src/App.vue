<script setup>
const data = [
  {
    title: 'Apple',
    data: [
      {
        id: 1,
        phone_name: 'iPhone 12',
        disabled: false,
      },
      {
        id: 2,
        phone_name: 'iPhone 11',
        disabled: false,
      },
      {
        id: 3,
        phone_name: 'iPhone XR',
        disabled: false,
      },
    ],
  },
  {
    title: 'Samsung',
    data: [
      {
        id: 4,
        phone_name: 'Galaxy S21',
        disabled: true,
      },
      {
        id: 5,
        phone_name: 'Galaxy Note 20',
        disabled: false,
      },
      {
        id: 6,
        phone_name: 'Galaxy A52',
        disabled: false,
      },
    ],
  },
  {
    title: 'Xiaomi',
    data: [
      {
        id: 7,
        phone_name: 'Mi 11',
        disabled: false,
      },
      {
        id: 8,
        phone_name: 'Redmi Note 10 Pro',
        disabled: false,
      },
      {
        id: 9,
        phone_name: 'Xiaomi 10T Pro',
        disabled: false,
      },
    ],
  },
]
</script>

<template>
  <transfer :data="data" right-title="已选择机型"></transfer>
</template>

<style scoped></style>
