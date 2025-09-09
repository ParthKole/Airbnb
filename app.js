const express=require("express");
const app=express();
const mongoose=require("mongoose");


async function main(){
    mongoose.connect("mongodb://127.0.0.1:27017/wonderlust")
}

main()
.then(()=>{
    console.log("connected to DB...");
})
.catch((err)=>{
    console.log(err);
})
//hello




app.listen(3000,(req,res)=>{
    console.log("server is listening at port 3000...");
})

app.get("/",(req,res)=>{
    res.send("on root page");
})


