<template>
  <div class="bookComment">
    <div class="header">
      <div class="left">
        <img
          :src="`http://soundoss.anxiashuyuan.com/${img}`"
          v-if="img != ''"
        />
        <img src="@/assets/img/bookMain/tou.png" v-else />
      </div>
      <div class="right">
        <div class="name">
          {{ name }}
        </div>
        <div class="star">
          <van-rate v-model="starNum" readonly size="14" />
        </div>
      </div>
    </div>
    <div class="text">{{ text }}</div>
    <div class="footer">
      <div class="time">{{ time }}</div>
      <div class="icon">
        <div class="like">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            fill="currentColor"
            class="bi bi-hand-thumbs-up"
            viewBox="0 0 16 16"
          >
            <path
              d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 0 0-.443.05 9.365 9.365 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111L8.864.046zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a8.908 8.908 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.224 2.224 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.866.866 0 0 1-.121.416c-.165.288-.503.56-1.066.56z"
            />
          </svg>
          {{ like }}
        </div>
        <div class="comment">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            fill="currentColor"
            class="bi bi-chat-right-dots"
            viewBox="0 0 16 16"
          >
            <path
              d="M2 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.586a2 2 0 0 1 1.414.586l2 2V2a1 1 0 0 0-1-1H2zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12z"
            />
            <path
              d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
            />
          </svg>
          {{ comment }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "bookComment",
  props: {
    // swipe: { type: Array, requited: true },
    name: String,
    img: String,
    star: Number,
    text: String,
    time: String,
    like: Number,
    comment: Number,
  },

  watch: {},

  mounted() {
    this.starNum = this.star / 2;
  },

  computed: {},

  data() {
    return {
      starNum: 0,
    };
  },

  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped lang="scss">
.bookComment {
  padding: 0 4vmin;
  line-height: 3vmax;
  letter-spacing: 0.8px;
  margin: 2vmax 2vmin;

  .header {
    width: 100%;
    display: flex;
    align-items: center;
    height: 6vmax;
    justify-content: flex-start;
    .left {
      height: 100%;
      width: 6vmax;
      display: flex;
      align-items: center;
      justify-content: flex-start;

      img {
        height: 100%;
        border-radius: 50%;
        display: block;
      }
    }

    .right {
      width: 60%;
      height: 100%;
      display: flex;
      flex-wrap: wrap;
      margin-left: 3vmin;
      align-content: flex-start;
      flex-direction: column;
    }
  }

  .text {
    margin-left: 16vmin;
    margin-top: 2vmax;

    line-height: 4vmax;
  }

  .footer {
    width: 100%;
    height: 6vmax;
    display: flex;
    align-items: center;
    margin-left: 16vmin;
    color: #666;
    .time {
      font-size: 3vmin;
      font-weight: 400;
      margin-right: 34vmin;
    }
    .icon {
      display: flex;
      align-items: center;
      width: 20vmin;
      height: 3vmax;
      justify-content: space-around;

      .like {
        font-size: 2vmin;
        display: flex;
        align-items: center;
        height: 100%;

        svg {
          margin-right: 2vmin;
        }
      }

      .comment {
        font-size: 2vmin;
        display: flex;
        align-items: center;
        height: 100%;
        svg {
          margin-right: 2vmin;
        }
      }
    }
  }
}
</style>
