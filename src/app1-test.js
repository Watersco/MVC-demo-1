import $ from 'jquery'

const $button1 = $('.jia1')
const $button2 = $('.jian1')
const $button3 = $('.chen2')
const $button4 = $('.chu2')
const $button5 = $('.qing0')
const $number = $('.number')
let n = localStorage.getItem("n")
$number.text(n)


$button1.on('click',()=>{
 let n = parseInt($number.text())
 n += 1 
 $number.text(n)
 localStorage.setItem('n',n)
})

$button2.on('click',()=>{
  let n = parseInt($number.text())
  n -= 1
  $number.text(n)
  localStorage.setItem('n',n)
})

$button3.on('click',()=>{
   let n = parseInt($number.text())
   n *= 2
   $number.text(n)
   localStorage.setItem('n',n)
})

$button4.on('click',()=>{
    let n = parseInt($number.text())
    n /= 2
    $number.text(n)
    localStorage.setItem('n',n)
 })

 $button5.on('click',()=>{
    n = 100 
    $number.text(n)
    localStorage.setItem('n',n)
 })