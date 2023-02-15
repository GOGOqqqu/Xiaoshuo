<template>
  <div class="logn">
    <div class="da">
      <div class="header">
        <van-icon class="hui" @click="McM" name="arrow-left" />
        <div class="shizi">兴趣管理</div>
      </div>
      <div class="xing">
        <div class="xiang-img">
          <div class="img1" @click="HuangA">
            <img v-show="!ming" src="../../assets/huisenvzi.png" alt />
            <img v-show="ming" src="../../assets/nvzicaise.png" alt />
          </div>
          <div class="img2" @click="HuangB">
            <img v-show="an" src="../../assets/huisenanzi.png" alt />
            <img v-show="!an" src="../../assets/nanzicaise.png" alt />
          </div>

          <div class="text"></div>
          <div class="texts">
            <div class="texts-yi">
              <div class="yuans actives" @click="DianJi">00后</div>
              <div class="yuans" @click="DianJi">95后</div>
            </div>
            <div class="texts-yi">
              <div class="yuans" @click="DianJi">90后</div>
              <div class="yuans" @click="DianJi">85后</div>
            </div>
            <div class="texts-yi">
              <div class="yuans" @click="DianJi">80后</div>
              <div class="yuans" @click="DianJi">75后</div>
            </div>
          </div>

          <div class="xia-bu">
            <div class="xia-nei">
            <router-view />
            <router-link to="/my/xinqu" class="bais">下一步</router-link></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
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
    DianJi(e) {
      let yu = document.querySelector(".yuans.actives");
      yu.classList.remove("actives");
      // console.log(yu);

      let currentName = e.currentTarget.getAttributeNode("class").nodeValue;
      console.log("currentName ==> ", currentName);
      if (currentName == "yuans actives") {
        console.log("已经处于激活状态");
        return;
      } else {
        e.currentTarget.classList.add("actives");
        console.log(e.currentTarget);
      }
    },
    HuangA() {
      this.ming = true;
      this.an = true;
    },
    HuangB() {
      this.ming = false;
      this.an = false;
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
        height: 46%;
      }

      .texts {
        width: 100%;
        height: 54%;

        .texts-yi {
          width: 100%;
          height: 4vh;
          //  position: fixed;
          //  justify-content: space-between;
          //  align-items: center;

          .yuans {
            width: 40%;
            height: 4vh;
            line-height: 4vh;
            font-size: 16px;
            text-align: center;
            background-color: rgb(241, 241, 241);
            border-radius: 15px;
          }

          .yuans:first-child {
            float: left;
            margin-left: 15px;
          }
          .yuans:last-child {
            float: right;
            margin-right: 15px;
          }
        }
        .texts-yi:nth-child(2) {
          margin-top: 0.8vh;
        }
        .texts-yi:nth-child(3) {
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