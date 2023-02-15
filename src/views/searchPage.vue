<template>
  <div class="searchPage">
    <div class="searchPageHeader">
      <van-search
        v-model="text"
        shape="round"
        background="#fff"
        show-action
        action-text="搜索"
        placeholder="书名、主播、作者"
        @search="onSearch"
      >
        <template #left>
          <div @click="goBack" class="goBack">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-chevron-left"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
              />
            </svg>
          </div>
        </template>
        <template #action>
          <div @click="onCancel" class="onSearch">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path
                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
              />
            </svg>
          </div>
        </template>
      </van-search>
    </div>
    <div class="searchPageMain">
      <div class="searchHistory" v-if="!isShowSearchMain">
        <history
          :searchList="searchList"
          @clearSearchHistory="clearSearchHistory"
        />
      </div>
      <div class="Main" v-else>
        <div
          class="bookItem"
          v-for="i in list"
          :key="i.audio_title"
          @click="linkBookMain(i.audio_id)"
        >
          <div class="bookImg">
            <img :src="`http://soundoss.anxiashuyuan.com/${i.small_cover}`" />
          </div>
          <div class="bookMain">
            <div class="bookTitle van-ellipsis">{{ i.audio_title }}</div>
            <div class="bookText van-ellipsis">{{ i.description }}</div>
            <div class="bookPenName van-ellipsis">{{ i.pen_name }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import history from "@/components/searchPage/history.vue"; //引入历史记录组件

export default {
  name: "searchPage",
  methods: {
    linkBookMain(id) {
      //跳转至书本详情
      this.$store.commit("setNavIndex", -1); //调用store的commit方法 直接调用mutations对state的数据进行修改 将app的nav隐藏

      this.$router.push({
        name: "bookMain",
        query: { id: id },
        // params: { id: id },
      });
    },
    onSearch(val) {
      //回车触发
      console.log("输入了", val);
      if (this.text == "") {
        return;
      }
      this.searchStart();
    },
    onCancel() {
      //点击搜索按钮触发
      console.log("点击了搜索", this.text);
      if (this.text == "") {
        return;
      }
      this.searchStart();
    },
    searchStart() {
      //搜索事件
      //开始搜索
      this.isShowSearchMain = true; //让历史记录隐藏 显示出搜索内容
      this.list = []; //清空遍历内容的数组
      this.sendData(); //请求数据
      this.searchList = [this.text, ...this.searchList];
      // console.log("this.searchList", this.searchList);
    },

    sendData() {
      //请求数据
      this.$axios({
        method: "post",
        url: `api/v2/port/index/searchResult`,
        query: {
          keywords: this.text, //作品的id、
          user_id: 6619,
          page: 1, // 第几页
          rows: 10, // 一次性获取几个 可懒加载
        },
      })

        .then(({ data }) => {
          console.log("data", data);
          this.list = data.data.list;
          this.text = ""; //清空搜索栏中的文字
        })
        .catch((error) => {
          console.log(error);
        });
    },

    clearSearchHistory() {
      //清除历史记录 包括遍历历史记录的数组 以及localStorage中的数据
      this.searchList = []; //清空数组
      localStorage.searchLocal = []; //清空本地数据
    },

    // 添加这一行 可以保证组件不被keep-alive进行缓存
    // deactivated() {
    //   this.$destroy();
    // },

    goBack() {
      //返回上一级事件
      //回到上一级
      console.log("即将回到上一级");
      this.$router.go(-1); //回到上一个历史记录
      this.$store.commit("setNavIndex", 1); //调用store的commit方法 直接调用mutations对state的数据进行修改 将app的nav隐藏
      this.isShowSearchMain = false;
    },
  },

  activated() {
    //路由激活生命周期
    let searchLocal = localStorage.searchLocal
      ? JSON.parse(localStorage.searchLocal)
      : []; //获取存在本地中的历史记录 如果存在 则返回 不存在则返回空数组
    this.searchList = searchLocal; //把拿出来的历史记录 放到遍历历史记录的数组里
  },

  beforeRouteLeave(to, from, next) {
    //组件内路由守卫 路由跳转之前触发
    localStorage.searchLocal = JSON.stringify(this.searchList);
    //在路由跳转之前 把所有的历史记录都存储到localStorage中
    next(); //放行
  },

  data() {
    return {
      text: "", //与搜索栏双向绑定的数据
      isShowSearchMain: false,
      searchList: [], //搜索历史
      list: [], //遍历数据用的数组
    };
  },
  components: {
    history,
  },
};
</script>

<style lang="scss" scoped>
.searchPage {
  width: 100vw;
  height: 100vh;
  // background-color: aqua;
  position: relative;

  .searchPageHeader {
    width: 100%;
    height: 10%;
    // background-color: chartreuse;
    position: fixed;
    top: 0;
    left: 0;

    .van-search {
      height: 100%;
    }

    .goBack,
    .onSearch {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .searchPageMain {
    position: absolute;
    top: 10%;
    left: 0;
    width: 100%;
    height: 90%;
    // background-color: chartreuse;
    overflow-x: hidden;
    overflow-y: auto;

    .searchHistory {
      width: 100%;
      height: 100%;
      // background-color: brown;
    }

    .Main {
      width: 100%;
      // height: 3000px;

      .bookItem {
        width: 96%;
        height: 12vmax;
        margin: 2vmax 2%;
        padding: 1vmax 0;
        // background-color: cyan;
        border-top: 1px solid rgba(0, 0, 0, 0.03);
        border-bottom: 1px solid rgba(0, 0, 0, 0.03);
        display: flex;
        align-items: center;
        justify-content: center;

        &:last-child {
          margin-bottom: 9vmax;
        }

        .bookImg {
          width: 12vmax;
          height: 12vmax;
          img {
            width: 100%;
            height: 100%;
            display: block;
            border-radius: 8px;
          }
        }

        .bookMain {
          width: calc(100% - 12vmax);
          height: 100%;
          padding-left: 2vmin;

          .bookTitle {
            font-size: 18px;
            font-weight: bold;
          }

          .bookText {
            font-size: 10px;
            margin-top: 1vmax;
          }

          .bookPenName {
            font-size: 14px;
            margin-top: 1vmax;
          }
        }
      }
    }
  }
}
</style>
