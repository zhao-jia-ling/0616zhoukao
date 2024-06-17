import './index.scss'
import '../common/common.scss'
import axios from 'axios'

const $ = (el, parent = document) => parent.querySelector(el)
const $all = (el, parent = document) => [...parent.querySelectorAll(el)]


// 渲染综合
async function render1(){
    const res = await axios.get('https://zyxcl.xyz/exam_api/zh')
    console.log(res.data.items);
    $(".list").innerHTML = res.data.items.map((everyItem , i)=>{
        return`
            <dl>
                <dt><img src="${everyItem.img}" alt=""></dt>
                <dd>
                    <p>${everyItem.title}</p>
                    <p class="all">
                        <span class="price">￥${everyItem.price}</span><span class="sell">月销${everyItem.sold}笔</span>
                    </p> 
                </dd>
            </dl>
        `
    }).join("")

}
render1()
// 渲染销量
async function render2(){
    const res = await axios.get('https://zyxcl.xyz/exam_api/xl')
    console.log(res.data.items);
    $(".list").innerHTML = res.data.items.map((everyItem , i)=>{
        return`
            <dl>
                <dt><img src="${everyItem.img}" alt=""></dt>
                <dd>
                    <p>${everyItem.title}</p>
                    <p class="all">
                        <span class="price">￥${everyItem.price}</span><span class="sell">月销${everyItem.sold}笔</span>
                    </p> 
                </dd>
            </dl>
        `
    }).join("")

}
render2()
// 渲染上新
async function render3(){
    const res = await axios.get('https://zyxcl.xyz/exam_api/sx')
    console.log(res.data.items);
    $(".list").innerHTML = res.data.items.map((everyItem , i)=>{
        return`
            <dl>
                <dt><img src="${everyItem.img}" alt=""></dt>
                <dd>
                    <p>${everyItem.title}</p>
                    <p class="all">
                        <span class="price">￥${everyItem.price}</span><span class="sell">月销${everyItem.sold}笔</span>
                    </p> 
                </dd>
            </dl>
        `
    }).join("")

}
render3()

// 渲染综合
async function render21(){
    const res = await axios.get('https://zyxcl.xyz/exam_api/zh')
    console.log(res.data.items);
    $(".list2").innerHTML = res.data.items.map((everyItem , i)=>{
        return`
        <dl>
            <dt><img src="${everyItem.img}" alt=""></dt>
            <dd>
                <p>${everyItem.title}</p>
                <p class="sell1">月销${everyItem.sold}笔</p>
                <p class="price">￥${everyItem.price}</p>
            </dd>
        </dl>
        `
    }).join("")

}
render21()
// 渲染销量
async function render22(){
    const res = await axios.get('https://zyxcl.xyz/exam_api/xl')
    console.log(res.data.items);
    $(".list2").innerHTML = res.data.items.map((everyItem , i)=>{
        return`
        <dl>
            <dt><img src="${everyItem.img}" alt=""></dt>
            <dd>
                <p>${everyItem.title}</p>
                <p class="sell1">月销${everyItem.sold}笔</p>
                <p class="price">￥${everyItem.price}</p>
            </dd>
        </dl>
        `
    }).join("")

}
render22()

// 渲染上新
async function render23(){
    const res = await axios.get('https://zyxcl.xyz/exam_api/sx')
    console.log(res.data.items);
    $(".list2").innerHTML = res.data.items.map((everyItem , i)=>{
        return`
            <dl>
                <dt><img src="${everyItem.img}" alt=""></dt>
                <dd>
                    <p>${everyItem.title}</p>
                    <p class="sell1">月销${everyItem.sold}笔</p>
                    <p class="price">￥${everyItem.price}</p>
                </dd>
            </dl>
        `
    }).join("")

}
render23()



// 绑定点击事件
$(".zonghe").addEventListener('click', () => {
    // 排他
    const active = $(".active1")
    active && active.classList.remove("active1")
    $(".zonghe").classList.add("active1")
    if($(".moreWg").classList.contains("active")){
        render1()
    }else{
        render21()
    }
})
$(".xiaoliang").addEventListener('click', () => {
    // 排他
    const active = $(".active1")
    active && active.classList.remove("active1")
    $(".xiaoliang").classList.add("active1")
    if($(".moreWg").classList.contains("active")){
        render2()
    }else{
        render22()
    }
})
$(".shangxin").addEventListener('click', () => {
    // 排他
    const active = $(".active1")
    active && active.classList.remove("active1")
    $(".shangxin").classList.add("active1")
    if($(".moreWg").classList.contains("active")){
        render3()
    }else{
        render23()
    }
})
// 点击切换
$(".moreWg").addEventListener('click', () => {
    $(".moreWg").classList.remove("active")
    $(".moreLb").classList.remove("none")
    $(".moreLb").classList.add("active")
    $(".moreWg").classList.add("none")

    $(".scroll").classList.remove("active")
    $(".scroll2").classList.remove("none")
    $(".scroll2").classList.add("active")
    $(".scroll").classList.add("none")
})
$(".moreLb").addEventListener('click', () => {
    $(".moreLb").classList.remove("active")
    $(".moreWg").classList.remove("none")
    $(".moreWg").classList.add("active")
    $(".moreLb").classList.add("none")

    $(".scroll2").classList.remove("active")
    $(".scroll").classList.remove("none")
    $(".scroll").classList.add("active")
    $(".scroll2").classList.add("none")
})