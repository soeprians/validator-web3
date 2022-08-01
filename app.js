const exp = require("express")
const app= exp();
const port=8080;

const mhsRouter=require("./router/mhsRouter")

app.use("/mhs",mhsRouter)

app.listen(port,function(){

    console.log("App Is Running on Port "+port);
})