import { Component } from "react";

// const clearInputs = () => {
//   let email = ("");
// };

let email = "";
let emailError = "";
let password = "";
let pwdError = "";

class Login extends Component {
  
  
  
  render(){
    return <div>
      Login
      <div className = "login">
        <label>Email</label>
        <input 
        type="email" autoFocus required value = {email}
        />
        <p className = "errMsg">{emailError}</p>

      <label>Password</label>
        <input 
        type="password" required value = {password}
        />
        <p className = "errMsg">{pwdError}</p>

        

      </div>




    </div>
  }
}

export default Login;
