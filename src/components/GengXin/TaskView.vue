<template>
  <div class="logn">
    <div class="da">
      <div class="content">
        <div class="header">
          <van-icon class="hui" @click="McM" name="arrow-left" />
          <div class="shizi">积分兑换</div>
          <div class="wang">
            <svg
              t="1666340093776"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="7382"
              width="3vh"
              height="3vh"
            >
              <path
                d="M462.08 768a42.666667 42.666667 0 1 0 42.666667-42.666667 42.666667 42.666667 0 0 0-42.666667 42.666667z m42.666667-105.386667h-3.413334a35.84 35.84 0 0 1-32.426666-39.253333A231.253333 231.253333 0 0 1 554.666667 493.653333c64.426667-64.426667 65.706667-85.333333 66.56-106.666666a92.586667 92.586667 0 0 0-26.453334-69.12A112.213333 112.213333 0 0 0 512 283.306667a107.52 107.52 0 0 0-107.52 107.52 35.84 35.84 0 1 1-72.106667 0A179.2 179.2 0 0 1 512 213.333333a184.746667 184.746667 0 0 1 133.973333 57.173334 164.266667 164.266667 0 0 1 45.226667 120.32c-2.56 46.506667-16.64 82.773333-87.893333 153.6-35.84 35.84-58.88 63.146667-61.013334 85.333333a35.84 35.84 0 0 1-35.413333 34.133333z m316.16 159.146667A439.893333 439.893333 0 1 1 341.333333 106.666667a439.893333 439.893333 0 0 1 481.706667 716.373333zM512 0a512 512 0 1 0 512 512A512 512 0 0 0 512 0z"
                fill="#e6e6e6"
                p-id="7383"
              />
            </svg>
          </div>
        </div>

        <div class="content-content">
          <img src="../../assets/exchange_round.png" />
          <div class="text1">积分:40</div>
        </div>

        <div class="zhuang">
          <div class="he">
            <img class="hyi" src="../../assets/vip_level_1.png" />
            <div class="texts">Lv.1</div>
            <div class="bai1"></div>
          </div>
          <div class="he">
            <img src="../../assets/vip_level_1.png" />
            <div class="texts">Lv.2</div>
            <div class="bai2"></div>
          </div>
          <div class="he">
            <img src="../../assets/vip_level_1.png" />
            <div class="texts">Lv.3</div>
            <div class="bai2"></div>
          </div>
          <div class="he">
            <img src="../../assets/vip_level_1.png" />
            <div class="texts">Lv.4</div>
            <div class="bai2"></div>
          </div>
          <div class="he">
            <img src="../../assets/vip_level_1.png" />
            <div class="texts">Lv.5</div>
            <div class="bai2"></div>
          </div>
          <div class="he">
            <img src="../../assets/vip_level_1.png" />
            <div class="texts">Lv.6</div>
            <div class="bai3"></div>
          </div>
        </div>

        <div class="content-text">
          <div class="text-z">签到得积分</div>
          <div class="text-y">开通会员每日得双倍积分>></div>
        </div>
        <div class="wu2">日常任务</div>
        <div class="wu3">新手任务</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
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
  background-color: rgb(240, 240, 240);
  // overflow: hidden;
  .da {
    width: 100%;
    text-align: left;
    position: relative;

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
      .wang {
        position: absolute;
        right: 22px;
        top: 0;
      }
    }

    .content {
      width: 100%;
      height: 37vh;
      background-color: rgb(255, 192, 139);
      // background-image: url(../../assets/exchange_bg1.png);
      background: cover;
      position: relative;
      // position: fixed;
      // align-items: center;
      // justify-content: center;
      // text-align: center;

      .content-content {
        width: 8vh;
        height: 8vh;
        padding-top: 2.5vh;
        margin: 0 auto;
        text-align: center;
        position: relative;

        img {
          display: block;
          width: 8vh;
          height: 8vh;
          border-radius: 35px;
          box-shadow: 0px 0px 36px rgb(255, 255, 255);
        }
      }

      .text1 {
        color: #fff;
        width: 8vh;
        height: 20px;
        position: absolute;
        text-align: center;
        top: 12vh;
        left: 0;
        margin: 0 auto;
      }

      .zhuang {
        text-align: center;
        width: (100% -120px);
        padding: 0px 60px;
        height: 8vh;
        margin-top: 8vh;

        .he {
          width: calc(100% / 6);
          height: 8vh;
          float: left;
          position: relative;
          color: #fff;
          .bai1 {
            width: 50%;
            height: 2px;
            position: absolute;
            background-color: rgb(255, 255, 255);
            bottom: 5.2vh;
            right: 0px;
            z-index: 70;
          }

          .bai2 {
            width: 100%;
            height: 2px;
            position: absolute;
            background-color: rgb(255, 255, 255);
            bottom: 5.2vh;
            right: 0px;
            z-index: 70;
          }
          .bai3 {
            width: 50%;
            height: 2px;
            position: absolute;
            background-color: rgb(255, 255, 255);
            bottom: 5.2vh;
            left: 0px;
            z-index: 70;
          }

          img {
            width: 4vh;
            height: 4vh;
          }

          .texts {
            width: 100%;
            line-height: 4vh;
            height: 4vh;
          }
        }
      }
    }

    .content-text {
      width: 100%;
      height: 6vh;
      margin-top: 6vh;
      position: relative;
      background-color: #fff;

      .text-z {
        width: 100%;
        height: 6vh;
        margin-left: 20px;
        font-size: 16px;
        line-height: 6vh;
      }
      .text-y {
        height: 6vh;
        position: absolute;
        font-size: 12px;
        right: 20px;
        top: 0px;
        line-height: 6vh;
        color: rgb(207, 148, 77);
      }
    }

    .wu2 {
      height: 5vh;
      background-color: #fff;
      font-size: 15px;
      width: 100%;
      line-height: 5vh;
      margin-top: 2vh;
      // border-bottom: 1px solid rgb(212, 196, 196);
      // background-color: rgb(214, 214, 214);
      padding: 0px 20px;
    }

    .wu3 {
      width: 100%;
      background-color: #fff;
      font-size: 15px;
      // border-bottom: 1px solid rgb(220, 217, 217);
      line-height: 5vh;
      height: 5vh;
      padding: 0px 20px;
    }
  }
}
</style>
