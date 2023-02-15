<template>
  <div class="logn" key="o787">
    <div class="box">
      <div class="header">
        <div class="hui" @click="McM">&lt;</div>
        <div class="shizi">登录</div>
      </div>
      <!-- 登录 -->
      <div class="deng" key="a334">
        <form action>
          <div class="text3">
            <div class="text1">
              <input type="number" v-model="zhang" class="inp nn" placeholder="请输入您的手机号" />
              <img class="text-img" src="../assets/phone.png" />
            </div>
            <div class="text1">
              <input type="password" v-model="mi" class="inp mn" placeholder="请输入您的密码" min="6" />
              <img class="text-img" src="../assets/pass.png" />
            </div>
          </div>

          <div class="btn" @click="LognA">登录</div>
        </form>
      </div>
      <div class="miam">
        <router-view />
        <router-link class="zhuce active" to="/my/logn/register">立即注册</router-link>
        <router-view />
        <router-link class="lun" to="/my/logn/forgotpassword">忘记密码？</router-link>
      </div>
    </div>
  </div>
</template>
<script>
import { Dialog } from "vant";
export default {
  data() {
    return {
      tus: true,
      shows: true,
      zhang: "",
      mi: ""
    };
  },
  methods: {
    McM() {
      this.$router.go(-1);
    },
    LognA() {
      let re = JSON.parse(localStorage.getItem("ku"));
      console.log(re);
      if (this.zhang == re[0].id && this.mi == re[0].password) {
        Dialog.alert({
          title: "登录成功",
          message: "即将跳转到我的页面"
        }).then(() => {
          this.$router.push({ name: "my" });
        });
        // this.$router.push({
        //   path:'/my',
        //   query: {
        //     shows:true,
        //     id:1
        //   }
        // })

        let array5 = "true";
        let array1 = JSON.stringify(array5);
        localStorage.setItem("b9", array1);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.logn {
  position: fixed;
  z-index: 62;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  background-color: rgb(255, 255, 255);
  // overflow: hidden;
  .box {
    width: (100% -40px);
    height: 100%;
    padding: 0 20px;
    overflow: hidden;

    .header {
      line-height: 8vh;
      font-size: 25px;
      width: 100%;
      height: 8vh;
      text-align: center;
      justify-content: center;
      .hui {
        float: left;
      }
      .shizi {
        font-size: 20px;
        // position: absolute;
      }
    }
    .text3 {
      margin-top: 2vh;
      width: 100%;
      overflow: hidden;

      // background-color: aqua;

      .text1 {
        width: 100%;
        height: 6vh;
        position: relative;
        overflow: hidden;
        // background-color: #e63937;

        .inp {
          padding: 0;
          margin: 0;
          width: 92%;
          height: 6vh;
          border: none;
          border-bottom: 1px solid #bebea5;
          padding-left: 8%;
          font-size: 15px;
        }
        .text-img {
          width: 3vh;
          height: 4vh;
          position: absolute;
          left: 0px;
          top: 1.25vh;
        }
      }
      .text5 {
        width: 100%;
        height: 6vh;
        position: relative;
      }
      .text5 .inps {
        width: 100%;
        height: 6vh;
        padding: 0;
        margin: 0;
        border: none;
        border-bottom: 1px solid #bebea5;
        font-size: 15px;
      }

      .yin {
        text-align: center;
        width: 25%;
        height: 4vh;
        line-height: 4vh;
        margin-top: 1.5vh;
        background-color: #ebe9e9;
        color: rgb(248, 181, 38);
        position: absolute;
        z-index: 5px;
        top: 0;
        right: 0;
        font-size: 14px;
        border-radius: 15px;
      }
    }

    .btn {
      width: 100%;
      height: 6vh;
      line-height: 6vh;
      text-align: center;
      margin-top: 3vh;
      display: block;
      border-radius: 15px;
      border: none;
      background-color: rgb(255, 200, 183);
    }

    .miam {
      width: 100%;
      height: 3vh;
      margin-top: 2vh;
      position: relative;

      .zhuce {
        position: absolute;
        left: 0%;
      }
      .lun {
        position: absolute;
        right: 0px;
      }
      .active {
        color: orange;
      }
    }
  }
}
</style>