<template>
  <div class="bookStore">
    <div class="bookStoreHeader">
      <div class="goBackIcon" @click="backUp">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
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
      <div class="title">书库</div>
    </div>
    <div class="Search">
      <form action="/">
        <van-search
          v-model="value"
          input-align="center"
          placeholder="书名,主播,作者"
          @search="onSearch"
          shape="round"
          background="#fff"
        />
      </form>
    </div>
    <div class="typeList">
      <div class="typeLi">
        <div class="typeTitle">综合排序</div>
        <div
          class="typeItem"
          @click="orderChange(1)"
          :class="{ checked: order == 1 }"
        >
          播放最多
        </div>
        <div
          class="typeItem"
          @click="orderChange(2)"
          :class="{ checked: order == 2 }"
        >
          最近更新
        </div>
      </div>
      <div class="typeLi">
        <div class="typeTitle">题材分类</div>
        <div
          class="typeItem"
          v-for="(item, index) in typeList"
          :key="item.id"
          @click="typeChange(index + 1)"
          :class="{ checked: type == index + 1 }"
        >
          {{ item.name }}
        </div>
      </div>
      <div class="typeLi">
        <div class="typeTitle">播讲形式</div>
        <div
          class="typeItem"
          @click="personChange(1)"
          :class="{ checked: person == 1 }"
        >
          单播
        </div>
        <div
          class="typeItem"
          @click="personChange(2)"
          :class="{ checked: person == 2 }"
        >
          双播
        </div>
        <div
          class="typeItem"
          @click="personChange(3)"
          :class="{ checked: person == 3 }"
        >
          多播
        </div>
      </div>
      <div class="typeLi">
        <div class="typeTitle">连载状态</div>
        <div
          class="typeItem"
          @click="isFinishChange(1)"
          :class="{ checked: isFinish == 1 }"
        >
          连载中
        </div>
        <div
          class="typeItem"
          @click="isFinishChange(2)"
          :class="{ checked: isFinish == 2 }"
        >
          已完结
        </div>
      </div>
      <div class="typeLi">
        <div class="typeTitle">是否免费</div>
        <div
          class="typeItem"
          @click="isVipChange(1)"
          :class="{ checked: isVip == 1 }"
        >
          免费
        </div>
        <div
          class="typeItem"
          @click="isVipChange(2)"
          :class="{ checked: isVip == 2 }"
        >
          付费
        </div>
      </div>
    </div>
    <div class="bookMain">
      <div
        class="bookItem"
        v-for="item in bookList"
        :key="item.audio_id"
        @click="linkBookMain(item.audio_id)"
      >
        <div class="bookImg">
          <img :src="`http://soundoss.anxiashuyuan.com/${item.small_cover}`" />
        </div>
        <div class="bookMain">
          <div class="title">{{ item.audio_title }}</div>
          <div class="text">{{ item.description }}</div>
          <div class="penName">{{ item.pen_name }}</div>
        </div>
      </div>
      <wd-infinite-load
        ref="loadmore"
        @loadmore="loadmore"
        :loading="loading"
        loading-text="~正在加载中~"
        :immediate-check="false"
      ></wd-infinite-load>
      <!-- 懒加载 -->
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import playerPage from "@/components/playPage/playerPage.vue"; //引入播放组件

export default {
  name: "bookStore",
  components: {
    // playerPage, //注册播放组件
  },

  data() {
    return {
      value: "", //与搜索栏双向绑定
      typeList: [],
      bookList: [], //用于遍历的数组
      loading: false, //当前加载状态
      page: 1, //当前处于第几页
      type: 0, //类型
      order: 0, //排序
      person: 0, //人数
      isFinish: 0, //连载状态
      isVip: 0, //是否需要会员
    };
  },

  watch: {
    // bookList() {
    //   //监听从父组件传来的遍历数组的变化
    //   //当遍历的数组发生变化时 说明懒加载已加载完毕 已有新数据添加到遍历的数组 此时即可关闭加载
    //   // console.log("变化了");
    //   this.loading = false;
    // },
  },

  created() {
    this.$axios({
      method: "post",
      url: "api/v2/port/store/getCategoryConfig?place=2",
    })
      .then(({ data }) => {
        console.log("data", data.data);
        this.typeList = data.data;
      })
      .catch((error) => {
        console.log(error);
      });

    this.getBookList();
  },

  // mounted() {
  //   this.getBookList();
  // },

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
    orderChange(i) {
      //排序选择
      if (this.order == i) {
        this.order = 0;
      } else {
        this.order = i;
      }
      this.reload(); //重新加载
    },
    typeChange(i) {
      //题材选择
      if (this.type == i) {
        this.type = 0;
      } else {
        this.type = i;
      }
      this.reload(); //重新加载
    },
    personChange(i) {
      //人数选择
      if (this.person == i) {
        this.person = 0;
      } else {
        this.person = i;
      }
      this.reload(); //重新加载
    },
    isFinishChange(i) {
      //是否已完结选择
      if (this.isFinish == i) {
        this.isFinish = 0;
      } else {
        this.isFinish = i;
      }
      this.reload(); //重新加载
    },
    isVipChange(i) {
      //是否需要会员选择
      if (this.isVip == i) {
        this.isVip = 0;
      } else {
        this.isVip = i;
      }
      this.reload(); //重新加载
    },
    reload() {
      //重新加载
      (this.bookList = []), this.getBookList(); //清空遍历数组 并重新开始请求
    },

    loadmore() {
      //加载更多
      this.loading = true;
      this.page++;

      this.getBookList();

      //请求事件
    },
    backUp() {
      //返回上一级事件
      //回到上一级
      console.log("即将回到上一级");
      this.$router.go(-1); //回到上一个历史记录
      this.$store.commit("setNavIndex", 1); //调用store的commit方法 直接调用mutations对state的数据进行修改 将app的nav隐藏
    },
    onSearch(val) {
      //输入事件
      // console.log("输入了", val);
      this.value = val;
      this.reload(); //重新加载
    },
    getBookList() {
      //获取资源
      this.$axios({
        method: "post",
        url: `api/v2/port/store/index?keywords${
          this.value == "" ? "" : `=${this.value}`
        }&order=${this.order}&category_id=${this.type}&anchor_form=${
          this.person
        }&is_finish=${this.isFinish}&is_vip=${this.isVip}&page=${
          this.page
        }&rows=10&channel=0`,
      })
        .then(({ data }) => {
          console.log("data", data);
          this.bookList = [...this.bookList, ...data.data.list]; //连接数组
          this.$nextTick(() => {
            this.loading = false;
          });
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped lang="scss">
.bookStore {
  width: 100vw;
  height: 100vh;
  // background-color: red;
  background-color: #fff;

  .bookStoreHeader {
    width: 100%;
    height: 8vmax;
    position: fixed;
    background: #fff;
    top: 0;
    left: 0;
    z-index: 1;

    .goBackIcon {
      width: 8vmax;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #333;
    }
    .title {
      width: 8vmax;
      height: 8vmax;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: 0;
      left: calc(50% - 3vmax);
      font-size: 18px;
      font-weight: bold;
    }
  }

  .Search {
    width: 100%;
    height: 6vmax;
    position: fixed;
    background: #ddd;
    top: 8vmax;
    left: 0;
    z-index: 1;
  }

  .typeList {
    width: 100%;
    height: 24vmax;
    // background-color: aqua;
    margin-top: 15vmax;
    padding: 0 4%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    .typeLi {
      display: flex;
      align-items: center;
      width: 100%;

      .typeTitle {
        margin-right: 2vmin;
        font-size: 14px;
        font-weight: bold;
      }

      .typeItem {
        margin-right: 3vmin;
        font-size: 1vw;
        height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;

        &.checked {
          color: rgb(45, 167, 249);
        }
      }
    }
  }

  .bookMain {
    width: 100%;
    padding: 0 4%;

    .bookItem {
      width: 90%;

      // background-color: #000;
      height: 12vmax;
      margin: 2vmax 5%;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;

      .bookImg {
        width: 12vmax;
        height: 100%;
        // background-color: aqua;
        border-radius: 6px;
        overflow: hidden;

        img {
          width: 100%;
          height: 100%;
          display: block;
        }
      }

      .bookMain {
        width: calc(100% - 12vmax);
        height: 100%;
        // background-color: blue;
        padding-left: 2vmin;

        .title {
          font-size: 16px;
          font-weight: 600;
          color: #000;
          margin-bottom: 1.2vmax;
        }

        .text {
          font-size: 18px;
          transform: scale(0.5) translate(-50%);
          font-weight: 200;
          color: #666;
          margin-bottom: 2vmax;
          white-space: nowrap;
        }

        .penName {
          font-size: 14px;
          font-weight: 300;
          color: #666;
        }
      }
    }
  }
}
</style>
