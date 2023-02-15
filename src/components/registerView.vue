<template>
  <div class="logn" key="u88">
    <div class="box">
      <div class="header">
        <div class="hui" @click="McM">&lt;</div>
        <div class="shizi">手机号注册</div>
      </div>
      <!-- 注册 -->
      <div class="deng" key="b334">
        <form action>
          <div class="text3">
            <div class="text1">
              <input type="number" class="inp zhang" placeholder="请输入您的手机号" v-model="str" @blur="animate" max="11" />
              <img class="text-img" src="../assets/phone.png" />
            </div>
            <div class="text1">
              <input type="password" class="inp mi" v-model="pwd" placeholder="请输入您的密码"/>
              <img class="text-img" src="../assets/pass.png" />
            </div>
            <div class="text5">
              <input type="text" class="inps" v-model="yi" placeholder="请输入您的验证码" />
              <!-- <img class="text-img" src="../assets/pass.png" /> -->
              <div class="yinn" @click="HuoQu">{{stru}}</div>
            </div>
          </div>

          <button @click="LognA">立即注册</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import { Dialog } from "vant";
export default {
  data() {
    return {
      str: '',
      pwd: '',
      yi: '',
      stru:'获取验证码'
    };
  },
  methods: {
    McM() {
      this.$router.go(-1);
    },
    animate() {
      var tt=/^1\d{10}$/;
      let str1=this.str
      if(tt.test(str1)){
        console.log('输入成功');
      }else{
        Dialog({ message: '抱歉手机号码不合法' });
      }
    },
    HuoQu() {
      var code = [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z"
      ];
      var b1 = [];
      var b4 = "0oO1iIjJl";
      for (var a = 1; a < 7; a++) {
        var bb = Math.floor(Math.random() * code.length);
        b1.push(code[bb]);
      }
      var b2 = b1.join("");
      //先随机六个数出来
      //再将敏感词装换为a
      for (var i = 0; i < b2.length; i++) {
        for (var j = 0; j < b4.length; j++) {
          if (b4[j] !== b2[i]) {
            b2 = b2.replace(b4[j], "a");
          }
        }
      }
      // console.log('b1 ==>',b1);
      // console.log('b2 随机生成6位验证码 ==>',b2);
      this.stru = b2;
      console.log(this.stru);
    },
    LognA() {
      console.log(this.str, this.pwd);
      let array = [];
      let dui = {
        id: this.str,
        password: this.pwd
      };
      array.push(dui)
      console.log(array);
      if (this.stru.toLowerCase() == this.yi || this.stru == this.yi && this.stru !== ''){
        let array1=JSON.stringify(array)
        localStorage.setItem("ku", array1);
        Dialog.alert({
          title: "注册成功！",
          message: "即将跳转到登录的页面"
        }).then(() => {
          this.$router.push("/my/logn");
        });

      }else{
        Dialog.alert({
          title: "",
          message: "抱歉您的验证码错误！"
        }).then(() => {
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.logn {
  position: fixed;
  z-index: 63;
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

      .yinn {
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

    button {
      width: 100%;
      height: 6vh;
      margin-top: 3vh;
      display: block;
      border-radius: 15px;
      border: none;
      background-color: rgb(255, 220, 183);
    }
  }
}
</style>