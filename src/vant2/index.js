import {
    Tabbar,
    TabbarItem, //引入标签栏
    Button,
    Tab, //标签页
    Tabs,
    Swipe,
    SwipeItem, //轮播模块
    Grid,
    GridItem, //宫格
    Icon,
    Popup, //弹窗
    Image as VanImage, //vant图片
    Slider, //滑块 用于播放器
    Popover, //气泡弹窗
    ActionSheet, //动作面板
    Search, //搜索栏
    Collapse,
    CollapseItem, //下拉菜单
    Sticky, //粘性定位
    Rate, //评分 
    DropdownMenu,
    DropdownItem, //下拉菜单
    List, //列表
    Cell,
    CellGroup,
    Picker,
} from 'vant'

const UIComponents = [Tabbar, TabbarItem, Button, Tab, Tabs, Swipe, SwipeItem, Grid, GridItem, Icon, Popup, VanImage, Slider, Search, Popover, ActionSheet, Collapse, CollapseItem, Sticky, Rate, DropdownMenu, DropdownItem, List, Cell, CellGroup, Picker]


const VantUIPlugin = {};

VantUIPlugin.install = function (Vue) {

    UIComponents.forEach(Component => {

        Vue.use(Component)

    })

}

export default VantUIPlugin