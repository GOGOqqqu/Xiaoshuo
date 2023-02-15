<template>
  <div class="rankList">
    <div
      class="bookCard"
      v-for="(item, index) in trueList"
      :key="item.audio_id"
      @click="linkBookMain(item.audio_id)"
    >
      <div class="index">{{ index + 4 }}</div>
      <div class="bookImg">
        <img :src="`http://soundoss.anxiashuyuan.com/${item.small_cover}`" />
      </div>
      <div class="bookBox">
        <div class="bookTitle van-ellipsis">{{ item.audio_title }}</div>
        <div class="bookMain van-ellipsis">{{ item.description }}</div>
        <div class="bookPenName van-ellipsis">{{ item.anchor_name }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "rankList",
  props: {
    list: Array,
  },

  computed: {
    trueList() {
      return this.list.slice(3);
    },
  },

  mounted() {
    // console.log("this.list", this.list);
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
<style lang="scss">
.rankList {
  width: 96%;
  // height: 1000px;
  margin-left: 2%;
  // background-color: cyan;
  margin-top: 31vmax;
  background: #fff;
  padding: 1vmax 0;

  .bookCard {
    height: 12vmax;
    width: 100%;
    // background-color: blue;
    margin: 3vmax 0;
    display: flex;
    // justify-content: center;
    align-items: center;

    .index {
      width: 12%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2vmin;
      font-size: 5vmin;
      font-weight: bold;
      color: #aaa8a8;
    }

    .bookImg {
      height: 12vmax;
      width: 12vmax;

      img {
        width: 100%;
        height: 100%;
        display: block;
        border-radius: 8px;
      }
    }

    .bookBox {
      height: 100%;
      width: calc(88% - 12vmax);
      padding: 0.5vmax 2vmin;

      .bookTitle {
        font-size: 4vmin;
        font-weight: bold;
        margin-bottom: 8%;
      }

      .bookMain {
        font-size: 1vmin;
        font-weight: 200;
        color: #767676;
        margin-bottom: 8%;
      }

      .bookPenName {
        font-size: 1vmin;
        font-weight: 200;
        color: #767676;
      }
    }
  }
}
</style>
