//每个文件都是一个模块
const Koa = require('koa');

const app = new Koa();
//通过 app.use 注册中间件
//中间件本质上 就是一个函数
//contex 上下文 -——当前请求的相关信息都在里面
app.use(async (context,next)=>{
    console.log(1);
  
    await next();
    console.log(4);
    
   
});
app.use(async (context,next)=>{
    console.log(2);
    await next();
    console.log(5);
   
});
app.use(async (context,next)=>{
    console.log(3);
    await next();
    console.log(6);
   
});

//开启一个http服务
//接受http 请求 并做处理，处理完后响应

app.listen(3000, () => {
    console.log('启动成功');
});
console.log('112233');
//node.js默认使用common.js