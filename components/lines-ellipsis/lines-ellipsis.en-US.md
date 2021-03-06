# LinesEllipsis Component

可自定义超过的文案, 但不会随浏览器大小改变而重新渲染

如果需要重新渲染, 需要调用组件实例的 `calc()` 函数

### 使用示例

```vue
<!-- livedemo: {} -->

<template>
  <div class="demo-lines-ellipsis-001">
    <h3 class="title-line">文字未超出时</h3>
    <xv-lines-ellipsis :lines="3" :ellipsis="ellipsis" text="中国网9月23日讯 据外交部网站今日消息，中国外交部" />

    <br />

    <h3 class="title-line">文字超出时</h3>
    <xv-lines-ellipsis @more="moreClick" :lines="3" :ellipsis="ellipsis" :text="text" />
  </div>
</template>

<style lang="scss">
.demo-lines-ellipsis-001 {
  .lines-ellipsis-span {
    cursor: pointer;
  }
}
</style>

<script>
export default {
  methods: {
    moreClick(event) {
      console.log('moreClick: ', event);
      this.$message.info('点击了 <查看更多> 按钮');
    },
  },
  data() {
    return {
      ellipsis: ' <span style="color:  #409eff;"> ......查看更多</span>',
      text: `中国网9月23日讯 据外交部网站今日消息，中国外交部发言人汪文斌就美国领导人联大涉华讲话发表谈话。汪文斌指出，令人遗憾的是，美方利用联合国讲台，罔顾事实，编造谎言，出于不可告人的政治目的，对中国进行无端指责抹黑，中方对此坚决反对。事实再次证明，单边主义和霸凌行径是全世界面临的最严重威胁。汪文斌指出，谎言代替不了真相。中国应对疫情的表现全世界都看得很清楚，人民自有公论。新冠病毒是全人类的共同敌人，中国是病毒受害国，也是全球抗疫贡献国。中国第一时间报告疫情，第一时间确定了病原体，第一时间向世界分享了基因序列。在确定病毒出现人传人现象之后，中国在第一时间果断作出关闭离开武汉通道的决定，中方对湖北省、武汉市对外通道实施最严格的封闭和交通管控，中国海关即依法阻止全国各地拟出境人员中发现的“四类人员”出境。汪文斌称，1月23日，中方关闭离汉通道时，中国以外的国家和地区一共只有9例确诊病例，美国只有1例。1月31日，美国停飞中美直航航班，2月2日，美国对所有中国公民关闭边境，当时美国公布的确诊病例也只有10余例。中国抗疫行动公开透明，时间经纬清清楚楚，事实数据一目了然。`,
    };
  },
};
</script>
```

### Attributes

| 参数     | 说明       | 类型   | 默认值 | 描述 |
| -------- | ---------- | ------ | ------ | ---- |
| ellipsis | 省略号内容 | String | '...'  | -    |
| text     | 内容(必填) | String | -      | -    |
| lines    | 最大行数   | Number | 3      | -    |

### 事件

| 事件名 | 说明                                        | 回调参数 |
| ------ | ------------------------------------------- | -------- |
| more   | 点击自定义的省略号时触发, eg: '...查看更多' | event    |
