const express = require('express').Router();

const fs = require('fs');
const router = require('.');

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

router.get("/", async (req, res) => {

    fs.readFile("./db/db.json", "utf-8", (err, data)=>{
        if(err){
            res.json(err);
        }else{
            const notes = JSON.parse(data)
            res.json(notes);
        }
    })
});