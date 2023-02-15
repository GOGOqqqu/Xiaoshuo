export default {
    namespaced: true, //开启命名空间
    state: {
        playState: false, //当前播放状态
        songSrc: '', //当前播放歌曲的路径
        duration: 0, //当前播放歌曲的总时长
        playTime: 0, //当前播放进度
        volume: 1, //当前音量大小 范围为0-1
        playbackRate: 1, //当前播放速度 1为原速
        isShowPlayPage: false, //是否显示播放器界面
        title: '',
        imgSrc: '',
        list: [],
        sylloge: 0 //总集数   
    },
    mutations: {
        // songPlay(state, value) {

        // }

        set_title(state, title) {
            state.title = title
        },
        set_imgSrc(state, imgSrc) {
            state.imgSrc = imgSrc
        },
        set_list(state, list) {
            state.list = list
        },
        set_sylloge(state, sylloge) {
            state.sylloge = sylloge
        },
        set_playbackRate(state, playbackRate) {
            state.playbackRate = playbackRate
        },


        SHOW_AND_HIDE_PLAY_PAGE(state) { //隐藏与显示播放界面
            state.isShowPlayPage = !state.isShowPlayPage
        },
        PLAY_AND_PAUSE(state) { //播放和暂停
            state.playState = !state.playState
        },
        PLAY(state) {
            state.playState = true
        },
        PAUSE(state) {
            state.playState = false
        },
        NOW_CAN_PLAY(state) {
            state.canPlay = true

        },
        NOW_CANNOT_PLAY(state) {
            state.canPlay = false

        },

        SET_SONG_SRC(state, src) { //设置歌曲路径
            state.songSrc = src
        },

        SET_SONG_PLAYTIME(state, time) { //设置歌曲当前播放时间
            state.playTime = time
        },
        SET_SONG_duration(state, time) { //设置歌曲总时间
            state.duration = time
        },

        SET_SONG_VOLUME(state, value) { //设置当前音量大小
            state.volume = value
        },

        SET_SONG_PLAYBACKRATE(state, speed) { //设置当前播放速度
            state.playbackRate = speed
        },

    },
    actions: {

    },
    getters: {
        // songDuration(state, getters) {


        // }
        songDuration(state) {

            let min = parseInt(state.duration / 60) < 10 ? '0' + parseInt(state.duration / 60) : parseInt(state.duration / 60)

            let sec = parseInt(state.duration % 60) < 10 ? '0' + parseInt(state.duration % 60) : parseInt(state.duration % 60)

            return min + ':' + sec
        },

        songNowTime(state) {

            let min = parseInt(state.playTime / 60) < 10 ? '0' + parseInt(state.playTime / 60) : parseInt(state.playTime / 60)

            let sec = parseInt(state.playTime % 60) < 10 ? '0' + parseInt(state.playTime % 60) : parseInt(state.playTime % 60)

            return min + ':' + sec

        }


    }
}