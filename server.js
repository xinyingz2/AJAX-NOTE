//1. 引入express
const { request, response } = require('express')
const express = require('express')
//2. 创建应用对象
const app = express()
//3. 创建路由规则
//request 是对请求报文的封装
//response 是对响应报文的封装
app.get('/server' , (request , response)=>{
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin' , '*')
    //设置响应体
    response.send('HELLO AJAX - 2')
})
//all表示可以接收任意类型的请求
app.all('/server' , (request , response)=>{
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin' , '*')
    //响应头
    response.setHeader('Access-Control-Allow-Headers' , '*')
    //设置响应体
    response.send('HELLO AJAX POST')
})
app.all('/json-server' , (request , response)=>{
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin' , '*')
    //响应头
    response.setHeader('Access-Control-Allow-Headers' , '*')
    //响应一个数据
    const data = {
        name: "atguigu"
    }
    //对data进行类型转换
    let str = JSON.stringify(data)
    //设置响应体，send的参数只能是字符串类型
    response.send(str)
})
//针对 IE 缓存
app.get('/ie' , (request , response)=>{
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin' , '*')
    //设置响应体
    response.send('HELLO IE -7')
})
//延时响应
app.all('/delay' , (request , response)=>{
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin' , '*')
    //响应头
    response.setHeader('Access-Control-Allow-Headers' , '*')
    //定时器
    setTimeout(() => {
        response.send('延时响应')
    }, 1000);   
})
//jQuery 服务
app.all('/jquery-server' , (request , response)=>{
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin' , '*')
    //响应头
    response.setHeader('Access-Control-Allow-Headers' , '*')

    //response.send('HELLO JQUERY AJAX')
    const data = {
        name: '尚硅谷'
    }
    response.send(JSON.stringify(data))
})
//axios 服务
app.all('/axios-server' , (request , response)=>{
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin' , '*')
    //响应头
    response.setHeader('Access-Control-Allow-Headers' , '*')
    response.send('HELLO AXIOS AJAX')
    // const data = {
    //     name: '尚硅谷'
    // }
    // response.send(JSON.stringify(data))
})
//fetch 服务
app.all('/fetch-server' , (request , response)=>{
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin' , '*')
    //响应头
    response.setHeader('Access-Control-Allow-Headers' , '*')
    //response.send('HELLO FETCH AJAX')
    const data = {
        name: '尚硅谷'
    }
    response.send(JSON.stringify(data))
})
//jsonp 服务
app.all('/jsonp-server' , (request , response)=>{
    const data = {
        name: '尚硅谷'
    }
    var str = JSON.stringify(data)
    response.end(`handle(${str})`)
})
//check-username 服务
app.all('/check-username' , (request , response)=>{
    const data = {
        exist: 1,
        msg: '用户名已经存在'
    }
    var str = JSON.stringify(data)

    response.end(`handle(${str})`)
})
//jQuery-jsonp 服务
app.all('/jquery-jsonp-server' , (request , response)=>{
    const data = {
        name: 'Tom',
        age: 20
    }
    var str = JSON.stringify(data)
    //接收callback参数
    var cb = request.query.callback
    response.end(`${cb}(${str})`)
})
app.all('/cors-server' , (request , response)=>{
    //设置允许跨域
    //设置任何url都可以访问本服务
    response.setHeader('Access-Control-Allow-Origin' , '*')
    //设置请求可以自定义请求头
    response.setHeader('Access-Control-Allow-Headers' , '*')
    //设置接收任意类型请求
    response.setHeader('Access-Control-Allow-Method' , '*')
    
    
    response.send('hello CORS')
})
//4. 监听端口启动服务
app.listen(8000 , ()=>{
    console.log('服务已经启动，8000，端口监听中....')
})