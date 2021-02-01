const express = require("express")
const path=require("path")
const request=require("request")
const hbs = require("hbs")

const url ="https://jsonplaceholder.typicode.com/posts"
const publicpath=path.join(__dirname,"../public")
const viewspath=path.join(__dirname,"../templates/views")
const partialspath=path.join(__dirname,"../templates/partials")
const app=express()
const port = process.env.PORT || 3000
app.set("view engine","hbs")
app.set("views",viewspath)
hbs.registerPartials(partialspath)
app.use(express.static(publicpath))

app.get("",(req,res)=>{
     res.render("index",{title:"Welcome",body:"My first dynamic page"})
 })
 app.get("/help",(req,res)=>{
    res.render("help",{title:"Always ready to help",message:`SYNONYMS FOR help
    1 encourage, befriend; support, second, uphold, back, abet. 3 further, promote, foster. 6 ameliorate. 7 alleviate, cure, heal. 12 support, backing.`})
})
app.get("/about",(req,res)=>{
    res.render("about",{title:"Always ready to help"})
})
app.get("/weather",(req,res)=>{
    let ms=""
    if(!req.query.search)
    {
        return res.send("Give search at query string") 
    }
    request({url:url,json:true},(error,response)=>{
        if(error)
        {
            console.log(error)
        }
        else{
            let data=response.body;
            
            res.send(data.filter((val)=>{
                return val.id=req.query.search
            }));
        }
        
    })
    })




app.get("/help/*",(req,res)=>{
    res.render("errorpage",{errormessage:"Help artical not found"})
})
app.get("*",(req,res)=>{
    res.render("errorpage",{errormessage:"My 404 Page"})

})
//  app.get("/help",(req,res)=>{
//     //res.send("<h1>Thist is my help page ?</h1>")
//     res.send([{name:"ganesh"},{name:"kishan"}])
// })

// app.get("/contactus",(req,res)=>{
//     res.send("<h1>Thist is my contactus page ?</h1>")
// })

app.listen(port,()=>{
    console.log("Your server Up on port number "+3000)})