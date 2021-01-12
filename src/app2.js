import "./app2.css"
import $ from 'jquery'

const $tabBar = $('#app2 .tab-bar') //要严谨，加上app2确保唯一性
const $tabContent = $('#app2 .tab-content')

$tabBar.on('click','li', e =>{ //监听tabBar里面的子元素li
    //那我怎么分辨是第一个li还是第二个li?
    //先知道用户点击的是哪一个（设置变量e)
    //用jquery 封装 dom
    const $li = $(e.currentTarget) //绑定事件的对象，恒等于this。target只要点击li里面所有元素都会触发，不准确
    $li .addClass('selected') 
    .siblings()
    .removeClass('selected')

    const index = $li.index() //创建个变量index 记录被选择的元素排行老几。
    //当选中第index个元素时，添加active，而其他兄弟元素移除active
    $tabContent.children().eq(index).addClass('active')
    .siblings().removeClass('active')
          //tabContent的全部孩子.中的第几个.css改变样式.其他兄弟元素消失
});

$tabBar.children().eq(0).trigger('click')