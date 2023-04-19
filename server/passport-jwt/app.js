const express = require("express")
const app = express()



app.use(express.urlencoded({extended:true}))
app.use(express.json())


app.get("/",(req,res)=>{
	return res.status(200).send("<h1>Welcome To FullStack Application</h1>")
})
app.use((req,res,next)=>{
	return res.status(200).send("<h1>Routes is problem please check</h1>")
})
app.use((err,req,res,next)=>{
	return res.status(200).send("<h1>Server is Prolem please chack </h1>")
})

module.exports=app;
