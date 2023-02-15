import Vue from 'vue'
import Vuex from 'vuex'

import playPage from './playPage'
import topPage from './topPage'

// 引入播放页的模块

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    App: {
      navIndex: 1
    },
    player: {
      isPlay: false,
      audioSrc: '',
      time: 0,
      nowTime: 0,
      title: '',
      playId: 0,
    }
  }, //数据库
  getters: {},
  mutations: {
    setNavIndex(state, payload) {
      state.App.navIndex = payload
    },
    setPlayerPlay(state) {
      // 播放状态取反
      state.player.isPlay = !state.player.isPlay
    }

  },
  actions: {},
  modules: {
    playPage,
    topPage,
    // 注册播放页模块
  }
})