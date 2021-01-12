import "./app4.css"
import $ from 'jquery'

const $circle = $('#app4 .circle')

$circle.on('mouseenter',()=>{
    console.log('嘿')
    $circle.addClass('mouse')
})
$circle.on('mouseleave',()=>{
    console.log('哈')
    $circle.removeClass('mouse')
})