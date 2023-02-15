<template>
  <div class="homeHeader">
    <div class="swipeMask"></div>

    <div class="swipe">
      <van-swipe
        class="my-swipe"
        :autoplay="3000"
        loop
        touchable
        :show-indicators="false"
      >
        <van-swipe-item
          v-for="item in swipe"
          :key="item.name"
          @click="linkBookMain(item.url)"
        >
          <div class="swipeItem">
            <!-- <img :src="`http://soundoss.anxiashuyuan.com/${item.cover}`" /> -->
            <van-image
              width="100%"
              height="100%"
              fit="fill"
              :src="`http://soundoss.anxiashuyuan.com/${item.images}`"
            />
          </div>
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { mapGetters } from "vuex";
export default {
  name: "homeHeader",
  props: {
    swipe: { type: Array, requited: true },
  },

  watch: {},

  computed: {
    ...mapState("playPage", ["duration", "playTime", "playState"]), //向vuex的playPage模块中的state取值
    ...mapGetters("playPage", ["songDuration", "songNowTime"]),
  },

  data() {
    return {};
  },

  mounted() {},

  methods: {
    linkBookMain(id) {
      //跳转至书本详情
      this.$store.commit("setNavIndex", -1); //调用store的commit方法 直接调用mutations对state的数据进行修改 将app的nav隐藏

      this.$router.push({
        name: "bookMain",
        // query: { id: id },
        query: { id: id },
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped lang="scss">
.homeHeader {
  // position: absolute;
  height: 24vmax;
  width: 100vmin;
  // background-color: #393d49;
  position: relative;
  // top: 0vmax;
  // left: 0;
  // background-color: brown;

  .swipeMask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vmin;
    height: 20vmax;
    background-color: #393d49;
    z-index: -1; //保证底部背景在最底层
    border-radius: 0 0 10% 10%; //只有左下角和右下角的圆角
  }

  .swipe {
    padding-top: 3vmax;
    width: 88vmin;
    height: 100%;
    position: absolute;
    bottom: 0;
    left: 6vmin;
    // background-color: #ddd;
    border-radius: 12px;
    overflow: hidden;

    .swipeItem {
      width: 100%;
      height: 21vmax;
      // background-color: blue;

      img {
        // width: 100%;
        height: 100%;
        display: block;
      }
    }
  }
}
</style>
