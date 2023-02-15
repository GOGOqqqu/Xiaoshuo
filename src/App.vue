<template>
  <div id="app">
    <audio
      :src="`http://soundoss.anxiashuyuan.com/${songSrc}`"
      ref="audio"
      autoplay
      @canplay="canplay"
    ></audio>

    <transition :name="transitionName">
      <!-- 让路由切换时出现动画 -->
      <keep-alive>
        <router-view></router-view>
        <!-- 保持路由活性 -->
      </keep-alive>
    </transition>

    <van-popup
      v-model="isShowTopPage"
      position="right"
      duration="0.2"
      overlay
      :overlay-style="{ opacity: 0.8 }"
      lock-scroll
    >
      <topPage />
    </van-popup>

    <van-popup
      v-model="isShowPlayPage"
      position="right"
      duration="0.2"
      overlay
      :overlay-style="{ opacity: 0.8 }"
      lock-scroll
    >
      <playPage />
    </van-popup>

    <van-tabbar
      v-model="active"
      :z-index="App.navIndex"
      v-if="App.navIndex > 0"
      route
      @change="onChange"
    >
      <van-tabbar-item
        name="home"
        :to="{
          name: 'HomePage',
        }"
        icon="wap-home-o"
      >
        首页
      </van-tabbar-item>

      <van-tabbar-item
        name="play"
        :to="{
          name: 'playPage',
        }"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          class="bi bi-music-note-list"
          viewBox="0 0 16 16"
        >
          <path
            d="M12 13c0 1.105-1.12 2-2.5 2S7 14.105 7 13s1.12-2 2.5-2 2.5.895 2.5 2z"
          />
          <path fill-rule="evenodd" d="M12 3v10h-1V3h1z" />
          <path
            d="M11 2.82a1 1 0 0 1 .804-.98l3-.6A1 1 0 0 1 16 2.22V4l-5 1V2.82z"
          />
          <path
            fill-rule="evenodd"
            d="M0 11.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 .5 7H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 .5 3H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5z"
          /></svg
      ></van-tabbar-item>

      <van-tabbar-item
        name="my"
        :to="{
          name: 'my',
        }"
        icon="contact"
        >我的</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script>
import playPage from "@/views/playPage.vue"; //引入播放组件
import topPage from "@/views/topPage.vue"; //引入排行榜组件

import { mapState } from "vuex"; //引入vuex自带的语法糖
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      active: "home", //当前选择的标签栏

      transitionName: "", //当前路由切换进行的动画
    };
  },

  watch: {
    //使用watch 监听$router的变化
    $route(to, from) {
      // meta.index在路由配置中设置 用于判断此时路由的切换属于是同级切换还是跨级切换
      //如果to索引大于from索引,判断为前进状态,反之则为后退状态
      if (to.meta.index > from.meta.index) {
        //设置动画名称
        // console.log("路由前进");
        this.transitionName = "slide-left"; //前进动画
      } else if (to.meta.index == from.meta.index) {
        return; //同级路由不做动画
      } else {
        // console.log("路由后退");

        this.transitionName = "slide-right"; //后退动画
      }
    },

    playState() {
      // 监听计算属性 播放状态的变化
      if (this.playState) {
        console.log("播放");
        this.getTimeCallback();
        this.$refs.audio.play();
      } else {
        console.log("暂停");

        this.$refs.audio.pause();
        clearInterval(this.getTimeTimer);
      }
    },

    playbackRate() {
      //监听计算属性 播放速度的变化
      this.$refs.audio.playbackRate = this.playbackRate;
    },

    songSrc() {
      //监听音频源路径的变化
      // this.$refs.audio.load();
      // this.$refs.audio.oncanplay = () => {
      //   console.log("this.$refs.audio.duration", this.$refs.audio.duration);
      //   this.$refs.audio.play();
      // };
    },
  },

  computed: {
    ...mapState(["App"]), //使用计算属性中的vuex语法糖 直接获得state中存储的对象App 存储着关于app页面的数据
    ...mapState("playPage", [
      "songSrc",
      "playState",
      "duration",
      "playTime",
      "playbackRate",
    ]), //使用计算属性中的vuex语法糖 直接获得state中存储的对象App 存储着关于app页面的数据

    // ...mapState("topPage", ["isShowTopPage"]),

    isShowTopPage: {
      //防止报警报  由于上面用到了v-model对标一个计算属性 写一个空的set可防止报错
      get() {
        return this.$store.state.topPage.isShowTopPage;
      },
      set() {},
    },

    isShowPlayPage: {
      //防止报警报 由于上面用到了v-model对标一个计算属性 写一个空的set可防止报错
      get() {
        return this.$store.state.playPage.isShowPlayPage;
      },
      set() {},
    },
  },

  methods: {
    onChange(name) {
      if (name == "play") {
        console.log("进入播放器");
        this.$store.commit("setNavIndex", -1); //调用store的commit方法 直接调用mutations对state的数据进行修改 将app的nav隐藏
        // this.SHOW_AND_HIDE_PLAY_PAGE();
      }
    },

    canplay() {
      console.log("[ 音乐准备好了，开始记录时间变化 ] >");
      // 获取 MP3 的总长度 (秒)

      this.SET_SONG_duration(this.$refs.audio.duration);
      // console.log("this.$refs.audio.duration", this.$refs.audio.duration);

      this.getTimeCallback();
      this.PLAY();
    },

    // 获取 audio 实时时间
    getTimeCallback() {
      // 判断 该定时器 是否已经启动
      if (this.getTimeTimer) {
        clearInterval(this.getTimeTimer);
      }
      // 启动定时器
      this.getTimeTimer = setInterval(() => {
        this.SET_SONG_PLAYTIME(this.$refs.audio.currentTime);
        // 判断时间是否达到结束时间
        if (this.playTime >= this.duration) {
          clearInterval(this.getTimeTimer);

          //回到最开始状态 并暂停
          this.SET_SONG_PLAYTIME(0);
          this.$refs.audio.pause();
        }

        // 事件总线 发送 环形进度条百分比
        // this.$bus.$emit(
        //   "circleData",
        //   (this.currentTime / this.totalTime) * 100
        // );
      }, 500);
    },

    setCurrentTime(seconds) {
      this.$refs.audio.currentTime = seconds;
    },

    ...mapMutations("topPage", ["showTopPage"]),
    ...mapMutations("playPage", [
      "SHOW_AND_HIDE_PLAY_PAGE",
      "SET_SONG_duration",
      "SET_SONG_PLAYTIME",
      "PLAY",
      "PAUSE",
    ]),

    // linkTopPage() {
    //   //进入到排行榜
    //   this.$store.commit("setNavIndex", -1); //调用store的commit方法 直接调用mutations对state的数据进行修改 将app的nav隐藏
    //   this.showTopPage();
    // },
  },

  mounted() {
    this.$bus.$on("CurrentTime", (time) => {
      //设置全局事件总线 用于控制播放进度
      this.setCurrentTime(time);
    });

    // this.$axios({
    //   method: "get",
    //   url: "https://img01.yimishiji.com/v1/img/0b822edb28b02d882ce09a79c7066d24.webp",
    // })
    //   .then(({ data }) => {
    //     console.log("商城", data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  },

  components: {
    playPage,
    topPage,
  },
};
</script>

<style lang="scss">
#app {
  .van-tabbar--fixed {
    height: 6vh;
    border-top: 1px solid rgba(100, 100, 100, 0.1);
  }

  .van-tabbar-item__icon {
    font-size: 3vh;
  }

  .van-tabbar-item__text {
    font-size: 2vh;
  }

  .mask {
    // width: 100vmin;
    // height: 100vmax;
    background: yellowgreen;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
  }

  .slide-right-enter-active,
  .slide-right-leave-active,
  .slide-left-enter-active,
  .slide-left-leave-active {
    //路由切换时 前进 与 后退 的动画
    will-change: transform;
    transition: all 250ms;
    position: absolute;
  }
  .slide-right-enter {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
  .slide-right-leave-active {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
  .slide-left-enter {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
  .slide-left-leave-active {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
}
</style>
