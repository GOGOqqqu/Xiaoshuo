<template>
  <div class="homeBookList">
    <div class="listName">{{ bookList.name }}</div>
    <div
      class="bookItem"
      v-for="item in bookList.data"
      :key="item.last_update_chapter_id"
      @click="linkBookMain(item.audio_id)"
    >
      <div class="bookImg">
        <img :src="`http://soundoss.anxiashuyuan.com/${item.small_cover}`" />
      </div>
      <div class="bookMain">
        <div class="title">{{ item.audio_title }}</div>
        <div class="text van-ellipsis">{{ item.description }}</div>
        <div class="penName">{{ item.pen_name }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { mapGetters } from "vuex";
export default {
  name: "homeBookList",
  props: {
    bookList: { type: Object, requited: true },
  },

  created() {},

  watch: {},

  computed: {
    ...mapState("playPage", ["duration", "playTime", "playState"]), //向vuex的playPage模块中的state取值
    ...mapGetters("playPage", ["songDuration", "songNowTime"]),
  },

  data() {
    return {};
  },

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
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped lang="scss">
.homeBookList {
  width: 100%;
  background-color: #fff;

  .listName {
    margin-bottom: 2vmax;
    font-size: 5vmin;
    font-weight: bold;
    margin-left: 5%;
  }

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
        font-size: 12px;
        font-weight: 200;
        color: #666;
        margin-bottom: 2vmax;
      }

      .penName {
        font-size: 14px;
        font-weight: 300;
        color: #666;
      }
    }
  }
}
</style>
