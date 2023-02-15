<template>
  <div class="history">
    <div class="title">
      <div class="text">搜索历史</div>
      <div class="icon" @click="clearHistory">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          class="bi bi-trash"
          viewBox="0 0 16 16"
        >
          <path
            d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"
          />
          <path
            fill-rule="evenodd"
            d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
          />
        </svg>
      </div>
    </div>
    <div class="textBox" v-for="(item, index) in searchList" :key="index">
      {{ item }}
    </div>
  </div>
</template>

<script>
import { Dialog } from "vant";
export default {
  name: "SearchPageHistory",

  data() {
    return {
      show: false,
    };
  },

  props: {
    //需要传过来的数据 以及类型
    // listItem: Object,
    // category: String,
    searchList: Array, //传过来的搜索记录
  },

  watch: {

  },

  created() {},

  mounted() {

  },

  methods: {
    clearHistory() {
      this.show = !this.show;
      Dialog({
        message: "是否删除所有历史记录？",
        showConfirmButton: true,
        showCancelButton: true,
        confirmButtonText: "清空",
        confirmButtonColor: "#117edd",
        cancelButtonText: "取消",
        cancelButtonColor: "#117edd",
        closeOnClickOverlay: "true",
        beforeClose: (action, done) => {
          console.log("action", action);
          if (action == "confirm") {
            console.log("点击了确认");
            localStorage.searchLocal = [];
            this.$emit("clearSearchHistory");   //向父组件 调用清除历史记录的方法
          } else {
            console.log("点击了取消");
          }
          done();
        },
      });
    },
  },
};
</script>

<style scoped lang="scss">
.history {
  width: 100vw;
  height: 100%;
  // background-color: yellow;

  .title {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .text {
      display: flex;
      align-items: center;
      font-size: 18px;
      color: #333;
      padding: 20px 0 0 20px;
    }

    .icon {
      color: #333;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 60px;
      height: 60px;
      padding: 20px 20px 0 0;
    }
  }

  .textBox {
    padding: 5px 20px;
    font-size: 16px;
    color: #444;
    border: 1px solid transparent;
    background-color: rgba(200, 200, 200, 0.2);
    float: left;
    margin: 16px 20px;
    border-radius: 18px;
  }
}
</style>
