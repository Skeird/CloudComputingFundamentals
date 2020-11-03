exports.handler = async (event) => {
    let statusCode;
    let response;
    if (event.queryStringParameters.foo) {
        const foo = event.queryStringParameters.foo;
        console.log('testParams = ', foo);
        
        response = {
            foo: foo
        }
        statusCode = 200;
    } else {
        response = {
            foo: "merde"
        }
        statusCode = 500;
    }
    return {
        statusCode: statusCode,
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify(response)
    };
};
