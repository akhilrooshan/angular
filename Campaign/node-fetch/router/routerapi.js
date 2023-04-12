const express = require('express');
const router = express.Router();
const fetch = (...args) =>
import('node-fetch').then(({default: fetch}) => fetch(...args));
router.get(`/hello`, async function (req, res) {
const url =
    'https://dummyapi.io/data/v1/user ';
const options = {
    method: 'GET',
    headers: {
       'app-id':'63a53af2c874b7fdfa631484'
    }
};
// promise syntax
fetch(url, options)
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.error('error:' + err));
try {
    let response = await fetch(url, options);
    response = await response.json();
    res.status(200).json(response);
} catch (err) {
    console.log(err);
    res.status(500).json({msg: `Internal Server Error.`});
}
});
// 
// 
// 
router.post(`/bye`, async function (req, res) {
    const url =
        'https://dummyapi.io/data/v1/user ';
    const options = {
        method: 'POST',
        headers: {
           'app-id':'63a53af2c874b7fdfa631484'
        }
    };
    // promise syntax
    fetch(url, options)
        .then(res => res.json())
        .then(json => console.log(json))
        .catch(err => console.error('error:' + err));
    try {
        let response = await fetch(url, options);
        response = await response.json();
        res.status(200).json(response);
    } catch (err) {
        console.log(err);
        res.status(500).json({msg: `Internal Server Error.`});
    }
    });
module.exports = router;