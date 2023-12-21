import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'
import watchhouse from '../Adminlogin/watch-house-logo.png';
import './Adminforgotpass.css'


const Adminforgotpass = () => {


  
  
  
  
  
      const [val,setVal]=useState({phone:"",email:"",password:""})
      const handlechange=(e)=>{
        setVal((pre)=>({...pre,[e.target.name]:e.target.value}))
          console.log(val);
      }
   
      const editPwd=async(e)=>{
          e.preventDefault()
          const res=await axios.get(`http://localhost:3370/productcart/getemail/${val.phone}`)
          let data=res.data;
          if(data.email===val.email){
            const res=await axios.patch(`http://localhost:3370/productcart/forgotepwd/${val.phone}`,{password:val.password})
        if(res.status===200){
          alert("You Are Succesfuly Changed")
        }
        console.log(res.status);
      }else{
        alert("Username and Password does not match")
      }
          }







  return (
    <div>
             <div class="wrapper fadeInDown">
            <div id="formContent">

                <div class="fadeIn first">
                <img src={watchhouse} id="icon" alt="User Icon" />
                </div>

            
                <form>
                <input type="text" id="login" class="fadeIn second" onChange={handlechange}  name="email"  placeholder="Enter Your Email"/>
                <input type="text" id="login" class="fadeIn second" onChange={handlechange}  name="phone"  placeholder="Enter Your Phone Number"/>
                <div className='admin-forgot-pass-inp'>
                  <input  type="password" id="login" class="fadeIn second" onChange={handlechange}  name="password"  placeholder="Enter New Password"/>
                  <input type="password" id="login" class="fadeIn second" onChange={handlechange}  name="confirm"  placeholder="Confirm Your Password"/>
                </div>
                <input type="submit" class="fadeIn fourth" onClick={editPwd}  value="Change Password"/>
                
                </form>
                <div className="admin-forgot-email">
                   <Link to={"/adminlogin"}><i class="fa fa-arrow-left" aria-hidden="true"></i></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Adminforgotpass










