const express = require('express')
const mongoose = require('mongoose')
// 链接mongo，并使用imapp集合
const DB_URL = 'mongodb://localhost:27017/imapp'
mongoose.connect(DB_URL)
mongoose.connection.on('connected', function(){
    console.log('mongo connect success')
})

const User = mongoose.model('user', new mongoose.Schema({
    name: {type: String, require: true},
    age: {type: Number, require: true}
}))

/*User.create({
    name: 'imooc',
    age: 18
}, function(err, doc){
    if(!err) {
        console.log(doc)
    }else{
        console.log(err)
    }
})*/

// 新建app
const app = express()

app.get('/', function(req, res){
    res.send('<h1>hello world</h1>')
})

app.get('/data', function(req, res){
    User.find({}, function(err, doc){
        res.json(doc)
    })
})

app.listen(8080, function(){
    console.log('node app start at port 8080')
})