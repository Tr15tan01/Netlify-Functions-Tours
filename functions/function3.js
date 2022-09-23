const querystring = require('node:querystring')
const fs = require('fs')

// var data = fs.readFileSync('./data.json');
// var myObject = JSON.parse(data);

// const newData = JSON.stringify(myObject)

//TODO 💪 does not work, must overwrite this object

exports.handler = async (event, context) => {
    // const res = myObject;
    const body = querystring.parse(event.body)
    console.log('Input body', body)


    // for (let i = 0; i < body.length; i++) {
    //      body.push({ heading: body.heading[i], content: body.content[i] })
    //     console.log('inserting?')
    // }
    let newBody = []

    //TODO 👆 3 is hardcoded here, took me mych time to find out that body has no length... 🤔

    for (let i = 0; i < 3; i++) {
        newBody.push({ heading: body.heading[i], content: body.content[i] })
        console.log('inserting?', i)
    }

    console.log('data to insert is - ', newBody)

    const dataReady = JSON.stringify(newBody)
    // console.log('datatoinsert', dataReady)
    // console.log('event is - ', event.multiValueHeaders.referer)

    fs.writeFile("./data.json", dataReady, (err) => {
        // Error checking
        if (err) throw err;
        console.log("New data added", dataReady);
    });

    return {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "Content-Type",
            "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        },
        body: dataReady
    }
}