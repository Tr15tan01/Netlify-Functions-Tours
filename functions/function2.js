const querystring = require('node:querystring')
const fs = require('fs')

// var data = fs.readFileSync('./data.json');
// var myObject = JSON.parse(data);
// myObject.racers.push({ name: "natalia", age: 14 })
// console.log(myObject.racers)
// const newData = JSON.stringify(myObject)


// fs.writeFile("./data.json", newData, (err) => {
//     // Error checking
//     if (err) throw err;
//     console.log("New data added");
// });

exports.handler = async (event, context) => {

    const data = require('../data.json')
    const res = data
    console.log('user is  - ', data)
    // const body = JSON.stringify(event.body.name)
    // const body = querystring.parse(event.body).name
    console.log('eve', data)
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