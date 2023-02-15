<template>
  <div class="ProgramMainCard" @click="linkPlayPage(src, title, img)">
    <div class="header">
      <div class="left">
        <div class="num">{{ index + 1 }}</div>
        <div class="title">{{ title }}</div>
      </div>
      <span class="icon"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-download"
          viewBox="0 0 16 16"
        >
          <path
            d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"
          />
          <path
            d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"
          /></svg
      ></span>
    </div>
    <div class="footer">
      <div class="left">
        <div class="playNum">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="8"
            height="8"
            fill="currentColor"
            class="bi bi-play-circle-fill"
            viewBox="0 0 16 16"
          >
            <path
              d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"
            /></svg
          >{{ num }}
        </div>
        <div class="playTime">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="8"
            height="8"
            fill="currentColor"
            class="bi bi-clock-fill"
            viewBox="0 0 16 16"
          >
            <path
              d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"
            /></svg
          >{{ playTime }}
        </div>
        <div class="played"></div>
      </div>
      <div class="date">{{ date }}</div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "ProgramMainCard",
  props: {
    // swipe: { type: Array, requited: true },
    title: String, //标题
    num: [Number, String], //点击数
    playTime: [Number, String], //播放长度
    date: String, //时间
    audio: String, //音频链接
    index: Number, //排序
    src: String,
    img: String,
  },

  watch: {},

  computed: {},

  data() {
    return {};
  },

  methods: {
    ...mapMutations("playPage", [
      "SHOW_AND_HIDE_PLAY_PAGE",
      // "PLAY",
      "SET_SONG_SRC",
      "set_title",
      "set_imgSrc",
    ]),
    linkPlayPage(src, title, img) {
      this.SET_SONG_SRC(src); //设置播放源路径
      // this.SHOW_AND_HIDE_PLAY_PAGE(); //显示音乐播放页面
      // this.PLAY(); //播放
      this.set_title(title);
      this.set_imgSrc(img);
      this.$router.push("/playPage");
      this.$store.commit("setNavIndex", -1); //调用store的commit方法 直接调用mutations对state的数据进行修改 将app的nav隐藏
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped lang="scss">
.ProgramMainCard {
  width: 100vmin;
  height: 8vmax;
  margin: 2vmax 0;
  padding: 0 4vmin;

  .header {
    width: 100%;
    height: 3.2vmax;
    line-height: 3.2vmax;
    margin-bottom: 1.2vmax;
    position: relative;

    .left {
      display: flex;
      align-items: center;
      position: absolute;
      top: 0;
      left: 0;
      margin-bottom: 0.4vmax;

      .num {
        font-size: 4vmin;
        font-weight: bold;
        color: #999;
        margin-right: 3vmin;
      }

      .title {
        font-size: 4vmin;
        font-weight: 550;
        color: #333;
      }
    }

    .icon {
      position: absolute;
      top: 0;
      right: 0;
      color: #666;
    }
  }

  .footer {
    width: 100%;
    height: 4vmax;

    display: flex;
    align-items: center;
    justify-content: space-between;

    .left {
      display: flex;
      align-items: center;
      margin-left: 5vmin;
      position: relative;

      .playNum {
        display: flex;
        align-items: center;
        font-size: 2vmin;
        svg {
          color: #999;
          margin-right: 1vmin;
        }
      }

      .playTime {
        position: absolute;
        left: 15vmin;
        top: 0;
        display: flex;
        align-items: center;
        font-size: 2vmin;
        svg {
          color: #999;
          margin-right: 1vmin;
        }
      }
    }

    .date {
      font-size: 3vmin;
      color: #666;
    }
  }
}
</style>
