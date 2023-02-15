<template>
  <div class="rankThree">
    <div class="rankIconOne"></div>
    <div class="rankIconTwo"></div>
    <div class="rankIconThree"></div>
    <div
      class="rankIconOneImg img"
      v-if="list[1]?.small_cover"
      @click="linkBookMain(list[1].audio_id)"
    >
      <img :src="`http://soundoss.anxiashuyuan.com/${list[1].small_cover}`" />
      <div class="title van-ellipsis">{{ list[1].audio_title }}</div>
    </div>
    <div
      class="rankIconTwoImg img"
      v-if="list[0]?.small_cover"
      @click="linkBookMain(list[0].audio_id)"
    >
      <img :src="`http://soundoss.anxiashuyuan.com/${list[0].small_cover}`" />
      <div class="title van-ellipsis">{{ list[0].audio_title || "" }}</div>
    </div>
    <div
      class="rankIconThreeImg img"
      v-if="list[2]?.small_cover"
      @click="linkBookMain(list[2].audio_id)"
    >
      <img :src="`http://soundoss.anxiashuyuan.com/${list[2].small_cover}`" />
      <div class="title van-ellipsis">{{ list[2].audio_title || "" }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "rankThree",
  props: {
    list: Array,
  },

  watch: {
    list() {
      this.init();
    },
  },

  data() {
    return {
      createdFlag: false,
    };
  },

  methods: {
    init() {
      // 省略从服务器后端获取图片的代码
      this.createdFlag = true;
    },

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
.rankThree {
  position: absolute;
  bottom: 0;
  left: 2%;
  width: 96%;
  height: 60%;
  // background-color: aqua;
  background: url(@/assets/img/top/rank.png) no-repeat center center;
  background-size: cover;

  .rankIconTwo {
    position: absolute;
    background: url(@/assets/img/top/rankOne.png) no-repeat center center;
    background-size: cover;
    width: 20vmin;
    height: 8vmin;
    top: -20%;
    left: 40%;
  }
  .rankIconOne {
    position: absolute;
    background: url(@/assets/img/top/rankTwo.png) no-repeat center center;
    background-size: cover;
    width: 16vmin;
    height: 6vmin;
    top: 1%;
    left: 6%;
  }
  .rankIconThree {
    position: absolute;
    background: url(@/assets/img/top/rankThree.png) no-repeat center center;
    background-size: cover;
    width: 16vmin;
    height: 6vmin;
    top: 1%;
    right: 6%;
  }

  .img {
    position: relative;
    // overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      display: block;
      border-radius: 8px;
    }
  }

  .rankIconOneImg {
    // background-color: aqua;
    position: absolute;
    bottom: 20%;
    left: 4%;
    width: 22vmin;
    height: 22vmin;

    .title {
      width: 80%;
      font-size: 2vmin;
      text-align: center;
      position: absolute;
      bottom: -27%;
      left: 10%;
    }
  }

  .rankIconThreeImg {
    // background-color: aqua;
    position: absolute;
    bottom: 20%;
    right: 4%;
    width: 22vmin;
    height: 22vmin;
    .title {
      width: 80%;
      font-size: 2vmin;
      text-align: center;
      position: absolute;
      bottom: -27%;
      left: 10%;
    }
  }

  .rankIconTwoImg {
    // background-color: aqua;
    position: absolute;
    bottom: 18%;
    right: calc(50% - 14vmin);
    width: 28vmin;
    height: 28vmin;

    .title {
      width: 80%;
      font-size: 3vmin;
      text-align: center;
      position: absolute;
      bottom: -19%;
      left: 10%;
    }
  }
}
</style>
