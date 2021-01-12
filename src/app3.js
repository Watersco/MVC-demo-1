console.log('hello world!')
import $ from 'jquery'
import './app3.css'

const $square = $('#app3 .square')


$square.on('click',()=>{ 
     $square.toggleClass('active')
})      //没有就添加，有就删掉