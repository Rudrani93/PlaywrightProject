
const { test, expect } = require('@playwright/test');
const { request } = require('http');
var userid;
const apiKey = 'reqres-free-v1';


test("Create user", async ({ request }) => {
    
    const response = await request.post('https://reqres.in/api/users',

        {

            headers: { "x-api-key": apiKey, "Accept": "application/json" },
            data: {"name":"Julie","job":"Actress"}


        });


    expect(response.status()).toBe(201)
    var createdData = await response.json()
    userid = createdData.id
    console.log(userid);
    console.log(createdData)
    console.log(response.status())
    expect(createdData.name).toBe("Julie")
    expect(createdData.job).toBe("Actress")
    expect(createdData.createdAt).toBeDefined()

})


test("Update user", async ({ request }) => {

    const response = await request.put('https://reqres.in/api/users/' + userid,
        {

            headers: { "x-api-key": apiKey, "Accept": "application/json" },
            data: { "name": "Sita", "job": "Actress" }


        });

    expect(response.status()).toBe(200)
    console.log(response.status())

    var updatedData = await response.json()
    console.log(updatedData)
    expect(updatedData.name).toBe("Sita")

})

test("Delete user", async ({ request }) => {
    const response = await request.delete('https://reqres.in/api/users/' + userid, {

        headers: {
            "x-api-key": apiKey
        }
    })
    expect(response.status()).toBe(204)

})