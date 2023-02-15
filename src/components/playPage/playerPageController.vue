<template>
  <div class="playerPageController">
    <div class="dic-box">
      <div class="dic-mask">
        <div class="needle" :class="playClass"></div>
      </div>
      <!-- 防止脱标的盒子 -->

      <div class="dic" :class="playClass">
        <!-- 当前播放器的状态类名 -->
        <div class="pic">
          <img :src="imgSrc" />
        </div>
        <div class="light"></div>
      </div>
    </div>

    <!-- <audio
      :v-if="$store.state.player.audioSrc"
      :src="$store.state.player.audioSrc"
      :loop="$store.state.player.isLoop"
      ref="audio"
    /> -->

    <div class="Controller">
      <!-- <div class="icon">
        <div class="collect iconItem">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            class="bi bi-star"
            viewBox="0 0 16 16"
          >
            <path
              d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"
            />
          </svg>
        </div>
        <div class="list iconItem">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            class="bi bi-list-ul"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
            />
          </svg>
        </div>
        <div class="speed iconItem">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            class="bi bi-magic"
            viewBox="0 0 16 16"
          >
            <path
              d="M9.5 2.672a.5.5 0 1 0 1 0V.843a.5.5 0 0 0-1 0v1.829Zm4.5.035A.5.5 0 0 0 13.293 2L12 3.293a.5.5 0 1 0 .707.707L14 2.707ZM7.293 4A.5.5 0 1 0 8 3.293L6.707 2A.5.5 0 0 0 6 2.707L7.293 4Zm-.621 2.5a.5.5 0 1 0 0-1H4.843a.5.5 0 1 0 0 1h1.829Zm8.485 0a.5.5 0 1 0 0-1h-1.829a.5.5 0 0 0 0 1h1.829ZM13.293 10A.5.5 0 1 0 14 9.293L12.707 8a.5.5 0 1 0-.707.707L13.293 10ZM9.5 11.157a.5.5 0 0 0 1 0V9.328a.5.5 0 0 0-1 0v1.829Zm1.854-5.097a.5.5 0 0 0 0-.706l-.708-.708a.5.5 0 0 0-.707 0L8.646 5.94a.5.5 0 0 0 0 .707l.708.708a.5.5 0 0 0 .707 0l1.293-1.293Zm-3 3a.5.5 0 0 0 0-.706l-.708-.708a.5.5 0 0 0-.707 0L.646 13.94a.5.5 0 0 0 0 .707l.708.708a.5.5 0 0 0 .707 0L8.354 9.06Z"
            />
          </svg>
        </div>
        <div class="timing iconItem">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            class="bi bi-alarm"
            viewBox="0 0 16 16"
          >
            <path
              d="M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5z"
            />
            <path
              d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1h-3zm1.038 3.018a6.093 6.093 0 0 1 .924 0 6 6 0 1 1-.924 0zM0 3.5c0 .753.333 1.429.86 1.887A8.035 8.035 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5zM13.5 1c-.753 0-1.429.333-1.887.86a8.035 8.035 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1z"
            />
          </svg>
        </div>
      </div> -->

      <div class="icon">
        <van-grid :border="false">
          <van-grid-item>
            <img src="@/assets/img/play/shoucang.png" />
            <div class="text">收藏</div>
          </van-grid-item>
          <van-grid-item @click="showPopup">
            <img src="@/assets/img/play/liebiao.png" />
            <div class="text">列表</div></van-grid-item
          ><van-grid-item @click="showPopupBeiSu">
            <img src="@/assets/img/play/beisu.png" class="beisu" />
            <div class="text">倍速</div></van-grid-item
          ><van-grid-item>
            <img src="@/assets/img/play/dingshi.png" />
            <div class="text">定时</div>
          </van-grid-item>
        </van-grid>
      </div>

      <van-popup v-model="show" position="bottom" lock-scroll>
        <div class="popupMain">
          <div class="title">播放列表{{ `(${sylloge}集)` }}</div>
          <div
            class="item"
            v-for="item in list"
            :key="item.chapter_title"
            @click="switchBook(item.content, item.chapter_title)"
          >
            {{ item.chapter_title }}
          </div>
        </div>
      </van-popup>

      <van-popup v-model="showBeiSu" position="bottom" lock-scroll>
        <div class="popupMainBeiSu">
          <van-picker
            title=""
            show-toolbar
            :columns="columns"
            default-index="2"
            visible-item-count="3"
            item-heigh="10vh"
            @confirm="onConfirm"
            @cancel="onCancel"
          />
        </div>
      </van-popup>

      <div class="line">
        <van-slider
          :value="(playTime / duration) * 100"
          active-color="#f85225"
          @change="lineChange"
        >
        </van-slider>
        <div class="lineState">
          <div class="start">{{ songNowTime }}</div>
          <div class="end">{{ songDuration }}</div>
        </div>
      </div>
      <div class="ControllerButton">
        <div class="button">
          <img src="@/assets/img/play/kuaitui15.png" />
        </div>
        <div class="button">
          <img src="@/assets/img/play/kuaijin1.png" />
        </div>
        <div class="button" @click="PLAY_AND_PAUSE">
          <img src="@/assets/img/play/pause.png" v-if="playState" />
          <img src="@/assets/img/play/play.png" v-else />
        </div>
        <div class="button">
          <img src="@/assets/img/play/kuaijin.png" />
        </div>
        <div class="button">
          <img src="@/assets/img/play/kuaijin15zheng.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";
export default {
  name: "playerPageController",
  props: {
    // msg: playerPage
  },

  computed: {
    playClass() {
      return this.playState ? "on" : "off";
    },

    ...mapState("playPage", [
      "duration",
      "playTime",
      "playState",
      "imgSrc",
      "list",
      "sylloge",
    ]), //向vuex的playPage模块中的state取值
    ...mapGetters("playPage", ["songDuration", "songNowTime"]),

    nowLineValue: {
      get() {
        return (this.playTime / this.duration) * 100;
      },
      set() {},
    },
  },

  data() {
    return {
      // lineValue: 0,
      show: false,
      showBeiSu: false,
      columns: [
        "0.5倍速",
        "0.75倍速",
        "1倍速",
        "1.25倍速",
        "1.5倍速",
        "1.75倍速",
        "2倍速",
      ],
    };
  },

  methods: {
    ...mapMutations("playPage", [
      "PLAY_AND_PAUSE",
      "SET_SONG_PLAYTIME",
      "SET_SONG_SRC",
      "set_title",
      "set_playbackRate",
    ]),
    showPopup() {
      this.show = true;
      // console.log("this.list", this.list);
    },
    showPopupBeiSu() {
      this.showBeiSu = true;
      // console.log("this.list", this.list);
    },
    lineChange(a) {
      // console.log(a);
      this.SET_SONG_PLAYTIME((a / 100) * this.duration);
      this.$bus.$emit("CurrentTime", (a / 100) * this.duration); //改变播放进度
    },
    switchBook(src, title) {
      this.SET_SONG_SRC(src); //设置播放源路径
      this.set_title(title);
      this.show = false;
    },
    onConfirm(value, index) {
      // console.log("选择了", (index + 1) / 4 + 0.25);
      this.set_playbackRate((index + 1) / 4 + 0.25);
      this.showBeiSu = false;
    },
    onCancel() {
      this.showBeiSu = false;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.playerPageController {
  width: 100%;
  height: 100%;
  position: relative;
  // background-color: aquamarine;
  // backdrop-filter: blur(10px);

  .Controller {
    position: fixed;
    bottom: 0;
    left: 100vmin;
    width: 100vmin;
    height: 30vmax;
    // background-color: aquamarine;

    .van-popup--bottom {
      width: 100vmin;
      left: 100vmin;
      // height: 60vmax;
      overflow: hidden;
      border-radius: 12px 12px 0 0;
    }

    .popupMain {
      background-color: #fff;
      height: 60vmax;
      width: 100%;
      overflow-y: auto;
      color: #333;
      padding: 2vh 4vw;

      .title {
        font-size: 2vh;
      }

      .item {
        padding: 2vh 0;
        font-size: 2vw;
        font-weight: 200;
        border-bottom: 1px solid rgba($color: #000000, $alpha: 0.1);
      }
    }

    .popupMainBeiSu {
      background-color: #fff;
      height: 30vmax;
      width: 100%;
      // overflow-y: auto;
      color: #333;
      padding: 2vh 4vw;
    }

    .icon {
      // position: absolute;
      width: 96vmin;
      // height: 8vmax;
      // background-color: #666;
      top: 0;
      // left: 2vmin;
      margin-left: 2vmin;
      color: #fff;

      .van-grid-item__content {
        background: none;
        padding: 0;

        img {
          width: 50%;
          height: auto;
          display: block;

          &.beisu {
            height: 100%;
          }
        }

        .text {
          line-height: 20px;
          font-size: 2vmin;
        }
      }

      .van-grid-item__text {
        color: #fff;
      }
    }

    .line {
      margin-top: 4vmax;
      width: 86vmin;
      margin-left: 7vmin;

      .van-slider__button {
        width: 4vmin;
        height: 4vmin;
        background-color: #f85225;
      }

      .lineState {
        display: flex;
        align-items: center;
        justify-content: space-between;
        line-height: 12vmin;
        font-size: 4vmin;
      }
    }

    .ControllerButton {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100vmin;
      height: 12vmax;
      // background-color: aqua;

      display: flex;
      align-items: center;
      justify-content: center;

      .button {
        flex: 0 0 20%;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
          width: 80%;
          height: 80%;
          display: block;
        }
      }
    }
  }

  .dic-box {
    width: 100%;
    margin-top: 60px;
    position: relative;

    .dic-mask {
      width: 60vmin;
      height: 60vmin;
      border-radius: 50%;
      pointer-events: none;
      position: absolute;
      top: 0;
      left: calc(50% - 30vw);

      .needle {
        position: absolute;
        top: 0;
        left: 90%;
        width: 18vmin;
        height: 30vmin;
        /* background-color: aqua; */
        background: url(@/assets/img/needle-ab.png) no-repeat center center;
        background-size: cover;
        z-index: 999;
        transform: rotate(0deg);
        transform-origin: 3.8px 3.5px;

        &.on {
          animation: needle-on 0.15s linear both;
        }

        &.off {
          animation: needle-off 0.15s linear both;
        }
      }

      @keyframes needle-on {
        from {
          transform: rotate(5deg);
        }

        to {
          transform: rotate(33deg);
        }
      }

      @keyframes needle-off {
        from {
          transform: rotate(33deg);
        }

        to {
          transform: rotate(5deg);
        }
      }
    }

    .dic {
      width: 60vmin;
      height: 60vmin;
      background: url(@/assets/img/disc.png) no-repeat center center;
      background-size: cover;
      border-radius: 50%;
      position: absolute;
      top: 0;
      left: calc(50% - 30vw);
      animation: turn 8s linear infinite;
      display: flex;
      align-items: center;
      justify-content: center;

      .pic {
        width: 36vmin;
        height: 36vmin;
        border-radius: 999px;
        // background-color: aquamarine;
        // background: url(../img/9.6/mini.jpg) no-repeat center center;
        background-size: cover;
        overflow: hidden;

        img {
          width: 100%;
          height: 100%;
          display: block;
        }
      }

      .light {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: url(@/assets/img/disc_light.png) no-repeat center center;
        background-size: cover;
        pointer-events: none;
      }

      &.on {
        animation-play-state: running;
      }

      &.off {
        animation-play-state: paused;
      }
    }

    @keyframes turn {
      // dic的动画
      from {
        transform: rotate(0deg);
      }

      to {
        transform: rotate(360deg);
      }
    }
  }
}
</style>
