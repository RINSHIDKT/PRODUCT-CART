import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Admincreate.css';
import watchhouse from '../Adminlogin/watch-house-logo.png';


const Admincreate = () => {

  const navigate = useNavigate();

  const [val, setVal] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
    confirmpassword: "",
  });

  const getData = (e) => {
    e.preventDefault();
    setVal((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };

  const RegisterData = async (e) => {
    e.preventDefault();
    console.log(val);

    const res = await axios.post("http://localhost:3370/productcart/adduser", { ...val });
    console.log(res.status);
    if (res.status !== 201) {
      alert("Data Not Added");
    } else {
     alert("You Are Successfully Created")
        navigate("/adminlogin");
      
    }
  };

  return (
    <div className='admin-create-back-main'>
      <div className="wrapper fadeInDown">
        <div id="formContent">
          <Link to={"/adminlogin"}>
            <h2 className="inactive underlineHover"> Sign In </h2>
          </Link>
          <h2 className="active">Sign Up </h2>

          <div className="fadeIn first">
            <img src={watchhouse} id="icon" alt="User Icon" />
          </div>
          
          <form>
            <input  type="text"  id="username"  className="fadeIn second"  name="username"  onChange={getData}  placeholder="Enter Your User Name"  />
            <input  type="text"  id="email"  className="fadeIn third"  name="email"  onChange={getData}  placeholder="Enter Your Email" />

            <input type="text" id="phone" className="fadeIn third" name="phone" onChange={getData} placeholder="Enter Your Phone Number" />
            <div className='admin-forgot-pass-inp'>
              <input type="password" id="password" className="fadeIn third" name="password" onChange={getData} placeholder="Enter Your Password" />
              <input type="password" id="cnfrmpass" className="fadeIn third" name="confirmpassword"  placeholder=" Enter Confirm Password" onChange={getData}  />
            </div>

            <input type="submit" class="fadeIn fourth" onClick={RegisterData} value="Register"/>
            
          </form>
        </div>
      </div>
    </div>
  );
};

export default Admincreate;
