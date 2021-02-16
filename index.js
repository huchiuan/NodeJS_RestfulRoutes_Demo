const express = require ('express');
const app = express ();
const path = require('path');

app.use (express.urlencoded({ extended : true}))
//上行是用來處理request 資料用的 叫express解析
app.use(express.json())//用此行 可以在request的時候傳進來JSON 在剖析
app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs')


const comments=[
    {
        username: 'Tod',
        comment:'不好笑'
    },
    {
        username: 'AAd',
        comment:'好笑'
    },
    {
        username: '哥哥',
        comment:'普通'
    },
    {
        username: '子瑜',
        comment:'讚'
    },
    {
        username: '狗',
        comment:'不太有趣'
    },
]
app.get('/comments',(req,res)=>{
    res.render('comments/index',{comments})
})

app.get('/comments/new',(req,res)=>{
    res.render('comments/new')
})
app.post('/comments',(req,res)=>{
    const { username,comment} =req.body;
    comments.push({username,comment});
    res.send("it work");
})

app.get('/tacos',(req,res) =>{
 res.send("get /tacos response")
})

app.post('/tacos',(req,res) =>{
    const {meat,qty} = req.body;
    res.send(`這是你的 ${qty} ${meat}`)
   })
   
app.listen(3000,() =>{

console.log("ON PORT 3000!")

})