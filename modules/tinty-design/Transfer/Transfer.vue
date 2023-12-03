<script setup>
import Selector from './components/Selector.vue'
import ListTitle from './components/ListTitle.vue'
import ButtonGroup from './components/ButtonGroup.vue'
import ListItem from './components/ListItem.vue'

import { defineProps } from 'vue'
import propsDefination from './extends/props.js'
import { useTatgetIndex, useComputedData, useRightListData, useCheckedData } from './extends/hooks'

const props = defineProps(propsDefination)
const options = props.data.map((item) => item.title)

const [targetIndex, setTargetIndex] = useTatgetIndex(0)

const [checkedData, addCheckedData, removeCheckedData] = useCheckedData()

const [rightListData, addRightListData, removeRightListData] = useRightListData([], checkedData)

const { leftTitle, leftListData, transferButtonDisabled } = useComputedData(props.data, targetIndex, rightListData, checkedData)

const setCheckedData = (checked, leftOrRight, item) => {
  checked ? addCheckedData(leftOrRight, item) : removeCheckedData(leftOrRight, item.id)
}
</script>

<template>
  <div class="transfer-container">
    <div>
      <Selector :data="options" @select-change="setTargetIndex" />
    </div>
    <div class="transfer">
      <div class="box left-list">
        <list-title :title="leftTitle"></list-title>
        <div>
          <list-item :data="leftListData" left-or-right="left" @checkbox-click="setCheckedData"></list-item>
        </div>
      </div>
      <button-group
        :left-button-disabled="transferButtonDisabled.left"
        :right-button-disabled="transferButtonDisabled.right"
        @left-button-click="removeRightListData(checkedData.right)"
        @right-button-click="addRightListData(checkedData.left)"
      ></button-group>
      <div class="box right-list">
        <list-title :title="rightTitle"></list-title>
        <div>
          <list-item :data="rightListData" left-or-right="right" @checkbox-click="setCheckedData"></list-item>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.transfer-container {
  margin: 10px;
}
.transfer {
  width: 360px;
  height: 300px;
  display: flex;
  flex-direction: row;
  border: 1px solid #ccc;
  .box {
    width: 120px;
    height: 100%;
  }
}
</style>
