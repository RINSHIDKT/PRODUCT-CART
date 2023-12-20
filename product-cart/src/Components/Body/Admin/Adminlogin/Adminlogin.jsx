import React from 'react'
import './Adminlogin.css';
import { Link,useNavigate  } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import watchhouse from '../Adminlogin/watch-house-logo.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Adminlogin = () => {


  

  const navigate=useNavigate()
  const [email,setEmail]=useState('')
const [password,setPassword]=useState('')


const Logining=async(e)=>{
  e.preventDefault()
try {
  const res=await axios.post("http://localhost:3370/productcart/adminlogin",{
    email:email,
    password:password
})
const data=res.data;
console.log(res.data);
if(res.status!==404){
  const admin_token=data.token
  localStorage.setItem("admin_token",JSON.stringify(admin_token))
 
        alert("You Are Successfully Loged")
        navigate("/adminhome");

}
} catch (error) {
  console.log(error);
}
}





  return (
    <div className='admin-login-back-main'>
        <div class="wrapper fadeInDown">
            <div id="formContent">
            
                <h2 class="active"> Sign In </h2>
                <Link to={"/admincreate"}><h2 class="inactive underlineHover">Sign Up </h2></Link>

                <div class="fadeIn first">
                <img src={watchhouse} id="icon" alt="User Icon" />
                </div>

            
                <form>
                <input type="text" id="login" class="fadeIn second" name="login" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"/>
                <div className='admin-forgot-email-inp'>
                  <input type="password" id="password" class="fadeIn third" name="login" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password"/>
                </div>
                <input type="submit" class="fadeIn fourth" onClick={Logining} value="Log In"/>

                  
                </form>

                <div id="formFooter">
                <Link to={"/adminforgotemail"}><div class="underlineHover">Forgot UserName ?</div></Link>
                <Link to={"/adminforgotpass"}><div class="underlineHover">Forgot Password ?</div></Link>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Adminlogin







