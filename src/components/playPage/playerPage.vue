<template>
  <div class="playerPage">
    <van-swipe
      class="my-swipe"
      indicator-color="white"
      :initial-swipe="1"
      show-indicators
      touchable
      :duration="300"
      stop-propagation
      :loop="false"
      :lazy-render="true"
    >
      <van-swipe-item>
        <playerPageComment />
      </van-swipe-item>
      <van-swipe-item>
        <playerPageController />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import playerPageController from "@/components/playPage/playerPageController.vue"; //引入播放控制组件
import playerPageComment from "@/components/playPage/playerPageComment.vue"; //引入播放评论区组件

export default {
  name: "playerPage",
  props: {
    // msg: playerPage
  },

  data() {
    return {};
  },

  components: {
    playerPageController,
    playerPageComment,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.playerPage {
  width: 100%;
  height: 100%;
  // background-color: cyan;

  .van-swipe {
    height: 100%;
  }

  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    // line-height: 150px;
    // text-align: center;
    // background-color: #39a9ed;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .van-swipe__indicators {
    //自定义指示器
    top: 20px;
    height: 20px;
  }
}
</style>
