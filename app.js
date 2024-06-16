const express = require('express')
const ip = require("ip")
const path = require('path')
const fs = require('fs')
const app = express()

// 综合接口
app.get('https://zyxcl.xyz/exam_api/zh',(request , response)=>{
    console.log(request.query);
    response.send( {code : 1 , msg : "成功" , total : data.length , values : data} )
})

// 销量接口
app.get('https://zyxcl.xyz/exam_api/xl',(request , response)=>{
    console.log(request.query);
    response.send( {code : 1 , msg : "成功" , total : data.length , values : data} )
})

// 上新接口
app.get('https://zyxcl.xyz/exam_api/sx',(request , response)=>{
    console.log(request.query);
    response.send( {code : 1 , msg : "成功" , total : data.length , values : data} )
})









const PORT = 2001
app.listen(PORT , () => {
    console.log(`服务启动成功 http://localhost:${PORT}`)
    console.log(`服务启动成功 http://127.0.0.1:${PORT}`)
    console.log(`服务启动成功 http://${ip.address()}:${PORT}`)
})

