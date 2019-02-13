# Utils  常用的小插件

# 1.Paginat 分页插件
  a. 引入css文件夹下面的 iconfont.css 与 paginat.css 两个css文件
  
  b. 引入js文件夹下面的 index.js文件
  
  c.具体使用
  
    ```html
    <vue-ueditor-wrap v-model="msg"></vue-ueditor-wrap>
    ```

	```js
	  data () {
	    return {
	      msg: '<h2><img src="http://img.baidu.com/hi/jx2/j_0003.gif"/>Vue + UEditor + v-model双向绑定</h2>'
	    }
	  },
	```
> Vue + UEditor + v-model 双向绑定。之所以有这个 `repo` 的原因是：<br>&emsp;1、UEditor 依然是国内使用频率极高的所见即所得编辑器而 Vue 又有着广泛的使用，所以将两者结合使用，是很多 Vue 项目开发者的切实需求。<br>&emsp;2、目前没有发现满足这种需求，而使用又很方便的 `repo`、有的可能也只是简单的暴露一个 `UEditor` 的实例，仍然需要开发者手动去调用 `getContent`，`setContent`，而通过 `v-model` 绑定数据也是很多人期待的方式。于是自己在写公司项目时就手动撸了一个，周末整理一下分享出来，希望能帮助到有同样需求的小伙伴。

<img src="https://github.com/HaoChuan9421/vue-ueditor-wrap/raw/master/assets/images/demo.gif" width="400" />

[点击预览](https://haochuan9421.github.io/vue-ueditor-wrap-demo/)&emsp;[加入聊天室](https://gitter.im/haochuan9421/vue-ueditor-wrap/)

## Installation

```bash
npm i vue-ueditor-wrap
# 或者
yarn add vue-ueditor-wrap
```

## Quick Start（基于 vue-cli 2.x 的[完整DEMO](https://github.com/HaoChuan9421/vue-ueditor-wrap-demo)）

1. ~~下载 [UEditor](http://ueditor.baidu.com/website/download.html)~~

    > 下载[最新编译的 UEditor](https://github.com/HaoChuan9421/vue-ueditor-wrap/tree/master/assets/downloads)。官网目前最新的版本是`1.4.3.3`，存在诸多 BUG，例如 [Issue1](https://github.com/HaoChuan9421/vue-ueditor-wrap/issues/1) 和 [Issue8](https://github.com/HaoChuan9421/vue-ueditor-wrap/issues/8)，且官方不再积极维护。为了世界的和平，针对一些常见 BUG，我进行了[修复](https://github.com/HaoChuan9421/ueditor/commits/dev-1.4.3.3)，并把编译好的文件放在了本仓库的 `assets/downloads` 目录下，你可以放心[下载](https://github.com/HaoChuan9421/vue-ueditor-wrap/tree/master/assets/downloads)，当然你也可以自己 `clone` [官方源码](https://github.com/fex-team/ueditor)并[编译](http://fex.baidu.com/ueditor/#dev-bale_width_grunt)。
    
    <img src="https://github.com/HaoChuan9421/vue-ueditor-wrap/raw/master/assets/images/downloads.png" width="200">

    将下载的压缩包解压并重命名为 `UEditor` （只需要选择一个你需要的版本,比如 `utf8-php`）,放入你项目的 `static` 目录下
    
    <img src="https://github.com/HaoChuan9421/vue-ueditor-wrap/raw/master/assets/images/file.png" width="200">

    > 如果你使用的是 [vue-cli 3.x](https://cli.vuejs.org/zh/guide/)，可以把 `UEditor` 文件夹放入你项目的 `public` 目录下。

2. 引入`VueUeditorWrap`组件

	```js
	import VueUeditorWrap from 'vue-ueditor-wrap' // ES6 Module
	// 或者
	const VueUeditorWrap = require('vue-ueditor-wrap') // CommonJS
	```

	> 你也可以通过直接引入 `CDN` 链接的方式来使用，它会暴露一个全局的 `VueUeditorWrap` 变量（具体如何使用你可以阅读我的这篇[博客](https://juejin.im/post/5b97b84ee51d450e6c7492f6)或参考这个[仓库](https://github.com/HaoChuan9421/vue-optimization/tree/cdn)）。

	```html
	<script src="https://cdn.jsdelivr.net/npm/vue-ueditor-wrap/lib/vue-ueditor-wrap.min.js"></script>
	```

3. 注册组件

	```js
	  components: {
	    VueUeditorWrap
	  },

	// 或者在 main.js 里将它注册为全局组件
	Vue.component('vue-ueditor-wrap', VueUeditorWrap)
	```

4. `v-model`绑定数据

    ```html
    <vue-ueditor-wrap v-model="msg"></vue-ueditor-wrap>
    ```

	```js
	  data () {
	    return {
	      msg: '<h2><img src="http://img.baidu.com/hi/jx2/j_0003.gif"/>Vue + UEditor + v-model双向绑定</h2>'
	    }
	  },
	```
