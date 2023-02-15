<template>
  <div class="homeVip">我是vip</div>
</template>

<script>
import { mapState } from "vuex";
import { mapGetters } from "vuex";
export default {
  name: "homeVip",
  props: {
    swipe: { type: Array, requited: true },
  },

  watch: {},

  computed: {
    ...mapState("playPage", ["duration", "playTime", "playState"]), //向vuex的playPage模块中的state取值
    ...mapGetters("playPage", ["songDuration", "songNowTime"]),
  },

  data() {
    return {};
  },

  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped lang="scss">
.homeVip {
  width: 100%;
  height: 100%;
  background-color: cyan;
}
</style>
