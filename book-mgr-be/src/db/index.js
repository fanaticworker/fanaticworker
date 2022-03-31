const mongoose = require('mongoose');

//给哪个数据库的
//那个集合
//添加什么格式的文档

//Schema 映射了Momgoodb下的一个集合，并且它的内容就是集合下文档的构成
//Nodal 可以理解成是根据Schema生成的一套方法集合，这套方法用来操作MongoDB下的集合和集合下的文档
const UserSchema = new mongoose.Schema({
    nickname:String,
    password:String,
    age:Number,
});

const UserModal = mongoose.model('User', UserSchema);
const connect = () => {
    //去连接数据库
    mongoose.connect('mongodb://127.0.0.1:27017/book-mgr');

    mongoose.connection.on('open',()=>{
        console.log('连接成功');
    const user =new UserModal({
        nickname:'小红',
        password:'123456',
        age: 12,
    });
    user.age=99;
    user.save();

    });
};
connect();