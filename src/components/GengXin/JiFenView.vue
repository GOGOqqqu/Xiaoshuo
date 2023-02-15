<template>
  <div class="logn">
    <div class="da">
      <div class="header">
        <van-icon class="hui" @click="McM" name="arrow-left" />
        <div class="shizi">积分兑换</div>
      </div>
      <div class="content">
        <div class="content-content">
          <img src="../../assets/exchange_round.png" />
          <div class="text">0</div>
          <div class="text1">可用积分</div>
        </div>
        <!-- <div class="content-text">
          <div>0</div>
          <div>可用积分</div>
        </div>-->
      </div>

      <div class="content1">
        <div class="content2">
          <img src="../../assets/exchange_bg2.png" />
        </div>
      </div>

      <div class="content4">积分兑换专区</div>
      <div class="content5">
        <div class="huang s1">
          <div class="dal">
            <div class="huang-img img1">
              <!-- <img src="../../assets/exchange_bg2.png" alt /> -->
            </div>
          </div>
          <div class="text-zi">积分兑换会员日卡</div>
          <div class="text-zi">3,399积分</div>
          <div class="dui">兑换</div>
        </div>
        <div class="huang s2">
          <div class="dal">
            <div class="huang-img img2">
              <!-- <img src="../../assets/exchange_bg2.png" alt /> -->
            </div>
          </div>
          <div class="text-zi">积分兑换会员周卡</div>
          <div class="text-zi">10,100积分</div>
          <div class="dui">兑换</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    McM() {
      this.$router.push({
        name: "my"
      });
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
  background-color: rgb(245, 245, 245);
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
    }

    .content {
      width: 100%;
      height: 20vh;
      background-image: url(../../assets/exchange_bg1.png);
      background: cover;
      position: relative;
      // position: fixed;
      // align-items: center;
      // justify-content: center;
      // text-align: center;

      .content-content {
        width: 15vh;
        height: 15vh;
        padding-top: 2.5vh;
        margin: 0 auto;
        text-align: center;
        position: relative;

        img {
          display: block;
          width: 15vh;
          height: 15vh;
        }
      }

      .text {
        position: absolute;
        top: 9vh;
        left: 7vh;
        font-size: 15px;
        margin: 0 auto;
      }

      .text1 {
        width: 15vh;
        height: 20px;
        position: absolute;
        text-align: center;
        top: 11vh;
        left: 0;
        margin: 0 auto;
      }
    }

    .content1 {
      width: (100% -40px);
      padding: 0 20px;
      height: 14vh;
      background-color: rgb(216, 210, 210);

      .content2 {
        width: 100%;
        height: 12vh;
        text-align: center;

        img {
          margin-top: 2vh;
          width: 100%;
          height: 100%;
        }
      }
    }
    .content4 {
      width: (100% -40px);
      padding: 0 20px;
      line-height: 8vh;
      font-size: 25px;
      font-weight: 500;
    }

    .content5 {
      width: (100% -40px);
      height: 20vh;
      // background-color: aqua;
      padding: 0 20px;

      .s1 {
        float: left;
      }
      .s2 {
        float: right;
      }
      .huang {
        width: 47%;
        height: 100%;
        border-radius: 15px;
        position: relative;
        // border: 1px solid white;
        box-shadow: 0px 1px 5px rgb(214, 208, 208);

        .dal {
          width: (100% -30px);
          padding: 10px 15px;
          height: 50%;
          border-top-right-radius: 15px;
          border-top-left-radius: 15px;
          background-image: url(../../assets/vip_quan.png);
          background-size: 120% 120%;

          .huang-img {
            width: 100%;
            height: 100%;
            background-size: 100% 100%;
          }

          .img1 {
            background-image: url(../../assets/exchange_day.png);
          }

          .img2 {
            background-image: url(../../assets/exchange_week.png);
          }
        }
        .text-zi {
          text-align: left;
          margin-left: 15px;
          height: 15%;
          font-size: 15px;
          margin-top: 1px;
        }
        .text-zi:first-child {
          margin-top: 3px;
        }

        .dui {
          width: 36px;
          height: 16px;
          line-height: 16px;
          text-align: center;
          border-radius: 15px;
          border: 1px solid rgb(148, 105, 93);
          position: absolute;
          font-weight: 500;
          color: rgb(148, 95, 63);
          bottom: 5px;
          right: 12px;
          font-size: 15px;
        }
      }
    }
  }
}
</style>