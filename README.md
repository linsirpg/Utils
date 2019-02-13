# Utils  常用的小插件

# 1.Paginat 分页插件
  a. 引入css文件夹下面的 iconfont.css 与 paginat.css 两个css文件
  
  b. 引入js文件夹下面的 index.js文件
  
  c.具体使用
  

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
