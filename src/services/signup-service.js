import axios from "axios";

export const signupHandler = async (username, number, emailid, password,setAlert) => {
  try {
    const data = await axios.post(
      "https://tourandtravel.cyclic.app/api/auth/register",
      {
        username: username,
        number: number,
        emailid: emailid,
        password: password,
      }
    );
    console.log("Signed Up");
    console.log(data);
    setAlert({
      open: true,
      message: `Account Created:: username - ${username}`,
      type: "success"
    })
    
  } catch (err) {
    console.log("error adding user to database");
  }
};