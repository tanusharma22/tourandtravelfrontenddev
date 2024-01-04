import axios from "axios";

export const signupHandler = async (username, number, emailid, password) => {
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
    
  } catch (err) {
    console.log("error adding user to database");
  }
};