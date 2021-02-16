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
        id:1,
        username: 'Tod',
        comment:'不好笑'
    },
    {   
        id:2,
        username: 'AAd',
        comment:'好笑'
    },
    {
        id:3,
        username: '哥哥',
        comment:'普通'
    },
    {
        id:4,
        username: '子瑜',
        comment:'讚'
    },
    {
        id:5,
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
   
    res.redirect('/comments');
})

app.get('/comments/:id',(req,res)=>{
   const {id}= req.params;
   const comment = comments.find(c=>c.id === parseInt(id));

   res.render('comments/show',{comment})
})
//function (x) {
//     return x+2
// }
// 等於下面這種寫法
// (x) => {
//   return x+2
// }
//在你只有一個參數的狀態下，你可以不需要加上括號，繼續簡潔下去。
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