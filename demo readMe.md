## --------------------------首页-----------------------------

首页轮播

``` js
this.$axios({
  method: 'post',
  url: 'http://version.anxiashuyuan.com/v2/port/banner/index',
  params: {
    channel:1
  },
  }).then(({data})=>{
    console.log('data',data)
  })
  .catch((error)=>{
    console.log(error);
  });
```

首页类型选择列表

```
this.$axios({
          method: 'post',
          url: 'http://version.anxiashuyuan.com/v2/port/store/getCategoryConfig',
          params: {
            place:1
          },
          }).then(({data})=>{
            console.log('data',data)
          })
          .catch((error)=>{
            console.log(error);
          });
```



首页轮播+vip

```
this.$axios({
          method: 'post',
          url: 'http://version.anxiashuyuan.com/v2/port/chart/index',
          params: {
            channel:2
          },
          }).then(({data})=>{
            console.log('data',data)
          })
          .catch((error)=>{
            console.log(error);
          });
```



猜你喜欢

```
this.$axios({
          method: 'post',
          url: 'http://version.anxiashuyuan.com/v2/port/index/guessYouLike',
          params: {
            page:1   //请求的页数
            rows:10    // 一次请求的量
          },
          }).then(({data})=>{
            console.log('data',data)
          })
          .catch((error)=>{
            console.log(error);
          });
```

主页内容

```
this.$axios({
          method: 'post',
          url: 'http://version.anxiashuyuan.com/v2/port/chart/index?channel=1',
          }).then(({data})=>{
            console.log('data',data)
          })
          .catch((error)=>{
            console.log(error);
          });
```



## --------------------------详情页-----------------------------

详情页 推荐栏

```
this.$axios({
          method: 'post',
          url: 'http://version.anxiashuyuan.com/v2/port/audio/similar',
          params: {
            audio_id:id   //作品的id
          },
          }).then(({data})=>{
            console.log('data',data)
          })
          .catch((error)=>{
            console.log(error);
          });
```

详情页 节目部分

```
this.$axios({
          method: 'post',
          url: 'http://version.anxiashuyuan.com/v2/port/audio/directory',
          params: {
            audio_id:id   //作品的id
            page:1    // 第几页 
            rows:50   // 一次性获取几个 可懒加载
          },
          }).then(({data})=>{
            console.log('data',data)
          })
          .catch((error)=>{
            console.log(error);
          });
```

详情页 节目详情部分

```
this.$axios({
          method: 'post',
          url: 'http://version.anxiashuyuan.com/v2/port/audio/detail',
          params: {
            audio_id:id   //作品的id
          },
          }).then(({data})=>{
            console.log('data',data)
          })
          .catch((error)=>{
            console.log(error);
          });
```

详情页 评论获取

```
this.$axios({
          method: 'post',
          url: 'http://version.anxiashuyuan.com/v2/port/comment/comments',
          params: {
            audio_id:id   //作品的id、
            page:1    // 第几页 
            rows:10   // 一次性获取几个 可懒加载
          },
          }).then(({data})=>{
            console.log('data',data)
          })
          .catch((error)=>{
            console.log(error);
          });
```

## --------------------------播放界面-----------------------------

播放详情

```
this.$axios({
          method: 'post',
          url: 'http://version.anxiashuyuan.com/v2/port/chapter/sound?audio_id=${作品的id}',
          }).then(({data})=>{
            console.log('data',data)
          })
          .catch((error)=>{
            console.log(error);
          });
```

播放评论区

```
this.$axios({
          method: 'post',
          url: 'http://version.anxiashuyuan.com/v2/port/comment/comments',
          params: {
            audio_id:id   //作品的id、
            page:1    // 第几页 
            rows:10   // 一次性获取几个 可懒加载
          },
          }).then(({data})=>{
            console.log('data',data)
          })
          .catch((error)=>{
            console.log(error);
          });
```

播放 列表

```
this.$axios({
          method: 'post',
          url: 'http://version.anxiashuyuan.com/v2/port/audio/directory?audio_id=${作品id}&page=${页数}&rows=50',
          }).then(({data})=>{
            console.log('data',data)
          })
          .catch((error)=>{
            console.log(error);
          });
```

播放 推荐栏

```
this.$axios({
          method: 'post',
          url: 'http://version.anxiashuyuan.com/v2/port/index/ads?place=4',
          }).then(({data})=>{
            console.log('data',data)
          })
          .catch((error)=>{
            console.log(error);
          });
```

-------------------------------------------排行榜-------------------------------------------

热销

```
this.$axios({
          method: 'post',
          url: 'http://version.anxiashuyuan.com/v2/port/rank/index?type=2&cycle=0',
          }).then(({data})=>{
            console.log('data',data)
          })
          .catch((error)=>{
            console.log(error);
          });
```

新品：

```
this.$axios({
          method: 'post',
          url: 'http://version.anxiashuyuan.com/v2/port/rank/index?type=1&cycle=0',
          }).then(({data})=>{
            console.log('data',data)
          })
          .catch((error)=>{
            console.log(error);
          });
```

人气：

```
this.$axios({
          method: 'post',
          url: 'http://version.anxiashuyuan.com/v2/port/rank/index?type=3&cycle=0',
          }).then(({data})=>{
            console.log('data',data)
          })
          .catch((error)=>{
            console.log(error);
          });
```

完结：

```
this.$axios({
          method: 'post',
          url: 'http://version.anxiashuyuan.com/v2/port/rank/index?type=4&cycle=0',
          }).then(({data})=>{
            console.log('data',data)
          })
          .catch((error)=>{
            console.log(error);
          });
```

-------------------------------------------搜索页-------------------------------------------

类型分类

```
this.$axios({
          method: 'post',
          url: 'http://version.anxiashuyuan.com/v2/port/store/getCategoryConfig?place=2',
          }).then(({data})=>{
            console.log('data',data.data)
          })
          .catch((error)=>{
            console.log(error);
          });
```

-----------------------------------------------------------------------------------------

听书详情页：

```
书本详情
this.$axios({
          method: 'post',
          url: 'http://version.anxiashuyuan.com/v2/port/audio/details',
          params: {
            audio_id:id   //作品的id、
          },
          }).then(({data})=>{
            console.log('data',data.data)
            //anchor_name  说书人
            //audio_title  书名
            //star  评分
            //description  书简介
            //cp_name  作品数字版权  (评论页)
            //cover  简略图
          })
          .catch((error)=>{
            console.log(error);
          });
总集:
this.$axios({
          method: 'post',
          url: 'http://version.anxiashuyuan.com/v2/port/audio/directory?audio_id=264&page=1&rows=50',
          }).then(({data})=>{
            console.log('data',data.data)
			//data.data.extra.count 最新集
			//data.data.list  总集
          })
          .catch((error)=>{
            console.log(error);
          });
          
相似:
this.$axios({
          method: 'post',
          url: 'http://version.anxiashuyuan.com/v2/port/audio/similar',
          params: {
            audio_id:id   //作品的id、
          },
          }).then(({data})=>{
            console.log('data',data.data)
     
          })
          .catch((error)=>{
            console.log(error);
          });
          
评论区:
this.$axios({
          method: 'post',
          url: 'http://version.anxiashuyuan.com/v2/port/comment/comments?audio_id=264',
          }).then(({data})=>{
            console.log('data',data.data)
     
          })
          .catch((error)=>{
            console.log(error);
          });
```

