const querystring = require('node:querystring')
const fs = require('fs')

var data = fs.readFileSync('./data3.json');
var myObject = JSON.parse(data);
myObject.users.push({ name: "bokolia", age: 99 })
console.log(myObject.users)
const newData = JSON.stringify(myObject)


// fs.writeFile("./data.json", newData, (err) => {
//     // Error checking
//     if (err) throw err;
//     console.log("New data added");
// });

exports.handler = async (event, context) => {
    const res = myObject;
    const body = querystring.parse(event.body)
    console.log('Input body', body)

    let dataToInsert = []
    for (let i = 0; i < body.heading.length; i++) {
        dataToInsert.push({ heading: body.heading[i], content: body.content[i] })
    }
    const dataReady = JSON.stringify(dataToInsert)
    console.log('datatoinsert', dataToInsert)
    console.log('event is - ', event.multiValueHeaders.referer)

    fs.writeFile("./data.json", dataReady, (err) => {
        // Error checking
        if (err) throw err;
        console.log("New data added");
    });

    return {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "Content-Type",
            "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        },
        body: newData
    }
}