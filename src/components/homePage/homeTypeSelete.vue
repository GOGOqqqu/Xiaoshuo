<template>
  <div class="homeTypeSelete">
    <div class="typeList" @click="linkTopPage">排行榜</div>
    <div class="typeList" v-for="item in typeList" :key="item.id">
      {{ item.name }}
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";
export default {
  name: "homeTypeSelete",
  props: {
    swipe: { type: Array, requited: true },
  },

  created() {
    this.$axios({
      method: "post",
      url: "api/v2/port/store/getCategoryConfig",
      params: {
        place: 1,
      },
    })
      .then(({ data }) => {
        console.log("data", data.data);
        this.typeList = data.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },

  methods: {
    ...mapMutations("topPage", ["showTopPage"]),
    linkTopPage() {
      //进入到排行榜
      // this.$store.commit("setNavIndex", -1); //调用store的commit方法 直接调用mutations对state的数据进行修改 将app的nav隐藏
      // this.showTopPage();
      this.$router.push("/topPage");

      this.$store.commit("setNavIndex", -1); //调用store的commit方法 直接调用mutations对state的数据进行修改 将app的nav隐藏
    },
  },

  watch: {},

  computed: {
    ...mapState("playPage", ["duration", "playTime", "playState"]), //向vuex的playPage模块中的state取值
    ...mapGetters("playPage", ["songDuration", "songNowTime"]),
  },

  data() {
    return {
      typeList: [],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped lang="scss">
.homeTypeSelete {
  width: 100vmin;
  height: 8vmax;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  .typeList {
    width: 20%;
    height: 40%;
    background-color: #f0f0f0;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
  }
}
</style>
