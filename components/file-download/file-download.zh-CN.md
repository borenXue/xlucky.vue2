# FileDownload 组件

文件下载与导出, 支持各种请求模式. 自带 loading 效果.

`文件名判定优先级`: 前端指定(name 参数) > 接口指定 (Content-Disposition) > 从 url 中自动提取

`Content-Disposition`: 若需使用接口指定的文件名, 则响应头需设置 `Access-Control-Expose-Headers: Content-Disposition`

### 基础用法

```vue
<!-- livedemo: {} -->

<template>
  <div class="demo-file-download-001">
    <!--
      财务系统、文件导出、接口有自定义 filename、需要cookie
      测试地址: http://xbr.wyins.net.cn:9000/#/zh-CN/components/file-download
      <xv-file-download :url="f10.url" :name="f10.name" :params="f10.params" @error="errorHandler" />
    -->
    <div style="text-align: center;display: block;min-width: 100%;">
      <el-radio-group v-model="sample" @change="() => (this.f1 = JSON.parse(JSON.stringify(this[sample])))">
        <el-radio-button label="f11">示例一</el-radio-button>
        <el-radio-button label="f22">示例二</el-radio-button>
      </el-radio-group>
    </div>

    <br /><span>withCredentials: </span>
    <el-radio-group v-model="f1.credentials">
      <el-radio-button :label="true">true</el-radio-button>
      <el-radio-button :label="false">false</el-radio-button>
    </el-radio-group>

    <br /><span>method: </span>
    <el-radio-group v-model="f1.method">
      <el-radio-button label="GET">GET</el-radio-button>
      <el-radio-button label="POST">POST</el-radio-button>
    </el-radio-group>

    <div style="margin-left: 50px;" v-show="f1.method === 'POST'">
      <el-radio-group v-model="f1.formData">
        <el-radio-button :label="true">FormData</el-radio-button>
        <el-radio-button :label="false">JSON</el-radio-button>
      </el-radio-group>
    </div>

    <br /><span>text 按钮文案: </span> <el-input v-model="f1.text" /> <br /><span>url 下载链接: </span> <el-input v-model="f1.url" placeholder="必填参数" /> <br /><span
      >name 文件名:
    </span>
    <el-input v-model="f1.name" /> <br /><span>params 请求参数: </span> <el-input v-model="f1.params" /> <br /><span>body 请求体: </span> <el-input v-model="f1.body" /> <br /><span
      >headers 请求体:
    </span>
    <el-input v-model="f1.headers" />
    <br />

    <xv-file-download
      :url="f1.url"
      :name="f1.name"
      :text="f1.text"
      :method="f1.method"
      :formData="f1.formData"
      :credentials="f1.credentials"
      :params="JSON.parse(f1.params || '{}')"
      :data="JSON.parse(f1.data || '{}')"
      :headers="JSON.parse(f1.headers || '{}')"
      size="mini"
      @error="errorHandler"
    />
    <xv-file-download
      type="text"
      :url="f1.url"
      :name="f1.name"
      :text="`${f1.text || '下载'} (text 风格)`"
      :method="f1.method"
      :formData="f1.formData"
      :credentials="f1.credentials"
      :params="JSON.parse(f1.params || '{}')"
      :data="JSON.parse(f1.data || '{}')"
      :headers="JSON.parse(f1.headers || '{}')"
      @error="errorHandler"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      sample: 'f11',
      f1: {},
      f11: {
        name: '这是个图片哦',
        credentials: false,
        url: 'https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1404119009,2611078171&fm=26&gp=0.jpg',
        params: '{}',
        body: '{}',
        headers: '{}',
      },
      f22: {
        url: 'https://tapi-accounting.wyins.net.cn/personalRefund/audit/exportRefundAuditOrder',
        params: JSON.stringify({ startApplicantTime: 1603814400000, endApplicantTime: 1604419199999, refundStatus: 0 }),
        name: '测试-abcdefg.#{ext}',
      },
    };
  },
  created() {
    this.f1 = JSON.parse(JSON.stringify(this.f11));
  },
  methods: {
    errorHandler(err) {
      console.log(err);
      this.$message.error({
        dangerouslyUseHTMLString: true,
        message: `
          <span style="width: 130px;display:inline-block;">err.name:</span>
          ${err.name}<br/><br/>
          <span style="width: 130px;display:inline-block;">err.message:</span>
          ${err.message}<br/><br/>
          <span style="width: 130px;display:inline-block;">err.code(响应码):</span>
          ${err.code}
        `,
      });
    },
  },
};
</script>

<style lang="scss">
.demo-file-download-001 {
  & > span {
    display: inline-block;
    width: 200px;
  }
  & > * {
    display: inline-block;
    max-width: 300px;
    margin-top: 10px;
  }
}
</style>
```

### 自定义参数默认值

`xlucky.FileDownload.props.credentials.default = false`

其他属性默认值的修改方式类似

### Attributes

继承所有 ElementUI 中 `<el-button>` 组件的属性, type 属性默认值更改为 `primary`

| 参数        | 说明                                                                                                   | 类型    | 默认值 |
| ----------- | ------------------------------------------------------------------------------------------------------ | ------- | ------ |
| text        | 按钮文案                                                                                               | String  | '下载' |
| url         | 【必传】下载文件的链接                                                                                 | String  | -      |
| params      | url 参数                                                                                               | Object  | -      |
| name        | 自定义文件名。支持`#{name}.#{ext}`两个变量 (变量值依次从 `Content-Disposition`、`url 自动提取`中取得 ) | String  | -      |
| credentials | 请求是否带 cookie                                                                                      | Boolean | true   |
| method      | 请求方法                                                                                               | String  | 'GET'  |
| data        | 请求体参数(仅 POST 有效)                                                                               | Object  | -      |
| formData    | 是否是 form data 格式                                                                                  | Boolean | false  |
| headers     | 自定义请求头                                                                                           | Object  | -      |

### 事件

| 事件名  | 说明                               | 回调参数                                             |
| ------- | ---------------------------------- | ---------------------------------------------------- |
| success | 下载成功后触发                     | -                                                    |
| error   | 下载失败后触发                     | err, Error 对象, err.code 代表响应码                 |
| end     | 下载完成后触发(成功、失败都会触发) | 【仅失败时存在】err, Error 对象, err.code 代表响应码 |
