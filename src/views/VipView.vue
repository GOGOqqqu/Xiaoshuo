<template>
  <div class="vip">
    <!-- 未登录 -->
    <div class="shang" v-show="!yin">
      <div class="shang-shang">
        <div class="shang-top">
          <div class="img">
            <img src="../assets/touxianghuise.png" alt />
          </div>
          <div class="text">
            <div class="texts">未登录</div>
            <div class="texts huang">开通会员, 畅听海量好书</div>
          </div>
          <div class="hui">
            <router-view />
            <router-link to="/my/logn" class="h1">开通会员</router-link>
          </div>
        </div>

        <div class="shang-bottom">
          <div class="tx">
            <img src="../assets/vip_free.png" />
            <span>会员免费听</span>
          </div>
          <div class="tx">
            <img src="../assets/vip_free.png" />
            <span>会员等级身份</span>
          </div>
          <div class="tx">
            <img src="../assets/vip_free.png" />
            <span>双倍积分奖励</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 登录后 -->
    <div class="shang tt" v-show="yin">
      <div class="shang-shang">
        <div class="shang-top">
          <div class="img">
            <img src="../assets/touxianghuise.png" alt />
            <img class="vp" src="../assets/vip_tag.png" alt />
          </div>
          <div class="text">
            <div class="texts">夜猫子2956159</div>
            <div class="texts huang">VIPt特权还有五天到期</div>
          </div>
          <div class="hui">
            <!-- <router-view />
            <router-link to="/my/logn" class="h1">立即续费</router-link> -->

            <div class="h1">立即续费</div>
          </div>
        </div>

        <div class="shang-bottom">
          <div class="tx">
            <img src="../assets/vip_free.png" />
            <span>会员免费听</span>
          </div>
          <div class="tx">
            <img src="../assets/vip_free.png" />
            <span>会员等级身份</span>
          </div>
          <div class="tx">
            <img src="../assets/vip_free.png" />
            <span>双倍积分奖励</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 轮播图 -->
    <div class="tong">
      <van-swipe class="my-swipe" :autoplay="1500" indicator-color="white">
        <van-swipe-item v-for="(p, i) in lu" :key="i">
          <div class="da" @click="IdCh(p.audio_id)">
            <div class="v">
              <div class="da-yi">
                <img
                  class="imgs"
                  :src="`http://soundoss.anxiashuyuan.com/${p.cover}`"
                />
                <img class="jia" src="../assets/vip_tag.png" alt />
                <div class="tex">{{ p.audio_title }}</div>
                <div class="try">{{ p.description }}</div>
                <div class="ted">
                  <img src="../assets/mic.png" alt />
                  <span class="sp">{{ p.anchor_name }}</span>
                </div>
              </div>

              <div class="da-er">有更新-{{ p.last_update_chapter_name }}</div>

              <img class="bo" src="../assets/play_small.png" alt />
            </div>
          </div>
        </van-swipe-item>
      </van-swipe>
    </div>

    <!-- 新人畅听 -->
    <div class="ting">
      <div class="ting-s">
        <div class="t1">新人畅听</div>
        <div class="t2">七天免费会员体验</div>
        <div class="chang">
          <div class="shu changsn" v-for="(m, i) in xin.data" :key="i">
            <div class="tu" @click="IdCh(m.audio_id)">
              <img
                class="nm"
                :src="`http://soundoss.anxiashuyuan.com/${m.cover}`"
              />
            </div>
            <div class="shu-text">{{ m.audio_title }}</div>
          </div>
        </div>

        <div class="ling">
          <span class="ling-text" v-show="ling" @click="MnFn">免费领取</span>
          <span class="ling-texts" v-show="!ling" @click="MnQn">已领取</span>
        </div>

        <div class="huangs">
          <img @click="YiBi" src="../assets/refresh.png" alt />
          <div @click="YiBi" class="ing-text">换一批</div>
        </div>
      </div>
    </div>

    <!-- 重磅推荐 -->
    <div class="ting er">
      <div class="ting-s bai">
        <div class="t1 t6">重磅推荐</div>
        <div class="chang">
          <div class="shu" v-for="(k, i) in xin.data" :key="i">
            <div class="tu" @click="IdCh(k.audio_id)">
              <img
                class="nm"
                :src="`http://soundoss.anxiashuyuan.com/${k.cover}`"
              />
              <img class="vit" src="../assets/vip_tag.png" alt />
            </div>
            <div class="shu-text he">{{ k.audio_title }}</div>
          </div>
        </div>
      </div>
    </div>

    <!-- 原创精品 -->
    <div class="ting er">
      <div class="ting-s bai">
        <div class="t1 t6">原创精品</div>
        <div class="chang">
          <div class="shu" v-for="(k, i) in yuan.data" :key="i">
            <div class="tu" @click="IdCh(k.audio_id)">
              <img
                class="nm"
                :src="`http://soundoss.anxiashuyuan.com/${k.cover}`"
              />
              <img class="vit" src="../assets/vip_tag.png" alt />
            </div>
            <div class="shu-text he">{{ k.audio_title }}</div>
          </div>
        </div>
      </div>
    </div>

    <!-- 会员好书 -->
    <div class="tong pad">
      <div class="pb">
        <div class="huis">会员好书</div>
        <div
          class="da tus"
          v-for="(p, i) in hui.data"
          :key="i"
          @click="IdCh(p.audio_id)"
        >
          <div class="v to">
            <div class="da-yi">
              <img
                class="imgs image"
                :src="`http://soundoss.anxiashuyuan.com/${p.cover}`"
              />
              <img class="jia" src="../assets/vip_tag.png" alt />
              <div class="tex tous">{{ p.audio_title }}</div>
              <div class="try">{{ p.description }}</div>
              <div class="ted">
                <img src="../assets/mic.png" alt />
                <span class="sp">{{ p.anchor_name }}</span>
              </div>
            </div>
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
      ling: true,
      yin: false,
      lu: "", //轮播推荐位
      xin: "", //新人畅听
      chong: "", //重磅推荐
      yuan: "", //原创精品
      hui: "", //会员好书
    };
  },
  methods: {
    linkBookMain(id) {
      //跳转至书本详情
      this.$store.commit("setNavIndex", -1); //调用store的commit方法 直接调用mutations对state的数据进行修改 将app的nav隐藏

      this.$router.push({
        name: "bookMain",
        query: { id: id },
        // params: { id: id },
      });
    },
    // 请求数据
    BangA() {
      this.$axios({
        method: "post",
        url: "api/v2/port/chart/index?channel=2",
        params: {
          channel: 2,
        },
      })
        .then(({ data }) => {
          console.log("data", data);
          this.lu = data.data[0].data;
          this.xin = data.data[1];
          this.chong = data.data[2];
          this.yuan = data.data[3];
          this.hui = data.data[4];
        })
        .catch((error) => {
          console.log(error);
        });
    },
    // 显示与隐藏
    HuiA() {
      let a1 = JSON.parse(localStorage.getItem("b9"));
      console.log(typeof a1);
      if (a1 == "true") {
        // console.log(789);
        // this.yin = false;
        console.log(123);
        this.yin = true;
      }
      if (a1 == "" || a1 == undefined) {
        // console.log(789);
        this.yin = false;
      }
    },
    //点击获取ID
    IdCh(e) {
      console.log(e);
      this.linkBookMain(e);
    },
    MnFn() {
      this.ling = false;
    },
    MnQn() {
      this.ling = true;
    },
    YiBi() {
      let bb = document.querySelectorAll(".shu.changsn");
      console.log(bb);
      let array = [];
      function fn() {
        for (var i = 0; i < 4; i++) {
          let sui = Math.floor(Math.random() * 10);
          if (array.indexOf(sui) > -1) {
            fn();
          } else {
            array.push(sui);
          }
          if (array.length >= 4) {
            break;
          }
        }
        return array;
      }
      fn();
      console.log(array);
    },
  },

  beforeMount() {
    this.BangA();
    this.HuiA();
  },
};
</script>

<style lang="scss" scoped>
.vip {
  width: 100%;
  // margin-top: 6vh;
  // margin-bottom: 6vh;
  background-color: rgb(245, 245, 245);

  .ttt {
    border-bottom-left-radius: 40%;
    border-bottom-right-radius: 40%;
  }
  .shang {
    // width: calc(100% - 40px);
    height: 18vh;
    padding: 0 20px;
    background-color: rgb(72, 72, 72);
    overflow: hidden;

    .shang-shang {
      width: 100%;
      height: 18vh;
      background-image: url(../assets/vip_bg.png);
      background-size: 100% 100%;
      background: cover;
      border-radius: 30px;

      .shang-top {
        // width: calc(100% - 40px);
        padding: 0 20px;
        height: 8vh;
        display: flex;
        font-size: 12px;
        position: relative;

        .img {
          // width: 6vh;
          // height: 6vh;
          // margin-top: 2vh;
          position: relative;

          img {
            width: 6vh;
            height: 6vh;
            margin-top: 2vh;
          }

          .vp {
            position: absolute;
            bottom: -1px;
            left: 1vh;
            width: 4vh;
            height: 2vh;
            border-radius: 15px;
          }
        }

        .text {
          margin-top: 2vh;
          margin-left: 15px;
          .texts {
            line-height: 3vh;
          }

          .texts:first-child {
            color: #ffffff;
          }
          .huang {
            color: rgb(248, 224, 200, 0.8);
          }
        }

        .hui {
          position: absolute;
          top: 3.5vh;
          right: 10px;
          padding: 3px 5px;

          background-color: rgb(248, 224, 200);
          border-radius: 15px;
        }
        .h1 {
          color: rgb(53, 50, 50) !important;
        }
      }

      .shang-bottom {
        width: 100%;
        margin-top: 3vh;
        line-height: 3vh;
        display: flex;
        font-size: 12px;
        .tx {
          width: calc(100% / 3);
          height: 100%;
          align-items: center;
          line-height: 3vh;
          justify-content: center;
          height: 3vh;
          display: flex;
          color: rgb(248, 224, 200, 0.7);

          img {
            width: 3vh;
            height: 3vh;
          }
          span {
            display: block;
            line-height: 3vh;
          }
        }
      }
    }
  }

  .tong {
    width: 100%;
    // height: 18vh;
    margin-top: 2vh;
    // background-color: aqua;
    overflow: hidden;

    .my-swipe .van-swipe-item {
      height: 18vh;
      font-size: 20px;
      text-align: center;
    }

    .da {
      text-align: left;
      // width: calc(100% - 40px);
      padding: 0px 20px;
      height: 18vh;
      .v {
        // width: calc(100% - 20px);
        padding: 0px 10px;
        height: 17vh;
        border-radius: 15px;
        background-color: #ffffff;
        border: 1px solid #ecd9d9;
        padding-top: 2vh;
        position: relative;

        .da-yi {
          width: 100%;
          height: 10vh;
          margin-bottom: 1vh;
          position: relative;

          .jia {
            position: absolute;
            top: 0;
            left: 0;
            border-radius: 15px;
            width: 30px;
            height: 15px;
          }
          .imgs {
            width: 10vh;
            height: 10vh;
          }
          div {
            width: 66%;
            position: absolute;
            line-height: 3.33vh;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            left: 12vh;
          }
          .tex {
            font-size: 20px;
            top: 0vh;
            font-weight: 600;
          }
          .try {
            font-size: 13px;
            top: 3.33vh;
            color: rgb(150, 150, 150);
            font-weight: 600;
          }

          .ted {
            color: rgb(150, 150, 150);
            font-weight: 600;
            top: 6.66vh;
            font-size: 15px;
            display: flex;
            justify-content: left;
            align-items: center;

            img {
              // left: 19px;
              // display: block;
              // margin-top: 5px;
              width: 19px;
              height: 19px;
            }

            .sp {
              margin-bottom: 5px;
            }
          }
        }

        .da-er {
          font-size: 15px;
          width: 88%;
          line-height: 4vh;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          color: rgb(53, 52, 55);
        }
        .bo {
          position: absolute;
          right: 30px;
          bottom: 6px;
          width: 15px;
          height: 15px;
        }
      }
    }
  }

  .ting {
    // width: calc(100% - 40px);
    padding: 0 20px;
    height: 58vh;
    margin-top: 2vh;

    .ting-s {
      // width: calc(100% - 40px);
      padding: 0 20px;
      height: 100%;
      background-color: rgb(72, 72, 72);
      border-radius: 15px;

      .t1 {
        width: 100%;
        height: 8vh;
        line-height: 10vh;
        font-size: 20px;
        color: rgb(248, 224, 200, 0.7);
      }

      .t2 {
        line-height: 2vh;
        font-size: 13px;
        color: rgb(248, 224, 200, 0.7);
      }

      .chang {
        width: 100%;
        height: 36vh;
        overflow: hidden;
        // position: fixed;
        // justify-content: center;
        // align-items: center;
        .shu {
          width: 30%;
          height: 17vh;
          margin-top: 1vh;
          // background-color: #000000;
          float: left;

          .tu {
            width: 100%;
            height: 13vh;
            border-radius: 15%;
            overflow: hidden;
            position: relative;

            .nm {
              width: 100%;
              height: 13vh;
              border-radius: 15%;
            }

            .vit {
              position: absolute;
              top: 0px;
              left: 1px;
              width: 30px;
              height: 15px;
              border-radius: 15%;
            }
          }
          .shu-text {
            width: 100%;
            line-height: 4vh;
            height: 4vh;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            color: #ffffff;
            font-weight: 600;
          }
        }
        .shu:nth-child(4) {
          float: left;
        }
        .shu:nth-child(2) {
          margin-left: 5%;
        }
        .shu:nth-child(5) {
          margin-left: 5%;
        }
        .shu:nth-child(3n) {
          float: right;
        }
      }

      .ling {
        width: 100%;
        margin-top: 2vh;
        height: 4vh;
        display: flex;
        text-align: center;
        justify-content: center;

        .ling-text {
          line-height: 4vh;
          display: block;
          width: 35vmin;
          padding: 0px 22px;
          background-color: rgb(240, 198, 155);
          border-radius: 15px;
          margin: 0 auto;
          color: rgb(94, 89, 83);
        }
        .ling-texts {
          line-height: 4vh;
          display: block;
          width: 35vmin;
          padding: 0px 22px;
          background-color: rgb(153, 162, 169);
          border-radius: 15px;
          margin: 0 auto;
          color: rgb(255, 255, 255);
        }
      }

      .huangs {
        width: 100%;
        margin-top: 1vh;
        margin-bottom: 1vh;
        height: 3vh;
        display: flex;
        justify-content: flex-end;
        align-items: center;

        img {
          width: 3vh;
          height: 3vh;
          margin-right: 1vh;
        }

        .ing-text {
          width: 6vh;
          line-height: 3vh;
          height: 3vh;
          color: #ffffff;
        }
      }
    }
  }

  .er {
    height: 45vh;
  }

  .bai {
    background-color: #ffffff !important;
  }
  .t6 {
    color: rgb(232, 199, 161) !important;
  }
  .he {
    color: #000000 !important;
  }
  .tus {
    height: 14vh !important;
  }
  .to {
    // width: calc(100% - 30px) !important;
    padding: 0px 15px !important;
    height: 12vh !important;
    border: none !important;
  }
  .pad {
    // width: calc(100% - 40px);
    padding: 0px 20px;
  }
  .pb {
    overflow: none !important;
    border-radius: 15px;
    background-color: #ffffff !important;
  }
  .tus {
    width: 100% !important;
    padding: 0px !important;
  }
  .image {
    border-radius: 10px;
  }
  .huis {
    // width: calc(100% - 10px);
    padding-left: 10px;
    height: 6vh;
    line-height: 7vh;
    font-size: 20px;
    color: rgb(232, 199, 161);
  }
  .tous {
    font-size: 18px !important;
  }
}
</style>
