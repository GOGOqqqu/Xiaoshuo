<template>
  <div class="logn">
    <div class="da">
      <div class="header">
        <van-icon class="hui" @click="McM" name="arrow-left" />
        <div class="shizi">已购作品</div>
        <img src="../../assets/ic_citypicker_three_city.png" @click="ImgAm" class="bo" />
      </div>
      <div class="imgs">
        <img src="../../assets/kongbaiyemian.png" />
      </div>
      <p>暂时还没有数据</p>
    </div>
  </div>
</template>
<script>
import { Toast } from "vant";
export default {
  methods: {
    McM() {
      this.$router.push({
          name: 'my'
      })
    },
    JumpB() {
      localStorage.setItem("bb", "[]");
      this.$router.push({
        name: "my"
      });
    },
    ImgAm() {
      Toast("当前暂无播放音频");
    }
  }
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
    text-align: center;

    .header {
      line-height: 8vh;
      font-size: 25px;
      width: (100% -32px);
      padding: 0px 16px;

      height: 8vh;
      text-align: center;
      justify-content: center;
      position: relative;
      .hui {
        position: absolute;
        left: 12px;
        top: 2.5vh;
        width: 3vh;
        height: 3vh;
      }
      .shizi {
        font-size: 20px;
        // position: absolute;
      }
      .bo {
        position: absolute;
        right: 20px;
        top: 2.5vh;
        width: 3vh;
        height: 3vh;
      }
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
    
    p {
      font-size: 15px;
    }
  }
}
</style>