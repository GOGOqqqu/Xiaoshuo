<template>
  <div
    class="bookMainPage"
    :style="{
      background: `url('http://soundoss.anxiashuyuan.com/${book.cover}') center center`,
    }"
  >
    <div class="bookMainHeader">
      <div class="left">
        <div class="goBack" @click="goBack">
          <img src="@/assets/img/bookMain/goBack.png" />
        </div>
        <div class="title van-ellipsis">{{ book.audio_title }}</div>
      </div>
      <div class="right">
        <div class="collection">
          <span class="icon">+</span>
          收藏
        </div>
        <div class="play" @click="linkPlay">
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </div>
      </div>
    </div>
    <div class="bookMainAbout">
      <div class="bookMainAboutMessage">
        <div class="img">
          <img :src="`http://soundoss.anxiashuyuan.com/${book.cover}`" />
        </div>
        <div class="Main">
          <div class="title van-ellipsis">{{ book.audio_title }}</div>
          <div class="star">
            <van-rate
              v-model="book.star"
              readonly
              size="14px"
              color="#ff880d"
            />
            <div class="num">{{ book.star * 2 + ".0" }}</div>
          </div>
          <div class="name van-ellipsis">{{ book.anchor_name }}</div>
        </div>
        <div class="collection"><span class="icon">+</span>收藏</div>
      </div>
      <div class="bookMainAboutText">
        <!-- {{ book.description }} -->
        <van-collapse v-model="activeNames" :border="false">
          <van-collapse-item :title="book.descriptionFew" name="1">
            <div class="Main">
              {{ book.descriptionMuch }}
            </div>
          </van-collapse-item>
        </van-collapse>
      </div>
    </div>
    <div class="BookMainBottom">
      <van-tabs
        v-model="active"
        color="#ff880d"
        background="#fff"
        animated
        sticky
        swipeable
        offset-top="6vh"
        title-active-color="#ff880d"
        title-inactive-color="#000"
      >
        <van-tab title="节目">
          <div class="BookMainBottomItem Program">
            <van-sticky>
              <div class="ProgramHeader">
                <div class="left" @click="linkPlayAndPlay">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="10"
                    fill="currentColor"
                    class="bi bi-play-circle-fill"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"
                    />
                  </svg>
                  <span class="button" v-if="playState">暂停播放</span>
                  <span class="button" v-else>继续播放</span>
                  <span class="num"
                    >{{ book.sylloge == 0 ? "" : book.sylloge }}集</span
                  >
                </div>
                <div class="right">
                  <div class="button">
                    <img src="@/assets/img/bookMain/down.png" />
                    批量下载
                  </div>
                  <div class="button">
                    <img src="@/assets/img/bookMain/xuanji.png" />
                    选集
                  </div>
                </div>
              </div>
            </van-sticky>

            <div class="ProgramMain">
              <van-list
                v-model="loading"
                :finished="finished"
                finished-text="没有更多了"
                @load="onLoad"
                :immediate-check="false"
                offset="120"
              >
                <ProgramMainCard
                  v-for="(item, index) in book.list"
                  :key="index"
                  :title="item.chapter_title"
                  :audio="item.content"
                  :date="item.create_date"
                  :num="item.click"
                  :playTime="item.time"
                  :index="index"
                  :src="item.content"
                  :img="`http://soundoss.anxiashuyuan.com/${book.cover}`"
                />
              </van-list>
            </div>
          </div>
        </van-tab>
        <van-tab title="相似">
          <div class="BookMainBottomItem Similar">
            <div class="SimilarHeader">
              <bookCard
                v-for="item in book.Similar"
                :key="item.audio_id"
                :name="item.anchor_name"
                :id="item.audio_id"
                :img="item.cover"
                :title="item.audio_title"
                :description="item.description"
              />
            </div>
            <div class="SimilarFooter">
              <banQuanFooter :name="book.cp_name" />
              <!-- 版权信息组件 -->
            </div>
          </div>
        </van-tab>
        <van-tab title="评论">
          <div class="BookMainBottomItem comment">
            <div class="input">
              <input type="text" />
            </div>
            <div class="commentItem">
              <bookComment
                v-for="(item, index) in book.comment"
                :key="index"
                :name="item.nick_name"
                :img="item.user_image"
                :star="item.star"
                :text="item.content"
                :time="item.create_date"
                :like="item.like"
                :comment="item.data.length"
              />
              <!-- name: String, img:String, star:Number, text:String, time:String,
              like:Number, comment:Number -->
            </div>
            <div class="footer">
              <banQuanFooter :name="book.cp_name" />
            </div>
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import ProgramMainCard from "@/components/bookMain/ProgramMainCard.vue"; //引入节目项组件
import banQuanFooter from "@/components/bookMain/banQuanFooter.vue"; //引入版权信息组件
import bookCard from "@/components/bookMain/bookCard.vue"; //引入书本卡片组件
import bookComment from "@/components/bookMain/bookComment.vue"; //引入评论组件

import { mapState } from "vuex";
import { mapMutations } from "vuex";

export default {
  name: "bookMain",
  data() {
    return {
      book: {
        anchor_name: "",
        audio_title: "",
        star: 0,
        descriptionFew: "", //少的
        descriptionMuch: "", //多点
        cp_name: "",
        cover: "",
        sylloge: 0, //总集
        list: [], //遍历总集数组
        Similar: [], //遍历相似列表数组
        comment: [], //评论区数组
        id: 0, //默认值为0
        page: 1, //当前已加载的页数
      },
      activeNames: [""],
      active: 0,
      loading: false, //加载状态
      finished: false, //是否已加载完成
    };
  },

  // created() {
  //   this.sendBookMain(); //请求书本主数据
  // },

  activated() {
    //路由激活时触发
    console.log("激活组件钩子");
    if (this.book.id == 0 || this.book.id != this.bookId) {
      //在默认状态和请求新的书籍数据时 调用获取数据方法 当进入同一个书籍的页面时 不请求数据
      this.sendBookMain(); //请求书本主数据
    }
  },

  beforeRouteLeave(to, from, next) {
    console.log("to", to);
    console.log("from", from);

    if (to.name != "HomePage") {
      next();
    } else {
      this.$store.commit("setNavIndex", 1); //调用store的commit方法 直接调用mutations对state的数据进行修改 将app的nav显示
      next();
    }
  },
  methods: {
    ...mapMutations("playPage", ["PLAY", "set_list", "set_sylloge"]),

    goBack() {
      // console.log("点击了返回按钮");
      this.$router.go(-1);
    },

    linkPlay() {
      this.$router.push("/playPage");
      this.$store.commit("setNavIndex", -1); //调用store的commit方法 直接调用mutations对state的数据进行修改 将app的nav隐藏
    },

    linkPlayAndPlay() {
      this.$router.push("/playPage");
      this.$store.commit("setNavIndex", -1); //调用store的commit方法 直接调用mutations对state的数据进行修改 将app的nav隐藏
      this.PLAY(); //
    },

    onLoad() {
      //触底懒加载事件
      // 异步更新数据

      console.log("进行加载");

      this.$axios({
        //获取总集
        method: "post",
        url: `/api/v2/port/audio/directory?audio_id=${this.bookId}&page=${this.book.page}&rows=100`,
      })
        .then(({ data }) => {
          console.log("data", data.data);
          this.book.sylloge = data.data.extra.count; //获得总集
          this.set_sylloge(data.data.extra.count);
          this.book.list = [...this.book.list, ...data.data.list]; //拼接遍历数组
          this.set_list([...this.book.list, ...data.data.list]);
          // 加载状态结束
          this.loading = false;
          // 数据全部加载完成
          if (this.book.page * 100 >= data.data.extra.count) {
            //如果已加载完所有内容 不再进行请求
            this.finished = true;
          }
          this.book.page++;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    sendBookMain() {
      //请求书本主数据
      this.$axios({
        method: "post",
        // url: "/v2/port/audio/detail",
        url: "/api/v2/port/audio/detail",

        params: {
          audio_id: this.bookId, //作品的id、
        },
      })
        .then(({ data }) => {
          console.log("data", data.data);
          this.book.anchor_name = data.data.anchor_name; //说书人
          this.book.audio_title = data.data.audio_title; //书名
          this.book.star = data.data.star / 2; //评分
          this.book.descriptionFew = data.data.description.match(/\S+/g)[0]; //简介
          this.book.descriptionMuch = data.data.description
            .match(/\S+/g)
            .slice(1)
            .join("\r"); //简介

          this.book.cp_name = data.data.cp_name; //作品数字版权  (评论页)
          this.book.cover = data.data.small_cover; //简略图
        })
        .catch((error) => {
          console.log(error);
        });

      this.$axios({
        //此处加载已放在懒加载中完成 包括首次加载
        //获取总集
        method: "post",
        url: `/api/v2/port/audio/directory?audio_id=${this.bookId}&page=1&rows=100`,
      })
        .then(({ data }) => {
          console.log("data", data.data);
          this.book.sylloge = data.data.extra.count; //获得总集
          this.set_sylloge(data.data.extra.count);
          this.book.list = data.data.list;
          this.set_list(data.data.list);
          this.book.page++;
          //data.data.extra.count 最新集
          //data.data.list  总集
        })
        .catch((error) => {
          console.log(error);
        });

      this.$axios({
        //获得相似列表
        method: "post",
        url: "/api/v2/port/audio/similar",
        params: {
          audio_id: this.bookId, //作品的id、
        },
      })
        .then(({ data }) => {
          console.log("Similar", data.data);
          this.book.Similar = data.data;
        })
        .catch((error) => {
          console.log(error);
        });

      this.$axios({
        //获取评论
        method: "post",
        url: `/api/v2/port/comment/comments?audio_id=${this.bookId}`,
      })
        .then(({ data }) => {
          console.log("comment", data.data);
          this.book.comment = data.data.list;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  computed: {
    bookId() {
      return this.$route.query.id;
      // return this.$route.params.id;
    },

    ...mapState("playPage", ["duration", "playTime", "playState"]), //向vuex的playPage模块中的state取值
  },
  mounted() {
    console.log("this.$router", this.$route);
  },

  components: {
    ProgramMainCard,
    banQuanFooter,
    bookCard,
    bookComment,
  },
};
</script>

<style lang="scss">
.bookMainPage {
  width: 100vmin;
  // height: 100vmax;

  .bookMainHeader {
    width: 100%;
    height: 8vmax;
    background-color: rgb(153, 153, 153, 0);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
    padding-top: 2vmax;
    padding-bottom: 3vmax;

    display: flex;
    align-items: center;
    justify-content: space-between;

    .left {
      margin-left: 2vmin;
      height: 100%;
      display: flex;
      .goBack {
        height: 100%;
        width: 6vmax;
        display: flex;
        align-items: center;
        justify-content: center;

        img {
          height: 50%;
          display: block;
        }
      }

      .title {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 4vmin;
        font-weight: bold;
        color: #fff;
      }
    }

    .right {
      margin-right: 2vmin;
      height: 100%;
      display: flex;
      align-items: center;
      .collection {
        font-size: 3vmin;
        display: flex;
        align-items: center;
        justify-content: center;
        color: rgb(255, 255, 255, 0);
        padding: 1vmin 5vmin;
        border-radius: 16px;
        background-color: rgb(255, 136, 13, 0);

        .icon {
          margin-right: 1vmin;
          font-size: 6vmin;
        }
      }

      .play {
        width: 10vmin;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        // background-color: #ddd;
        margin-left: 3vmin;
        .line:nth-child(1) {
          animation-delay: 0.4s;
          margin-right: 1vmin;
        }

        .line:nth-child(2) {
          animation-delay: 0.8s;
          margin-right: 1vmin;
        }

        .line {
          width: 1vmin;
          height: 30%;
          background-color: #fff;
          animation: line 1s linear infinite;

          @keyframes line {
            0% {
              height: 50%;
            }
            50% {
              height: 0;
            }
            100% {
              height: 50%;
            }
          }
        }
      }
    }
  }

  .bookMainAbout {
    width: 100%;
    // height: 33vmax;
    // background-color: deeppink;
    padding-top: 6vmax;
    padding-bottom: 3vmax;
    backdrop-filter: blur(60px) saturate(50%) contrast(120%); //模糊度 明度 对比度
  }

  .bookMainAboutMessage {
    height: 15.8vmax;
    width: 100%;
    background-color: transparent;
    display: flex;
    align-items: center;
    padding: 0 3vmin;
    position: relative;
    padding-top: 2vmax;

    .img {
      height: 80%;
      aspect-ratio: 1/1; //宽高1/1
      // background-color: chartreuse;
      img {
        width: 100%;
        height: 100%;
        display: block;
        border-radius: 8px;
      }
    }

    .Main {
      height: 80%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      padding: 1vmax 2vmin 0;
      padding-left: 3vmin;

      .title {
        font-size: 4vmin;
        font-weight: 400;
        color: #fff;
      }

      .star {
        display: flex;
        align-items: center;
        // justify-content: center;
        color: #fff;

        .num {
          margin-left: 2vmin;
        }
      }

      .name {
        font-size: 3vmin;
        font-weight: 200;
        transform: scale(0.9) translate(-3vmin);
        color: #fff;
      }
    }

    .collection {
      position: absolute;
      bottom: 10%;
      right: 3%;
      color: #000;
      background-color: #ddd;
      padding: 0.8vmax 4vmin;
      font-size: 3vmin;
      border-radius: 4vmin;
      display: flex;
      align-items: center;

      .icon {
        font-size: 5vmin;
        margin-right: 1vmin;
      }
    }
  }

  .bookMainAboutText {
    // height: 20%;
    width: 100%;
    // background-color: chartreuse;
    padding-top: 2vmax;
    // padding: 1.2vmax 3vmin;

    .van-cell {
      background-color: transparent; //去除自带的白色背景
      color: #fff;
    }

    .descriptionMuch {
      background-color: transparent; //去除自带的白色背景
    }

    .van-cell::after {
      border-bottom: none; //去除自带的底边框
    }

    .van-cell__right-icon {
      color: #fff; //更改下拉箭头的默认颜色
    }

    .van-collapse-item__content {
      background-color: transparent; //去除自带的白色背景
    }

    // .van-collapse-item {
    //   // z-index: 99;
    // }

    .Main {
      background-color: transparent; //去除自带的白色背景
      color: #fff;
      letter-spacing: 2px;
      padding: 0.5vmax 2vmin;
      line-height: 4.5vmax;
    }
  }
  .BookMainBottom {
    //主模块
    width: 100%;
    // height: 3000px;
    // background-color: chartreuse;

    .BookMainBottomItem {
      //每个标签页内容
      width: 100%;
      height: calc(94vmax - 40px);
      background-color: #fff;
      overflow-y: auto;

      &.Program {
        //节目模块

        .ProgramHeader {
          height: 5vmax;
          width: 100%;
          background-color: #f5f5f5;
          position: fixed;
          top: -1px;
          left: 0;
          font-size: 1vmax;
          padding: 0 4%;
          z-index: 9;

          display: flex;
          align-items: center;
          justify-content: space-between;

          .left {
            display: flex;
            align-items: center;

            svg {
              margin-right: 1vmin;
              color: #ff880d;
            }

            span:nth-child(1) {
              margin-right: 3vmin;
            }
          }

          .right {
            display: flex;
            align-items: center;

            .button {
              display: flex;
              align-items: center;
              justify-content: flex-end;

              img {
                width: 20%;

                display: block;
              }
            }
          }
        }

        .ProgramMain {
          margin-top: 6vmax;
        }
      }

      &.Similar {
        //相似推荐模块
        padding-top: 2vmax;
        position: relative;
        top: -1px;
        .SimilarHeader {
          width: 100%;
        }
      }
    }
  }
}
</style>
