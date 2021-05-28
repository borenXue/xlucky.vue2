# Layout 布局组件

```vue
<!-- livedemo: {} -->

<template>
  <div class="demo-layout-001">
    <xv-layout v-model="collapse" @change="valueChange" :sidebar="sidebar">
      <div>content 内容001</div>
      <br />
      <div>content 内容002</div>
      <span slot="header-left" style="color:green"> 自定义部分 </span>
      <span slot="header-right" style="color:blue"> 自定义部分 </span>
    </xv-layout>
  </div>
</template>

<script>
export default {
  data() {
    return {
      collapse: true,
      sidebar: [
        { path: 'http://www.baidu.com', meta: { title: '百度' } },
        { path: '/aa', hidden: true, meta: { title: '隐藏条目' } },
        {
          path: '/auth',
          meta: { title: '权限模块管理' },
          children: [
            { path: '/auth/user', meta: { title: '用户管理' } },
            { path: '/auth/role', meta: { title: '角色管理' } },
            { path: '/auth/resource', meta: { title: '资源管理' } },
          ],
        },
      ],
    };
  },
  methods: {
    valueChange(val) {
      this.collapse = val;
    },
  },
};
</script>

<style lang="scss">
.demo-layout-001 {
  height: 400px;
  width: 100%;
  border: 1px solid #429fff;
}
</style>
```

~
