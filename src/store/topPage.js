export default {
    namespaced: true, //开启命名空间
    state: {
        isShowTopPage: false
    },
    mutations: {
        showTopPage(state) {
            state.isShowTopPage = true
        },
        hideTopPage(state) {
            state.isShowTopPage = false
        }

    },
    actions: {
        // addZhang(context, value) {
        //     //value参数是一个对象
        //     if (value.name.indexOf('张') === 0) {
        //         context.commit('ADD_PERSON')
        //     } else {
        //         alert('这个人不姓张！')
        //     }
        // },
        // addServer(context, value) {
        //     axios.get('https://api.uixsj.cn/hitokoto/get?type=social').then(res => {
        //         context.commit('ADD_PERSON', {
        //             name: res.data
        //         })
        //     }, error => {
        //         alert(error.message)
        //     })
        // }
    },
    getters: {
        // songDuration(state, getters) {


        // }



    }
}