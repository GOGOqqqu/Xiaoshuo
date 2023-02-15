<template>
  <div class="logn">
    <div class="da">
      <van-icon class="hui" @click="McM" name="arrow-left" size="28" />
      <van-tabs v-model="active">
        <van-tab title="已下载">
          <div class="neizai">可用空间: 132G</div>
          <div class="imgs">
            <img src="../assets/kongbaiyemian.png" />
          </div>
          <div class="text33">您暂时还没有下载的书籍,赶紧去逛逛吧~</div>
        </van-tab>
        <van-tab title="下载中">
          <div class="neizai">可用空间: 132G</div>
          <div class="neis">
            <div @click="ImgAn" class="nb">
              <svg
                t="1666273774267"
                class="icon imh"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="6180"
                width="3.6vh"
                height="3.6vh"
              >
                <path
                  d="M96 320a32 32 0 1 1 0-64h832a32 32 0 0 1 0 64H96z m736 0h64v448a160 160 0 0 1-160 160H288a160 160 0 0 1-160-160V320h64v96H128v-96h64v448a96 96 0 0 0 96 96h448a96 96 0 0 0 96-96V320z m-512 112a32 32 0 0 1 64 0v320a32 32 0 0 1-64 0v-320z m320 0a32 32 0 0 1 64 0v320a32 32 0 0 1-64 0v-320zM288 256H224V192a96 96 0 0 1 96-96h384a96 96 0 0 1 96 96v64h-64V224h64v32h-64V192a32 32 0 0 0-32-32H320a32 32 0 0 0-32 32v64z"
                  p-id="6181"
                  fill="#707070"
                />
              </svg>
              <span class="shang">一键清除</span>
            </div>
          </div>

          <div class="imgs">
            <img src="../assets/kongbaiyemian.png" />
          </div>
          <div class="text33">您暂时还没有下载任务,赶紧去逛逛吧~</div>
        </van-tab>
      </van-tabs>
    </div>
  </div>

  <!-- <van-icon class="hui" @click="McM" name="arrow-left" /> -->
</template>
<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      active: 2
    };
  },
  methods: {
    McM() {
      this.$router.push({
        name: "my"
      });
    },
    ImgAn() {
      Toast("暂无下载任务");
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
    text-align: center;
    width: 100%;
    height: 100%;
    position: relative;
    .hui {
      position: absolute;
      left: 0;
      z-index: 69;
      line-height: 7vh;
    }
    .neizai {
      width: 100%;
      height: 4vh;
      font-size: 13px;
      font-weight: 500;
      line-height: 4vh;
      background-color: rgb(245, 245, 245);
    }
    .neis {
      width: 100%;
      height: 5vh;
      border-bottom: 1px solid #e7e6e6;

      .nb {
        width: 100%;
        height: 5vh;
        font-size: 15px;
        font-weight: 500;
        line-height: 5vh;
        display: flex;
        align-content: center;
        justify-content: center;
        .imh {
        margin-top: 0.6vh;
        margin-right: 8px;
      }
      .shang {
        display: block;
      }
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
    .text33 {
      font-size: 14px;
    }
  }
}
</style>
