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