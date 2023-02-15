<template>
  <div class="logn">
    <div class="da">
      <div class="header">
        <van-icon class="hui" @click="McM" name="arrow-left" />
        <div class="shizi">设置</div>
      </div>

      <div class="text">
        <van-cell title="个人资料" is-link />
      </div>
      <div class="text">
        <van-cell title="账号绑定" is-link />
      </div>
      <div class="text">
        <van-cell title="手机绑定" is-link />
      </div>
      <div class="text">
        <van-cell title="设置密码" is-link />
      </div>
      <div class="text t1">
        <van-cell title="注销账号" is-link />
      </div>
      <div class="text t1">
        <van-cell title="关于" is-link />
      </div>
      <div class="text">
        <van-cell title="当前版本" value="V2.0.6" is-link />
      </div>
      <div class="text">
        <van-cell title="清除缓存" value="5.57MB" is-link />
      </div>

      <div class="deng" v-show="!show">
        <router-view />
        <router-link to="/my/logn">
          <p>立即登录</p>
        </router-link>
      </div>
      <div class="deng" v-show="show" @click="JumpB">
        <p>退出登录</p>
      </div>
    </div>
  </div>
</template>
<script>
import { Dialog } from "vant";

export default {
  data() {
    return {
      show: false
    };
  },
  methods: {
    McM() {
      this.$router.push({
        name: "my"
      });
    },

    // 登录
    JumpB() {
      localStorage.setItem("b9", "[]");
      Dialog.alert({
          title: "退出登录成功",
          message: "即将跳转到我的页面"
        }).then(() => {
          this.$router.push({ name: "my" });
        });
    },
    ShonM() {
      //本地库 key明bb
      let a1 = JSON.parse(localStorage.getItem("b9"));
      if (a1 == "") {
        console.log("为不登录状态!");
        this.show = false;
      } else {
        this.show = true;
        console.log("登录成功！");
      }
    }
  },
  beforeMount() {
    this.ShonM();
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
    text-align: left;

    .header {
      line-height: 8vh;
      font-size: 25px;
      width: (100% -32px);
      padding: 0px 16px;

      height: 8vh;
      text-align: center;
      justify-content: center;
      .hui {
        float: left;
        line-height: 8vh;
      }
      .shizi {
        font-size: 20px;
        // position: absolute;
      }
    }
    .text {
      width: 100%;
      height: 7vh;
      line-height: 7vh;
      font-size: 18px;
    }
    .t1 {
      border-bottom: 2px solid #d6c5c5;
    }
    .van-cell {
      padding: 17px 17px !important;
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
        color: #ffffff;
        background-color: rgb(248, 82, 37);
      }
    }
  }
}
</style>