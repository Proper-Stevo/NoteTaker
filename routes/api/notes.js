const express = require('express').Router();

const fs = require('fs');

router.get("/", async (req, res) => {

    fs.readFile("./db/db.json", "utf-8", (err, data)=>{
        if(err){
            res.json(err);
        }else{
            const index = JSON.parse(data)
            res.json(index);
        }
    })
});