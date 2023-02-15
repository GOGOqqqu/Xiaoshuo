<template>
  <div class="topPage">
    <div class="topPageHeader">
      <div class="goBackButton" @click="backUp">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          class="bi bi-chevron-left"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
          />
        </svg>
      </div>

      <div class="selectType" @click="showAction = true">
        {{ showType }}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          fill="currentColor"
          class="bi bi-caret-down-fill"
          viewBox="0 0 16 16"
        >
          <path
            d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"
          />
        </svg>
      </div>
      <van-action-sheet
        v-model="showAction"
        :actions="actions"
        @select="onSelect"
        cancel-text="取消"
        close-on-click-action
        @cancel="onCancel"
        description="榜单分类"
      />
    </div>
    <van-tabs
      v-model="active"
      color="#fff"
      background="transparent"
      line-width="60px"
      line-height="2px"
      animated
      swipeable
      :lazy-render="false"
    >
      <van-tab title="热销榜">
        <div class="topPageMain">
          <div class="rank">
            <rankThree :list="hot" />
            <rankList :list="hot" />
          </div>
        </div>
      </van-tab>
      <van-tab title="新品榜">
        <div class="topPageMain">
          <div class="rank">
            <rankThree :list="newList" />
            <rankList :list="newList" />
          </div>
        </div>
      </van-tab>
      <van-tab title="人气榜">
        <div class="topPageMain">
          <div class="rank">
            <rankThree :list="moods" />
            <rankList :list="moods" />
          </div>
        </div>
      </van-tab>
      <van-tab title="完结榜">
        <div class="topPageMain">
          <div class="rank">
            <rankThree :list="end" />
            <rankList :list="end" />
          </div>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import rankThree from "@/components/topPage/rankThree.vue"; //引入前三排名组件
import rankList from "@/components/topPage/rankList.vue"; //引入前三排名组件

import { mapMutations } from "vuex";
export default {
  name: "topPage",
  methods: {
    ...mapMutations("topPage", ["hideTopPage"]),
    backUp() {
      //回到上一级
      // console.log("点击了返回按钮");
      // this.hideTopPage();
      this.$router.go(-1);
      this.$store.commit("setNavIndex", 1); //调用store的commit方法 直接调用mutations对state的数据进行修改 将app的nav显示
    },
    onSelect(item) {
      // 默认情况下点击选项时不会自动收起
      // 可以通过 close-on-click-action 属性开启自动收起
      this.showAction = false;
      console.log("点击了", item.name);
      if (item.name == this.showType) {
        return;
      }
      if (item.name == "日榜") {
        this.showType = "日榜";
        let i = this.actions.findIndex((index) => index.className);
        this.actions[i].className = "";
        let j = this.actions.findIndex((index) => index.name == "日榜");
        this.actions[j].className = "selectItem-top";
      } else if (item.name == "月榜") {
        this.showType = "月榜";
        let i = this.actions.findIndex((index) => index.className);
        this.actions[i].className = "";
        let j = this.actions.findIndex((index) => index.name == "月榜");
        this.actions[j].className = "selectItem-top";
      } else {
        this.showType = "总榜";
        let i = this.actions.findIndex((index) => index.className);
        this.actions[i].className = "";
        let j = this.actions.findIndex((index) => index.name == "总榜");
        this.actions[j].className = "selectItem-top";
      }
    },
    onCancel() {
      console.log("点击了取消");
    },
  },
  data() {
    return {
      active: 0,
      showAction: false,
      actions: [
        { name: "日榜" },
        { name: "月榜" },
        { name: "总榜", className: "selectItem-top" },
      ],
      showType: "总榜",
      hot: [],
      newList: [],
      moods: [],
      end: [],
    };
  },
  components: {
    rankThree, //注册排行组件
    rankList,
  },

  created() {
    //组件初始化时 请求数据
    this.$axios({
      method: "post",
      url: "api/v2/port/rank/index?type=2&cycle=0",
    })
      .then(({ data }) => {
        console.log("data", data.data);
        this.hot = data.data;
      })
      .catch((error) => {
        console.log(error);
      });

    this.$axios({
      method: "post",
      url: "api/v2/port/rank/index?type=1&cycle=0",
    })
      .then(({ data }) => {
        console.log("data", data);
        this.newList = data.data;
      })
      .catch((error) => {
        console.log(error);
      });

    this.$axios({
      method: "post",
      url: "api/v2/port/rank/index?type=3&cycle=0",
    })
      .then(({ data }) => {
        console.log("data", data);
        this.moods = data.data;
      })
      .catch((error) => {
        console.log(error);
      });

    this.$axios({
      method: "post",
      url: "api/v2/port/rank/index?type=4&cycle=0",
    })
      .then(({ data }) => {
        console.log("data", data);
        this.end = data.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style lang="scss">
.van-action-sheet__cancel,
.van-action-sheet__item.selectItem-top {
  font-size: 16px;
  letter-spacing: 2px;
  color: #ff9425;
}
.topPage {
  width: 100vmin;
  height: 100vmax;

  .van-popover {
    right: 0;
    top: 71px;
  }

  .topPageHeader {
    height: 8vmax;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: url(@/assets/img/top/back.png) no-repeat;
    background-size: cover;
    z-index: 1;

    .goBackButton {
      position: absolute;
      top: 10%;
      left: 3%;
      height: 100%;
      width: 8vmax;
      display: flex;
      align-items: center;
      color: #fff;
      z-index: 9999;
    }

    .selectType {
      height: 3vmax;
      width: 7vmax;
      position: absolute;
      top: 42%;
      right: 2%;
      display: flex;
      align-items: center;
      color: #222;
      background-color: #fff;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2vmin;
      // background-color: cornflowerblue;
    }
  }

  .topPageMain {
    height: 92vmax;
    width: 100vmin;
    // background-color: cyan;
    position: relative;
    overflow-y: auto;
    background: #eee;

    .rank {
      width: 100%;
      height: calc(31vmax + 1px); //加1px将底边露出来的一点缝隙遮住
      background: url(@/assets/img/top/back.png) no-repeat;
      background-size: cover;
      position: absolute;
      top: -8vmax;
      left: 0;
    }
  }

  .van-tabs--line .van-tabs__wrap {
    height: 8vmax;
    width: 70vmin;
    position: relative;
    left: 12vmin;
    // background-color: #333;
    z-index: 2;

    .van-tabs__nav {
      margin-top: 2vmax;
      height: 6vmax;
      background-color: transparent;

      .van-tab {
        &.van-tab--active {
          font-size: 16px;
          font-weight: 500;
        }
        .van-tab__text {
          color: #fff;
        }
      }
    }
  }
}
</style>
