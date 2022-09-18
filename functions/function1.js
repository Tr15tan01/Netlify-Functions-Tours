const querystring = require('node:querystring')
const fs = require('fs')

var data = fs.readFileSync('./data.json');
var myObject = JSON.parse(data);
myObject.users.push({ name: "natalia", age: 14 })
console.log(myObject.users)
const newData = JSON.stringify(myObject)


fs.writeFile("./data.json", newData, (err) => {
    // Error checking
    if (err) throw err;
    console.log("New data added");
});

exports.handler = async (event, context) => {

    const user = require('../text.json')
    const res = { ame: "This is fitst serverless function", user: user }
    console.log('user is  - ', user)
    // const body = JSON.stringify(event.body.name)
    const body = querystring.parse(event.body).name
    console.log('eve', body)
    console.log('event is - ', event.multiValueHeaders.referer)
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