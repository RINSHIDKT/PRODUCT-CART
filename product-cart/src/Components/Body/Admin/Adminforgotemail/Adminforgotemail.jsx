import React from 'react'
import './Adminforgotemail.css';
import { Link,useNavigate  } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import watchhouse from '../Adminlogin/watch-house-logo.png';

const Adminforgotemail = () => {


  const [phone, setPhone] = useState("");
  const [emp, setEmp] = useState(""); 
  const [emailMessage, setEmailMessage] = useState(""); 

  const handleChange = (e) => {
    setPhone(e.target.value);
  };

  const getEmail = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.get(`http://localhost:3370/productcart/getemail/${phone}`);
      setEmp(res.data.email);
      setEmailMessage(`Email is : ${res.data.email}`);
    } catch (error) {
      setEmailMessage("Username not found"); 
    }
  };




  return (
    <div>
        <div class="wrapper fadeInDown">
            <div id="formContent">

                <div class="fadeIn first">
                <img src={watchhouse} id="icon" alt="User Icon" />
                </div>

            
                <form>
                <input type="text" id="login" class="fadeIn second" onChange={handleChange} name="login"  placeholder="Enter Your Phone Number"/>
                <p className='admin-forgot-email-message'>{emailMessage}</p>
                <input type="submit" class="fadeIn fourth" onClick={getEmail}  value="Find Email"/>
                 
                </form>
                <div className="admin-forgot-email">
                   <Link to={"/adminlogin"}><i class="fa fa-arrow-left" aria-hidden="true"></i></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Adminforgotemail





