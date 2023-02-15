<template>
  <div class="homeBookMain">
    <homeBookList v-for="item in bookList" :key="item.id" :bookList="item" />
    <GuessYouLike
      class="GuessYouLike"
      :GuessYouLike="GuessYouLike"
      @getGuessYouLike="getGuessYouLike"
    />
  </div>
</template>

<script>
import homeBookList from "@/components/homePage/homeBook/homeBookList.vue";
import GuessYouLike from "@/components/homePage/homeBook/GuessYouLike.vue";

import { mapState } from "vuex";
import { mapGetters } from "vuex";
export default {
  name: "homeBookMain",
  props: {
    swipe: { type: Array, requited: true },
  },

  created() {
    this.$axios({
      method: "post",
      url: "api/v2/port/chart/index?channel=1",
    })
      .then(({ data }) => {
        console.log("data", data.data);
        data.data.splice(data.data.length - 1, 1); //删除最后一个
        this.bookList = data.data;
      })
      .catch((error) => {
        console.log(error);
      });

    this.$axios({
      method: "post",
      url: "api/v2/port/index/guessYouLike",
      params: {
        page: 1, //请求的页数
        rows: 4, // 一次请求的量
      },
    })
      .then(({ data }) => {
        console.log("data", data.data.list);
        this.GuessYouLike = data.data.list;
      })
      .catch((error) => {
        console.log(error);
      });
  },

  watch: {},

  computed: {
    ...mapState("playPage", ["duration", "playTime", "playState"]), //向vuex的playPage模块中的state取值
    ...mapGetters("playPage", ["songDuration", "songNowTime"]),
  },

  data() {
    return {
      bookList: [],
      GuessYouLike: [],
    };
  },

  methods: {
    getGuessYouLike(i) {
      console.log("i", i);
      this.$axios({
        method: "post",
        url: "api/v2/port/index/guessYouLike",
        params: {
          page: i, //请求的页数
          rows: 4, // 一次请求的量
        },
      })
        .then(({ data }) => {
          // console.log("getGuessYouLike", data.data.list);
          // console.log("this.GuessYouLike", this.GuessYouLike);
          this.GuessYouLike = [...this.GuessYouLike, ...data.data.list];
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },

  components: {
    homeBookList,
    GuessYouLike,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped lang="scss">
.homeBookMain {
  width: 100vmin;
  padding-bottom: 2vmax;
  // background-color: #000;
  // height: 600vmax;
  // font-size: 100px;
}
</style>
