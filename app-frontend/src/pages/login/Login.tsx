import React, { useState } from "react";
import '../../styles/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import ActivityIndicator from "../../components/indicators/ActivityIndicator.tsx";
import AuthenticationService from "../../services/AuthenticationService.tsx";

const Login = () => {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [passwordError, setpasswordError] = useState("");
    const [emailError, setemailError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState("");


    const handleLogin = (e:any) => {
        e.preventDefault();
        setIsLoading(true);
        AuthenticationService.login(email, password).then(
            (response:any) => {
              setIsLoading(false);
              localStorage.setItem("user", JSON.stringify(response.data));
              window.location.replace("/dashboard");
            },
            error => {
              const resMessage =
                (error.response &&
                  error.response.data &&
                  error.response.data.message) ||
                error.message ||
                error.toString();
                setIsLoading(false);
                setMessage(resMessage);   
            }
          );
        
      };

    const handleValidation = (event:any) => {
    let formIsValid = true;

    if (!email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
      formIsValid = false;
      setemailError("Email Not Valid");
      return false;
    } else {
      setemailError("");
      formIsValid = true;
    }

    if (!password.match(/^[a-zA-Z0-9]{8,22}$/)) {
      formIsValid = false;
      setpasswordError(
        "Only Letters and numbers and length must best min 8 Chracters and Max 22 Chracters"
      );
      return false;
    } else {
      setpasswordError("");
      formIsValid = true;
    }

    return formIsValid;
  };

  const loginSubmit = (e:any) => {
    e.preventDefault();
    setMessage("");
    if(handleValidation(e)) {
        handleLogin(e);
    }
  };

    return (
        <>
        <Container className="p-3">    
            <div className="App">
                <div className="container">
                    <div className="row d-flex justify-content-center">
                    <div className="col-md-5">
                        <div className="text-center">
                            <h1 className="header">
                                Login to your account
                            </h1>
                            <h5 className="text-black-50">Welcome back! Please enter your details</h5>
                        </div>
                        <p>&nbsp;</p>    
                        <form id="loginform" onSubmit={loginSubmit}>
                        <div className="form-group">
                            <label>Email</label>
                            <input
                            type="email"
                            className="form-control"
                            id="EmailInput"
                            name="EmailInput"
                            aria-describedby="emailHelp"
                            placeholder="Enter email"
                            onChange={(event) => setEmail(event.target.value)}
                            />
                            <small id="emailHelp" className="text-danger form-text">
                            {emailError}
                            </small>
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input
                            type="password"
                            className="form-control"
                            id="password"
                            placeholder="Password"
                            onChange={(event) => setPassword(event.target.value)}
                            />
                            <small id="passworderror" className="text-danger form-text">
                            {passwordError}
                            </small>
                        </div>
                        <button type="submit" style={{backgroundColor:"#cc5201",color:"#ffffff"}} className="form-control cvbg">
                            Sign in
                        </button>

                        {message && (
                        <div className="form-group">
                            <div className="alert alert-danger" role="alert">
                            {message}
                            </div>
                        </div>
                        )}
                        </form>
                        <p>&nbsp;</p>
                        <div className="text-center">
                            <h6 className="text-black-50">Don't have and account  <span style={{color:"#ffffff !important"}}><a href="/register">Sign up</a></span></h6>
                        </div>
                        
                    </div>
                    </div>
                </div>
            </div>
        </Container>
         <ActivityIndicator isLoading={isLoading} />
        </> 
    );
  }
  
  export default Login;
  

