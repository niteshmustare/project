import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { adminlogin, forgotPassword, login } from '../Service/Service';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './login.css'; // Import your external CSS file here

export default function Login() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ email :"", password: "" , confirmPassword: ""});
    const [loginError, setLoginError] = useState(false);
    const [isLoggedIn , setIsLoggedIn] = useState(false);
    const [gmail , setGmail] = useState("");

    const handleChange = (e) => {
        if(e.target.name === "email")
            setGmail(e.target.value);
    
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
         e.preventDefault();
        try {
            console.log(formData);
            if(formData.confirmPassword === formData.password){
            const result = await login(formData);
            console.log(result);
            if (result.status === 200) {
                alert(` welcome back you have successfully loggedin `);
                localStorage.setItem("token", "Bearer "+result.data.jwt);
               // localStorage.setItem("role", "user");
                localStorage.setItem("role", result.data.role);
                localStorage.setItem("userID",result.data.userId);
                setIsLoggedIn(true);
                navigate("/");
             }else{
                setLoginError(true);
                console.log(result);
            }
        }else {
            alert("password should match with confirmPassword")
        }
        } catch (error) {
            console.log(error);
            alert(" please check your Credentials");
            setLoginError(true);
        }
    }

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //         // Implement your login functionality here
    //     } catch (error) {
    //         console.log(error);
    //         setLoginError(true);
    //     }
    // }

    const handleForgotPassword = async () => {
       // e.preventDefault();
       console.log(gmail);
        if (gmail === "") {
            alert("Enter Email to reset password");
        }else{
        console.log(gmail);
        const result = await forgotPassword(gmail);
        console.log("handleForgotPassword ",result);
        sessionStorage.setItem("email" , `${gmail}`)
        sessionStorage.setItem("verifyToken" , `${result.data}`);
        navigate("/resetPassword");
         }
    }
    return (
        <>
            {/* <Navbar/> */}
            <div className="main">
            <div className="login-container">
                <div className="user-login">User Login</div>

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        {/* <label>Email</label> */}
                        <input type="email" className="form-control" placeholder="Enter Email" name="email" onChange={handleChange} />
                    </div>

                    <div className="form-group">
                        {/* <label>Password</label> */}
                        <input type="password" className="form-control" placeholder="Enter Password" name="password" onChange={handleChange} />
                    </div>

                    <div className="form-group">
                        {/* <label>Confirm Password</label> */}
                        <input type="password" className="form-control" placeholder="Confirm Password" name="confirmPassword" onChange={handleChange} />
                    </div>
                
                    <button type="submit" id="btn">Log In</button>
                </form>

                {/* <div className="forgot-password"> */}
                <button type="input" onClick={handleForgotPassword} id="btn">forgot possword</button>  
                    {/* <a href="#" onClick={handleForgotPassword}>Forgot Password?</a> */}
                {/* </div> */}

                {loginError && <div className="alert alert-danger mt-3">Invalid Mail or Password</div>}
            </div>
            </div>      
        </>
    );
}
