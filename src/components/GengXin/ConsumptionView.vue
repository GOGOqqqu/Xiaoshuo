<template>
  <div class="logn">
    <!-- 消费 充值 记录页面 -->
    <div class="da">
      <van-icon class="hui" @click="McM" name="arrow-left" size="22" />
      <van-tabs v-model="active">
        <van-tab title="消费记录">
          <div class="imgs">
            <!-- <img src="../assets/kongbaiyemian.png" /> -->
            <img src="../../assets/kongbaiyemian.png" alt />
          </div>
          <div class="text33">暂时还没有消费记录哦~</div>
        </van-tab>
        <van-tab title="充值记录">
          <div class="imgs">
            <img src="../../assets/kongbaiyemian.png" />
          </div>
          <div class="text33">暂时还没有充值记录哦~</div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 2,
    };
  },
  methods: {
    McM() {
      this.$router.push({
        name: "my",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.logn {
  position: fixed;
  z-index: 60;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  background-color: rgb(255, 255, 255);
  // overflow: hidden;
  .da {
    width: 100%;
    height: 100%;
    position: relative;
    font-size: 22px;
    .hui {
      position: absolute;
      left: 6px;
      z-index: 69;
      line-height: 5.5vmax;
    }
    .imgs {
      width: 100%;
      height: 40vh;
      margin-top: 3vh;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 35vh;
        height: 33vh;
      }
    }
    .text33 {
      font-size: 14px;
      text-align: center;
    }
  }
}
</style>
