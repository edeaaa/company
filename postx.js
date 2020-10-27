// postx.js
const fetch = require('node-fetch');

let companyUrl = 'http://localhost:8080/company';

async function post(url, objekt) {
    const respons = await fetch(url, {
        method: "POST",
        body: JSON.stringify(objekt),
        headers: { 'Content-Type': 'application/json' }
    });
    if (respons.status !== 200) // OK
        throw new Error(respons.status);
    return await respons.json();
}

async function main(url) {
    try {
        let respons = await post(url, { name: 'Coop', hours: 37});
        console.log(respons);
    } catch (fejl) {
        console.log(fejl);
    }
    process.exit();
}
main(companyUrl);