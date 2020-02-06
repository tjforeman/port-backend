const router = require('express').Router();
const db = require('./model.js');

router.post('/', async (req,res) => {
const data_info = req.body
try{
    const new_data = await db.add(data_info)
    res.status(200).json(new_data)
}catch(err){
    console.error(err)
    res.status(500).json({"sorry the requested input could not be handled, error": err.message})
}

})

router.get('/', async (req,res) => {
    try{
        const result = await db.find();
        res.status(200).json(result);
    } catch(err){
        console.error(err)
        res.status(500).json({"Sorry the request could not be handled, error:" : err.message})
    }
})




module.exports = router