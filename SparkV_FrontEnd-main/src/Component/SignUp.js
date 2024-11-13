import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { handleError, handleSuccess } from "../util";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const SignUp = () => {
	const [signupInfo, setSignInfo]=useState({
		name: "",
		email: "",
		password: "",
		confirmpassword: "",
	});
	const navigate=useNavigate();
	const validateEmail = (email) => {
		const emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(email);
	};
	const validatePassword = (password) => {
		const minLength=6;
		const hasUpperCase=/[A-Z]/.test(password);
		const hasLowerCase=/[a-z]/.test(password);
		const hasNumber=/[0-9]/.test(password);
		const hasSpecialChar=/[!@#$%^&*(),.?":{}|<>]/.test(password);
		if(password.length<minLength){return "Password must be at least 8 characters long";}
		if(!hasUpperCase){return "Password must contain at least one uppercase letter";}
		if(!hasLowerCase){return "Password must contain at least one lowercase letter";}
		if(!hasNumber){return "Password must contain at least one number";}
		if(!hasSpecialChar){return "Password must contain at least one special character";}
		return "";
	};
	const handleSignup = async (e) => {
		e.preventDefault();
		const {name, email, password, confirmpassword}=signupInfo;
		if(!name || !email || !password || !confirmpassword){return handleError("Name, email, and passwords are required");}
		if(!validateEmail(email)){return handleError("Invalid email format");}
		const passwordError=validatePassword(password);
		if(passwordError){return handleError(passwordError);}
		if(password!==confirmpassword){return handleError("Passwords do not match");}
		try{
			// const url="http://localhost:3004/api/signup";
			const url="https://sparkv-backend.onrender.com/api/signup";
			const response = await fetch(url, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					"Access-Control-Allow-Origin": "*", // Optional, not required
				},
				body: JSON.stringify(signupInfo),
			});
			if(!response.ok){
				const errorResponse=await response.json();
				throw new Error(errorResponse.message || "An error occurred");
			}
			const result=await response.json();
			const {success, message}=result;
			if (success) {
				handleSuccess(message);
				setTimeout(() => {navigate("/login");},1000);
				console.log(result);
			}
		}catch(err){
			handleError(err.message);
			console.error("Signup error:",err);
		}
	};

	const handleChange = (e) => {
		const {name, value}=e.target;
		console.log(name, value);
		const copyLoginInfo={ ...signupInfo };
		copyLoginInfo[name]=value;
		setSignInfo(copyLoginInfo);
	};
	return (
		<div className="signup-div">
			<div className="signup-box rounded-4 py-2 pt-4">
				<h1 style={{color:"#011b2c"}}>&nbsp;Sign Up</h1>
				<input onChange={handleChange} value={signupInfo.name} type="text" name="name" className="input-field" placeholder="Name" />
				<input onChange={handleChange} value={signupInfo.email} type="email" name="email" className="input-field" placeholder="Email" />
				<input onChange={handleChange} value={signupInfo.password} type="password" name="password" className="input-field" placeholder="Password" />
				<input onChange={handleChange} value={signupInfo.confirmpassword} type="password" name="confirmpassword" className="input-field" placeholder="Confirm Password" />
				<div className="register mt-1">
					<form id="register-form" onSubmit={handleSignup}>
						<button type="submit" className="signup-button register-btn btn rounded btn-primary" title="Signup">Register</button>
					</form>
				</div>
				<p className="already-acc">
					<nobr>
						Already have an account?&nbsp;&nbsp;
						<Link to="/login" className="login-link">Log in</Link>
					</nobr>
				</p>
			</div>
			<ToastContainer />
		</div>
	);
};

export default SignUp;
