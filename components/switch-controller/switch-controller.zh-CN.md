# SwitchController 组件

开关组件, 支持各种自定义样式

### 基础用法

```vue
<!-- livedemo: {} -->

<template>
  <div class="demo-switch-controller-001">
    <div>
      <label>默认打开 {{ switchOpen }}:</label>
      <xv-switch-controller v-model="switchOpen" />
    </div>

    <div>
      <label>默认关闭 {{ switchOpen2 }}:</label>
      <xv-switch-controller v-model="switchOpen2" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      switchOpen: true,
      switchOpen2: false,
    };
  },
};
</script>

<style lang="scss">
.demo-switch-controller-001 {
  display: flex;
  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    label {
      width: 115px;
      text-align: left;
    }
  }
}
</style>
```

### 自定义用法

支持颜色、大小、线条宽度、动画时长

```vue
<!-- livedemo: {} -->

<template>
  <div class="demo-switch-controller-002">
    <div class="tip">显示组件边框仅仅是为了方便展示</div>

    <div class="demo-line">
      <div class="demo-item">
        <label>自定义颜色:</label>
        <xv-switch-controller v-model="switchOpen" color="red" />
      </div>

      <div class="demo-item">
        <label>自定义线条宽度和大小:</label>
        <xv-switch-controller v-model="switchOpen2" color="#50a6ff" :line-width="6" :size="80" />
      </div>
    </div>

    <div class="demo-line">
      <div class="demo-item">
        <label>自定义大小:</label>
        <xv-switch-controller v-model="switchOpen2" :size="100" />
      </div>

      <div class="demo-item">
        <label>自定义动画时长:</label>
        <xv-switch-controller v-model="switchOpen2" color="green" :size="100" :duration="3000" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      switchOpen: true,
      switchOpen2: false,
    };
  },
};
</script>

<style lang="scss">
.demo-switch-controller-002 {
  position: relative;
  .tip {
    font-size: 14px;
    color: #b3b9ce;
    text-align: center;
    display: block;
  }
  .xv-switch-controller {
    outline: 1px solid #eaeefb;
  }
  .demo-line {
    display: flex;
    align-items: center;
    margin-top: 15px;
  }
  .demo-item {
    display: flex;
    align-items: center;
    flex: 1;
    label {
      width: 190px;
    }
  }
}
</style>
```

### Attributes

| 参数      | 说明                  | 类型   | 默认值    | 描述 |
| --------- | --------------------- | ------ | --------- | ---- |
| duration  | 动画时长, 单位为毫秒  | Number | 800       | -    |
| size      | 大小,组件的宽度和长度 | Number | 50        | -    |
| color     | 颜色                  | String | '#304156' | -    |
| lineWidth | 线条宽度              | Number | 3         | -    |

### 事件

| 事件名          | 说明                       | 回调参数                             |
| --------------- | -------------------------- | ------------------------------------ |
| animation-start | 打开或关闭的动画开始前触发 | type, 事件类型, 其值为 open 或 close |
| animation-end   | 打开或关闭的动画结束时触发 | type, 事件类型, 其值为 open 或 close |
