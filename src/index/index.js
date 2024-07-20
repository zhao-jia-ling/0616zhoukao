import './index.scss'
import '../common/common.scss'
import axios from 'axios'

const $ = (el, parent = document) => parent.querySelector(el)
const $all = (el, parent = document) => [...parent.querySelectorAll(el)]


// 网格渲染综合
async function render(page,url){
    const res = await axios.get(url)
    console.log(res.data.items);
    page.innerHTML = res.data.items.map((everyItem , i)=>{
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
render($(".list") , 'https://zyxcl.xyz/exam_api/zh')

// 渲染销量
render($(".list") , 'https://zyxcl.xyz/exam_api/xl')

// 渲染上新
render($(".list") , 'https://zyxcl.xyz/exam_api/sx')


// 列表渲染综合
render($(".list2") , 'https://zyxcl.xyz/exam_api/zh')
// 渲染销量
render($(".list2") , 'https://zyxcl.xyz/exam_api/xl')
// 渲染上新
render($(".list2") , 'https://zyxcl.xyz/exam_api/sx')


// 绑定点击事件
$(".zonghe").addEventListener('click', () => {
    // 排他
    const active = $(".active1")
    active && active.classList.remove("active1")
    $(".zonghe").classList.add("active1")
    if($(".moreWg").classList.contains("active")){
        render($(".list") , 'https://zyxcl.xyz/exam_api/zh')
    }else{
        render($(".list2") , 'https://zyxcl.xyz/exam_api/zh')
    }
})
$(".xiaoliang").addEventListener('click', () => {
    // 排他
    const active = $(".active1")
    active && active.classList.remove("active1")
    $(".xiaoliang").classList.add("active1")
    if($(".moreWg").classList.contains("active")){
        render($(".list") , 'https://zyxcl.xyz/exam_api/xl')

    }else{
        render($(".list2") , 'https://zyxcl.xyz/exam_api/xl')
    }
})
$(".shangxin").addEventListener('click', () => {
    // 排他
    const active = $(".active1")
    active && active.classList.remove("active1")
    $(".shangxin").classList.add("active1")
    if($(".moreWg").classList.contains("active")){
        render($(".list") , 'https://zyxcl.xyz/exam_api/sx')
    }else{
        render($(".list2") , 'https://zyxcl.xyz/exam_api/sx')
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