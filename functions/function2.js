const querystring = require('node:querystring')
const fs = require('fs')

exports.handler = async (event, context) => {

    const data = require('../data.json')
    const res = data

    console.log('Returning ', data)
    // console.log('event is - ', event.multiValueHeaders.referer)
    return {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "Content-Type",
            "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        },
        body: JSON.stringify(res)
    }
}