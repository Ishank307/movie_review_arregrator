const express= require("express")
const router= express.Router()

// just structuring the routes

router.post("/",(req,res)=>{
    res.send("Create movie");
});

router.get("/",(req,res)=>{
    res.send("Get all movies");
});

router.get("/:id",(req,res)=>{
    res.send("Get movies by id");
});

router.put("/:id",(req,res)=>{
    res.send("Update movie based on id");
});

router.delete("/:id",(req,res)=>{
    res.send("Delete movies")
});

module.exports= router;