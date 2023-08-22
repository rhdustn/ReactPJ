const express = require("express");
const fs = require("fs");
const path = require("path")
const app = express();

app.use("/", express.static(__dirname) );
app.get("/", (req,res)=>{
    console.log(path.join(__dirname,'index.html'))
    const page =  fs.readFileSync(path.join(__dirname,'index.html'),"utf-8")
    res.send(page);
});

const server = app.listen(8000, ()=>{
    console.log("server on");
})