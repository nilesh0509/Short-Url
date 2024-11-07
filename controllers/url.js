const {nanoid} = require("nanoid")
const url = require('../models/url')


async function handleGenerateNewShortURL(req,res){
    const body = req.body;
    if(!body.url) return res.status(400).json({error:'URL is required'})
    const shortId = nanoid(8);

    await url.crate({
        shortId : shortID,
        redirectURL: body.url,
        visitHistory: [],
    });

    return res.json({id: shortID});

}

module.exports = {
    handleGenerateNewShortURL,
}