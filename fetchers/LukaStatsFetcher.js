'use strict';

const request = require('request');

class LukaStatsFetcher {

    getStats(){
        var response;
        console.log('Getting the stats for LuKa...');
        request('http://luka.chilepool.cl:8117/stats', function(error, response, body){
            console.log('Status: ' + response.statusCode);
            if (!error && response.statusCode == 200){
                console.log('Body: ' + body);
                response = body;
            } else {
                console.log(body);
                response = 'Something went wrong: ' + error;
            }
            return response;
        });
        return response;
    }
}

module.exports = LukaStatsFetcher;
