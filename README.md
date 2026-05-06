# BL.EN.U4AID23056

#register.js
async function register() {
  const response = await fetch(
    "http://20.207.122.201/evaluation-service/register",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: "vobilisettivyvanth2811@gmail.com",
        name: "Vobilisetti Vyvanth",
        mobileNo: "7330956143",
        githubUsername: "Vyvanth",
        rollNo: "BL.EN.U4AID23056",
        accessCode: "PTBMmQ" ,
      }),
    }
  );

  const data = await response.json();

  console.log(data);
}

register();

#output
{
  email: 'vobilisettivyvanth2811@gmail.com',
  name: 'vobilisetti vyvanth',
  rollNo: 'bl.en.u4aid23056',
  accessCode: 'PTBMmQ',
  clientID: 'ce8b8d45-5a81-4b6e-84c1-31bb650d1aa4',
  clientSecret: 'jbEqvhXxhzyKXueS'
}

#auth.js
async function getToken() {
  const response = await fetch(
    "http://20.207.122.201/evaluation-service/auth",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: "vobilisettivyvanth2811@gmail.com",
        name: "Vobilisetti Vyvanth",
        rollNo: "BL.EN.U4AID23056",
        accessCode:  "PTBMmQ" ,
        clientID: "ce8b8d45-5a81-4b6e-84c1-31bb650d1aa4",
        clientSecret: "jbEqvhXxhzyKXueS",
      }),
    }
  );

  const data = await response.json();

  console.log(data);
}

getToken();

#output
{
  token_type: 'Bearer',
  access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJ2b2JpbGlzZXR0aXZ5dmFudGgyODExQGdtYWlsLmNvbSIsImV4cCI6MTc3ODA1OTU1NiwiaWF0IjoxNzc4MDU4NjU2LCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiNDJhOWI2YTctZmJkMS00ODdmLWE4ZTQtNDNiOTM1Nzg2MzljIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoidm9iaWxpc2V0dGkgdnl2YW50aCIsInN1YiI6ImNlOGI4ZDQ1LTVhODEtNGI2ZS04NGMxLTMxYmI2NTBkMWFhNCJ9LCJlbWFpbCI6InZvYmlsaXNldHRpdnl2YW50aDI4MTFAZ21haWwuY29tIiwibmFtZSI6InZvYmlsaXNldHRpIHZ5dmFudGgiLCJyb2xsTm8iOiJibC5lbi51NGFpZDIzMDU2IiwiYWNjZXNzQ29kZSI6IlBUQk1tUSIsImNsaWVudElEIjoiY2U4YjhkNDUtNWE4MS00YjZlLTg0YzEtMzFiYjY1MGQxYWE0IiwiY2xpZW50U2VjcmV0IjoiamJFcXZoWHhoenlLWHVlUyJ9._rp0IlvbcZ6ad4eUkxUMvaeLYoe3OCbANBmOMMRni8E',
  expires_in: 1778059556
}
