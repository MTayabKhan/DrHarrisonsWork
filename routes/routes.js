
const router = require('express').Router();
const Hunter = require('../db');

const data = [];
router.get('/', (req, res) => res.send('Cheer Up London'));


router.get(`/getall`, (req, res, next) => {
    Hunter.find((err, hunter) => {
        if (err)
            return next({ status: 400, message: err.message });
        else
            return res.json(hunter)
    })
});

router.get('/get/:id', (req, res) => {
    const id = Number.parseInt(req.params.id);

    if (id == null || undefined || id == NaN)
        return next({ status: 400, message: "invalid id" + id });
    else if (id > data.length)
        return next({ status: 404, message: "No person found with id" + id })
    res.json(data[id]);
});

router.delete(`/delete/:id`, (req, res, next) => {
    const id = req.params.id;
    Hunter.findByIdAndDelete(id, (err) => {
        if (err)
            return next({ status: 400, message: err.message });
        else
            return res.sendStatus(204);
        

    })
   
});



router.post('/create', (req, res,) => {

    const hunter = req.body;

    new Hunter(hunter).save().then(() => {
        res.status(201).send("Succesfully created");

    }).catch(err => next({ status: 400, message: err.message }));

});

router.put("/update/:id", (req, res, next) => {
    const newHunter = req.body;
    const id = req.params.id;
    Hunter.findByIdAndUpdate(id, newHunter, (err, hunter) => {
        if (err)
            return next({ status: 400, message: err.message });
        else
            return res.status(202).json(hunter);
            
    })

});

module.exports = router;
