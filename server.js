var express=require("express");
var dbconfig=require("./config/db.config")
var bodyParser=require("body-parser")
var mongoose=require("mongoose")
var app=express();
app.use(bodyParser.json())
mongoose.Promise=global.Promise
mongoose.connect(dbconfig.url,{ useNewUrlParser: true }).then(()=>
    console.log("Db Connected")
).catch((err)=>console.log(err));


app.get('/',(req,res)=>{
    res.json({"message":"Hi..Welcome to your Vault Server"})
})
require("./app/routes/vault.route")(app)
app.listen(3000,()=>{
console.log("Server started at 3000");
})