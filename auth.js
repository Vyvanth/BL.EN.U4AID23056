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