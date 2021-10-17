const CSVDB = require("../model/csv");

const getCSV = async (req, res) => {
    CSVDB.findOne({ email: req.body.email }, (err, data) => {
        if (err) {
            res.status(400).send(err);
        } else {
            res.json(JSON.stringify(data));
        }
    })
}
const setCSV = async (req, res) => {
    try{
        const data = await CSVDB.findOne({ email: req.body.email })
        if (data) {
            data.csv = req.body.csv;
            await data.save();
            res.json({ success: true });
        } else {
            doc = await new CSVDB(req.body);
            await doc.save()
            res.json({ success: true });
        }
    } catch (err) {
        res.status(400).send(err);
    }
    
}
module.exports = {getCSV, setCSV};