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
            target: 'PagingDevice',
            dataTotal: 5000,
            pageAmountList: [10, 20, 30, 40, 50],
            curPage: pageNo,
            pageSize: '9',
            pageAmount: pageSize,
            getPage: function (index) {
                console.log(index)
                pageNo = index
                aaa()
            },
            getPageAmount: function (index) {
                console.log(index)
                pageSize = index;
                pageNo = 1
                aaa()
            }
        })
	```

