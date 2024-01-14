import "./Auth.css";
import { validateNumber, validatePassword } from "../../utils";
import { loginHandler } from "../../services";
import { useAuth,useAlert} from "../../context";

let isNumberValid, isPasswordValid;

export const AuthLogin = () => {
  const { authDispatch, number, password } = useAuth();
  const { setAlert } = useAlert();


  const handleNumberChange = (event) => {
    isNumberValid = validateNumber(event.target.value);
    if (isNumberValid) {
      setAlert({
        open: true,
        message: "Valid Number",
        type: "success"
      })
      authDispatch({
        type: "NUMBER",
        payload: event.target.value,
      });
    } else {
      setAlert({
        open: true,
        message: "Invalid Number",
        type: "error"
      })
    }
  };

  const handlePasswordChange = (event) => {
    isPasswordValid = validatePassword(event.target.value);
    if (isPasswordValid) {
      setAlert({
        open: true,
        message: "Valid Password",
        type: "success"
      })
      authDispatch({
        type: "PASSWORD",
        payload: event.target.value,
      });
    } else {
      setAlert({
        open: true,
        message: "Invalid Password",
        type: "error"
      })
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (isNumberValid && isPasswordValid) {
      try{
      const { accessToken, username } = await loginHandler(number, password,setAlert);
      authDispatch({
        type: "SET_ACCESS_TOKEN",
        payload: accessToken,
      });
      authDispatch({
        type: "SET_USER_NAME",
        payload: username,
      });}
      
      catch(err){console.log("unable to login lele")
      setAlert({
        open: true,
        message: "Login UnSuccessful!",
        type: "error"
      })}
     

    }
    authDispatch({
      type: "CLEAR_USER_DATA",
    });
    authDispatch({
      type: "SHOW_AUTH_MODAL",
    });
  };

  const handleTestCredentialsClick = async () => {
    const { accessToken, username } = await loginHandler(
      9313010778,
      "Jakp@56796",
      setAlert
    );
    authDispatch({
      type: "SET_ACCESS_TOKEN",
      payload: accessToken,
    });
    authDispatch({
      type: "SET_USER_NAME",
      payload: username,
    });
    authDispatch({
      type: "CLEAR_USER_DATA",
    });
    authDispatch({
      type: "SHOW_AUTH_MODAL",
    });
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleFormSubmit}>
        <div className="d-flex direction-column lb-in-container">
          <label className="auth-label">
            Mobile Number <span className="asterisk">*</span>{" "}
          </label>
          <input
            defaultValue={number}
            type="number"
            className="auth-input"
            maxLength="10"
            placeholder="Enter Mobile Number"
            required
            onChange={handleNumberChange}
          />
        </div>
        <div className="d-flex direction-column lb-in-container">
          <label className="auth-label">
            Password <span className="asterisk">*</span>{" "}
          </label>
          <input
            defaultValue={password}
            className="auth-input"
            placeholder="Enter Password"
            type="password"
            required
            onChange={handlePasswordChange}
          />
        </div>
        <div>
          <button className="button btn-primary btn-login cursor">Login</button>
        </div>
      </form>
      <div className="cta">
        <button
          className="button btn-outline-primary cursor-pointer"
          onClick={handleTestCredentialsClick}
        >
          Login with Test Credentials
        </button>
      </div>
    </div>
  );
};