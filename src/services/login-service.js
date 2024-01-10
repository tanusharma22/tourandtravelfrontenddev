import axios from "axios";

export const loginHandler = async (number, password,setAlert) => {
  try {
    const {
      data: { accessToken, username },
    } = await axios.post(
      "https://tourandtravel.cyclic.app/api/auth/login",
      {
        number: number,
        password: password,
      }
    );
    console.log("Logged IN");
    console.log({ accessToken, username });
    setAlert({
      open: true,
      message: "Login Successful!",
      type: "success"
    })
    return { accessToken, username };
  } catch (err) {
    console.log("unable to login");
    setAlert({
      open: true,
      message: "Login UnSuccessful!",
      type: "success"
    })
  }
};