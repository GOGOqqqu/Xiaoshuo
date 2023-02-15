<template>
  <div class="me">
    <div class="button" @click="link">请求</div>
  </div>
</template>

<script>
export default {
  methods: {
    link() {
      console.log("点击了按钮");
      this.$axios({
        method: "post",
        url: "api/v2/port/index/guessYouLike",
        params: {
          page: 1, //请求的页数
          rows: 10, // 一次请求的量
        },
      })
        .then(({ data }) => {
          console.log("data", data.data.list);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.me {
  width: 100vw;
  height: 100vh;

  .button {
    width: 100px;
    height: 30px;
    background-color: cyan;
    color: #333;
  }
}
</style>
