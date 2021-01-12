import "./app1.css"
import $ from "jquery"

const $button1 = $('.jia1')
const $button2 = $('.jian1')
const $button3 = $('.chen2')
const $button4 = $('.chu2') 
const $button5 = $('.qing0')
const $number =$('.number')
const n = localStorage.getItem("n")//初始化n/
$number.text(n)//把本地储存的n放入number


$button1.on('click',()=>{ //获取按钮1点击时 
   let n = parseInt($number.text()) //把文本100转换为数字100
   n += 1  //当按钮点击时，number+1
   localStorage.setItem('n',n)//本地储存 名字为'n',值为 n
   $number.text(n) //放回number里面
    
})
$button2.on('click',()=>{
    let n = parseInt($number.text())
    n -= 1
    localStorage.setItem('n' , n) 
    $number.text(n)
    
})
$button3.on('click',()=>{
  let n = parseInt($number.text())
  n *= 2
  localStorage.setItem('n', n)
  $number.text(n)
  
})
$button4.on('click',()=>{
  let n = parseInt($number.text())
  n =n/ 2
  localStorage.setItem('n',n)
  $number.text(n)
  
})

$button5.on('click',()=>{
    let n = 100
    localStorage.setItem('n',n)
    $number.text(n)
})