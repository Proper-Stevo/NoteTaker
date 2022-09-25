const router = require('express').Router();

const fs = require('fs');


router.get("/", async (req, res) => {

    fs.readFile("./db/db.json", "utf-8", (err, data) => {
        if (err) {
            res.json(err);
        } else {
            const index = JSON.parse(data)
            res.json(index);
        }
    })
});

// Get Notes 
router.get("./notes", async (req, res) => {

    fs.readFile("./db/db.json", "utf-8", (err, data) => {
        if (err) {
            res.json(err);
        } else {
            const notes = JSON.parse(data)
            res.json(notes);
        }
    })
});

// Display Notes 
router.post("/", async (req, res) => {

    fs.readFile("./db/db.json", "utf-8", (err, data) => {
        if (err) {
            res.json(err);
        } else {
            const newNote = req.body;
            const notes = JSON.parse(data);// add ID here
            notes.push(newNote);
            fs.writeFile("./db/db.json", JSON.stringify(notes, null, "\t"), (err) => {
                if (err) {
                    res.json(err);
                } else {
                    res.json(notes)
                }
            })

        }
    })
});

router.delete("/:id", async (req, res) => {

    if(req.body) {
        fs.readFile('./db/db.json', 'utf-8', (err, data) =>{
            if(err) {
                res.json(err);
            } else {
                const notes = JSON.parse(data);
                for (let i = 0; i < notes.length; i++) {
                    const newNote = notes[i];
                     if (req.body === newNote){
                    notes.spliced(i,1);
                     }
              }
        fs.writeFile("./db.db.json", JSON.stringify(notes), (err) => {
            err? console.error(err) : console.log("Updated!")
            res.json(req.body);
        })
    }
})
    }
});


module.exports = router;