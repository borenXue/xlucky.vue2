# SwitchController Component

Switch components, support various custom styles.

### Basic Usage

```vue
<!-- livedemo: {} -->

<template>
  <div class="demo-switch-controller-001">
    <div>
      <label>Default Open {{ switchOpen }}:</label>
      <xv-switch-controller v-model="switchOpen" />
    </div>

    <div>
      <label>Default Close {{ switchOpen2 }}:</label>
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

### Custom Usage

Support custom color, size, line width, animation duration.

```vue
<!-- livedemo: {} -->

<template>
  <div class="demo-switch-controller-002">
    <div class="tip">The display component frame is just for display convenience</div>

    <div class="demo-line">
      <div class="demo-item">
        <label>Custom Color:</label>
        <xv-switch-controller v-model="switchOpen" color="red" />
      </div>

      <div class="demo-item">
        <label>Custom line width and size:</label>
        <xv-switch-controller v-model="switchOpen2" color="#50a6ff" :line-width="6" :size="80" />
      </div>
    </div>

    <div class="demo-line">
      <div class="demo-item">
        <label>Custom size:</label>
        <xv-switch-controller v-model="switchOpen2" :size="100" />
      </div>

      <div class="demo-item">
        <label>Custom animation duration:</label>
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
