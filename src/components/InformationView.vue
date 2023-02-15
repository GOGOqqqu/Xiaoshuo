<template>
  <div class="logn">
    <div class="da">
      <div class="header">
        <van-icon class="hui" @click="McM" name="arrow-left" />
        <div class="shizi">信息</div>
        <img src="../assets/ic_citypicker_three_city.png" @click="ImgAm" class="bo">
      </div>

      <div class="text">
        <img src="../assets/pinglunlvse.png" >
        <van-cell title="评论" is-link />
      </div>
      <div class="text">
        <img src="../assets/dianzanhuangse.png" >
        <van-cell title="点赞" is-link />
      </div>
      <div class="text">
        <img src="../assets/gengxinlanse.png" >
        <van-cell title="更新" is-link />
      </div>
    </div>
  </div>
</template>
<script>
import { Toast } from "vant";
export default {
  
  methods: {
    McM() {
      this.$router.go(-1);
    },
    JumpB() {
      localStorage.setItem('bb','[]')
      this.$router.push({
          name: 'my',
          query: {
          id: 1
        }
      })
    },
    ImgAm() {
      Toast("当前暂无播放音频");
    }
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
    text-align: left;

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
    .text {
      width: 100%;
      height: 7vh;
      line-height: 7vh;
      font-size: 18px;
      display: flex;

    }
    .van-cell__title {
      margin-left: 4vh;
      font-size: 18px;
    }
    .text img {
      position: absolute;
      z-index: 70;
      left: 13px;
        width:4vh;
        height: 4vh;
        margin-top: 1.5vh;
      }
    .deng {
      margin-top: 18vh;
      width: (100% -32px);
      padding: 0px 16px;
      height: 6vh;
      font-size: 20px;
      text-align: center;
      overflow: hidden;
      border-radius: 15px;
      p {
        display: block;
        width: 100%;
        height: 6vh;
        line-height: 6vh;
        border-radius: 15px;
        color: #FFFFFF;
        background-color: rgb(248, 82, 37);
      }
    }
  }
}
</style>