
<template>
  <div class="logn">
    <div class="da">
      <div class="header">
        <van-icon class="hui" @click="McM" name="arrow-left" />
        <div class="shizi">兴趣选择</div>
      </div>
      <div class="xing">
        <div class="xiang-img">
          <div class="text"><div class="ran"></div>推荐关注</div>
          <div class="texts">
            <div class="texts-yi">
              <div class="yuans actives" @click="DianJi">豪门总裁</div>
              <div class="yuans" @click="DianJi">女强玄幻</div>
              <div class="yuans vn" @click="DianJi">穿越架空</div>

            </div>
            <div class="texts-yi">
              <div class="yuans" @click="DianJi">种田经商</div>
              <div class="yuans" @click="DianJi">宅斗权谋</div>
            </div>
          </div>

          <div class="xia-bu"  @click="MnB" to="/my">
            <div class="xia-nei" >
              <router-view />
              <router-link  class="bais" to="/my">完成</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Toast } from 'vant';

// Vue.use(Toast);
export default {
  data() {
    return {
      ming: true,
      an: true
    };
  },
  methods: {
    McM() {
      this.$router.go(-1);
    },
    MnB() {
      Toast.success('选择成功');
    },
    DianJi(e) {
        e.currentTarget.classList.add("actives");
    }
  }
};
</script>

<style lang="scss" scoped>
.actives {
  background-color: rgb(255, 136, 16) !important;
  color: #fff;
}
.bais {
  color: rgb(255, 255, 255);
}
.logn {
  position: fixed;
  z-index: 60;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  background-color: rgb(255, 255, 255);

  .da {
    width: 100%;
    height: 100%;
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

    .xing {
      width: (100% -60px);
      padding: 0 30px;
      height: 25vh;
      margin-top: 15vh;
      position: relative;
      // background-color: aqua;
      .xiang-img {
        width: 100%;
        height: 25vh;

        // background-color: rgb(45, 177, 177);
      }

      img {
        display: block;
        width: 45%;
        text-align: center;
      }

      .img1 {
        width: 45%;
        float: left;

        img {
          float: right;
          margin-right: 25%;
        }
      }
      .img2 {
        width: 45%;
        float: right;

        img {
          margin-left: 25%;
        }
      }

      .text {
        width: 100%;
        height: 33%;
        font-size: 20px;

        .ran {
          float: left;
          width: 5px;
          height: 5px;
          margin-top: 10px;
          margin-right: 5px;
          background-color: red;
          border-radius: 50%;
        }
      }

      .texts {
        width: 100%;
        height: 67%;

        .texts-yi {
          width: 100%;
          height: 4vh;
          

          .yuans {
            width: 30%;
            float: left;
            height: 4vh;
            line-height: 4vh;
            font-size: 16px;
            text-align: center;
            background-color: rgb(241, 241, 241);
            border-radius: 15px;
          }
          .vn {
            margin-left: 5%;
          }

          // .yuans:first-child {
          //   float: left;
          // }
          .yuans:nth-child(2) {
            float: right;
          }
        }
        .texts-yi:nth-child(2) {
          margin-top: 0.8vh;
        }

      }

      .xia-bu {
        width: (100% -60px);
        height: 6vh;
        padding: 0 30px;
        margin-top: 7vh;
        .xia-nei {
          width: 30%;
          height: 3vh;
          border-radius: 15px;
          line-height: 3vh;
          margin: 0 auto;
          color: #fff;
          text-align: center;
          background-color: rgb(232, 59, 59);
        }
      }
    }
  }
}
</style>