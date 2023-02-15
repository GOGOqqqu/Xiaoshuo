<template>
  <div class="banQuanFooter">
    <div class="title">版权信息</div>
    <div class="text">作品数字版权:{{ name }}</div>
    <div class="text">版权所有·侵权必究</div>
    <div class="text">客服电话:13452341223</div>
  </div>
</template>

<script>
export default {
  name: "banQuanFooter",
  props: {
    // swipe: { type: Array, requited: true },
    name: String,
  },

  watch: {},

  computed: {},

  data() {
    return {};
  },

  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped lang="scss">
.banQuanFooter {
  padding: 0 4vmin;
  line-height: 3vmax;
  letter-spacing: 0.8px;

  .title{
    font-size: 4vmin;
    font-weight: bold;
    color: #000;
    
  }

  .text{
    font-size: 3vmin;
    font-weight: 400;
    color: #333;
  }
}
</style>
