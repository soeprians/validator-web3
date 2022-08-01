const exp = require("express");
const { body } = require("express-validator")
const router = exp.Router();
const mhsController =require("../controlller/mhsController");

router.get("/getObjMhs",mhsController.getData);


module.exports=router;