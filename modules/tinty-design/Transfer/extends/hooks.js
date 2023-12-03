import { computed, ref } from 'vue'
export function useTatgetIndex(initialIndex) {
  const targetIndex = ref(initialIndex)
  const setTargetIndex = (newIndex) => {
    targetIndex.value = Number(newIndex)
    console.log(targetIndex.value)
  }

  return [targetIndex, setTargetIndex]
}

export function useRightListData(initialData, checkedData) {
  const rightListData = ref(initialData)
  function addRightListData(newData) {
    rightListData.value = [...rightListData.value, ...newData]

    checkedData.value.left = []
  }
  function removeRightListData(newData) {
    newData.forEach((newItem) => {
      rightListData.value = rightListData.value.filter((item) => item.id !== newItem.id)
    })

    checkedData.value.right = []
  }

  return [rightListData, addRightListData, removeRightListData]
}

export function useCheckedData() {
  const checkedData = ref({
    left: [],
    right: [],
  })
  function addCheckedData(leftOrRight, item) {
    switch (leftOrRight) {
      case 'left':
        checkedData.value.left.push(item)
        break
      case 'right':
        checkedData.value.right.push(item)
        break
      default:
        break
    }
  }
  function removeCheckedData(leftOrRight, id) {
    switch (leftOrRight) {
      case 'left':
        checkedData.value.left = checkedData.value.left.filter((checkedItem) => checkedItem.id !== id)
        break
      case 'right':
        checkedData.value.right = checkedData.value.right.filter((checkedItem) => checkedItem.id !== id)
    }
  }

  return [checkedData, addCheckedData, removeCheckedData]
}

export function useComputedData(data, targetIndex, rightListData, checkedData) {
  const leftTitle = computed(() => {
    return data[targetIndex.value].title
  })

  const leftListData = computed(() => {
    const { data: currentData } = data[targetIndex.value]

    return currentData.filter((item) => {
      if (!rightListData.value.find(({ id }) => item.id === id)) {
        return item
      }
    })
  })

  const transferButtonDisabled = computed(() => ({
    left: checkedData.value.right.length === 0,
    right: checkedData.value.left.length === 0,
  }))

  return {
    leftTitle,
    leftListData,
    transferButtonDisabled,
  }
}
