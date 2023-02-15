<template>
  <div class="HomePage">
    <div class="insideMask"></div>
    <van-tabs
      v-model="activeName"
      color="#fff"
      background="transparent"
      line-width="40px"
      animated
      swipeable
    >
      <template #nav-right>
        <div class="Search" @click="linkSearchPage">
          <img src="@/assets/img/home/search_main.png" />
        </div>
        <div class="BookStore" @click="linkBookStore">
          <img src="@/assets/img/home/tuijianshukuyemian.png" />
        </div>
      </template>
      <van-tab name="Recommend">
        <template #title>
          <div class="tabs" :class="{ checked: activeName == 'Recommend' }">
            推荐
          </div>
        </template>
        <div class="homeMain">
          <homeHeader :swipe="swipe" />
          <keep-alive>
            <homeTypeSelete />
          </keep-alive>
          <keep-alive>
            <homeBookMain />
          </keep-alive>
        </div>
      </van-tab>
      <van-tab name="VIP">
        <template #title>
          <div class="tabs" :class="{ checked: activeName == 'VIP' }">VIP</div>
        </template>
        <div class="homeVip">
          <VipView />
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
// @ is an alias to /src
import homeHeader from "@/components/homePage/homeHeader.vue";
import homeTypeSelete from "@/components/homePage/homeTypeSelete.vue";
import homeBookMain from "@/components/homePage/homeBookMain.vue";
import VipView from "@/views/VipView.vue";

// import homeVip from "@/components/homePage/homeVip.vue";

export default {
  name: "HomePage",
  components: {
    homeHeader,
    homeTypeSelete,
    homeBookMain,
    VipView,
    // homeVip,
  },

  data() {
    return {
      activeName: "Recommend", //当前显示的界面
      swipe: [], //遍历轮播图的数组
      homeTop: 0, //当前页面 在切换路由之前的滚动高度 用来记忆该组件的滑动距离
    };
  },

  methods: {
    linkBookStore() {
      console.log("进入书库界面");
      this.$router.push("/bookStore"); //跳转到书库页面
      this.$store.commit("setNavIndex", -1); //调用store的commit方法 直接调用mutations对state的数据进行修改 将app的nav隐藏
    },

    linkSearchPage() {
      console.log("进入搜索界面");
      this.$router.push("/searchPage"); //跳转到书库页面
      this.$store.commit("setNavIndex", -1); //调用store的commit方法 直接调用mutations对state的数据进行修改 将app的nav隐藏
    },
    swipeChange(i) {
      this.$refs.swipe.swipeTo(i);
    },

    tabsClick(name) {
      if (name == "Recommend") {
        this.swipeChange(0);
      } else {
        this.swipeChange(1);
      }
    },

    // getMain() {
    //   this.$axios({
    //     method: "post",
    //     url: "api/v2/port/chart/index?channel=1",
    //   })
    //     .then(({ data }) => {
    //       console.log("data", data.data[0].data);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // },

    getSwipe() {
      this.$axios({
        method: "post",
        url: "api/v2/port/banner/index",
        params: {
          channel: 1,
        },
      })
        .then(({ data }) => {
          console.log("getSwipe", data.data);
          this.swipe = data.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },

  created() {
    // this.getMain();
    // console.log("已加载");
    this.getSwipe();
  },

  mounted() {},
};
</script>

<style lang="scss">
.HomePage {
  width: 100vmin;
  height: 94vh;
  // background-color: #000;
  // color: transparent;
  position: relative;

  .headerIcon {
    position: absolute;
    right: 0;
    top: 0;
  }

  .insideMask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vmin;
    height: 8vmax;
    background-color: #393d49;
    z-index: -1; //保证底部背景在最底层
    // border-radius: 0 0 10% 10%; //只有左下角和右下角的圆角
  }

  .van-tabs {
    width: 100%;
    padding: 2vmax 0 0;
    // background-color: #393d49;
    position: relative;

    .Search {
      color: #fff;
      position: absolute;
      width: 8vmin;
      height: 3vh;
      font-size: 2vmin;
      display: flex;
      align-items: center;
      justify-content: center;
      right: -45vmin;
      img {
        width: 3vh;
        height: 3vh;
        display: block;
      }
    }

    .BookStore {
      position: absolute;
      width: 8vmin;
      height: 3vh;
      font-size: 2vmin;
      display: flex;
      align-items: center;
      justify-content: center;
      right: -58vmin;
      img {
        width: 3vh;
        height: 3vh;
        display: block;
      }
    }

    .van-tabs__wrap {
      height: 3vmax;
      padding-left: 6vmin;
      width: 40vmin;
      margin-bottom: 2vmax;
      overflow: visible;
    }
    .van-tabs__content--animated {
      // overflow: auto;
      height: 87vmax;

      .van-tab__pane-wrapper {
        overflow: auto;
      }
    }
  }

  .tabs {
    width: 10vmin;

    font-size: 15px;
    color: rgb(225, 223, 223);
    display: flex;
    align-items: center;
    justify-content: center;

    &.checked {
      font-size: 18px;
      color: #fff;
    }
  }

  .homeMain {
    width: 100vmin;
    height: 87vmax;
    // background-color: #000;
  }

  .homeVip {
    width: 100vmin;
    height: 87vmax;
    // background-color: yellow;
  }
}
</style>
