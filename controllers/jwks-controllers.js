const fs = require('fs');
const jose = require('node-jose');
const express = require('express');
const router = express.Router();

const handleJwks = (req, res) => {
    console.log("handle jwks")
    // read jwks from file
    const ks = fs.readFileSync('keys.json')
        jose.JWK.asKeyStore(ks.toString()).then(async keyStore => {
            //send public key
            res.send(keyStore.toJSON());
    })
}

router.get('/', handleJwks);

exports.jwksController = router;

