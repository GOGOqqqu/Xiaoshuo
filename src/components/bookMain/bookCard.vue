<template>
  <div class="bookCard">
    <div class="img">
      <img :src="`http://soundoss.anxiashuyuan.com/${img}`" />
    </div>
    <div class="main">
      <div class="title">{{ title }}</div>
      <div class="text van-multi-ellipsis--l2">{{ description }}</div>
      <div class="penName">{{ name }}</div>
    </div>
    <div class="button">
      <span class="icon">收藏</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "bookCard",
  props: {
    // swipe: { type: Array, requited: true },
    name: String,
    id: Number,
    img: String,
    title: String,
    description: String,
  },

  watch: {},

  computed: {},

  data() {
    return {};
  },

  methods: {
    // linkBookMain(id) {
    //   //跳转至书本详情
    //   this.$store.commit("setNavIndex", -1); //调用store的commit方法 直接调用mutations对state的数据进行修改 将app的nav隐藏
    //   this.$router.push({
    //     name: "bookMain",
    //     query: { id: id },
    //     // params: { id: id },
    //   });
    // },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped lang="scss">
.bookCard {
  width: 100%;
  height: 10vmax;
  padding: 0px 4vmin;
  margin: 2vmax 0;
  display: flex;
  align-items: center;
  justify-content: center;
  .img {
    height: 10vmax;
    width: 10vmax;

    img {
      width: 100%;
      height: 100%;
      display: block;
      border-radius: 10px;
    }
  }

  .main {
    width: calc(80% - 10vmax);
    height: 100%;
    padding-left: 2vmin;
    display: flex;
    flex-wrap: wrap;
    align-content: space-around;

    .title {
      font-size: 3vmin;
      font-weight: bold;
      color: #000;
    }

    .text {
      font-size: 1vmin;
      transform: scale(0.9) translate(-2vmin);
      font-weight: 200;
      color: #666;
      line-height: 2vmax;
    }

    .penName {
      font-size: 3vmin;
      // transform: scale(0.75) translate(-2vmin);
      font-weight: 200;
      color: #333;
    }
  }

  .button {
    width: 20%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    .icon {
      // width: 80%;
      // height: 1vmax;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2vmin;
      color: #ffffff;
      padding: 1vmax 5vmin;
      background-color: #ff880d;
      border-radius: 16px;
    }
  }
}
</style>
