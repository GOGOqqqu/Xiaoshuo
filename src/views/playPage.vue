<template>
  <div class="playPage">
    <div
      v-if="imgSrc != ''"
      class="playPageMask"
      :style="{
        background: `url('${imgSrc}') center center`,
      }"
    ></div>
    <div class="playPageMask Default" v-else></div>
    <div class="header">
      <div class="title">
        <div class="backUp" @click="backUp">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            class="bi bi-chevron-down"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
            />
          </svg>
        </div>
        <div class="text">
          {{ title == "" ? "~ 今天听点什么呢 ~" : title }}
        </div>
      </div>
      <div class="Recommend">
        <div class="title">
          <div class="img">
            <img src="@/assets/img/play-s.png" />
          </div>
          <div class="text">
            {{ Recommend.name }}
          </div>
        </div>
        <div class="button">
          点击收听
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            fill="currentColor"
            class="bi bi-chevron-right"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
            />
          </svg>
        </div>
      </div>
    </div>
    <div class="main">
      <playerPage />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import playerPage from "@/components/playPage/playerPage.vue"; //引入播放组件
import { mapMutations } from "vuex";
import { mapState } from "vuex"; //引入vuex自带的语法糖

export default {
  name: "playPage",
  components: {
    playerPage, //注册播放组件
  },

  data() {
    return {
      Recommend: "",
    };
  },

  computed: {
    ...mapState("playPage", [
      "songSrc",
      "playState",
      "duration",
      "playTime",
      "title",
      "imgSrc",
    ]), //使用计算属性中的vuex语法糖 直接获得state中存储的对象App 存储着关于app页面的数据
  },

  created() {
    this.$axios({
      method: "post",
      url: "api/v2/port/index/ads?place=4",
    })
      .then(({ data }) => {
        console.log("data", data.data);
        this.Recommend = data.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },

  beforeRouteLeave(to, from, next) {
    // console.log("to", to);
    // console.log("from", from);

    if (to.name != "HomePage") {
      next();
    } else {
      this.$store.commit("setNavIndex", 1); //调用store的commit方法 直接调用mutations对state的数据进行修改 将app的nav显示
      next();
    }
  },

  methods: {
    ...mapMutations("playPage", ["SHOW_AND_HIDE_PLAY_PAGE",'PLAY_AND_PAUSE']),

    backUp() {
      //回到上一级
      console.log("即将回到上一级");
      this.$router.go(-1); //回到上一个历史记录
      // this.$store.commit("setNavIndex", 1); //调用store的commit方法 直接调用mutations对state的数据进行修改 将app的nav显示

      // this.$emit("hidePlayViews"); //触发app上的 隐藏音乐播放页面的事件
      // this.SHOW_AND_HIDE_PLAY_PAGE(); //调用在音乐模块的显示隐藏方法
    },
  },
};
</script>

<style scoped lang="scss">
.playPage {
  width: 100vw;
  height: 100vh;
  // background-color: #000;
  padding-top: 2vh;

  .playPageMask {
    width: 100%;
    height: 100%;
    z-index: -9999 !important;
    position: absolute;
    left: 0;
    top: 0;
    filter: blur(60px);

    &.Default {
      //没有背景图片时的默认背景
      background-image: linear-gradient(
        -212deg,
        #09203f 0%,
        #537895 100%
      ) !important;
    }
  }
  .header {
    width: 100%;

    .title {
      display: flex;
      align-items: center;

      .backUp {
        width: 60px;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        margin-right: 3vw;
      }

      .text {
        font-size: 16px;
        color: #fff;
      }
    }

    .Recommend {
      height: 6vh;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 4vw;

      .title {
        display: flex;
        align-items: center;

        .img {
          width: 18px;
          height: 18px;
          display: flex;
          align-items: center;
          justify-content: center;

          img {
            width: 100%;
            display: block;
          }
        }

        .text {
          font-size: 12px;
          color: #fff;
          margin-left: 2vw;
        }
      }

      .button {
        font-size: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
      }
    }
  }

  .main {
    width: 100vw;
    height: calc(92vh - 60px);
    // background-color: aquamarine;
  }
}
</style>
