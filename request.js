const request = require('request');

URL = "https://amazon.com";

const callUrlUsingRequest = (callback) => {
    request(URL, {json:true}, (err, res, body) => {
        if(err){
            return callback(err);
        }
        return callback(body);
    });
}
module.exports.callApi = callUrlUsingRequest;