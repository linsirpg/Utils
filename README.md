# Utils  常用的小插件

# Paginat 分页插件
  1. 引入css文件夹下面的 iconfont.css 与 paginat.css 两个css文件
  
  2. 引入js文件夹下面的 index.js文件
  
  
 
4. `v-model`具体使用

    ```html
     <div id='Pagings'></div>
    ```

	```js
	 new Paginat({
            target: 'Pagings', // 作用对象 通过id绑定（仅支持id）
            dataTotal: 5000,   // 数据总条数
            pageAmountList: [10, 20, 30, 40, 50], // 每页条数列表
            curPage: pageNo, //当前页
            pageSize: '7', 
            pageAmount: pageSize, //每页多少条
            getPage: function (index) {
		//返回当前的页码
            },
            getPageAmount: function (index) {
               返回当前每页的条数
            }
        })
	```

